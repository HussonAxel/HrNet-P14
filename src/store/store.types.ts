// store.types.ts
export interface FormState {
  forms: any[]; // Array of form submissions
}

export interface FormActions {
  addForm: (newForm: any) => void;
  resetForms: () => void;
}
