const path = require('path')
const fs = require('fs')

function lerDiretorio(caminho){
    return new Promise((resolve,reject) =>{
        try {
            let arquivos  = fs.readdirSync(caminho)
            arquivos.map(arquivos=>path.join(caminho,arquivos))
            resolve(arquivos)
        } catch (error) {
            reject(error)
        }
      
})
}

function elementosTerminados(array,padrao){
    return array.filter(el=>el.endsWith(padrao))
}
function lerArquivo(caminho){
   return new Promise((resolve,reject)=>{
    try {
        const conteudo =  fs.readFileSync(caminho,{encoding:'utf-8'})
        resolve(conteudo.toString())
    } catch (error) {
        reject(error)
    }
    
   })
}
function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho=>lerArquivo(caminho)))
}
module.exports={
    lerDiretorio,
    lerArquivos,
    elementosTerminados
}