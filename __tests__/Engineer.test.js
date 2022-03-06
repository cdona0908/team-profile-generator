const Engineer = require ('../lib/Engineer');

test('creates an engineer object', ()=>{
    const engineer = new Engineer('Peter', '001', 'pt@gmail.com', 'cu890');

    expect(engineer.rol).toBe('Engineer');
    expect(engineer.gitHub).toEqual(expect.any(String));
    expect(engineer.icon).toBe('fa-solid fa-glasses');
    
})