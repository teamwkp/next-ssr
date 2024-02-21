import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import Image from "next/image"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import AnimatedWrap from "@/components/AnimatedWrap"

const i18nNamespaces = ["default"]

async function Enterprise({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div className="w-full h-screen relative">
        <Image layout="fill" objectFit="cover" src={"/bick2.png"} />
        <div className="absolute top-[50%] left-[50%] flex flex-col items-center translate-x-[-50%] translate-y-[-50%] ">
          <AnimatedWrap type={"fade"}>
            <div className=" text-[72px] font-bold">iGPSPORT</div>
          </AnimatedWrap>

          <div className="mt-[48px] text-[#121217] text-[18px]">
            记录精彩骑迹 为骑行运动而生
          </div>
        </div>
      </div>
      <div className="media-container mx-auto flex-col items-center justify-center">
        <div className="text-[#121217] text-[36px] text-center leading-[40px] font-bold mt-[152px] mb-[42px]">
          品牌简介
        </div>
        <div className="text-[16px] text-[#121217] leading-[32px]">
          iGPSPORT迹驰创立于2012年9月，中国深具创新力的自行车GPS码表品牌，专注于以自行车码表为代表的运动智能硬件的研发、制造、销售及数据服务，产品销售到全球40多个国家和地区，服务于全球超百万骑行运动爱好者。
          <br />
          专注自行车GPS码表的创新，是我们的初心和使命，这十余年的旅程，我们浓缩成了3个关键词“创新、品质、服务”。这期间我们共推出了30多款产品，其中包括GPS码表超20款，以每年至少两款新品的速度保持着我们对骑行的热爱。
        </div>
      </div>
      <div className="media-container mx-auto flex-col items-center justify-center mb-[120px]">
        <div className="text-[#121217] text-[36px] text-center leading-[40px] font-bold mt-[120px] mb-[42px]">
          迹驰，记录精彩骑迹
        </div>
        <div className="flex justify-between">
          <div className="w-[33.3%] text-center text-[#121217]">
            <div className="text-[36px] ">1000000+</div>
            <div className="text-[18px] mt-[16px] mb-[24px] font-normal">
              用户
            </div>
            <div className="text-[16px]">服务于全球超过百万的用户</div>
          </div>
          <div
            className="w-[33.3%] text-center"
            style={{
              borderLeft: "1px solid #eee",
              borderRight: "1px solid #eee",
            }}
          >
            <div className="text-[36px] ">40+</div>
            <div className="text-[18px] mt-[16px] mb-[24px] font-normal">
              国家和地区
            </div>
            <div className="text-[16px]">产品销售到全球众多国家和地区</div>
          </div>
          <div className="w-[33.3%] text-center">
            <div className="text-[36px] ">10年+</div>
            <div className="text-[18px] mt-[16px] mb-[24px] font-normal">
              创立时间
            </div>
            <div className="text-[16px]">超过10年的GPS码表研发经验</div>
          </div>
        </div>
      </div>
      <div className="w-full h-[900px] bg-black"></div>
      <div className="w-full h-[900px] relative">
        <div className=" absolute z-100 left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%]">
          <div className=" font-bold text-[#ffffff] text-[36px]">品牌伙伴</div>
          <div>
            iGPSPORT坚持对科技创新的不断探索，并深度布局骑行运动市场，知名运动员、骑行达人及专业自行车队，共同研发骑行爱好者更喜爱的智能骑行产品。
          </div>
        </div>

        <Image
          className="absolute z-90 left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%]"
          src={"/bg3.jpg"}
          width={1130}
          height={477}
          objectFit="contain"
        />
      </div>

      <div className="bg-[#F4F5FB] w-full h-[900px] flex flex-col items-center justify-center">
        <div className="text-[#121217] text-[36px] font-bold">联系我们</div>
        <div className="w-full flex justify-center mt-[40px]">
          <div>
            <Image
              src={"/map.png"}
              width={1132}
              height={480}
              objectFit="contain"
            ></Image>
            <div className="w-full h-[180px] bg-[#121217] rounded-b-2xl flex justify-center">
              <div className="flex items-center w-1/2 justify-center">
                <div className="w-[54px] mr-3 h-[51px] bg-[#FF4B27] rounded-xl flex justify-center items-center">
                  <Image src={"/sms@2x.png"} width={24} height={24}></Image>
                </div>
                <div>
                  <div className="text-[#ffffff] text-[16px]">邮件</div>
                  <div className="text-[#FF4B27] text-[16px] font-bold">
                    china@igpsport.com
                  </div>
                </div>
              </div>
              <div className="flex items-center w-1/2 justify-center">
                <div className="w-[54px] mr-3 h-[51px] bg-[#FF4B27] rounded-xl flex justify-center items-center">
                  <Image
                    src={"/location@2x.png"}
                    width={24}
                    height={24}
                  ></Image>
                </div>
                <div>
                  <div className="text-[#ffffff] text-[16px]">地址</div>
                  <div className="text-[#FF4B27] text-[16px] font-bold">
                    湖北省武汉市洪山区野芷湖西路16号
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  )
}

export default Enterprise
