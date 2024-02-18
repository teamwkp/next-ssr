import fstyle from "./Footer.module.scss"
import { Input, Button } from "antd"

function Footer() {
  return (
    <footer className="w-full  bg-white box-border pt-[64px] pb-[40px]">
      <div className="max-container">
        <div className="footer-top w-full flex justify-between ">
          <div className="f-left flex justify-between w-[45%]">
            <div>
              <div className="text-[14px] font-bold mb-[10px]">旗舰产品</div>
              <div className="opacity-[0.75] text-[#0E0606]">
                <div className={fstyle.fw}>iGS630</div>
                <div className={fstyle.fw}>BSC300</div>
                <div className={fstyle.fw}>BSC200</div>
                <div className={fstyle.fw}>BSC100S</div>
                <div className={fstyle.fw}>HR70</div>
              </div>
            </div>
            <div>
              <div className=" text-[14px] font-bold mb-[10px]">品牌介绍</div>
              <div className="opacity-[0.75] text-[#0E0606]">
                <div className={fstyle.fw}>品牌简介</div>
                <div className={fstyle.fw}>品牌历史</div>
                <div className={fstyle.fw}>品牌伙伴</div>
                <div className={fstyle.fw}>品牌动态</div>
              </div>
            </div>
            <div>
              <div className=" text-[14px] font-bold mb-[10px]">服务与支持</div>
              <div className="opacity-[0.75] text-[#0E0606]">
                <div className={fstyle.fw}>产品支持</div>
                <div className={fstyle.fw}>售后服务</div>
                <div className={fstyle.fw}>商务合作</div>
              </div>
            </div>
            <div>
              <div className=" text-[14px] font-bold mb-[10px]">线上商城</div>
              <div className="opacity-[0.75] text-[#0E0606]">
                <div className={fstyle.fw}>天猫</div>
                <div className={fstyle.fw}>京东</div>
              </div>
            </div>
          </div>
          <div className="f-right">
            <div className="text-[14px] font-bold mb-[10px]">
              订阅我们的邮件以获取最新消息
            </div>
            <div className="text-[14px] text-[#0E0606] opacity-[0.75]">
              及时获得iGPSPORT的最新新闻，相关产品资讯
            </div>
            <div className="flex items-center mt-5">
              <Input
                placeholder="请输入您的邮箱"
                suffix={<Button type="primary">订阅</Button>}
              />
            </div>
            <div className="flex items-center mt-[12px]">
              <div className="text-[#0E0606] text-[12px] font-bold mr-[16px] cursor-pointer">
                @iGPSPORT
              </div>
              <img
                className="w-[36px] cursor-pointer"
                src="/image_39.png"
                alt=""
              />
              <img
                className="w-[36px] mx-[16px] cursor-pointer"
                src="/image_41.png"
                alt=""
              />
              <img
                className="w-[36px] cursor-pointer"
                src="/image_40.png"
                alt=""
              />
            </div>
            <div className="flex mt-2">
              <div className="text-[12px] text-[#0E0606] opacity-[0.75] mr-[16px]">
                <div className="leading-[30px]">微信公众号</div>
                <img src="/image_37.png" alt="" />
              </div>
              <div className="text-[12px] text-[#0E0606] opacity-[0.75]">
                <div className="leading-[30px]">迹驰社群</div>
                <img src="/image_38.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={fstyle.footerBottom}>
          <div className={fstyle.copyright}>
            Copyright © 2024 iGPSPORT | 鄂ICP备13000514号-2
          </div>
          <div className={fstyle.copyright}>用户使用条款 | 隐私政策</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
