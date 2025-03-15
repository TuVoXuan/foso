import Image from "next/image";
import React from "react";
import articleThumbnail from "../../assets/images/article-thumbnail.png";
import Icons from "../icons";

export default function ArticleCard() {
  return (
    <div>
      <div className="rounded-[8px] overflow-hidden xl:rounded-[24px]">
        <Image
          src={articleThumbnail}
          height={1010}
          width={951}
          className="w-full h-auto"
          alt="article thumbnail"
        />
      </div>
      <div className="pt-3 xl:pt-6">
        <p className="w-fit text-[10px] md:text-[12px] leading-[1.5] font-medium text-[#0F4F9E] bg-[#E2F0FE] rounded-[8px] py-1 px-2">
          Quản Lý Sản Xuất
        </p>
        <p className="mt-2 text-[#33404A] text-[13px] md:text-[16px] xl:text-[24px] xl:mt-4 font-extrabold leading-[1.5]">
          Tại sao BOM quan trọng trong quản lý sản xuất?
        </p>
        <div className="flex items-center flex-wrap gap-1 md:gap-x-3 mt-2 xl:mt-4">
          <div className="flex gap-x-1 items-center">
            <Icons.Calendar className="h-4 w-4 xl:h-6 xl:w-6" />
            <span className="text-[12px] xl:text-[16px] font-medium leading-[1.5] text-[#667F93]">
              17/11/2022
            </span>
          </div>
          <div className="w-[1px] h-4 bg-[#D9E1E7] shrink-0 hidden md:block xl:h-6"></div>
          <div className="flex items-center gap-x-1">
            <Icons.Clock className="h-4 w-4 xl:h-6 xl:w-6" />
            <span className="text-[12px] xl:text-[16px] font-medium leading-[1.5] text-[#667F93]">
              10 phút đọc
            </span>
          </div>
        </div>
        <button className="flex items-center gap-x-4 mt-3 xl:mt-4">
          <span className="text-[13px] md:text-[14px] xl:text-[18px] font-semibold leading-[1.5] text-[#667F93]">
            Khám phá thêm
          </span>
          <div className="xl:p-3">
            <Icons.ArrowRight className="h-4 w-4 xl:h-6 xl:w-6" />
          </div>
        </button>
      </div>
    </div>
  );
}
