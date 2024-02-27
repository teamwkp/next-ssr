import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export const useTriggerStore = create(
  persist(
    (set, get) => ({
      trigger: "hover",
      setTrigger: (val) => set({ trigger: val }),
    }),
    {
      name: "trigger-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
