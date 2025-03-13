import { createFileRoute } from '@tanstack/react-router'
import CreateEmployeeForm from '@/components/CreateEmployeeForm/CreateEmployeeForm'

export const Route = createFileRoute('/employee-list')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/employee-list"!
      <CreateEmployeeForm />
    </div>
  )
}
