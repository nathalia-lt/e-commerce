


async function getAll(url) {
    // fetch(parametro1, parametro2)
    // fetchs(string endpoint, object options)
    // fetch('endereco do api', {} )
    // fetch('endereco do api', { method: 'GET', headers: {}, ... outras opcoes}) })
        
            const response = await fetch(url)
            //console.log(response);
            const data = await response.json();
            return data
    }
    
    async function getOne(url, id) {
        const response = await fetch(`${url}/${id}`)
        //console.log(response);
        const data = await response.json();
        //console.log(categories);
        return data
    }

    // API
    const http = {
        getAll,
        getOne
    }

    
    export default http
    