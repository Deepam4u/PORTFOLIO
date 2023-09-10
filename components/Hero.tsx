import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";


type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, Deepamjyoti Sahoo here.",
      "I build things for the web.",
      "And this is my Portfolio.",
      "I am a Full-stack developer.",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        width={200}
        height={200}
        className="relative h-32 w-32 rounded-full mx-auto object-cover"
        src="/New-file.gif"
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm text-gray-400 uppercase tracking-[8px] md:tracking-[15px] pb-2 font-outfit">
          Full-stack developer
        </h2>
        <h1 className="pt-2 text-3xl md:text-4xl lg:text-6xl font-semibold px-16">
          <span className="mr-3 font-outfit">{text}</span>
          <Cursor cursorColor="#aaaaaa" />
        </h1>

        <div className="pt-4 lg:pt-4 font-outfit">
          <Link href="#about">
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              about
            </button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              experience
            </button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              skills
            </button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              projects
            </button>
          </Link>

          <Link href={"https://drive.google.com/file/d/1Hp1HShpvlV80jq-sKAzPPVoyHRnrcEl9/view?usp=sharing"} target="_blank" download={true}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
