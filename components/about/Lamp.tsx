"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { Button } from "../ui/button";

export function LampDemo() {
  return (
    <LampContainer >
      <motion.h1
        initial={{ opacity: 0.1, y: 150 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 capitalize text-foreground bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text  text-center text-4xl font-medium  text-transparen md:text-7xl"
      >
        unforgotable moments <br /> with us
        <br/>
        <Button className="text-bold text-foreground"> Read More</Button>
      </motion.h1>
    </LampContainer>
  );
}
