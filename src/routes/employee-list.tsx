import { createFileRoute } from "@tanstack/react-router";
import { columns } from "@/components/CurrentEmployeeTable/columns";
import { DataTable } from "@/components/CurrentEmployeeTable/data-table";
import useStore from "@/store/store";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/employee-list")({
  component: RouteComponent,
});

function RouteComponent() {
  const employeeDataStore = useStore((state) => state.forms);

  return (
    <>
      <Helmet>
        <title>HRnet – Employee List</title>
        <meta
          name="description"
          content="View and manage all employees in the HRnet system."
        />
        <link rel="canonical" href="https://yourdomain.com/employee-list" />
        <meta property="og:title" content="HRnet – Employee List" />
        <meta
          property="og:description"
          content="View and manage all employees in the HRnet system."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/employee-list"
        />
        <meta name="twitter:title" content="HRnet – Employee List" />
        <meta
          name="twitter:description"
          content="View and manage all employees in the HRnet system."
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={employeeDataStore} />
      </div>
    </>
  );
}
