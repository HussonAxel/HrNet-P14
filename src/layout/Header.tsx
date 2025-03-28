import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold gap-4 flex">
          <Link to="/">Employee Form</Link>
          <Link to="/employee-list">Employee List</Link>
        </div>
        <div className="px-2">
        </div>
      </nav>
    </header>
  )
}
