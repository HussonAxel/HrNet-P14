import { faker } from "@faker-js/faker";

export type EmployeeDataType = {
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

const departments = [
  "Engineering",
  "Marketing",
  "Sales",
  "Human Resources",
  "Finance",
  "IT",
  "Operations",
  "Customer Support",
  "Research & Development",
  "Legal",
];

const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const generateFakeEmployee = (): EmployeeDataType => {
  const birthDate = faker.date.between({
    from: "1960-01-01",
    to: "2000-12-31",
  });
  const startDate = faker.date.between({
    from: "2010-01-01",
    to: "2024-03-15",
  });

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    startDate: startDate.toISOString().split("T")[0],
    department: faker.helpers.arrayElement(departments),
    dateOfBirth: birthDate.toISOString().split("T")[0],
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.helpers.arrayElement(states),
    zipCode: faker.location.zipCode(),
  };
};

export const fakeData: EmployeeDataType[] = Array.from({ length: 100 }, () =>
  generateFakeEmployee()
);
