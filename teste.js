const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams"
async function getAllPosts() {
    const response = await fetch(url, {
        method: "GET",
        headers: { "git-user": "lucaverdade" },
    })

    const postContainer = document.querySelector("#posts-container")


    const data = await response.json()

    const TimeToken = data.Result
    //console.log(TimeToken)




    TimeToken.map((post) => {

        const div = document.createElement("div")
        const selecao = document.createElement("times")
        const token = document.createElement("codigo")

        selecao.innerText = post.Name;
        token.innerText = post.Token

        const selecoes = post.Name
        //var grupao = [selecoes]




        console.log(selecoes)

        //for(let i=0; i<=selecoes.length; i++)
        //var grupo1new = selecao[Math.floor(Math.random()*grupo1.length)];


        //aparecer as seleçoes na tela
        //div.appendChild(title)
        //div.appendChild(body)
        //postContainer.appendChild(div);


    })




}
getAllPosts()