import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Advertisement from "@/components/home/Advertisement"
import DataApp from "@/components/home/DataApp"
import initTranslations from "../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import Image from "next/image"

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
        <div className="bg-[#F2F2FA] w-full mt-[100px] h-[200px] flex items-center rounded-2xl relative">
          <div className="left-[130px] w-[40%] absolute">
            <div className="text-3xl font-medium tracking-wider text-center mb-[25px]">
              {t("intelligent_riding")}
            </div>
            <div className="sub-text text-center font-light text-sm leading-6">
              <div>专注于以自行车码表为代表的运动智能硬件</div>
              <div>让骑行变得更加轻松</div>
              <div>服务于全球超百万骑行运动爱好者</div>
            </div>
          </div>
          <div className="absolute right-[92px]">
            <Image src={"/top-banner.png"} width={280} height={320} alt="" /> 
          </div>
        </div>
        <div
          className="h-[742px] bg-no-repeat bg-center rounded-2xl mt-[48px] flex justify-center items-center"
          style={{ backgroundImage: "url('/video-bg.png')" }}
        >
          <div className="space-y-[10px] text-center">
            <div className="font-bold text-[40px]">iGPSPORT</div>
            <div className="text-[24px] text-[#0E0606]">
              记录精彩骑迹 为骑行运动而生
            </div>
            <div className="pt-[20px] w-[32px] mx-auto">
              <Image src={"/play-video.png"} width={32} height={32} alt="" /> 
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-[24px] mt-[48px]">
          <div
            className="h-[356px] bg-[#F2F3FA] rounded-2xl flex items-center bg-no-repeat bg-right-bottom"
            style={{ backgroundImage: "url('/mbxl-bg.png')" }}
          >
            <div className="ml-[47px] text-center space-y-[10px]">
              <div className="font-medium text-[32px]">码表系列</div>
              <div className="font-light text-[24px] leading-6">
                旗舰产品 智能导航
              </div>
            </div>
          </div>
          <div
            className="h-[356px] bg-[#F2F3FA] rounded-2xl flex items-center bg-no-repeat bg-right-bottom"
            style={{ backgroundImage: "url('/cdxl-bg.png')" }}
          >
            <div className="ml-[47px] text-center space-y-[10px]">
              <div className="font-medium text-[32px]">车灯系列</div>
              <div className="font-light text-[24px] leading-6">
                追光而行 智能护航
              </div>
            </div>
          </div>
          <div
            className="h-[356px] bg-[#F2F3FA] rounded-2xl pt-[48px] bg-no-repeat"
            style={{
              backgroundImage: "url('/sbxl-bg.png')",
              backgroundPosition: "20px 60px",
            }}
          >
            <div className="text-center space-y-[10px]">
              <div className="font-medium text-[32px]">手表/心率带</div>
              <div className="font-light text-[24px] leading-6">
                生活随行 运动随心
              </div>
            </div>
          </div>
          <div
            className="h-[356px] bg-[#F2F3FA] rounded-2xl pt-[48px] bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/cgqxl-bg.png')",
              backgroundPosition: "0 90px",
            }}
          >
            <div className="text-center space-y-[10px]">
              <div className="font-medium text-[32px]">传感器系列</div>
              <div className="font-light text-[24px] leading-6">
                双模速度/踏频传感器
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full"
        style={{
          backgroundImage: "linear-gradient(#fff,#f8f9fc 160px,#f8f9fc)",
        }}
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
