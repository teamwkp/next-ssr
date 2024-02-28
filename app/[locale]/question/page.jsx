import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"

const i18nNamespaces = ["default"]

async function Question({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <Navbar />
      <div className="bg-[#F7F7F8] pb-20">
        <div className="media-container mx-auto pt-[64px]">
          <div className="w-[640px] mt-[34px] mb-[48px] mx-auto">
            <Input
              size="large"
              placeholder="常见问题搜索"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="bg-white"></div>
        </div>
      </div>

      <Footer />
    </TranslationsProvider>
  )
}

export default Question
