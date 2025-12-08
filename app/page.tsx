import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
    </>
  );
}
