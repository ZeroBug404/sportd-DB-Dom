document.getElementById('search-btn').addEventListener('click', () => {
    const searchText = document.getElementById('search-box').value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlayer(data.player))
})

const displayPlayer = (data) => {
    // console.log(data);
    const playerContainer = document.getElementById('player-container');
    data.forEach(players => {
        console.log(players);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class='card border p-5'>
        <img src="${players.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">Name: ${players.strPlayer}</h2>
          <h5 class="card-title">Country: ${players.strNationality}</h5>
        </div>
        <div class="all-button">
            <button  class='btn btn-primary'>Delete</button>
            <button onclick = "details('${players.idPlayer}')" class='btn btn-success'>Details</button>
        </div>
        `;
        playerContainer.appendChild(div);
    });
}

const details = (id) => {
    // console.log(id);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => setDeatails(data.players[0]))
}

const setDeatails = (info) => {
    console.log(info);
    document.getElementById('details-container').innerHTML = `
    <h1>Name: ${info.strPlayer}</h1>
    `;
}