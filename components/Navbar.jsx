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
import { useRouter, usePathname } from "next/navigation"
import { useScrollExcess } from "@/hooks/useScroll"
import { useTriggerStore } from "@/store/trigger"

const Navbar = ({ bg = "#fff", color = "#121217", type = "" }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useTranslation()
  const [popShow, setPopShow] = useState(false)
  const [popShow2, setPopShow2] = useState(false)
  const [popShow3, setPopShow3] = useState(false)
  const [popShow4, setPopShow4] = useState(false)
  const [customBg, setCustomBg] = useState("#fff")
  const [customColor, setCustomColor] = useState("#121217")

  const [scrollBegin, setScrollBegin] = useScrollExcess(false, 50)
  const { trigger, setTrigger } = useTriggerStore()

  useEffect(() => {
    if (scrollBegin) {
      setCustomBg("#fff")
      setCustomColor("#121217")
    } else {
      if (
        (pathname.includes("enterprise") ||
          pathname.includes("aftersales") ||
          pathname.includes("cooperation")) &&
        (popShow || popShow2 || popShow3 || popShow4)
      ) {
        setCustomBg("#fff")
        setCustomColor("#121217")
      } else {
        if (window.scrollY > 50) {
          setCustomBg("#fff")
          setCustomColor("#121217")
        } else {
          setCustomBg(bg)
          setCustomColor(color)
        }
      }
    }
  }, [scrollBegin, pathname, popShow, popShow2, popShow3, popShow4])

  const hideAll = () => {
    setPopShow(false)
    setPopShow2(false)
    setPopShow3(false)
    setPopShow4(false)
  }

  const popoverChange = (val, type) => {
    switch (type) {
      case "flagship_products":
        setPopShow(val)
        break
      case "enterprise_introduction":
        setPopShow2(val)
        break
      case "aftersales_section":
        setPopShow3(val)
        break
      case "business_cooperation":
        setPopShow4(val)
        break
      default:
        break
    }
  }
  const mouseMove = (val) => {
    setTrigger("hover")
  }

  return (
    <>
      <header
        style={{
          backgroundColor: customBg,
          color: customColor,
        }}
        className="fixed top-0 translate-x-[-50%] left-[50%]  w-full z-30 transition-all ease-in-out duration-100"
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
              className="group relative regular-14  flexCenter cursor-pointer"
            >
              <ConfigProvider
                theme={{
                  token: { motion: false },
                }}
              >
                <Popover
                  open={popShow}
                  trigger={trigger}
                  onOpenChange={(val) =>
                    popoverChange(val, "flagship_products")
                  }
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
                    onMouseEnter={mouseMove}
                    onMouseLeave={mouseMove}
                    onClick={() => {
                      setTrigger("click")
                      router.push("/standard")
                    }}
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
              className="group relative regular-14  flexCenter cursor-pointer"
            >
              <ConfigProvider
                theme={{
                  token: { motion: false },
                }}
              >
                <Popover
                  open={popShow2}
                  trigger={trigger}
                  onOpenChange={(val) =>
                    popoverChange(val, "enterprise_introduction")
                  }
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
                    onMouseEnter={mouseMove}
                    onMouseLeave={mouseMove}
                    onClick={() => {
                      setTrigger("click")
                      router.push("/enterprise")
                    }}
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
              className="group relative regular-14  flexCenter cursor-pointer"
            >
              <ConfigProvider
                theme={{
                  token: { motion: false },
                }}
              >
                <Popover
                  open={popShow3}
                  trigger={trigger}
                  onOpenChange={(val) =>
                    popoverChange(val, "aftersales_section")
                  }
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
                    onMouseEnter={mouseMove}
                    onMouseLeave={mouseMove}
                    onClick={() => {
                      setTrigger("click")
                      router.push("/aftersales")
                    }}
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
              className="group relative regular-14  flexCenter cursor-pointer"
            >
              <ConfigProvider
                theme={{
                  token: { motion: false },
                }}
              >
                <Popover
                  open={popShow4}
                  trigger={trigger}
                  onOpenChange={(val) =>
                    popoverChange(val, "business_cooperation")
                  }
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
                    onMouseEnter={mouseMove}
                    onMouseLeave={mouseMove}
                    onClick={() => {
                      setTrigger("click")
                      router.push("/cooperation")
                    }}
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
