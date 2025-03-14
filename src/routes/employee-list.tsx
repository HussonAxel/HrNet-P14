import { createFileRoute } from "@tanstack/react-router";
import { columns } from "@/components/CurrentEmployeeTable/columns";
import { DataTable } from "@/components/CurrentEmployeeTable/data-table";
import type { fakeEmployeeDataType } from "@/components/CurrentEmployeeTable/fakeEmployeeData";
import { fakeEmployeeData } from "@/components/CurrentEmployeeTable/fakeEmployeeData";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/employee-list")({
  component: RouteComponent,
});

function RouteComponent() {
  const [data, setData] = useState<fakeEmployeeDataType[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const employeeData = await getData();
      setData(employeeData);
    };

    loadData();
  }, []);

  async function getData(): Promise<fakeEmployeeDataType[]> {
    return fakeEmployeeData;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
