"use client"

import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import Image from "next/image"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import AnimatedWrap from "@/components/AnimatedWrap"
import { useRouter } from "next/navigation"

const i18nNamespaces = ["default"]

async function Enterprise({ params: { locale } }) {
  const router = useRouter()
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar bg={"transparent"} />
      <div className="w-full h-screen relative">
        <Image layout="fill" objectFit="cover" src={"/bick2.png"} alt="" />
        <div className="absolute top-[50%] left-[50%] flex flex-col items-center translate-x-[-50%] translate-y-[-50%] ">
          <AnimatedWrap type={"fade"}>
            <div className=" text-[72px] font-bold">iGPSPORT</div>
          </AnimatedWrap>

          <div className="mt-[48px] text-[#121217] text-[18px] leading-[32px]">
            <AnimatedWrap type="reveal-fadeInUp">
              记录精彩骑迹 为骑行运动而生
            </AnimatedWrap>
          </div>
        </div>
      </div>
      <div className="media-container mx-auto flex-col items-center justify-center">
        <div className="text-[#121217] text-[36px] text-center leading-[40px] font-bold mt-[152px] mb-[42px]">
          <AnimatedWrap type="fade">品牌简介</AnimatedWrap>
        </div>
        <div className="text-[16px] text-[#121217] leading-[32px]">
          iGPSPORT迹驰创立于2012年9月，中国深具创新力的自行车GPS码表品牌，专注于以自行车码表为代表的运动智能硬件的研发、制造、销售及数据服务，产品销售到全球40多个国家和地区，服务于全球超百万骑行运动爱好者。
          <br />
          专注自行车GPS码表的创新，是我们的初心和使命，这十余年的旅程，我们浓缩成了3个关键词“创新、品质、服务”。这期间我们共推出了30多款产品，其中包括GPS码表超20款，以每年至少两款新品的速度保持着我们对骑行的热爱。
        </div>
      </div>
      <div className="media-container mx-auto flex-col items-center justify-center mb-[120px]">
        <div className="text-[#121217] text-[36px] text-center leading-[40px] font-bold mt-[120px] mb-[42px]">
          <AnimatedWrap type="fade">迹驰，记录精彩骑迹</AnimatedWrap>
        </div>
        <div className="flex justify-between">
          <div className="w-[33.3%] text-center text-[#121217]">
            <div className="text-[36px] ">
              <AnimatedWrap type="reveal-fadeInUp">1000000+</AnimatedWrap>
            </div>
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
            <div className="text-[36px] ">
              <AnimatedWrap type="reveal-fadeInUp">40+</AnimatedWrap>
            </div>
            <div className="text-[18px] mt-[16px] mb-[24px] font-normal">
              国家和地区
            </div>
            <div className="text-[16px]">产品销售到全球众多国家和地区</div>
          </div>
          <div className="w-[33.3%] text-center">
            <div className="text-[36px] ">
              <AnimatedWrap type="reveal-fadeInUp">10年+</AnimatedWrap>
            </div>
            <div className="text-[18px] mt-[16px] mb-[24px] font-normal">
              创立时间
            </div>
            <div className="text-[16px]">超过10年的GPS码表研发经验</div>
          </div>
        </div>
      </div>
      <div className="w-full h-[900px] bg-black"></div>
      <div className="media-container mx-auto mt-[100px]">
        <div className="flex justify-center flex-col items-center">
          <AnimatedWrap type="fade">
            <div className="font-bold text-[#121217] text-[36px] mb-[32px]">
              品牌伙伴
            </div>
          </AnimatedWrap>
          <div className="w-[626px] text-[18px] font-normal mb-[48px]">
            <AnimatedWrap type="reveal-fadeInUp">
              iGPSPORT坚持对科技创新的不断探索，并深度布局骑行运动市场，知名运动员、骑行达人及专业自行车队，共同研发骑行爱好者更喜爱的智能骑行产品。
            </AnimatedWrap>
          </div>
          <img src="/elsfriend.png" width="100%" height="auto" alt="" />
          <div className="mt-[120px] mb-[100px] flex justify-between w-full">
            <div
              onClick={() => router.push("/contactus")}
              className="w-[468px] cursor-pointer"
            >
              <img src="/elps1.png" width="100%" height="auto" alt="" />
              <div className="mt-[24px]">
                <div className="mb-[10px] text-[#121217] font-bold text-[28px] leading-[40px]">
                  联系我们
                </div>
                <div className="text-[#121217] text-[16px] font-bold">
                  查看更多
                </div>
              </div>
            </div>
            <div className="w-[468px] cursor-pointer">
              <img src="/elps2.png" width="100%" height="auto" alt="" />
              <div className="mt-[24px]">
                <div className="mb-[10px] text-[#121217] font-bold text-[28px] leading-[40px]">
                  品牌新闻
                </div>
                <div className="text-[#121217] text-[16px] font-bold">
                  查看更多
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
