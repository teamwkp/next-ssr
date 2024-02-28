import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "../../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import AnimatedWrap from "@/components/AnimatedWrap"
import { Button, Pagination } from "antd"
import BrandItem from "@/components/brand/BrandItem"

const i18nNamespaces = ["default"]

async function Brand({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  const arr = [1, 2, 3, 4]

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div
        style={{
          backgroundImage: "url(/Rectbanner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[40vh] mt-[64px] relative"
      >
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <AnimatedWrap type="fade">
            <div className="lg:text-[48px] md:text-[28px] text-[28px] font-bold lg:mb-4 md:mb-[25px] mb-[20px] text-center">
              品牌动态
            </div>
          </AnimatedWrap>
          <div className="text-[ #121217] text-[18px] leading-[32px]">
            <AnimatedWrap type="reveal-fadeInUp">
              获得最新新闻，了解iGPSPORT的事实动态
            </AnimatedWrap>
          </div>
        </div>
      </div>
      <div className="media-container mx-auto flex justify-between mt-20 items-start">
        <div className="w-full h-[440px] flex justify-between gap-x-[24px]">
          <div className="w-[48%]">
            <div className="text-[34px] text-[#121217] font-bold leading-[48px]">
              精选
            </div>
            <div className="mt-[32px] text-[#121217] text-[30px] font-bold mb-[16px]">
              iGPSPORT中文品牌“迹驰”，备受骑友喜爱的BSC系列惊艳上市
            </div>
            <div className="text-[#121217] opacity-[0.64] text-[16px] leading-[32px] font-[400] mb-[16px]">
              01月23日,2024
            </div>
            <div className="text-[#121217] text-[16px] leading-[32px] mb-[32px]">
              4月11日，iGPSPORT中文品牌名称“迹驰”正式亮相，同期，iGPSPORT还发布了码表BSC系列的首款彩屏大作BSC300，以其轻薄、智能、个性多彩的特点，一亮相就成为骑友关注的焦点。iGPSPORT中文品牌名称“迹驰”重磅亮相。
            </div>
            <Button type="primary" size="large">
              查看更多
            </Button>
          </div>
          <div
            style={{
              backgroundImage: "url(/post2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="overflow-hidden rounded-xl w-[47%]"
          ></div>
        </div>
      </div>
      <div className="media-container mx-auto">
        <div className="text-[34px] text-[#121217] font-bold mt-[95px] mb-[48px]">
          最新动态
        </div>
        <div className="flex justify-between flex-wrap">
          {arr.map((k, index) => (
            <BrandItem id={k} />
          ))}
        </div>
        <div className="w-full text-center py-[80px]">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>

      <Footer />
    </TranslationsProvider>
  )
}

export default Brand
