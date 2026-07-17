import React from 'react';
import SiteLayout from '@/components/site/SiteLayout';
import { BRAND } from '@/lib/brand';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="font-serif text-2xl md:text-3xl font-light mb-4" style={{ color: BRAND.WINE }}>{title}</h2>
    <div className="font-sans text-sm md:text-base leading-relaxed space-y-3" style={{ color: BRAND.GRAPHITE, opacity: 0.85 }}>
      {children}
    </div>
  </div>
);

const Trocas: React.FC = () => {
  return (
    <SiteLayout>
      <section className="pt-32 pb-24 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>
            Política
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4" style={{ color: BRAND.GRAPHITE }}>
            Política de Trocas e Devoluções
          </h1>
          <p className="font-sans text-sm mb-12" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>
            Na HAËRA, buscamos oferecer produtos de alta qualidade e uma experiência de compra transparente. Caso seja necessário solicitar uma troca ou devolução, siga as orientações abaixo.
          </p>

          <Section title="1. Direito de Arrependimento">
            <p>Conforme previsto no Código de Defesa do Consumidor, compras realizadas pela internet podem ser canceladas em até 7 (sete) dias corridos após o recebimento do pedido.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Para solicitar o cancelamento, entre em contato através dos nossos canais de atendimento informando o número do pedido.</li>
              <li>Após a solicitação, forneceremos as orientações para devolução do produto.</li>
              <li>O reembolso será realizado após o recebimento e análise do item devolvido.</li>
            </ul>
          </Section>

          <Section title="2. Produto Avariado ou com Defeito">
            <p>Caso o produto apresente qualquer uma das situações abaixo:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Embalagem danificada no transporte;</li>
              <li>Lacre violado no recebimento;</li>
              <li>Produto diferente do solicitado;</li>
              <li>Defeito de fabricação;</li>
              <li>Alteração incomum de cor, odor ou aspecto;</li>
            </ul>
            <p>entre em contato conosco em até 7 (sete) dias corridos após o recebimento.</p>
            <p>Para agilizar a análise, poderá ser solicitado o envio de fotos da embalagem, do lote e da validade do produto.</p>
            <p>Após a confirmação do problema, a HAËRA poderá realizar:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>a substituição do produto;</li>
              <li>o reenvio do pedido;</li>
              <li>ou o reembolso integral da compra.</li>
            </ul>
          </Section>

          <Section title="3. Condições para Troca ou Devolução">
            <p>Para que a solicitação seja aprovada, o produto deverá ser devolvido com:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Embalagem original;</li>
              <li>Todos os itens recebidos;</li>
              <li>Número do pedido identificado.</li>
            </ul>
            <p>Por questões sanitárias e de segurança alimentar, produtos consumidos, adulterados ou armazenados inadequadamente poderão não ser elegíveis para troca ou devolução, exceto nos casos previstos em lei ou quando houver comprovação de defeito de qualidade.</p>
          </Section>

          <Section title="4. Reembolso">
            <p>Após a aprovação da devolução:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Compras realizadas por cartão de crédito serão estornadas conforme os prazos da operadora do cartão.</li>
              <li>Compras realizadas por PIX ou transferência bancária serão reembolsadas para a conta indicada pelo cliente.</li>
            </ul>
          </Section>

          <Section title="5. Atendimento">
            <p>Em caso de dúvidas, nossa equipe está à disposição através dos canais oficiais de atendimento informados neste site.</p>
            <p>A HAËRA reserva-se o direito de atualizar esta política sempre que necessário para garantir transparência e conformidade com a legislação vigente.</p>
          </Section>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Trocas;
