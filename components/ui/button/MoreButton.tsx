// components/ui/button/MoreLinkButton.tsx

import Link from "next/link"
import classNames from "classnames"

const MoreLinkButton = ({
  href = "/", // デフォルトの href を "/" に設定
  className = "",
  children = "View more", // デフォルトのテキスト
  variant = "green", // デフォルトは白バージョン
}: {
  href?: string
  className?: string
  children?: React.ReactNode
  variant?: "white" | "green" | "black"
}) => {
  // バリエーションに基づくスタイルを決定
  const getVariantStyles = () => {
    switch (variant) {
      case "green":
        return "bg-accentColor text-white border-accentColor"
      case "black":
        return "bg-transparent text-baseColor border-baseColor"
      default: // white
        return "bg-transparent text-white border-white"
    }
  }

  // 矢印の色を決定
  const getArrowColor = () => {
    switch (variant) {
      case "green":
        return "white"
      case "black":
        return "black"
      default: // white
        return "white"
    }
  }

  return (
    <Link
      href={href}
      className={classNames(
        "font-en tracking-[0.03em] cursor-pointer flex items-center justify-between w-full md:w-[350px] px-6 py-4 relative group rounded-full font-semibold leading-[160%]",
        getVariantStyles(),
        className
      )}
    >
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="12" fill="white" />
        <path d="M6.25 12H17.75" stroke="#009789" />
        <path d="M13.75 8L17.75 12L13.75 16" stroke="#009789" />
      </svg>
    </Link>
  )
}

export default MoreLinkButton
