// components/ui/frame/PageContent.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface PageContentProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

const PageContent: React.FC<PageContentProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={classNames(
        " mx-auto py-14 md:py-[118px] px-4 md:px-0",
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}

export default PageContent
