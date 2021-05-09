const button = document.getElementById('btn')

button.onClick = () => {
    axios.get('http://api.bryanuniversity.edu/amber-freeman/list/')
        .then(response => console.log(response))
        .catch(error => console.log(error))
}

// TROUBLE getting data at all. 