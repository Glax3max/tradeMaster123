// import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
// import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl md:text-left relative overflow-hidden text-center">
          {/* Background Texture */}
          <div 
            className="absolute inset-0 opacity-5 -z-20"
            style={{ backgroundImage: `url(${grainImage.src})` }} 
          />

          {/* Content */}
          <div className="flex flex-col gap-8 items-center md:flex-row md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and discuss.
                I can help you achieve your goals.
              </p>
            </div>

            {/* Button */}
            <div className="z-20">
            <a href="Masterintrade1@gmail.com

">
                <button
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 hover:border-emerald-500 transition-all duration-300"
                >
                  <span className="font-semibold">Contact Me</span>
                  <span>↗</span>
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
