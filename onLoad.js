document.onload = function () {
  //aqui vem qlq funcao que queira realizar no load da pagina.
}(); // aqui estou inicializando a funcao na propria construcao


/**
 * getFormValues - ta fora do onload pois ela ta sendo chamada dentro do onsubmit do form (linha 22 do html)
 * @param {*} e - event do formulario - isso é passado la na chamada da funcao 
 */
function getFormValues (e) {
  e.preventDefault(); // nao deixa o formulario dar reload na pagina qnd fizer o click do botao
  const formData = new FormData(e.target); // pega todo o form e transforma em objeto de formData para envio
  const nomeCompleto = formData.get('nomecompleto');
  console.log('input', nomeCompleto); // pega o input nomecompleto (obs: isso é a prop name do input)
  //TODO: pegar todos os valores do formulario seguindo esse exemplo de cima.
  //TODO: adicionar a tag name e adicionar o relativo nome (tipo o id) em cada input e pegar aqui da msm forma que a linha 13 
}
