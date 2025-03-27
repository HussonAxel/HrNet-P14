import { createFileRoute, Link } from "@tanstack/react-router";
import { columns } from "@/components/CurrentEmployeeTable/columns";
import { DataTable } from "@/components/CurrentEmployeeTable/data-table";
import useStore from "@/store/store";
import { generateFakeEmployees } from "@/lib/fakeData";
import { useEffect } from "react";

export const Route = createFileRoute("/employee-list")({
  component: RouteComponent,
});

function RouteComponent() {
  const employeeDataStore = useStore((state) => state.forms);
  const addForm = useStore((state) => state.addForm);
  const resetForms = useStore((state) => state.resetForms);

  useEffect(() => {
    // Reset existing forms and add 50 fake employees
    resetForms();
    const fakeEmployees = generateFakeEmployees(50);
    fakeEmployees.forEach((employee) => addForm(employee));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={employeeDataStore} />

      <Link to="/">Home</Link>
    </div>
  );
}
