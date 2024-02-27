"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBagIcon, Bars3Icon } from "@heroicons/react/24/outline"
import { useTranslation } from "react-i18next"
import LanguageChanger from "./LanguageChanger"
import { Button, Popover, ConfigProvider } from "antd"
import { ShoppingOutlined } from "@ant-design/icons"
import styles from "./Navbar.module.scss"
import SubMenuOverlay from "@/components/SubMenuOverlay"
import { useEffect, useState } from "react"
import MenuSide from "./MenuSide"
import Flagship from "./PullDown/FlagshipPd"
import AfterSalesPd from "./PullDown/AfterSalesPd"
import CooperationPd from "./PullDown/CooperationPd"
import CompanyPd from "./PullDown/CompanyPd"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const [popShow, setPopShow] = useState(false)
  const [popShow2, setPopShow2] = useState(false)
  const [popShow3, setPopShow3] = useState(false)
  const [popShow4, setPopShow4] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      hideAll()
    }, 0)
  }, [router])

  const hideAll = () => {
    setPopShow(false)
    setPopShow2(false)
    setPopShow3(false)
    setPopShow4(false)
  }

  const popoverChange = (val) => {
    setPopShow(val)
  }
  const popoverChange2 = (val) => {
    setPopShow2(val)
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
          <div className="hidden h-full lg:flex">
            <div
              key={"flagship_products"}
              className="group relative regular-14 text-gray-50 flexCenter cursor-pointer"
            >
              <ConfigProvider
                theme={{
                  token: { motion: false },
                }}
              >
                <Popover
                  open={popShow}
                  onOpenChange={popoverChange}
                  overlayClassName="shadow-none"
                  mouseEnterDelay={0}
                  overlayStyle={{
                    position: "fixed",
                    left: 0,
                    right: 0,
                    top: "64px",
                    height: "668px",
                    background: "#fff",
                    borderTop: "1px solid #eee",
                  }}
                  overlayInnerStyle={{
                    boxShadow: "none",
                    height: "100%",
                  }}
                  arrow={false}
                  content={Flagship}
                >
                  <div
                    onClick={() => router.push("/standard")}
                    className="w-full h-full flexCenter px-5 box-border"
                  >
                    <span>{t("flagship_products")}</span>
                    <div
                      className={`absolute w-0 h-[2px] bg-[#FF4B27] transition-all left-[50%] translate-x-[-50%] bottom-0 group-hover:w-[60%] ${
                        popShow ? "w-[60%]" : ""
                      }`}
                    ></div>
                  </div>
                </Popover>
              </ConfigProvider>
            </div>
            <div
              key={"enterprise_introduction"}
              className="group relative regular-14 text-gray-50 flexCenter cursor-pointer"
            >
              <ConfigProvider
                theme={{
                  token: { motion: false },
                }}
              >
                <Popover
                  open={popShow2}
                  onOpenChange={popoverChange2}
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
                  overlayInnerStyle={{
                    boxShadow: "none",
                    height: "100%",
                  }}
                  arrow={false}
                  content={CompanyPd}
                >
                  <div
                    onClick={() => router.push("/enterprise")}
                    className="w-full h-full flexCenter px-5 box-border"
                  >
                    <span>{t("enterprise_introduction")}</span>
                    <div
                      className={`absolute w-0 h-[2px] bg-[#FF4B27] transition-all left-[50%] translate-x-[-50%] bottom-0 group-hover:w-[60%] ${
                        popShow2 ? "w-[60%]" : ""
                      }`}
                    ></div>
                  </div>
                </Popover>
              </ConfigProvider>
            </div>
            <div
              key={"aftersales_section"}
              className="group relative regular-14 text-gray-50 flexCenter cursor-pointer"
            >
              <ConfigProvider
                theme={{
                  token: { motion: false },
                }}
              >
                <Popover
                  open={popShow3}
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
                  content={AfterSalesPd}
                >
                  <div
                    onClick={() => router.push("/aftersales")}
                    className="w-full h-full flexCenter px-5 box-border"
                  >
                    <span>{t("aftersales_section")}</span>
                    <div
                      className={`absolute w-0 h-[2px] bg-[#FF4B27] transition-all left-[50%] translate-x-[-50%] bottom-0 group-hover:w-[60%] ${
                        popShow3 ? "w-[60%]" : ""
                      }`}
                    ></div>
                  </div>
                </Popover>
              </ConfigProvider>
            </div>
            <div
              key={"business_cooperation"}
              className="group relative regular-14 text-gray-50 flexCenter cursor-pointer"
            >
              <ConfigProvider
                theme={{
                  token: { motion: false },
                }}
              >
                <Popover
                  open={popShow4}
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
                  content={CooperationPd}
                >
                  <div
                    onClick={() => router.push("/cooperation")}
                    className="w-full h-full flexCenter px-5 box-border"
                  >
                    <span>{t("business_cooperation")}</span>
                    <div
                      className={`absolute w-0 h-[2px] bg-[#FF4B27] transition-all left-[50%] translate-x-[-50%] bottom-0 group-hover:w-[60%] ${
                        popShow4 ? "w-[60%]" : ""
                      }`}
                    ></div>
                  </div>
                </Popover>
              </ConfigProvider>
            </div>
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
      {popShow || popShow2 || popShow4 || popShow3 ? <SubMenuOverlay /> : <></>}
    </>
  )
}

export default Navbar
