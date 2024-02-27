"use client"

import styled from "styled-components"
import AnimatedWrap from "../AnimatedWrap"

function Recommend() {
  const prodList = [
    {
      title: "LW10",
      subTitle: "生活随行 运动随心",
      img: "switch3.png",
    },
    {
      title: "TL30",
      subTitle: "安全之星 智护骑行",
      img: "switch1.png",
    },
    {
      title: "HR70",
      subTitle: "记录跳动 智享运动",
      img: "switch4.png",
    },
    {
      title: "SPD70",
      subTitle: "双模速度传感器",
      img: "switch2.png",
    },
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mt-[24px]">
      {prodList.map((k, index) => (
        <ScalWrap key={index}>
          <div
            style={{
              backgroundImage: `url(/${k.img})`,
            }}
            className="item-box h-[284px] bg-center rounded-2xl flex items-center relative group cursor-pointer bg-[length:100%_100%] hover:shadow-lg hover:bg-[length:105%_105%] transition-all duration-1000 overflow-hidden"
          >
            <div className="text-center space-y-[10px] w-[45%] flex flex-col justify-center items-center">
              <div className="flex flex-col items-start">
                <div className="font-bold text-[36px]">{k.title}</div>
                <AnimatedWrap type="reveal-fadeInUp">
                  <div className=" text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                    {k.subTitle}
                  </div>
                </AnimatedWrap>
              </div>
            </div>
          </div>
        </ScalWrap>
      ))}
    </div>
  )
}

const ScalWrap = styled.div``

export default Recommend
