// Updated store.js
import { create } from "zustand";
import { shared } from "use-broadcast-ts";
import { persist, createJSONStorage } from "zustand/middleware";
import type { FormActions, FormState } from "./store.types";

// Initialize with an empty array of form submissions
const initialForms = [] as any[];

const useStore = create<FormState & FormActions>()(
  shared(
    persist<FormState & FormActions>(
      (set) => ({
        forms: initialForms,
        addForm: (newForm) =>
          set((state) => ({
            forms: [...state.forms, newForm],
          })),
        resetForms: () => set({ forms: [] }),
      }),
      {
        name: "form-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useStore;
