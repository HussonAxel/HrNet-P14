export interface FormState {
  form: {
    firstName: string;
    lastName: string;
    DateOfBirth: string;
    StartDate: string;
    Street: string;
    City: string;
    State: string;
    ZipCode: string;
    Department: string;
  }[];
}

export interface FormActions {
  updateForm: (newForm: { firstName: string; lastName: string; DateOfBirth: string; StartDate: string; Street: string; City: string; State: string; ZipCode: string; Department: string; }[]) => void;
}
