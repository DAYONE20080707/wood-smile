// components/ui/frame/ContentHeadline.tsx
import React from "react"
import classNames from "classnames"
import { ContentHeadlineProps } from "@/types"
import Image from "next/image"

const ContentHeadline: React.FC<ContentHeadlineProps> = ({
  mainTitle,
  subTitle,
  enTitle,
  className = "",
  titleClassName = "",
  enTitleClassName = "",
  ImageSrc,
  ImageWidth,
  ImageHeight,
  id,
}) => {
  return (
    <section
      id={id}
      className={classNames(
        "w-full md:max-w-[1200px] mb-16 tracking-wide",
        className
      )}
    >
      {ImageSrc && (
        <Image
          src={ImageSrc}
          width={ImageWidth}
          height={ImageHeight}
          alt={String(mainTitle)}
          className="mb-4"
        />
      )}
      <p
        className={classNames(
          "text-sm md:text-lg font-semibold font-en tracking-[0.03em] text-lightGreen",
          titleClassName
        )}
      >
        {enTitle}
      </p>
      <h2
        className={classNames(
          "text-[40px] leading-[150%] mt-1 tracking-[0.05em] text-accentColor",
          enTitleClassName
        )}
      >
        {mainTitle}
      </h2>

      {subTitle && <h2>{subTitle}</h2>}
    </section>
  )
}

export default ContentHeadline
