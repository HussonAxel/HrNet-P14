
import { useForm} from '@tanstack/react-form'


export default function CreateEmployeeForm() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    }, 
    onSubmit: ({value}) => {
      console.log("values", value);
    }
  })
  return (
    <>
      <div>CreateEmployeeForm</div>
      <form.Field
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
          </div>
        )}
      />
      <form.Field
        name="lastName"
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
          </div>
        )}
      />
      <button type='submit' onClick={form.handleSubmit}>Submit Button</button>
      <button type='button' onClick={() => form.reset()}>Reset Button</button>
    </>
  );
}
