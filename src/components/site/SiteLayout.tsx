import React, { ReactNode } from 'react';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import { BRAND } from '@/lib/brand';

const SiteLayout: React.FC<{ children: ReactNode; bg?: string }> = ({ children, bg = BRAND.CREAM }) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: bg }}>
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
