/*
 js -6
 */
var friends = {
    bill : {
        firstName:"Bill",
        lastName: "Gates",
        number: "(345)666-555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
     steve: {
        firstName:"Steve",
        lastName: "Jobs",
        number: "(345)666-666",
        address: ['Apple Way','Richmond','VA','98344']
    }
}
//Funcion para listar
var list = function(friends){
    for (i in friends){
    console.log(i);}
};

//Funcion para buscar

search = function(name){
   for (i in friends)
    if(friends[i].firstName ===name){
        console.log(friends[i]);
        return friends[i];     
    }
    };