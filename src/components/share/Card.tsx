"use client";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

interface props {
  title: string;
  description: string;
}

function Card(props: props) {
  return (
    <BackgroundGradient className=" flex items-center justify-center text-center space-y-2 flex-col px-2 border-[1px] border-[#adadad] rounded-[22px] hover:cursor-pointer md:w-[290px] w-[240px] h-[200px]  text-white z-50 max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <h3 className="md:text-2xl text-xl font-bold " style={{ color: "greenyellow" }}>
        {props.title}
      </h3>
      <p className="md:text-base text-sm font-medium ">{props.description}</p>
    </BackgroundGradient>
  );
}

export default Card;
