import { createFileRoute, Link } from "@tanstack/react-router";
import { columns } from "@/components/CurrentEmployeeTable/columns";
import { DataTable } from "@/components/CurrentEmployeeTable/data-table";
import { dataStates } from "@/lib/data";
import useStore from "@/store/store";

export const Route = createFileRoute("/employee-list")({
  component: RouteComponent,
});

function RouteComponent() {
  const employeeDataStore = useStore((state) => state.forms);

  const employeeDataWithAbbreviations = employeeDataStore.map((employee) => {
    const updatedEmployee = { ...employee };

    if (updatedEmployee.State) {
      const stateObject = dataStates.find(
        (state) => state.name === updatedEmployee.State
      );

      if (stateObject) {
        updatedEmployee.State = stateObject.abbreviation;
      }
    }

    return updatedEmployee;
  });

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={employeeDataWithAbbreviations} />
      <Link to="/">Home</Link>
    </div>
  );
}
