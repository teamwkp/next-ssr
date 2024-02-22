import { MenuToggle } from "./MenuToggle"
import { motion, sync, useCycle } from "framer-motion"
import MenuBox from "./MenuBox"

function MenuSide() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <MenuToggle toggle={() => toggleOpen()} />
      <MenuBox width={isOpen ? "50vw" : "0px"} />
    </motion.nav>
  )
}

export default MenuSide
