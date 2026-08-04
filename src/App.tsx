import { useState } from "react";
import { StoreProvider } from "./context/StoreContext";
import { useReveal, useScrollProgress } from "./hooks/useReveal";

import FluidCanvas from "./components/FluidCanvas";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMarquee from "./components/TrustMarquee";
import HorizontalGallery from "./components/HorizontalGallery";
import Story from "./components/Story";
import ProductGrid from "./components/ProductGrid";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Toast from "./components/Toast";

function Page() {
  const [progress, setProgress] = useState(0);
  useScrollProgress(setProgress);
  useReveal();

  return (
    <div className="relative min-h-screen bg-white font-body">
      <div id="scroll-progress" style={{ width: `${progress}%` }} />
      <FluidCanvas />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <TrustMarquee />
        <HorizontalGallery />
        <Story />
        <ProductGrid />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <OrderForm />
      </main>

      <Footer />
      <CartDrawer />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Page />
    </StoreProvider>
  );
}
