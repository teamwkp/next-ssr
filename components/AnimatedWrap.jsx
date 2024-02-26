"use client"

import { Fade, Slide, Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

function AnimatedWrap({
  type = "",
  delay = 0,
  children,
  duration = 1000,
  overlayClassName,
  fromAni = {},
  toAni = {},
}) {
  switch (type) {
    case "fade":
      return <Fade delay={delay}>{children}</Fade>
      break
    case "slide":
      return <Slide delay={delay}>{children}</Slide>
      break
    case "reveal":
      const reveal = keyframes`
        from {
          opacity: 0;
          transform: translateX(15px);
        }
        to {
          opacity: 1;
          transform: translateX(0px);
        }
      `
      return (
        <Reveal
          triggerOnce={true}
          className={overlayClassName}
          duration={duration}
          keyframes={reveal}
        >
          {children}
        </Reveal>
      )
      break
    case "move-left-1":
      const moveLeft1 = keyframes`
        from {
          opacity: 0;
          left: 50%;
        }
        to {
          opacity: 1;
          left: 30%;
        }
      `
      return (
        <Reveal
          triggerOnce={true}
          className={overlayClassName}
          duration={duration}
          keyframes={moveLeft1}
        >
          {children}
        </Reveal>
      )
      break
    case "move-left-2":
      const moveLeft2 = keyframes`
          from {
            opacity: 0;
            left: 50%;
          }
          to {
            opacity: 1;
            left: 20%;
          }
        `
      return (
        <Reveal
          triggerOnce={true}
          className={overlayClassName}
          duration={duration}
          keyframes={moveLeft2}
        >
          {children}
        </Reveal>
      )
      break
    case "move-right-1":
      const moveRight1 = keyframes`
          from {
            opacity: 0;
            right: 50%;
          }
          to {
            opacity: 1;
            right: 30%;
          }
        `
      return (
        <Reveal
          triggerOnce={true}
          className={overlayClassName}
          duration={duration}
          keyframes={moveRight1}
        >
          {children}
        </Reveal>
      )
      break
    case "move-right-2":
      const moveRight2 = keyframes`
            from {
              opacity: 0;
              right: 50%;
            }
            to {
              opacity: 1;
              right: 20%;
            }
          `
      return (
        <Reveal
          triggerOnce={true}
          className={overlayClassName}
          duration={duration}
          keyframes={moveRight2}
        >
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
