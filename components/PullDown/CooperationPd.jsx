import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

function CooperationPd() {
  const router = useRouter()
  return (
    <div className="w-full h-full box-border">
      <div className="media-container mx-auto flex  pt-[15px]">
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
            <li
              className="cursor-pointer"
              onClick={() => router.push("/brand")}
            >
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
            <div
              onClick={() => router.push("/brand")}
              className="text-[12px] cursor-pointer"
            >
              查看更多 →
            </div>
          </div>
          <div className="grid grid-cols-3 pt-[20px] gap-[20px]">
            <div
              onClick={() => router.push(`/article/${1}`)}
              className="space-y-[5px] cursor-pointer"
            >
              <Image
                src="/swhz-5.png"
                width={240}
                height={150}
                style={{ width: "240px", height: "150px" }}
                alt=""
              ></Image>
              <div className="text-[#121217] opacity-[0.5]">文章</div>
              <div>iGPSPORT中文品牌“迹驰”发布</div>
            </div>
            <div
              onClick={() => router.push(`/article/${1}`)}
              className="space-y-[5px] cursor-pointer"
            >
              <Image
                src="/swhz-3.png"
                width={240}
                height={150}
                style={{ width: "240px", height: "150px" }}
                alt=""
              ></Image>
              <div className="text-[#121217] opacity-[0.5]">文章</div>
              <div>iGPSPORT中文品牌“迹驰”发布</div>
            </div>
            <div
              onClick={() => router.push(`/article/${1}`)}
              className="space-y-[5px] cursor-pointer"
            >
              <Image
                src="/swhz-4.png"
                width={240}
                height={150}
                style={{ width: "240px", height: "150px" }}
                alt=""
              ></Image>
              <div className="text-[#121217] opacity-[0.5]">文章</div>
              <div>iGPSPORT中文品牌“迹驰”发布</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CooperationPd
