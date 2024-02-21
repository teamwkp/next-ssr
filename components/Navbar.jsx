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
import { useHover } from "@uidotdev/usehooks"
import SubMenuOverlay from "@/components/SubMenuOverlay"
import { useState } from "react"

const Navbar = () => {
  const { t } = useTranslation()
  const [flagship, flagshipHovering] = useHover()
  const [popShow, setPopShow] = useState(false)
  const content = (
    <div className="w-full h-full box-border">
      <p>Content</p>
      <p>Content</p>
    </div>
  )
  const popoverChange = (val) => {
    console.log(val)
    setPopShow(val)
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
                overlayStyle={{
                  position: "fixed",
                  left: 0,
                  right: 0,
                  top: "64px",
                  bottom: 0,
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
              <div className="w-full h-full flexCenter">
                <span>{t("aftersales_section")}</span>
                <div className="absolute w-0 h-[2px] bg-[#262629] transition-all left-0 bottom-0 group-hover:w-full"></div>
              </div>
            </Link>
            <Link
              href={"/cooperation"}
              key={"business_cooperation"}
              className="group relative regular-14 text-gray-50 flexCenter cursor-pointer"
            >
              <div className="w-full h-full flexCenter">
                <span>{t("business_cooperation")}</span>
                <div className="absolute w-0 h-[2px] bg-[#262629] transition-all left-0 bottom-0 group-hover:w-full"></div>
              </div>
            </Link>
          </div>

          <div className="lg:flexCenter hidden">
            <Button type="primary" className="mr-5" icon={<ShoppingOutlined />}>
              {t("shopping_centre")}
            </Button>
            <LanguageChanger />
          </div>
          <Bars3Icon
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        </div>
      </header>
      {flagshipHovering ? <SubMenuOverlay /> : <></>}
    </>
  )
}

export default Navbar
