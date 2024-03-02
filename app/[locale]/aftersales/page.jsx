import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "../../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import { SearchOutlined } from "@ant-design/icons"
import { Input, Button } from "antd"
import Link from "next/link"
import Image from "next/image"

const i18nNamespaces = ["default"]
const Aftersales = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  const saleList = [
    {
      title: "码表",
      url: "/sale-1.png",

      path: "/aftersales/codeTable",
    },
    {
      title: "配件",
      url: "/sale-2.png",

      path: "/aftersales/module",
    },
    {
      title: "应用",
      url: "/sale-3.png",

      path: "/aftersales/application",
    },
    {
      title: "渠道",
      url: "/sale-4.png",

      path: "/aftersales/support",
    },
    {
      title: "支持",
      url: "/sale-5.png",

      path: "/aftersales/support",
    },
  ]
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar bg={"transparent"} color={"#fff"} />
      <div className="w-full">
        <div
          style={{
            backgroundImage: "url('/sale-bg.png')",
            backgroundSize: "100% auto",
          }}
          className="bg-no-repeat lg:h-[480px] lg:bg-[transparent] bg-[#111] h-[240px] flex justify-center items-center text-center"
        >
          <div className="lg:w-[640px] w-3/4">
            <div className="text-[42px] text-white tracking-[2px]">
              使用帮助
            </div>
            <div className="mt-[40px]">
              <Input
                style={{
                  borderRadius: "16px",
                  padding: "0 20px",
                  outline: "none",
                  color: "#121217",
                }}
                className="h-[48px]"
                placeholder="常见问题搜索"
                prefix={
                  <SearchOutlined style={{ color: "#999", fontSize: "14px" }} />
                }
              />
            </div>
          </div>
        </div>
        <div className="media-container mx-auto pb-20 text-center">
          <div className="text-[36px] mt-[90px] font-bold">售后模块</div>
          <div className="py-[24px]">选择对应的版块，提供具体的产品支持</div>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-[20px]">
            {saleList.map((item) => {
              return (
                <Link href={item.path}>
                  <div className="h-[200px] w-[200px] bg-[#F3F4F8] rounded-2xl flex flex-col justify-center items-center">
                    <Image
                      className="transition-transform hover:scale-110 cursor-pointer"
                      height="80"
                      width="80"
                      src={item.url}
                      alt=""
                    ></Image>
                    <div className="mt-[30px]">{item.title}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="media-container mx-auto text-center mb-[50px]">
          <div className="mb-[20px]">
            没有找到想要的信息？联系我们享受专属服务
          </div>
          <Link href={"/contactus"}>
            <Button type="primary">联系我们</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  )
}

export default Aftersales
