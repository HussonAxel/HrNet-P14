import { create } from "zustand";
import { shared } from "use-broadcast-ts";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  FormActions,
  FormState,
} from "./store.types";

const initialForm = [
    {firstName: "", lastName: "", DateOfBirth: "", StartDate: "", Street: "", City: "", State: "", ZipCode: "", Department: "" }
]

const useStore = create<FormState & FormActions>()(
  shared(
    persist<FormState & FormActions>(
      (set) => ({
        form: initialForm,
        updateForm: (newForm) => set({ form: newForm }),
      }),
      {
        name: "form-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useStore;
