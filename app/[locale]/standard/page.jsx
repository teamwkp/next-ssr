import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "../../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import Image from "next/image"
import BCS300 from "@/components/product/BCS300"

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
      <BCS300 />
      <Footer />
    </TranslationsProvider>
  )
}

export default Standard
