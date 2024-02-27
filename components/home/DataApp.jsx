import Image from "next/image"
import AnimatedWrap from "../AnimatedWrap"
import Link from "next/link"
import { IOS_DOWN_URL } from "@/constants"

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
            <div className="font-bold text-[36px] text-left">
              <AnimatedWrap type={"fade"}> 专业数据分析APP</AnimatedWrap>
            </div>
            <div className="text-[16px] text-[#121217] leading-[28px] mb-[44px]">
              记录您的每一次骑行活动。在活动记录中有摘要数据、详细数据以及多样的图表分析，帮助您分析自己的每次运动表现。
            </div>
            <div className="flex lg:flex-row flex-col justify-between">
              <a href={IOS_DOWN_URL} target="_blank">
                <Image
                  src="/ios-df.svg"
                  height={52}
                  width={166}
                  className="cursor-pointer hover:scale-105 transition-all"
                  alt="app_store"
                />
              </a>

              <Image
                src="/Android-df.svg"
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
            overlayClassName="absolute left-[50%] top-[50%] translate-x-[-70%] translate-y-[-50%] z-[10]"
            type="move-left-1"
            duration={800}
          >
            <img src="/phone4.png" width="116px" height="auto" alt="" />
          </AnimatedWrap>
          <AnimatedWrap
            overlayClassName="absolute left-[50%] top-[50%] translate-x-[-70%] translate-y-[-50%] z-[20]"
            type="move-left-2"
            duration={1200}
          >
            <img src="/phone1.png" width="116px" height="auto" alt="" />
          </AnimatedWrap>

          <AnimatedWrap
            overlayClassName="absolute left-[50%] top-[50%] translate-x-[-65%] translate-y-[-50%] z-[30]"
            type="fade"
          >
            <img src="/phone5.png" width="147px" height="auto" alt="" />
          </AnimatedWrap>

          <AnimatedWrap
            overlayClassName="absolute right-[50%] top-[50%] translate-x-[30%] translate-y-[-50%] z-[20]"
            type="move-right-1"
            duration={800}
          >
            <img src="/phone2.png" width="116px" height="auto" alt="" />
          </AnimatedWrap>
          <AnimatedWrap
            overlayClassName="absolute right-[50%] top-[50%] translate-x-[30%] translate-y-[-50%] z-[10]"
            type="move-right-2"
            duration={1200}
          >
            <img src="/phone3.png" width="116px" height="auto" alt="" />
          </AnimatedWrap>
        </div>
      </div>
    </div>
  )
}

export default DataApp
