import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VipSignupContextValue {
  isOpen: boolean;
  openVipSignup: () => void;
  closeVipSignup: () => void;
}

const VipSignupContext = createContext<VipSignupContextValue | null>(null);

export const VipSignupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VipSignupContext.Provider
      value={{
        isOpen,
        openVipSignup: () => setIsOpen(true),
        closeVipSignup: () => setIsOpen(false),
      }}
    >
      {children}
    </VipSignupContext.Provider>
  );
};

export const useVipSignup = () => {
  const ctx = useContext(VipSignupContext);
  if (!ctx) throw new Error('useVipSignup precisa estar dentro de VipSignupProvider');
  return ctx;
};
