import AboutMe from "@/components/commonlayout/home/AboutMe";
import HeroSection from "@/components/commonlayout/home/HeroSection";
import Skills from "@/components/commonlayout/home/Skills";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
  );
}
