//axios await, multiple promises displaying asynchronously

//Await keyword
//


const getData = async () => {

        const char = await axios.get('https://rickandmortyapi.com/api/character')
        const results = char.data.results
                                                                                        // const charEpisode = char.data.results.episode
                                                                                        // const location = await axios.get('https://rickandmortyapi.com/api/location')
                                                                                        // const episode = await axios.get('https://rickandmortyapi.com/api/episode')
        let promiseArray = []
        console.log( results)
        
        for(let i = 0; i < results.length; i++) {
            promiseArray.push(axios.get(results[i].location.url))
                                                                                                // characterData(char)
                                                                                                // locationData(location)
          }
                                                                                                // for(let i = 0; i < charEpisode.length; i++) {
                                                                                                //     promiseArray.push(axios.get(charEpisode[i]))
                                                                                                // }
    
    Promise.all(promiseArray)
    .then(res => {
    console.log("PromiseAll response", res)
    for (var i = 0; i < res.length; i++){
        // console.log(results)
        results[i].location = res[i].data
    }
})
    .catch(err => console.log(err))

console.log("Results ",results)
characterData(results)
}

getData()

const characterData = (char) => {
    console.log(char)
    for (let i =0; i < char.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = char[i].name + char[i].location.name
        if (char[i].location.dimension){
            
            h1.textContent += (char[i].location.dimension)
        }
        console.log(char[i].location.dimension)
        document.body.appendChild(h1)
     }
}









// const locationData = (location) => {
    
//     for (let i =0; i < location.data.results.length; i++) {
//         const h2 = document.createElement('h2')
//         h2.textContent = location.data.results[i].name
//         document.body.appendChild(h2)
//      }
// }



// axios.get('https://rickandmortyapi.com/api')
// .then(res => {
//     // console.log(res.data)
//     const char = res.data.characters
//     console.log(char)
//     axios.get(char)
// })
// .then(res => axios.get( res.data.character[0]))
// .then(console.log(res => res.data))
// .catch(err => console.log(err))