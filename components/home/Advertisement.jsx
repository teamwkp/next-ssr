"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

import Image from "next/image"

function Advertisement() {
  const quotation = [
    {
      text: "十年赛场征战，我对专业装备的要求近乎严苛，iGPSPORT的GPS码表已成为我最信任的骑行伙伴之一。",
      img: "/avt1.png",
      position: "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
      size: "w-[365px] h-[365px]",
    },
    {
      text: "十年赛场征战2。",
      img: "/avt1.png",
      position: "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
      size: "w-[365px] h-[365px]",
    },
    {
      text: "十年赛场征战3。",
      img: "/avt1.png",
      position: "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
      size: "w-[365px] h-[365px]",
    },
  ]
  return (
    <div
      className=" text-white h-[528px] relative mt-[48px] flex items-center rounded-2xl"
      style={{ background: "linear-gradient(75deg, #131313, #4A4A4C)" }}
    >
      <div className="ml-[128px] w-[388px]">
        <div className="font-bold text-[42px]">听听他们的声音</div>
        <div className="py-[15px]">
          <Image src={"/yinhao.png"} width={40} height={30} alt="" />
        </div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          onSlideChange={() => {
            console.log("show")
          }}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {quotation.map((k, i) => (
            <SwiperSlide className="w-full h-[100px]" key={i}>
              <div className="w-full block">{k.text}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex mt-[24px] space-x-[20px]">
          <img className="size-[40px] cursor-pointer" src="/left-icon.png" />
          <img className="size-[40px] cursor-pointer" src="/right-icon.png" />
        </div>
      </div>
      <div className="absolute right-[145px] z-10">
        {/* <img className="size-[365px]" src="/avatar.png" /> */}
        <div className="w-[365px] h-[365px] bg-red-500 relative">
          <Image
            className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            src={"/avt1.png"}
            width={50}
            height={50}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Advertisement
