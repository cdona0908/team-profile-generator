const Intern = require('../lib/Intern');

test('creates an intern object', ()=>{
    const intern = new Intern('Peter', '001', 'pt@gmail.com', '', 'UM');

    expect(intern.name).toBe('Peter');
    expect(intern.id).toBe('001');
    expect(intern.email).toBe('pt@gmail.com');
    expect(intern.rol).toBe('Intern');
    expect(intern.school).toBe('UM');
    expect(intern.icon).toBe('fa-solid fa-user-graduate');
    
})
