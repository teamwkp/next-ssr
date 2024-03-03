"use client"
import { useEffect, useState, useRef } from "react"
import SubMenuOverlay from "@/components/SubMenuOverlay"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
import "swiper/css"
function BCS300() {
  const modeul2VideoRef = useRef()
  const modeul2VideoRef1 = useRef()
  const modeul4VideoRef = useRef()
  const modeul8VideoRef = useRef()
  const [moduleId, setModule] = useState('.module-2')
  const videoRef = useRef(null)
  const [isPlay, setIsPlay] = useState(false)
  const showVideo = () => {
    setIsPlay(true)
  }
  const hideVieo = (val) => {
    setIsPlay(false)
  }

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play()
    }
    gsap.fromTo(
      ".logo-img",
      { opacity: 0 },
      {
        duration: 2,
        opacity: 1,
        y: -200,
      }
    )
    const params = {
      scrub: true,
      start: "top top",
      end: "100%",
      pin: true,
    }
    // 第一二个模块
    ScrollTrigger.create({
      trigger: ".module-2",
      ...params,
      start: "top top",
      end: "100%",
      pin: true,
      onUpdate: (self) => {
        if (self.progress > 0.5) {
          setModule('.module-2')
        }
        if (self.progress > 0.6) {
          modeul2VideoRef.current && modeul2VideoRef.current.play()
        } else {
          modeul2VideoRef.current && modeul2VideoRef.current.pause()
        }
        if (self.progress > 0.4) {
          modeul2VideoRef1.current && modeul2VideoRef1.current.play()
        } else {
          modeul2VideoRef1.current && modeul2VideoRef1.current.pause()
        }
      },
      animation: gsap
        .timeline()
        .fromTo(
          ".module-2-text",
          { opacity: 0.2, xPercent: 100},
          { opacity: 1, xPercent: 0 }
        ),
    })
    // 第三个模块无动画
    ScrollTrigger.create({
      trigger: ".module-3",
      scrub: true,
      onEnter() {
        setModule('.module-3')
      },
      onEnterBack() {
        setModule('.module-3')
      }
    })
    // 第四个模块
    ScrollTrigger.create({
      trigger: ".module-4",
      ...params,
      onUpdate: (self) => {
        if (self.progress > 0.4) {
          setModule('.module-4')
        }
        if (self.progress > 0.8) {
          modeul4VideoRef.current && modeul4VideoRef.current.play()
        } else {
          modeul4VideoRef.current && modeul4VideoRef.current.pause()
        }
      },
      animation: gsap
        .timeline()
        .fromTo(
          [".module-4-top", ".module-4-bottom"],
          { opacity: 0, xPercent: 100 },
          { opacity: 1, xPercent: 0 },
        )
        .fromTo(
          ".module-4-center",
          { height: "1px", width: "100vw", xPercent: -100 },
          { height: "1px", width: "100vw", xPercent: 0 },
          "<"
        ).to('.module-4-center', { height: 486, width: 864})
      
    })
    // 第五个模块
    ScrollTrigger.create({
      trigger: ".module-5",
      ...params,
      onUpdate: (self) => {
        if (self.progress > 0.4) {
          setModule('.module-5')
        }
      },
      animation: gsap
        .timeline()
        .fromTo(
          ".module-5-video",
          { transform: "scale(1.5)" },
          { transform: "scale(1)" }
        )
        .fromTo(
          ".module-5-one",
          { height: "400px", opacity: 1 },
          { height: 0, opacity: 0 }
        )
        .to('.module-5-video-one', { opacity: 0}, '<')
        .to('.module-5-video-two', { opacity: 1}, '<')
        .fromTo(
          ".module-5-two",
          { height: "0", opacity: 0 },
          { height: "400px", opacity: 1 },
          "<"
        ),
    })
    // 第六个模块
    ScrollTrigger.create({
      trigger: ".module-6",
      ...params,
      onUpdate: (self) => {
        if (self.progress > 0.4) {
          setModule('.module-6')
        }
      },
      animation: gsap
        .timeline()
        .fromTo(
          ".module-6-video",
          { transform: "scale(1.5)" },
          { transform: "scale(1)" }
        ),
    })
    // 第七个模块无动画
    ScrollTrigger.create({
      trigger: ".module-7",
      scrub: true,
      onEnter() {
        setModule('.module-7')
      },
      onEnterBack() {
        setModule('.module-7')
      }
    })
    // 第八个模块
    ScrollTrigger.create({
      trigger: ".module-8",
      ...params,
      onUpdate: (self) => {
        if (self.progress > 0.4) {
          setModule('.module-8')
        }
        if (self.progress > 0.2) {
          modeul8VideoRef.current && modeul8VideoRef.current.play()
        } else {
          modeul8VideoRef.current && modeul8VideoRef.current.pause()
        }
      },
      animation: gsap
        .timeline()
        .to(
          ".module-8-video",
          { height: "90vh", width: "80vw" },
          "<"
        )
        .fromTo(
          ".module-8-text",
          { backgroundColor: "transparent", opacity: 0 },
          { backgroundColor: "#000", opacity: 0.5 },
          "<"
        ),
    })
    // 第9个模块
    ScrollTrigger.create({
      trigger: ".module-9",
      scrub: true,
      onEnter() {
        setModule('.module-9')
      },
      onEnterBack() {
        setModule('.module-9')
      }
    })
  }, [videoRef])
  // 滚动条位置
  const goScroll = (module) => {
    setModule(module)
    gsap.to(window, { scrollTo: { y: module } })
  }
  const videoList = [
    {
      src: "https://media.insta360.com/static/infr_base/be877e2a22381d7e705bd83b26d27948/sky_swap.mp4",
    },
    {
      src: "https://media.insta360.com/static/infr_base/e069864b65b09df3e2cc8be89685699a/nose_mode.mp4",
    },
    {
      src: "https://media.insta360.com/static/infr_base/9832a32f6b33840654ae5831a8dc2af6/Cine_Lapse.mp4",
    },
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
  const slideList = [
    {
      id: '.module-2'
    },
    {
      id: '.module-3'
    },
    {
      id: '.module-4'
    },
    {
      id: '.module-5'
    },
    {
      id: '.module-6'
    },
    {
      id: '.module-7'
    },
    {
      id: '.module-8'
    },
    {
      id: '.module-9'
    }
  ]
  return (
    <div className="w-[100%] relative text-[#fff]">
      {/* 右侧导航 */}
      <div className="fixed w-[40px] left-[10px] z-[99] top-[50%] translate-y-[-50%]">
        <ul className="space-y-[15px]">
          {
            slideList.map(item => (<li  onClick={() => goScroll(item.id)} key={item.id} className={`size-[10px] rounded-full hover:bg-[#999] cursor-pointer ${item.id === moduleId ? 'bg-[#999] animate-bounce' : 'bg-[#333]'}`}></li>))
          }
        </ul>
      </div>
      {/* 模块一 */}
      <div className="module-1 w-[100%] absolute h-[100vh] bg-[#000] left-0 z-[9]">
        <div className="max-container h-[100vh] relative  flex items-end justify-center">
          <div className="absolute z-[6] top-[50%] left-0 logo-img flex flex-col items-center justify-center opacity-0">
            <Image
              width={200}
              height={567}
              className="h-[200px] w-[567px]"
              src="https://res.insta360.com/static/infr_base/9cdc48888befe0bda8ad0aec7b6085c3/Insta360%20X3_Logo&Slogan_Online_White_SC.svg"
              alt=""
            />
            <div className="w-[300px] h-[56px] rounded-[30px] overflow-hidden">
              <div onClick={() => showVideo()} className="absolute z-[99] w-[300px] h-[56px] text-[24px] text-white flex justify-center items-center cursor-pointer">
                介绍视频
              </div>
              <video
                className="rounded-[30px]"
                src="https://media.insta360.com/static/infr_base/6f2cdbb854314d0c60ac84371a9ead63/preview3.mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
          <video
            className="w-[1440px] h-[800px] object-fill"
            src="https://media.insta360.com/static/799499c95da727e1f88d156290987e5f/X3K2V-169.mp4"
            autoPlay
            muted
          ></video>
        </div>
      </div>
      {/* 模块二 */}
      <div className="module-2 w-[100%] h-[100vh] bg-[#000] overflow-hidden">
        <div className="flex w-[100%] h-[100vh]">
          <div className="w-[600px] h-[100vh] object-fill border-[#222] border-r flex items-center">
            <video
              className="w-full h-[800px] object-fill"
              src="https://media.insta360.com/static/7020544279ac89700bfff6e9101459ed/c.mp4"
              muted
              ref={modeul2VideoRef1}
            ></video>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="module-2-text space-y-[15px] w-[560px] text-white">
              <div className="text-[#5f98d6]">隐形自拍杆-2</div>
              <div className="text-[48px] whitespace-pre-wrap leading-[60px] font-bold">
                不可思议的<br></br>第三人称视角。
              </div>
              <div>
                隐形自拍杆能在画面中完全消失，一人自拍，也能拍出令人称奇的空中视角和第三人称视角。没有无人机？没问题！
              </div>
              <div className="pt-[20px]">
                <video
                   ref={modeul2VideoRef}
                  className="w-[560px] object-fill rounded-xl"
                  src="https://media.insta360.com/static/infr_base/09ff85fbdf363126a31edc95bc89c4b3/3pv.mp4"
                  muted
                  loop
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 模块三 */}
      <div className="module-3 w-[100%] h-[100vh] bg-[#000] border-[#222] border-t overflow-hidden">
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
          <div className="space-y-[20px] w-[868px]">
            <div className="text-[#5f98d6]">FlowState 防抖科技</div>
            <div className="text-[48px] font-bold">稳住每一个灵感瞬间。 </div>
            <div>
              无论运动有多颠簸，X3
              都能凭借一流的图像增稳技术，拍出难以置信的稳定画面。
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
                <div className="w-[217px] h-[40px] text-[#fff] bg-[#000] text-center font-medium rounded-[20px] leading-[40px]">
                  防抖关闭
                </div>
                <div
                  className="w-[217px] h-[40px] text-center leading-[40px] font-medium text-[#000] rounded-[20px]"
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
      {/* 模块四 */}
      <div className="module-4 w-[100%] h-[100vh] bg-[#000] overflow-hidden">
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
          <div className="space-y-[25px]">
            <div className="text-[48px] font-bold w-[864px] mx-auto module-4-top">
              360° 水平矫正-4
            </div>
            <div className="w-[100vw] module-4-center h-[1px] mx-auto rounded-xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                ref={modeul4VideoRef}
                className="w-full h-full object-fill"
                src="https://media.insta360.com/static/infr_base/6eff9a1da13d36867a61b83c8c9378f8/Horizon_lock.mp4"
              ></video>
            </div>
            <div className="w-[864px] mx-auto module-4-bottom">
              运动相机防抖性能，再上新高度。有了 360°
              水平矫正功能，无论相机如何翻转，拍摄画面始终保持水平。
            </div>
          </div>
        </div>
      </div>
      {/* 模块五 */}
      <div className="module-5 h-[100vh] w-[100%]  bg-[#000] overflow-hidden">
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
          <div className="w-[900px] flex">
            <div className="flex-1 w-[0px] flex flex-col justify-center">
              <div className="w-[400px] space-y-[20px] module-5-one overflow-hidden">
                <div className="text-[#5f98d6]">自动取景</div>
                <div className="text-[48px] font-bold leading-[60px]">
                  尽情开拍，<br></br> 取景交给AI。
                </div>
                <div className="pt-[10px] text-[#c8c9cd]">
                  精彩太多，不知从何剪起？AI可为你自动选择全景素材中的最佳画面，并提供多种成片效果供你挑选。
                </div>
              </div>
              <div className="w-[400px] space-y-[20px] module-5-two h-[0px] overflow-hidden">
                <div className="text-[#5f98d6]">自由录屏</div>
                <div className="text-[48px] font-bold leading-[60px]">
                  剪辑，<br></br> 从未如此简单。
                </div>
                <div className="pt-[10px] text-[#c8c9cd]">
                  只需转动手机或滑动屏幕，即可对全景素材进行重构图和取景，所有操作即刻保存，一键导出，即时分享。
                  深度追踪 2.0
                </div>
              </div>
            </div>
            <div className="relative module-5-video origin-top-left scale-150">
              <Image
                width={345}
                height={650}
                className="w-[345px] h-[650px]"
                alt=""
                src="/phone_wai.png"
              ></Image>
              <video
                autoPlay
                loop
                muted
                className="module-5-video-one  w-[250px] h-[520px] left-[48px] top-[80px] absolute z-[1] rounded-b-[32px] object-fill overflow-hidden"
                src="https://media.insta360.com/static/infr_base/bfbbfc52b290edf574994d13e9beff8e/Deep_track.mp4"
              ></video>
              <video
                autoPlay
                loop
                muted
                className="module-5-video-two opacity-0 w-[250px] h-[520px] left-[48px] top-[80px] absolute z-[1] rounded-b-[32px] object-fill overflow-hidden"
                src="https://media.insta360.com/static/infr_base/d406a2bc468eddb7216660ac315da357/360_photo_am.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
      {/* 模块六 */}
      <div className="module-6 h-[100vh] w-[100%]  bg-[#000] overflow-hidden">
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
          <div className="w-[900px] flex">
            <div className="relative module-6-video origin-top-right scale-150">
              <Image
                width={345}
                height={650}
                alt=""
                src="/phone_wai.png"
              ></Image>
              <video
                autoPlay
                loop
                muted
                className="w-[250px] h-[520px] left-[48px] top-[80px] absolute z-[1] rounded-b-[32px] object-fill overflow-hidden"
                src="https://media.insta360.com/static/infr_base/d406a2bc468eddb7216660ac315da357/360_photo_am.mp4"
              ></video>
            </div>
            <div className="flex-1 w-[0px] flex justify-end items-center">
              <div className="w-[400px] space-y-[20px]">
                <div className="text-[#5f98d6]">照片动画师</div>
                <div className="text-[48px] font-bold leading-[60px]">
                  静态照片,<br></br> 动起来。
                </div>
                <div className="pt-[10px] text-[#c8c9cd]">
                  照片动画师功能可将静态全景照片，一键转为动画视频。通过AI
                  人脸识别技术和预设效果，app 将自动对动画进行优化。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 模块七 */}
      <div className="module-7 h-[100vh] w-[100%]  bg-[#000] overflow-hidden">
        <div className="w-[1440px] h-[100vh] mx-auto flex justify-center items-center">
          <div className="w-[365px] space-y-[20px]">
            <div className="text-[#5f98d6]">AI 创意库</div>
            <div className="text-[48px] font-bold leading-[60px]">
              指尖上的<br></br> 剪辑大师。
            </div>
            <div className="pt-[10px] text-[#c8c9cd]">
              无穷的创作灵感，尽在AI创意库。按照教程拍摄相应素材，套用模板，即可一键生成令人赞不绝口的创意大片。你的社交媒体，从此更出彩。
            </div>
          </div>
          <div className="ml-[80px]">
            <div className="w-[800px] h-[450px] rounded-xl overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                onSwiper={() => {
                  gsap.fromTo(
                    ".swiper-border",
                    { width: 0, x: 0 },
                    { width: "80px", duration: 6 }
                  )
                }}
                onSlideChange={(item) => {
                  let x = null
                  if (item.activeIndex == 0) {
                    x = 0
                  } else if (item.activeIndex == 1) {
                    x = 142
                  } else if (item.activeIndex == 2) {
                    x = 284
                  }
                  gsap.fromTo(
                    ".swiper-border",
                    { width: 0, x },
                    { width: "80px", duration: 6 }
                  )
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
              >
                {videoList.map((k, i) => (
                  <SwiperSlide className="w-full h-full" key={i}>
                    <video
                      muted
                      autoPlay
                      loop
                      className="w-full h-full object-fill"
                      src={k.src}
                    ></video>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-[800px]">
              <div className="flex w-[363px] h-[40px] mx-auto mt-[15px] text-[20px] font-medium items-center">
                <div className="flex-1 cursor-pointer">魔法天空</div>
                <div className="flex-1 cursor-pointer text-center">
                  骑行生物
                </div>
                <div className="flex-1 cursor-pointer text-right">
                  光影飞逝
                </div>
              </div>
              <div className="bg-[#646669] h-[1px] w-[363px] mx-auto">
                <div className="swiper-border bg-[#fff] h-[1px] w-[80px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 模块八 */}
      <div className="module-8 h-[100vh] w-[100%]  bg-[#000] overflow-hidden">
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
          <div className="w-[950px] h-[550px] rounded-xl overflow-hidden relative module-8-video">
            <div className="w-full h-full absolute z-[1] top-0 left-0 flex justify-center items-center module-8-text bg-[#000] bg-opacity-50">
              <div className="w-[528px] space-y-[20px] text-center ">
                <div className="text-[#5f98d6]">延时摄影-8</div>
                <div className="text-[48px] font-bold leading-[60px]">
                  K 全景延时，了不得。
                </div>
                <div className="pt-[10px] text-[#c8c9cd]">
                  凭借更大的全新传感器，X3 能以突破性的 8K
                  分辨率，将全景延时视频，提升到无与伦比的全新水平。
                </div>
              </div>
            </div>
            <video
              muted
              loop
              ref={modeul8VideoRef}
              className="w-full h-full object-fill"
              src="https://media.insta360.com/static/infr_base/c046de75c04a5f5526b7aa72c6473bba/8K%20timelapse.mp4"
            ></video>
          </div>
        </div>
      </div>
      {/** 第九个模块 **/}
      <div className="module-9 w-[100%] bg-[#000]  overflow-hidden flex justify-center items-center pb-[100px]">
        <div className="w-[1048px] mx-auto">
          <div className="text-[32px] font-bold py-[20px]">参数</div>
          {params.map((k, i) => (
            <div className="flex py-[30px] border-[#222] border-b" key={i}>
              <div className="w-[460px] text-[20px]">{k.title}</div>
              <div className="flex-1 w-[0px] ml-[100px] text-[#898a8e] leading-[40px] text-[18px]">
                {k.list.map((item, index) => (
                  <div key={index}>{item.title}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 弹出视频*/}
      {isPlay ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          controls
          src='https://media.insta360.com/static/infr_base/6f2cdbb854314d0c60ac84371a9ead63/preview3.mp4'
          className="w-[960px] fixed translate-x-[-50%] translate-y-[-50%] z-[300] left-[50%] top-[50%]"
        ></video>
      ) : (
        <></>
      )}
      {isPlay ? <SubMenuOverlay hideEvens={hideVieo} top="0px" /> : <></>}
    </div>
  )
}

export default BCS300