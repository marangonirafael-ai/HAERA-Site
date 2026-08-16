import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import nucleusGold from '@/assets/haera-simbolo-gold.png';

const SiteFooter: React.FC = () => {
  return (
    <footer style={{ backgroundColor: BRAND.WINE_NIGHT }} className="pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={nucleusGold} alt="" className="w-10 h-10 object-contain" />
              <span className="font-serif text-2xl tracking-wider" style={{ color: BRAND.CREAM }}>Haëra</span>
            </div>
            <p className="font-sans text-xs leading-relaxed" style={{ color: BRAND.CREAM, opacity: 0.55 }}>
              Alimento real. Razão científica. Nenhum atalho.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase mb-5" style={{ color: BRAND.GOLD }}>Produto</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="font-sans text-sm transition-opacity hover:opacity-100" style={{ color: BRAND.CREAM, opacity: 0.7 }}>Início</Link></li>
              <li><Link to="/pulse-produto" className="font-sans text-sm transition-opacity hover:opacity-100" style={{ color: BRAND.CREAM, opacity: 0.7 }}>Pulse</Link></li>
              <li><Link to="/ciencia" className="font-sans text-sm transition-opacity hover:opacity-100" style={{ color: BRAND.CREAM, opacity: 0.7 }}>Ciência Pulse</Link></li>
              <li><Link to="/manifesto" className="font-sans text-sm transition-opacity hover:opacity-100" style={{ color: BRAND.CREAM, opacity: 0.7 }}>Manifesto</Link></li>
              <li><Link to="/origem" className="font-sans text-sm transition-opacity hover:opacity-100" style={{ color: BRAND.CREAM, opacity: 0.7 }}>Origem</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase mb-5" style={{ color: BRAND.GOLD }}>Fale com a gente</h4>
            <a
              href="https://instagram.com/viva.haera"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm mb-3"
              style={{ color: BRAND.CREAM, opacity: 0.7 }}
            >
              <Instagram size={16} /> @viva.haera
            </a>
            <a
              href="mailto:contato.haera@gmail.com"
              className="block font-sans text-sm mt-2"
              style={{ color: BRAND.CREAM, opacity: 0.7 }}
            >
              contato.haera@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ borderColor: `${BRAND.GOLD}25` }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
            <p className="font-sans text-xs" style={{ color: BRAND.CREAM, opacity: 0.4 }}>
              © 2026 Haëra. Todos os direitos reservados.
            </p>
            <Link to="/trocas-devolucoes" className="font-sans text-xs transition-opacity hover:opacity-100" style={{ color: BRAND.CREAM, opacity: 0.4 }}>
              Trocas e Devoluções
            </Link>
          </div>
          <p className="font-serif text-xs tracking-[0.2em] uppercase" style={{ color: BRAND.GOLD, opacity: 0.7 }}>
            Nutrir antes de estimular
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
