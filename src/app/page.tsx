import Admire from "@/components/Admire";
import BackgroundOrnaments from "@/components/BackgroundOrnaments";
import Divider from "@/components/Divider";
import Feelings from "@/components/Feelings";
import FinalNote from "@/components/FinalNote";
import Footer from "@/components/Footer";
import GlobalParticles from "@/components/GlobalParticles";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import MemoryGallery from "@/components/MemoryGallery";
import Moments from "@/components/Moments";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Timeline from "@/components/Timeline";
import WhyThisExists from "@/components/WhyThisExists";
import BgmPlayer from "@/components/BgmPlayer";
import GentleChoice from "@/components/GentleChoice";
import DesktopOnlyNotice from "@/components/DesktopOnlyNotice";

export default function Page() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ivory focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <BackgroundOrnaments />
      <GlobalParticles />
      <Navbar />
      <BgmPlayer />
      <DesktopOnlyNotice />

      <main className="relative">
        <Hero />
        <Divider />
        <WhyThisExists />
        <Divider />
        <Timeline />
        <Divider />
        <Moments />
        <Divider />
        <Admire />
        <Divider />
        <Feelings />
        <Divider />
        <Letter />
        <Divider />
        <FinalNote />
        <Divider />
        <MemoryGallery />
        <Divider />
        <GentleChoice />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
