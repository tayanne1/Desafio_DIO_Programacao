const pokemonList = [
    { name: "POOCHYENA", level: 2, gender: "M", hp: 13, maxHp: 13 },
    { name: "ZIGZAGOON", level: 2, gender: "F", hp: 13, maxHp: 13 },
    { name: "DRAGONITE", level: 5, gender: "M", hp: 25, maxHp: 25 },
    { name: "DRAGONITE", level: 5, gender: "F", hp: 21, maxHp: 21 },
    { name: "DRAGONITE", level: 5, gender: "F", hp: 21, maxHp: 21 },
    { name: "POOCHYENA", level: 8, gender: "F", hp: 15, maxHp: 15 },
    { name: "WURMPLE", level: 2, gender: "M", hp: 7, maxHp: 10 },
  ];
  
  pokemonList.forEach(pokemon => {
    console.log(`Nome: ${pokemon.name}, Level: ${pokemon.level}, Gênero: ${pokemon.gender}, HP: ${pokemon.hp}, MaxHP: ${pokemon.maxHp} - Cadastrado com sucesso`);
  });
  