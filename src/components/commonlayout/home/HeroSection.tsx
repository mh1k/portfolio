/* eslint-disable react/no-unescaped-entities */

import { Spotlight } from "@/components/ui/spotlight-new";
import Animation from "./animation";

const HeroSection = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <Spotlight />
      <Animation><div className="h-screen flex items-center mx-[10%]  ">
        <div>
          <h2>Hey There, I'm</h2>
          <h1 className="text-[min(7vw,2.5rem)] font-medium">
            Mahmudul{" "}
            <span className="before:block before:absolute before:inset-x-0 before:inset-y-2  before:-skew-y-3 before:bg-gradient-to-r before:from-pink-600 before:to-purple-800 relative inline-block">
              <span className="relative p-0 text-white">Hasan</span>
            </span>
          </h1>
          <h2 className="text-3xl mb-5">I'm Passionate </h2>
          <p className="w-full md:w-2/4">
            I create successful websites that are fast, easy to use, and built
            with best practices. I love learning and implementing according to
            time.
          </p>
          <button className="pointer-events-auto relative mt-5 px-4 py-[0.60rem] bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:hover:bg-purple-600 dark:focus:ring-purple-900 text-white rounded-3xl transition-transform duration-150 ">
            Resume
            <span className="absolute inset-0 m-auto h-[68%] w-[60%] rounded-full bg-pink-700 opacity-100 animate-[ping_1.5s_linear_infinite] -z-30"></span>
          </button>
        </div>
      </div></Animation>
    </div>
  );
};

export default HeroSection;
