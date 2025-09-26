// components/ui/itemCard/ServiceCard.tsx
import Image from "next/image"
import classNames from "classnames"
import ArrowRightLinkButton from "@/components/ui/button/ArroeRightLinkButton"
import MoreLinkButton from "../button/MoreButton"

interface ServiceCardProps {
  id: number
  subTitle: string
  title: string
  description: string
  image: string // 画像パスを受け取る
  href: string // リンク先のURLを受け取る
  className?: string // 任意のクラス名を受け取る
  imageContainerClass?: string // 画像コンテナのクラスを受け取る
  showButton?: boolean // ボタンの表示を制御するプロパティを追加
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  subTitle,
  description,
  image,
  href,
  className = "",
  imageContainerClass = "",
  showButton = true, // デフォルトでボタンを表示する設定
}) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </span>
    ))
  }
  return (
    <div
      className={classNames(
        "relative overflow-hidden md:flex gap-20 items-center",
        className
      )}
    >
      <div
        className={classNames(
          {
            "h-[250px] md:h-[351px] ": !className.includes("overlay"),
            "h-[250px] md:h-[600px]": className.includes("overlay"),
          },
          "md:w-1/2 relative rounded-[30px]",
          imageContainerClass
        )}
      >
        <Image
          fill
          src={image}
          alt={`solution ${id}`}
          objectFit="cover"
          className="block object-top rounded-[30px]"
          priority
        />
      </div>

      <div
        className={classNames("space-y-6 ", {
          " md:h-[600px]  rounded-[30px] absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white":
            className.includes("overlay"),
          "md:w-1/2 relative text-black ": !className.includes("overlay"),
        })}
      >
        <div>
          <div
            className={classNames(
              "font-bold text-[16px] font-en text-left text-accentColor ",
              {
                "text-white": className.includes("overlay"),
                "text-accentColor": !className.includes("overlay"),
              }
            )}
          >
            {subTitle}
          </div>
          <div
            className={classNames(
              "mt-1 font-medium text-[22px] text-left pb-6 border-b border-borderGray",
              {
                "text-white": className.includes("overlay"),
                "text-baseColor": !className.includes("overlay"),
              }
            )}
          >
            {title}
          </div>
        </div>

        <div
          className={classNames("font-light leading-[160%]", {
            "text-white  px-10 md:px-20": className.includes("overlay"),
            "text-baseColor": !className.includes("overlay"),
          })}
        >
          {convertNewLines(description)}
        </div>
        <div
          className={classNames({
            hidden: className.includes("overlay"),
            "text-black": !className.includes("overlay"),
          })}
        >
          <MoreLinkButton href={href} className="mt-6">
            View more
          </MoreLinkButton>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
