import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "../../../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import { Select } from "antd"
import Image from "next/image"

const i18nNamespaces = ["default"]
const CodeTable = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  const codeList = [
    {
      title: "iGS630",
      src: "/iGS630.png",
    },
    {
      title: "iBC300",
      src: "/iBC300.png",
    },
    {
      title: "iGS200",
      src: "/iGS200.png",
    },
    {
      title: "iGS320",
      src: "/iGS320.png",
    },
    {
      title: "iGS100S",
      src: "/iGS100S.png",
    },
    {
      title: "iGS100",
      src: "/iGS100.png",
    },
    {
      title: "iGS100S",
      src: "/iGS100S-2.png",
    },
    {
      title: "iGS100",
      src: "/iGS100.png",
    },
  ]
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div className="w-full bg-[#F3F4F8]">
        <div className="media-container mx-auto pb-20">
          <div className="py-[20px]">售后板块 &gt; 模块</div>
          <div className="py-[10px] text-[28px] font-bold">选择模块</div>
          <div className="p-[30px] bg-white rounded-2xl mt-[32px]">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-[20px]">
              {codeList.map((item) => {
                return (
                  <div className="bg-[#F3F4F8] rounded-2xl lg:h-[248px] h-[180px] flex flex-col justify-center items-center">
                    <Image height={120} width={120} src={item.src}></Image>
                    <div className="mt-[8px]">{item.title}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  )
}

export default CodeTable
