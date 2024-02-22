"use client"

import { Fade, Slide, Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

function AnimatedWrap({ type = "", delay = 0, children }) {
  switch (type) {
    case "fade":
      return <Fade delay={delay}>{children}</Fade>
      break
    case "slide":
      return <Slide delay={delay}>{children}</Slide>
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
      return (
        <Reveal delay={delay} keyframes={customAnimation}>
          {children}
        </Reveal>
      )
      break
    case "reveal-fadeInUp":
      const fadeInUp = keyframes`
      0% {
        opacity: 0;
        -webkit-transform: translateY(40px);
        transform: translateY(40px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }`
      return (
        <Reveal delay={delay} keyframes={fadeInUp}>
          {children}
        </Reveal>
      )

    default:
      return { children }
      break
  }
}

export default AnimatedWrap
