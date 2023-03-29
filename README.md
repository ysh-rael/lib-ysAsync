# lib-ysAsync
## Bliblioteca javascript usada para suprir as necessidades de async await em versões mais antigas do node.
> Sobre

_lib-ysAsync_ é uma lib criada para suprir a falta do 'await' em funções antigas do node, como a v5.0.0 <br>
Com _lib-ysAsync_ podemos esperar por uma resposta, e a utilizar depois de a receber, como uma promise. A diferença é a posibilidade de dar continuidade no cadeia de _then_ de maneira não sequencial. Um _then_ não precisa necessariamente chamar outro. Ao distanciar um objeto da lib-ysAsync e chamar a propriedade _await_ para receber a nossa resposta, podemos decidir se queremos fazer um tratamento sequencial adicionando novos _then_, ou depois, chamando o mesmo objeto distânciado com a funcionalidade 'then'.

> Exemplo de uso: 
```
var path = __dirname;
const fs = require('fs');
function lerPasta(req, res) {
  var matriz = []
  fs.readdir(path,function(err,file){
    file.forEach(arquivo => matriz.push(arquivo) )
    res.res = matriz
  })
}

const ys = new ysAsync()

ys.await(false, lerPasta).then(resposta => {
  console.log('Essa é a resposta do then 1: ' + resposta)
  return 'retorno  do then 1'
}).then(resposta => {
  console.log('Essa é a resposta do then 2: ' + resposta)
  return 'retorno  do then 2'
})


var variavelForaDoThen = null

ys.then(esse => {
  variavelForaDoThen = esse
  console.log('Essa é a resposta do then 3: ' +  esse)
  return 'retorno  do then 3'
})

ys.then(esse => {
  console.log('Essa é a resposta do then 4: variavel Fora Do Then com valor do then anterior -> ' +  variavelForaDoThen)
})

```
_console_
```
Essa é a resposta do then 1: main.js
Essa é a resposta do then 2: retorno  do then 1
Essa é a resposta do then 3: retorno  do then 2
Essa é a resposta do then 4: variavel Fora Do Then com valor do then anterior -> retorno  do then 2
```

> Detalhes
* Não usa dependência externa.
* Funciona em versões antigas do node(foi feita para isso) mas também serve tranquilamente para as novas.
* Funciona em sistemas de commandjs e módulos.
* Fácil alteração e implementação.
* Licensa: MIT

Essa é uma funcionalidade rústica ainda. Sinta-se a vontade para contribuir.
