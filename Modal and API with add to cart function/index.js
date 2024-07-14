let url = "https://api.escuelajs.co/api/v1/products";

async function getdata() {
  let response = await fetch(url);
  let data = await response.json();

  data.forEach((e) => {
    let pic = document.querySelector(".pic");
    let alldata = `
      <div class="card pic1" style="width: 18rem;">
        <img src="${e.images}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <h3>${"$ " + e.price}</h3>
          <p class="card-text">${e.description}</p>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-item='${JSON.stringify(
            e
          )}' onclick="display(this)">Go somewhere</button>
        </div>
      </div>
    `;
    pic.innerHTML += alldata;
  });
}

getdata();

function display(d) {
  const item = JSON.parse(d.getAttribute("data-item"));
  document.querySelector("#exampleModalLabel").innerText = item.title;
  document.querySelector("#modal-body").innerHTML = `
    <img src="${item.images}" class="img-fluid" alt="${item.title}">
    <h3>${"$ " + item.price}</h3>
    <p>${item.description}</p>
  `;
}

function cart() {
 
}
