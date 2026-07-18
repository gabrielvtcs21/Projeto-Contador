function contar () {
let Inicio = document.getElementById('txti')
let Fim = document.getElementById('txtf')
let Passo = document.getElementById('txtp')
let res = document.getElementById('res')
if (Inicio.value.length == 0 || Fim.value.length == 0 || Passo.value.length == 0){
  res.innerHTML = 'Impossível contar'
} else {
  res.innerHTML = 'Contando: '
  let ini = Number(Inicio.value)
  let fim2 = Number(Fim.value)
  let pas = Number(Passo.value)
  if(pas <=0) {
    alert ('Passo inválido, considerando passo 1')
  }
  pas = 1
  if  (ini < fim2) {
  for (let c = ini; c <=fim2; c += pas)
    res.innerHTML += `${c} \u{1F449}`
} else {
  for (let c = ini; c >=fim2; c -= pas)
    res.innerHTML += `${c} \u{1F449}`
}
}
}