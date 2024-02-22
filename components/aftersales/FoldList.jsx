"use client"

import { useState } from "react"
import { PlusOutlined } from "@ant-design/icons"
import Image from "next/image"
function FoldList() {
  const [extKey, setExtKey] = useState("")
  const foldExtra = (type) => {
    if (extKey === "") {
      setExtKey(type)
    } else {
      if (extKey === type) {
        setExtKey("")
      } else {
        setExtKey(type)
      }
    }
  }
  return (
    <>
      <div className="p-[30px] bg-white rounded-2xl mt-[32px]">
        <div>
            <div className="text-center text-[30px] font-bold ">售后服务政策</div>
            <div className="py-[20px] lg:text-[16px] text-[14px]">武汉齐物科技有限公司(以下简称iGPSPORT)遵照中华人民共和国相关法规及相关行政规定，为指定渠道所销售的产品提供保修服务。产品主机自购入起一年、其他配件自购入起三个月，在正常使用的情况下发生故障可享受保修服务。</div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => foldExtra("shuoming")}>
                <div className="flex font-bold space-x-2 py-[15px]">
                    <div className="text-[#FF4B27]">o1</div>
                    <div>说明</div>
                </div>
                <PlusOutlined
                 style={{color:'#ff4b2f'}}
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    extKey === "shuoming" ? "rotate-45" : ""
                  } hover:rotate-180 transition-all`}
                />
            </div>
            <div className={`${
              extKey === "shuoming" ? "min-h-[100px]" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out border-b pb-[10px] `}>
                <ul className="leading-[22px] text-[14px] space-y-[5px] mt-[10px]" style={{ color: 'rgba(18,18,23,0.5)'}}>
                    <li>1. 消费者如有保修服务需求时，需提供购买发票或凭证。</li>
                    <li>2. 通过拍卖网站、二手市场（如闲鱼）或其他非指定渠道（如个人微店等）购买的产品，不属于本保修服务所涵盖的范围。消费者如欲享受保修服务，需提供相应渠道的购买凭证。</li> 
                    <li>3. 对违反任何国家法律而取得、使用的产品或者服务，iGPSPORT保留拒绝保修申请的权利。 </li>
                    <li>4. iGPSPORT产品不用于精密测量。针对预装地图的产品，iGPSPORT对产品内预装地图数据的准确性或完整性不予任何保证。</li>
                    <li>5. iGPSPORT保留维修/更换主机或软件的权利。iGPSPORT将依标准流程使用原厂零件进行维修；遇到无法维修的情况，部分产品采用模块更换或整机更换方式维修。若遇维修料件短缺或产品停产时，保修期内将依照该产品折旧后提供等值的相同产品更换，或经消费者同意后提供升级并酌收价差；保修期外，则不提供维修服务。</li>
                </ul>
            </div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => foldExtra("fbxfw")}>
                <div className="flex font-bold space-x-2 py-[15px]">
                    <div className="text-[#FF4B27]">o2</div>
                    <div>非保修范围</div>
                </div>
                <PlusOutlined
                 style={{color:'#ff4b2f'}}
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    extKey === "fbxfw" ? "rotate-45" : ""
                  } hover:rotate-180 transition-all`}
                />
            </div>
            <div className={`${
              extKey === "fbxfw" ? "min-h-[100px]" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out border-b pb-[10px] `}>
                <ul className="leading-[22px] text-[14px] space-y-[5px] mt-[10px]" style={{ color: 'rgba(18,18,23,0.5)'}}>
                    <li>1. 消费者如有保修服务需求时，需提供购买发票或凭证。</li>
                    <li>2. 通过拍卖网站、二手市场（如闲鱼）或其他非指定渠道（如个人微店等）购买的产品，不属于本保修服务所涵盖的范围。消费者如欲享受保修服务，需提供相应渠道的购买凭证。</li> 
                    <li>3. 对违反任何国家法律而取得、使用的产品或者服务，iGPSPORT保留拒绝保修申请的权利。 </li>
                    <li>4. iGPSPORT产品不用于精密测量。针对预装地图的产品，iGPSPORT对产品内预装地图数据的准确性或完整性不予任何保证。</li>
                    <li>5. iGPSPORT保留维修/更换主机或软件的权利。iGPSPORT将依标准流程使用原厂零件进行维修；遇到无法维修的情况，部分产品采用模块更换或整机更换方式维修。若遇维修料件短缺或产品停产时，保修期内将依照该产品折旧后提供等值的相同产品更换，或经消费者同意后提供升级并酌收价差；保修期外，则不提供维修服务。</li>
                </ul>
            </div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => foldExtra("zysx")}>
                <div className="flex font-bold space-x-2 py-[15px]">
                    <div className="text-[#FF4B27]">o3</div>
                    <div>注意事项</div>
                </div>
                <PlusOutlined
                 style={{color:'#ff4b2f'}}
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    extKey === "zysx" ? "rotate-45" : ""
                  } hover:rotate-180 transition-all`}
                />
            </div>
            <div className={`${
              extKey === "zysx" ? "min-h-[100px]" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out border-b pb-[10px] `}>
                <ul className="leading-[22px] text-[14px] space-y-[5px] mt-[10px]" style={{ color: 'rgba(18,18,23,0.5)'}}>
                    <li>1. 消费者如有保修服务需求时，需提供购买发票或凭证。</li>
                    <li>2. 通过拍卖网站、二手市场（如闲鱼）或其他非指定渠道（如个人微店等）购买的产品，不属于本保修服务所涵盖的范围。消费者如欲享受保修服务，需提供相应渠道的购买凭证。</li> 
                    <li>3. 对违反任何国家法律而取得、使用的产品或者服务，iGPSPORT保留拒绝保修申请的权利。 </li>
                    <li>4. iGPSPORT产品不用于精密测量。针对预装地图的产品，iGPSPORT对产品内预装地图数据的准确性或完整性不予任何保证。</li>
                    <li>5. iGPSPORT保留维修/更换主机或软件的权利。iGPSPORT将依标准流程使用原厂零件进行维修；遇到无法维修的情况，部分产品采用模块更换或整机更换方式维修。若遇维修料件短缺或产品停产时，保修期内将依照该产品折旧后提供等值的相同产品更换，或经消费者同意后提供升级并酌收价差；保修期外，则不提供维修服务。</li>
                </ul>
            </div>
        </div>
        <div>
            <div className="text-center text-[30px] lg:py-[40px] py-[20px] font-bold ">售后服务流程</div>
            <div className="py-[20px] lg:text-[16px] text-[14px]">武汉齐物科技有限公司(以下简称iGPSPORT)遵照中华人民共和国相关法规及相关行政规定，为指定渠道所销售的产品提供保修服务。产品主机自购入起一年、其他配件自购入起三个月，在正常使用的情况下发生故障可享受保修服务。</div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => foldExtra("tjsq")}>
                <div className="flex font-bold space-x-2 py-[15px]">
                    <div className="text-[#FF4B27]">o1</div>
                    <div>提交申请</div>
                </div>
                <PlusOutlined
                 style={{color:'#ff4b2f'}}
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    extKey === "tjsq" ? "rotate-45" : ""
                  } hover:rotate-180 transition-all`}
                />
            </div>
            <div className={`${
              extKey === "tjsq" ? "min-h-[100px]" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out border-b pb-[10px] `}>
                <ul className="leading-[22px] text-[14px] space-y-[5px] mt-[10px]" style={{ color: 'rgba(18,18,23,0.5)'}}>
                    <li>1. 消费者如有保修服务需求时，需提供购买发票或凭证。</li>
                    <li>2. 通过拍卖网站、二手市场（如闲鱼）或其他非指定渠道（如个人微店等）购买的产品，不属于本保修服务所涵盖的范围。消费者如欲享受保修服务，需提供相应渠道的购买凭证。</li> 
                </ul>
            </div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => foldExtra("jccp")}>
                <div className="flex font-bold space-x-2 py-[15px]">
                    <div className="text-[#FF4B27]">o2</div>
                    <div>寄出产品</div>
                </div>
                <PlusOutlined
                 style={{color:'#ff4b2f'}}
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    extKey === "jccp" ? "rotate-45" : ""
                  } hover:rotate-180 transition-all`}
                />
            </div>
            <div className={`${
              extKey === "jccp" ? "min-h-[100px]" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out border-b pb-[10px] `}>
                <ul className="leading-[22px] text-[14px] space-y-[5px] mt-[10px]" style={{ color: 'rgba(18,18,23,0.5)'}}>
                    <li>1. 消费者如有保修服务需求时，需提供购买发票或凭证。</li>
                    <li>2. 通过拍卖网站、二手市场（如闲鱼）或其他非指定渠道（如个人微店等）购买的产品，不属于本保修服务所涵盖的范围。消费者如欲享受保修服务，需提供相应渠道的购买凭证。</li> 
                </ul>
            </div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => foldExtra("shwx")}>
                <div className="flex font-bold space-x-2 py-[15px]">
                    <div className="text-[#FF4B27]">o3</div>
                    <div>售后维修</div>
                </div>
                <PlusOutlined
                 style={{color:'#ff4b2f'}}
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    extKey === "shwx" ? "rotate-45" : ""
                  } hover:rotate-180 transition-all`}
                />
            </div>
            <div className={`${
              extKey === "shwx" ? "min-h-[100px]" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out border-b pb-[10px] `}>
                <ul className="leading-[22px] text-[14px] space-y-[5px] mt-[10px]" style={{ color: 'rgba(18,18,23,0.5)'}}>
                    <li>1. 消费者如有保修服务需求时，需提供购买发票或凭证。</li>
                    <li>2. 通过拍卖网站、二手市场（如闲鱼）或其他非指定渠道（如个人微店等）购买的产品，不属于本保修服务所涵盖的范围。消费者如欲享受保修服务，需提供相应渠道的购买凭证。</li> 
                </ul>
            </div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => foldExtra("jhcp")}>
                <div className="flex font-bold space-x-2 py-[15px]">
                    <div className="text-[#FF4B27]">o4</div>
                    <div>寄回产品</div>
                </div>
                <PlusOutlined
                 style={{color:'#ff4b2f'}}
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    extKey === "jhcp" ? "rotate-45" : ""
                  } hover:rotate-180 transition-all`}
                />
            </div>
            <div className={`${
              extKey === "jhcp" ? "min-h-[100px]" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out border-b pb-[10px] `}>
                <ul className="leading-[22px] text-[14px] space-y-[5px] mt-[10px]" style={{ color: 'rgba(18,18,23,0.5)'}}>
                    <li>1. 消费者如有保修服务需求时，需提供购买发票或凭证。</li>
                    <li>2. 通过拍卖网站、二手市场（如闲鱼）或其他非指定渠道（如个人微店等）购买的产品，不属于本保修服务所涵盖的范围。消费者如欲享受保修服务，需提供相应渠道的购买凭证。</li> 
                </ul>
            </div>
        </div>
        <div>
            <div className="text-center text-[30px] lg:py-[40px] py-[20px] font-bold ">期限表</div>
            <div className="py-[20px] lg:text-[16px] text-[14px]">武汉齐物科技有限公司(以下简称iGPSPORT)遵照中华人民共和国相关法规及相关行政规定，为指定渠道所销售的产品提供保修服务。产品主机自购入起一年、其他配件自购入起三个月，在正常使用的情况下发生故障可享受保修服务。</div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => foldExtra("bjbxqxb")}>
                <div className="flex font-bold space-x-2 py-[15px]">
                    <div className="text-[#FF4B27]">o1</div>
                    <div>部件保险期限表</div>
                </div>
                <PlusOutlined
                 style={{color:'#ff4b2f'}}
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    extKey === "bjbxqxb" ? "rotate-45" : ""
                  } hover:rotate-180 transition-all`}
                />
            </div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => foldExtra("bjwxqxb")}>
                <div className="flex font-bold space-x-2 py-[15px]">
                    <div className="text-[#FF4B27]">o2</div>
                    <div>部件保修期限表</div>
                </div>
                <PlusOutlined
                 style={{color:'#ff4b2f'}}
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    extKey === "bjwxqxb" ? "rotate-45" : ""
                  } hover:rotate-180 transition-all`}
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default FoldList
