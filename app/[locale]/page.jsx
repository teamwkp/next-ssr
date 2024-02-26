import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Advertisement from "@/components/home/Advertisement"
import DataApp from "@/components/home/DataApp"
import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import Image from "next/image"
import AnimatedWrap from "@/components/AnimatedWrap"

import { CDN_URL } from "@/constants"
import VideoPlay from "@/components/home/VideoPlay"

const i18nNamespaces = ["default"]
const Home = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div className="media-container mx-auto">
        <div className="bg-line-grey cursor-pointer w-full mt-[100px] h-[220px] flex items-center rounded-2xl relative">
          <div className="ml-[143px] min-w-[35%] flex flex-col items-center">
            <div className="relative mb-[15px]">
              <img
                src="/home_banner01.jpg"
                width="320px"
                height="auto"
                alt=""
              />
            </div>
            <div className="sub-text text-center font-light text-[13px] leading-6">
              <AnimatedWrap type={"fade"} delay={200}>
                <div>专注于以自行车码表为代表的运动智能硬件</div>
                <div>让骑行变得更加轻松</div>
                <div>服务于全球超百万骑行运动爱好者</div>
              </AnimatedWrap>
            </div>
          </div>
          <div className="absolute right-[126px] bottom-0">
            <img src="/home_banner02.jpg" width="380px" height="auto" alt="" />
          </div>
        </div>

        <div className="bg-no-repeat bg-center rounded-2xl mt-[48px] overflow-hidden relative cursor-pointer hover:shadow-lg transition ease-linear delay-150">
          <VideoPlay />
        </div>
        <div
          className="mt-[48px] bg-[#F7F7F8] h-[300px] rounded-2xl flex items-center"
          style={{ backgroundImage: "url(/tanji-bg.png)" }}
        >
          <div className="ml-[80px] space-y-[10px]">
            <div className="font-bold text-[32px]">IGS630S</div>
            <div>智能导航 探迹山海</div>
            <div className="flex pt-[20px] items-center">
              <div
                className="w-[120px] h-[40px] cursor-pointer text-white rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(75deg, #FF612F, #FFA74A)",
                }}
              >
                立即购买
              </div>
              <div className="underline text-[#666] ml-[15px]">了解更多</div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[24px] mt-[48px]">
          <div className="h-[284px] bg-[#F7F7F8] rounded-2xl flex items-center relative group cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150">
            <div className="text-center space-y-[10px] flex flex-col justify-center absolute left-[10%]">
              <div className="font-medium text-[36px]">LW10</div>
              <div className="font-light text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                旗舰产品 智能导航
              </div>
            </div>
            <Image
              className="absolute right-[-10px] bottom-0 transition-all group-hover:translate-x-[-10px]"
              src={"/mbxl-bg.png"}
              width={350}
              height={350}
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="media-container mx-auto pb-20">
          <DataApp />
          <Advertisement />
        </div>
      </div>

      <Footer />
    </TranslationsProvider>
  )
}

export default Home
