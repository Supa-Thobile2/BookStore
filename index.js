let bookCollection = [
  {
      "title" : "Return To The Source",
       "pages" : 193,
      "chapters": 113,
      "image" :  'download.jpg',

   },

  {
      "title" : "Thomas Sankara Speaks",
       "pages" : 193,
      "chapters": 145,

   },

   {
      "title" : "Africa Must Unite",
       pages : 197,
      "chapters": 225,

   },

   {
      "title" : "Here Is A Tree",
       "pages" : 193,
      "chapters": 593,
      
   },
];






function fetchBooks(title){

    for(let i = 0; i < bookCollection.length; i++){
    ; // logs the complete object for book collection to the console//allows for values to be passed in and be evaluated
      //return bookCollection[i].title


      if(bookCollection[i].title === title){
         return bookCollection[i].title
      }
     

     
     
    
};
};


function fetchBook(chapters){

   for(let i = 0; i < bookCollection.length; i++){
   ; // logs the complete object for book collection to the console//allows for values to be passed in and be evaluated
     //return bookCollection[i].title


     if(bookCollection[i].chapters === chapters){
        return bookCollection[i].chapters
     }
    

    
    
   
};
};

fetchBooks()























 let user = []; 

 function registerUser(){
    
   let userName = document.getElementById("fname").value;
     console.log(userName);
   
   let lastName =document.getElementById("lname").value;
     
   console.log(lastName);
   let phoneNumber = document.getElementById("pnumber").value;
   console.log(phoneNumber);
   let email = document.getElementById("email").value;
   console.log(email);
   let image = document.getElementById("myFile").value;
   console.log(image);

   
    
    
    
   
 }



function verifyUser(){

  let userName = document.getElementById("fname").value;
  console.log(userName);

  let password = document.getElementById("pwd").value;
  console.log(userName);

  if( pwd === ""){
  }

}
console.log(verifyUser());


