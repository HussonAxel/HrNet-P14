export type fakeEmployeeDataType = {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

export const fakeEmployeeData: fakeEmployeeDataType[] = [
  {
    firstName: "Axel",
    lastName: "Husson",
    startDate: "14/03/2025",
    department: "Sales",
    dateOfBirth: "14/03/2025",
    street: "Random Street",
    city: "Random City",
    state: "Random State",
    zipCode: "Random Zip Code",
  },
];
