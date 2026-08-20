const DEFAULT_BREVO_LIST_ID = 3;
const BREVO_TIMEOUT_MS = 8_000;

interface VercelRequest {
  method?: string;
  body?: { name?: unknown; email?: unknown; consent?: unknown; company?: unknown };
}

interface VercelResponse {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponse;
  json(body: Record<string, unknown>): void;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getBrevoListId() {
  const configuredId = process.env.BREVO_LIST_ID;
  if (!configuredId) return DEFAULT_BREVO_LIST_ID;

  const listId = Number(configuredId);
  return Number.isInteger(listId) && listId > 0 ? listId : null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Método não permitido' });
    return;
  }

  const { name, email, consent, company } = req.body || {};

  // Campo invisível: envios automatizados que o preenchem não chegam ao Brevo.
  if (typeof company === 'string' && company.trim()) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 120) {
    res.status(400).json({ error: 'Nome inválido' });
    return;
  }
  if (!email || typeof email !== 'string' || email.length > 254 || !isValidEmail(email.trim())) {
    res.status(400).json({ error: 'E-mail inválido' });
    return;
  }
  if (consent !== true) {
    res.status(400).json({ error: 'É necessário autorizar o recebimento de comunicações para entrar na lista.' });
    return;
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = getBrevoListId();
  if (!apiKey || !listId) {
    console.error('Configuração do Brevo ausente ou inválida');
    res.status(500).json({ error: 'Cadastro temporariamente indisponível. Tente novamente em instantes.' });
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), BREVO_TIMEOUT_MS);

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        attributes: { FIRSTNAME: name.trim() },
        listIds: [listId],
        updateEnabled: true,
      }),
      signal: controller.signal,
    });

    if (!brevoRes.ok) {
      const detail = await brevoRes.text();
      console.error('Erro da API do Brevo:', brevoRes.status, detail);
      res.status(502).json({ error: 'Não foi possível concluir o cadastro. Tente novamente.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      console.error('A API do Brevo excedeu o tempo limite');
      res.status(504).json({ error: 'O serviço de cadastro demorou para responder. Tente novamente.' });
      return;
    }
    console.error('Erro ao chamar a API do Brevo:', err);
    res.status(502).json({ error: 'Não foi possível concluir o cadastro. Tente novamente.' });
  } finally {
    clearTimeout(timeout);
  }
}
