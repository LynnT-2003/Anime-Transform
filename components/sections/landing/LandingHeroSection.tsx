"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LandingHeroSection = () => {
  const router = useRouter();

  const generateClickHandler = () => {
    router.push("/onboarding");
  };

  return (
    <div className="transition-all duration-300 ease-in-out px-5 md:px-0">
      <div className="flex flex-col gap-[25px] ">
        <h1 className="text-center">Redefine yourself in Anime Form.</h1>
        <img
          src="/landing.png"
          alt="placeholder"
          className="w-[600px] h-[400px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-[15px] items-center justify-center mt-[25px]">
        <Button
          className="w-fit px-8"
          variant="outline"
          onClick={generateClickHandler}
        >
          Transform Now
        </Button>

        <Button className="w-fit px-5" variant="outline">
          Sign in With Google
        </Button>
      </div>
    </div>
  );
};

export default LandingHeroSection;
