import React from 'react'
import { Metadata } from "next";
import PremiumPortfolio from '@/components/PremiumPortfolio';

export const metadata: Metadata = {
  title: "Harikrishnan N | Portfolio",
  description:
    "Premium dark portfolio for Harikrishnan N - Full Stack Developer, Video Editor, Content Creator, and Digital Marketer.",
};

export default function Home() {
  return <PremiumPortfolio />
}
