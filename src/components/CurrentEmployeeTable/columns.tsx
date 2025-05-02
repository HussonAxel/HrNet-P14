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
    accessorKey: "StartDate",
    header: "Start Date",
    enableSorting: true,
  },
  {
    accessorKey: "Department",
    header: "Department",
    enableSorting: true,
  },
  {
    accessorKey: "DateOfBirth",
    header: "Date of Birth",
    enableSorting: true,
  },
  {
    accessorKey: "Street",
    header: "Street",
    enableSorting: true,
  },
  {
    accessorKey: "City",
    header: "City",
    enableSorting: true,
  },
  {
    accessorKey: "State",
    header: "State",
    enableSorting: true,
  },
  {
    accessorKey: "ZipCode",
    header: "Zip Code",
    enableSorting: true,
  },
];
