"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import AnimatedWrap from "../AnimatedWrap"
import "swiper/css"
import "swiper/css/effect-fade"
import Image from "next/image"

function Advertisement() {
  const quotation = [
    {
      text: "骑行充实了我的生活，我一直用iGPSPORT码表记录骑行数据，不仅定位快、数据准、续航久，还能通过APP分享骑行的乐趣。",
      img: "/avt1.png",
      name: "爱踩单车的凉茶",
      label: "骑行达人",
      position:
        "absolute size-[55px] bg-[#ccc] rounded-full  top-[10px] left-[55px]",
      size: 55,
    },
    {
      text: "十年赛场征战，对专业装备的要求近乎严苛，iGPSPORT的GPS码表已成为我最信任的骑行伙伴之一。",
      img: "/avt2.png",
      name: "孔文生",
      label: "知名男车手",
      position:
        "absolute size-[80px] bg-[#ccc] rounded-full top-[20px] left-[200px]",
      size: 80,
    },
    {
      text: "自从有了iGPSPORT码表之后，无论比赛还是骑游，我对数据都非常期待，不知不觉，能够骑得更快、更远。",
      img: "/avt3.png",
      name: "LS.",
      label: "知名女车手",
      position:
        "absolute size-[50px] bg-[#ccc] rounded-full top-[180px] left-[270px]",
      size: 50,
    },
    {
      text: "骑行运动也可以很时尚，我对骑行装备的颜值有较高追求，iGPSPORT码表的设计感很强、外观时尚，非常符合我的审美。",
      img: "/avt4.png",
      name: "小蛮爱单车",
      label: "骑行达人",
      position:
        "absolute size-[60px] bg-[#ccc] rounded-full top-[250px] left-[200px]",
      size: 60,
    },
    {
      text: "作为一名女车手，我对GPS码表的要求较多，功能、品质、颜值缺一不可，iGPSPORT码表非常符合我的需求。",
      img: "/avt5.png",
      name: "是_da婷…",
      label: "知名女车手",
      position:
        "absolute size-[90px] bg-[#ccc] rounded-full top-[200px] left-[0px] ",
      size: 90,
    },
  ]
  const [currentAvt, setStatus] = useState(quotation[0].img)
  return (
    <div
      className=" text-[#121217] h-[460px] relative mt-[48px] flex items-center rounded-2xl bg-cover bg-center"
      style={{
        backgroundImage: "url(/home_act.png)",
      }}
    >
      <div className="ml-[70px] w-[388px]">
        <div className="font-bold text-[42px]">
          <AnimatedWrap type={"fade"}>听听他们的声音</AnimatedWrap>
        </div>
        <div className="py-[15px]">
          <Image src={"/yinhao.png"} width={40} height={30} alt="" />
        </div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          onSlideChange={(item) => {
            setStatus(quotation[item.activeIndex].img)
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
              <div className="mt-10 text-[14px]">- @{k.name}</div>
              <div className="mt-1 text-[12px]  opacity-[0.75]">{k.label}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex mt-[24px] space-x-[20px]"></div>
      </div>
      <div className="absolute w-[290px] h-[290px] right-[130px] z-10">
        <div className="w-full h-full  avatar-animation">
          {quotation.map((item) => (
            <div className={item.position} key={item.img}>
              <Image
                width={item.size}
                height={item.size}
                className="cursor-pointer rounded-full"
                src={item.img}
                alt={item.name}
              />
            </div>
          ))}
        </div>
        <div className="absolute size-[130px] bg-[#ccc] rounded-full top-[100px] left-[90px] active-avatar-animation border-[#ff4b2f] border-[3px]">
          <Image
            width={160}
            height={160}
            className="cursor-pointer rounded-full"
            src={currentAvt}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Advertisement
