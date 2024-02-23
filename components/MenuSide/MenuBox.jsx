function MenuBox({ width }) {
  return (
    <div
      style={{
        width: width,
        height: "100vh",
      }}
      className={`bg-white absolute md:top-[64px] sm:top-[49px] right-[0] overflow-hidden box-border transition-all duration-300 ease-in-out border-l border-t`}
    >
      MenuBox
    </div>
  )
}

export default MenuBox
