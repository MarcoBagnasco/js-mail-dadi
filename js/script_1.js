// console.log('Hello');//test

/* EMAIL VALIDATION
    1. Creare una lista di email
    2. Chiedere all'utente di inserire la propria email
    3. Verificare se essa è presente nella lista e stampare messagio appropriato
*/

// 1.
var emailList = ['marcobagnasco@virgilio.it', 'paoloduzioni@booleanteacher.com', 'lorenzobalsano@booleantutor.com', 'fabiogiorgini@booleantutor.com'];
// console.table(emailList); //test

// 2.
var userEmail = prompt('Insert your email');
// console.log(userEmail); //test

// 3.
var emailFound = false;
for(var i = 0; i < emailList.length; i++){
    // console.log(emailList[i]); //test
    if(emailList[i] === userEmail){
        emailFound = true;
        break;
    }
}

// 4.
document.getElementById('email').innerHTML = userEmail;

if(emailFound){
    // console.log('Valid Email Address. Access allowed!'); //test
    document.getElementById('access').innerHTML = 'Valid Email Address. Access allowed!' + '<div class="check"></div>';
} else {
    // console.log('Invalid Email Address. Access denied!'); //test
    document.getElementById('access').innerHTML = 'Invalid Email Address. Access denied!' + '<div class="uncheck"></div>';
}
