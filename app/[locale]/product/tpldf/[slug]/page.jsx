import TranslationsProvider from "@/components/TranslationsProvider"
import initTranslations from "@/app/i18n"
import TpldfComponent from "@/components/product/default/tpldf"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

/**
 * 普通模板default,白色,适用于其他
 * 路由:/zh/product/tpldf/abc
 * @param {*} param0
 * @returns
 */
const i18nNamespaces = ["default"]
async function TplDf({ params: { locale, slug } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <TpldfComponent />
      <Footer />
    </TranslationsProvider>
  )
}

export default TplDf
