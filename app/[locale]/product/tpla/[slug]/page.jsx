import TranslationsProvider from "@/components/TranslationsProvider"
import initTranslations from "@/app/i18n"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import WhiteTpl from "@/components/product/WhiteTpl"

/**
 * 特色模板a,白色,适用于IGS630、IGS800，新品
 * 路由:/zh/product/tpla/IGS630
 * @param {*} param0
 * @returns
 */
const i18nNamespaces = ["default"]
async function TplA({ params: { locale, slug } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <WhiteTpl></WhiteTpl>
      <Footer />
    </TranslationsProvider>
  )
}

export default TplA
