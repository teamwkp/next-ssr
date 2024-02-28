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
          <div className="flex w-full  mb-[50px]">
            <div className=" flex-col w-[20%] mr-20">
              <div className="mb-[8px]">商城地址</div>
              <div className="text-[16px] text-[#FF4B27]">
                china@igpsport.com
              </div>
            </div>
            <div className=" flex-col w-[30%] mr-10">
              <div className="mb-[8px]">邮件地址</div>
              <div className="text-[16px] text-[#FF4B27]">
                service@igpsport.com
              </div>
            </div>
            <div className=" flex-col w-[25%]">
              <div className="mb-[8px]">公司地址</div>
              <div className="text-[16px] text-[#FF4B27]">
                湖北省武汉市洪山区野芷湖西路16号
              </div>
            </div>
          </div>
          <div className="flex w-full  pb-[80px]">
            <div className=" flex-col w-[20%] mr-20">
              <div className="mb-[8px]">客服电话</div>
              <div className="text-[16px] text-[#FF4B27]">400-888-8888</div>
            </div>
            <div className=" flex-col w-[30%] mr-10">
              <div className="mb-[8px]">工作时间</div>
              <div className="text-[16px] text-[#FF4B27]">
                周一至周日 09:00 - 18:00(GMT+8)
              </div>
            </div>
            <div className=" flex-col w-[25%]">
              <div className="mb-[8px]">意见反馈</div>
              <div className="text-[16px] text-[#FF4B27]">点击这里</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  )
}

export default Contactus
