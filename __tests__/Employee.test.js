
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee ('Peter', '145', 'pt@gmail.com');

  expect(employee.name).toEqual(expect.any (String));
  expect(employee.id).toEqual(expect.any (String));
  expect(employee.email).toEqual(expect.any (String));
  
});