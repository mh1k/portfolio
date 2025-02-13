import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen sm:relative">
      <div className="mx-[10%] hidden sm:block sm:relative pointer-events-auto sm:-z-10">
        <TextHoverEffect text="ABOUT"></TextHoverEffect>
      </div>
      <div className="mx-[10%] sm:absolute  sm:top-[10%] md:top-[10%] lg:top-[25%]  ">
        <h2 className="text-4xl mb-5 ">About Me</h2>

        <div className="grid grid-cols-1  lg:grid-cols-5 gap-5 lg:gap-14 md:border ">
          <div className="lg:col-span-2">
            <Image
              src={"/profile-pic.png"}
              alt="Mahmudul Hasan"
              width={900}
              height={1000}
              className="w-full  object-cover"
            ></Image>
          </div>
          <div className=" lg:col-span-3 md:border-l md:p-3">
            <p className=" text-wrap text-justify ">
              Hi, I&apos;m Mahmudul Hasan. Enthusiastic web developer eager to
              contribute to team success through hard work, attention to detail,
              and excellent organizational skills. A clear understanding of
              coding and web development. I wake up every morning excited to be
              as productive every day as I can. I&apos;m quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time. I am passionate about coding and
              solving problems through code, and I am excited to work alongside
              other amazing programmers and learn so much more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
