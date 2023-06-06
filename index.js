const prompt = require('prompt-sync')();
var array_produto = [];

do {
  console.log("Sistema de Cadastro de Clientes");
  console.log("1 - Inserir Cliente");
  console.log("2 - Excluir Cliente");
  console.log("3 - Listar Clientes");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Cliente...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let sabor = prompt("Digite o sabor: ");
    let embalagem = prompt("Digite o tipo de embalagem: ");
    let quant = prompt("Digite a quantidade: ");
    let dest = prompt("Digite o destino: ");
    

    // Neste trecho estamos declarando um objeto
    const produto = {
      codigo: codigo,
      sabor: sabor,
      embalagem: embalagem,
      dest: dest,
      quant: quant
    }
    // Chamar a função inserir
    inserir_produto(produto);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Cliente...\n");
    let codigo = prompt("Digite o código do cliente: ");
    // Chamar a função excluir
    excluir_produto(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Clientes...\n");
    // Chamar a função listar
    listar_produto();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_produto(produto) {
  // Implementar corpo da função
  array_produto.push(produto);
}

function excluir_produto(codigo) {
  // Implementar corpo da função
  for(var i = 0; i < array_produto.length;i++){
    if(array_produto[i]['codigo'] == codigo){
      array_produto.splice(i,1);
    }
  }
}

function listar_produto() {
  // Implementar corpo da função
for(var i = 0; i < array_produto.length;i++){
    console.log(`${array_produto[i]['codigo']}: ${array_produto[i]['sabor']} - ${array_produto[i]['embalagem']} - ${array_produto[i]['quant']} - ${array_produto[i]['dest']}`);
  }
}


