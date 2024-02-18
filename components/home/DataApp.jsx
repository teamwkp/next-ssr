"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

import Image from "next/image"

function DataApp() {
  const dataList = [1,2]
  return (
    <div
        className="rounded-2xl h-[530px] relative bg-[#F2F3FA] mt-[48px]"
        style={{ backgroundImage: "url('/sport-bg.png')" }}
        >
        <div
            className="absolute rounded-2xl w-[100%] h-[100%] z-10  flex items-center"
            style={{ background: "rgba(0,0,0,.6)" }}
        >
            <div className="ml-[100px] space-y-[24px] lg:w-[344px]">
            <div className="font-bold text-[42px] text-center text-white">
                专业数据分析APP
            </div>
            <div className="text-white text-[18px]">
                记录您的每一次骑行活动。在活动记录中有摘要数据、详细数据以及多样的图表分析，帮助您分析自己的每次运动表现。
            </div>
            <div className="flex lg:flex-row flex-col justify-between">
                <Image
                src="/app_store.png"
                height={52}
                width={166}
                className="cursor-pointer"
                alt="app_store"
                />
                <Image
                src="/goole_play.png"
                height={52}
                width={166}
                className="cursor-pointer"
                alt="app_store"
                />
            </div>
            </div>
        </div>
        <div className="absolute z-20 h-[517px] w-[606px] right-[-60px] flex">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                >
                {dataList.map((k, i) => (
                    <SwiperSlide className="h-[517px]" key={i}>
                        <Image height={606} width={517} src="/swiper.png" alt="swiper" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default DataApp
