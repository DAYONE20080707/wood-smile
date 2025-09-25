
import KeyVisual_01 from "@/components/top/kv/KeyVisual_01"
import About_01 from "@/components/top/about/About_01"
import Message_02 from "@/components/top/message/Message_02"
import Service_01 from "@/components/top/service/Service_01"
import News_01 from "@/components/top/news/News_01"
import Aside_01 from "@/components/ui/module/aside/Aside_01"

// メインページ
const HomePage = () => {
  return (
    <div>
      <KeyVisual_01 />
      <About_01 />
      <Service_01 />
      <News_01/>
      <Message_02 />
      <Aside_01 />
    </div>
  )
}

export default HomePage
