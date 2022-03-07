const Intern = require('../lib/Intern');

test('creates an intern object', ()=>{
    const intern = new Intern('Peter', '001', 'pt@gmail.com','UM');
    
    expect(intern.role).toBe('Intern');
    expect(intern.school).toEqual(expect.any(String));   
    
})
