const Engineer = require ('../lib/Engineer');

test('creates an engineer object', ()=>{
    const engineer = new Engineer('Peter', '001', 'pt@gmail.com', '', 'cu890');

    expect(engineer.name).toBe('Peter');
    expect(engineer.id).toBe('001');
    expect(engineer.email).toBe('pt@gmail.com');
    expect(engineer.rol).toBe('Engineer');
    expect(engineer.gitHub).toBe('cu890');
    expect(engineer.icon).toBe('fa-solid fa-glasses');
    
})