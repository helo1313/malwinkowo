"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TileProps = {
  day: number;
  image: string;
  href: string;
};

export default function Tile({ day, image, href }: TileProps) {
  const today = new Date();
  const currentDay = today.getDate();

  const isUnlocked = currentDay >= day;

  return (
    <div className="w-[150px] h-[150px] overflow-hidden">
      {isUnlocked ? (
        <Link
          href={href}
          className="relative flex items-center justify-center w-full h-full"
        >
          <Image
            src={image}
            alt={`Day ${day}`}
            width={150}
            height={150}
            className="blur-effect absolute top-0 left-0 w-full h-full object-cover"
          />
          <p className="text-white text-4xl font-bold relative z-10">
            Dzień {day}
          </p>
        </Link>
      ) : (
        <div className="relative flex items-center justify-center w-full h-full">
          <Image
            src={image}
            alt={`Day ${day}`}
            width={150}
            height={150}
            className="disabled-effect absolute top-0 left-0 w-full h-full"
          />
          <p className="text-white text-4xl font-bold relative z-10">
            Dzień {day}
          </p>
        </div>
      )}
    </div>
  );
}
