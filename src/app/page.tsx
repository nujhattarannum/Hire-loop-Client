import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/home/Banner";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { PricingSection } from "@/components/home/PricingSection";
import { BottomCta } from "@/components/home/BottomCta";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Navbar />
      <main>
        <Banner/>
        <FeaturedJobs />
        <FeaturesGrid />
        <PricingSection />
        <BottomCta />
      </main>
      <Footer/>
    </div>
  );
}
