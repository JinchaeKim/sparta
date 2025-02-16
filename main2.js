//1. fetch 함수로 API 불러오기
//2. for문으로 데이터 하나씩 찍어내기
//2-1. Ul태그와 연결하기
//3. 검색 기능 만들기
//3-1. 검색 버튼에 이벤트리스너
//3-2. 데이터 가져오는 함수 / 뿌려주는 함수로 나누기
//4. 필터링 적용하기
//4-1. 버튼을 눌렀을 때, title에 입력한 값이 포함되어 있는지 필터링

const btn = document.querySelector(".btn");
const searchInput = document.querySelector("#searchInput");
const modal = document.querySelector(".modal");
// const close = document.querySelector(".close");
const baseImgUrl = "https://image.tmdb.org/t/p/w500";
const cardSection = document.querySelector(".cards");
const modalSection = document.querySelector(".modal-content");

let postArray = [];
// console.log(postArray); // 빈 배열인 게 맞으며, 지금 수준에서는 확인하기 어려움

function fetchData() {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e48a4be214cf8c1ba48dfde47aef4669&language=ko-KR&page=1"
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (결과) {
      console.log(결과);

      postArray = 결과.results;
      // input : 객체 '결과' 중 results의 값 (배열)
      displayPost(postArray);
    });
}
fetchData();
// input : 결과의 results만 담은 배열
function displayPost(posts) {
  temp_html = "";

  for (let i = 0; i < posts.length; i++) {
    temp_html += `
    <div data-id="${posts[i].id}" class="mvCard">
         <img id="poster" src="${
           baseImgUrl + posts[i].poster_path
         } class="card-img-top alt="poster">
         <p>${posts[i].title}</p>
         <p>평점: ${posts[i].vote_average}<span id="mvaver"></span></p>
    </div>`;
  }
  cardSection.innerHTML = temp_html;
}

btn.addEventListener("click", function () {
  const keyword = searchInput.value;

  const filterPosts = postArray.filter(function (영화) {
    return 영화.title.includes(keyword);
  });
  console.log(filterPosts);
  displayPost(filterPosts);
});

// 모달창 내용 함수
function displayModal(info) {
  temp_modal = `<div data-id="${info.id}" class="modalCard">
         <img id="poster" src="${
           baseImgUrl + info.poster_path
         } class="card-img-top alt="poster">
         <h1>${info.title}</h1>
         <p>${info.overview}</p>
         <h3>평점: ${info.vote_average}<span id="mvaver"></span></h3>
         <span class="close">&times;</span>
         <button class="book">북마크 추가</button>
    </div>`;

  modalSection.innerHTML = "";
  modalSection.insertAdjacentHTML("afterbegin", temp_modal);

  const close = document.querySelector(".close");

  close.addEventListener("click", function (e) {
    console.log(e.target);
    modal.style.display = "none";
    document.body.style.overflow = "scroll";
  });
}

// data-id를 가져오기 (변수 선언)
// postArray의 id와 cardId 비교하기 (find메서드)
cardSection.addEventListener("click", function (e) {
  const mvCard = e.target.closest(".mvCard");
  // console.log(mvCard);
  const cardID = mvCard.getAttribute("data-id");
  console.log(cardID);

  const clickModal = postArray.find(function (postArray) {
    return Number(postArray.id) === Number(cardID);
  });
  console.log(clickModal);
  displayModal(clickModal);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});
