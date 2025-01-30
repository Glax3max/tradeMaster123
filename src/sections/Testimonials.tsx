import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import { Card } from "@/components/Card";
import { Fragment } from "react";
const testimonials = [
  {
    name: "Jai Pandey",
    position: "Marketing Manager @ TechStartups",
    text: "I recently completed the course, and I must say, it exceeded all my expectations! The course is well-structured, beginner-friendly yet insightful enough for advanced traders, covering everything from technical analysis, risk management, and psychology to advanced trading strategies!",
    avatar: memojiAvatar1,
  },
  {
    name: "Amit Dubey",
    position: "Head of Design @ GreenLeaf",
    text: "I recently completed [Course Name], and I must say, it exceeded all my expectations! The course is well-structured, beginner-friendly yet insightful enough for advanced traders, covering everything from technical analysis, risk management, and psychology to advanced trading strategies!",
    avatar: memojiAvatar2,
  },
  {
    name: "Jai Pandey",
    position: "Marketing Manager @ TechStartups",
    text: "I recently completed the course, and I must say, it exceeded all my expectations! The course is well-structured, beginner-friendly yet insightful enough for advanced traders, covering everything from technical analysis, risk management, and psychology to advanced trading strategies!",
    avatar: memojiAvatar1,
  },
  {
    name: "Amit Dubey",
    position: "Head of Design @ GreenLeaf",
    text: "I recently completed [Course Name], and I must say, it exceeded all my expectations! The course is well-structured, beginner-friendly yet insightful enough for advanced traders, covering everything from technical analysis, risk management, and psychology to advanced trading strategies!",
    avatar: memojiAvatar2,
  },
  {
    name: "Jai Pandey",
    position: "Marketing Manager @ TechStartups",
    text: "I recently completed the course, and I must say, it exceeded all my expectations! The course is well-structured, beginner-friendly yet insightful enough for advanced traders, covering everything from technical analysis, risk management, and psychology to advanced trading strategies!",
    avatar: memojiAvatar1,
  },
  {
    name: "Amit Dubey",
    position: "Head of Design @ GreenLeaf",
    text: "I recently completed [Course Name], and I must say, it exceeded all my expectations! The course is well-structured, beginner-friendly yet insightful enough for advanced traders, covering everything from technical analysis, risk management, and psychology to advanced trading strategies!",
    avatar: memojiAvatar2,
  },
];

export const TestimonialsSection = () => {
  return (
  <div className="py-16 lg:py-24">
    <div className="container">
    <SectionHeader eyebrow="Happy Client" title="What Clients Say about Me" description="Don't just take my words for it.See what my client have to say about my work"/>
    <div className="mt-12 flex lg:mt-20 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
    <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:120s] hover:[animation-play-state:paused]">
      {[...new Array(2)].fill(0).map((_ , index)=>(
        <Fragment key={index}>
      {testimonials.map((testimonial) => (
        <Card key={testimonial.name} className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
          <div className="flex gap-4 items-center">
            <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <Image src={testimonial.avatar} 
            alt={testimonial.name} 
            className="max-h-full"/>
            </div>
          <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-white/40">{testimonial.position}</div>
            </div>
          </div>
          <p className="mt-4 md:mt-6 text-sm  md:text-base">{testimonial.text}</p>
          </Card> 
          ))}
        </Fragment>
      ))}
          </div>
        </div>
      </div>
  </div>);
};
