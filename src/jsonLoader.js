import norma from './inputs/normas.json'
let EmendaConstitucional = class EmendaConstitucional {

}

export const consoleLogTest = () => {
    console.log("aaa")
}

export const mountDataJson = () => {

    // console.log(norma)
    // console.log(norma.name)
    //console.log(norma.legislationAmends)

    let nodeJson = [];
    let node = {};
    node = {
        "data": {
            "id": "E1",
            "idInt": 1,
            "name": norma.name,
            "query": true,
            "classes": "Emenda Constitucional",
            "score": 1
        },
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbable": true
    };
    nodeJson.push(node);

    for (var i = 0; i < norma.legislationAmends.length; i++) {
        let legs = {}
        let edge = {}
        const name = "L" + String(i)
        const edgeName =  "EDGE" + String(i)
        let legsName = norma.legislationAmends[i]['@id'].split("!")[1]
        if (typeof legsName !== 'undefined' && legsName !== null) {
            legs = {
                "data": {
                    "id": name,
                    "idInt": i + 1,
                    "name": legsName,
                    "query": true,
                    "classes": "Artigo",
                    "score": 1
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true
            }
            
            nodeJson.push(legs);

            edge = {
                "data": {
                  "source": "E1",
                  "target": name,
                  "directed": true,
                  "intn": true,
                  "rIntnId": i + 1,
                  "id": edgeName
                },
                "position": {
                  
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "directed": true
              }

            
        }
        else{
            legs = {
                "data": {
                    "id": name,
                    "idInt": i + 1,
                    "name": norma.legislationAmends[i].name,
                    "query": true,
                    "classes": "Artigo",
                    "score": 1
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true
            }
            
            nodeJson.push(legs);

            edge = {
                "data": {
                  "source": "E1",
                  "target": name,
                  "directed": true,
                  "intn": true,
                  "rIntnId": i + 1,
                  "id": edgeName
                },
                "position": {
                  
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "directed": true
              }

        }

        nodeJson.push(edge); 
    }

    const resultJson = JSON.stringify(nodeJson)
    console.log(nodeJson)
    return nodeJson

    /*
    lê json da norma
    faz parsing de dados importantes, leia-se
    primeiro: nome (este é o nó primário)
    depois, lê relacionamentos (array legislationAmends)
    monta json do cytoscape a partir disso

    SENDO MAIS ESPECÍFICO:
    pega a lista. Se não tem nome, corta a string para dar um parse do que é. Cria nó de paragrafo,art
    Se tem nome, faz parse no nome e idem.
    Seria algo assim:

    Emenda ----> Paragrafo -----> Artigo.
    Porém isso vai dar mais um pouco de trabalho
    */

}