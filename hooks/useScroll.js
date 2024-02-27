import { useState, useEffect } from "react"

// 距离顶部距离
export function useScrollTopDis(dis) {
  const [scrollTop, setScrollTop] = useState(dis)

  useEffect(() => {
    function handleScroll(e) {
      setScrollTop(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  })

  return [scrollTop, setScrollTop]
}

// 是否滚动超过某个值
export function useScrollExcess(status, dis = 0) {
  const [scrollBegin, setScrollBegin] = useState(status)

  useEffect(() => {
    function handleScroll(e) {
      if (window.scrollY > dis) {
        setScrollBegin(true)
      } else {
        setScrollBegin(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  })

  return [scrollBegin, setScrollBegin]
}
