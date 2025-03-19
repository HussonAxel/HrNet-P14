import type { ColumnDef } from "@tanstack/react-table";

type EmployeeDataType = {
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

export const columns: ColumnDef<EmployeeDataType>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "StartDate",
    header: "Start Date",
  },
  {
    accessorKey: "Department",
    header: "Department",
  },
  {
    accessorKey: "DateOfBirth",
    header: "Date of Birth",
  },
  {
    accessorKey: "Street",
    header: "Street",
  },
  {
    accessorKey: "City",
    header: "City",
  },
  {
    accessorKey: "State",
    header: "State",
  },
  {
    accessorKey: "ZipCode",
    header: "Zip Code",
  },
];
