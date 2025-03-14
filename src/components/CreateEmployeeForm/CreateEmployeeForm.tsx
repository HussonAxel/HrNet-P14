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
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { states, Department } from "@/lib/data";

export const CreateEmployeeForm = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      dateOfBirth: "",
      StartDate: "",
      Street: "",
      City: "",
      State: "",
      ZipCode: "",
      Department: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  return (
    <Card className="w-[800px] m-auto">
      <CardHeader>
        <CardTitle className="text-4xl">Create a new employee</CardTitle>
        <CardDescription>
          <Link
            to="/employee-list"
            className="text-lg underline hover:font-semibold hover:text-gray-800 transition-all duration-300"
          >
            {" "}
            View employees list{" "}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <form.Field
            name="username"
            validators={{
              onBlurAsync: ({ value }) =>
                value.length < 3 &&
                "Username must be at least 3 characters long",
            }}
            children={(field) => (
              <div>
                <Label className="pb-2" htmlFor="username">
                  Username
                </Label>
                <Input
                  id="username"
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
            name="password"
            validators={{
              onBlurAsync: ({ value }) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters long";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[a-z]/.test(value)) {
                  return "Password must contain at least one lowercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
              },
            }}
            children={(field) => (
              <div>
                <Label className="pb-2" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
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
                      <CalendarIcon className="mr-2 h-4 w-4" />
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
          <form.Field
            name="StartDate"
            children={(field) => (
              <div className="space-y-2">
                <Label className="pb-2" htmlFor="StartDate">
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="StartDate"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.state.value && "text-muted-foreground"
                      )}
                      onBlur={() => field.handleBlur()}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
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
          <Card className="my-4">
            <CardHeader>
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <form.Field
                  name="Street"
                  validators={{
                    onBlurAsync: ({ value }) =>
                      value.length < 3 &&
                      "Username must be at least 3 characters long",
                  }}
                  children={(field) => (
                    <div>
                      <Label className="pb-2" htmlFor="Street">
                        Street
                      </Label>
                      <Input
                        id="Street"
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
                  name="City"
                  validators={{
                    onBlurAsync: ({ value }) =>
                      value.length < 3 &&
                      "Username must be at least 3 characters long",
                  }}
                  children={(field) => (
                    <div>
                      <Label className="pb-2" htmlFor="City">
                        City
                      </Label>
                      <Input
                        id="City"
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
                  name="State"
                  validators={{
                    onBlurAsync: ({ value }) =>
                      value && "You need to select a state",
                  }}
                  children={(field) => (
                    <div>
                      <Label className="pb-2" htmlFor="State">
                        State
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                        <SelectContent
                          side="bottom"
                          avoidCollisions={false}
                          position="popper"
                          className="max-h-[350px] overflow-y-auto"
                        >
                          <SelectGroup>
                            {states.map((state) => {
                              return (
                                <SelectItem value={state.name}>
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
                  name="ZipCode"
                  validators={{
                    onBlurAsync: ({ value }) =>
                      value.length < 3 &&
                      "Username must be at least 3 characters long",
                  }}
                  children={(field) => (
                    <div>
                      <Label className="pb-2" htmlFor="CZipCodeity">
                        Zip Code
                      </Label>
                      <Input
                        id="ZipCode"
                        type="number"
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
              </form>
            </CardContent>
          </Card>
          <form.Field
            name="Department"
            validators={{
              onBlurAsync: ({ value }) => value && "You need to select a state",
            }}
            children={(field) => (
              <div>
                <Label className="pb-2" htmlFor="Department">
                  Department
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Department" />
                  </SelectTrigger>
                  <SelectContent
                    side="bottom"
                    avoidCollisions={false}
                    position="popper"
                    className="max-h-[200px] overflow-y-auto"
                  >
                    <SelectGroup>
                      {Department.map((Department) => {
                        return (
                          <SelectItem value={Department.name}>
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
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
        <Button onClick={form.handleSubmit}>Sign Up</Button>
      </CardFooter>
    </Card>
  );
};
