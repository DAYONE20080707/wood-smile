// components/kv/KeyVisual_01.tsx

"use client";

import FirstViewContent from "@/components/top/kv/FirstViewContent";
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline";
import KeyVisualContent from "@/components/top/kv/KeyVisualContent";

// キービジュアル
const KeyVisual_01 = () => {
  return (
    <>
      <FirstViewContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section>
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-screen" />
        </section>
        <div className="relative  md:md:max-w-[1720px] mx-auto ">
          <TopPageHeadline
            mainTitle={
              <>
                <span>
                Biomass Power Generation<br/>
                for the Furture
                </span>
              </>
            }
            subtitleBottom={
              <>
                将来を見据えた再生エネルギー
              </>
            }
            className="absolute left-0 bottom-56 md:bottom-[100px] text-white text-left"
          />
        </div>
      </FirstViewContent>
    </>
  );
};

export default KeyVisual_01;
