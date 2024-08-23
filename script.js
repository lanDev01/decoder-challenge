const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector("#message");

function criptografar() {
  document.getElementById('semMensagem').style.display = "none";

  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  let stringEncriptada = textArea.value.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  document.getElementById('textoTradutor').style.display = "flex";
  mensagem.textContent = stringEncriptada;
  textArea.value = "";
}

function descriptografar() {
  document.getElementById('semMensagem').style.display = "none";

  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  let stringDescriptada = textArea.value.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptada.includes(matrizCodigo[i][1])) {
      stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  document.getElementById('textoTradutor').style.display = "flex";
  mensagem.textContent = stringDescriptada;
  textArea.value = "";
}

function copiar() {
  const textoCopiado = document.querySelector('#message');
  const range = document.createRange();
  range.selectNodeContents(textoCopiado);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand('copy');
    // alert('Texto copiado para a área de transferência!'); 
  } catch (err) {
    console.error('Falha ao copiar: ', err);
  }
}
