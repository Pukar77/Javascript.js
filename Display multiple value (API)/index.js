


let url = "https://www.themealdb.com/api/json/v1/1/categories.php";

let getdata = async function(){
    let response = await fetch(url);
    console.log(response.status);
1
    let data = await response.json();
    console.log(data);

    let content="";

data.categories.forEach(e => {
     content = `<p> ${e.strCategory}  </p>`; 
});

document.write(content);


}