import { createFileRoute } from "@tanstack/react-router";
import { CreateEmployeeForm } from "@/components/CreateEmployeeForm/CreateEmployeeForm";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <Helmet>
        <title>HRnet – Create Employee</title>
        <meta
          name="description"
          content="Create a new employee record in the HRnet system."
        />
        <link rel="canonical" href="https://yourdomain.com/" />
        <meta property="og:title" content="HRnet – Create Employee" />
        <meta
          property="og:description"
          content="Create a new employee record in the HRnet system."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:title" content="HRnet – Create Employee" />
        <meta
          name="twitter:description"
          content="Create a new employee record in the HRnet system."
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <section className="w-1/2 m-auto text-center py-8">
        <CreateEmployeeForm />
      </section>
    </>
  );
}
