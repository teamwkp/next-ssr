const Home = () => {
  return (
    <div className="media-container mx-auto">
      <div className="bg-[#F2F2FA] w-full mt-[100px] h-[200px] flex items-center rounded-2xl relative">
        <div className="left-[130px] w-1/3 absolute">
          <div className="text-3xl font-medium tracking-wider text-center mb-[25px]">
            精“彩”导航 智享骑行
          </div>
          <div className="sub-text text-center font-light text-sm leading-6">
            <div>专注于以自行车码表为代表的运动智能硬件</div>
            <div>让骑行变得更加轻松</div>
            <div>服务于全球超百万骑行运动爱好者</div>
          </div>
        </div>
        <div className="img"></div>
      </div>
      <div className="video-container"></div>
    </div>
  )
}

export default Home
