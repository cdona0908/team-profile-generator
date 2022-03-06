const Intern = require('../lib/Intern');

test('creates an intern object', ()=>{
    const intern = new Intern('Peter', '001', 'pt@gmail.com','UM');
    
    expect(intern.rol).toBe('Intern');
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.icon).toBe('fa-solid fa-user-graduate');
    
})
