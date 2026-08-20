import React from 'react';
import SiteLayout from '@/components/site/SiteLayout';
import { BRAND } from '@/lib/brand';

const PrivacyPolicy: React.FC = () => (
  <SiteLayout>
    <section className="pt-32 pb-24 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
      <div className="max-w-3xl mx-auto">
        <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>Privacidade</span>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4" style={{ color: BRAND.GRAPHITE }}>Política de Privacidade</h1>
        <p className="font-sans text-sm mb-12" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>Última atualização: 20 de agosto de 2026.</p>
        <div className="font-sans text-sm md:text-base leading-relaxed space-y-8" style={{ color: BRAND.GRAPHITE, opacity: 0.85 }}>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Dados coletados</h2><p>Na inscrição da Lista VIP, coletamos nome e e-mail para cadastrar seu interesse e enviar comunicações sobre a Haëra e seus produtos.</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Uso e armazenamento</h2><p>Os dados são tratados para administrar a Lista VIP e enviar as comunicações autorizadas. Os contatos são armazenados na plataforma Brevo, usada pela Haëra para gestão de e-mails.</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Compartilhamento</h2><p>Não vendemos dados pessoais. Compartilhamos os dados estritamente com fornecedores necessários para operar o site e as comunicações, como a Vercel e o Brevo.</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Seus direitos</h2><p>Você pode solicitar acesso, correção, exclusão ou informações sobre o tratamento dos seus dados, além de cancelar comunicações a qualquer momento pelo link de descadastro nos e-mails ou pelo contato abaixo.</p></section>
          <section><h2 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>Contato</h2><p>Para dúvidas sobre privacidade ou exercer seus direitos, escreva para <a className="underline" href="mailto:contato.haera@gmail.com">contato.haera@gmail.com</a>.</p></section>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default PrivacyPolicy;
