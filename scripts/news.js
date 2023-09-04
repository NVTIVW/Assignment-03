"use strict";
// variable
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");
const newsContainer = document.getElementById("news-container");

let page = 1;
let country = "us";
// render data if it exist
getDataNews(country, page);

// get data from apinews, then save it to "data"
async function getDataNews(country, page) {
  //try {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${currentUser.catelory}&pageSize=${currentUser.pageSize}&page=${page}&apiKey=008a615f33fb45fa83e8beca6eb71775`
  );
  const data = await res.json();
  //console.log(data.articles[2]);
  // if (data.status == "error") {
  //   throw new Error(data.message);
  // }
  checkBtnNext(data);
  checkBtnPrev();
  renderListNews(data);
  //} catch (err) {
  //   alert(`Error ${err.message}`); // catch error and show it
  // }
}

// function to render news
function renderListNews(data) {
  newsContainer.innerHTML = ""; // claer list
  for (
    let i = 0;
    i < currentUser.pageSize;
    i++ // (const render = data.articles.map((item) =>)
  ) {
    const news = document.createElement("div");
    news.innerHTML = `
    <div class="card flex-row flex-wrap">
        <div class="card mb-3" style="">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${data.articles[i].urlToImage}"
                        class="card-img"
                        alt="${data.articles[i].title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${data.articles[i].title}</h5>
                        <p class="card-text">${data.articles[i].content}</p>
                        <a href="${data.articles[i].url}" target="_blank"
                            class="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    newsContainer.appendChild(news);
  }
}

//  function disable button Previous if nums page is 1
function checkBtnPrev() {
  if (pageNum.textContent == "1") {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }
}

// function disable button Next if over news
function checkBtnNext(data) {
  const total = data.totalResults;
  const totalPage = Math.floor(total / currentUser.pageSize) + 1;
  const currentPage = parseInt(pageNum.textContent);
  //console.log(totalPage, currentPage);
  if (currentPage === totalPage) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
}

// event button Next, change number page to show new news
btnNext.addEventListener("click", function () {
  page += 1;
  pageNum.innerHTML = `${page}`;
  getDataNews(country, page);
});

btnPrev.addEventListener("click", function () {
  page -= 1;
  pageNum.innerHTML = `${page}`;
  getDataNews(country, page);
});
