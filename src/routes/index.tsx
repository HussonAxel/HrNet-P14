import { createFileRoute } from "@tanstack/react-router";
import { CreateEmployeeForm } from "@/components/CreateEmployeeForm/CreateEmployeeForm";
export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <section className="w-1/2 m-auto text-center py-8">
      <CreateEmployeeForm />
    </section>
  );
}
