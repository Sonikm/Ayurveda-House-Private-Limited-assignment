import Image from "next/image";
import { useState } from "react";
import { imgs } from "@/utils/images";

export default function HoverAnimation() {
  const [hovered, setHovered] = useState(1);
  const [arrowVisible, setArrowVisible] = useState(false);

  return (
    <div className="flex overflow-hidden rounded-[40px] border-2 border-black">
      {imgs.map((item, index) => (
        <div
          key={index}
          className={`relative transition-all duration-500 ease-in-out delay-100 ${
            hovered === index ? "flex-[2]" : "flex-[1]"
          }`}
          onMouseEnter={() => {
            setHovered(index);
            setArrowVisible(true);
          }}
          onMouseLeave={() => setArrowVisible(false)}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
          {hovered == index && arrowVisible && (
            <div className="absolute  text-black flex justify-center items-center cursor-pointer opacity-90 z-50 font-bold text-lg top-5 right-6 w-8 h-8 bg-white rounded-full border">
              <Image width={18} height={18} src={"/arrow-icon.png"} alt="" />
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50  opacity-80 transition-opacity duration-500 delay-100">
            <p className="text-white text-2xl font-medium absolute top-5 left-6">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
