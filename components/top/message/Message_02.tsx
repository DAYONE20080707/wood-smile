// components/message/Message_02.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"

// メッセージ
const Message_02 = () => {
  return (
    <div className="bg-bgLightBlue pb-[120px]">
      <section className=" mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-start md:items-start md:space-x-16">
          <div className="w-full h-full md:w-1/2 relative">
            <Image
              src="/top/initiatives/initiatives.jpg"
              alt="message"
              width={960}
              height={811}
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-[560px] px-5 py-16 md:py-[120px]">
            <ContentHeadline
              enTitle="Initiatives"
              mainTitle="環境に優しいビジネスで\n
あるために\n
わたしたちがしていること"
              enTitleClassName=""
              titleClassName="md:!text-[36px] tracking-[0em] leading-[150%]"
            />
            <p className="leading-[250%] text-lg ">
              木質バイオマス発電は、二酸化炭素の排出削減に貢献でき、通常は廃棄物となる未利用間伐材、製材課程で発生する端材を再利用できることから、循環型社会の構築にも役立てることができると期待されています。
            </p>
            <MoreLinkButton href="/coming-soon" className="mt-16" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Message_02
