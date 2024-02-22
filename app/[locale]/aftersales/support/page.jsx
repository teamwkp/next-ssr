import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import initTranslations from "../../../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import FoldList from "@/components/aftersales/FoldList"
import { Select } from "antd"
import Image from "next/image"


const i18nNamespaces = ["default"]
const Support = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div
        className="w-full bg-[#F3F4F8]"
      >
        <div className="media-container mx-auto pb-20">
            <div className="py-[20px]">售后板块 &gt; 支持</div>
            <div className="py-[10px] text-[28px] font-bold">选择服务</div>
            <div className="rounded-2xl h-[264px] bg-[#fff] flex justify-center items-center">
                <div className="w-3/4">
                    <div className="mb-[40px] text-[30px] font-bold  text-center">服务网点查询</div>
                    <Select
                        style={{ width: '100%', height: '48px' }}
                        placeholder="请选择您所在的地区"
                        options={[
                            { value: 'wuhan', label: '武汉' },
                            { value: 'hubei', label: '湖北' },
                        ]}
                    />
                </div>
            </div>
            <FoldList></FoldList>
            <div className="mt-[32px] py-[50px] bg-white rounded-2xl">
                <div className="text-center text-[30px] pt-[20px] pb-[40px] font-bold">联系我们</div>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-[20px]">
                    <div className="flex space-y-[8px] flex-col justify-center items-center">
                        <div>
                            <Image src="/call.png" height={24} width={24} alt=""></Image> 
                        </div>
                        <div>热线电话</div>
                        <div className="text-[12px]">400-800-8888</div>
                        <div className="text-[#FF4B27] text-[12px] pt-[10px]">联系我们</div>
                    </div>
                    <div className="flex space-y-[8px] flex-col justify-center items-center">
                        <div>
                            <Image src="/sms.png" height={24} width={24} alt=""></Image>    
                        </div>
                        <div>邮件支持</div>
                        <div className="text-[12px]">china@igpsport.com</div>
                        <div className="text-[#FF4B27] text-[12px] pt-[10px]">发送邮件</div>
                    </div>
                    <div className="flex space-y-[8px] flex-col justify-center items-center">
                        <div>
                            <Image src="/email.png" height={24} width={24} alt=""></Image>   
                        </div>
                        <div>邮件反馈</div>
                        <div className="text-[12px]">china@igpsport.com</div>
                        <div className="text-[#FF4B27] text-[12px] pt-[10px]">发送邮件</div>
                    </div>
                    <div className="flex flex-col space-y-[8px] justify-center items-center">
                        <div>
                            <Image src={'/phone.png'} height={24} width={24} alt=""></Image>    
                        </div>
                        <div>微信</div>
                        <div className="text-[12px]">@igpsport</div>
                        <div className="text-[#FF4B27] text-[12px] pt-[10px]">二维码</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  )
}

export default Support
