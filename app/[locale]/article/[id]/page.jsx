import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import { markdown } from "./mock"

const i18nNamespaces = ["default"]

async function page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div className="bg-[#F7F7F8] pb-20">
        <div className="media-container mx-auto pt-[64px]">
          <div className="title mt-[80px] text-[#121217] text-[26px] font-bold text-center">
            iGPSPORT中文品牌“迹驰”，备受骑友喜爱的BSC系列惊艳上市
          </div>
          <div className="publish_time text-[#121217] opacity-[0.64] text-[16px] mt-[32px] mb-[48px] leading-[32px] text-center">
            01月23日,2024
          </div>
          <div>
            <img src="/artis_banner.png" width="100%" height="auto" alt="" />
          </div>
          <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
        </div>
      </div>

      <Footer />
    </TranslationsProvider>
  )
}

export default page
