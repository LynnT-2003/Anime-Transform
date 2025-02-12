"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { onAuthStateChange } from "@/lib/firebase";
import { signInWithGoogle } from "@/lib/firebase";
import { User } from "firebase/auth";

const LandingHeroSection = () => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const generateClickHandler = () => {
    router.push("/onboarding");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      if (user) {
        setUser(user);
        console.log("User is now: ", user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="transition-all duration-300 ease-in-out px-5 md:px-0">
      <div className="flex flex-col gap-[27.5px] ">
        <h1 className="font-sans text-3xl font-semibold text-center">
          Redefine yourself in Anime
        </h1>
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

        {!user && (
          <Button
            className="w-fit px-5"
            variant="outline"
            onClick={signInWithGoogle}
          >
            Sign in With Google
          </Button>
        )}
      </div>
    </div>
  );
};

export default LandingHeroSection;
