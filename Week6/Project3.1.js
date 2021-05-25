const getData = async () => {

    const char = await axios.get('https://rickandmortyapi.com/api/character')
    const episode = await axios.get('https://rickandmortyapi.com/api/episode')
    const episode2 = await axios.get(episode.data.info.next)
    const episode3 = await axios.get(episode2.data.info.next)
    const results = char.data.results

    var episodeData = episode.data.results.concat(episode2.data.results, episode3.data.results)

    characterData(results, episodeData)
}




const characterData = (char, episode) => {
    for (let i =0; i < char.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = 'Character: ' + char[i].name 
        document.body.appendChild(h1)
        
        
        var ol = document.createElement('ol')
        h1.appendChild(ol)
        
        const li = document.createElement('li')
        li.textContent = 'Featured in Episodes: '
        li.style.listStyle = 'none'
        li.style.fontSize = '32px'
        ol.appendChild(li)

     for(let j =0; j < char[i].episode.length; j++) {
        
        for(let l =0; l < episode.length; l++) {

            if(char[i].episode[j]){
                var charEp = Number(char[i].episode[j].split('/')[5])
                
                if(charEp === episode[l].id){
                    const li = document.createElement('li')
                    li.textContent = episode[l].name 
                    ol.appendChild(li)
                }
            }
        }
     }}
}

getData()