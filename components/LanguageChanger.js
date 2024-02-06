import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import i18nConfig from "@/i18nConfig"
import { Button, Dropdown } from "antd"
import Image from "next/image"

// Todo: 需要精简一下逻辑
export default function LanguageChanger() {
  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const currentPathname = usePathname()
  const router = useRouter()

  const onClick = ({ key }) => {
    const newLocale = key
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = date.toUTCString()
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }

    router.refresh()
  }

  const items = [
    {
      key: "zh",
      label: (
        <div className="flex items-center text-[12px]">
          <Image
            className="w-[16px] h-[16px] cursor-pointer mr-2"
            src="/zh_cn.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="zh_cn"
          />
          <div>简体中文</div>
        </div>
      ),
    },
    {
      key: "en",
      label: (
        <div className="flex items-center text-[12px]">
          <Image
            className="w-[16px] h-[16px] cursor-pointer mr-2"
            src="/en_us.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="en_us"
          />
          <div>English</div>
        </div>
      ),
    },
    {
      key: "de",
      label: (
        <div className="flex items-center text-[12px]">
          <Image
            className="w-[16px] h-[16px] cursor-pointer mr-2"
            src="/de_de.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="deutsch"
          />
          <div>Deutsch</div>
        </div>
      ),
    },
  ]

  const currentLanguage = () => {
    switch (currentLocale) {
      case "zh":
        return (
          <Image
            className="w-[16px] h-[16px] cursor-pointer mr-2"
            src="/zh_cn.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="zh_cn"
          />
        )
        break
      case "en":
        return (
          <Image
            className="w-[16px] h-[16px] cursor-pointer mr-2"
            src="/en_us.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="en_us"
          />
        )
        break
      case "de":
        return (
          <Image
            className="w-[16px] h-[16px] cursor-pointer mr-2"
            src="/de_de.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="deutsch"
          />
        )
        break
      default:
        break
    }
  }

  return (
    <>
      <Dropdown
        menu={{ items, onClick }}
        placement="bottomLeft"
        arrow={{ pointAtCenter: true }}
      >
        {currentLanguage()}
      </Dropdown>
    </>
  )
}
