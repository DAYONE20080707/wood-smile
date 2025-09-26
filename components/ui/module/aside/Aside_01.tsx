// components/module/aside/Aside_01.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/ui/frame/PageContent";
import MoreButton from "@/components/ui/button/MoreButton";

const Aside_01 = () => {
  return (
    <>
      <section className="py-10 md:py-[120px] mx-auto bg-[url('/aside/aside.png')] bg-no-repeat bg-cover flex flex-col items-center  text-white px-4">
          <h4 className="text-sm md:text-lg font-en font-semibold tracking-[0.03em]">
          Recruit
          </h4>
          <p className="text-center text-xl md:text-[40px] font-medium leading-[150%] tracking-[0.05em] mt-4">
          新たな感動が生まれるステージへ
          </p>
          <MoreButton className="mt-16" href="/coming-soon" />
        </section>
    </>
  );
};

export default Aside_01;
