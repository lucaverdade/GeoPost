fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams'{
    method: "GET",
    headers: {"git-user:lucaverdade"}

})

.then( resposta => {

    console.log (resposta.json())
})