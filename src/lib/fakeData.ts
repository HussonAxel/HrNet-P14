import { dataStates, Department } from "./data";

const firstNames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Joseph",
  "Thomas",
  "Charles",
  "Mary",
  "Patricia",
  "Jennifer",
  "Linda",
  "Elizabeth",
  "Barbara",
  "Susan",
  "Jessica",
  "Sarah",
  "Karen",
  "Nancy",
  "Lisa",
  "Betty",
  "Margaret",
  "Sandra",
  "Ashley",
  "Kimberly",
  "Emily",
  "Donna",
  "Michelle",
  "Dorothy",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
];

const streetNames = [
  "Main St",
  "Oak Ave",
  "Maple Dr",
  "Cedar Ln",
  "Pine Rd",
  "Elm St",
  "Washington Ave",
  "Lake St",
  "Hill Rd",
  "River Dr",
  "Forest Ave",
  "Park Rd",
  "Garden St",
  "Valley View",
  "Mountain Dr",
  "Sunset Blvd",
  "Ocean Ave",
  "Beach Rd",
  "Spring St",
  "Summer Ave",
];

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "San Francisco",
  "Charlotte",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Boston",
];

function getRandomDate(start: Date, end: Date): string {
  const startDate = start.getTime();
  const endDate = end.getTime();
  const randomDate = new Date(
    startDate + Math.random() * (endDate - startDate)
  );
  return randomDate.toISOString().split("T")[0];
}

export function generateFakeEmployees(count: number) {
  const employees = [];

  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const streetNumber = Math.floor(Math.random() * 9999) + 1;
    const streetName =
      streetNames[Math.floor(Math.random() * streetNames.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const state = dataStates[Math.floor(Math.random() * dataStates.length)];
    const department =
      Department[Math.floor(Math.random() * Department.length)];

    // Generate dates
    const startDate = getRandomDate(new Date("2010-01-01"), new Date());
    const dateOfBirth = getRandomDate(
      new Date("1960-01-01"),
      new Date("2000-12-31")
    );

    // Generate zip code (5 digits)
    const zipCode = Math.floor(Math.random() * 90000) + 10000;

    employees.push({
      firstName,
      lastName,
      DateOfBirth: dateOfBirth,
      StartDate: startDate,
      Street: `${streetNumber} ${streetName}`,
      City: city,
      State: state.abbreviation,
      ZipCode: zipCode.toString(),
      Department: department.name,
    });
  }

  return employees;
}
