// components/message/About_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"
import AboutSection from "@/components/ui/module/AboutSection_01"
import SectionContent from "@/components/ui/frame/SectionContent"

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent id="about" className="!pb-0 !px-0">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1240px] mx-auto px-5">
          <ContentHeadline
            enTitle="Who we are"
            mainTitle=""
            enTitleClassName=""
            titleClassName=""
            className = "mb-4 md:mb-10"
          />
        </section>
        <AboutSection
          title="地域と共に歩み、\n
未来をつなぐ\n
再生可能エネルギー"
          description={`バイオマス発電は、再生可能エネルギーの中でも 「安定した電力供給」 と 「地域資源の循環」 を両立できる仕組みです。
木材を燃やす際に CO₂は排出されますが、成長段階で木が吸収した CO₂と相殺されるため、大気中の CO₂を増やさない “カーボンニュートラル” を実現します。
当社は 100％北海道産の燃料 を使用し、森林整備で生じる間伐材・林地残材などを有効活用。森林の健全な維持と林業の持続可能性を支えるとともに、地域に未来への資産を残しています。
健全な森は、川を守り、里を潤し、豊かな海を育みます。
山を整えることは、漁業・農業・観光など、地域の産業を支える大切な基盤です。
私たちは、燃料調達から発電運営までを一貫して担い、地域に雇用と活力を生み出しています。
「森・水・人」が循環する社会の実現に貢献し、地域になくてはならない発電所を目指します。`}
          buttonHref="/coming-soon"
          // 以下は任意
          // imageUrl="/path/to/image.jpg"
          // position="代表取締役"
          // name="山田太郎"
        />
      </SectionContent>
    </>
  )
}

export default About_01
