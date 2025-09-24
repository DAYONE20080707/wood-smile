// components/news/News_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
// import { microcms } from "@/lib/microcms"
import { Cms } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import MoreButton from "@/components/ui/button/MoreButton"
import { blogsFetch } from "@/lib/api/blogsFetch"
// import ComingSoon from "@/components/coming-soon/ComingSoon"
import SectionContent from "@/components/ui/frame/SectionContent"

interface NewsProps {
  limit?: number
}

const News_01 = ({ limit = 3 }: NewsProps) => {
  const [contents, setContents] = useState<Cms[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 旧データフェッチ処理
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "news",
          queries: { limit },
        })
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents)
        } else {
          console.error("Unexpected data format:", data)
        }
      } catch (error) {
        console.error("Failed to fetch news:", error)
      }
      setLoading(false)
    }

    getWorks()
    */

    // 新データフェッチ処理（共通化）
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        const data = await blogsFetch.list(Math.min(limit ?? 100, 100))
        if (mounted) setContents(data)
      } catch (error) {
        console.error("Failed to fetch news:", error)
        if (mounted) setContents([])
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [limit])

  if (loading) return <h1>Loading...</h1>
  if (!contents || contents.length === 0)
    return (
      <SectionContent className="bg-white">
        <section className="md:max-w-[1200px] mx-auto">
          <ContentHeadline
            enTitle="News"
            mainTitle="WOOD-SMILEから皆さまへお知らせ"
          />
          <p className="py-16 text-2xl md:text-2xl font-medium tracking-wider">
            Coming Soon...
          </p>
        </section>
      </SectionContent>
    )

  return (
    <SectionContent className="bg-white">
      <section className="md:max-w-[1200px] mx-auto">
        <ContentHeadline
          enTitle="News"
          mainTitle="WOOD-SMILEから皆さまへお知らせ"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10">
          {contents.map((post) => (
            <div key={post.id} className="w-full">
              <div className="w-full h-[250px] mt-5 md:mt-0 rounded-t-2xl overflow-hidden">
                {post.image && (
                  <Image
                    src={post.image.url}
                    alt={post.title ?? "ブログサムネイル"}
                    width={370}
                    height={223}
                    className="w-full h-full rounded-[10px] object-cover"
                  />
                )}
              </div>
              <div className="bg-white mt-6">
                <p className="text-lg font-medium break-words min-h-14 line-clamp-2 leading-[160%] tracking-[0.03em]">
                  {post.title}
                </p>
                <p className="mt-2 text-base font-medium leading-[140%] font-en">
                  {post.date
                    ? format(new Date(post.date), "yyyy.MM.dd", { locale: ja })
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <MoreButton
            className="text-accentColor border-accentColor"
            href="/coming-soon"
          />
        </div>
      </section>
    </SectionContent>
  )
}

export default News_01
