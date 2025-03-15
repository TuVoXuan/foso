"use client";
import ArticleCard from "@/components/article-card";
import Icons from "@/components/icons";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import banner from "../assets/images/banner.png";
import calendar from "../assets/images/Calendar.png";
import gradientBg from "../assets/images/gradient-bg.png";
import writeHand from "../assets/images/WriteHand.png";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import { PaginationWithLinks } from "@/components/ui/pagination-with-link";

const categories = [
  { label: "Tất cả", posts: 108 },
  { label: "Thiết Kế Website", posts: 36 },
  { label: "Thiết Kế App Mobile", posts: 13 },
  { label: "Quản Lý Sản Xuất", posts: 25 },
  { label: "Quản Lý Bán Hàng", posts: 22 },
  { label: "Báo Chí Nói Về FOSO", posts: 7 },
  { label: "Tin Tức FOSO", posts: 5 },
];

export default function Home() {
  const [openCategoryDrawer, setOpenCategoryDrawer] = useState(false);

  return (
    <div className="py-6 p-3 relative overflow-hidden xl:px-0 xl:py-10 2xl:py-[72px]">
      {/* section 1 */}
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

      {/* section 2 */}
      <div className="relative mt-14 xl:mt-20">
        <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[30%] xl:-translate-x-[70%] xl:-translate-y-[40%] 2xl:-translate-x-[50%] z-[-1]">
          <Image
            src={gradientBg}
            width={500}
            height={500}
            alt="gradient-image"
            className="h-full w-full object-cover xl:h-[1000px] xl:w-[1000px]"
          />
        </div>

        <div className="absolute bottom-0 right-0 translate-x-[50%] xl:translate-x-[60%] z-[-1]">
          <Image
            src={gradientBg}
            width={500}
            height={500}
            alt="gradient-image"
            className="h-full w-full object-cover xl:h-[1000px] xl:w-[1000px]"
          />
        </div>

        <div className="xl:max-w-[1200px] xl:mx-auto 2xl:max-w-[1440px]">
          <div className="xl:flex gap-x-8 items-start">
            <div className="flex items-center gap-x-2 xl:w-[336px] xl:shrink-0 xl:order-2 xl:flex-col xl:items-stretch">
              <button
                onClick={() => setOpenCategoryDrawer(true)}
                className="bg-[#15AA7A] text-white p-2 rounded-[12px] xl:hidden"
              >
                Danh mục
              </button>
              <div className="space-y-6 flex-1">
                <p className="font-bold leading-[2] hidden xl:block xl:text-[24px]">
                  Tìm kiếm
                </p>
                <div className="w-full relative">
                  <Input
                    className="h-12 xl:h-[72px] text-[14px] leading-[1.5] md:text-[16px] placeholder:text-[ACB3C7] !shadow-input border-none rounded-[12px] xl:py-3 xl:pl-6 xl:pr-[60px]"
                    placeholder="Tìm kiếm bài viết"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#15AA7A] h-9 w-9 xl:h-12 xl:w-12 rounded-[8px] xl:rounded-[12px] flex items-center justify-center">
                    <Icons.Search className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="hidden xl:block space-y-8 mt-8">
                <p className="text-[24px] font-extrabold leading-[2] text-[#050505]">
                  Danh mục
                </p>
                <div className="space-y-4">
                  {categories.map((cate) => (
                    <Link
                      key={cate.label}
                      href={"/"}
                      className="flex items-center justify-between text-[18px] font-medium leading-[1.5] text-[#33404A] pb-2 border-b border-b-[#F1F5F7] last:border-none"
                    >
                      <span>{cate.label}</span>
                      <span>{cate.posts}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hidden xl:block space-y-8 mt-8">
                <Image
                  src={banner1}
                  className="w-full h-auto object-contain"
                  alt="banner1"
                />
                <Image
                  src={banner2}
                  className="w-full h-auto object-contain"
                  alt="banner1"
                />
              </div>
            </div>

            <div className="mt-4 xl:mt-0 xl:order-1">
              <p className="hidden xl:block text-[36px] font-extrabold leading-[2] text-[#050505] mb-6">
                Tất cả bài viết
              </p>
              <Image
                src={banner}
                alt="banner"
                width={1042}
                height={319}
                className="w-full h-auto"
              />
              <div className="grid grid-cols-2 gap-x-3 gap-y-4 mt-4 xl:mt-12 xl:gap-x-8 xl:gap-y-12">
                {new Array(10).fill(0).map((_, index) => (
                  <ArticleCard key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <PaginationWithLinks page={1} pageSize={10} totalCount={100} />
          </div>
        </div>
      </div>

      {/* category menu */}
      <Drawer open={openCategoryDrawer} onOpenChange={setOpenCategoryDrawer}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center text-[18px] font-bold">
              Danh mục
            </DrawerTitle>
            <DrawerDescription></DrawerDescription>
            <div className="space-y-4">
              {categories.map((cate) => (
                <Link
                  key={cate.label}
                  href={"/"}
                  className="flex items-center justify-between text-[14px] font-medium leading-[1.5] text-[#33404A] pb-2 border-b border-b-[#F1F5F7] last:border-none"
                >
                  <span>{cate.label}</span>
                  <span>{cate.posts}</span>
                </Link>
              ))}
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
