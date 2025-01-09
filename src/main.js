const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDhhNGJlMjE0Y2Y4YzFiYTQ4ZGZkZTQ3YWVmNDY2OSIsIm5iZiI6MTczNjMwMDI1NC45MzEsInN1YiI6IjY3N2RkNmRlNTVhNzljNzYzMDdhZjY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.niSyBvlTT4g2Bcj8UuJjabJ0zIxfod7ymMKsl9WFgY8",
  },
};

//fetch(url, 옵션 객체) -> promise 타입의 객체를 반환(return)
fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=e48a4be214cf8c1ba48dfde47aef4669&language=ko-KR&page=1",
  options
)
  .then((res) => res.json()) //가지고 오면 json에 요청
  .then((res) => console.log(res)) //resolve
  .catch((err) => console.error(err)); //reject

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

function popularMovie() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=e48a4be214cf8c1ba48dfde47aef4669&language=ko-KR&page=1";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let rows = data["results"];
      rows.forEach((a) => {
        let mvPoster = a["poster_path"];
        let title = a["title"];
        let vote_aver = a["vote_average"];
        let img = document.querySelector("#poster");

        //temp_html에서 같은 내용을 반복하니 주석 처리.
        // img.src = baseImgUrl + mvPoster;    ----> 이미지의 링크는 http://~ + 각 이미지의 주소
        // document.querySelector("#mvtitle").textContent = a["title"];    ----> '영화 제목' 자리에는 api의 title 값이 들어간다.
        // document.querySelector("#mvaver").textContent = a["vote_average"];    ----> '영화 평점' 자리에는 api의 vote_average 값이 들어간다.

        const cardSection = document.querySelector(".Cards");
        console.log(cardSection);

        let temp_html = `
        <div id="movieCard" class="mvCard">
            <img id="poster" src="${
              baseImgUrl + mvPoster
            }" class="card-img-top" alt="poster">
            <p id="mvtitle" class="main_title">${title}</p>
            <p>평점: ${vote_aver}<span id="mvaver"></span></p>
        </div>`;

        //cardSection의 값(문자열)에 temp_html을 계속해서 더한다.
        cardSection.innerHTML += temp_html;
      });
    });
}
popularMovie();
