import Image from "next/image"
import AnimatedWrap from "../AnimatedWrap"

function DataApp() {
  const dataList = [1, 2]
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
            <AnimatedWrap type={"fade"}> 专业数据分析APP</AnimatedWrap>
          </div>
          <div className="text-white text-[18px]">
            记录您的每一次骑行活动。在活动记录中有摘要数据、详细数据以及多样的图表分析，帮助您分析自己的每次运动表现。
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <Image
              src="/app_store.png"
              height={52}
              width={166}
              className="cursor-pointer hover:scale-105 transition-all"
              alt="app_store"
            />
            <Image
              src="/goole_play.png"
              height={52}
              width={166}
              className="cursor-pointer hover:scale-105 transition-all"
              alt="app_store"
            />
          </div>
        </div>
      </div>
      <div className="absolute z-20 h-[517px] w-[606px] right-[-60px] flex cursor-pointer">
        <Image height={606} width={517} src="/swiper.png" alt="swiper" />
      </div>
    </div>
  )
}

export default DataApp
