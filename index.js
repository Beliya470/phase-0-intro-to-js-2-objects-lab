let employee = {
  name: "John Doe",
  streetAddress: "123 Main St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let updatedEmployee = { ...employee };
  delete updatedEmployee[key];
  return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Testing the functions
console.log("Initial Employee:", employee);

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
console.log("Updated Employee:", updatedEmployee);

let destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "456 Elm St"
);
console.log("Destructively Updated Employee:", destructivelyUpdatedEmployee);

let employeeWithoutKey = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without Key:", employeeWithoutKey);

let destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(
  employee,
  "name"
);
console.log("Destructively Deleted Employee:", destructivelyDeletedEmployee);

console.log("Final Employee:", employee);
