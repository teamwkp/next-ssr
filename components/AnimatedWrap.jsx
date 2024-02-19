"use client"

import { Fade, Slide, Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

function AnimatedWrap({ type = "", children }) {
  switch (type) {
    case "fade":
      return <Fade>{children}</Fade>
      break
    case "slide":
      return <Slide>{children}</Slide>
      break
    case "reveal":
      const customAnimation = keyframes`
        from {
          opacity: 0;
          transform: translate3d(-200px, -100px, 0);
        }
      
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      `
      return <Reveal keyframes={customAnimation}>{children}</Reveal>
      break
    default:
      return { children }
      break
  }
}

export default AnimatedWrap
