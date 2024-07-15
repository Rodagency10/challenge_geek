import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LandingPageVisuel from "../assets/landing_page_challenge.jpg";
import esig from "../assets/esig.png";
import ipnet from "../assets/ipnet.jpg";
import lbs from "../assets/lbs.webp";
import escen from "../assets/escen.png";
import ShineBorder from "./magicui/shine-border";
import { ChevronRight } from "lucide-react";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import SparklesText from "@/components/magicui/sparkles-text";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";



const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export default function HeroSection() {
  return (
    <>
      {/* Hero */}

      <div className="container py-24 lg:py-24 px-0">
        {/* Grid */}

        <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <AnimatedGradientText>
              🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Journée de l'informatique  
              </span>
            </AnimatedGradientText>

            <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl mt-4 text-left">
              Challenge <SparklesText text="Geek" />
            </h1>
            <p className="mt-3 text-sm lg:text-xl text-muted-foreground text-left">
              Dans le cadre de la journée de l'informatique, nous vous proposons
              un challenge pour tester vos compétences en programmation.
            </p>
            <div className="mt-5 lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full max-w-lg  lg:w-auto">
                <Input placeholder="Entrez votre email" type="email" />
              </div>
              <Button className="lg:w-min">S'inscrire</Button>
            </div>
            {/* Brands */}
            <div className="mt-6 lg:mt-12 text-left">
              <span className="text-xs font-medium uppercase">
                Rejoingez + 200 inscrits
              </span>


              <AvatarCircles className="mt-3" numPeople={200} avatarUrls={avatarUrls} />
{/* 
              <div className="mt-4 flex gap-x-8">
                <img
                  src={escen}
                  alt="logo escen"
                  className="size-12 rounded-sm bg-slate-50 p-2"
                />
                <img
                  src={ipnet}
                  alt="logo ipnet"
                  className="rounded-sm w-auto h-12 bg-slate-50 p-2"
                />
                <img
                  src={lbs}
                  alt="logo lbs"
                  className="w-auto h-12 rounded-sm bg-slate-50 p-2"
                />
                <img
                  src={esig}
                  alt="logo esig"
                  className="size-12 rounded-sm bg-slate-50 p-2"
                />
              </div> */}


            </div>
            {/* End Brands */}
          </div>
          {/* End Col */}
          <div className="lg:col-span-4 mt-10 lg:mt-0 lg:w-[500px]">
            <ShineBorder
              className=" flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <img
                className="w-full rounded-xl"
                src={LandingPageVisuel}
                alt="Image Description"
              />
            </ShineBorder>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}


      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 lg:inset-y-[-60%]   inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </>
  );
}
