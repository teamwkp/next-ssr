"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "swiper/css"
import "swiper/css/effect-fade"
gsap.registerPlugin(ScrollTrigger)
function WhiteTpl() {
  useEffect(() => {}, [])
  const bannerList = [
    "https://res.insta360.com/static/assets/storage/20201102/161326696c3c0a06ee7ae69d2c344c9a/kv01.jpg",
    "https://res.insta360.com/static/assets/storage/20201102/39d47f004961ca3403a228a5a1f91e34/kv02.jpg",
    "https://res.insta360.com/static/assets/storage/20201102/52ce484245e4df554d2a70925b0280d1/kv03.jpg",
  ]
  const params = [
    {
      title: "镜头光圈",
      list: [
        {
          title: "F2.2",
        },
      ],
    },
    {
      title: "35mm 等效焦距",
      list: [
        {
          title: "6.7mm",
        },
      ],
    },
    {
      title: "照片分辨率",
      list: [
        {
          title: "7200万像素 (11968x5984)",
        },
        {
          title: "1800万像素 (5952x2976)",
        },
      ],
    },
    {
      title: "照片格式",
      list: [
        {
          title: "INSP (可通过 APP 或 Studio 导出)",
        },
        {
          title: "DNG RAW (PureShot照片模式仅支持在 PC/Mac 端编辑)",
        },
      ],
    },
  ]
  return (
    <div className="w-[100%] relative">
      {/* 模块一 */}
      <div className="module-1 w-[100%] sticky bg-[#fff] bg-opacity-20 h-[100vh] top-0 left-0 z-[-1]">
        <div className="w-[1200px] h-[100vh] mx-auto">
          <div className="absolute w-[334px] top-[50%] translate-y-[-50%] z-10">
            <Image
              width={424}
              height={85}
              src="https://res.insta360.com/static/infr_base/5342dfd016b0f2fffdbe9b5f33f281c8/onex2_logoslogan.sc.svg"
              alt=""
            ></Image>
            <div className="w-[334px] h-[116px] rounded-[24px] overflow-hidden mt-[30px]">
              <video
                autoPlay
                muted
                loop
                src="https://media.insta360.com/static/assets/storage/20201028/e91dac9f51a13095f8547a4c8082ea91/01_preview.mp4"
              ></video>
            </div>
          </div>
          <Swiper
            className="w-full h-full"
            modules={[Autoplay, EffectFade]}
            effect={"fade"}
            onSwiper={() => {
              gsap.fromTo(
                ".swiper-border",
                { width: 0, x: 0 },
                { width: "80px", duration: 3 }
              )
            }}
            onSlideChange={(item) => {}}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
          >
            {bannerList.map((k, i) => (
              <SwiperSlide className="w-full h-full" key={i}>
                <Image
                  width={1200}
                  height={0}
                  className="translate-y-[30%]"
                  src={k}
                  alt=""
                ></Image>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-[100%] h-[64px] bg-[#f8f9fc] flex items-center sticky z-[99] bottom-0 top-[64px]">
        <div className="w-[65%] mx-auto flex justify-between items-center">
          <div>
            <Image
              src="https://res.insta360.com/static/infr_base/fbab02f1204fef3bea41e215ff1da0bd/onex2_logo.sc.svg"
              width={200}
              height={0}
              alt=""
            ></Image>
          </div>
          <ul className="flex space-x-[20px] text-[14px]">
            <li>功能</li>
            <li>配件</li>
            <li>参数</li>
            <li>立即购买</li>
          </ul>
        </div>
      </div>
      {/* 模块二 */}
      <div className="module-2 w-[100%] py-[100px] bg-[#fff] overflow-hidden">
        <div className="w-[1200px] mx-auto">
          <Image src="/function.png" width={1200} height={0} alt=""></Image>
        </div>
      </div>
      {/* 模块三 */}
      <div className="module-3 w-[100%] h-[730px] flex items-center relative  bg-[#fff] overflow-hidden">
        <div className="w-[1200px] mx-auto">
          <div className="w-[380px] space-y-[25px]">
            <div className="text-[#0fc8f3] font-medium">5.7K 全景模式</div>
            <div className="text-[42px] font-bold">
              高清画质<br></br>唤醒感官
            </div>
            <div className="text-[#898a8e]">
              全景模式可先记录后取景，释放影像创造力。5.7K画质，支持H.265编码方式，保留更多清晰细腻的光影细节，不止全面，更有质感。
            </div>
            <div className="w-[480px] h-[270px] rounded-[32px] relative overflow-hidden">
              <video
                className="w-full h-full object-fill z-10 absolute"
                muted
                loop
                autoPlay
                src="https://media.insta360.com/static/assets/storage/20201028/5b8a6c26bb1253464de41c93c48d91f9/03_360_cam_mode.mp4"
              ></video>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[730px] flex justify-center items-center absolute top-0 right-0 bg-[#f9fafc]">
          <video
            className="w-[550px] h-[550px] object-fill"
            muted
            loop
            autoPlay
            src="https://media.insta360.com/static/assets/storage/20201110/e43bbe902e62dea8d45a3d217827a3ba/cam2.mp4"
          ></video>
        </div>
      </div>
      {/* 模块四 */}
      <div className="module-4 w-[100%] py-[100px] bg-[#fff] overflow-hidden">
        <div className="w-[960px] mx-auto">
          <div className="space-y-[20px] w-[868px]">
            <div className="text-[#5f98d6]">FlowState 防抖科技</div>
            <div className="text-[48px] font-bold">稳住每一个灵感瞬间。 </div>
            <div className="text-[#898a8e]">
              防抖超群的全景运动相机，无需额外稳定设备，随时随地以平稳流畅的影像定格灵感瞬间。暗光防抖自动开启，无惧模糊，尽情创作。
            </div>
            <div className="w-full h-[486px] relative">
              <video
                className="w-full h-full object-fill rounded-xl"
                src="https://media.insta360.com/static/infr_base/239c650a4d6bbdbd57b496e484902db0/flowstate.mp4"
                autoPlay
                muted
                loop
              ></video>
              <div className="w-full absolute h-[40px] z-[1] left-0 bottom-[20px] flex justify-around">
                <div className="w-[217px] h-[40px]  bg-[#fff] text-center font-medium rounded-[20px] leading-[40px]">
                  防抖关闭
                </div>
                <div
                  className="w-[217px] h-[40px] text-center bg-[#11baff] leading-[40px] font-medium text-[#fff] rounded-[20px]"
                  style={{
                    backgroundImage: "linear-gradient(122deg,#5f98d6,#d0f9ff)",
                  }}
                >
                  防抖开启
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 模块五 */}
      <div className="module-5 h-[100vh] w-[100%]  bg-[#fff] overflow-hidden">
        <div className="w-[100%] h-[100vh] flex justify-center items-center relative">
          <div className="w-[1200px] h-[90%] relative">
            <Image
              layout="fill"
              alt=""
              src="https://res.insta360.com/static/assets/storage/20201025/acf5a8d4695a40ae792b8d3eb751f175/off.jpg"
            ></Image>
          </div>
          <div className="absolute z-[9] top-[150px] text-white text-center">
            <div>PureShot 纯净摄影</div>
            <div className="text-[42px] py-[20px] font-bold">
              清晰定格纯净夜色
            </div>
            <div>
              保留更多画面细节，明暗变化更丰富，成像更纯净。无需多次拍摄，一键即可呈现清晰暗夜大片。
            </div>
          </div>
        </div>
      </div>
      {/* 模块六 */}
      <div className="module-6  py-[50px] w-[100%] bg-[#fff] overflow-hidden">
        <div className="w-[1224px] mx-auto">
          <div className="text-[40px] font-bold text-center">ONE X2 影片</div>
          <div className="grid grid-cols-4 mt-[40px] gap-[40px]">
            {new Array(8).fill(1).map((k, i) => (
              <div className="text-center" key={i}>
                <Image
                  width={280}
                  height={156}
                  alt=""
                  className="rounded-[16px]"
                  src="https://res.insta360.com/static/90af6c8fc85a4e2157ba597d28730ed8/video_Skiing_and_Snowboarding.png"
                ></Image>
                <div className="text-[#898a8e] pt-[15px]">滑雪攀岩刺激大片</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 模块七 */}
      <div className="module-7 w-[100%]  bg-[#fff] overflow-hidden">
        <div className="w-[1220px] h-[725px]  mx-auto flex items-center">
          <div className="w-[424px] space-y-[50px] z-10">
            <Image
              width={424}
              height={85}
              alt=""
              src="https://res.insta360.com/static/infr_base/5342dfd016b0f2fffdbe9b5f33f281c8/onex2_logoslogan.sc.svg"
            ></Image>
            <div className="w-[232px] mx-auto h-[56px] bg-[#46e5ff] rounded-[50px] leading-[56px] text-center text-[#fff] font-bold">
              立即购买
            </div>
          </div>
          <Image
            alt=""
            width={1440}
            height={0}
            className="translate-x-[-100px] absolute"
            src="https://res.insta360.com/static/assets/storage/20201102/161326696c3c0a06ee7ae69d2c344c9a/kv01.jpg"
          ></Image>
        </div>
      </div>
      {/* 模块八 */}
      <div className="module-8 w-[100%]  py-[100px]  bg-[#fff] overflow-hidden">
        <div className="w-[1048px] mx-auto">
          <div className="text-[32px] font-bold py-[20px] border-[#e1e3e6] border-b">
            参数
          </div>
          {params.map((k, i) => (
            <div className="flex py-[40px] border-[#e1e3e6] border-b" key={i}>
              <div className="w-[460px] text-[20px] font-bold">{k.title}</div>
              <div className="flex-1 w-[0px] ml-[100px]  leading-[40px] text-[18px]">
                {k.list.map((item, index) => (
                  <div key={index}>{item.title}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhiteTpl
