import { useForm } from "@tanstack/react-form";

export default function CreateEmployeeForm() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: ({ value }) => {
      console.log("values", value);
    },
  });
  return (
    <>
      <div>CreateEmployeeForm</div>
      <form.Field
        validators={{
          onSubmit: ({ value }) => {
            if (value.length < 3) {
              return "First Name must be at least 3 characters";
            }
          },
        }}
        name="firstName"
        children={(field) => (
          <div>
            <label htmlFor="firstName">First Name : </label>
            <input
              className="rounded-xs border"
              id="firstName"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors && (
              <div className="text-red-300">{field.state.meta.errors}</div>
            )}
          </div>
        )}
      />
      <form.Field
        name="lastName"
        validators={{
          onSubmit: ({ value }) => {
            if (value.length < 3) {
              return "Last Name must be at least 3 characters";
            }
          },
        }}
        children={(field) => (
          <div>
            <label htmlFor="lastName">Last Name : </label>
            <input
              className="rounded-xs border"
              id="lastName"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors && (
              <span className="text-red-300">{field.state.meta.errors}</span>
            )}
          </div>
        )}
      />
      <button type="submit" onClick={form.handleSubmit}>
        Submit Button
      </button>
      <button type="button" onClick={() => form.reset()}>
        Reset Button
      </button>
    </>
  );
}
