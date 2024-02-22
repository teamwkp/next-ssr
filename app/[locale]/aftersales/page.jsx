import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "../../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Link from 'next/link'
import Image from "next/image"

const i18nNamespaces = ["default"]
const Aftersales = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  const saleList = [
    {
      title: '码表',
      url: '/sale-1.png',
      height: 92,
      width: 62,
      path: '/aftersales/codeTable'
    },
    {
      title: '配件',
      url: '/sale-2.png',
      height: 92,
      width: 100,
      path: '/aftersales/module'
    },
    {
      title: '应用',
      url: '/sale-3.png',
      height: 92,
      width: 122,
      path: '/aftersales/application'
    },
    {
      title: '支持',
      url: '/sale-4.png',
      height: 92,
      width: 80,
      path: '/aftersales/support'
    }
  ]
  const goType= () => {}
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div
        className="w-full bg-no-repeat"
        style={{
          backgroundImage: "url('/sale-bg.png')",
          backgroundSize: "100% auto",
        }}
      >
        <div className="lg:h-[480px] h-[240px] bg-[#111] flex justify-center items-center text-center">
          <div className="lg:w-[640px] w-3/4">
            <div className="text-[42px] text-white tracking-[2px]">使用帮助</div>
            <div className="mt-[40px]">
              <Input
                style={{
                  borderRadius: "16px",
                  padding: '0 20px',
                  outline: 'none',
                  color: '#121217'
                }}
                className="h-[48px]"
                placeholder="常见问题搜索"
                prefix={<SearchOutlined style={{color:"#999", fontSize: '14px'}} />}
              />
            </div>
          </div>
        </div>
        <div className="media-container mx-auto pb-20 text-center">
          <div className="text-[36px] mt-[80px]">售后模块</div>
          <div className="py-[24px]">选择对应的版块，提供具体的产品支持</div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-[20px]">
            {
              saleList.map(item => {
                return (
                  <Link href={item.path}>
                    <div className="lg:h-[264px] h-[200px] bg-[#F3F4F8] rounded-2xl flex flex-col justify-center items-center">
                      <Image className="transition-transform hover:scale-110 cursor-pointer" height={item.height} width={item.width} src={item.url} alt=""></Image>
                      <div className="mt-[30px]">{item.title}</div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  )
}

export default Aftersales
