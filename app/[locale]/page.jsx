import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"

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
            <img src="/top-banner.png" alt="" />
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
            <div className="pt-[20px]">
              <img
                className="mx-auto cursor-pointer"
                src="/play-video.png"
                alt=""
              />
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
        className="w-full pb-[98px]"
        style={{
          backgroundImage: "linear-gradient(#fff,#f8f9fc 160px,#f8f9fc)",
        }}
      >
        <div className="media-container mx-auto">
          <div
            className="rounded-2xl h-[530px] relative bg-[#F2F3FA] mt-[48px]"
            style={{ backgroundImage: "url('/sport-bg.png')" }}
          >
            <div
              className="absolute rounded-2xl w-[100%] h-[100%] z-10  flex items-center"
              style={{ background: "rgba(0,0,0,.6)" }}
            >
              <div className="ml-[128px] space-y-[24px] lg:w-[344px]">
                <div className="font-bold text-[42px] text-center text-white">
                  专业数据分析APP
                </div>
                <div className="text-white text-[18px]">
                  记录您的每一次骑行活动。在活动记录中有摘要数据、详细数据以及多样的图表分析，帮助您分析自己的每次运动表现。
                </div>
                <div className="flex lg:flex-row flex-col justify-between">
                  <img
                    className="w-[166px] h-[52px] cursor-pointer"
                    src="/app_store.png"
                    alt="app_store"
                  />
                  <img
                    className="w-[166px] h-[52px] cursor-pointer"
                    src="/goole_play.png"
                    alt="goole_play"
                  />
                </div>
              </div>
            </div>
            <div className="absolute z-20 right-[80px] flex">
              <img className="h-[530px]" src="/swiper.png" alt="swiper" />
            </div>
          </div>
          <div
            className="rounded-2xl text-white h-[528px] relative mt-[48px] flex items-center"
            style={{ background: "linear-gradient(75deg, #131313, #4A4A4C)" }}
          >
            <div className="ml-[128px] w-[388px]">
              <div className="font-bold text-[42px]">听听他们的声音</div>
              <div className="py-[15px]">
                <img src="/yinhao.png" alt="" />
              </div>
              <div>
                十年赛场征战，我对专业装备的要求近乎严苛，iGPSPORT的GPS码表已成为我最信任的骑行伙伴之一。
              </div>
              <div className="mt-[30px]">- 孔文生</div>
              <div className="mt-[5px] text-[12px]">知名男车手</div>
              <div className="flex mt-[24px] space-x-[20px]">
                <img
                  className="size-[40px] cursor-pointer"
                  src="/left-icon.png"
                />
                <img
                  className="size-[40px] cursor-pointer"
                  src="/right-icon.png"
                />
              </div>
            </div>
            <div className="absolute right-[145px] z-10">
              <img className="size-[365px]" src="/avatar.png" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </TranslationsProvider>
  )
}

export default Home
