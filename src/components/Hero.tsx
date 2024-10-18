"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "../assets/profilepic.png";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-[radial-gradient(closest-side,#000_80%,#2B1942)] top-[550px] left-[50%] -translate-x-1/2"></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Eric Paul</h1>
        </div>

        <motion.div
          className="hidden md:block absolute left-[150px] top-[170px]"
          drag
        >
          <Image
            src={cursor}
            height="190"
            width="190"
            alt="message"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute right-[150px] top-[20px]"
          drag
        >
          <Image
            src={lightning}
            height="150"
            width="150"
            alt="message"
            className=""
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-10 text-white/80 ">
          I am a full-stack developer focused on creating websites that provide
          the best experience for users.
        </p>

        <Image
          src={profile}
          alt="profile picture"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
