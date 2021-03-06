const Manager = require('../lib/Manager');

test('creates a manager object', ()=>{
    const manager = new Manager('Peter', '001', 'pt@gmail.com', 1234552);

    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));    
})