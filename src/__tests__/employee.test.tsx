import { describe, it, expect, beforeEach, vi } from "vitest";
import "@testing-library/jest-dom";
import { create } from "zustand";
import type { StoreApi } from "zustand";

interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
}

interface TestStore {
  forms: Employee[];
  addForm: (newForm: Employee) => void;
  resetForms: () => void;
}

const createTestStore = () =>
  create<TestStore>((set) => ({
    forms: [],
    addForm: (newForm) =>
      set((state) => ({
        forms: [...state.forms, newForm],
      })),
    resetForms: () => set({ forms: [] }),
  }));

vi.mock("@/components/CurrentEmployeeTable/data-table", () => ({
  DataTable: ({ data }: { data: any[] }) => (
    <div data-testid="mock-table">
      {data.map((employee, index) => (
        <div key={index}>
          {employee.firstName} {employee.lastName}
        </div>
      ))}
    </div>
  ),
}));

vi.mock("@/components/CurrentEmployeeTable/columns", () => ({
  columns: [],
}));

describe("Employee Management Store", () => {
  let store: StoreApi<TestStore>;

  beforeEach(() => {
    store = createTestStore();
  });

  it("should initialize with empty employee list", () => {
    expect(store.getState().forms).toEqual([]);
  });

  it("should add a new employee to the store", () => {
    const newEmployee: Employee = {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-01-01",
      startDate: "2024-01-01",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      department: "Engineering",
    };

    store.getState().addForm(newEmployee);
    expect(store.getState().forms).toHaveLength(1);
    expect(store.getState().forms[0]).toEqual(newEmployee);
  });

  it("should add multiple employees to the store", () => {
    const employees: Employee[] = [
      {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "1990-01-01",
        startDate: "2024-01-01",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        department: "Engineering",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        dateOfBirth: "1992-02-02",
        startDate: "2024-02-02",
        street: "456 Oak St",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        department: "Marketing",
      },
    ];

    employees.forEach((employee) => store.getState().addForm(employee));
    expect(store.getState().forms).toHaveLength(2);
    expect(store.getState().forms).toEqual(employees);
  });

  it("should reset the store to empty state", () => {
    const newEmployee: Employee = {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-01-01",
      startDate: "2024-01-01",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      department: "Engineering",
    };

    store.getState().addForm(newEmployee);
    expect(store.getState().forms).toHaveLength(1);

    store.getState().resetForms();
    expect(store.getState().forms).toHaveLength(0);
    expect(store.getState().forms).toEqual([]);
  });
});
