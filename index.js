// Write your solution in this file!
let employee = {
  name: "Douglas",
  streetAddress: "Kibera",
};

/*
    returns an employee with the original key value pairs and the new key value pair
    it does not modify the original employee, but rather returns a clone with the new data
*/

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  let objectClone = { ...employee };
  objectClone[key] = value;
  return objectClone;
};

/*
    updates `employee` with the given `key` and `value` (it is destructive) and returns the entire update
*/

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

/*
    deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
    does not modify the original employee (it is non-destructive)
*/

const deleteFromEmployeeByKey = (employee, key) => {
  let objectClone = { ...employee };
  delete objectClone[key];
  return objectClone;
};

/*
    returns employee without the deleted key/value pair
    modifies the original employee
*/

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};
