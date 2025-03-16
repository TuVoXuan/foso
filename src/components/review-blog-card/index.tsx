"use client";
import React, { useState } from "react";
import greenHeart from "../../assets/images/green-heart.png";
import hushedFace from "../../assets/images/hushed-face.png";
import poutingFace from "../../assets/images/pouting-face.png";
import starStruck from "../../assets/images/star-struck.png";
import thumbsUp from "../../assets/images/thumbs-up.png";
import yawningFace from "../../assets/images/yawning-face.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

const reviewOptions = [
  { img: thumbsUp, label: "Hữu ích", count: 1 },
  { img: greenHeart, label: "Yêu thích", count: 2 },
  { img: starStruck, label: "Thú vị", count: 0 },
  { img: hushedFace, label: "Bất ngờ", count: 1 },
  { img: yawningFace, label: "Nhàm chán", count: 0 },
  { img: poutingFace, label: "Tức giận", count: 0 },
];

export default function ReviewBlogCard() {
  const [selectedReview, setSelectedReview] = useState<string>("Hữu ích");

  return (
    <div className="bg-white shadow-review-blog-card rounded-[12px] py-3 mt-10 xl:py-6 xl:rounded-[24px] xl:mt-[72px]">
      <p className="text-center text-[16px] xl:text-[20px] font-extrabold leading-[1.5] text-[#33404A] mb-1">
        Bạn thấy bài viết như thế nào?
      </p>
      <p className="text-[14px] xl:text-[16px] text-center font-medium leading-[1.5] text-[#33404A] mb-6">
        4 phản hồi
      </p>
      <div className="flex items-center justify-center flex-wrap gap-2 px-4 xl:gap-x-8">
        {reviewOptions.map((option) => (
          <div
            key={option.label}
            className={cn(
              "cursor-pointer flex flex-col gap-y-1 items-center w-20 py-1 border border-transparent rounded-[4px] xl:w-[90px]",
              selectedReview === option.label && "border-[#10805B]"
            )}
            onClick={() => setSelectedReview(option.label)}
          >
            <Image
              src={option.img}
              alt={option.label}
              className="w-6 h-6 xl:w-12 xl:h-12"
            />
            <span
              className={cn(
                "font-bold text-[14px] leading-[1.5] text-[#33404A] xl:text-[16px]",
                selectedReview === option.label && "text-[#10805B]"
              )}
            >
              {option.count}
            </span>
            <span
              className={cn(
                "text-[12px] font-medium leading-[1.5] text-[#33404A] xl:text-[14px]",
                selectedReview === option.label && "text-[#10805B]"
              )}
            >
              {option.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
