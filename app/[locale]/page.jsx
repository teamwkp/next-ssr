import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Advertisement from "@/components/home/Advertisement"
import DataApp from "@/components/home/DataApp"
import initTranslations from "../i18n"
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
      <div className="bg-[#F2F2FA] w-full mt-[100px] h-[242px] flex items-center rounded-2xl relative">
          <div className="left-[130px] min-w-[30%] absolute">
            <div className="text-3xl font-medium tracking-widest text-center mb-[25px] relative">
              <AnimatedWrap type={"fade"}>
                {t("intelligent_riding")}
              </AnimatedWrap>
              <AnimatedWrap type={"fade"}>
                <Image
                  className="absolute left-[30px] mt-2"
                  src={"/caihong.png"}
                  width={60}
                  height={3}
                  alt=""
                />
              </AnimatedWrap>
            </div>
            <div className="sub-text text-center font-light text-sm leading-6">
              <AnimatedWrap type={"fade"} delay={200}>
                <div>专注于以自行车码表为代表的运动智能硬件</div>
                <div>让骑行变得更加轻松</div>
                <div>服务于全球超百万骑行运动爱好者</div>
              </AnimatedWrap>
            </div>
          </div>
          <div className="absolute right-[92px]">
            <Image src={"/top-banner.png"} width={280} height={320} alt="" />
          </div>
        </div>
        <div className="bg-no-repeat bg-center rounded-2xl mt-[48px] overflow-hidden relative cursor-pointer hover:shadow-lg transition ease-linear delay-150">
          <VideoPlay />
        </div>
        <div className="mt-[48px] bg-[#F7F7F8] h-[300px] rounded-2xl flex items-center" style={{ backgroundImage: "url(/tanji-bg.png)"}}>
          <div className="ml-[80px] space-y-[10px]">
            <div className="font-bold text-[32px]">IGS630S</div>
            <div>智能导航 探迹山海</div>
            <div className="flex pt-[20px] items-center">
              <div className="w-[120px] h-[40px] cursor-pointer text-white rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(75deg, #FF612F, #FFA74A)" }}>立即购买</div>
              <div className="underline text-[#666] ml-[15px]">了解更多</div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[24px] mt-[48px]">
          <div className="h-[284px] bg-[#F7F7F8] rounded-2xl flex items-center relative group cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150">
            <div className="text-center space-y-[10px] flex flex-col justify-center absolute left-[10%]">
              <div className="font-medium text-[25px]">码表系列</div>
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
          <div className="h-[284px] bg-[#F7F7F8] rounded-2xl group flex items-center relative cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150">
            <div className="text-center space-y-[10px] flex flex-col justify-center absolute left-[10%]">
              <div className="font-medium text-[25px]">车灯系列</div>
              <div className="font-light text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                追光而行 智能护航
              </div>
            </div>
            <Image
              className="absolute right-0 bottom-[-10px] transition-all group-hover:translate-y-[-10px]"
              src={"/cdxl-bg.png"}
              width={450}
              height={450}
              objectFit="contain"
              alt=""
            />
          </div>
          <div className="h-[284px] bg-[#F7F7F8] group rounded-2xl flex items-center relative cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150">
            <div className="text-center space-y-[10px] flex flex-col justify-center absolute left-[50%] top-[10%] translate-x-[-50%]">
              <div className="font-medium text-[25px]">手表/心率带</div>
              <div className="font-light text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                生活随行 运动随心
              </div>
            </div>
            <Image
              className="absolute left-[55%] translate-x-[-50%]  bottom-[-25%] transition-all group-hover:scale-105"
              src={"/sbxl-bg.png"}
              width={400}
              height={400}
              objectFit="contain"
              alt=""
            />
          </div>
          <div className="h-[284px] bg-[#F7F7F8] group rounded-2xl flex items-center relative cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150">
            <div className="text-center space-y-[10px] flex flex-col justify-center absolute left-[50%] top-[10%] translate-x-[-50%]">
              <div className="font-medium text-[25px]">传感器系列</div>
              <div className="font-light text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                双模速度/踏频传感器
              </div>
            </div>
            <Image
              className="absolute left-[50%] translate-x-[-50%] bottom-[-15%] transition-all group-hover:scale-105"
              src={"/cgqxl-bg.png"}
              width={400}
              height={400}
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="w-full"
      >
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
