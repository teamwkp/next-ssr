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
import Recommend from "@/components/home/Recommend"

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
        <div className="lg:bg-line-grey md:bg-line-grey cursor-pointer w-full lg:mt-[100px] md:mt-[100px] mt-[40px] h-[220px] flex items-center rounded-2xl relative">
          <div className="lg:ml-[143px] md:ml-[80px] lg:w-[35%] md:w-[35%] w-full flex flex-col items-center">
            <div className="relative mb-[15px]">
              <img
                className="hidden lg:block"
                src="/home_banner01.jpg"
                width="320px"
                height="auto"
                alt=""
              />
              <img
                className="lg:hidden"
                src="/home_banner01.jpg"
                width="230px"
                height="auto"
                alt=""
              />
            </div>

            <div className="sub-text text-center font-light text-[13px] leading-6">
              <div>专注于以自行车码表为代表的运动智能硬件</div>
              <div>让骑行变得更加轻松</div>
              <div>服务于全球超百万骑行运动爱好者</div>
            </div>
          </div>
          <AnimatedWrap
            type="reveal"
            duration={1000}
            overlayClassName="absolute lg:right-[80px] md:right-[0px] bottom-0 hidden lg:block md:block"
          >
            <img src="/home_banner02.png" width="450px" height="auto" alt="" />
          </AnimatedWrap>
        </div>

        <div className="bg-no-repeat bg-center rounded-2xl lg:mt-[48px] md:mt-[48px] mt-[0px] overflow-hidden relative cursor-pointer hover:shadow-lg transition ease-linear delay-150">
          <VideoPlay />
        </div>
        <div className="lg:mt-[48px] md:mt-[48px] mt-[30px] bg-line-grey h-[300px] rounded-2xl flex items-center relative">
          <div className="ml-[100px]">
            <div className="font-bold text-[36px] leading-[55px]">IGS630S</div>
            <div className="flex items-center mt-[8px]">
              <div className="mr-[15px] text-[20px] text-[#121217]">
                <AnimatedWrap type="reveal-fadeInUp">
                  智能导航 探迹山海
                </AnimatedWrap>
              </div>
              <img src="/hottest.png" width="32px" height="32px" alt="" />
            </div>
            <div className="flex pt-[20px] items-center mt-[10px]">
              <div
                className="w-[112px] h-[40px] rounded-md hover:scale-105 transition-all cursor-pointer text-white flex items-center justify-center"
                style={{
                  background: "linear-gradient(75deg, #FF612F, #FFA74A)",
                }}
              >
                立即购买
              </div>
              <div className="text-[#121217] opacity-[0.6] text-[16px] font-normal ml-[24px] border-b-[2px] border-[#1b1b20b1] pb-[3px] cursor-pointer">
                了解更多
              </div>
            </div>
            <AnimatedWrap
              type="reveal"
              duration={1000}
              overlayClassName="absolute right-[100px] bottom-0"
            >
              <img src="/home_prod02.jpg" width="280px" height="auto" alt="" />
            </AnimatedWrap>
          </div>
        </div>
        <Recommend />
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
