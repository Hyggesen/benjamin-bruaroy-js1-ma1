const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//question 1

var cat = {

    complain: function(){
console.log("Meow!");
}

};

//question 2

let heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//question 3

heading.style = ("font-size: 2em;");


//question 4

heading.className ="subheading";

//question 5

let paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {

    paragraphs[i].style.color = "red";
}

//question 6

let resultsContainer = document.querySelector (".results");

resultsContainer.innerHTML = "<p>New paragraph</p> ";
resultsContainer.style = ("background-color: yellow");

//question 7


function myFunction (list) {

for (i = 0; i < list.length; i++) 
    
    console.log(list[i].name)



}


myFunction(cats);

//question 8

let nameProperty = "";
let ageProperty = "";
let container ="";
let htmlContainer = document.querySelector(".cat-container");



function createCats (cats) {
   
    for (i = 0; i < cats.length; i++) {


        let ageOfCat = cats[i].age;

        if (!ageOfCat) {
            ageOfCat = "Age unknown";
       }

        nameProperty = "<h5>" + cats[i].name + "</h5>";
        ageProperty = "<p>" + ageOfCat + "</p>";
        container += "<div>" + nameProperty + ageProperty + "</div>";
    
        
        htmlContainer.innerHTML = container;

       

    }
return htmlContainer

}

createCats(cats);