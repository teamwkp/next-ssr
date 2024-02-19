"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
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
      position: "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
      size: "w-[365px] h-[365px]",
    },
    {
      text: "十年赛场征战，对专业装备的要求近乎严苛，iGPSPORT的GPS码表已成为我最信任的骑行伙伴之一。",
      img: "/avt1.png",
      name: "孔文生",
      label: "知名男车手",
      position: "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
      size: "w-[365px] h-[365px]",
    },
    {
      text: "自从有了iGPSPORT码表之后，无论比赛还是骑游，我对数据都非常期待，不知不觉，能够骑得更快、更远。",
      img: "/avt1.png",
      name: "LS.",
      label: "知名女车手",
      position: "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
      size: "w-[365px] h-[365px]",
    },
    {
      text: "骑行运动也可以很时尚，我对骑行装备的颜值有较高追求，iGPSPORT码表的设计感很强、外观时尚，非常符合我的审美。",
      img: "/avt1.png",
      name: "小蛮爱单车",
      label: "骑行达人",
      position: "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
      size: "w-[365px] h-[365px]",
    },
    {
      text: "作为一名女车手，我对GPS码表的要求较多，功能、品质、颜值缺一不可，iGPSPORT码表非常符合我的需求。",
      img: "/avt1.png",
      name: "是_da婷…",
      label: "知名女车手",
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
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {quotation.map((k, i) => (
            <SwiperSlide className="w-full h-[100px]" key={i}>
              <div className="w-full block">{k.text}</div>
              <div className="mt-10 text-[14px]">- @{k.name}</div>
              <div className="mt-1 text-[12px] text-[#ffffff] opacity-[0.75]">
                {k.label}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex mt-[24px] space-x-[20px]">
          <Image
            width={40}
            height={40}
            className="cursor-pointer"
            src="/left-icon.png"
            alt=""
          />
          <Image
            width={40}
            height={40}
            className="cursor-pointer"
            src="/right-icon.png"
            alt=""
          />
        </div>
      </div>
      <div className="absolute w-[400px] h-[400px] right-[100px] z-10">
        <div className="w-full h-full  avatar-animation">
          <div className="absolute size-[55px] bg-[#ccc] rounded-full  top-[35px] left-[55px]">
            <Image
              width={55}
              height={55}
              className="cursor-pointer rounded-full"
              src="/avt1.png"
              alt=""
            />
          </div>
          <div className="absolute size-[100px] bg-[#ccc] rounded-full top-[10px] left-[270px]">
            <Image
              width={100}
              height={100}
              className="cursor-pointer rounded-full"
              src="/avt2.png"
              alt=""
            />
          </div>
          <div className="absolute size-[50px] bg-[#ccc] rounded-full top-[210px] left-[310px]">
            <Image
              width={50}
              height={50}
              className="cursor-pointer rounded-full"
              src="/avt3.png"
              alt=""
            />
          </div>
          <div className="absolute size-[60px] bg-[#ccc] rounded-full top-[310px] left-[230px]">
            <Image
              width={60}
              height={60}
              className="cursor-pointer rounded-full"
              src="/avt4.png"
              alt=""
            />
          </div>
          <div className="absolute size-[100px] bg-[#ccc] rounded-full top-[230px] left-[0px] ">
            <Image
              width={100}
              height={100}
              className="cursor-pointer rounded-full"
              src="/avt5.png"
              alt=""
            />
          </div>
        </div>
        <div className="absolute size-[160px] bg-[#ccc] rounded-full top-[120px] left-[130px] active-avatar-animation">
          <Image
            width={160}
            height={160}
            className="cursor-pointer rounded-full"
            src="/avt6.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Advertisement
