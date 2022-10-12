const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";
async function getAllPosts() {
  const response = await fetch(url, {
    method: "GET",
    headers: { "git-user": "lucaverdade" },
  });

  const postContainer = document.querySelector("#posts-container");

  const data = await response.json();

  const TimeToken = data.Result;
  //console.log(TimeToken)

  TimeToken.map((post) => {
    const div = document.createElement("div");
    const selecao = document.createElement("times");
    const token = document.createElement("codigo");
    //const grupo = document.createElement("grupoA")
    const selecoes = post.Name;

    const pickGrupo = (selecao) => selecao[Math.floor(Math.random() * 32)];
    const grupo1 = pickGrupo([selecao]);

    //selecao.innerText = post.Name;
    //token.innerText = post.Token;
    

    console.log(selecoes)
   

    //for(let i=0; i<=selecoes.length; i++)
    //var grupo1new = selecao[Math.floor(Math.random()*grupo1.length)];

    
    div.appendChild(selecao)
    //div.appendChild(grupo1)
    postContainer.appendChild(div);


  });
}
getAllPosts();
