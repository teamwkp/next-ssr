"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBagIcon, Bars3Icon } from "@heroicons/react/24/outline"
import { useTranslation } from "react-i18next"
import LanguageChanger from "./LanguageChanger"
import { Button } from "antd"
import { ShoppingOutlined } from "@ant-design/icons"

const Navbar = () => {
  const { t } = useTranslation()
  return (
    <nav
      style={{
        transition: "top 0.3s",
      }}
      className="fixed top-0 flexBetween padding-container w-full z-30 h-[64px] bg-white"
    >
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
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="group relative regular-14 text-gray-50 flexCenter cursor-pointer"
          >
            {t(link.key)}
            <div className="absolute w-0 h-[2px] bg-[#262629] transition-all left-0 bottom-0 group-hover:w-full"></div>
          </Link>
        ))}
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
    </nav>
  )
}

export default Navbar
