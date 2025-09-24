// components/ui/main/module/Breadcrumb.tsx

import Link from "next/link"
import { ChevronRight } from "react-feather"

interface BreadcrumbProps {
  mainTitle: React.ReactNode
  parentDirectoryName?: string
  parentDirectoryLink?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  mainTitle,
  parentDirectoryName,
  parentDirectoryLink,
}) => {
  return (
    <div className="max-w-[1240px] mx-auto text-sm py-[19px] px-5 flex items-center space-x-1 flex-wrap">
      <Link href="/">トップページ</Link>
      <ChevronRight className="w-4 h-4" />
      {parentDirectoryName && parentDirectoryLink && (
        <>
          <Link href={parentDirectoryLink}>{parentDirectoryName}</Link>
          <ChevronRight className="w-4 h-4" />
        </>
      )}
      <div>{mainTitle}</div>
    </div>
  )
}

export default Breadcrumb
