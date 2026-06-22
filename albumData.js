// Banco de dados estatico do Album da Copa do Mundo 2026 (Panini)
const albumGroups = {
  "Grupo A": [
    {
      "name": "Estados Unidos",
      "code": "USA",
      "flag": "us"
    },
    {
      "name": "Uruguai",
      "code": "URU",
      "flag": "uy"
    },
    {
      "name": "Gana",
      "code": "GHA",
      "flag": "gh"
    },
    {
      "name": "Escócia",
      "code": "SCO",
      "flag": "gb-sct"
    }
  ],
  "Grupo B": [
    {
      "name": "México",
      "code": "MEX",
      "flag": "mx"
    },
    {
      "name": "Equador",
      "code": "ECU",
      "flag": "ec"
    },
    {
      "name": "Nigéria",
      "code": "NGA",
      "flag": "ng"
    },
    {
      "name": "Polônia",
      "code": "POL",
      "flag": "pl"
    }
  ],
  "Grupo C": [
    {
      "name": "Canadá",
      "code": "CAN",
      "flag": "ca"
    },
    {
      "name": "Peru",
      "code": "PER",
      "flag": "pe"
    },
    {
      "name": "Marrocos",
      "code": "MAR",
      "flag": "ma"
    },
    {
      "name": "Suécia",
      "code": "SWE",
      "flag": "se"
    }
  ],
  "Grupo D": [
    {
      "name": "Brasil",
      "code": "BRA",
      "flag": "br"
    },
    {
      "name": "Colômbia",
      "code": "COL",
      "flag": "co"
    },
    {
      "name": "Egito",
      "code": "EGY",
      "flag": "eg"
    },
    {
      "name": "Ucrânia",
      "code": "UKR",
      "flag": "ua"
    }
  ],
  "Grupo E": [
    {
      "name": "Argentina",
      "code": "ARG",
      "flag": "ar"
    },
    {
      "name": "Chile",
      "code": "CHI",
      "flag": "cl"
    },
    {
      "name": "Senegal",
      "code": "SEN",
      "flag": "sn"
    },
    {
      "name": "País de Gales",
      "code": "WAL",
      "flag": "gb-wls"
    }
  ],
  "Grupo F": [
    {
      "name": "França",
      "code": "FRA",
      "flag": "fr"
    },
    {
      "name": "Paraguai",
      "code": "PAR",
      "flag": "py"
    },
    {
      "name": "Argélia",
      "code": "ALG",
      "flag": "dz"
    },
    {
      "name": "Áustria",
      "code": "AUT",
      "flag": "at"
    }
  ],
  "Grupo G": [
    {
      "name": "Espanha",
      "code": "ESP",
      "flag": "es"
    },
    {
      "name": "Costa Rica",
      "code": "CRC",
      "flag": "cr"
    },
    {
      "name": "Camarões",
      "code": "CMR",
      "flag": "cm"
    },
    {
      "name": "Turquia",
      "code": "TUR",
      "flag": "tr"
    }
  ],
  "Grupo H": [
    {
      "name": "Inglaterra",
      "code": "ENG",
      "flag": "gb-eng"
    },
    {
      "name": "Jamaica",
      "code": "JAM",
      "flag": "jm"
    },
    {
      "name": "Tunísia",
      "code": "TUN",
      "flag": "tn"
    },
    {
      "name": "República Checa",
      "code": "CZE",
      "flag": "cz"
    }
  ],
  "Grupo I": [
    {
      "name": "Itália",
      "code": "ITA",
      "flag": "it"
    },
    {
      "name": "Panamá",
      "code": "PAN",
      "flag": "pa"
    },
    {
      "name": "Mali",
      "code": "MLI",
      "flag": "ml"
    },
    {
      "name": "Dinamarca",
      "code": "DEN",
      "flag": "dk"
    }
  ],
  "Grupo J": [
    {
      "name": "Alemanha",
      "code": "GER",
      "flag": "de"
    },
    {
      "name": "Honduras",
      "code": "HON",
      "flag": "hn"
    },
    {
      "name": "Coreia do Sul",
      "code": "KOR",
      "flag": "kr"
    },
    {
      "name": "Romênia",
      "code": "ROU",
      "flag": "ro"
    }
  ],
  "Grupo K": [
    {
      "name": "Portugal",
      "code": "POR",
      "flag": "pt"
    },
    {
      "name": "Arábia Saudita",
      "code": "KSA",
      "flag": "sa"
    },
    {
      "name": "Costa do Marfim",
      "code": "CIV",
      "flag": "ci"
    },
    {
      "name": "Suíça",
      "code": "SUI",
      "flag": "ch"
    }
  ],
  "Grupo L": [
    {
      "name": "Holanda",
      "code": "NED",
      "flag": "nl"
    },
    {
      "name": "Japão",
      "code": "JPN",
      "flag": "jp"
    },
    {
      "name": "Austrália",
      "code": "AUS",
      "flag": "au"
    },
    {
      "name": "Croácia",
      "code": "CRO",
      "flag": "hr"
    }
  ]
};

