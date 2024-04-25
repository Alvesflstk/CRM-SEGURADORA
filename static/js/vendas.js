const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});


function endModal(){
  alert('todos os dados preenchidos serão perdidos')

  document.getElementById('nameCliente').value = '';
  document.getElementById('nameVendedor').value = '';
  document.getElementById('planoOption').selectedIndex = 0;;
  document.getElementById('horarioVenda').value = '';

}


