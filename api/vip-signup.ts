// Função serverless da Vercel — recebe o cadastro do formulário "Lista VIP"
// e adiciona o contato na lista do Brevo. A chave de API fica só na
// variável de ambiente BREVO_API_KEY, configurada no painel da Vercel
// (nunca no código-fonte).

const BREVO_LIST_ID = 3;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método não permitido' });
    return;
  }

  const { name, email, whatsapp } = req.body || {};

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    res.status(400).json({ error: 'Nome inválido' });
    return;
  }
  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    res.status(400).json({ error: 'E-mail inválido' });
    return;
  }
  if (!whatsapp || typeof whatsapp !== 'string' || whatsapp.replace(/\D/g, '').length < 10) {
    res.status(400).json({ error: 'WhatsApp inválido' });
    return;
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY não configurada nas variáveis de ambiente da Vercel');
    res.status(500).json({ error: 'Cadastro temporariamente indisponível. Tente novamente em instantes.' });
    return;
  }

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
        attributes: {
          FIRSTNAME: name.trim(),
          SMS: whatsapp.replace(/\D/g, ''),
        },
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok) {
      const detail = await brevoRes.text();
      console.error('Erro da API do Brevo:', brevoRes.status, detail);
      res.status(502).json({ error: 'Não foi possível concluir o cadastro. Tente novamente.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Erro ao chamar a API do Brevo:', err);
    res.status(502).json({ error: 'Não foi possível concluir o cadastro. Tente novamente.' });
  }
}
