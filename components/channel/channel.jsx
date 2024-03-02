"use client"

import { Card, Tabs, ConfigProvider, Input } from "antd"

const { Search } = Input

function channel() {
  const onSearch = (value, _e, info) => console.log(info?.source, value)
  const shop = [1, 2, 3, 4]
  const items = [
    {
      key: "1",
      label: "授权零售店",
      children: (
        <div className="flex mt-[37px] justify-between">
          <div className="mr-[32px]">
            <Search
              size="large"
              onSearch={onSearch}
              placeholder="搜索店铺"
              style={{ width: 300 }}
            />
          </div>
          <div className="flex flex-wrap justify-between">
            {shop.map((k, index) => (
              <div className=" cursor-pointer w-[336px] h-[204px] mb-[32px] rounded-2xl bg-[#F7F7F8] flex flex-col justify-center items-center">
                <div className="text-[#121217] text-[16px] font-bold">
                  iGPSPORT中国大陆售后服务中心
                </div>
                <div className="mt-[32px] text-center opacity-[0.5]">
                  <div>区域：中国-武汉</div>
                  <div>联系方式：400-800-8888</div>
                  <div>地址：湖北省武汉市洪山区野芷湖西路16号</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "在线购买",
      children: "Content of Tab Pane 2",
    },
  ]
  const onChange = (key) => {
    console.log(key)
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            titleFontSizeLG: "18px",
            horizontalItemGutter: 60,
          },
        },
      }}
    >
      <Card className="w-full">
        <Tabs
          size="large"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </Card>
    </ConfigProvider>
  )
}

export default channel
