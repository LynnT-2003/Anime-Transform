"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import OnboardingSection from "./OnboardingSection";

const LandingHeroSection = () => {
  const router = useRouter();
  const [generateClicked, setGenerateClicked] = useState(false);

  const generateClickHandler = () => {
    setGenerateClicked((prev) => !prev);
    router.push("/onboarding");
  };

  return (
    <div className="transition-all duration-300 ease-in-out">
      {!generateClicked && (
        <div className="flex flex-col gap-[25px] ">
          <h1 className="text-center">Redefine yourself in Anime Form.</h1>
          <img src="https://placehold.co/600x400.png" alt="placeholder" />
        </div>
      )}

      {generateClicked && (
        <div className="flex flex-col gap-[25px]">
          <OnboardingSection />
        </div>
      )}

      <div className="flex flex-col gap-[15px] items-center justify-center mt-[25px]">
        <Button
          className="w-fit px-8"
          variant="outline"
          onClick={generateClickHandler}
        >
          {generateClicked ? "Back" : "Transform Now"}
        </Button>

        {!generateClicked && (
          <Button className="w-fit px-5" variant="outline">
            Sign in With Google
          </Button>
        )}
      </div>
    </div>
  );
};

export default LandingHeroSection;
