
/**
 
This section of code is for the creation of new users and storing them in an array
 */

let users = []; // The empty array to store the diffrernt user objects
console.log(users);

   // The function to create the different user 
   /*
   
   This section has been quite achallenge to com-plete as it required the application of different rules that combined arrays, get information from the dom and creation of objects. I learned about the this method and helped me resolve some of the problems I was facing.
   
   
   
   */ 

   let firstName = document.getElementById("fname").value;
   let surname = document.getElementById("lname").value;
   let phoneNumber = document.getElementById("pnumber").value;
   let email = document.getElementById("email").value;
   let submit = document.getElementById("btn");
  
function User(fname, lname, email, pnumber){
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.pnumber = pnumber;

       
    }
    
    User();

    //This section of code of code is still a work in progress since I still have to pass the values from the form to values created in the object

    users = new User(firstName, surname, phoneNumber, email);
    console.log(users);

    submit.addEventListener("click", User())





   







// let bookCollection = [
//   {
//       "title" : "Return To The Source",
//        "pages" : 193,
//       "chapters": 113,
//       "image" :  'download.jpg',

//    },

//   {
//       "title" : "Thomas Sankara Speaks",
//        "pages" : 193,
//       "chapters": 145,

//    },

//    {
//       "title" : "Africa Must Unite",
//        pages : 197,
//       "chapters": 225,

//    },

//    {
//       "title" : "Here Is A Tree",
//        "pages" : 193,
//       "chapters": 593,
      
//    },
// ];






// function fetchBooks(title){

//     for(let i = 0; i < bookCollection.length; i++){
//     ; // logs the complete object for book collection to the console//allows for values to be passed in and be evaluated
//       //return bookCollection[i].title


//       if(bookCollection[i].title === title){
//          return bookCollection[i].title
//       }
     

     
     
    
// };
// };


// function fetchBook(chapters){

//    for(let i = 0; i < bookCollection.length; i++){
//    ; // logs the complete object for book collection to the console//allows for values to be passed in and be evaluated
//      //return bookCollection[i].title


//      if(bookCollection[i].chapters === chapters){
//         return bookCollection[i].chapters
//      }
    

    
    
   
// };
// };

// fetchBooks()


           

