import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "@/app/i18n"
import ChannelPanel from "@/components/channel/channel"

import TranslationsProvider from "@/components/TranslationsProvider"

const i18nNamespaces = ["default"]
// 渠道
async function Channel({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div className="w-full bg-[#F7F7F8] h-[1000px]">
        <div className="media-container mx-auto pt-[64px]">
          <div className="mt-[48px] text-[16px] cursor-pointer flex items-center">
            <div>售后板块</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mx-[16px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>

            <div>购买渠道</div>
          </div>
          <div>
            <div className="text-[36px] font-bold mt-[32px] mb-[38px]">
              购买渠道
            </div>
          </div>
          <ChannelPanel />
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  )
}

export default Channel
