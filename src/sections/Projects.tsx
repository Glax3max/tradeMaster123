"use client";

// import Image from "next/image";
import Script from "next/script";
// import { useState } from "react";

interface RazorpayInstance {
  open: () => void;
}
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount?: number;
  currency?: string;
  name?: string;
  description?: string;
  order_id?: string;
  handler: (response: RazorpayResponse) => void;
}


interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import Image from "next/image";
// import CheckCircleIcon from "@/assets/icons/check-circle.svg";
// import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Pratush Academy",
    year: "2025",
    title: "Begginer Course",
    results: [
      { title: "Basic understanding of Candles." },
      { title: "How to identify trends." },
      { title: "How to do market analysis." },
    ],
    link: "https://www.youtube.com/shorts/dIP9-1ftkWc",
    image: darkSaasLandingPage,
    price:799
  },
  {
    company: "Pratush Academy",
    year: "2025",
    title: "Intermidiate Course",
    results: [
      { title: "Basic understanding of Candles." },
      { title: "How to identify trends." },
      { title: "How to do market analysis." },
    ],
    link: "https://www.youtube.com/shorts/dIP9-1ftkWc",
    image: darkSaasLandingPage,
    price:899
  },
  {
    company: "Pratush Academy",
    year: "2025",
    title: "Advanced Course",
    results: [
      { title: "Basic understanding of Candles." },
      { title: "How to identify trends." },
      { title: "How to do market analysis." },
    ],
    link: "https://www.youtube.com/shorts/dIP9-1ftkWc",
    link2: "https://www.youtube.com/shorts/dIP9-1ftkWc",
    image: darkSaasLandingPage,
    price:999
  },
];

export const ProjectsSection = () => {
  // const [amount, setAmount] = useState<number>(0);

  const createOrder = async (amnt:number) => {
    const res = await fetch("/api/createOrder", {
      method: "POST",
      body: JSON.stringify({ amount: amnt * 100 }),
    });
    const data = await res.json();

    const paymentData = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "", 
      order_id: data.id,

      handler: async function (response: RazorpayResponse) {
        // verify payment
        const res = await fetch("/api/verifyOrder", {
          method: "POST",
          body: JSON.stringify({
            orderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          }),
        });
        const data = await res.json();
        console.log(data);
        if (data.isOk) {
          // do whatever page transition you want here as payment was successful
          alert("Payment successful");
        } else {
          alert("Payment failed");
        }
      },
    };

    const payment = new window.Razorpay(paymentData);
    payment.open();
  };

  return (
    <>
      <section className="pb-16 lg:py-24" id="course" >
       <Script
        type="text/javascript"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <div className="container">
        <div className="flex justify-center">
          <SectionHeader eyebrow="Real-world Result" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences."/>
        </div>
        <div className="flex md:mt-20 flex-col mt-10 gap-20 ">
          {portfolioProjects?.length > 0 && portfolioProjects.map((project, projectIndex) => (
            <Card 
            className=" md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:rounded-3xl pb-0 after:outline-white/20 px-8 pt-8 sticky top-16"
            key={projectIndex}
            style={{
              top: `${64 + projectIndex * 80}px`
            }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                  <div className="bg-gradient-to-r gap-2 from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>
                  {project.company}
                  </span>
                  <span>&bull;</span>
                  <span>
                  {project.year}
                  </span>
                </div>
                 <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result,resultIndex) => (
                    <li className="flex gap-2 text-sm md:text-base  text-white/50" key={resultIndex}>
      {/*                 <Image src={CheckCircleIcon} className="size-5 md:size-6" alt="circle"/> */}
                      ⚪
                      <span>
                        {result.title}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                <button className="bg-white inline-flex items-center md:w-auto px-6 justify-center mx-2 gap-2 mt-8 text-gray-950 h-12 w-full rounded-xl font-semibold">
                  <span > 
                  View Demo
                  </span>
                </button>
                </a>
                {/* <input
                    type="number"
                    placeholder="Enter amount"
                    className="px-4 py-2 rounded-md text-black"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                /> */}
                  <a>
                <button onClick={() => createOrder(project.price)} className="bg-emerald-400 inline-flex items-center md:w-auto px-6 justify-center gap-2 mt-8 text-gray-950 h-12 w-full rounded-xl font-semibold">
                  <span > 
                  Buy 
                  </span>
{/*                   <Image src={ArrowUpRightIcon} className="size-4 " alt="circle"/> */}
{/*                   ↗ */}
                  </button>
                  </a>
                </div>
                <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 lg:w-auto lg:max-w-none  -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full"/>
                  </div>
                  </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
      </>);
};