const albumStickers = [
  {
    "id": "FWC-0",
    "code": "FWC",
    "number": 0,
    "name": "Logo da Copa 2026",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-1",
    "code": "FWC",
    "number": 1,
    "name": "Mascote Oficial",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-2",
    "code": "FWC",
    "number": 2,
    "name": "Troféu da Copa do Mundo",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-3",
    "code": "FWC",
    "number": 3,
    "name": "Pôster Oficial",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-4",
    "code": "FWC",
    "number": 4,
    "name": "Estádio 1",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-5",
    "code": "FWC",
    "number": 5,
    "name": "Estádio 2",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-6",
    "code": "FWC",
    "number": 6,
    "name": "Estádio 3",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-7",
    "code": "FWC",
    "number": 7,
    "name": "Estádio 4",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-8",
    "code": "FWC",
    "number": 8,
    "name": "Estádio 5",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-9",
    "code": "FWC",
    "number": 9,
    "name": "Estádio 6",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-10",
    "code": "FWC",
    "number": 10,
    "name": "Estádio 7",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-11",
    "code": "FWC",
    "number": 11,
    "name": "Estádio 8",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-12",
    "code": "FWC",
    "number": 12,
    "name": "Estádio 9",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-13",
    "code": "FWC",
    "number": 13,
    "name": "Estádio 10",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-14",
    "code": "FWC",
    "number": 14,
    "name": "Estádio 11",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-15",
    "code": "FWC",
    "number": 15,
    "name": "Estádio 12",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-16",
    "code": "FWC",
    "number": 16,
    "name": "Especial FWC 16",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-17",
    "code": "FWC",
    "number": 17,
    "name": "Especial FWC 17",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-18",
    "code": "FWC",
    "number": 18,
    "name": "Especial FWC 18",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-19",
    "code": "FWC",
    "number": 19,
    "name": "Especial FWC 19",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "USA-1",
    "code": "USA",
    "number": 1,
    "name": "Escudo - Estados Unidos",
    "position": "Escudo",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-2",
    "code": "USA",
    "number": 2,
    "name": "Matt Turner",
    "position": "Goleiro",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-3",
    "code": "USA",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-4",
    "code": "USA",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-5",
    "code": "USA",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-6",
    "code": "USA",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-7",
    "code": "USA",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-8",
    "code": "USA",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-9",
    "code": "USA",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-10",
    "code": "USA",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-11",
    "code": "USA",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-12",
    "code": "USA",
    "number": 12,
    "name": "Christian Pulisic",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-13",
    "code": "USA",
    "number": 13,
    "name": "Weston McKennie",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-14",
    "code": "USA",
    "number": 14,
    "name": "Timothy Weah",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-15",
    "code": "USA",
    "number": 15,
    "name": "Folarin Balogun",
    "position": "Atacante",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-16",
    "code": "USA",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-17",
    "code": "USA",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-18",
    "code": "USA",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-19",
    "code": "USA",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "URU-1",
    "code": "URU",
    "number": 1,
    "name": "Escudo - Uruguai",
    "position": "Escudo",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-2",
    "code": "URU",
    "number": 2,
    "name": "Rochet",
    "position": "Goleiro",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-3",
    "code": "URU",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-4",
    "code": "URU",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-5",
    "code": "URU",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-6",
    "code": "URU",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-7",
    "code": "URU",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-8",
    "code": "URU",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-9",
    "code": "URU",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-10",
    "code": "URU",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-11",
    "code": "URU",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-12",
    "code": "URU",
    "number": 12,
    "name": "Federico Valverde",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-13",
    "code": "URU",
    "number": 13,
    "name": "Darwin Núñez",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-14",
    "code": "URU",
    "number": 14,
    "name": "Luis Suárez",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-15",
    "code": "URU",
    "number": 15,
    "name": "De Arrascaeta",
    "position": "Atacante",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-16",
    "code": "URU",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-17",
    "code": "URU",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-18",
    "code": "URU",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "URU-19",
    "code": "URU",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo A"
  },
  {
    "id": "GHA-1",
    "code": "GHA",
    "number": 1,
    "name": "Escudo - Gana",
    "position": "Escudo",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-2",
    "code": "GHA",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-3",
    "code": "GHA",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-4",
    "code": "GHA",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-5",
    "code": "GHA",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-6",
    "code": "GHA",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-7",
    "code": "GHA",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-8",
    "code": "GHA",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-9",
    "code": "GHA",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-10",
    "code": "GHA",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-11",
    "code": "GHA",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-12",
    "code": "GHA",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-13",
    "code": "GHA",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-14",
    "code": "GHA",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-15",
    "code": "GHA",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-16",
    "code": "GHA",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-17",
    "code": "GHA",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-18",
    "code": "GHA",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "GHA-19",
    "code": "GHA",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Gana",
    "flag": "gh",
    "group": "Grupo A"
  },
  {
    "id": "SCO-1",
    "code": "SCO",
    "number": 1,
    "name": "Escudo - Escócia",
    "position": "Escudo",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-2",
    "code": "SCO",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-3",
    "code": "SCO",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-4",
    "code": "SCO",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-5",
    "code": "SCO",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-6",
    "code": "SCO",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-7",
    "code": "SCO",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-8",
    "code": "SCO",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-9",
    "code": "SCO",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-10",
    "code": "SCO",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-11",
    "code": "SCO",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-12",
    "code": "SCO",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-13",
    "code": "SCO",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-14",
    "code": "SCO",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-15",
    "code": "SCO",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-16",
    "code": "SCO",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-17",
    "code": "SCO",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-18",
    "code": "SCO",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "SCO-19",
    "code": "SCO",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo A"
  },
  {
    "id": "MEX-1",
    "code": "MEX",
    "number": 1,
    "name": "Escudo - México",
    "position": "Escudo",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-2",
    "code": "MEX",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-3",
    "code": "MEX",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-4",
    "code": "MEX",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-5",
    "code": "MEX",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-6",
    "code": "MEX",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-7",
    "code": "MEX",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-8",
    "code": "MEX",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-9",
    "code": "MEX",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-10",
    "code": "MEX",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-11",
    "code": "MEX",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-12",
    "code": "MEX",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-13",
    "code": "MEX",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-14",
    "code": "MEX",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-15",
    "code": "MEX",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-16",
    "code": "MEX",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-17",
    "code": "MEX",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-18",
    "code": "MEX",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "MEX-19",
    "code": "MEX",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo B"
  },
  {
    "id": "ECU-1",
    "code": "ECU",
    "number": 1,
    "name": "Escudo - Equador",
    "position": "Escudo",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-2",
    "code": "ECU",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-3",
    "code": "ECU",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-4",
    "code": "ECU",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-5",
    "code": "ECU",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-6",
    "code": "ECU",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-7",
    "code": "ECU",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-8",
    "code": "ECU",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-9",
    "code": "ECU",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-10",
    "code": "ECU",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-11",
    "code": "ECU",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-12",
    "code": "ECU",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-13",
    "code": "ECU",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-14",
    "code": "ECU",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-15",
    "code": "ECU",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-16",
    "code": "ECU",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-17",
    "code": "ECU",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-18",
    "code": "ECU",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-19",
    "code": "ECU",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "NGA-1",
    "code": "NGA",
    "number": 1,
    "name": "Escudo - Nigéria",
    "position": "Escudo",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-2",
    "code": "NGA",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-3",
    "code": "NGA",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-4",
    "code": "NGA",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-5",
    "code": "NGA",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-6",
    "code": "NGA",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-7",
    "code": "NGA",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-8",
    "code": "NGA",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-9",
    "code": "NGA",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-10",
    "code": "NGA",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-11",
    "code": "NGA",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-12",
    "code": "NGA",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-13",
    "code": "NGA",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-14",
    "code": "NGA",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-15",
    "code": "NGA",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-16",
    "code": "NGA",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-17",
    "code": "NGA",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-18",
    "code": "NGA",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "NGA-19",
    "code": "NGA",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Nigéria",
    "flag": "ng",
    "group": "Grupo B"
  },
  {
    "id": "POL-1",
    "code": "POL",
    "number": 1,
    "name": "Escudo - Polônia",
    "position": "Escudo",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-2",
    "code": "POL",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-3",
    "code": "POL",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-4",
    "code": "POL",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-5",
    "code": "POL",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-6",
    "code": "POL",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-7",
    "code": "POL",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-8",
    "code": "POL",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-9",
    "code": "POL",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-10",
    "code": "POL",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-11",
    "code": "POL",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-12",
    "code": "POL",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-13",
    "code": "POL",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-14",
    "code": "POL",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-15",
    "code": "POL",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-16",
    "code": "POL",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-17",
    "code": "POL",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-18",
    "code": "POL",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "POL-19",
    "code": "POL",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Polônia",
    "flag": "pl",
    "group": "Grupo B"
  },
  {
    "id": "CAN-1",
    "code": "CAN",
    "number": 1,
    "name": "Escudo - Canadá",
    "position": "Escudo",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-2",
    "code": "CAN",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-3",
    "code": "CAN",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-4",
    "code": "CAN",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-5",
    "code": "CAN",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-6",
    "code": "CAN",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-7",
    "code": "CAN",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-8",
    "code": "CAN",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-9",
    "code": "CAN",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-10",
    "code": "CAN",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-11",
    "code": "CAN",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-12",
    "code": "CAN",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-13",
    "code": "CAN",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-14",
    "code": "CAN",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-15",
    "code": "CAN",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-16",
    "code": "CAN",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-17",
    "code": "CAN",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-18",
    "code": "CAN",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "CAN-19",
    "code": "CAN",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo C"
  },
  {
    "id": "PER-1",
    "code": "PER",
    "number": 1,
    "name": "Escudo - Peru",
    "position": "Escudo",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-2",
    "code": "PER",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-3",
    "code": "PER",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-4",
    "code": "PER",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-5",
    "code": "PER",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-6",
    "code": "PER",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-7",
    "code": "PER",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-8",
    "code": "PER",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-9",
    "code": "PER",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-10",
    "code": "PER",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-11",
    "code": "PER",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-12",
    "code": "PER",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-13",
    "code": "PER",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-14",
    "code": "PER",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-15",
    "code": "PER",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-16",
    "code": "PER",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-17",
    "code": "PER",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-18",
    "code": "PER",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "PER-19",
    "code": "PER",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Peru",
    "flag": "pe",
    "group": "Grupo C"
  },
  {
    "id": "MAR-1",
    "code": "MAR",
    "number": 1,
    "name": "Escudo - Marrocos",
    "position": "Escudo",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-2",
    "code": "MAR",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-3",
    "code": "MAR",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-4",
    "code": "MAR",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-5",
    "code": "MAR",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-6",
    "code": "MAR",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-7",
    "code": "MAR",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-8",
    "code": "MAR",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-9",
    "code": "MAR",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-10",
    "code": "MAR",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-11",
    "code": "MAR",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-12",
    "code": "MAR",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-13",
    "code": "MAR",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-14",
    "code": "MAR",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-15",
    "code": "MAR",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-16",
    "code": "MAR",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-17",
    "code": "MAR",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-18",
    "code": "MAR",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "MAR-19",
    "code": "MAR",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo C"
  },
  {
    "id": "SWE-1",
    "code": "SWE",
    "number": 1,
    "name": "Escudo - Suécia",
    "position": "Escudo",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-2",
    "code": "SWE",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-3",
    "code": "SWE",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-4",
    "code": "SWE",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-5",
    "code": "SWE",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-6",
    "code": "SWE",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-7",
    "code": "SWE",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-8",
    "code": "SWE",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-9",
    "code": "SWE",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-10",
    "code": "SWE",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-11",
    "code": "SWE",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-12",
    "code": "SWE",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-13",
    "code": "SWE",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-14",
    "code": "SWE",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-15",
    "code": "SWE",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-16",
    "code": "SWE",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-17",
    "code": "SWE",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-18",
    "code": "SWE",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "SWE-19",
    "code": "SWE",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Suécia",
    "flag": "se",
    "group": "Grupo C"
  },
  {
    "id": "BRA-1",
    "code": "BRA",
    "number": 1,
    "name": "Escudo - Brasil",
    "position": "Escudo",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-2",
    "code": "BRA",
    "number": 2,
    "name": "Alisson",
    "position": "Goleiro",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-3",
    "code": "BRA",
    "number": 3,
    "name": "Ederson",
    "position": "Goleiro",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-4",
    "code": "BRA",
    "number": 4,
    "name": "Marquinhos",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-5",
    "code": "BRA",
    "number": 5,
    "name": "Gabriel Magalhães",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-6",
    "code": "BRA",
    "number": 6,
    "name": "Danilo",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-7",
    "code": "BRA",
    "number": 7,
    "name": "Éder Militão",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-8",
    "code": "BRA",
    "number": 8,
    "name": "Guilherme Arana",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-9",
    "code": "BRA",
    "number": 9,
    "name": "Bruno Guimarães",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-10",
    "code": "BRA",
    "number": 10,
    "name": "Lucas Paquetá",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-11",
    "code": "BRA",
    "number": 11,
    "name": "Douglas Luiz",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-12",
    "code": "BRA",
    "number": 12,
    "name": "Neymar Jr",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-13",
    "code": "BRA",
    "number": 13,
    "name": "Rodrygo",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-14",
    "code": "BRA",
    "number": 14,
    "name": "Vinicius Jr",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-15",
    "code": "BRA",
    "number": 15,
    "name": "Endrick",
    "position": "Atacante",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-16",
    "code": "BRA",
    "number": 16,
    "name": "Gabriel Martinelli",
    "position": "Atacante",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-17",
    "code": "BRA",
    "number": 17,
    "name": "Raphinha",
    "position": "Atacante",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-18",
    "code": "BRA",
    "number": 18,
    "name": "Savinho",
    "position": "Atacante",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-19",
    "code": "BRA",
    "number": 19,
    "name": "Estêvão",
    "position": "Atacante",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "COL-1",
    "code": "COL",
    "number": 1,
    "name": "Escudo - Colômbia",
    "position": "Escudo",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-2",
    "code": "COL",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-3",
    "code": "COL",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-4",
    "code": "COL",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-5",
    "code": "COL",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-6",
    "code": "COL",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-7",
    "code": "COL",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-8",
    "code": "COL",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-9",
    "code": "COL",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-10",
    "code": "COL",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-11",
    "code": "COL",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-12",
    "code": "COL",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-13",
    "code": "COL",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-14",
    "code": "COL",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-15",
    "code": "COL",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-16",
    "code": "COL",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-17",
    "code": "COL",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-18",
    "code": "COL",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-19",
    "code": "COL",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "EGY-1",
    "code": "EGY",
    "number": 1,
    "name": "Escudo - Egito",
    "position": "Escudo",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-2",
    "code": "EGY",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-3",
    "code": "EGY",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-4",
    "code": "EGY",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-5",
    "code": "EGY",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-6",
    "code": "EGY",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-7",
    "code": "EGY",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-8",
    "code": "EGY",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-9",
    "code": "EGY",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-10",
    "code": "EGY",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-11",
    "code": "EGY",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-12",
    "code": "EGY",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-13",
    "code": "EGY",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-14",
    "code": "EGY",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-15",
    "code": "EGY",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-16",
    "code": "EGY",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-17",
    "code": "EGY",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-18",
    "code": "EGY",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "EGY-19",
    "code": "EGY",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo D"
  },
  {
    "id": "UKR-1",
    "code": "UKR",
    "number": 1,
    "name": "Escudo - Ucrânia",
    "position": "Escudo",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-2",
    "code": "UKR",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-3",
    "code": "UKR",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-4",
    "code": "UKR",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-5",
    "code": "UKR",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-6",
    "code": "UKR",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-7",
    "code": "UKR",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-8",
    "code": "UKR",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-9",
    "code": "UKR",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-10",
    "code": "UKR",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-11",
    "code": "UKR",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-12",
    "code": "UKR",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-13",
    "code": "UKR",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-14",
    "code": "UKR",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-15",
    "code": "UKR",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-16",
    "code": "UKR",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-17",
    "code": "UKR",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-18",
    "code": "UKR",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "UKR-19",
    "code": "UKR",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Ucrânia",
    "flag": "ua",
    "group": "Grupo D"
  },
  {
    "id": "ARG-1",
    "code": "ARG",
    "number": 1,
    "name": "Escudo - Argentina",
    "position": "Escudo",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-2",
    "code": "ARG",
    "number": 2,
    "name": "Dibu Martínez",
    "position": "Goleiro",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-3",
    "code": "ARG",
    "number": 3,
    "name": "Rulli",
    "position": "Goleiro",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-4",
    "code": "ARG",
    "number": 4,
    "name": "Otamendi",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-5",
    "code": "ARG",
    "number": 5,
    "name": "Romero",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-6",
    "code": "ARG",
    "number": 6,
    "name": "Tagliafico",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-7",
    "code": "ARG",
    "number": 7,
    "name": "Molina",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-8",
    "code": "ARG",
    "number": 8,
    "name": "Lisandro Martínez",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-9",
    "code": "ARG",
    "number": 9,
    "name": "Enzo Fernández",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-10",
    "code": "ARG",
    "number": 10,
    "name": "De Paul",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-11",
    "code": "ARG",
    "number": 11,
    "name": "Mac Allister",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-12",
    "code": "ARG",
    "number": 12,
    "name": "Lionel Messi",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-13",
    "code": "ARG",
    "number": 13,
    "name": "Di María",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-14",
    "code": "ARG",
    "number": 14,
    "name": "Julián Álvarez",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-15",
    "code": "ARG",
    "number": 15,
    "name": "Lautaro Martínez",
    "position": "Atacante",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-16",
    "code": "ARG",
    "number": 16,
    "name": "Garnacho",
    "position": "Atacante",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-17",
    "code": "ARG",
    "number": 17,
    "name": "Nico González",
    "position": "Atacante",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-18",
    "code": "ARG",
    "number": 18,
    "name": "Lo Celso",
    "position": "Atacante",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "ARG-19",
    "code": "ARG",
    "number": 19,
    "name": "Dybala",
    "position": "Atacante",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo E"
  },
  {
    "id": "CHI-1",
    "code": "CHI",
    "number": 1,
    "name": "Escudo - Chile",
    "position": "Escudo",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-2",
    "code": "CHI",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-3",
    "code": "CHI",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-4",
    "code": "CHI",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-5",
    "code": "CHI",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-6",
    "code": "CHI",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-7",
    "code": "CHI",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-8",
    "code": "CHI",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-9",
    "code": "CHI",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-10",
    "code": "CHI",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-11",
    "code": "CHI",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-12",
    "code": "CHI",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-13",
    "code": "CHI",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-14",
    "code": "CHI",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-15",
    "code": "CHI",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-16",
    "code": "CHI",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-17",
    "code": "CHI",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-18",
    "code": "CHI",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "CHI-19",
    "code": "CHI",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Chile",
    "flag": "cl",
    "group": "Grupo E"
  },
  {
    "id": "SEN-1",
    "code": "SEN",
    "number": 1,
    "name": "Escudo - Senegal",
    "position": "Escudo",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-2",
    "code": "SEN",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-3",
    "code": "SEN",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-4",
    "code": "SEN",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-5",
    "code": "SEN",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-6",
    "code": "SEN",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-7",
    "code": "SEN",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-8",
    "code": "SEN",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-9",
    "code": "SEN",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-10",
    "code": "SEN",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-11",
    "code": "SEN",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-12",
    "code": "SEN",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-13",
    "code": "SEN",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-14",
    "code": "SEN",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-15",
    "code": "SEN",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-16",
    "code": "SEN",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-17",
    "code": "SEN",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-18",
    "code": "SEN",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "SEN-19",
    "code": "SEN",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo E"
  },
  {
    "id": "WAL-1",
    "code": "WAL",
    "number": 1,
    "name": "Escudo - País de Gales",
    "position": "Escudo",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-2",
    "code": "WAL",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-3",
    "code": "WAL",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-4",
    "code": "WAL",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-5",
    "code": "WAL",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-6",
    "code": "WAL",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-7",
    "code": "WAL",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-8",
    "code": "WAL",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-9",
    "code": "WAL",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-10",
    "code": "WAL",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-11",
    "code": "WAL",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-12",
    "code": "WAL",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-13",
    "code": "WAL",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-14",
    "code": "WAL",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-15",
    "code": "WAL",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-16",
    "code": "WAL",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-17",
    "code": "WAL",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-18",
    "code": "WAL",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "WAL-19",
    "code": "WAL",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "País de Gales",
    "flag": "gb-wls",
    "group": "Grupo E"
  },
  {
    "id": "FRA-1",
    "code": "FRA",
    "number": 1,
    "name": "Escudo - França",
    "position": "Escudo",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-2",
    "code": "FRA",
    "number": 2,
    "name": "Maignan",
    "position": "Goleiro",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-3",
    "code": "FRA",
    "number": 3,
    "name": "Samba",
    "position": "Goleiro",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-4",
    "code": "FRA",
    "number": 4,
    "name": "Upamecano",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-5",
    "code": "FRA",
    "number": 5,
    "name": "Konaté",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-6",
    "code": "FRA",
    "number": 6,
    "name": "Theo Hernández",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-7",
    "code": "FRA",
    "number": 7,
    "name": "Koundé",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-8",
    "code": "FRA",
    "number": 8,
    "name": "Saliba",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-9",
    "code": "FRA",
    "number": 9,
    "name": "Pavard",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-10",
    "code": "FRA",
    "number": 10,
    "name": "Tchouaméni",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-11",
    "code": "FRA",
    "number": 11,
    "name": "Camavinga",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-12",
    "code": "FRA",
    "number": 12,
    "name": "Rabiot",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-13",
    "code": "FRA",
    "number": 13,
    "name": "Antoine Griezmann",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-14",
    "code": "FRA",
    "number": 14,
    "name": "Kylian Mbappé",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-15",
    "code": "FRA",
    "number": 15,
    "name": "Ousmane Dembélé",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-16",
    "code": "FRA",
    "number": 16,
    "name": "Olivier Giroud",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-17",
    "code": "FRA",
    "number": 17,
    "name": "Marcus Thuram",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-18",
    "code": "FRA",
    "number": 18,
    "name": "Barcola",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "FRA-19",
    "code": "FRA",
    "number": 19,
    "name": "Coman",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo F"
  },
  {
    "id": "PAR-1",
    "code": "PAR",
    "number": 1,
    "name": "Escudo - Paraguai",
    "position": "Escudo",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-2",
    "code": "PAR",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-3",
    "code": "PAR",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-4",
    "code": "PAR",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-5",
    "code": "PAR",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-6",
    "code": "PAR",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-7",
    "code": "PAR",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-8",
    "code": "PAR",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-9",
    "code": "PAR",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-10",
    "code": "PAR",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-11",
    "code": "PAR",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-12",
    "code": "PAR",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-13",
    "code": "PAR",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-14",
    "code": "PAR",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-15",
    "code": "PAR",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-16",
    "code": "PAR",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-17",
    "code": "PAR",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-18",
    "code": "PAR",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "PAR-19",
    "code": "PAR",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo F"
  },
  {
    "id": "ALG-1",
    "code": "ALG",
    "number": 1,
    "name": "Escudo - Argélia",
    "position": "Escudo",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-2",
    "code": "ALG",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-3",
    "code": "ALG",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-4",
    "code": "ALG",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-5",
    "code": "ALG",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-6",
    "code": "ALG",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-7",
    "code": "ALG",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-8",
    "code": "ALG",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-9",
    "code": "ALG",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-10",
    "code": "ALG",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-11",
    "code": "ALG",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-12",
    "code": "ALG",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-13",
    "code": "ALG",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-14",
    "code": "ALG",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-15",
    "code": "ALG",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-16",
    "code": "ALG",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-17",
    "code": "ALG",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-18",
    "code": "ALG",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "ALG-19",
    "code": "ALG",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Argélia",
    "flag": "dz",
    "group": "Grupo F"
  },
  {
    "id": "AUT-1",
    "code": "AUT",
    "number": 1,
    "name": "Escudo - Áustria",
    "position": "Escudo",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-2",
    "code": "AUT",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-3",
    "code": "AUT",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-4",
    "code": "AUT",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-5",
    "code": "AUT",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-6",
    "code": "AUT",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-7",
    "code": "AUT",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-8",
    "code": "AUT",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-9",
    "code": "AUT",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-10",
    "code": "AUT",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-11",
    "code": "AUT",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-12",
    "code": "AUT",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-13",
    "code": "AUT",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-14",
    "code": "AUT",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-15",
    "code": "AUT",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-16",
    "code": "AUT",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-17",
    "code": "AUT",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-18",
    "code": "AUT",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "AUT-19",
    "code": "AUT",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo F"
  },
  {
    "id": "ESP-1",
    "code": "ESP",
    "number": 1,
    "name": "Escudo - Espanha",
    "position": "Escudo",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-2",
    "code": "ESP",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-3",
    "code": "ESP",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-4",
    "code": "ESP",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-5",
    "code": "ESP",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-6",
    "code": "ESP",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-7",
    "code": "ESP",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-8",
    "code": "ESP",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-9",
    "code": "ESP",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-10",
    "code": "ESP",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-11",
    "code": "ESP",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-12",
    "code": "ESP",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-13",
    "code": "ESP",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-14",
    "code": "ESP",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-15",
    "code": "ESP",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-16",
    "code": "ESP",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-17",
    "code": "ESP",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-18",
    "code": "ESP",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "ESP-19",
    "code": "ESP",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo G"
  },
  {
    "id": "CRC-1",
    "code": "CRC",
    "number": 1,
    "name": "Escudo - Costa Rica",
    "position": "Escudo",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-2",
    "code": "CRC",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-3",
    "code": "CRC",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-4",
    "code": "CRC",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-5",
    "code": "CRC",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-6",
    "code": "CRC",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-7",
    "code": "CRC",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-8",
    "code": "CRC",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-9",
    "code": "CRC",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-10",
    "code": "CRC",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-11",
    "code": "CRC",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-12",
    "code": "CRC",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-13",
    "code": "CRC",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-14",
    "code": "CRC",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-15",
    "code": "CRC",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-16",
    "code": "CRC",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-17",
    "code": "CRC",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-18",
    "code": "CRC",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CRC-19",
    "code": "CRC",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Costa Rica",
    "flag": "cr",
    "group": "Grupo G"
  },
  {
    "id": "CMR-1",
    "code": "CMR",
    "number": 1,
    "name": "Escudo - Camarões",
    "position": "Escudo",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-2",
    "code": "CMR",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-3",
    "code": "CMR",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-4",
    "code": "CMR",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-5",
    "code": "CMR",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-6",
    "code": "CMR",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-7",
    "code": "CMR",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-8",
    "code": "CMR",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-9",
    "code": "CMR",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-10",
    "code": "CMR",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-11",
    "code": "CMR",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-12",
    "code": "CMR",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-13",
    "code": "CMR",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-14",
    "code": "CMR",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-15",
    "code": "CMR",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-16",
    "code": "CMR",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-17",
    "code": "CMR",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-18",
    "code": "CMR",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "CMR-19",
    "code": "CMR",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Camarões",
    "flag": "cm",
    "group": "Grupo G"
  },
  {
    "id": "TUR-1",
    "code": "TUR",
    "number": 1,
    "name": "Escudo - Turquia",
    "position": "Escudo",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-2",
    "code": "TUR",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-3",
    "code": "TUR",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-4",
    "code": "TUR",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-5",
    "code": "TUR",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-6",
    "code": "TUR",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-7",
    "code": "TUR",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-8",
    "code": "TUR",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-9",
    "code": "TUR",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-10",
    "code": "TUR",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-11",
    "code": "TUR",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-12",
    "code": "TUR",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-13",
    "code": "TUR",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-14",
    "code": "TUR",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-15",
    "code": "TUR",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-16",
    "code": "TUR",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-17",
    "code": "TUR",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-18",
    "code": "TUR",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "TUR-19",
    "code": "TUR",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Turquia",
    "flag": "tr",
    "group": "Grupo G"
  },
  {
    "id": "ENG-1",
    "code": "ENG",
    "number": 1,
    "name": "Escudo - Inglaterra",
    "position": "Escudo",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-2",
    "code": "ENG",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-3",
    "code": "ENG",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-4",
    "code": "ENG",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-5",
    "code": "ENG",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-6",
    "code": "ENG",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-7",
    "code": "ENG",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-8",
    "code": "ENG",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-9",
    "code": "ENG",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-10",
    "code": "ENG",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-11",
    "code": "ENG",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-12",
    "code": "ENG",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-13",
    "code": "ENG",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-14",
    "code": "ENG",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-15",
    "code": "ENG",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-16",
    "code": "ENG",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-17",
    "code": "ENG",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-18",
    "code": "ENG",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "ENG-19",
    "code": "ENG",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo H"
  },
  {
    "id": "JAM-1",
    "code": "JAM",
    "number": 1,
    "name": "Escudo - Jamaica",
    "position": "Escudo",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-2",
    "code": "JAM",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-3",
    "code": "JAM",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-4",
    "code": "JAM",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-5",
    "code": "JAM",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-6",
    "code": "JAM",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-7",
    "code": "JAM",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-8",
    "code": "JAM",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-9",
    "code": "JAM",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-10",
    "code": "JAM",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-11",
    "code": "JAM",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-12",
    "code": "JAM",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-13",
    "code": "JAM",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-14",
    "code": "JAM",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-15",
    "code": "JAM",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-16",
    "code": "JAM",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-17",
    "code": "JAM",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-18",
    "code": "JAM",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "JAM-19",
    "code": "JAM",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Jamaica",
    "flag": "jm",
    "group": "Grupo H"
  },
  {
    "id": "TUN-1",
    "code": "TUN",
    "number": 1,
    "name": "Escudo - Tunísia",
    "position": "Escudo",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-2",
    "code": "TUN",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-3",
    "code": "TUN",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-4",
    "code": "TUN",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-5",
    "code": "TUN",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-6",
    "code": "TUN",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-7",
    "code": "TUN",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-8",
    "code": "TUN",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-9",
    "code": "TUN",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-10",
    "code": "TUN",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-11",
    "code": "TUN",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-12",
    "code": "TUN",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-13",
    "code": "TUN",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-14",
    "code": "TUN",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-15",
    "code": "TUN",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-16",
    "code": "TUN",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-17",
    "code": "TUN",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-18",
    "code": "TUN",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "TUN-19",
    "code": "TUN",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Tunísia",
    "flag": "tn",
    "group": "Grupo H"
  },
  {
    "id": "CZE-1",
    "code": "CZE",
    "number": 1,
    "name": "Escudo - República Checa",
    "position": "Escudo",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-2",
    "code": "CZE",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-3",
    "code": "CZE",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-4",
    "code": "CZE",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-5",
    "code": "CZE",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-6",
    "code": "CZE",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-7",
    "code": "CZE",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-8",
    "code": "CZE",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-9",
    "code": "CZE",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-10",
    "code": "CZE",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-11",
    "code": "CZE",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-12",
    "code": "CZE",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-13",
    "code": "CZE",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-14",
    "code": "CZE",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-15",
    "code": "CZE",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-16",
    "code": "CZE",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-17",
    "code": "CZE",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-18",
    "code": "CZE",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "CZE-19",
    "code": "CZE",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo H"
  },
  {
    "id": "ITA-1",
    "code": "ITA",
    "number": 1,
    "name": "Escudo - Itália",
    "position": "Escudo",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-2",
    "code": "ITA",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-3",
    "code": "ITA",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-4",
    "code": "ITA",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-5",
    "code": "ITA",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-6",
    "code": "ITA",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-7",
    "code": "ITA",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-8",
    "code": "ITA",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-9",
    "code": "ITA",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-10",
    "code": "ITA",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-11",
    "code": "ITA",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-12",
    "code": "ITA",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-13",
    "code": "ITA",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-14",
    "code": "ITA",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-15",
    "code": "ITA",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-16",
    "code": "ITA",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-17",
    "code": "ITA",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-18",
    "code": "ITA",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "ITA-19",
    "code": "ITA",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Itália",
    "flag": "it",
    "group": "Grupo I"
  },
  {
    "id": "PAN-1",
    "code": "PAN",
    "number": 1,
    "name": "Escudo - Panamá",
    "position": "Escudo",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-2",
    "code": "PAN",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-3",
    "code": "PAN",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-4",
    "code": "PAN",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-5",
    "code": "PAN",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-6",
    "code": "PAN",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-7",
    "code": "PAN",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-8",
    "code": "PAN",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-9",
    "code": "PAN",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-10",
    "code": "PAN",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-11",
    "code": "PAN",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-12",
    "code": "PAN",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-13",
    "code": "PAN",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-14",
    "code": "PAN",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-15",
    "code": "PAN",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-16",
    "code": "PAN",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-17",
    "code": "PAN",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-18",
    "code": "PAN",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "PAN-19",
    "code": "PAN",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Panamá",
    "flag": "pa",
    "group": "Grupo I"
  },
  {
    "id": "MLI-1",
    "code": "MLI",
    "number": 1,
    "name": "Escudo - Mali",
    "position": "Escudo",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-2",
    "code": "MLI",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-3",
    "code": "MLI",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-4",
    "code": "MLI",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-5",
    "code": "MLI",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-6",
    "code": "MLI",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-7",
    "code": "MLI",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-8",
    "code": "MLI",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-9",
    "code": "MLI",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-10",
    "code": "MLI",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-11",
    "code": "MLI",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-12",
    "code": "MLI",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-13",
    "code": "MLI",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-14",
    "code": "MLI",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-15",
    "code": "MLI",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-16",
    "code": "MLI",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-17",
    "code": "MLI",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-18",
    "code": "MLI",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "MLI-19",
    "code": "MLI",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Mali",
    "flag": "ml",
    "group": "Grupo I"
  },
  {
    "id": "DEN-1",
    "code": "DEN",
    "number": 1,
    "name": "Escudo - Dinamarca",
    "position": "Escudo",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-2",
    "code": "DEN",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-3",
    "code": "DEN",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-4",
    "code": "DEN",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-5",
    "code": "DEN",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-6",
    "code": "DEN",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-7",
    "code": "DEN",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-8",
    "code": "DEN",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-9",
    "code": "DEN",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-10",
    "code": "DEN",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-11",
    "code": "DEN",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-12",
    "code": "DEN",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-13",
    "code": "DEN",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-14",
    "code": "DEN",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-15",
    "code": "DEN",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-16",
    "code": "DEN",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-17",
    "code": "DEN",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-18",
    "code": "DEN",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "DEN-19",
    "code": "DEN",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Dinamarca",
    "flag": "dk",
    "group": "Grupo I"
  },
  {
    "id": "GER-1",
    "code": "GER",
    "number": 1,
    "name": "Escudo - Alemanha",
    "position": "Escudo",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-2",
    "code": "GER",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-3",
    "code": "GER",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-4",
    "code": "GER",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-5",
    "code": "GER",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-6",
    "code": "GER",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-7",
    "code": "GER",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-8",
    "code": "GER",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-9",
    "code": "GER",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-10",
    "code": "GER",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-11",
    "code": "GER",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-12",
    "code": "GER",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-13",
    "code": "GER",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-14",
    "code": "GER",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-15",
    "code": "GER",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-16",
    "code": "GER",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-17",
    "code": "GER",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-18",
    "code": "GER",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "GER-19",
    "code": "GER",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo J"
  },
  {
    "id": "HON-1",
    "code": "HON",
    "number": 1,
    "name": "Escudo - Honduras",
    "position": "Escudo",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-2",
    "code": "HON",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-3",
    "code": "HON",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-4",
    "code": "HON",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-5",
    "code": "HON",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-6",
    "code": "HON",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-7",
    "code": "HON",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-8",
    "code": "HON",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-9",
    "code": "HON",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-10",
    "code": "HON",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-11",
    "code": "HON",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-12",
    "code": "HON",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-13",
    "code": "HON",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-14",
    "code": "HON",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-15",
    "code": "HON",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-16",
    "code": "HON",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-17",
    "code": "HON",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-18",
    "code": "HON",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "HON-19",
    "code": "HON",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Honduras",
    "flag": "hn",
    "group": "Grupo J"
  },
  {
    "id": "KOR-1",
    "code": "KOR",
    "number": 1,
    "name": "Escudo - Coreia do Sul",
    "position": "Escudo",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-2",
    "code": "KOR",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-3",
    "code": "KOR",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-4",
    "code": "KOR",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-5",
    "code": "KOR",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-6",
    "code": "KOR",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-7",
    "code": "KOR",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-8",
    "code": "KOR",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-9",
    "code": "KOR",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-10",
    "code": "KOR",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-11",
    "code": "KOR",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-12",
    "code": "KOR",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-13",
    "code": "KOR",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-14",
    "code": "KOR",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-15",
    "code": "KOR",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-16",
    "code": "KOR",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-17",
    "code": "KOR",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-18",
    "code": "KOR",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "KOR-19",
    "code": "KOR",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo J"
  },
  {
    "id": "ROU-1",
    "code": "ROU",
    "number": 1,
    "name": "Escudo - Romênia",
    "position": "Escudo",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-2",
    "code": "ROU",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-3",
    "code": "ROU",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-4",
    "code": "ROU",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-5",
    "code": "ROU",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-6",
    "code": "ROU",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-7",
    "code": "ROU",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-8",
    "code": "ROU",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-9",
    "code": "ROU",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-10",
    "code": "ROU",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-11",
    "code": "ROU",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-12",
    "code": "ROU",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-13",
    "code": "ROU",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-14",
    "code": "ROU",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-15",
    "code": "ROU",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-16",
    "code": "ROU",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-17",
    "code": "ROU",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-18",
    "code": "ROU",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "ROU-19",
    "code": "ROU",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Romênia",
    "flag": "ro",
    "group": "Grupo J"
  },
  {
    "id": "POR-1",
    "code": "POR",
    "number": 1,
    "name": "Escudo - Portugal",
    "position": "Escudo",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-2",
    "code": "POR",
    "number": 2,
    "name": "Diogo Costa",
    "position": "Goleiro",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-3",
    "code": "POR",
    "number": 3,
    "name": "Rui Patrício",
    "position": "Goleiro",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-4",
    "code": "POR",
    "number": 4,
    "name": "Rúben Dias",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-5",
    "code": "POR",
    "number": 5,
    "name": "Pepe",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-6",
    "code": "POR",
    "number": 6,
    "name": "João Cancelo",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-7",
    "code": "POR",
    "number": 7,
    "name": "Nuno Mendes",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-8",
    "code": "POR",
    "number": 8,
    "name": "Dalot",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-9",
    "code": "POR",
    "number": 9,
    "name": "Palhinha",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-10",
    "code": "POR",
    "number": 10,
    "name": "Bruno Fernandes",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-11",
    "code": "POR",
    "number": 11,
    "name": "Vitinha",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-12",
    "code": "POR",
    "number": 12,
    "name": "Bernardo Silva",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-13",
    "code": "POR",
    "number": 13,
    "name": "Cristiano Ronaldo",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-14",
    "code": "POR",
    "number": 14,
    "name": "Rafael Leão",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-15",
    "code": "POR",
    "number": 15,
    "name": "João Félix",
    "position": "Atacante",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-16",
    "code": "POR",
    "number": 16,
    "name": "Gonçalo Ramos",
    "position": "Atacante",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-17",
    "code": "POR",
    "number": 17,
    "name": "Diogo Jota",
    "position": "Atacante",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-18",
    "code": "POR",
    "number": 18,
    "name": "Pedro Neto",
    "position": "Atacante",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "POR-19",
    "code": "POR",
    "number": 19,
    "name": "Francisco Conceição",
    "position": "Atacante",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo K"
  },
  {
    "id": "KSA-1",
    "code": "KSA",
    "number": 1,
    "name": "Escudo - Arábia Saudita",
    "position": "Escudo",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-2",
    "code": "KSA",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-3",
    "code": "KSA",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-4",
    "code": "KSA",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-5",
    "code": "KSA",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-6",
    "code": "KSA",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-7",
    "code": "KSA",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-8",
    "code": "KSA",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-9",
    "code": "KSA",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-10",
    "code": "KSA",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-11",
    "code": "KSA",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-12",
    "code": "KSA",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-13",
    "code": "KSA",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-14",
    "code": "KSA",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-15",
    "code": "KSA",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-16",
    "code": "KSA",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-17",
    "code": "KSA",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-18",
    "code": "KSA",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "KSA-19",
    "code": "KSA",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo K"
  },
  {
    "id": "CIV-1",
    "code": "CIV",
    "number": 1,
    "name": "Escudo - Costa do Marfim",
    "position": "Escudo",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-2",
    "code": "CIV",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-3",
    "code": "CIV",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-4",
    "code": "CIV",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-5",
    "code": "CIV",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-6",
    "code": "CIV",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-7",
    "code": "CIV",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-8",
    "code": "CIV",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-9",
    "code": "CIV",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-10",
    "code": "CIV",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-11",
    "code": "CIV",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-12",
    "code": "CIV",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-13",
    "code": "CIV",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-14",
    "code": "CIV",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-15",
    "code": "CIV",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-16",
    "code": "CIV",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-17",
    "code": "CIV",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-18",
    "code": "CIV",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "CIV-19",
    "code": "CIV",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Costa do Marfim",
    "flag": "ci",
    "group": "Grupo K"
  },
  {
    "id": "SUI-1",
    "code": "SUI",
    "number": 1,
    "name": "Escudo - Suíça",
    "position": "Escudo",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-2",
    "code": "SUI",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-3",
    "code": "SUI",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-4",
    "code": "SUI",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-5",
    "code": "SUI",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-6",
    "code": "SUI",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-7",
    "code": "SUI",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-8",
    "code": "SUI",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-9",
    "code": "SUI",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-10",
    "code": "SUI",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-11",
    "code": "SUI",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-12",
    "code": "SUI",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-13",
    "code": "SUI",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-14",
    "code": "SUI",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-15",
    "code": "SUI",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-16",
    "code": "SUI",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-17",
    "code": "SUI",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-18",
    "code": "SUI",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "SUI-19",
    "code": "SUI",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo K"
  },
  {
    "id": "NED-1",
    "code": "NED",
    "number": 1,
    "name": "Escudo - Holanda",
    "position": "Escudo",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-2",
    "code": "NED",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-3",
    "code": "NED",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-4",
    "code": "NED",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-5",
    "code": "NED",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-6",
    "code": "NED",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-7",
    "code": "NED",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-8",
    "code": "NED",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-9",
    "code": "NED",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-10",
    "code": "NED",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-11",
    "code": "NED",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-12",
    "code": "NED",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-13",
    "code": "NED",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-14",
    "code": "NED",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-15",
    "code": "NED",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-16",
    "code": "NED",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-17",
    "code": "NED",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-18",
    "code": "NED",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "NED-19",
    "code": "NED",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo L"
  },
  {
    "id": "JPN-1",
    "code": "JPN",
    "number": 1,
    "name": "Escudo - Japão",
    "position": "Escudo",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-2",
    "code": "JPN",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-3",
    "code": "JPN",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-4",
    "code": "JPN",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-5",
    "code": "JPN",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-6",
    "code": "JPN",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-7",
    "code": "JPN",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-8",
    "code": "JPN",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-9",
    "code": "JPN",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-10",
    "code": "JPN",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-11",
    "code": "JPN",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-12",
    "code": "JPN",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-13",
    "code": "JPN",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-14",
    "code": "JPN",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-15",
    "code": "JPN",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-16",
    "code": "JPN",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-17",
    "code": "JPN",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-18",
    "code": "JPN",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-19",
    "code": "JPN",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "AUS-1",
    "code": "AUS",
    "number": 1,
    "name": "Escudo - Austrália",
    "position": "Escudo",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-2",
    "code": "AUS",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-3",
    "code": "AUS",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-4",
    "code": "AUS",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-5",
    "code": "AUS",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-6",
    "code": "AUS",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-7",
    "code": "AUS",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-8",
    "code": "AUS",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-9",
    "code": "AUS",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-10",
    "code": "AUS",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-11",
    "code": "AUS",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-12",
    "code": "AUS",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-13",
    "code": "AUS",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-14",
    "code": "AUS",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-15",
    "code": "AUS",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-16",
    "code": "AUS",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-17",
    "code": "AUS",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-18",
    "code": "AUS",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-19",
    "code": "AUS",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "CRO-1",
    "code": "CRO",
    "number": 1,
    "name": "Escudo - Croácia",
    "position": "Escudo",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-2",
    "code": "CRO",
    "number": 2,
    "name": "Jogador 1",
    "position": "Goleiro",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-3",
    "code": "CRO",
    "number": 3,
    "name": "Jogador 2",
    "position": "Goleiro",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-4",
    "code": "CRO",
    "number": 4,
    "name": "Jogador 3",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-5",
    "code": "CRO",
    "number": 5,
    "name": "Jogador 4",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-6",
    "code": "CRO",
    "number": 6,
    "name": "Jogador 5",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-7",
    "code": "CRO",
    "number": 7,
    "name": "Jogador 6",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-8",
    "code": "CRO",
    "number": 8,
    "name": "Jogador 7",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-9",
    "code": "CRO",
    "number": 9,
    "name": "Jogador 8",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-10",
    "code": "CRO",
    "number": 10,
    "name": "Jogador 9",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-11",
    "code": "CRO",
    "number": 11,
    "name": "Jogador 10",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-12",
    "code": "CRO",
    "number": 12,
    "name": "Jogador 11",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-13",
    "code": "CRO",
    "number": 13,
    "name": "Jogador 12",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-14",
    "code": "CRO",
    "number": 14,
    "name": "Jogador 13",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-15",
    "code": "CRO",
    "number": 15,
    "name": "Jogador 14",
    "position": "Atacante",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-16",
    "code": "CRO",
    "number": 16,
    "name": "Jogador 15",
    "position": "Atacante",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-17",
    "code": "CRO",
    "number": 17,
    "name": "Jogador 16",
    "position": "Atacante",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-18",
    "code": "CRO",
    "number": 18,
    "name": "Jogador 17",
    "position": "Atacante",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "CRO-19",
    "code": "CRO",
    "number": 19,
    "name": "Jogador 18",
    "position": "Atacante",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo L"
  },
  {
    "id": "LEG-1",
    "code": "LEG",
    "number": 1,
    "name": "Pelé (Brasil)",
    "position": "Lenda",
    "country_name": "Lendas",
    "flag": "un",
    "group": "Lendas"
  },
  {
    "id": "LEG-2",
    "code": "LEG",
    "number": 2,
    "name": "Maradona (Argentina)",
    "position": "Lenda",
    "country_name": "Lendas",
    "flag": "un",
    "group": "Lendas"
  },
  {
    "id": "LEG-3",
    "code": "LEG",
    "number": 3,
    "name": "Zidane (França)",
    "position": "Lenda",
    "country_name": "Lendas",
    "flag": "un",
    "group": "Lendas"
  },
  {
    "id": "LEG-4",
    "code": "LEG",
    "number": 4,
    "name": "Cruyff (Holanda)",
    "position": "Lenda",
    "country_name": "Lendas",
    "flag": "un",
    "group": "Lendas"
  },
  {
    "id": "LEG-5",
    "code": "LEG",
    "number": 5,
    "name": "Beckenbauer (Alemanha)",
    "position": "Lenda",
    "country_name": "Lendas",
    "flag": "un",
    "group": "Lendas"
  },
  {
    "id": "LEG-6",
    "code": "LEG",
    "number": 6,
    "name": "Eusébio (Portugal)",
    "position": "Lenda",
    "country_name": "Lendas",
    "flag": "un",
    "group": "Lendas"
  },
  {
    "id": "LEG-7",
    "code": "LEG",
    "number": 7,
    "name": "Ronaldo Fenômeno (Brasil)",
    "position": "Lenda",
    "country_name": "Lendas",
    "flag": "un",
    "group": "Lendas"
  },
  {
    "id": "LEG-8",
    "code": "LEG",
    "number": 8,
    "name": "Messi / Cristiano Ronaldo (Lendas Ativas)",
    "position": "Lenda",
    "country_name": "Lendas",
    "flag": "un",
    "group": "Lendas"
  }
];
