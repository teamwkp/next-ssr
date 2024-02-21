import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import BrandTrends from "@/components/cooperation/BrandTrends"
import initTranslations from "../../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import Image from "next/image"

const i18nNamespaces = ["default"]
const Home = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navbar />
      <div
        className="w-full bg-no-repeat"
        style={{
          backgroundColor: "#111",
          backgroundImage: "url('/swhz-bg.png')",
          backgroundSize: "100% auto",
        }}
      >
        <div className="">
          <div className="text-white w-[520px] mx-auto text-center pt-[280px] pb-[400px]">
            <div className="text-[52px] font-bold">品牌伙伴</div>
            <div
              className="text-[18px] mt-[20px] leading-[32px]"
              style={{ color: "rgba(255,255,255,0.71)" }}
            >
              坚持对科技创新的不断探索，并深度布局骑行运动市场，知名运动员、骑行达人及专业自行车队，共同研发骑行爱好者更喜爱的智能骑行产。
            </div>
          </div>
        </div>
        <div className="media-container mx-auto pb-20">
          <div className="py-[50px] text-white text-[36px]">合作车队</div>
          <div
            className="w-full h-[572px] rounded-2xl bg-no-repeat flex items-end"
            style={{
              backgroundImage: "url('/swhz-1.png')",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="p-[30px] text-white">
              <div className="text-[22px]">瑞豹车队（迹驰冠名车队）</div>
              <div
                className="text-[14px] line- mt-[15px] line-clamp-2"
                style={{ color: "rgba(255,255,255,0.71)" }}
              >
                迹驰-瑞豹车队是迹驰冠名车队，由知名车手孔文生组建的自行车竞技车队，车队集合了优秀的冲刺、起伏、耐力等多方面能力，是一支各方面力量均衡的实力车队。目前车队处于中国业余自行车队顶级行列，通过取得优异的比赛成绩助力迹驰在中国市场的品牌推广。
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[26px] mt-[40px]">
            <div
              className="h-[482px] rounded-2xl bg-no-repeat flex items-end"
              style={{
                backgroundImage: "url('/swhz-2.png')",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="p-[30px] text-white">
                <div className="text-[22px]">
                  巴斯克电信车队(Euskaltel – Euskadi)
                </div>
                <div
                  className="text-[14px] line- mt-[15px] line-clamp-2"
                  style={{ color: "rgba(255,255,255,0.71)" }}
                >
                  iGPSPORT将在2023赛季为巴斯克电信车队提供码表等器材赞助，iGPSPORT与巴斯克电信车队(Euskaltel
                  – Euskadi)携手登上世巡赛的舞台。
                </div>
              </div>
            </div>
            <div
              className="h-[482px] rounded-2xl bg-no-repeat flex items-end"
              style={{
                backgroundImage: "url('/swhz-3.png')",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="p-[30px] text-white">
                <div className="text-[22px] line-clamp-1">
                  爱三工业自行车队（爱三工业レーシングチーム）
                </div>
                <div
                  className="text-[14px] line- mt-[15px] line-clamp-2"
                  style={{ color: "rgba(255,255,255,0.71)" }}
                >
                  亚洲知名洲际车队，iGPSPORT为其官方码表合作伙伴，助力其2023赛季取得优异成绩。
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px] text-white text-[36px]">骑行达人</div>
          <div className="grid grid-cols-4 gap-[24px]">
            {Array.from({ length: 8 }).map((item, index) => {
              return (
                <div
                  className="h-[324px] rounded-2xl overflow-hidden"
                  style={{ background: "linear-gradient(#202020, #222222)" }}
                >
                  <div
                    className="h-[324px] bg-no-repeat flex items-end"
                    style={{
                      background: "url('/user-" + (index + 1) + ".png')",
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div className="text-white p-[30px]">
                      <div className="text-[22px]">孔文生</div>
                      <div
                        className="text-[14px] mt-[5px]"
                        style={{ color: "rgba(255,255,255,0.71)" }}
                      >
                        知名骑手
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="py-[50px] text-white text-[36px]">品牌动态</div>
          <BrandTrends></BrandTrends>
        </div>
      </div>

      <Footer />
    </TranslationsProvider>
  )
}

export default Home
