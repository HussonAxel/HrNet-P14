import { createFileRoute } from "@tanstack/react-router";
import { columns } from "@/components/CurrentEmployeeTable/columns";
import { DataTable } from "@/components/CurrentEmployeeTable/data-table";
import useStore from "@/store/store";
import { generateFakeEmployees } from "@/lib/fakeData";
import { useEffect } from "react";

export const Route = createFileRoute("/employee-list")({
  component: RouteComponent,
});

import { Button } from "hrnet-modal-p14";
import { Modal } from "hrnet-modal-p14";
import { Dialog } from "hrnet-modal-p14";

function RouteComponent() {
  const employeeDataStore = useStore((state) => state.forms);
  const addForm = useStore((state) => state.addForm);
  const resetForms = useStore((state) => state.resetForms);

  useEffect(() => {
    resetForms();
    const fakeEmployees = generateFakeEmployees(50);
    fakeEmployees.forEach((employee) => addForm(employee));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={employeeDataStore} />
      <Button
        variant="secondary"
        className="p-4 bg-red-500 border-4"
        onClick={() => console.log("test")}
      >
        Add Employee
      </Button>
      <Modal />
      <Dialog className="text-center m-auto"> Je suis un test</Dialog>
    </div>
  );
}
