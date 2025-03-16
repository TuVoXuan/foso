"use client";
import ArticleCard from "@/components/article-card";
import Icons from "@/components/icons";
import ReviewBlogCard from "@/components/review-blog-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment, useState } from "react";
import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import blogImg1 from "../../../assets/images/blog-img1.png";
import blogImg2 from "../../../assets/images/blog-img2.png";
import blogImg3 from "../../../assets/images/blog-img3.png";
import blogImg4 from "../../../assets/images/blog-img4.png";
import blogImg5 from "../../../assets/images/blog-img5.png";
import logoPattern from "../../../assets/images/logo-pattern.png";
import ShareButtons from "@/components/share-buttons";
import doubleQuote from "../../../assets/images/double-qoute.png";

const blogAppendix = [
  { label: "1. Quy trình 5S là gì?", id: "section1" },
  { label: "2. Lợi ích quy trình 5S đem lại", id: "section2" },
  {
    label: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
    id: "section3",
    children: [
      { label: "3.1 Cải thiện rõ nét môi trường làm việc", id: "section3-1" },
      { label: "3.2 Tiết kiệm thời gian đáng kể", id: "section3-2" },
      { label: "3.3 Tăng năng suất làm việc", id: "section3-3" },
      { label: "3.4 Tiết kiệm chi phí", id: "section3-4" },
      { label: "3.5 Tăng chất lượng sản phẩm", id: "section3-5" },
    ],
  },
  {
    label: "4. Quy trình 5S gồm các bước:",
    id: "section4",
    children: [
      { label: "4.1 Seiri (Ngăn nắp)", id: "section4-1" },
      { label: "4.2 Seiton (Sắp xếp)", id: "section4-2" },
      { label: "4.3 Seiso (Vệ sinh)", id: "section4-3" },
      { label: "4.4 Seiketsu (Tiêu chuẩn hóa)", id: "section4-4" },
      { label: "4.5 Shitsuke (Kỷ luật)", id: "section4-5" },
    ],
  },
  {
    label: "5. Quy trình được thực hiện như sau:",
    id: "section5",
    children: [
      { label: "5.1 Giai đoạn chuẩn bị", id: "section5-1" },
      { label: "5.2 Triển khai rộng rãi", id: "section5-2" },
      { label: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp", id: "section5-3" },
      { label: "5.4 Sàng lọc, sắp xếp và đánh giá", id: "section5-4" },
      { label: "5.5 Đánh giá", id: "section5-5" },
    ],
  },
  { label: "6. Quy trình 5S có giống với Kaizen?", id: "section6" },
  { label: "7. Đối tượng nào nên áp dụng 5S?", id: "section7" },
  {
    label: "8. Các yếu tố tạo nên thành công cho quy trình 5S",
    id: "section8",
  },
];

export default function BlogDetails() {
  const [activeAppendix, setActiveAppendix] = useState<string>("section1");
  function scrollToAnchor(anchorId: string, offset: number = 50) {
    setActiveAppendix(anchorId);
    const element = document.getElementById(anchorId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <div className="xl:relative p-3 sm:py-5 xl:py-8 xl:px-0 xl:max-w-[1200px] xl:mx-auto 2xl:max-w-[1440px]">
      <div className="flex text-[14px] leading-[1.5] text-[#17181A] mb-6 sm:mb-4 xl:mb-12">
        Trang chủ {">"} Tài nguyên {">"} Blog {">"}
        <span className="font-semibold text-[#050505] inline-block ml-1">
          Quản lý sản xuất
        </span>
      </div>

      {/* share section */}
      <div className="2xl:absolute -left-[93px] top-[220px] h-full">
        <div className="fixed z-10 right-4 bottom-4 xl:right-6 xl:bottom-6 2xl:sticky 2xl:top-[100px] 2xl:right-auto 2xl:bottom-auto">
          <ShareButtons />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row xl:gap-x-6">
        {/* Blog Appendix */}
        <div className="xl:order-2 xl:w-[380px] xl:space-y-6 xl:shrink-0 2xl:w-[492px]">
          <Accordion type="single" collapsible defaultValue="blogAppendix">
            <AccordionItem value="blogAppendix">
              <AccordionTrigger
                className="text-[16px] xl:text-[20px] font-extrabold leading-[2] text-[#050505] items-center"
                triggerIcon={
                  <Icons.ChevronDownGreen className="pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
                }
              >
                Nội dung bài viết
              </AccordionTrigger>
              <AccordionContent className="py-0">
                {blogAppendix.map((mainSection) => {
                  if (mainSection.children) {
                    return (
                      <Fragment key={mainSection.id}>
                        <p
                          onClick={() => scrollToAnchor(mainSection.id)}
                          className={cn(
                            "text-[14px] xl:text-[16px] leading-[2] font-medium cursor-pointer",
                            activeAppendix === mainSection.id &&
                              "text-[#15AA7A] font-bold"
                          )}
                        >
                          {mainSection.label}
                        </p>
                        {mainSection.children.map((childSection) => (
                          <p
                            key={childSection.id}
                            className={cn(
                              "pl-3 xl:pl-4 text-[14px] xl:text-[16px] leading-[2] font-medium cursor-pointer",
                              activeAppendix === childSection.id &&
                                "text-[#15AA7A] font-bold"
                            )}
                            onClick={() => scrollToAnchor(childSection.id)}
                          >
                            {childSection.label}
                          </p>
                        ))}
                      </Fragment>
                    );
                  }
                  return (
                    <p
                      key={mainSection.id}
                      className={cn(
                        "text-[14px] xl:text-[16px] leading-[2] font-medium cursor-pointer",
                        activeAppendix === mainSection.id &&
                          "text-[#15AA7A] font-bold"
                      )}
                      onClick={() => scrollToAnchor(mainSection.id)}
                    >
                      {mainSection.label}
                    </p>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Image
            src={banner1}
            alt="banner1"
            className="hidden xl:block xl:w-[300px] 2xl:w-[366px] h-auto"
          />

          <Image
            src={banner2}
            alt="banner1"
            className="hidden xl:block xl:w-[300px] 2xl:w-[366px] h-auto"
          />
        </div>

        {/* Blog Details */}
        <div className="xl:order-1 xl:flex-1">
          <p className="mb-4 text-[12px] font-medium leading-[1.5] text-[#0F4F9E] py-1 px-2 rounded-[8px] bg-[#E2F0FE] w-fit">
            Quản Lý Sản Xuất
          </p>
          <h1 className="text-[20px] xl:text-[28px] font-extrabold text-[#050505] mb-4">
            Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
          </h1>
          <div className="flex flex-col gap-4 xl:flex-row xl:justify-between">
            <div className="flex items-center gap-x-3">
              <div className="h-10 w-10 xl:h-14 xl:w-14 rounded-full border border-[#F1F5F7] bg-white flex items-center justify-center">
                <Image
                  src={logoPattern}
                  alt="logo-pattern"
                  className="object-contain w-5 h-5 xl:h-6 xl:w-6"
                />
              </div>
              <div>
                <p className="text-[#667F93] text-[12px] xl:text-[14px] font-medium leading-[1.5]">
                  Tác giả
                </p>
                <p className="text-[#33404A] text-[14px] xl:text-[16px] font-bold leading-[1.5]">
                  FOSO Creator
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="flex items-center gap-x-2">
                <Icons.Calendar className="h-4 w-4 xl:h-6 xl:w-6" />
                <span className="text-[#667F93] text-[14px] xl:text-[16px] font-medium leading-[1.5]">
                  Cập nhật vào: 17/11/2022
                </span>
              </div>
              <div className="h-[14px] w-[1px] bg-[#D9E1E7] xl:h-6"></div>
              <div className="flex items-center gap-x-2">
                <Icons.Clock className="h-4 w-4 xl:h-6 xl:w-6" />
                <span className="text-[#667F93] text-[14px] xl:text-[16px] font-medium leading-[1.5]">
                  10 phút đọc
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-6">
            <div>
              <Image
                src={blogImg1}
                alt="Quy trình 5s là gì?"
                className="w-full h-auto"
              />
              <p className="text-center text-[#667F93] text-[14px] xl:text-[16px] leading-[1.5] mt-2">
                Quy trình 5s là gì?
              </p>
            </div>
            <div className="relative pt-3 pb-2 px-5 sm:px-10 xl:px-14">
              <Image
                src={doubleQuote}
                alt="double quote"
                className="w-9 h-auto absolute top-0 -left-1 xl:w-12"
              />
              <p className="text-[16px] xl:text-[20px] font-medium italic leading-[1.2] text-center text-[#33404A]">
                Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì?
                Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời
                cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo
                nên thành công của quy trình bạn nhé.
              </p>
            </div>
            <div>
              <h2 id="section1" className="text-heading">
                1. Quy trình 5S là gì?
              </h2>
              <br />
              <p className="text-paragraph">
                Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong
                sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào
                Nhật Bản.
              </p>
              <br />
              <p className="text-paragraph">
                Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận
                dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5
                chữ S đầu trong tiếng Nhật:
              </p>
              <br />
              <ul className="list-disc pl-3">
                <li className={cn("text-paragraph text-[#15AA7A] font-bold")}>
                  Seiri <span className="text-paragraph">(Ngăn nắp)</span>
                </li>
                <li className={cn("text-paragraph text-[#15AA7A] font-bold")}>
                  Seiso <span className="text-paragraph">(Sạch sẽ)</span>
                </li>
                <li className={cn("text-paragraph text-[#15AA7A] font-bold")}>
                  Seiton <span className="text-paragraph">(Trật tự)</span>
                </li>
                <li className={cn("text-paragraph text-[#15AA7A] font-bold")}>
                  Shitsuke <span className="text-paragraph">(Kỷ luật)</span>
                </li>
                <li className={cn("text-paragraph text-[#15AA7A] font-bold")}>
                  Seiketsu{" "}
                  <span className="text-paragraph">(Tiêu chuẩn hóa)</span>
                </li>
              </ul>
              <br />

              <h2 id="section2" className="text-heading">
                2. Lợi ích quy trình 5S đem lại
              </h2>
              <br />
              <p className="text-paragraph">
                Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                mỗi bước của quy trình với mục đích cải tiến môi trường làm việc
                của doanh nghiệp.
              </p>
              <br />
              <p className="text-paragraph">
                Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh
                nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc
                logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng
                sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần
                thiết.
              </p>
              <br />
              <p className="text-paragraph">
                Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói
                quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên
                một văn hóa doanh nghiệp tích cực.
              </p>
            </div>
            <div>
              <Image
                src={blogImg2}
                alt="Tại sao doanh nghiệp cần quy trình 5S?"
                className="w-full h-auto"
              />
              <p className="text-center text-[#667F93] text-[14px] xl:text-[16px] leading-[1.5] mt-2">
                Tại sao doanh nghiệp cần quy trình 5S?
              </p>
            </div>
            <div>
              <h2 id="section3" className="text-heading">
                3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
              </h2>
              <br />
              <p className="text-paragraph">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <br />
              <h3 id="section3-1" className="text-sub-heading">
                3.1 Cải thiện rõ nét môi trường làm việc
              </h3>
              <p className="text-paragraph">
                Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn
                gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm
                việc hiệu quả cho từng cá nhân trong doanh nghiệp.
              </p>
              <br />
              <h3 id="section3-2" className="text-sub-heading">
                3.2 Tiết kiệm thời gian đáng kể
              </h3>
              <p className="text-paragraph">
                Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
                thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ
                dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ
                đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.
              </p>
              <br />
              <h3 id="section3-3" className="text-sub-heading">
                3.3 Tăng năng suất làm việc
              </h3>
              <p className="text-paragraph">
                Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết,
                tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm
                và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm
                thời gian và tăng năng suất làm việc.
              </p>
              <br />
              <h3 id="section3-4" className="text-sub-heading">
                3.4 Tiết kiệm chi phí
              </h3>
              <p className="text-paragraph">
                Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và
                sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu
                chi phí vận hành đáng kể cho doanh nghiệp của mình.
              </p>
              <br />
              <h3 id="section3-5" className="text-sub-heading">
                3.5 Tăng chất lượng sản phẩm
              </h3>
              <p className="text-paragraph">
                5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ
                đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản
                xuất không mong muốn.
              </p>
            </div>
            <div>
              <Image
                src={blogImg3}
                alt="Quy trình 5s gồm các bước"
                className="w-full h-auto"
              />
              <p className="text-center text-[#667F93] text-[14px] xl:text-[16px] leading-[1.5] mt-2">
                Quy trình 5s gồm các bước
              </p>
            </div>
            <div>
              <h2 id="section4" className="text-heading">
                4. Quy trình 5S gồm các bước
              </h2>
              <br />
              <p className="text-paragraph">
                5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường
                hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao
                gồm năm bước cơ bản sau:
              </p>
              <br />
              <h3 id="section4-1" className="text-sub-heading">
                4.1 Seiri (Ngăn nắp)
              </h3>
              <p className="text-paragraph">
                Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp,
                nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để
                tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm
                thời gian.
              </p>
              <br />
              <h3 id="section4-2" className="text-sub-heading">
                4.2 Seiton (Sắp xếp)
              </h3>
              <p className="text-paragraph">
                Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết
                bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm
                kiếm và sử dụng chúng một cách dễ dàng.
              </p>
              <br />
              <h3 id="section4-3" className="text-sub-heading">
                4.3 Seiso (Vệ sinh)
              </h3>
              <p className="text-paragraph">
                Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân
                trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ.
                Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây
                nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
              </p>
              <br />
              <h3 id="section4-4" className="text-sub-heading">
                4.4 Seiketsu (Tiêu chuẩn hóa)
              </h3>
              <p className="text-paragraph">
                Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước
                này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách
                thức sử dụng các dụng cụ, thiết bị, tài liệu.
              </p>
              <br />
              <h3 id="section4-5" className="text-sub-heading">
                4.5 Shitsuke (Kỷ luật)
              </h3>
              <p className="text-paragraph">
                Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng
                vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S
                trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật
                và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì
                và tuân thủ theo quy trình.
              </p>
            </div>
            <div>
              <Image
                src={blogImg4}
                alt="Các bước thực hiện quy trình 5s"
                className="w-full h-auto"
              />
              <p className="text-center text-[#667F93] text-[14px] xl:text-[16px] leading-[1.5] mt-2">
                Các bước thực hiện quy trình 5s
              </p>
            </div>
            <div>
              <h2 id="section5" className="text-heading">
                5. Quy trình được thực hiện như sau:
              </h2>
              <br />
              <p className="text-paragraph">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <br />
              <h3 id="section5-1" className="text-sub-heading">
                5.1 Giai đoạn chuẩn bị
              </h3>
              <p className="text-paragraph">
                Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng
                ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc
                phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ
                hiệu quả hơn.
              </p>
              <br />
              <h3 id="section5-2" className="text-sub-heading">
                5.2 Triển khai rộng rãi{" "}
              </h3>
              <p className="text-paragraph">
                Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy
                trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến
                thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
              </p>
              <br />
              <h3 id="section5-3" className="text-sub-heading">
                5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
              </h3>
              <p className="text-paragraph">
                Đây là bước có thể khiến mọi người không hào hứng trong các bước
                của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo
                không khí hào hứng cho từng cá nhân.
              </p>
              <br />
              <h3 id="section5-4" className="text-sub-heading">
                5.4 Sàng lọc, sắp xếp và đánh giá
              </h3>
              <p className="text-paragraph">
                Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ
                doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc
                thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn
                và dễ dàng tìm kiếm sau này.
              </p>
              <br />
              <h3 id="section5-5" className="text-sub-heading">
                5.5 Đánh giá
              </h3>
              <p className="text-paragraph">
                Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá
                trình cải tiến và xem xét cần cải tiến phương diện nào hay không
                trong quá trình thực hiện quy trình 5S.
              </p>
              <br />
              <h2 id="section6" className="text-heading">
                6. Quy trình 5S có giống với Kaizen?
              </h2>
              <br />
              <p className="text-paragraph">
                Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
                không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng
                giữa chúng có mối quan hệ chặt chẽ với nhau.
              </p>
            </div>
            <div className="pl-3 py-2 xl:pl-9 xl:pt-3 xl:pb-2 border-l-[3px] border-l-[#15AA7A] text-[16px] xl:text-[20px] font-medium italic leading-[1.4] text-[#33404A]">
              Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục
              trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích
              cực, mang tính liên tục và bền vững.
            </div>
            <div className="pl-3 py-2 xl:pl-9 xl:pt-3 xl:pb-2 border-l-[3px] border-l-[#15AA7A] text-[16px] xl:text-[20px] font-medium italic leading-[1.4] text-[#33404A]">
              Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến
              trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt,
              tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
            </div>
            <div>
              <p className="text-paragraph">
                Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy
                tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm
                việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước
                đầu tiên trong quá trình cải tiến liên tục của phương pháp
                Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải
                tiến tiếp theo.
              </p>
              <br />
              <h2 id="section7" className="text-heading">
                7. Đối tượng nào nên áp dụng 5S?
              </h2>
              <br />
              <p className="text-paragraph">
                Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng
                rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác
                nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản
                xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các
                doanh nghiệp nhỏ.
              </p>
              <br />
              <p className="text-paragraph">
                Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức
                tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng
                hiệu quả.
              </p>
            </div>
            <div>
              <Image
                src={blogImg5}
                alt="Các yếu tố tạo nên thành công cho quy trình 5S"
                className="w-full h-auto"
              />
              <p className="text-center text-[#667F93] text-[14px] xl:text-[16px] leading-[1.5] mt-2">
                Các yếu tố tạo nên thành công cho quy trình 5S
              </p>
            </div>
            <div>
              <h2 id="section8" className="text-heading">
                8. Các yếu tố tạo nên thành công cho quy trình 5S
              </h2>
              <br />
              <p className="text-paragraph">
                Và những nhân tố quyết định đến quá trình thành công của quy
                trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là
                từ phía:
              </p>
            </div>
            <div>
              <ul className="text-paragraph list-disc pl-3">
                <li>
                  Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp.
                  Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có
                  áp dụng quy tắc này hay không.
                </li>
                <li>
                  Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh
                  đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch
                  thực hiện triển khai 5S.
                </li>
                <li>
                  Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần
                  huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi
                  ích chung của tổ chức, của doanh nghiệp.
                </li>
              </ul>
              <br />
              <p className="text-paragraph">
                Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng
                cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt
                tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và
                với những thông tin bổ ích như trên, FOSO mong rằng phần nào
                giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc
                trong tương lai.
              </p>
            </div>
          </div>
          <ReviewBlogCard />
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-10 xl:mt-[96px]">
        <h2 className="text-[20px] xl:text-[36px] font-extrabold leading-[2] text-[#050505] mb-6">
          Bài viết liên quan
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:gap-8">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
}
