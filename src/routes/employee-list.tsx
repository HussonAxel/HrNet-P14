import { createFileRoute } from "@tanstack/react-router";
import { columns } from "@/components/CurrentEmployeeTable/columns";
import { DataTable } from "@/components/CurrentEmployeeTable/data-table";
// import { fakeData } from "@/data/fakeEmployeeData";
import useStore from "@/store/store";

export const Route = createFileRoute("/employee-list")({
  component: RouteComponent,
});

export function RouteComponent() {
  const employeeDataStore = useStore((state) => state.forms);

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={employeeDataStore} />
        {/* <DataTable columns={columns} data={fakeData} /> */}
      </div>
    </>
  );
}
