import React from "react";
import facebook from "../../assets/images/facebook.png";
import zalo from "../../assets/images/zalo.png";
import reddit from "../../assets/images/reddit.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import Image from "next/image";

const socialImgs = [zalo, facebook, twitter, linkedin, reddit];

export default function ShareButtons() {
  return (
    <div className="h-fit flex flex-col gap-y-2">
      <p className="hidden xl:block text-[12px] font-extrabold leading-[1.5] text-[#33404A]">
        Chia sẻ
      </p>
      {socialImgs.map((img, index) => (
        <button
          key={index}
          className="h-10 w-10 bg-white 2xl:bg-transparent xl:h-12 xl:w-12 rounded-[16px] border border-[#15AA7A] flex items-center justify-center"
        >
          <Image src={img} alt="social" className="w-4 h-4 xl:w-6 xl:h-6" />
        </button>
      ))}
    </div>
  );
}
