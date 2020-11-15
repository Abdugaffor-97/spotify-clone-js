const getAlbumCard = function (song) {
  return `
    <div class="col text-center px-0 my-3" id=${song.id}>
      <a href="album.html?id=${song.album.id}"> <img class="img-fluid" src=${song.album.cover_medium} alt="img of ${song.artist.name}"/></a>
        <p> <a href="album.html?id=${song.album.id}">Album: "${song.album.title}"</a>
        <br>
        <a href="/artist.html?artistId=${song.artist.id}">Artist: "${song.artist.name}"</a>
        </p>
    </div>
  `;
};

const headers = new Headers({
  "x-rapidapi-key": "8085f2770emshc1cb3109961c5b5p130d8djsn976ae5a2d25d",
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
});

const search = (query = "metallica") => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query, {
    method: "GET",
    headers,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((jsonData) => jsonData.data)
    .then((songs) => {
      document.querySelector("#results > h2").innerText = query.toUpperCase();
      const row = document.querySelector("#results > .row");

      row.innerHTML = "";

      songs.forEach((song) => {
        const col = document.createElement("div");
        col.className = "col";
        col.id = song.id;
        col.innerHTML += getAlbumCard(song);
        col.onclick = () => setPlayerSong(song);
        row.appendChild(col);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

window.onload = function () {
  search();
};
