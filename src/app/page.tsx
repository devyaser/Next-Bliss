import LandingBanner from "@/sections/LandingPage/Banner/LandingBanner";
import Tag from "@/sections/LandingPage/tag/Tag";
import Trusted from "@/sections/LandingPage/trustedby/Trusted";
import Features from "@/sections/LandingPage/feature/Features";
import KeyBenefits from "@/sections/LandingPage/KeyBenefits/KeyBenefits";
import Packages from "@/sections/LandingPage/Packages/Packages";
import Testimonial from "@/sections/LandingPage/testimonial/Testimonial";

export default function Landingpage() {
  return (
    <>
      <div>
        <LandingBanner />
        <Tag />
        <Trusted />
        <Features />
        <KeyBenefits />
        <Packages />
        <Testimonial />
      </div>
    </>
  );
}
