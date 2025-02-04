"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { steps } from "@/constants/steps";

const OnboardingSection = () => {
  const router = useRouter();

  return (
    <div className="mt-[100px] lg:h-[90vh] flex flex-col items-center justify-center lg:mt-[19px]  mx-[50px] md:mx-0">
      <h1 className="text-2xl font-sans text-center mb-12">
        How to use our app
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-y-[25px] gap-[20px] lg:gap-[50px]">
        {steps.map((step) => (
          <TutorialStepCard
            key={step.id}
            title={step.description}
            image={step.image}
          />
        ))}
      </div>
      <button
        className="my-12 px-6 md:px-24 py-3 font-light md:font-normal font-sans rounded-md md:text-lg bg-white text-black hover:scale-105 transition-transform duration-200 ease-in-out"
        onClick={() => {
          router.push("/models");
        }}
      >
        Select Art Style Now!
      </button>
    </div>
  );
};

const TutorialStepCard = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col gap-[10px] items-center justify-center w-[45%] md:w-[25%]">
      <img src={image} alt="placeholder" className="w-full h-full" />
      <h1 className="text-center">{title}</h1>
    </div>
  );
};

export default OnboardingSection;
