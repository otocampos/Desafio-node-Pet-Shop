let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "labrador",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Costelinha",
    tipo: "cão",
    raca: "vira-lata",
    idade: 10,
    genero: "M",
    vacinado: true,
    servicos: ["banho"]
  },
  {
    nome: "Scooby Doo",
    tipo: "cão",
    raca: "Dogue Alemão",
    idade: 51,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "poodle",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["corte de unha"]
  },
  {
    nome: "Ada",
    tipo: "iguana",
    raca: "albina",
    idade: 5,
    genero: "F",
    vacinado: true,
    servicos: ["banho"]
  }
];
const listarPets = () => {
  let conteudo = "";
  for (let pet of pets) {
    conteudo += `
    -----------
    Nome: ${pet.nome}
    -----------`;
  }

  return conteudo;
};

const adicionarPet = novoPet => {
  return pets.push(novoPet);
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome == nomePet);

  return petsEncontrados;
};


const buscaPetPeloNome=nomePetBusca=>{
  index = pets.findIndex(pet => pet.nome ===nomePetBusca);
return pets[index];

} 

const vacinarPet = nomePetBusca => {
pet = buscaPetPeloNome(nomePetBusca)
  if (!pet.vacinado) {
    pet.vacinado.vacinado = true;
    return `${pet.nome} foi vacinado com sucesso!`
  } else{
  return `Ops, ${pet.nome} já está vacinado!`
  }
};

const campanhaVacina = () => {


  let petVacinadosCampanha = 0;
  for (let pet of pets) {
    if (!pet.vacinado) {
      vacinarPet(pet.nome);
      petVacinadosCampanha++;
    }
  }
  return`${petVacinadosCampanha} pets foram vacinados nessa campanha!`;
};

const darBanhoPet = nomePetBusca => {
 let pet=buscaPetPeloNome(nomePetBusca)
  pet.servicos.push("banho");
  return `${pet.nome} está de banho tomado!`
};


const tosarPet = nomePetBusca => {
  let pet = buscaPetPeloNome(nomePetBusca)
  pet.servicos.push("tosa");
  return `${pet.nome} está com cabelinho na régua :)`
};

const apararUnhasPet = nomePetBusca => {
  let pet = buscaPetPeloNome(nomePetBusca)
  pet.servicos.push("corte de unhas");
  return `${pet.nome} está de unhas aparadas!`
};


const atenderPet = (nomePet, servicos) => {
  let pet = buscaPetPeloNome(nomePet)
  pet.servicos.push(servicos);  
return `Os serviços realizados no amiguinho ${nomePet} foram: ${servicos.join()}\n
${pagar()}`
}



const pagar = () => {
  return "Pagamento realizado com sucesso!"
};




module.exports = { listarPets, adicionarPet, buscarPet, vacinarPet,campanhaVacina,atenderPet };
