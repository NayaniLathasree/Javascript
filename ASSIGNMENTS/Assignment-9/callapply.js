

        let person ={  
            name: 'Anu',
            age:29,
            designation:'Doctor'
        }
        let student ={
            name:'Ajay',
            age:30
        }
        let details = function(city,state){
                console.log(`Name: ${this.name} Age : ${this.age}  Designation : ${this.designation}  city :${city} state: ${state} `);
        }
        const callMethod =details.call(person,'Banglore','Karnataka')
        const callMethods = details.call(student)
        console.log(callMethod);
        console.log('-----------------------Apply method------------------------------------');
/*         Apply works as call method only difference is by call parameters.In Apply method we wrap 
        the parameters as an array .In call Method we call parameters individually.
        Bind() method=>it invoke the function immmediately. Bind Method returns the bound function that excutes later..
        we call that function whenever we want..
        It give copy of the function which can be invoke later...
 */
         const applyMethod = details.apply(person,['Banglore','Karnataka'])
         const bindMethod = details.bind(person,['Banglore','Karnataka'])
         console.log(bindMethod);
         bindMethod()
      




