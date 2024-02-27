import TranslationsProvider from "@/components/TranslationsProvider"
import initTranslations from "@/app/i18n"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

/**
 * 特色模板b,黑色,适用于BCS300
 * 路由:/zh/product/tplb/BCS300
 * @param {*} param0
 * @returns
 */
const i18nNamespaces = ["default"]
async function TplB({ params: { locale, slug } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div className="">
        <div>产品: {slug}</div>
      </div>
      <Footer />
    </TranslationsProvider>
  )
}

export default TplB
