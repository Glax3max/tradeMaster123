import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import Image from "next/image";
import BookImage from "@/assets/images/book-cover.png"
export const AboutSection = () => {
  return (
  <div className="pt-32 pb-96" id="about">
    <SectionHeader 
    eyebrow="About Me" 
    title="A Glimps Into My World" 
    description="Learn more about who I am,what I do, and what inspires me." />
  </div>);
};
