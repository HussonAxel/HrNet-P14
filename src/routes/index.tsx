import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <section className="w-1/2 m-auto text-center">
      <Link to="/employee-list">Go to Employee List</Link>
      <h1 className="text-center text-red-500">HRnet</h1>
      <a>
        <Link to="/employee-list">View Current Employees</Link>
      </a>
      <h2>Create employee</h2>
    </section>
  );
}
