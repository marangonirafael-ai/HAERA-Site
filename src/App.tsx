import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Home from "./pages/Home";
import PulseProduct from "./pages/PulseProduct";
import Ciencia from "./pages/Ciencia";
import Manifesto from "./pages/Manifesto";
import Checkout from "./pages/Checkout";
import Trocas from "./pages/Trocas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <Routes>
            {/* Site comercial */}
            <Route path="/" element={<Home />} />
            <Route path="/pulse-produto" element={<PulseProduct />} />
            <Route path="/ciencia" element={<Ciencia />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/trocas-devolucoes" element={<Trocas />} />

            {/* /brandbook, /assets e /pulse (brandbook interno) foram removidos das
                rotas públicas — expunham o roadmap de produtos futuros e material de
                design interno sem autenticação. Os arquivos-fonte continuam em
                src/pages/Index.tsx, BrandAssets.tsx e Pulse.tsx como referência. */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
