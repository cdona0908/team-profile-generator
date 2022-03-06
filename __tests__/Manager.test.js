const Manager = require('../lib/Manager');

test('creates a manager object', ()=>{
    const manager = new Manager('Peter', '001', 'pt@gmail.com', '', 1234552);

    expect(manager.name).toBe('Peter');
    expect(manager.id).toBe('001');
    expect(manager.email).toBe('pt@gmail.com');
    expect(manager.rol).toBe('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.icon).toBe('fa-solid fa-mug-hot');
})