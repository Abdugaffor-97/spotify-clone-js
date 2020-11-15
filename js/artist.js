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



window.onload = () => {
  const artistId = new URLSearchParams(document.location.search).get(
    "artistId"
  );

  const headers = new Headers({
    "x-rapidapi-key": "8085f2770emshc1cb3109961c5b5p130d8djsn976ae5a2d25d",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  });

  


  
};
