import Image from "next/image"

function CompanyPd() {
  return (
    <div className="w-full h-full box-border">
      <div className="media-container mx-auto flex justify-around  pt-[15px]">
        <div className="w-[250px]">
          <div className="font-bold text-[18px] pl-[10px]">企业介绍</div>
          <ul className="mt-[10px] space-y-[20px]">
            <li className="hover:bg-[#F3F4F8] p-[10px]">
              <div className="text-[14px] font-bold">品牌简介</div>
              <div className="text-[#121217] opacity-[0.5]">
              中国深具创新力的自行车GPS码表品牌
              </div>
            </li>
            <li className="hover:bg-[#F3F4F8] p-[10px]">
              <div className="text-[14px] font-bold">品牌历史</div>
              <div className="text-[#121217] opacity-[0.5]">
              十余年专注自行车GPS码表的创新
              </div>
            </li>
            <li className="hover:bg-[#F3F4F8] p-[10px]">
              <div className="text-[14px] font-bold">品牌伙伴</div>
              <div className="text-[#121217] opacity-[0.5]">
              研发骑行爱好者更喜爱的智能骑行产品
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-[35px]">
          <Image src="/qyjs-pic.png" width={364} height={224} style={{width: '364px', height: '224px'}} alt=""></Image>
        </div>
        <div>
          <div className="flex font-bold text-[18px]">
            联系我们
          </div>
          <ul className="space-y-[10px] mt-[10px]">
            <li>电话：400-800-8888</li>
            <li>邮箱：china@igpsport.com</li>
            <li>地址：湖北省武汉市洪山区野芷湖西路16号</li>
          </ul>
          <div className="flex font-bold text-[18px] mt-[30px]">
            浏览全部商品
          </div>
          <ul className="space-y-[15px] mt-[15px]">
            <li className="flex items-center cursor-pointer">
              <div className="mr-[4px]">iGPSPORT官方天猫店</div>
              <Image src="/qyjs-rit.png" width={14} height={14} style={{ marginTop: '4px'}} alt=""></Image>
            </li>
            <li className="flex items-center cursor-pointer">
              <div className="mr-[4px]">iGPSPORT官方天猫店</div>
              <Image src="/qyjs-rit.png" width={14} height={14} style={{ marginTop: '4px'}} alt=""></Image>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CompanyPd
