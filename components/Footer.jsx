"use client"

import fstyle from "./Footer.module.scss"
import { Input, Button, Collapse } from "antd"
import { PlusOutlined, RightOutlined } from "@ant-design/icons"
import { useState } from "react"

function Footer() {
  const [extKey, setExtKey] = useState("")
  const foldExtra = (type) => {
    if (extKey === "") {
      setExtKey(type)
    } else {
      setExtKey("")
    }
  }
  return (
    <>
      <footer className="hidden lg:block w-full bg-white box-border pt-[64px] pb-[40px]">
        <div className="max-container padding-container">
          <div className="footer-top w-full flex justify-between ">
            <div className="f-left flex justify-between w-[45%]">
              <div>
                <div className="text-[14px] font-bold mb-[10px]">旗舰产品</div>
                <div className="opacity-[0.75] text-[#0E0606]">
                  <div className={fstyle.fw}>iGS630</div>
                  <div className={fstyle.fw}>BSC300</div>
                  <div className={fstyle.fw}>BSC200</div>
                  <div className={fstyle.fw}>BSC100S</div>
                  <div className={fstyle.fw}>HR70</div>
                </div>
              </div>
              <div>
                <div className=" text-[14px] font-bold mb-[10px]">品牌介绍</div>
                <div className="opacity-[0.75] text-[#0E0606]">
                  <div className={fstyle.fw}>品牌简介</div>
                  <div className={fstyle.fw}>品牌历史</div>
                  <div className={fstyle.fw}>品牌伙伴</div>
                  <div className={fstyle.fw}>品牌动态</div>
                </div>
              </div>
              <div>
                <div className=" text-[14px] font-bold mb-[10px]">
                  服务与支持
                </div>
                <div className="opacity-[0.75] text-[#0E0606]">
                  <div className={fstyle.fw}>产品支持</div>
                  <div className={fstyle.fw}>售后服务</div>
                  <div className={fstyle.fw}>商务合作</div>
                </div>
              </div>
              <div>
                <div className=" text-[14px] font-bold mb-[10px]">线上商城</div>
                <div className="opacity-[0.75] text-[#0E0606]">
                  <div className={fstyle.fw}>天猫</div>
                  <div className={fstyle.fw}>京东</div>
                </div>
              </div>
            </div>
            <div className="f-right w-[30%]">
              <div className="text-[14px] font-bold mb-[10px]">
                订阅我们的邮件以获取最新消息
              </div>
              <div className="text-[14px] text-[#0E0606] opacity-[0.75]">
                及时获得iGPSPORT的最新新闻，相关产品资讯
              </div>
              <div className="flex items-center mt-5">
                <Input
                  placeholder="请输入您的邮箱"
                  suffix={<Button type="primary">订阅</Button>}
                />
              </div>
              <div className="flex items-center mt-[12px]">
                <div className="text-[#0E0606] text-[12px] font-bold mr-[16px] cursor-pointer">
                  @iGPSPORT
                </div>
                <img
                  className="w-[36px] cursor-pointer"
                  src="/image_39.png"
                  alt=""
                />
                <img
                  className="w-[36px] mx-[16px] cursor-pointer"
                  src="/image_41.png"
                  alt=""
                />
                <img
                  className="w-[36px] cursor-pointer"
                  src="/image_40.png"
                  alt=""
                />
              </div>
              <div className="flex mt-2">
                <div className="text-[12px] text-[#0E0606] opacity-[0.75] mr-[16px]">
                  <div className="leading-[30px]">微信公众号</div>
                  <img src="/image_37.png" alt="" />
                </div>
                <div className="text-[12px] text-[#0E0606] opacity-[0.75]">
                  <div className="leading-[30px]">迹驰社群</div>
                  <img src="/image_38.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={fstyle.footerBottom}>
            <div className={fstyle.copyright}>
              Copyright © 2024 iGPSPORT | 鄂ICP备13000514号-2
            </div>
            <div className={fstyle.copyright}>用户使用条款 | 隐私政策</div>
          </div>
        </div>
      </footer>
      <footer className="block lg:hidden w-full bg-[#262629] px-[24px] box-border text-[#d2d2d6] text-[14px]">
        <div className={fstyle.line}>
          <div
            onClick={() => foldExtra("flagship")}
            className="flex justify-between w-full items-center cursor-pointer"
          >
            <div>旗舰产品</div>
            <PlusOutlined
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                extKey === "flagship" ? "rotate-45" : ""
              } hover:rotate-180 transition-all`}
            />
          </div>
          <div
            className={`${
              extKey === "flagship" ? "h-[200px]" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out px-[20px] box-border`}
          >
            <div className=" leading-[38px] mt-[20px]">iGS630</div>
            <div className=" leading-[38px]">BSC300</div>
            <div className=" leading-[38px]">BSC200</div>
            <div className=" leading-[38px]">BSC100S</div>
            <div className=" leading-[38px]">HR70</div>
          </div>
        </div>
        <div className={fstyle.line}>
          <div
            onClick={() => foldExtra("brand")}
            className="flex justify-between w-full items-center cursor-pointer"
          >
            <div>品牌介绍</div>
            <PlusOutlined
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                extKey === "brand" ? "rotate-45" : ""
              } hover:rotate-180 transition-all`}
            />
          </div>
          <div
            className={`${
              extKey === "brand" ? "h-[165px]" : "h-0"
            } overflow-hidden transition-all  duration-300 ease-in-out px-[20px] box-border`}
          >
            <div className=" leading-[38px] mt-[20px]">品牌简介</div>
            <div className=" leading-[38px]">品牌历史</div>
            <div className=" leading-[38px]">品牌伙伴</div>
            <div className=" leading-[38px]">品牌动态</div>
          </div>
        </div>
        <div className={fstyle.line}>
          <div
            onClick={() => foldExtra("Serve")}
            className="flex justify-between w-full items-center cursor-pointer"
          >
            <div>服务与支持</div>
            <PlusOutlined
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                extKey === "Serve" ? "rotate-45" : ""
              } hover:rotate-180 transition-all`}
            />
          </div>
          <div
            className={`${
              extKey === "Serve" ? "h-[130px]" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out px-[20px] box-border`}
          >
            <div className=" leading-[38px] mt-[20px]">产品支持</div>
            <div className=" leading-[38px]">售后服务</div>
            <div className=" leading-[38px]">商务合作</div>
          </div>
        </div>
        <div className={fstyle.line}>
          <div
            onClick={() => foldExtra("shop")}
            className="flex justify-between w-full items-center cursor-pointer"
          >
            <div>线上商城</div>
            <PlusOutlined
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                extKey === "shop" ? "rotate-45" : ""
              } hover:rotate-180 transition-all`}
            />
          </div>
          <div
            className={`${
              extKey === "shop" ? "h-[100px]" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out px-[20px] box-border`}
          >
            <div className=" leading-[38px] mt-[20px]">天猫</div>
            <div className=" leading-[38px]">京东</div>
          </div>
        </div>
        <div
          className={fstyle.line}
          style={{
            borderBottom: "none",
            paddingBottom: 0,
          }}
        >
          <div>订阅我们</div>
          <div className="text-[#76767f] mt-[5px]">
            及时获得iGPSPORT的最新新闻，相关产品资讯
          </div>
          <div className="w-full mt-[10px] flex items-center">
            <input
              style={{
                border: "1px solid #515157",
                borderRadius: "8px 0 0 8px",
                outline: "none",
              }}
              className="mt-[5px] bg-transparent h-[40px] w-full box-border text-[14px] pl-5 placeholder:text-[#515157]"
              placeholder="请输入您的邮箱"
            ></input>
            <div
              style={{
                borderRadius: "0 8px 8px 0",
                fontSize: "14px",
              }}
              className="w-[40px] h-[40px] mt-[5px] bg-[#515157] flex justify-center items-center"
            >
              <RightOutlined size={10} />
            </div>
          </div>
        </div>
        <div className="text-[12px] text-[#76767f] leading-[20px] mt-5 pb-5">
          <div className="mb-2">
            Copyright © 2024 iGPSPORT | 鄂ICP备13000514号-2
          </div>
          <div className="mb-2">用户使用条款 | 隐私政策</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
