//arquivo de fazer requisicao,
//colocamos aqui todas as funcoes relacionadas ao fetch

//busco no end point o json para objeto javascript.
//json e um arquivo de texto simples e a funcao json transforma em js

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

//abaixo: faco um objeto, que tera duas funcoes, e ele eu exporto 
//fica mais facil de enxergar a exportacao.
//API, nao e so requisicao, API e um arquivo, site libera para os outros acessarem, como faz para acessar as coisas dentro do arquivo
    // API publica desse arquivo
    const http = {
        getAll,
        getOne
    } 
    export default http
    