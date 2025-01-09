const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDhhNGJlMjE0Y2Y4YzFiYTQ4ZGZkZTQ3YWVmNDY2OSIsIm5iZiI6MTczNjMwMDI1NC45MzEsInN1YiI6IjY3N2RkNmRlNTVhNzljNzYzMDdhZjY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.niSyBvlTT4g2Bcj8UuJjabJ0zIxfod7ymMKsl9WFgY8'
    }
  };
  
  //fetch(url, 옵션 객체) -> promise 타입의 객체를 반환(return)
  fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
    .then(res => res.json()) //가지고 오면 json에 요청
    .then(res => console.log(res)) //resolve
    .catch(err => console.error(err)); //reject


    let url = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
        fetch(url).then(res => res.json()).then(data => {
        //     let mise = data['RealtimeCityAir']['row'][0]['IDEX_NM'];
        //     $('#msg').text(mise);
        // })

        // let docs = await getDocs(collection(db, "albums"));
        // docs.forEach((doc) => {
        //     let row = doc.data();

        //     let image = row['image'];
        //     let title = row['title'];
        //     let content = row['content'];
        //     let date = row['date'];
        });