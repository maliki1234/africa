"use client";
import { Button } from "../ui/button";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "hike",
      className: "text-foreground"
    },
    {
      text: "and",
      className: "text-foreground"
    },
    {
      text: "make",
      className: "text-foreground"
    },
    {
        text: "a",
        className: "text-foreground"
      },
      {
        text: "beautiful moment",
        className: "text-foreground"
      },
    {
      text: "with",
      className: "text-foreground"
    },
    {
      text: "Us.",
      className: "text-primary ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        the way to enjoy your journey
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button> */}
        <Button variant={"secondary"}>Book Now</Button>
        
        {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
        <Button variant={"outline"}>Read More</Button>
      </div>
    </div>
  );
}
