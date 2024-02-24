import Link from "next/link"
import Image from "next/image"

function AfterSalesPd() {
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
  return (
    <div className="w-full h-full box-border">
      <div className="media-container mx-auto flex pt-[15px]">
        <div className="flex-1">
          <div className="font-bold text-[18px]">售后服务与支持</div>
          <div className="grid grid-cols-4 mt-[30px]">
            {saleList.map((item, index) => {
              return (
                <Link href={item.path} key={index}>
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
}

export default AfterSalesPd
