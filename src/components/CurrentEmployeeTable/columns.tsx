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
    enableSorting: true,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    enableSorting: true,
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    enableSorting: true,
  },
  {
    accessorKey: "department",
    header: "Department",
    enableSorting: true,
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
    enableSorting: true,
  },
  {
    accessorKey: "street",
    header: "Street",
    enableSorting: true,
  },
  {
    accessorKey: "city",
    header: "City",
    enableSorting: true,
  },
  {
    accessorKey: "state",
    header: "State",
    enableSorting: true,
  },
  {
    accessorKey: "zipCode",
    header: "Zip Code",
    enableSorting: true,
  },
];
