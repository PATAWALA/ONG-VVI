import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Donation from "../components/Donation";
import LatestNews from "../components/LatestNews";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Impact />
      <Donation />
      <LatestNews />
      <Newsletter />
    </main>
  );
}