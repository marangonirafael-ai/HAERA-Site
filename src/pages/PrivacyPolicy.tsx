import React from 'react';
import SiteLayout from '@/components/site/SiteLayout';
import { BRAND } from '@/lib/brand';

const PrivacyPolicy: React.FC = () => (
  <SiteLayout>
    <section className="pt-32 pb-24 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
      <div className="max-w-3xl mx-auto">
        <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>Privacidade</span>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4" style={{ color: BRAND.GRAPHITE }}>Política de Privacidade</h1>
        <p className="font-sans text-sm mb-12" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>Última atualização: 25 de agosto de 2026.</p>
        <div className="font-sans text-sm md:text-base leading-relaxed space-y-8" style={{ color: BRAND.GRAPHITE, opacity: 0.85 }}>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Dados coletados</h2><p>Na inscrição da Lista VIP, coletamos nome e e-mail. Ao realizar uma compra, coletamos também os dados necessários para processar o pedido: nome completo, CPF, e-mail, telefone, endereço de entrega e os dados de pagamento informados no checkout.</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Base legal</h2><p>Tratamos os dados da Lista VIP com base no seu consentimento, dado no momento do cadastro. Os dados de uma compra são tratados para a execução do contrato de compra e venda e para cumprimento de obrigações legais, como a emissão de nota fiscal.</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Uso e armazenamento</h2><p>Os contatos da Lista VIP são armazenados na plataforma Brevo, usada para gestão de e-mails. As compras são processadas pela Yampi (loja e checkout), com pagamento via Mercado Pago, cálculo e etiqueta de frete pelo Melhor Envio, e gestão de estoque e emissão fiscal pelo Bling.</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Dados de pagamento</h2><p>A Haëra não recebe nem armazena o número do seu cartão em nenhum momento. O pagamento é processado diretamente pelo Mercado Pago, dentro do ambiente seguro do checkout da Yampi.</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Compartilhamento</h2><p>Não vendemos dados pessoais. Compartilhamos os dados estritamente com os fornecedores necessários para operar o site, processar pedidos e cumprir obrigações legais: Vercel (hospedagem), Brevo (e-mail), Yampi (loja e checkout), Mercado Pago (pagamento), Melhor Envio (frete) e Bling (nota fiscal e estoque).</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Retenção</h2><p>Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas nesta política e as obrigações legais aplicáveis, como o prazo de guarda fiscal de notas emitidas.</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Seus direitos</h2><p>Você pode solicitar acesso, correção, exclusão ou informações sobre o tratamento dos seus dados, além de cancelar comunicações a qualquer momento pelo link de descadastro nos e-mails ou pelo contato abaixo.</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Contato</h2><p>Para dúvidas sobre privacidade ou exercer seus direitos, escreva para <a className="underline" href="mailto:contato@haera.life">contato@haera.life</a>.</p></section>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default PrivacyPolicy;
