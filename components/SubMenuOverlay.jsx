"use client"

import sub from "./SubMenuOverlay.module.scss"

function SubMenuOverlay() {
  return (
    <div className={sub.overlay}>
      <div className={sub.subContainer}>
        <div className={sub.menuWrapper}></div>
      </div>
    </div>
  )
}

export default SubMenuOverlay
