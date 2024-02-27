"use client"

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
        <div
          key={index}
          style={{
            backgroundImage: `url(/${k.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[284px] rounded-2xl flex items-center relative group cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150"
        >
          <div className="text-center space-y-[10px] w-[45%] flex flex-col justify-center items-center">
            <div className=" flex flex-col items-start">
              <div className="font-bold text-[36px]">{k.title}</div>
              <AnimatedWrap type="reveal-fadeInUp">
                <div className=" text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                  {k.subTitle}
                </div>
              </AnimatedWrap>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recommend
