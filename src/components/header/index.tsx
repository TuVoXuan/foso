"use client";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Icons from "../icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

const LanguageOptions = [
  { value: "vi", label: "VI", icon: Icons.VietnameseFlag },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [language, setLanguage] = useState(LanguageOptions[0]);

  return (
    <div
      className={cn(
        "rounded-[40px] shadow-header py-3 px-9 flex justify-between mx-3 mt-3 max-w-[1200px]",
        "xl:mx-auto xl:mt-5 2xl:mt-6 2xl:max-w-[1280px] xl:justify-center xl:gap-x-16"
      )}
    >
      <Image
        src={logo.src}
        width={134}
        height={55.41}
        alt="logo"
        className="w-20 h-auto xl:w-[134px] xl:h-[55.41]"
      />

      <nav className="hidden xl:flex items-center">
        <ul className="flex gap-x-2 items-center">
          <li className="p-2">
            <Link
              href={"/"}
              className="text-[14px] leading-[1.5] font-medium text-[#25272A]"
            >
              Về Chúng tôi
            </Link>
          </li>
          <li className="p-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-x-2 text-[14px] leading-[1.5] font-medium text-[#25272A]">
                Giải pháp <Icons.ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-[14px] leading-[1.5] font-medium text-[#25272A]">
                  Giải pháp 1
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[14px] leading-[1.5] font-medium text-[#25272A]">
                  Giải pháp 2
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[14px] leading-[1.5] font-medium text-[#25272A]">
                  Giải pháp 3
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="p-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-x-2 text-[14px] leading-[1.5] font-bold text-[#25272A]">
                  <p className="relative after:content[''] after:absolute after:top-[calc(100%+4px)] after:left-1/2 after:-translate-y-1/2 after:rounded-full  after:h-[6px] after:w-[6px] after:bg-[#1AD598]">
                    Tài nguyên
                  </p>
                  <Icons.ChevronDown className="h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-[14px] leading-[1.5] font-medium text-[#25272A]">
                  Tài nguyên 1
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[14px] leading-[1.5] font-medium text-[#25272A]">
                  Tài nguyên 2
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[14px] leading-[1.5] font-medium text-[#25272A]">
                  Tài nguyên 3
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="p-2">
            <Link
              href={"/"}
              className="text-[14px] leading-[1.5] font-medium text-[#25272A]"
            >
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>

      <div className="hidden xl:flex items-center gap-x-2">
        <Select value={language.value}>
          <SelectTrigger
            className="w-fit px-3 py-2 rounded-[40px] border bg-linear-to-b from-[#09090B0D] to-[#09090B1A]"
            triggerIcon={<Icons.ChevronDownBold className="h-4 w-4" />}
          >
            <SelectValue placeholder="Language" asChild>
              <div className="flex items-center gap-x-3">
                <language.icon />
                {language.label}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {LanguageOptions.map((lang) => (
              <SelectItem
                key={lang.value}
                value={lang.value}
                className="flex items-center gap-x-3 text-[14px] font-medium leading-[1.5]"
              >
                <lang.icon />
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <button className="flex items-center gap-x-3 h-[38px] text-[14px] font-bold leading-[1.5] text-[#052B1E] bg-radial-[at_100%_0%] from-[#FFFFFF4D] to-[#FFFFFF00] bg-[#1AD598] py-2 px-3 rounded-[40px]">
          Trở thành khách hàng
          <Icons.ArrowTopRight className="h-[22px] w-[22px]" />
        </button>
      </div>

      <button onClick={() => setOpenMenu(true)} className="xl:hidden">
        <Menu />
      </button>

      <Sheet open={openMenu} onOpenChange={setOpenMenu}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>
              <Image
                src={logo.src}
                width={134}
                height={55.41}
                alt="logo"
                className="w-20 h-auto"
              />
            </SheetTitle>
            <SheetDescription></SheetDescription>
            <div>
              <ul className="flex flex-col">
                <li className="py-3">
                  <Link
                    href={"/"}
                    className="text-[14px] leading-[1.5] font-medium text-[#25272A]"
                  >
                    Về Chúng tôi
                  </Link>
                </li>
                <li className="py-3">
                  <Collapsible>
                    <CollapsibleTrigger className="text-[14px] leading-[1.5] font-medium text-[#25272A] flex items-center gap-x-2">
                      Giải pháp
                      <Icons.ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="text-[14px] leading-[1.5] font-medium text-[#25272A]">
                        <li className="py-2 px-4">Giải pháp 1</li>
                        <li className="py-2 px-4">Giải pháp 2</li>
                        <li className="py-2 px-4">Giải pháp 3</li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </li>
                <li className="py-3">
                  <Collapsible>
                    <CollapsibleTrigger className="text-[14px] leading-[1.5] font-bold text-[#25272A] flex items-center gap-x-2">
                      Tài nguyên <Icons.ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="text-[14px] leading-[1.5] font-medium text-[#25272A]">
                        <li className="py-2 px-4">Tài nguyên 1</li>
                        <li className="py-2 px-4">Tài nguyên 2</li>
                        <li className="py-2 px-4">Tài nguyên 3</li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </li>
                <li className="py-3">
                  <Link
                    href={"/"}
                    className="text-[14px] leading-[1.5] font-medium text-[#25272A]"
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>

              <div className="flex items-center flex-wrap gap-y-6 gap-x-3 mt-3">
                <Select value={language.value}>
                  <SelectTrigger
                    className="w-fit px-3 py-2 rounded-[40px] border bg-linear-to-b from-[#09090B0D] to-[#09090B1A]"
                    triggerIcon={<Icons.ChevronDownBold className="h-4 w-4" />}
                  >
                    <SelectValue placeholder="Language" asChild>
                      <div className="flex items-center gap-x-3">
                        <language.icon />
                        {language.label}
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {LanguageOptions.map((lang) => (
                      <SelectItem
                        key={lang.value}
                        value={lang.value}
                        className="flex items-center gap-x-3 text-[14px] font-medium leading-[1.5]"
                      >
                        <lang.icon />
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <button className="flex items-center gap-x-3 h-[38px] text-[14px] font-bold leading-[1.5] text-[#052B1E] bg-radial-[at_100%_0%] from-[#FFFFFF4D] to-[#FFFFFF00] bg-[#1AD598] py-2 px-3 rounded-[40px]">
                  Trở thành khách hàng
                  <Icons.ArrowTopRight className="h-[22px] w-[22px]" />
                </button>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
