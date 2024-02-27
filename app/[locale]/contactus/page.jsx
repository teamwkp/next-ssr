import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "../../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"

const i18nNamespaces = ["default"]
async function Contactus({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div className="bg-[#F7F7F8] w-full">
        <div className="media-container mx-auto pt-[64px]">
          <img
            className="mt-[48px] mb-[48px]"
            src="/ctus.png"
            width="100%"
            height="auto"
            alt=""
          />
          <div className="text-[#121217] text-[24px] font-bold mb-[65px]">
            联系我们
          </div>
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  )
}

export default Contactus
