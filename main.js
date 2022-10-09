
fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams',{
    method: 'GET' ,
    headers: {'WWW-Authenticate':'git-user:lucaverdade' ,
        'content-type' : 'aplication/json: charset=utf-8',
        

    }
})
    
.then( resposta => {

   return(resposta.json())
})
.then(body => {
    console.log(body)
})