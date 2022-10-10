const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";

async function getAllPosts() {
  const response = await fetch(url, {
    method: "GET",
    headers: { "git-user": "lucaverdade" },
  });


  return response.json()
  //const selecoes = await response.json();
  //console.log(selecoes);
}

getAllPosts().then(selecoes => {
    const selecao = selecoes.results
    const grupos = []

    for (let p of selecao){
        grupos.push({
            "Nome" : p.Name ,
            "Token" : p.Token
        })
    }



    console.log(selecoes)
})


