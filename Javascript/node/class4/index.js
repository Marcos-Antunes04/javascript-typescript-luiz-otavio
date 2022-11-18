const fs = require('fs').promises;
const path = require ('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath); // fs.stat coleta informações sobre o arquivo

        if(/\.git/g.test(fileFullPath)) continue; //se a pasta tiver .git no caminho da pasta, pula para a próxima iteração do laço
        if(/node_modules/g.test(fileFullPath)) continue; //se a pasta tiver node_modules no caminho da pasta, pula para a próxima iteração do laço

        if(stats.isDirectory()) { // se o arquivo for um diretório(uma pasta)
            readdir(fileFullPath); // então chama novamente a função que entra no diretório p/ listar todos os arquivos de todas as pastas
            continue;
        }

        if(!/\.css$/g.test(fileFullPath)) continue; // se o arquivo não tiver .css incluso, então ele não será exibido no console

        console.log(fileFullPath); // aqui verifica se o arquivo em questão é ou não um diretório(uma pasta)
    }
}

readdir('c:/Users/ramon/Documents/Cursos/javascript-typescript-luiz-otavio/Javascript/');