"use client"

import SubMenuOverlay from "@/components/SubMenuOverlay"
import { CDN_URL } from "@/constants"
import IgpLogo from "@/components/home/IgpLogo"
import { useState } from "react"
import Image from "next/image"
import AnimatedWrap from "@/components/AnimatedWrap"

function VideoPlay() {
  const [isPlay, setIsPlay] = useState(false)
  const showVideo = () => {
    setIsPlay(true)
  }
  const hideVieo = (val) => {
    setIsPlay(false)
  }
  return (
    <div>
      <video
        src={`${CDN_URL}/igort.mp4`}
        autoPlay
        muted
        loop
        className="w-full h-full object-fill"
      ></video>
      <div className="hidden lg:flex md:flex absolute w-full h-full z-[19] top-0 text-white  flex-col justify-center items-center">
        <IgpLogo />
        <AnimatedWrap type={"fade"}>
          <div className="text-[20px] mt-[8px] mb-[32px]">
            记录精彩骑迹 为骑行运动而生
          </div>
          <Image
            onClick={showVideo}
            className="hover:scale-110 transition-all"
            src={"/vuesax.png"}
            width={32}
            height={32}
            objectFit="contain"
            alt=""
          />
        </AnimatedWrap>

        <div className="pt-[20px] w-[32px] mx-auto"></div>
      </div>
      {isPlay ? (
        <video
          autoPlay
          controls
          src={`${CDN_URL}/iGPSPORT.mp4`}
          className="w-[960px] fixed translate-x-[-50%] translate-y-[-50%] z-[300] left-[50%] top-[50%]"
        ></video>
      ) : (
        <></>
      )}

      {isPlay ? <SubMenuOverlay hideEvens={hideVieo} top="0px" /> : <></>}
    </div>
  )
}

export default VideoPlay
