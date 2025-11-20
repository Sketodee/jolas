import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
  <div>
    <Hero />
      <Features />
      <Programs />
      <Testimonials />
      <CallToAction />
  </div>
  );
}
