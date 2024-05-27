import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-200 selection:bg-gold-100 selection:text-purple-800 no-scrollbar">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-5">
        <Navbar />
        <Hero />
        <Technologies />
      </div>
    </div>
  );
}
