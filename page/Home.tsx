import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import BeneficiariesList from "../src/components/beneficiaries";
import Criteria from "../src/components/Criteria";
import Developer from "../src/components/Developer";
import Footer from "../src/components/Footer";
import Partnership from "../src/components/Partnership";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <BeneficiariesList />
        <Criteria />
        <Developer />
        <Partnership />
      </main>
      <Footer />
    </div>
  );
}
