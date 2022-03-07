const Engineer = require ('../lib/Engineer');

test('creates an engineer object', ()=>{
    const engineer = new Engineer('Peter', '001', 'pt@gmail.com', 'cu890');

    expect(engineer.role).toBe('Engineer');
    expect(engineer.gitHub).toEqual(expect.any(String));   
    
})