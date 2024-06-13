

let btn = document.querySelector(".btn");

btn.addEventListener('keypress', function(e){
    if(e.key ==='Enter'){
        getdata();
    }
})

let getdata = async function(){
    let input = document.querySelector(".sss").value;
    console.log(input);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;

let response = await fetch(url);

console.log(response);

let data = await response.json();
console.log(data);


let paragraph = document.createElement('p');


let meal = data.meals[0];

let alldata = `<p> hello</p>
               <p>Your meal name is ${meal.strMeal}</P>
               <p>Your meal category  is ${meal.strCategory
               }</P>

               <p>The dish is of ${meal.
                strArea}</P>
`

document.write(alldata);


}