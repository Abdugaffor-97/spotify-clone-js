const getTrackList = (song) => {
  return `
  <div class="d-flex justify-content-between rounded pt-3 pb-2 mx-3 trackHover">
    <a
      href="#" class="card-title trackHover px-3" style="color: white;">${
        song.title
      }</a>

    <div>
      <i class="far fa-heart text-white"></i>
      <span class="duration pr-3 text-white-50">
      ${
        ("0" + Math.floor(song.duration / 60)).substr(-2) +
        " : " +
        ("0" + (song.duration % 60)).substr(-2)
      }
      </span>
    </div>
  </div>
  `;
};

window.onscroll = function () {
  // if (window.scrollY >= navbarTop)
  console.log("scrolling");
  const nav = document.querySelector("nav.navbar");
  if (window.scrollY > "50") {
    // console.log(nav);
    nav.classList.add("on-scroll");
  } else {
    nav.classList.remove("on-scroll");
  }
};

window.onload = async () => {
  const albumId = new URLSearchParams(window.location.search).get("id");
  const url = "https://deezerdevs-deezer.p.rapidapi.com/album/" + albumId;
  const headers = new Headers({
    "x-rapidapi-key": "8085f2770emshc1cb3109961c5b5p130d8djsn976ae5a2d25d",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  });
  let album = null;

  try {
    const request = await fetch(url, {
      mathod: "GET",
      headers,
    });
    album = await request.json();
    // console.log(album);
  } catch (error) {
    console.log(error);
  }

  document.querySelector("small").innerText = album.type.toUpperCase();
  document.querySelector("h1").innerText = album.title;
  document.querySelector("#user-img").src = album.cover;
  document.querySelector("h5").innerText = album.label;

  const tracks = album.tracks.data;
  tracks.forEach((song, index) => {
    // console.log(song);
    const div = document.createElement("div");
    div.innerHTML += getTrackList(song);
    // document.querySelector("#tracklist").innerHTML
    div.onclick = () => {
      setPlayerSong({
        album: {
          cover: album.cover,
          title: album.title,
        },
        id: song.id,
        title: song.title,
        duration: song.duration,
        preview: song.preview,
      });
    };
    document.querySelector("#tracklist").appendChild(div);
  });
};
