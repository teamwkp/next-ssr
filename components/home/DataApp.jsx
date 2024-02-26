import Image from "next/image"
import AnimatedWrap from "../AnimatedWrap"

function DataApp() {
  const dataList = [1, 2]
  return (
    <div className="rounded-2xl h-[460px] flex items-center bg-[#F2F3FA] mt-[48px]">
      <div
        className="rounded-2xl w-[100%] h-[100%] z-10  flex justify-between items-center"
        style={{ background: "#F7F7F8" }}
      >
        <div className=" w-[45%]  flex justify-center">
          <div className="w-[344px] space-y-[24px]">
            <div className="font-bold text-[42px] text-center">
              <AnimatedWrap type={"fade"}> 专业数据分析APP</AnimatedWrap>
            </div>
            <div className=" text-[16px] text-[#121217]">
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
        <div className="w-[55%] cursor-pointer relative flex">
          <AnimatedWrap
            overlayClassName="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[10]"
            type="move-left-1"
            duration={800}
          >
            <img src="/phone1.png" width="116px" height="auto" alt="" />
          </AnimatedWrap>
          <AnimatedWrap
            overlayClassName="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[20]"
            type="move-left-2"
            duration={1200}
          >
            <img src="/phone4.png" width="116px" height="auto" alt="" />
          </AnimatedWrap>
          <div
            className=" shadow-2xl w-[147px] h-[297px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[30]"
            style={{
              backgroundImage: "url(/phone_wai.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* <img
            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[30]"
            src="/phone_wai.png"
            width="116px"
            height="auto"
            alt=""
          /> */}
          <AnimatedWrap
            overlayClassName="absolute right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] z-[20]"
            type="move-right-1"
            duration={800}
          >
            <img src="/phone4.png" width="116px" height="auto" alt="" />
          </AnimatedWrap>
          <AnimatedWrap
            overlayClassName="absolute right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] z-[10]"
            type="move-right-2"
            duration={1200}
          >
            <img src="/phone2.png" width="116px" height="auto" alt="" />
          </AnimatedWrap>
        </div>
      </div>
    </div>
  )
}

export default DataApp
