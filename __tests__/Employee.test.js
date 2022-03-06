const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee ('Peter', '001', 'pt@gmail.com', 'Engineer');

  expect(employee.name).toBe('Peter');
  expect(employee.id).toBe('001');
  expect(employee.email).toBe('pt@gmail.com');
  expect(employee.rol).toBe('Engineer');

})