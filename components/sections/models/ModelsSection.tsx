"use client";
import React from "react";
import { models } from "@/constants/models";
import { useRouter, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();

  const modelClickedHandler = (title: string, image: string) => {
    localStorage.setItem("selectedModel", title);
    localStorage.setItem("ImageReferenceUrl", image);
    
    const fromParam = searchParams.get('from');
    if (fromParam === 'upload-success') {
      router.push("/image-upload/upload-success");
    } else {
      router.push("/image-upload");
    }
  };

  return (
    <div
      className="w-[45%] md:w-[240px] hover:cursor-pointer hover:opacity-70"
      key={title}
      onClick={() => modelClickedHandler(title, image)}
    >
      <img
        src={image}
        alt=""
        className="w-full h-[200px] md:h-[300px] object-cover object-top md:object-center rounded-lg"
      />
      <h1 className="mt-1 text-center">{title}</h1>
    </div>
  );
};

export default ModelsPage;
