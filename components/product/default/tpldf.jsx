"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import { Button } from "antd"

function TpldfComponent() {
  const bg = [
    {
      bgImg: "/bick2.png",
      subImg:
        "https://30265801.s21i.faiusr.com/4/ABUIABAEGAAgnYyroQYoiNTDowUwgA84oAk.png.webp",
      title: "航向&导航双功能",
      subTitle: "副标题",
    },
    {
      bgImg: "/Rectbanner.png",
      subImg:
        "https://30265801.s21i.faiusr.com/4/ABUIABAEGAAgnYyroQYoiNTDowUwgA84oAk.png.webp",
      title: "航向&导航双功能2",
      subTitle: "副标题",
    },
  ]

  return (
    <>
      <div className="media-container mx-auto pt-[64px]">
        <div className="section-ct mt-[50px] flexw-full flex items-center justify-between">
          <div className="layout-left">
            <div className="logo-group">
              <img
                className="sec-logo h-[34px]"
                src="https://res.insta360.com/static/infr_base/5344090305261eef53c3962934b91d07/pro_logo.sc.svg"
                alt=""
              />
            </div>
            <div className="text-[44px] font-bold mt-[24px] mb-[32px]">
              见所未见 未来已来
            </div>
            <div className="btn-group flex items-center">
              <div className="btn-video flex items-center justify-center min-w-[180px] text-center h-[48px] leading-[48px] text-[#000] text-[18px] border mr-[24px] cursor-pointer">
                <img
                  width="24px"
                  height="24px"
                  src="https://static.insta360.com/assets/www/project/official/common/desktop/ic_watchvideo@2x.png"
                  alt=""
                />
                <div className="">预告片</div>
              </div>
              <div className="btn-video flex items-center justify-center min-w-[180px] text-center h-[48px] leading-[48px] text-[#000] bg-[#ffd200] text-[18px] border mr-[24px] cursor-pointer">
                <div className="">立即购买</div>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://static.insta360.com/assets/www/project/official/product/pro/01_img_ftintro@2x.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="mt-[24px] w-[260px] h-[153px] cursor-pointer"
            ></div>
          </div>
          <div
            style={{
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "url(https://static.insta360.com/assets/www/project/official/product/pro/01_img_prosliver@2x.png)",
            }}
            className="sec-product-pic w-[50%] h-[500px]"
          ></div>
        </div>
      </div>
      <div className="module2 w-full">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {bg.map((k, i) => (
            <SwiperSlide className="w-full h-[100px]" key={i}>
              <div
                style={{
                  backgroundImage: `url(${k.bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-full h-[900px] relative"
              >
                <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <div className="text-center text-[#fff] font-bold text-[64px]">
                    {k.title}
                  </div>
                  <div className="text-center text-[#fff] font-bold text-[24px] mt-[10px]">
                    {k.subTitle}
                  </div>
                  <div className="mt-[20px] text-center">
                    <Button size="large" type="primary">
                      样片下载
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="module3 media-container mx-auto">
        <div className="pt-[100px] text-[54px] font-bold text-center">
          光流无缝拼接
        </div>
        <img
          className="mt-[50px]"
          src="/bick2.png"
          width="100%"
          height="auto"
          alt=""
        />
      </div>
    </>
  )
}

export default TpldfComponent
