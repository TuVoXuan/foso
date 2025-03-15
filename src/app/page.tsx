import { cn } from "@/lib/utils";
import Image from "next/image";
import gradientBg from "../assets/images/gradient-bg.png";
import calendar from "../assets/images/Calendar.png";
import writeHand from "../assets/images/WriteHand.png";

export default function Home() {
  return (
    <main className="mt-6 p-3 relative overflow-x-hidden xl:p-0 xl:mt-10 2xl:mt-[72px]">
      {/* <div className="absolute top-[200px] left-0 -translate-x-[0.68]">
        <Image
          src={gradientBg.src}
          width={125}
          height={125}
          alt="gradient-image"
        />
      </div> */}
      <div className="max-w-[1200] mx-auto 2xl:max-w-[1280px] relative">
        <div className="flex justify-center text-[14px] leading-[1.5] text-[#17181A] mb-12 xl:mb-[72px]">
          Trang chủ {">"} Tài nguyên {">"}
          <span className="font-semibold text-[#050505] inline-block ml-1">
            Blog
          </span>
        </div>
        <p
          className={cn(
            "text-[26px] leading-[1.5] text-[#050505] text-center whitespace-pre-line",
            "md:text-[36px] xl:text-[64px]"
          )}
        >
          Blog{" "}
          <span
            className={cn(
              "font-bold text-transparent bg-clip-text bg-linear-to-l from-[#53B086] from-0% via-c via-[28%] to-[#53B086]",
              "bg-radial"
            )}
          >
            FOSO
          </span>{" "}
          {"–"}
          {"\n"}
          Cập Nhật Tin Tức{" "}
          <span className="font-extrabold relative after:content[''] after:absolute after:w-full after:h-[14px] xl:after:h-[28px] after:bg-[#A3EED6] after:rounded-[40px] after:bottom-0 after:left-0 after:z-[-1]">
            Mới Nhất
          </span>
        </p>
        <p className="text-[14px] font-medium text-center leading-[1.5] text-[#33404A] mt-4 xl:text-[18px]">
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </p>
        <Image
          src={calendar.src}
          height={1280}
          width={1004}
          alt="calendar"
          className="hidden md:block absolute object-contain top-1/2 -translate-y-1/2 left-0 md:h-[120px] md:w-[120px] xl:h-[200px] xl:w-[200px] xl:-translate-x-[30%] 2xl:-translate-x-[calc(100%+38px)] 2xl:w-[282px] 2xl:h-[268px]"
        />
        <Image
          src={writeHand.src}
          height={1128}
          width={1072}
          alt="writeHand"
          className="hidden md:block absolute object-contain top-1/2 -translate-y-1/2 right-0 xl:translate-x-[30%] md:h-[120px] md:w-[120px] xl:h-[200px] xl:w-[200px] 2xl:translate-x-[100%] 2xl:w-[320px] 2xl:h-[251px]"
        />
      </div>
    </main>
  );
}
