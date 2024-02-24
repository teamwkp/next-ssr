"use client"

import sub from "./SubMenuOverlay.module.scss"

function SubMenuOverlay({ top = "64px", hideEvens }) {
  return (
    <div
      onClick={() => hideEvens("hide")}
      className={sub.overlay}
      style={{
        top: top,
      }}
    ></div>
  )
}

export default SubMenuOverlay
