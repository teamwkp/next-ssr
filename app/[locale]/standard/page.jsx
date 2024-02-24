import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "../../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import Image from "next/image"

const i18nNamespaces = ["default"]

async function Standard({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      '旗舰产品'
      <Footer />
    </TranslationsProvider>
  )
}

export default Standard
