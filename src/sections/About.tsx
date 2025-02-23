import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
export const AboutSection = () => {
  return (
  <div className="pt-32 pb-96" id="about">
    <SectionHeader 
    eyebrow="About Me" 
    title="A Glimps Into My World" 
    description="Learn more about who I am,what I do, and what inspires me." />
     <Card  className=" md:max-w-md md:p-8 m-auto ">
        <p className="flex justify-around mt-4 md:mt-6 text-sm  md:text-base">My journey into trading began with a fascination with the markets, a desire for financial independence. Through years of study, overcoming challenges, I&apos;ve developed a strategy that focuses on profit. I&apos;m passionate about helping others navigate the complexities of the markets.</p>
      </Card> 
  </div>);
};
