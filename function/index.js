const path = require('path');
const fn = require('./function');
const caminho = path.join(__dirname,'..','legendas', 'legend')


fn.lerDiretorio(caminho).then(
arquivos=>fn.elementosTerminados(
arquivos,'.srt'))
.then(arquivosSrt=>fn.lerArquivos(arquivosSrt))
.then(console.log)