
let btn = document.querySelector(".btn");
let input= document.querySelector(".haha").value;

let url = `https://api.unsplash.com/search/photos?query=${input}=&client_id=RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw `;


let getdata = async ()=>{
    let response = await fetch(url);
    console.log(response.status);
    let data = await response.json();
    console.log(data);

    let alldata = data.results;

    let contect ="";




alldata.forEach(element => {
    contect+= `<img src=${element.urls.full} height = "150px" width = "300px"> 
`
});


document.write(contect);
}


// getdata();
