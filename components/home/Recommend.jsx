"use client"

function Recommend() {
  const prodList = [
    {
      title: "LW10",
      subTitle: "生活随行 运动随心",
      img: "home_prod03.png",
    },
    {
      title: "TL30",
      subTitle: "安全之星 智护骑行",
      img: "home_prod04.png",
    },
    {
      title: "HR70",
      subTitle: "记录跳动 智享运动",
      img: "home_prod05.png",
    },
    {
      title: "SPD70",
      subTitle: "双模速度传感器",
      img: "home_prod06.png",
    },
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mt-[48px]">
      {prodList.map((k, index) => (
        <div
          key={index}
          className="h-[284px] bg-[#F7F7F8] rounded-2xl flex items-center relative group cursor-pointer hover:shadow-lg overflow-hidden transition ease-linear delay-150"
        >
          <div className="text-center space-y-[10px] w-[45%] flex flex-col justify-center items-center">
            <div className=" flex flex-col items-start">
              <div className="font-medium text-[36px]">{k.title}</div>
              <div className=" text-[18px] text-[#0E0606] opacity-[0.75] leading-6">
                {k.subTitle}
              </div>
            </div>
          </div>
          <div className="w-[55%] h-full flex items-center justify-center">
            <img src={`/${k.img}`} width="100%" height="auto" alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recommend
