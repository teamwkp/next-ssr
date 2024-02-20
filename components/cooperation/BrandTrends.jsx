"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination  } from "swiper/modules"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function BrandTrends() {
  const brandList = [
    {
        text: "iGPSPORT中文品牌“迹驰”发布",
        img: "/swhz-4.png",
        label: "4月11日，iGPSPORT中文品牌名称“迹驰”正式亮相同期，iGPSPORT还发布了码表BSC系列的首款彩屏大作BSC300，以其轻薄、智能、个性多彩的特点......",
    },
    {
        text: "iGPSPORT中文品牌“迹驰”发布",
        img: "/swhz-5.png",
        label: "4月11日，iGPSPORT中文品牌名称“迹驰”正式亮相同期，iGPSPORT还发布了码表BSC系列的首款彩屏大作BSC300，以其轻薄、智能、个性多彩的特点......",
    },
    {
        text: "iGPSPORT中文品牌“迹驰”发布",
        img: "/swhz-4.png",
        label: "4月11日，iGPSPORT中文品牌名称“迹驰”正式亮相同期，iGPSPORT还发布了码表BSC系列的首款彩屏大作BSC300，以其轻薄、智能、个性多彩的特点......",
    },
    {
        text: "iGPSPORT中文品牌“迹驰”发布",
        img: "/swhz-5.png",
        label: "4月11日，iGPSPORT中文品牌名称“迹驰”正式亮相同期，iGPSPORT还发布了码表BSC系列的首款彩屏大作BSC300，以其轻薄、智能、个性多彩的特点......",
    },
  ]
  return (
    <div className="w-full">
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={2.5}
            fadeEffect={{
                crossFade: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {brandList.map((k, i) => (
                <SwiperSlide className="w-[410px]" key={i}>
                    <div className="w-[410px] h-[380px] flex items-end" style={{ backgroundImage: "url('"+ k.img +"')", backgroundSize: "100% 100%" }}>
                        <div className="p-[30px] ">
                            <div className="text-[22px] text-white">{k.text}</div>
                            <div className="text-[14px] line- mt-[15px] line-clamp-3" style={{color: "rgba(255,255,255,0.71)"}}>{k.label}</div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div> 
    
  )
}

export default BrandTrends
