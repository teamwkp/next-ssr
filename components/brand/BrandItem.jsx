"use client"
import { useRouter } from "next/navigation"

function BrandItem({ id }) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/article/${id}`)}
      className="w-[48%] mb-[40px] cursor-pointer"
    >
      <div
        style={{
          backgroundImage: "url(/post1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="top w-full h-[482px] overflow-hidden rounded-2xl"
      ></div>
      <div className="mt-[32px] text-[30px] font-bold leading-[40px]">
        iGPSPORT中文品牌“迹驰”，备受骑友喜爱的BSC系列惊艳上市
      </div>
      <div className="my-[16px] text-[#121217] opacity-[0.64] leading-[32px] text-[16px]">
        01月11日,2024
      </div>
      <div>
        4月11日，iGPSPORT中文品牌名称“迹驰”正式亮相同期，iGPSPORT还发布了码表BSC系列的首款彩屏大作BSC3……
      </div>
      <div className="text-[#FF4B27] text-[16px] mt-[32px]">查看更多</div>
    </div>
  )
}

export default BrandItem
