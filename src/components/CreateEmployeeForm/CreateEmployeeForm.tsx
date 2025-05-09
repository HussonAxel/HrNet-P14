import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import CalendarSVG from "../ui/svg/calendar";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Modal, ModalContent } from "hrnet-modal-p14";

import { dataStates, Department } from "@/lib/data";
import useStore from "@/store/store";
import { useState } from "react";
import { XIcon } from "lucide-react";

export const CreateEmployeeForm = () => {
  const [modalShow, setModalShow] = useState(false);
  const addForm = useStore((state) => state.addForm);

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    },
    onSubmit: ({ value }) => {
      addForm(value);
      setModalShow(true);
      form.reset();
    },
  });
  return (
    <>
      <Card className="max-w-[800px] w-full m-auto h-fit p-2 sm:p-4 md:p-6">
        <CardHeader className="space-y-2 sm:space-y-4">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl">
            Create a new employee
          </CardTitle>
          <CardDescription>
            <Link
              to="/employee-list"
              className="text-base sm:text-lg underline hover:font-semibold hover:text-gray-800 transition-all duration-300"
            >
              View employees list
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2 sm:px-4 md:px-6">
          <form
            className="flex flex-col gap-3 sm:gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <form.Field
              name="firstName"
              validators={{
                onChange: ({ value }) =>
                  value.length < 2 &&
                  "First Name must be at least 2 characters long",
              }}
              children={(field) => (
                <div>
                  <Label className="pb-2" htmlFor="firstName">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={() => field.handleBlur()}
                  />
                  {field.state.meta.isBlurred && field.state.meta.errors && (
                    <div className="text-red-500 text-sm mt-1">
                      {field.state.meta.errors}
                    </div>
                  )}
                </div>
              )}
            />
            <form.Field
              name="lastName"
              validators={{
                onChange: ({ value }) => {
                  if (value.length < 2) {
                    return "Last Name must be at least 2 characters long";
                  }
                },
              }}
              children={(field) => (
                <div>
                  <Label className="pb-2" htmlFor="lastName">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={() => field.handleBlur()}
                  />
                  {field.state.meta.isBlurred && field.state.meta.errors && (
                    <div className="text-red-500 text-sm mt-1">
                      {field.state.meta.errors}
                    </div>
                  )}
                </div>
              )}
            />
            <form.Field
              name="dateOfBirth"
              validators={{
                onChange: ({ value }) => {
                  if (!value) {
                    return "You must select a date";
                  }
                },
              }}
              children={(field) => (
                <div className="space-y-2">
                  <Label className="pb-2" htmlFor="dateOfBirth">
                    Date Of Birth
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="dateOfBirth"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.state.value && "text-muted-foreground"
                        )}
                        onBlur={() => field.handleBlur()}
                      >
                        <CalendarSVG className="mr-2 h-4 w-4" />
                        {field.state.value ? (
                          format(new Date(field.state.value), "PPP")
                        ) : (
                          <span>Date Of Birth</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Calendar
                        mode="single"
                        selected={
                          field.state.value
                            ? new Date(field.state.value)
                            : undefined
                        }
                        onSelect={(date) =>
                          field.handleChange(
                            date ? date.toISOString().split("T")[0] : ""
                          )
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  {field.state.meta.isBlurred && field.state.meta.errors && (
                    <div className="text-red-500 text-sm mt-1">
                      {field.state.meta.errors}
                    </div>
                  )}
                </div>
              )}
            />
            <form.Field
              name="startDate"
              validators={{
                onChange: ({ value }) => {
                  if (!value) {
                    return "You must select a date";
                  }
                },
              }}
              children={(field) => (
                <div className="space-y-2">
                  <Label className="pb-2" htmlFor="startDate">
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="startDate"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.state.value && "text-muted-foreground"
                        )}
                        onBlur={() => field.handleBlur()}
                      >
                        <CalendarSVG className="mr-2 h-4 w-4" />
                        {field.state.value ? (
                          format(new Date(field.state.value), "PPP")
                        ) : (
                          <span>Start Date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={
                          field.state.value
                            ? new Date(field.state.value)
                            : undefined
                        }
                        onSelect={(date) =>
                          field.handleChange(
                            date ? date.toISOString().split("T")[0] : ""
                          )
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {field.state.meta.isBlurred && field.state.meta.errors && (
                    <div className="text-red-500 text-sm mt-1">
                      {field.state.meta.errors}
                    </div>
                  )}
                </div>
              )}
            />
            <Card className="my-2 sm:my-4">
              <CardHeader className="p-3 sm:p-4">
                <CardTitle className="text-lg sm:text-xl">Address</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <form.Field
                    name="street"
                    validators={{
                      onChange: ({ value }) =>
                        value.length < 3 &&
                        "Street must be at least 3 characters long",
                    }}
                    children={(field) => (
                      <div>
                        <Label className="pb-2" htmlFor="street">
                          Street
                        </Label>
                        <Input
                          id="street"
                          type="text"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={() => field.handleBlur()}
                        />
                        {field.state.meta.isBlurred &&
                          field.state.meta.errors && (
                            <div className="text-red-500 text-sm mt-1">
                              {field.state.meta.errors}
                            </div>
                          )}
                      </div>
                    )}
                  />
                  <form.Field
                    name="city"
                    validators={{
                      onChange: ({ value }) =>
                        value.length < 3 &&
                        "City must be at least 3 characters long",
                    }}
                    children={(field) => (
                      <div>
                        <Label className="pb-2" htmlFor="city">
                          City
                        </Label>
                        <Input
                          id="city"
                          type="text"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={() => field.handleBlur()}
                        />
                        {field.state.meta.isBlurred &&
                          field.state.meta.errors && (
                            <div className="text-red-500 text-sm mt-1">
                              {field.state.meta.errors}
                            </div>
                          )}
                      </div>
                    )}
                  />
                  <form.Field
                    name="state"
                    validators={{
                      onChange: ({ value }) =>
                        !value && "You need to select a state",
                    }}
                    children={(field) => (
                      <div>
                        <Label className="pb-2" htmlFor="state">
                          State
                        </Label>
                        <Select
                          value={field.state.value}
                          onValueChange={(value) => field.handleChange(value)}
                          onOpenChange={() => field.handleBlur()}
                          aria-label="Select a state"
                        >
                          <SelectTrigger
                            className="w-full"
                            aria-label="Select state"
                          >
                            <SelectValue placeholder="Select a state" />
                          </SelectTrigger>
                          <SelectContent
                            side="bottom"
                            avoidCollisions={false}
                            position="popper"
                            className="max-h-[350px] overflow-y-auto"
                          >
                            <SelectGroup>
                              {dataStates.map((state) => {
                                return (
                                  <SelectItem
                                    value={state.abbreviation}
                                    key={state.name}
                                    aria-label={state.name}
                                  >
                                    {state.name}
                                  </SelectItem>
                                );
                              })}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        {field.state.meta.isBlurred &&
                          field.state.meta.errors && (
                            <div className="text-red-500 text-sm mt-1">
                              {field.state.meta.errors}
                            </div>
                          )}
                      </div>
                    )}
                  />
                  <form.Field
                    name="zipCode"
                    validators={{
                      onChange: ({ value }) =>
                        value &&
                        value.length < 3 &&
                        "Zip Code must be at least 3 numbers long",
                    }}
                    children={(field) => (
                      <div>
                        <Label className="pb-2" htmlFor="zipCode">
                          Zip Code
                        </Label>
                        <Input
                          id="zipCode"
                          pattern="[0-9]*"
                          type="text"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={() => field.handleBlur()}
                        />
                        {field.state.meta.isBlurred &&
                          field.state.meta.errors && (
                            <div className="text-red-500 text-sm mt-1">
                              {field.state.meta.errors}
                            </div>
                          )}
                      </div>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            <form.Field
              name="department"
              validators={{
                onChange: ({ value }) =>
                  !value && "You need to select a department",
              }}
              children={(field) => (
                <div>
                  <Label className="pb-2" htmlFor="department">
                    Department
                  </Label>
                  <Select
                    value={field.state.value}
                    onValueChange={(value) => field.handleChange(value)}
                    onOpenChange={() => field.handleBlur()}
                    aria-label="Select a department"
                  >
                    <SelectTrigger
                      className="w-full"
                      aria-label="Select department"
                    >
                      <SelectValue placeholder="Select a Department" />
                    </SelectTrigger>
                    <SelectContent
                      side="bottom"
                      className="max-h-[200px] overflow-y-auto"
                    >
                      <SelectGroup>
                        {Department.map((Department) => {
                          return (
                            <SelectItem
                              value={Department.name}
                              key={Department.name}
                            >
                              {Department.name}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {field.state.meta.isBlurred && field.state.meta.errors && (
                    <div className="text-red-500 text-sm mt-1">
                      {field.state.meta.errors}
                    </div>
                  )}
                </div>
              )}
            />
            <Modal isOpen={modalShow} onClose={() => setModalShow(false)}>
              <ModalContent
                title="Employee created ! "
                description="A new employee has been successfully created. Welcome to the team !"
                closeButtonText={<XIcon />}
              />
            </Modal>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between p-3 sm:p-4">
          <Button
            variant="outline"
            onClick={() => form.reset()}
            className="w-full sm:w-auto"
          >
            Reset
          </Button>
          <Button onClick={form.handleSubmit} className="w-full sm:w-auto">
            Create employee
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
