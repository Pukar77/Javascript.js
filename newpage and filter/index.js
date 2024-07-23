let alldata = [];
let cat = [];
let filterdata2 = [];

async function getdata() {
  let response = await fetch("data.json");
  let data = await response.json();
  console.log(data);
  alldata = data;

  let showcat = document.querySelector(".showcat");
  data.forEach((element) => {
    if (!cat.includes(`${element.city}`)) {
      cat.push(`${element.city}`);
      showcat.innerHTML += `
      <input type="radio" name="place" value="${element.city}" onclick="showcat()">${element.city}
      `;
    }
  });

  console.log(cat);
  display(data);
}

function display(data) {
  let content = "";
  let photo = document.querySelector(".photo");
  data.forEach((element, index) => {
    content += `
    <div class="card" style="width: 18rem;">
      <img src="${element.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-para">${element.name}</h5>
        <p class="card-text">${element.description}</p>
        <a href="#" class="btn btn-primary" onclick="nextpage(event, ${index})">Go somewhere</a>
      </div>
    </div>
    `;
  });
  photo.innerHTML = content;
}

function nextpage(event, index) {
  let item = alldata[index];
  localStorage.setItem("itemname", JSON.stringify(item));
  window.open("newpage.html");
}

getdata();

function showcat() {
  let checkbtn = document.querySelectorAll("input[name='place']");
  let filterdata = [];
  checkbtn.forEach((element) => {
    if (element.checked) {
      filterdata.push(element.value);
      console.log(element.value);
    }
  });

  if (filterdata.length === 0) {
    filterdata2 = alldata;
  } else {
    filterdata2 = alldata.filter((element) => {
      return filterdata.includes(element.city);
    });
  }

  display(filterdata2);
}
