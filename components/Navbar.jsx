"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBagIcon, Bars3Icon } from "@heroicons/react/24/outline"
import { useTranslation } from "react-i18next"
import LanguageChanger from "./LanguageChanger"
import { Button, Popover } from "antd"
import { ShoppingOutlined } from "@ant-design/icons"
import styles from "./Navbar.module.scss"
import SubMenuOverlay from "@/components/SubMenuOverlay"
import { useState } from "react"
import MenuSide from "./MenuSide"

const Navbar = () => {
  const { t } = useTranslation()
  // 售后服务列表
  const saleList = [
    {
      title: "码表",
      url: "/sale-1.png",
      height: 80,
      width: 54,
      path: "/aftersales/codeTable",
    },
    {
      title: "配件",
      url: "/sale-2.png",
      height: 80,
      width: 86,
      path: "/aftersales/module",
    },
    {
      title: "应用",
      url: "/sale-3.png",
      height: 80,
      width: 106,
      path: "/aftersales/application",
    },
    {
      title: "支持",
      url: "/sale-4.png",
      height: 80,
      width: 67,
      path: "/aftersales/support",
    },
  ]
  const [popShow, setPopShow] = useState(false)
  const [popShow3, setPopShow3] = useState(false)
  const [popShow4, setPopShow4] = useState(false)
  const content = (
    <div className="w-full h-full box-border">
      <p>Content</p>
      <p>Content</p>
    </div>
  )
  const contenThree = (
    <div className="w-full h-full box-border">
      <div className="media-container mx-auto flex">
        <div className="flex-1">
          <div className="font-bold text-[18px]">售后服务与支持</div>
          <div className="grid grid-cols-4 mt-[30px]">
            {saleList.map((item) => {
              return (
                <Link href={item.path}>
                  <div className="lg:h-[168px] h-[100px] w-[168px] bg-[#F3F4F8] rounded-2xl flex flex-col justify-center items-center">
                    <Image
                      className="transition-transform hover:scale-110 cursor-pointer"
                      height={item.height}
                      width={item.width}
                      src={item.url}
                      alt=""
                    ></Image>
                    <div className="mt-[30px] text-[#000]">{item.title}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="w-[200px] border-l border-[#EBEBEF] pl-[60px] ml-[60px]">
          <div className="font-bold text-[18px]">常用服务</div>
          <ul className="mt-[30px] space-y-[28px]">
            <li className="cursor-pointer">网站查询</li>
            <li className="cursor-pointer">APP下载</li>
            <li className="cursor-pointer">售后流程</li>
            <li className="cursor-pointer">售后政策</li>
          </ul>
        </div>
      </div>
    </div>
  )
  const contentFour = (
    <div className="w-full h-full box-border">
      <div className="media-container mx-auto flex">
        <div className="w-[240px]  mr-[80px]">
          <div className="font-bold text-[18px]">品牌伙伴</div>
          <ul className="mt-[20px] space-y-[35px]">
            <li>
              <div className="text-[14px] font-bold">合作车队</div>
              <div className="text-[#121217] opacity-[0.5]">
                中国深具创新力的自行车GPS码表品牌
              </div>
            </li>
            <li>
              <div className="text-[14px] font-bold">骑行达人</div>
              <div className="text-[#121217] opacity-[0.5]">
                十余年专注自行车GPS码表的创新
              </div>
            </li>
            <li>
              <div className="text-[14px] font-bold">品牌动态</div>
              <div className="text-[#121217] opacity-[0.5]">
                研发骑行爱好者更喜爱的智能骑行产品
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="font-bold text-[18px]">最新动态</div>
            <div className="text-[12px] cursor-pointer">查看更多 →</div>
          </div>
          <div className="grid grid-cols-3 pt-[20px] gap-[20px]">
            <div className="space-y-[5px]">
              <Image
                src="/swhz-5.png"
                width={240}
                height={170}
                style={{ width: "240px", height: "170px" }}
              ></Image>
              <div className="text-[#121217] opacity-[0.5]">文章</div>
              <div>iGPSPORT中文品牌“迹驰”发布</div>
            </div>
            <div className="space-y-[5px]">
              <Image
                src="/swhz-3.png"
                width={240}
                height={170}
                style={{ width: "240px", height: "170px" }}
              ></Image>
              <div className="text-[#121217] opacity-[0.5]">文章</div>
              <div>iGPSPORT中文品牌“迹驰”发布</div>
            </div>
            <div className="space-y-[5px]">
              <Image
                src="/swhz-4.png"
                width={240}
                height={170}
                style={{ width: "240px", height: "170px" }}
              ></Image>
              <div className="text-[#121217] opacity-[0.5]">文章</div>
              <div>iGPSPORT中文品牌“迹驰”发布</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  const popoverChange = (val) => {
    setPopShow(val)
  }
  const popoverChange3 = (val) => {
    setPopShow3(val)
  }
  const popoverChange4 = (val) => {
    setPopShow4(val)
  }
  return (
    <>
      <header
        style={{
          transition: "top 0.3s",
        }}
        className="fixed top-0 translate-x-[-50%] left-[50%]  w-full z-30 bg-white"
      >
        <div className="max-container padding-container  flexBetween h-[49px] lg:h-[64px] md:h-[64px]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={0}
              priority
              sizes="100vw"
              height={0}
              style={{ width: "124px", height: "auto" }}
            />
          </Link>
          <div className="hidden h-full gap-12 lg:flex">
            <Link
              href={"/standard"}
              key={"flagship_products"}
              className="group relative regular-14 text-gray-50 flexCenter cursor-pointer"
            >
              <Popover
                onOpenChange={popoverChange}
                overlayClassName="shadow-none"
                mouseEnterDelay={0}
                overlayStyle={{
                  position: "fixed",
                  left: 0,
                  right: 0,
                  top: "64px",
                  height: "50vh",
                  background: "#fff",
                  borderTop: "1px solid #eee",
                }}
                overlayInnerStyle={{ boxShadow: "none", height: "100%" }}
                arrow={false}
                content={content}
              >
                <div className="w-full h-full flexCenter">
                  <span>{t("flagship_products")}</span>
                  <div
                    className={`absolute w-0 h-[2px] bg-[#262629] transition-all left-0 bottom-0 group-hover:w-full ${
                      popShow ? "w-full" : ""
                    }`}
                  ></div>
                </div>
              </Popover>
            </Link>
            <Link
              href={"/enterprise"}
              key={"enterprise_introduction"}
              className="group relative regular-14 text-gray-50 flexCenter cursor-pointer"
            >
              <div className="w-full h-full flexCenter">
                <span>{t("enterprise_introduction")}</span>
                <div className="absolute w-0 h-[2px] bg-[#262629] transition-all left-0 bottom-0 group-hover:w-full"></div>
              </div>
            </Link>
            <Link
              href={"/aftersales"}
              key={"aftersales_section"}
              className="group relative regular-14 text-gray-50 flexCenter cursor-pointer"
            >
              <Popover
                onOpenChange={popoverChange3}
                overlayClassName="shadow-none"
                mouseEnterDelay={0}
                overlayStyle={{
                  position: "fixed",
                  left: 0,
                  right: 0,
                  top: "64px",
                  height: "320px",
                  background: "#fff",
                  borderTop: "1px solid #eee",
                }}
                overlayInnerStyle={{ boxShadow: "none", height: "100%" }}
                arrow={false}
                content={contenThree}
              >
                <div className="w-full h-full flexCenter">
                  <span>{t("aftersales_section")}</span>
                  <div
                    className={`absolute w-0 h-[2px] bg-[#262629] transition-all left-0 bottom-0 group-hover:w-full ${
                      popShow3 ? "w-full" : ""
                    }`}
                  ></div>
                </div>
              </Popover>
            </Link>
            <Link
              href={"/cooperation"}
              key={"business_cooperation"}
              className="group relative regular-14 text-gray-50 flexCenter cursor-pointer"
            >
              <Popover
                onOpenChange={popoverChange4}
                overlayClassName="shadow-none"
                mouseEnterDelay={0}
                overlayStyle={{
                  position: "fixed",
                  left: 0,
                  right: 0,
                  top: "64px",
                  height: "320px",
                  background: "#fff",
                  borderTop: "1px solid #eee",
                }}
                overlayInnerStyle={{ boxShadow: "none", height: "100%" }}
                arrow={false}
                content={contentFour}
              >
                <div className="w-full h-full flexCenter">
                  <span>{t("business_cooperation")}</span>
                  <div
                    className={`absolute w-0 h-[2px] bg-[#262629] transition-all left-0 bottom-0 group-hover:w-full ${
                      popShow4 ? "w-full" : ""
                    }`}
                  ></div>
                </div>
              </Popover>
            </Link>
          </div>

          <div className="lg:flexCenter hidden">
            <Button type="primary" className="mr-5" icon={<ShoppingOutlined />}>
              {t("shopping_centre")}
            </Button>
            <LanguageChanger />
          </div>
          <div className="lg:hidden">
            <MenuSide />
          </div>
        </div>
      </header>
      {popShow ? <SubMenuOverlay /> : <></>}
    </>
  )
}

export default Navbar
