"use client"

import { ConfigProvider, Tabs } from "antd"
import { useEffect, useRef, useState } from "react"

function TimeLine() {
  const [timeLines, setTimeLines] = useState([
    {
      time: "2012.09",
      month: "09",
      year: "2012",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
    {
      time: "2013.01",
      month: "01",
      year: "2013",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
    {
      time: "2014.07",
      month: "07",
      year: "2014",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
    {
      time: "2016.05",
      month: "05",
      year: "2016",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
    {
      time: "2017.09",
      month: "09",
      year: "2017",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
    {
      time: "2020.09",
      month: "09",
      year: "2020",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
    {
      time: "2021.01",
      month: "01",
      year: "2021",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
    {
      time: "2022.03",
      month: "03",
      year: "2022",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
    {
      time: "2022.09",
      month: "09",
      year: "2022",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
    {
      time: "2022.12",
      month: "12",
      year: "2022",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
    {
      time: "2023.04",
      month: "04",
      year: "2023",
      title: "iGPSPORT品牌之路正式开启",
      subTitle:
        "武汉齐物科技有限公司于2012.9创立iGPSPORT品牌，正式开启了以自行车GPS码表为主要产品的品牌之路。",
    },
  ])
  const [activeKey, setActiveKey] = useState(String(timeLines.length))
  const lens = parseInt(timeLines.length)

  const tabClick = (key) => {
    setActiveKey(key)
  }

  const next = () => {
    if (parseInt(activeKey) >= lens) {
      setActiveKey("1")
    } else {
      setActiveKey(parseInt(activeKey) + 1 + "")
    }
  }
  const pre = () => {
    if (parseInt(activeKey) <= 1) {
      setActiveKey("1")
    } else {
      setActiveKey(parseInt(activeKey) - 1 + "")
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      next()
    }, 8000)
    return () => {
      clearInterval(timer)
    }
  }, [activeKey, timeLines])

  return (
    <div className="w-full h-[900px] bg-[#121217]">
      <div className="media-container mx-auto">
        <div className="w-[100%] h-full flex items-center justify-center flex-col">
          <div className="text-[36px] font-bold mt-[107px] text-[#fff] text-center">
            品牌历史
          </div>
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  titleFontSizeLG: "20px",
                  itemColor: "rgba(255,255,255,0.6)",
                  horizontalItemGutter: 60,
                },
              },
            }}
          >
            <Tabs
              activeKey={activeKey}
              size="large"
              tabPosition="top"
              onTabClick={tabClick}
              style={{
                width: "100%",
                height: 220,
              }}
              items={timeLines.map((k, i) => {
                const id = String(i + 1)
                return {
                  label: `${k.time}`,
                  key: id,
                  children: (
                    <>
                      <div className="text-[#fff] mt-[60px] h-[450px] flex items-center justify-between">
                        <div className="left w-[442px] h-full flex flex-col justify-between">
                          <div className="top align-bottom">
                            <span className="text-[48px] text-[#fff] font-bold">
                              {k.month}
                            </span>
                            <span className="text-[38px] font-light mx-2">
                              /
                            </span>
                            <span className="text-[24px] text-[#fff] font-bold">
                              {k.year}
                            </span>
                          </div>
                          <div className="center">
                            <div className="text-[30px]">{k.title}</div>
                            <div className="text-[18px] mt-[8px] text-[#fff] opacity-[0.6]">
                              {k.subTitle}
                            </div>
                          </div>
                          <div className="bottom w-[100px] flex items-center justify-between">
                            <img
                              onClick={pre}
                              className=" cursor-pointer"
                              width="40px"
                              height="40px"
                              src="/left-icon.png"
                              alt=""
                            />
                            <img
                              onClick={next}
                              className=" cursor-pointer"
                              width="40px"
                              height="40px"
                              src="/right-icon.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="right w-[443px]">
                          <img
                            width="100%"
                            height="auto"
                            src="/elps1.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </>
                  ),
                }
              })}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
