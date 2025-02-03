"use client";
import React from "react";
import { models } from "@/constants/models";
import { useRouter } from "next/navigation";

const ModelsPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center my-[19px] md:py-[12px] mx-[50px] md:mx-0">
      <h1 className="text-2xl font-sans text-center mb-10">
        What Style do you want to see yourself in?
      </h1>
      <div className="flex flex-wrap transition-all duration-300 ease-in-out items-center justify-center gap-y-[20px] gap-[20px] lg:gap-[50px]">
        {models.map((step) => (
          <ModelCard
            key={step.id}
            title={step.description}
            image={step.image}
          />
        ))}
      </div>
    </div>
  );
};

const ModelCard = ({ title, image }: { title: string; image: string }) => {
  const router = useRouter();

  const modelClickedHandler = (title: string, image: string) => {
    localStorage.setItem("selectedModel", title);
    localStorage.setItem("ImageReferenceUrl", image);
    router.push("/image-upload");
  };

  return (
    <div className="flex flex-col gap-[10px] items-center justify-center w-[45%] lg:w-auto">
      <img
        src={image}
        alt="placeholder"
        className="w-[300px] h-[300px] object-cover hover:cursor-pointer hover:opacity-55"
        onClick={() => modelClickedHandler(title, image)}
      />
      <h1 className="text-center">{title}</h1>
    </div>
  );
};

export default ModelsPage;
