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
              <AnimatedWrap type={"fade"}>
                {t("intelligent_riding")}
              </AnimatedWrap>
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
        <div className="h-[607px] bg-no-repeat bg-center rounded-2xl mt-[48px] overflow-hidden relative cursor-pointer hover:shadow-lg transition ease-linear delay-150">
          <video
            src={`${CDN_URL}/iGPSPORT.mp4`}
            autoPlay
            muted
            loop
            className="w-full h-full object-fill"
          ></video>
          <div className="absolute w-full h-full z-[19] top-0 text-white flex flex-col justify-center items-center">
            <div className="font-bold tracking-[2px] stroke-text">iGPSPORT</div>
            <div className="text-[24px]">记录精彩骑迹 为骑行运动而生</div>
            <div className="pt-[20px] w-[32px] mx-auto"></div>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[24px] mt-[48px]">
          <div className="h-[284px] bg-[#F2F3FA] rounded-2xl flex items-center relative cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150">
            <div className="text-center space-y-[10px] flex flex-col justify-center absolute left-[10%]">
              <div className="font-medium text-[30px]">码表系列</div>
              <div className="font-light text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                旗舰产品 智能导航
              </div>
            </div>
            <Image
              className="absolute right-0 bottom-0"
              src={"/mbxl-bg.png"}
              width={350}
              height={350}
              objectFit="contain"
              alt=""
            />
          </div>
          <div className="h-[284px] bg-[#F2F3FA] rounded-2xl flex items-center relative cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150">
            <div className="text-center space-y-[10px] flex flex-col justify-center absolute left-[10%]">
              <div className="font-medium text-[30px]">车灯系列</div>
              <div className="font-light text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                追光而行 智能护航
              </div>
            </div>
            <Image
              className="absolute right-0 bottom-0"
              src={"/cdxl-bg.png"}
              width={450}
              height={450}
              objectFit="contain"
              alt=""
            />
          </div>
          <div className="h-[284px] bg-[#F2F3FA] rounded-2xl flex items-center relative cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150">
            <div className="text-center space-y-[10px] flex flex-col justify-center absolute left-[50%] top-[10%] translate-x-[-50%]">
              <div className="font-medium text-[30px]">手表/心率带</div>
              <div className="font-light text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                生活随行 运动随心
              </div>
            </div>
            <Image
              className="absolute left-[55%] translate-x-[-50%]  bottom-[-25%]"
              src={"/sbxl-bg.png"}
              width={400}
              height={400}
              objectFit="contain"
              alt=""
            />
          </div>
          <div className="h-[284px] bg-[#F2F3FA] rounded-2xl flex items-center relative cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150">
            <div className="text-center space-y-[10px] flex flex-col justify-center absolute left-[50%] top-[10%] translate-x-[-50%]">
              <div className="font-medium text-[30px]">传感器系列</div>
              <div className="font-light text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                双模速度/踏频传感器
              </div>
            </div>
            <Image
              className="absolute left-[50%] translate-x-[-50%] bottom-[-15%]"
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
