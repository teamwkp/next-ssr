// 旗舰产品下拉组件
import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

const StyleWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 48px;
  box-sizing: border-box;
  .productBox {
    width: 100%;
  }
  .productItem {
    width: 160px;
    height: 160px;
    background-color: #f3f4f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }
`

function Flagship() {
  return (
    <StyleWrap>
      <div className="w-full h-full box-border">
        <div className="media-container mx-auto flex flex-col">
          <div className="top w-full flex justify-between items-center mb-[40px]">
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]">
                码表
              </div>
              <div className="productItem">
                <div className="text-[#D1D1DB] text-[16px] text-center">
                  敬请期待
                </div>
              </div>
            </div>
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]"></div>
              <div className="productItem">
                <Image src={"/f1.png"} width={100} height={100} alt="" />
                <div>iGS630</div>
              </div>
            </div>
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]"></div>
              <div className="productItem">
                <Image src={"/f2.png"} width={100} height={100} alt="" />
                <div>BSC300</div>
              </div>
            </div>
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]">
                前灯
              </div>
              <div className="productItem">
                <Image src={"/f3.png"} width={100} height={100} alt="" />
                <div>VS1200</div>
              </div>
            </div>
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]">
                尾灯
              </div>
              <div className="productItem">
                <Image src={"/f4.png"} width={100} height={100} alt="" />
                <div>SR30</div>
              </div>
            </div>
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]"></div>
              <div className="productItem">
                <Image src={"/f5.png"} width={100} height={100} alt="" />
                <div>TL30</div>
              </div>
            </div>
          </div>
          <div className="center  w-full flex justify-between items-center">
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]">
                手表
              </div>
              <div className="productItem">
                <Image src={"/f6.png"} width={100} height={100} alt="" />
                <div>LW10</div>
              </div>
            </div>
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]">
                传感器
              </div>
              <div className="productItem">
                <Image src={"/f7.png"} width={100} height={100} alt="" />
                <div>SPD70</div>
              </div>
            </div>
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]"></div>
              <div className="productItem">
                <Image src={"/f8.png"} width={100} height={100} alt="" />
                <div>CAD70</div>
              </div>
            </div>
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]">
                心率带
              </div>
              <div className="productItem">
                <Image src={"/f9.png"} width={100} height={100} alt="" />
                <div>HR70</div>
              </div>
            </div>
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]"></div>
              <div className="productItem">
                <Image src={"/f2.png"} width={100} height={100} alt="" />
                <div>HR40</div>
              </div>
            </div>
            <div>
              <div className="text-[20px] h-[25px] font-bold mb-[16px]"></div>
              <div
                className="productItem"
                style={{
                  background: "#fff",
                }}
              ></div>
            </div>
          </div>
          <div className="bottom mt-[48px] cursor-pointer text-[#121217] text-[14px]">
            更多产品
          </div>
        </div>
      </div>
    </StyleWrap>
  )
}

export default Flagship
