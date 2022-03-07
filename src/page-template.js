

// create manager cards
const generateManagerCard = manager => {
    return `
    
    <div class="col-12 col-md-4">
        <div class="card " id="employee-card">
            <div class="card-header text-white">
                <h3 class="card-title" id="employee-name">${manager.name}</h3>
                <div class="card-text">
                <i class="fa-solid fa-mug-hot"></i>
                <h4>Manager</h4>
                </div>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email:${manager.email}</li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>    

    `;
};

// create engineer cards
const generateEngineerCard = engineer => {
    return `
    
    <div class="col-12 col-md-4">
        <div class="card " id="employee-card">
            <div class="card-header text-white">
                <h3 class="card-title" id="employee-name">${engineer.name}</h3>
                <div class="card-text">
                <i class="fa-solid fa-glasses"></i>
                <h4>Engineer</h4>
                </div>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email:${engineer.email}</li>
                <li class="list-group-item">GitHub username: ${engineer.gitHub}</li>
                </ul>
            </div>
        </div>
    </div>    

    `;
};

// create Intern cards
const generateInternCard = intern => {
    return `
    
    <div class="col-12 col-md-4">
        <div class="card " id="employee-card">
            <div class="card-header text-white">
                <h3 class="card-title" id="employee-name">${intern.name}</h3>
                <div class="card-text">
                <i class="fa-solid fa-user-graduate"></i>
                <h4>Intern</h4>
                </div>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email:${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>    

    `;
};



const generateTemplate = function(employeesInfo) {

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Team Profile generator</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <script src="https://kit.fontawesome.com/044a8a379d.js" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="style.css">
            </head>

            <body>
                <header>
                    <div class="container flex-row justify-content-around align-center py-3 ">
                    <h1 class="page-title ">My Team</h1>          
                    </div>
                </header>

                <main class="container my-5">
                    <div class="flex-row justify-content-around align-center row">
                      ${employeesInfo}
                    </div>
                </main>                
            </body>
        </html>
    `;
};

module.exports = (employeesData) => {
    //create array to hold card for each employee
   cardArr = [];
   
   for (var i=0 ; i<employeesData.length; i++){
       const employee = employeesData[i];       
       const role = employee.role;       

       if(role === 'Manager'){
           const cardMngr = generateManagerCard(employee);
           cardArr.push(cardMngr);
           
       }
       if(role === 'Engineer'){
           const cardEng = generateEngineerCard(employee);
           cardArr.push(cardEng);
           
       }
       if(role === 'Intern'){
           const cardIntrn = generateInternCard(employee);
           cardArr.push(cardIntrn);
           
       }

   }
   
   const employeesInfo = cardArr.join('')
   
   const generateTeam = generateTemplate(employeesInfo);
   
   return generateTeam;

};