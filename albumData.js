// Banco de dados oficial do Album da Copa do Mundo 2026 (Panini)
const albumGroups = {
  "Grupo A": [
    {
      "name": "México",
      "code": "MEX",
      "flag": "mx"
    },
    {
      "name": "Canadá",
      "code": "CAN",
      "flag": "ca"
    },
    {
      "name": "Estados Unidos",
      "code": "USA",
      "flag": "us"
    }
  ],
  "Grupo L": [
    {
      "name": "Coreia do Sul",
      "code": "KOR",
      "flag": "kr"
    },
    {
      "name": "Austrália",
      "code": "AUS",
      "flag": "au"
    },
    {
      "name": "Japão",
      "code": "JPN",
      "flag": "jp"
    },
    {
      "name": "Arábia Saudita",
      "code": "KSA",
      "flag": "sa"
    }
  ],
  "Grupo J": [
    {
      "name": "República Checa",
      "code": "CZE",
      "flag": "cz"
    },
    {
      "name": "Portugal",
      "code": "POR",
      "flag": "pt"
    }
  ],
  "Grupo E": [
    {
      "name": "Suíça",
      "code": "SUI",
      "flag": "ch"
    },
    {
      "name": "Escócia",
      "code": "SCO",
      "flag": "gb-sct"
    },
    {
      "name": "Alemanha",
      "code": "GER",
      "flag": "de"
    },
    {
      "name": "Alemanha",
      "code": "GERs",
      "flag": "de"
    }
  ],
  "Grupo D": [
    {
      "name": "Brasil",
      "code": "BRA",
      "flag": "br"
    },
    {
      "name": "Paraguai",
      "code": "PAR",
      "flag": "py"
    },
    {
      "name": "Colômbia",
      "code": "COL",
      "flag": "co"
    }
  ],
  "Grupo K": [
    {
      "name": "Marrocos",
      "code": "MAR",
      "flag": "ma"
    },
    {
      "name": "Egito",
      "code": "EGY",
      "flag": "eg"
    },
    {
      "name": "Senegal",
      "code": "SEN",
      "flag": "sn"
    }
  ],
  "Grupo B": [
    {
      "name": "Equador",
      "code": "ECU",
      "flag": "ec"
    },
    {
      "name": "Uruguai",
      "code": "URU",
      "flag": "uy"
    }
  ],
  "Grupo H": [
    {
      "name": "Holanda",
      "code": "NED",
      "flag": "nl"
    },
    {
      "name": "França",
      "code": "FRA",
      "flag": "fr"
    },
    {
      "name": "França",
      "code": "FRAs",
      "flag": "fr"
    },
    {
      "name": "Áustria",
      "code": "AUT",
      "flag": "at"
    }
  ],
  "Grupo I": [
    {
      "name": "Bélgica",
      "code": "BEL",
      "flag": "be"
    },
    {
      "name": "Bélgica",
      "code": "BELs",
      "flag": "be"
    }
  ],
  "Grupo F": [
    {
      "name": "Espanha",
      "code": "ESP",
      "flag": "es"
    },
    {
      "name": "Croácia",
      "code": "CRO",
      "flag": "hr"
    }
  ],
  "Grupo C": [
    {
      "name": "Argentina",
      "code": "ARG",
      "flag": "ar"
    }
  ],
  "Grupo G": [
    {
      "name": "Inglaterra",
      "code": "ENG",
      "flag": "gb-eng"
    }
  ]
};

const albumStickers = [
  {
    "id": "FWC-0",
    "code": "FWC",
    "number": 0,
    "name": "Panini Logo",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-1",
    "code": "FWC",
    "number": 1,
    "name": "Official Emblem1",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-2",
    "code": "FWC",
    "number": 2,
    "name": "Official Emblem2",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-3",
    "code": "FWC",
    "number": 3,
    "name": "Official Mascots",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-4",
    "code": "FWC",
    "number": 4,
    "name": "Official Slogan",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-5",
    "code": "FWC",
    "number": 5,
    "name": "Official Ball",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-6",
    "code": "FWC",
    "number": 6,
    "name": "Canada",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-7",
    "code": "FWC",
    "number": 7,
    "name": "Mexico",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-8",
    "code": "FWC",
    "number": 8,
    "name": "USA",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "MEX-1",
    "code": "MEX",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-2",
    "code": "MEX",
    "number": 2,
    "name": "Luis Malagón",
    "position": "Goleiro",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-3",
    "code": "MEX",
    "number": 3,
    "name": "Johan Vasquez",
    "position": "Goleiro",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-4",
    "code": "MEX",
    "number": 4,
    "name": "Jorge Sánchez",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-5",
    "code": "MEX",
    "number": 5,
    "name": "Cesar Montes",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-6",
    "code": "MEX",
    "number": 6,
    "name": "Jesus Gallardo",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-7",
    "code": "MEX",
    "number": 7,
    "name": "Israel Reyes",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-8",
    "code": "MEX",
    "number": 8,
    "name": "Diego Lainez",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-9",
    "code": "MEX",
    "number": 9,
    "name": "Carlos Rodriguez",
    "position": "Defensor",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-10",
    "code": "MEX",
    "number": 10,
    "name": "Edson Alvarez",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-11",
    "code": "MEX",
    "number": 11,
    "name": "Orbelin Pineda",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-12",
    "code": "MEX",
    "number": 12,
    "name": "Marcel Ruiz",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-13",
    "code": "MEX",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-14",
    "code": "MEX",
    "number": 14,
    "name": "Érick Sánchez",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-15",
    "code": "MEX",
    "number": 15,
    "name": "Hirving Lozano",
    "position": "Meio-Campista",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-16",
    "code": "MEX",
    "number": 16,
    "name": "Santiago Giménez",
    "position": "Atacante",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-17",
    "code": "MEX",
    "number": 17,
    "name": "Raúl Jiménez",
    "position": "Atacante",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-18",
    "code": "MEX",
    "number": 18,
    "name": "Alexis Vega",
    "position": "Atacante",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-19",
    "code": "MEX",
    "number": 19,
    "name": "Roberto Alvarado",
    "position": "Atacante",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "MEX-20",
    "code": "MEX",
    "number": 20,
    "name": "Cesar Huerta",
    "position": "Atacante",
    "country_name": "México",
    "flag": "mx",
    "group": "Grupo A"
  },
  {
    "id": "RSA-1",
    "code": "RSA",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-2",
    "code": "RSA",
    "number": 2,
    "name": "Ronwen Williams",
    "position": "Goleiro",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-3",
    "code": "RSA",
    "number": 3,
    "name": "Sipho Chaine",
    "position": "Goleiro",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-4",
    "code": "RSA",
    "number": 4,
    "name": "Aubrey Modiba",
    "position": "Defensor",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-5",
    "code": "RSA",
    "number": 5,
    "name": "Samukele Kabini",
    "position": "Defensor",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-6",
    "code": "RSA",
    "number": 6,
    "name": "Mbekezeli Mbokazi",
    "position": "Defensor",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-7",
    "code": "RSA",
    "number": 7,
    "name": "Khulumani Ndamane",
    "position": "Defensor",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-8",
    "code": "RSA",
    "number": 8,
    "name": "Siyabonga Ngezana",
    "position": "Defensor",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-9",
    "code": "RSA",
    "number": 9,
    "name": "Khuliso Mudau",
    "position": "Defensor",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-10",
    "code": "RSA",
    "number": 10,
    "name": "Nkosinathi Sibisi",
    "position": "Meio-Campista",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-11",
    "code": "RSA",
    "number": 11,
    "name": "Teboho Mokoena",
    "position": "Meio-Campista",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-12",
    "code": "RSA",
    "number": 12,
    "name": "Thalente Mbatha",
    "position": "Meio-Campista",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-13",
    "code": "RSA",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-14",
    "code": "RSA",
    "number": 14,
    "name": "Bathusi Aubaas",
    "position": "Meio-Campista",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-15",
    "code": "RSA",
    "number": 15,
    "name": "Yaya Sithole",
    "position": "Meio-Campista",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-16",
    "code": "RSA",
    "number": 16,
    "name": "Sipho Mbule",
    "position": "Atacante",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-17",
    "code": "RSA",
    "number": 17,
    "name": "Lyle Foster",
    "position": "Atacante",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-18",
    "code": "RSA",
    "number": 18,
    "name": "Iqraam Rayners",
    "position": "Atacante",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-19",
    "code": "RSA",
    "number": 19,
    "name": "Mohau Nkota",
    "position": "Atacante",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "RSA-20",
    "code": "RSA",
    "number": 20,
    "name": "Oswin Appollis",
    "position": "Atacante",
    "country_name": "South Africa",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "KOR-1",
    "code": "KOR",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-2",
    "code": "KOR",
    "number": 2,
    "name": "Hyeon-woo Jo",
    "position": "Goleiro",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-3",
    "code": "KOR",
    "number": 3,
    "name": "Seung-Gyu Kim",
    "position": "Goleiro",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-4",
    "code": "KOR",
    "number": 4,
    "name": "Min-jae Kim",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-5",
    "code": "KOR",
    "number": 5,
    "name": "Yu-min Cho",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-6",
    "code": "KOR",
    "number": 6,
    "name": "Young-woo Seol",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-7",
    "code": "KOR",
    "number": 7,
    "name": "Han-beom Lee",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-8",
    "code": "KOR",
    "number": 8,
    "name": "Tae-seok Lee",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-9",
    "code": "KOR",
    "number": 9,
    "name": "Myung-jae Lee",
    "position": "Defensor",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-10",
    "code": "KOR",
    "number": 10,
    "name": "Jae-sung Lee",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-11",
    "code": "KOR",
    "number": 11,
    "name": "In-beom Hwang",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-12",
    "code": "KOR",
    "number": 12,
    "name": "Kang-in Lee",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-13",
    "code": "KOR",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-14",
    "code": "KOR",
    "number": 14,
    "name": "Seung-ho Paik",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-15",
    "code": "KOR",
    "number": 15,
    "name": "Jens Castrop",
    "position": "Meio-Campista",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-16",
    "code": "KOR",
    "number": 16,
    "name": "Dongg-yeong Lee",
    "position": "Atacante",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-17",
    "code": "KOR",
    "number": 17,
    "name": "Gue-sung Cho",
    "position": "Atacante",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-18",
    "code": "KOR",
    "number": 18,
    "name": "Heung-min Son",
    "position": "Atacante",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-19",
    "code": "KOR",
    "number": 19,
    "name": "Hee-chan Hwang",
    "position": "Atacante",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "KOR-20",
    "code": "KOR",
    "number": 20,
    "name": "Hyeon-Gyu Oh",
    "position": "Atacante",
    "country_name": "Coreia do Sul",
    "flag": "kr",
    "group": "Grupo L"
  },
  {
    "id": "CZE-1",
    "code": "CZE",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-2",
    "code": "CZE",
    "number": 2,
    "name": "Matej Kovar",
    "position": "Goleiro",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-3",
    "code": "CZE",
    "number": 3,
    "name": "Jindrich Stanek",
    "position": "Goleiro",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-4",
    "code": "CZE",
    "number": 4,
    "name": "Ladislav Krejci",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-5",
    "code": "CZE",
    "number": 5,
    "name": "Vladimir Coufal",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-6",
    "code": "CZE",
    "number": 6,
    "name": "Jaroslav Zeleny",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-7",
    "code": "CZE",
    "number": 7,
    "name": "Tomas Holes",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-8",
    "code": "CZE",
    "number": 8,
    "name": "David Zima",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-9",
    "code": "CZE",
    "number": 9,
    "name": "Michal Sadilek",
    "position": "Defensor",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-10",
    "code": "CZE",
    "number": 10,
    "name": "Lukas Provod",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-11",
    "code": "CZE",
    "number": 11,
    "name": "Lukas Cerv",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-12",
    "code": "CZE",
    "number": 12,
    "name": "Tomas Soucek",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-13",
    "code": "CZE",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-14",
    "code": "CZE",
    "number": 14,
    "name": "Pavel Sulc",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-15",
    "code": "CZE",
    "number": 15,
    "name": "Matej Vydra",
    "position": "Meio-Campista",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-16",
    "code": "CZE",
    "number": 16,
    "name": "Vasil Kusej",
    "position": "Atacante",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-17",
    "code": "CZE",
    "number": 17,
    "name": "Tomas Chory",
    "position": "Atacante",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-18",
    "code": "CZE",
    "number": 18,
    "name": "Vaclav Cerny",
    "position": "Atacante",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-19",
    "code": "CZE",
    "number": 19,
    "name": "Adam Hlozek",
    "position": "Atacante",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CZE-20",
    "code": "CZE",
    "number": 20,
    "name": "Patrik Schick",
    "position": "Atacante",
    "country_name": "República Checa",
    "flag": "cz",
    "group": "Grupo J"
  },
  {
    "id": "CAN-1",
    "code": "CAN",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-2",
    "code": "CAN",
    "number": 2,
    "name": "Dayne St.Clair",
    "position": "Goleiro",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-3",
    "code": "CAN",
    "number": 3,
    "name": "Alphonso Davies",
    "position": "Goleiro",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-4",
    "code": "CAN",
    "number": 4,
    "name": "Alistair Johnston",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-5",
    "code": "CAN",
    "number": 5,
    "name": "Samuel Adekugbe",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-6",
    "code": "CAN",
    "number": 6,
    "name": "Richie Laryea",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-7",
    "code": "CAN",
    "number": 7,
    "name": "Derek Cornelius",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-8",
    "code": "CAN",
    "number": 8,
    "name": "Moïse Bombito",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-9",
    "code": "CAN",
    "number": 9,
    "name": "Kamal Miller",
    "position": "Defensor",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-10",
    "code": "CAN",
    "number": 10,
    "name": "Stephen Eustáquio",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-11",
    "code": "CAN",
    "number": 11,
    "name": "Ismaël Koné",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-12",
    "code": "CAN",
    "number": 12,
    "name": "Jonathan Osorio",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-13",
    "code": "CAN",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-14",
    "code": "CAN",
    "number": 14,
    "name": "Jacob Shaffelburg",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-15",
    "code": "CAN",
    "number": 15,
    "name": "Mathieu Choinière",
    "position": "Meio-Campista",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-16",
    "code": "CAN",
    "number": 16,
    "name": "Niko Sigur",
    "position": "Atacante",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-17",
    "code": "CAN",
    "number": 17,
    "name": "Tajon Buchanan",
    "position": "Atacante",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-18",
    "code": "CAN",
    "number": 18,
    "name": "Liam Millar",
    "position": "Atacante",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-19",
    "code": "CAN",
    "number": 19,
    "name": "Cyle Larin",
    "position": "Atacante",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "CAN-20",
    "code": "CAN",
    "number": 20,
    "name": "Jonathan David",
    "position": "Atacante",
    "country_name": "Canadá",
    "flag": "ca",
    "group": "Grupo A"
  },
  {
    "id": "BIH-1",
    "code": "BIH",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-2",
    "code": "BIH",
    "number": 2,
    "name": "Nikola Vasilj",
    "position": "Goleiro",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-3",
    "code": "BIH",
    "number": 3,
    "name": "Amer Dedic",
    "position": "Goleiro",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-4",
    "code": "BIH",
    "number": 4,
    "name": "Sead Kolasinac",
    "position": "Defensor",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-5",
    "code": "BIH",
    "number": 5,
    "name": "Tarik Muharemovic",
    "position": "Defensor",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-6",
    "code": "BIH",
    "number": 6,
    "name": "Nihad Mujakic",
    "position": "Defensor",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-7",
    "code": "BIH",
    "number": 7,
    "name": "Nikola Katic",
    "position": "Defensor",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-8",
    "code": "BIH",
    "number": 8,
    "name": "Amir Hadziahmetovic",
    "position": "Defensor",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-9",
    "code": "BIH",
    "number": 9,
    "name": "Benjamin Tahirovic",
    "position": "Defensor",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-10",
    "code": "BIH",
    "number": 10,
    "name": "Armin Gigovic",
    "position": "Meio-Campista",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-11",
    "code": "BIH",
    "number": 11,
    "name": "Ivan Sunjic",
    "position": "Meio-Campista",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-12",
    "code": "BIH",
    "number": 12,
    "name": "Ivan Basic",
    "position": "Meio-Campista",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-13",
    "code": "BIH",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-14",
    "code": "BIH",
    "number": 14,
    "name": "Dzenis Burnic",
    "position": "Meio-Campista",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-15",
    "code": "BIH",
    "number": 15,
    "name": "Esmir Bajraktarevic",
    "position": "Meio-Campista",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-16",
    "code": "BIH",
    "number": 16,
    "name": "Amar Memic",
    "position": "Atacante",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-17",
    "code": "BIH",
    "number": 17,
    "name": "Ermedin Demirovic",
    "position": "Atacante",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-18",
    "code": "BIH",
    "number": 18,
    "name": "Edin Dzeko",
    "position": "Atacante",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-19",
    "code": "BIH",
    "number": 19,
    "name": "Samed Bazdar",
    "position": "Atacante",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BIH-20",
    "code": "BIH",
    "number": 20,
    "name": "Haris Tabakovic",
    "position": "Atacante",
    "country_name": "Bosnia and Herzegovina",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-1",
    "code": "QAT",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-2",
    "code": "QAT",
    "number": 2,
    "name": "Meshaal Barsham",
    "position": "Goleiro",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-3",
    "code": "QAT",
    "number": 3,
    "name": "Sultan Albrake",
    "position": "Goleiro",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-4",
    "code": "QAT",
    "number": 4,
    "name": "Lucas Mendes",
    "position": "Defensor",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-5",
    "code": "QAT",
    "number": 5,
    "name": "Homam Ahmed",
    "position": "Defensor",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-6",
    "code": "QAT",
    "number": 6,
    "name": "Boualem Khoukhi",
    "position": "Defensor",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-7",
    "code": "QAT",
    "number": 7,
    "name": "Pedro Miguel",
    "position": "Defensor",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-8",
    "code": "QAT",
    "number": 8,
    "name": "Tarek Salman",
    "position": "Defensor",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-9",
    "code": "QAT",
    "number": 9,
    "name": "Mohamed Al-Mannai",
    "position": "Defensor",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-10",
    "code": "QAT",
    "number": 10,
    "name": "Karim Boudiaf",
    "position": "Meio-Campista",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-11",
    "code": "QAT",
    "number": 11,
    "name": "Assim Madibo",
    "position": "Meio-Campista",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-12",
    "code": "QAT",
    "number": 12,
    "name": "Ahmed Fatehi",
    "position": "Meio-Campista",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-13",
    "code": "QAT",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-14",
    "code": "QAT",
    "number": 14,
    "name": "Mohammed Waad",
    "position": "Meio-Campista",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-15",
    "code": "QAT",
    "number": 15,
    "name": "Abdulaziz Hatem",
    "position": "Meio-Campista",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-16",
    "code": "QAT",
    "number": 16,
    "name": "Hassan Al-Haydos",
    "position": "Atacante",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-17",
    "code": "QAT",
    "number": 17,
    "name": "Edmilson Junior",
    "position": "Atacante",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-18",
    "code": "QAT",
    "number": 18,
    "name": "Akram Hassan Afif",
    "position": "Atacante",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-19",
    "code": "QAT",
    "number": 19,
    "name": "Ahmed Al Ganehi",
    "position": "Atacante",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "QAT-20",
    "code": "QAT",
    "number": 20,
    "name": "Almoez Ali",
    "position": "Atacante",
    "country_name": "Qatar",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SUI-1",
    "code": "SUI",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-2",
    "code": "SUI",
    "number": 2,
    "name": "Gregor Kobel",
    "position": "Goleiro",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-3",
    "code": "SUI",
    "number": 3,
    "name": "Yvon Mvogo",
    "position": "Goleiro",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-4",
    "code": "SUI",
    "number": 4,
    "name": "Manuel Akanji",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-5",
    "code": "SUI",
    "number": 5,
    "name": "Ricardo Rodriguez",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-6",
    "code": "SUI",
    "number": 6,
    "name": "Nico Elvedi",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-7",
    "code": "SUI",
    "number": 7,
    "name": "Aurèle Amenda",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-8",
    "code": "SUI",
    "number": 8,
    "name": "Silvan Widmer",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-9",
    "code": "SUI",
    "number": 9,
    "name": "Granit Xhaka",
    "position": "Defensor",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-10",
    "code": "SUI",
    "number": 10,
    "name": "Denis Zakaria",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-11",
    "code": "SUI",
    "number": 11,
    "name": "Remo Freuler",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-12",
    "code": "SUI",
    "number": 12,
    "name": "Fabian Rieder",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-13",
    "code": "SUI",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-14",
    "code": "SUI",
    "number": 14,
    "name": "Ardon Jashari",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-15",
    "code": "SUI",
    "number": 15,
    "name": "Johan Manzambi",
    "position": "Meio-Campista",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-16",
    "code": "SUI",
    "number": 16,
    "name": "Michel Aebischer",
    "position": "Atacante",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-17",
    "code": "SUI",
    "number": 17,
    "name": "Breel Embolo",
    "position": "Atacante",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-18",
    "code": "SUI",
    "number": 18,
    "name": "Ruben Vargas",
    "position": "Atacante",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-19",
    "code": "SUI",
    "number": 19,
    "name": "Dan Ndoye",
    "position": "Atacante",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "SUI-20",
    "code": "SUI",
    "number": 20,
    "name": "Zeki Amdouni",
    "position": "Atacante",
    "country_name": "Suíça",
    "flag": "ch",
    "group": "Grupo E"
  },
  {
    "id": "BRA-1",
    "code": "BRA",
    "number": 1,
    "name": "Emblem",
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
    "name": "Bento",
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
    "name": "Éder Militão",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-6",
    "code": "BRA",
    "number": 6,
    "name": "Gabriel Magalhães",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-7",
    "code": "BRA",
    "number": 7,
    "name": "Danilo",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-8",
    "code": "BRA",
    "number": 8,
    "name": "Wesley",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-9",
    "code": "BRA",
    "number": 9,
    "name": "Lucas Paquetá",
    "position": "Defensor",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-10",
    "code": "BRA",
    "number": 10,
    "name": "Casemiro",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-11",
    "code": "BRA",
    "number": 11,
    "name": "Bruno Guimarães",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-12",
    "code": "BRA",
    "number": 12,
    "name": "Luiz Henrique",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-13",
    "code": "BRA",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-14",
    "code": "BRA",
    "number": 14,
    "name": "Vinicius Júnior",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-15",
    "code": "BRA",
    "number": 15,
    "name": "Rodrygo",
    "position": "Meio-Campista",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-16",
    "code": "BRA",
    "number": 16,
    "name": "João Pedro",
    "position": "Atacante",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-17",
    "code": "BRA",
    "number": 17,
    "name": "Matheus Cunha",
    "position": "Atacante",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-18",
    "code": "BRA",
    "number": 18,
    "name": "Gabriel Martinelli",
    "position": "Atacante",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-19",
    "code": "BRA",
    "number": 19,
    "name": "Raphinha",
    "position": "Atacante",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "BRA-20",
    "code": "BRA",
    "number": 20,
    "name": "Estévão",
    "position": "Atacante",
    "country_name": "Brasil",
    "flag": "br",
    "group": "Grupo D"
  },
  {
    "id": "MAR-1",
    "code": "MAR",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-2",
    "code": "MAR",
    "number": 2,
    "name": "Yassine Bounou",
    "position": "Goleiro",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-3",
    "code": "MAR",
    "number": 3,
    "name": "Munir El Kajoui",
    "position": "Goleiro",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-4",
    "code": "MAR",
    "number": 4,
    "name": "Achraf Hakimi",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-5",
    "code": "MAR",
    "number": 5,
    "name": "Noussair Mazraoui",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-6",
    "code": "MAR",
    "number": 6,
    "name": "Nayef Aguerd",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-7",
    "code": "MAR",
    "number": 7,
    "name": "Romain Saïss",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-8",
    "code": "MAR",
    "number": 8,
    "name": "Jawad El Yamiq",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-9",
    "code": "MAR",
    "number": 9,
    "name": "Adam Masina",
    "position": "Defensor",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-10",
    "code": "MAR",
    "number": 10,
    "name": "Sofyan Amrabat",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-11",
    "code": "MAR",
    "number": 11,
    "name": "Azzedine Ounahi",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-12",
    "code": "MAR",
    "number": 12,
    "name": "Eliesse Ben Seghir",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-13",
    "code": "MAR",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-14",
    "code": "MAR",
    "number": 14,
    "name": "Bilal El Khannouss",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-15",
    "code": "MAR",
    "number": 15,
    "name": "Ismael Saibari",
    "position": "Meio-Campista",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-16",
    "code": "MAR",
    "number": 16,
    "name": "Youssef En-Nesyri",
    "position": "Atacante",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-17",
    "code": "MAR",
    "number": 17,
    "name": "Abde Ezzalzouli",
    "position": "Atacante",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-18",
    "code": "MAR",
    "number": 18,
    "name": "Soufiane Rahimi",
    "position": "Atacante",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-19",
    "code": "MAR",
    "number": 19,
    "name": "Brahim Diaz",
    "position": "Atacante",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "MAR-20",
    "code": "MAR",
    "number": 20,
    "name": "Ayoub El Kaabi",
    "position": "Atacante",
    "country_name": "Marrocos",
    "flag": "ma",
    "group": "Grupo K"
  },
  {
    "id": "HAI-1",
    "code": "HAI",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-2",
    "code": "HAI",
    "number": 2,
    "name": "Johny Placide",
    "position": "Goleiro",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-3",
    "code": "HAI",
    "number": 3,
    "name": "Carlens Arcus",
    "position": "Goleiro",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-4",
    "code": "HAI",
    "number": 4,
    "name": "Martin Expérience",
    "position": "Defensor",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-5",
    "code": "HAI",
    "number": 5,
    "name": "Jean-Kevin Duverne",
    "position": "Defensor",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-6",
    "code": "HAI",
    "number": 6,
    "name": "Ricardo Adé",
    "position": "Defensor",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-7",
    "code": "HAI",
    "number": 7,
    "name": "Duke Lacroix",
    "position": "Defensor",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-8",
    "code": "HAI",
    "number": 8,
    "name": "Garven Metusala",
    "position": "Defensor",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-9",
    "code": "HAI",
    "number": 9,
    "name": "Hannes Delcroix",
    "position": "Defensor",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-10",
    "code": "HAI",
    "number": 10,
    "name": "Leverton Pierre",
    "position": "Meio-Campista",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-11",
    "code": "HAI",
    "number": 11,
    "name": "Danley Jean Jacques",
    "position": "Meio-Campista",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-12",
    "code": "HAI",
    "number": 12,
    "name": "Jean-Ricner Bellegarde",
    "position": "Meio-Campista",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-13",
    "code": "HAI",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-14",
    "code": "HAI",
    "number": 14,
    "name": "Christopher Attys",
    "position": "Meio-Campista",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-15",
    "code": "HAI",
    "number": 15,
    "name": "Derrick Etienne Jr",
    "position": "Meio-Campista",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-16",
    "code": "HAI",
    "number": 16,
    "name": "Josue Casimir",
    "position": "Atacante",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-17",
    "code": "HAI",
    "number": 17,
    "name": "Ruben Providence",
    "position": "Atacante",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-18",
    "code": "HAI",
    "number": 18,
    "name": "Duckens Nazon",
    "position": "Atacante",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-19",
    "code": "HAI",
    "number": 19,
    "name": "Louicius Deedson",
    "position": "Atacante",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "HAI-20",
    "code": "HAI",
    "number": 20,
    "name": "Frantzdy Pierrot",
    "position": "Atacante",
    "country_name": "Haiti",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SCO-1",
    "code": "SCO",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-2",
    "code": "SCO",
    "number": 2,
    "name": "Angus Gunn",
    "position": "Goleiro",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-3",
    "code": "SCO",
    "number": 3,
    "name": "Jack Hendry",
    "position": "Goleiro",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-4",
    "code": "SCO",
    "number": 4,
    "name": "Kieran Tierney",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-5",
    "code": "SCO",
    "number": 5,
    "name": "Aaron Hickey",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-6",
    "code": "SCO",
    "number": 6,
    "name": "Andrew Robertson",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-7",
    "code": "SCO",
    "number": 7,
    "name": "Scott McKenna",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-8",
    "code": "SCO",
    "number": 8,
    "name": "John Souttar",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-9",
    "code": "SCO",
    "number": 9,
    "name": "Anthony Ralston",
    "position": "Defensor",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-10",
    "code": "SCO",
    "number": 10,
    "name": "Grant Hanley",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-11",
    "code": "SCO",
    "number": 11,
    "name": "Scott McTominay",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-12",
    "code": "SCO",
    "number": 12,
    "name": "Billy Gilmour",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-13",
    "code": "SCO",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-14",
    "code": "SCO",
    "number": 14,
    "name": "Lewis Ferguson",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-15",
    "code": "SCO",
    "number": 15,
    "name": "Ryan Christie",
    "position": "Meio-Campista",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-16",
    "code": "SCO",
    "number": 16,
    "name": "Kenny McLean",
    "position": "Atacante",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-17",
    "code": "SCO",
    "number": 17,
    "name": "John McGinn",
    "position": "Atacante",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-18",
    "code": "SCO",
    "number": 18,
    "name": "Lyndon Dykes",
    "position": "Atacante",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-19",
    "code": "SCO",
    "number": 19,
    "name": "Che Adams",
    "position": "Atacante",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "SCO-20",
    "code": "SCO",
    "number": 20,
    "name": "Ben Gannon-Doak",
    "position": "Atacante",
    "country_name": "Escócia",
    "flag": "gb-sct",
    "group": "Grupo E"
  },
  {
    "id": "USA-1",
    "code": "USA",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-2",
    "code": "USA",
    "number": 2,
    "name": "Matt Freese",
    "position": "Goleiro",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-3",
    "code": "USA",
    "number": 3,
    "name": "Chris Richards",
    "position": "Goleiro",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-4",
    "code": "USA",
    "number": 4,
    "name": "Tim Ream",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-5",
    "code": "USA",
    "number": 5,
    "name": "Mark McKenzie",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-6",
    "code": "USA",
    "number": 6,
    "name": "Alex Freeman",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-7",
    "code": "USA",
    "number": 7,
    "name": "Antonee Robinson",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-8",
    "code": "USA",
    "number": 8,
    "name": "Tyler Adams",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-9",
    "code": "USA",
    "number": 9,
    "name": "Tanner Tessmann",
    "position": "Defensor",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-10",
    "code": "USA",
    "number": 10,
    "name": "Weston McKenny",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-11",
    "code": "USA",
    "number": 11,
    "name": "Christian Roldan",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-12",
    "code": "USA",
    "number": 12,
    "name": "Timothy Weah",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-13",
    "code": "USA",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-14",
    "code": "USA",
    "number": 14,
    "name": "Diego Luna",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-15",
    "code": "USA",
    "number": 15,
    "name": "Malik Tillman",
    "position": "Meio-Campista",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-16",
    "code": "USA",
    "number": 16,
    "name": "Christian Pulisic",
    "position": "Atacante",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-17",
    "code": "USA",
    "number": 17,
    "name": "Brenden Aaronson",
    "position": "Atacante",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-18",
    "code": "USA",
    "number": 18,
    "name": "Ricardo Pepi",
    "position": "Atacante",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-19",
    "code": "USA",
    "number": 19,
    "name": "Haji Wright",
    "position": "Atacante",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "USA-20",
    "code": "USA",
    "number": 20,
    "name": "Folarin Balogun",
    "position": "Atacante",
    "country_name": "Estados Unidos",
    "flag": "us",
    "group": "Grupo A"
  },
  {
    "id": "PAR-1",
    "code": "PAR",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-2",
    "code": "PAR",
    "number": 2,
    "name": "Roberto Fernandez",
    "position": "Goleiro",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-3",
    "code": "PAR",
    "number": 3,
    "name": "Orlando Gill",
    "position": "Goleiro",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-4",
    "code": "PAR",
    "number": 4,
    "name": "Gustavo Gomez",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-5",
    "code": "PAR",
    "number": 5,
    "name": "Fabián Balbuena",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-6",
    "code": "PAR",
    "number": 6,
    "name": "Juan José Cáceres",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-7",
    "code": "PAR",
    "number": 7,
    "name": "Omar Alderete",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-8",
    "code": "PAR",
    "number": 8,
    "name": "Junior Alonso",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-9",
    "code": "PAR",
    "number": 9,
    "name": "Mathías Villasanti",
    "position": "Defensor",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-10",
    "code": "PAR",
    "number": 10,
    "name": "Diego Gomez",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-11",
    "code": "PAR",
    "number": 11,
    "name": "Damián Bobadilla",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-12",
    "code": "PAR",
    "number": 12,
    "name": "Andres Cubas",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-13",
    "code": "PAR",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-14",
    "code": "PAR",
    "number": 14,
    "name": "Matias Galarza Fonda",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-15",
    "code": "PAR",
    "number": 15,
    "name": "Julio Enciso",
    "position": "Meio-Campista",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-16",
    "code": "PAR",
    "number": 16,
    "name": "Alejandro Romero Gamarra",
    "position": "Atacante",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-17",
    "code": "PAR",
    "number": 17,
    "name": "Miguel Almirón",
    "position": "Atacante",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-18",
    "code": "PAR",
    "number": 18,
    "name": "Ramon Sosa",
    "position": "Atacante",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-19",
    "code": "PAR",
    "number": 19,
    "name": "Angel Romero",
    "position": "Atacante",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "PAR-20",
    "code": "PAR",
    "number": 20,
    "name": "Antonio Sanabria",
    "position": "Atacante",
    "country_name": "Paraguai",
    "flag": "py",
    "group": "Grupo D"
  },
  {
    "id": "AUS-1",
    "code": "AUS",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-2",
    "code": "AUS",
    "number": 2,
    "name": "Mathew Ryan",
    "position": "Goleiro",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-3",
    "code": "AUS",
    "number": 3,
    "name": "Joe Gauci",
    "position": "Goleiro",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-4",
    "code": "AUS",
    "number": 4,
    "name": "Harry Souttar",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-5",
    "code": "AUS",
    "number": 5,
    "name": "Alessandro Circati",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-6",
    "code": "AUS",
    "number": 6,
    "name": "Jordan Bos",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-7",
    "code": "AUS",
    "number": 7,
    "name": "Aziz Behich",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-8",
    "code": "AUS",
    "number": 8,
    "name": "Cameron Burgess",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-9",
    "code": "AUS",
    "number": 9,
    "name": "Lewis Miller",
    "position": "Defensor",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-10",
    "code": "AUS",
    "number": 10,
    "name": "Milos Degenek",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-11",
    "code": "AUS",
    "number": 11,
    "name": "Jackson Irvine",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-12",
    "code": "AUS",
    "number": 12,
    "name": "Riley McGree",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-13",
    "code": "AUS",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-14",
    "code": "AUS",
    "number": 14,
    "name": "Aiden O'Neill",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-15",
    "code": "AUS",
    "number": 15,
    "name": "Connor Metcalfe",
    "position": "Meio-Campista",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-16",
    "code": "AUS",
    "number": 16,
    "name": "Patrick Yazbek",
    "position": "Atacante",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-17",
    "code": "AUS",
    "number": 17,
    "name": "Craig Goodwin",
    "position": "Atacante",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-18",
    "code": "AUS",
    "number": 18,
    "name": "Kusini Yengi",
    "position": "Atacante",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-19",
    "code": "AUS",
    "number": 19,
    "name": "Nestory Irankunda",
    "position": "Atacante",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "AUS-20",
    "code": "AUS",
    "number": 20,
    "name": "Mohamed Touré",
    "position": "Atacante",
    "country_name": "Austrália",
    "flag": "au",
    "group": "Grupo L"
  },
  {
    "id": "TUR-1",
    "code": "TUR",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-2",
    "code": "TUR",
    "number": 2,
    "name": "Ugurcan Cakir",
    "position": "Goleiro",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-3",
    "code": "TUR",
    "number": 3,
    "name": "Mert Muldur",
    "position": "Goleiro",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-4",
    "code": "TUR",
    "number": 4,
    "name": "Zeki Celik",
    "position": "Defensor",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-5",
    "code": "TUR",
    "number": 5,
    "name": "Abdulkerim Bardakci",
    "position": "Defensor",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-6",
    "code": "TUR",
    "number": 6,
    "name": "Caglar Soyuncu",
    "position": "Defensor",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-7",
    "code": "TUR",
    "number": 7,
    "name": "Merih Demiral",
    "position": "Defensor",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-8",
    "code": "TUR",
    "number": 8,
    "name": "Ferdi Kadioglu",
    "position": "Defensor",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-9",
    "code": "TUR",
    "number": 9,
    "name": "Kaan Ayhan",
    "position": "Defensor",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-10",
    "code": "TUR",
    "number": 10,
    "name": "Ismail Yuksek",
    "position": "Meio-Campista",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-11",
    "code": "TUR",
    "number": 11,
    "name": "Hakan Calhanoglu",
    "position": "Meio-Campista",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-12",
    "code": "TUR",
    "number": 12,
    "name": "Orkun Kokcu",
    "position": "Meio-Campista",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-13",
    "code": "TUR",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-14",
    "code": "TUR",
    "number": 14,
    "name": "Arda Guler",
    "position": "Meio-Campista",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-15",
    "code": "TUR",
    "number": 15,
    "name": "Irfan Can Kahveci",
    "position": "Meio-Campista",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-16",
    "code": "TUR",
    "number": 16,
    "name": "Yunus Akgun",
    "position": "Atacante",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-17",
    "code": "TUR",
    "number": 17,
    "name": "Can Uzun",
    "position": "Atacante",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-18",
    "code": "TUR",
    "number": 18,
    "name": "Baris Alper Yilmaz",
    "position": "Atacante",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-19",
    "code": "TUR",
    "number": 19,
    "name": "Kerem Akturkoglu",
    "position": "Atacante",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUR-20",
    "code": "TUR",
    "number": 20,
    "name": "Kenan Yildiz",
    "position": "Atacante",
    "country_name": "Türkiye",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GER-1",
    "code": "GER",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-2",
    "code": "GER",
    "number": 2,
    "name": "Marc-André ter Stegen",
    "position": "Goleiro",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-3",
    "code": "GER",
    "number": 3,
    "name": "Jonathan Tah",
    "position": "Goleiro",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-4",
    "code": "GER",
    "number": 4,
    "name": "David Raum",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-5",
    "code": "GER",
    "number": 5,
    "name": "Nico Schlotterbeck",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-6",
    "code": "GER",
    "number": 6,
    "name": "Antonio Rüdiger",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-7",
    "code": "GER",
    "number": 7,
    "name": "Waldemar Anton",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-8",
    "code": "GER",
    "number": 8,
    "name": "Ridle Baku",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-9",
    "code": "GER",
    "number": 9,
    "name": "Maximilian Mittelstadt",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-10",
    "code": "GER",
    "number": 10,
    "name": "Joshua Kimmich",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-11",
    "code": "GER",
    "number": 11,
    "name": "Florian Wirtz",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-12",
    "code": "GER",
    "number": 12,
    "name": "Felix Nmecha",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-13",
    "code": "GER",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-14",
    "code": "GER",
    "number": 14,
    "name": "Leon Goretzka",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-15",
    "code": "GER",
    "number": 15,
    "name": "Jamal Musiala",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-16",
    "code": "GER",
    "number": 16,
    "name": "Serge Gnabry",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-17",
    "code": "GER",
    "number": 17,
    "name": "Kai Havertz",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-18",
    "code": "GER",
    "number": 18,
    "name": "Leroy Sane",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-19",
    "code": "GER",
    "number": 19,
    "name": "Karim Adeyemi",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GER-20",
    "code": "GER",
    "number": 20,
    "name": "Nick Woltemade",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-2",
    "code": "GERs",
    "number": 2,
    "name": "Marc-André ter Stegen",
    "position": "Goleiro",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-3",
    "code": "GERs",
    "number": 3,
    "name": "Jonathan Tah",
    "position": "Goleiro",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-4",
    "code": "GERs",
    "number": 4,
    "name": "David Raum",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-5",
    "code": "GERs",
    "number": 5,
    "name": "Nico Schlotterbeck",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-6",
    "code": "GERs",
    "number": 6,
    "name": "Antonio Rüdiger",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-7",
    "code": "GERs",
    "number": 7,
    "name": "Waldemar Anton",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-8",
    "code": "GERs",
    "number": 8,
    "name": "Ridle Baku",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-9",
    "code": "GERs",
    "number": 9,
    "name": "Maximilian Mittelstadt",
    "position": "Defensor",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-10",
    "code": "GERs",
    "number": 10,
    "name": "Joshua Kimmich",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-11",
    "code": "GERs",
    "number": 11,
    "name": "Florian Wirtz",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-12",
    "code": "GERs",
    "number": 12,
    "name": "Felix Nmecha",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-14",
    "code": "GERs",
    "number": 14,
    "name": "Leon Goretzka",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-15",
    "code": "GERs",
    "number": 15,
    "name": "Jamal Musiala",
    "position": "Meio-Campista",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-16",
    "code": "GERs",
    "number": 16,
    "name": "Serge Gnabry",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-17",
    "code": "GERs",
    "number": 17,
    "name": "Kai Havertz",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-18",
    "code": "GERs",
    "number": 18,
    "name": "Leroy Sane",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-19",
    "code": "GERs",
    "number": 19,
    "name": "Karim Adeyemi",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "GERs-20",
    "code": "GERs",
    "number": 20,
    "name": "Nick Woltemade",
    "position": "Atacante",
    "country_name": "Alemanha",
    "flag": "de",
    "group": "Grupo E"
  },
  {
    "id": "CUW-1",
    "code": "CUW",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-2",
    "code": "CUW",
    "number": 2,
    "name": "Eloy Room",
    "position": "Goleiro",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-3",
    "code": "CUW",
    "number": 3,
    "name": "Armando Obispo",
    "position": "Goleiro",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-4",
    "code": "CUW",
    "number": 4,
    "name": "Sherel Floranus",
    "position": "Defensor",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-5",
    "code": "CUW",
    "number": 5,
    "name": "Jurien Gaari",
    "position": "Defensor",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-6",
    "code": "CUW",
    "number": 6,
    "name": "Joshua Brenet",
    "position": "Defensor",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-7",
    "code": "CUW",
    "number": 7,
    "name": "Roshon Van Eijma",
    "position": "Defensor",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-8",
    "code": "CUW",
    "number": 8,
    "name": "Shurandy Sambo",
    "position": "Defensor",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-9",
    "code": "CUW",
    "number": 9,
    "name": "Livano Comenencia",
    "position": "Defensor",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-10",
    "code": "CUW",
    "number": 10,
    "name": "Godfried Roemeratoe",
    "position": "Meio-Campista",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-11",
    "code": "CUW",
    "number": 11,
    "name": "Juninho Bacuna",
    "position": "Meio-Campista",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-12",
    "code": "CUW",
    "number": 12,
    "name": "Leandro Bacuna",
    "position": "Meio-Campista",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-13",
    "code": "CUW",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-14",
    "code": "CUW",
    "number": 14,
    "name": "Tahith Chong",
    "position": "Meio-Campista",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-15",
    "code": "CUW",
    "number": 15,
    "name": "Kenji Gorre",
    "position": "Meio-Campista",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-16",
    "code": "CUW",
    "number": 16,
    "name": "Jearl Margaritha",
    "position": "Atacante",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-17",
    "code": "CUW",
    "number": 17,
    "name": "Jurgen Locadia",
    "position": "Atacante",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-18",
    "code": "CUW",
    "number": 18,
    "name": "Jeremy Antonisse",
    "position": "Atacante",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-19",
    "code": "CUW",
    "number": 19,
    "name": "Gervane Kastaneer",
    "position": "Atacante",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CUW-20",
    "code": "CUW",
    "number": 20,
    "name": "Sontje Hansen",
    "position": "Atacante",
    "country_name": "Curaçao",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-1",
    "code": "CIV",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-2",
    "code": "CIV",
    "number": 2,
    "name": "Yahia Fofana",
    "position": "Goleiro",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-3",
    "code": "CIV",
    "number": 3,
    "name": "Ghislain Konan",
    "position": "Goleiro",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-4",
    "code": "CIV",
    "number": 4,
    "name": "Wilfried Singo",
    "position": "Defensor",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-5",
    "code": "CIV",
    "number": 5,
    "name": "Odilon Kossounou",
    "position": "Defensor",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-6",
    "code": "CIV",
    "number": 6,
    "name": "Evan Ndicka",
    "position": "Defensor",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-7",
    "code": "CIV",
    "number": 7,
    "name": "Willy Boly",
    "position": "Defensor",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-8",
    "code": "CIV",
    "number": 8,
    "name": "Emmanuel Agbadou",
    "position": "Defensor",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-9",
    "code": "CIV",
    "number": 9,
    "name": "Ousmane Diomande",
    "position": "Defensor",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-10",
    "code": "CIV",
    "number": 10,
    "name": "Franck Kessie",
    "position": "Meio-Campista",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-11",
    "code": "CIV",
    "number": 11,
    "name": "Seko Fofana",
    "position": "Meio-Campista",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-12",
    "code": "CIV",
    "number": 12,
    "name": "Ibrahim Sangare",
    "position": "Meio-Campista",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-13",
    "code": "CIV",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-14",
    "code": "CIV",
    "number": 14,
    "name": "Jean-Philippe Gbamin",
    "position": "Meio-Campista",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-15",
    "code": "CIV",
    "number": 15,
    "name": "Amad Diallo",
    "position": "Meio-Campista",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-16",
    "code": "CIV",
    "number": 16,
    "name": "Sébastien Haller",
    "position": "Atacante",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-17",
    "code": "CIV",
    "number": 17,
    "name": "Simon Adingra",
    "position": "Atacante",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-18",
    "code": "CIV",
    "number": 18,
    "name": "Yan Diomande",
    "position": "Atacante",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-19",
    "code": "CIV",
    "number": 19,
    "name": "Evann Guessand",
    "position": "Atacante",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CIV-20",
    "code": "CIV",
    "number": 20,
    "name": "Oumar Diakite",
    "position": "Atacante",
    "country_name": "Ivory Coast",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ECU-1",
    "code": "ECU",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-2",
    "code": "ECU",
    "number": 2,
    "name": "Hernán Galíndez",
    "position": "Goleiro",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-3",
    "code": "ECU",
    "number": 3,
    "name": "Gonzalo Valle",
    "position": "Goleiro",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-4",
    "code": "ECU",
    "number": 4,
    "name": "Piero Hincapié",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-5",
    "code": "ECU",
    "number": 5,
    "name": "Pervis Estupiñán",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-6",
    "code": "ECU",
    "number": 6,
    "name": "Willian Pacho",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-7",
    "code": "ECU",
    "number": 7,
    "name": "Ángelo Preciado",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-8",
    "code": "ECU",
    "number": 8,
    "name": "Joel Ordóñez",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-9",
    "code": "ECU",
    "number": 9,
    "name": "Moises Caicedo",
    "position": "Defensor",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-10",
    "code": "ECU",
    "number": 10,
    "name": "Alan Franco",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-11",
    "code": "ECU",
    "number": 11,
    "name": "Kendry Paez",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-12",
    "code": "ECU",
    "number": 12,
    "name": "Pedro Vite",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-13",
    "code": "ECU",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-14",
    "code": "ECU",
    "number": 14,
    "name": "John Yeboah",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-15",
    "code": "ECU",
    "number": 15,
    "name": "Leonardo Campana",
    "position": "Meio-Campista",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-16",
    "code": "ECU",
    "number": 16,
    "name": "Gonzalo Plata",
    "position": "Atacante",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-17",
    "code": "ECU",
    "number": 17,
    "name": "Nilson Angulo",
    "position": "Atacante",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-18",
    "code": "ECU",
    "number": 18,
    "name": "Alan Minda",
    "position": "Atacante",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-19",
    "code": "ECU",
    "number": 19,
    "name": "Kevin Rodriguez",
    "position": "Atacante",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "ECU-20",
    "code": "ECU",
    "number": 20,
    "name": "Enner Valencia",
    "position": "Atacante",
    "country_name": "Equador",
    "flag": "ec",
    "group": "Grupo B"
  },
  {
    "id": "NED-1",
    "code": "NED",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-2",
    "code": "NED",
    "number": 2,
    "name": "Bart Verbruggen",
    "position": "Goleiro",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-3",
    "code": "NED",
    "number": 3,
    "name": "Virgil van Dijk",
    "position": "Goleiro",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-4",
    "code": "NED",
    "number": 4,
    "name": "Micky van de Ven",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-5",
    "code": "NED",
    "number": 5,
    "name": "Jurrien Timber",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-6",
    "code": "NED",
    "number": 6,
    "name": "Denzel Dumfries",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-7",
    "code": "NED",
    "number": 7,
    "name": "Nathan Aké",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-8",
    "code": "NED",
    "number": 8,
    "name": "Jeremie Frimpong",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-9",
    "code": "NED",
    "number": 9,
    "name": "Jan Paul van Hecke",
    "position": "Defensor",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-10",
    "code": "NED",
    "number": 10,
    "name": "Tijjani Reijnders",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-11",
    "code": "NED",
    "number": 11,
    "name": "Ryan Gravenberch",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-12",
    "code": "NED",
    "number": 12,
    "name": "Teun Koopmeiners",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-13",
    "code": "NED",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-14",
    "code": "NED",
    "number": 14,
    "name": "Frenkie de Jong",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-15",
    "code": "NED",
    "number": 15,
    "name": "Xavi Simons",
    "position": "Meio-Campista",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-16",
    "code": "NED",
    "number": 16,
    "name": "Justin Kluivert",
    "position": "Atacante",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-17",
    "code": "NED",
    "number": 17,
    "name": "Memphis Depay",
    "position": "Atacante",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-18",
    "code": "NED",
    "number": 18,
    "name": "Donyell Malen",
    "position": "Atacante",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-19",
    "code": "NED",
    "number": 19,
    "name": "Wout Weghorst",
    "position": "Atacante",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "NED-20",
    "code": "NED",
    "number": 20,
    "name": "Cody Gakpo",
    "position": "Atacante",
    "country_name": "Holanda",
    "flag": "nl",
    "group": "Grupo H"
  },
  {
    "id": "JPN-1",
    "code": "JPN",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-2",
    "code": "JPN",
    "number": 2,
    "name": "Zion Suzuki",
    "position": "Goleiro",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-3",
    "code": "JPN",
    "number": 3,
    "name": "Henry Heroki Mochizuki",
    "position": "Goleiro",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-4",
    "code": "JPN",
    "number": 4,
    "name": "Ayumu Seko",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-5",
    "code": "JPN",
    "number": 5,
    "name": "Junnosuke Suzuki",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-6",
    "code": "JPN",
    "number": 6,
    "name": "Shogo Taniguchi",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-7",
    "code": "JPN",
    "number": 7,
    "name": "Tsuyoshi Watanabe",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-8",
    "code": "JPN",
    "number": 8,
    "name": "Kaishu Sano",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-9",
    "code": "JPN",
    "number": 9,
    "name": "Yuki Soma",
    "position": "Defensor",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-10",
    "code": "JPN",
    "number": 10,
    "name": "Ao Tanaka",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-11",
    "code": "JPN",
    "number": 11,
    "name": "Daichi Kamada",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-12",
    "code": "JPN",
    "number": 12,
    "name": "Takefusa Kubo",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-13",
    "code": "JPN",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-14",
    "code": "JPN",
    "number": 14,
    "name": "Ritsu Doan",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-15",
    "code": "JPN",
    "number": 15,
    "name": "Keito Nakamura",
    "position": "Meio-Campista",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-16",
    "code": "JPN",
    "number": 16,
    "name": "Takumi Minamino",
    "position": "Atacante",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-17",
    "code": "JPN",
    "number": 17,
    "name": "Shuto Machino",
    "position": "Atacante",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-18",
    "code": "JPN",
    "number": 18,
    "name": "Junya Ito",
    "position": "Atacante",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-19",
    "code": "JPN",
    "number": 19,
    "name": "Koki Ogawa",
    "position": "Atacante",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "JPN-20",
    "code": "JPN",
    "number": 20,
    "name": "Ayase Ueda",
    "position": "Atacante",
    "country_name": "Japão",
    "flag": "jp",
    "group": "Grupo L"
  },
  {
    "id": "SWE-1",
    "code": "SWE",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-2",
    "code": "SWE",
    "number": 2,
    "name": "Victor Johansson",
    "position": "Goleiro",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-3",
    "code": "SWE",
    "number": 3,
    "name": "Isak Hien",
    "position": "Goleiro",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-4",
    "code": "SWE",
    "number": 4,
    "name": "Gabriel Gudmundsson",
    "position": "Defensor",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-5",
    "code": "SWE",
    "number": 5,
    "name": "Emil Holm",
    "position": "Defensor",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-6",
    "code": "SWE",
    "number": 6,
    "name": "Victor Nilsson Lindelöf",
    "position": "Defensor",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-7",
    "code": "SWE",
    "number": 7,
    "name": "Gustaf Lagerbielke",
    "position": "Defensor",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-8",
    "code": "SWE",
    "number": 8,
    "name": "Lucas Bergvall",
    "position": "Defensor",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-9",
    "code": "SWE",
    "number": 9,
    "name": "Hugo Larsson",
    "position": "Defensor",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-10",
    "code": "SWE",
    "number": 10,
    "name": "Jesper Karlström",
    "position": "Meio-Campista",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-11",
    "code": "SWE",
    "number": 11,
    "name": "Yasin Ayari",
    "position": "Meio-Campista",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-12",
    "code": "SWE",
    "number": 12,
    "name": "Mattias Svanberg",
    "position": "Meio-Campista",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-13",
    "code": "SWE",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-14",
    "code": "SWE",
    "number": 14,
    "name": "Daniel Svensson",
    "position": "Meio-Campista",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-15",
    "code": "SWE",
    "number": 15,
    "name": "Ken Sema",
    "position": "Meio-Campista",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-16",
    "code": "SWE",
    "number": 16,
    "name": "Roony Bardghji",
    "position": "Atacante",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-17",
    "code": "SWE",
    "number": 17,
    "name": "Dejan Kulusevski",
    "position": "Atacante",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-18",
    "code": "SWE",
    "number": 18,
    "name": "Anthony Elanga",
    "position": "Atacante",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-19",
    "code": "SWE",
    "number": 19,
    "name": "Alexander Isak",
    "position": "Atacante",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "SWE-20",
    "code": "SWE",
    "number": 20,
    "name": "Viktor Gyökeres",
    "position": "Atacante",
    "country_name": "Sweden",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-1",
    "code": "TUN",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-2",
    "code": "TUN",
    "number": 2,
    "name": "Bechir Ben Said",
    "position": "Goleiro",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-3",
    "code": "TUN",
    "number": 3,
    "name": "Aymen Dahmen",
    "position": "Goleiro",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-4",
    "code": "TUN",
    "number": 4,
    "name": "Yan Valery",
    "position": "Defensor",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-5",
    "code": "TUN",
    "number": 5,
    "name": "Montassar Talbi",
    "position": "Defensor",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-6",
    "code": "TUN",
    "number": 6,
    "name": "Yassine Meriah",
    "position": "Defensor",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-7",
    "code": "TUN",
    "number": 7,
    "name": "Ali Abdi",
    "position": "Defensor",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-8",
    "code": "TUN",
    "number": 8,
    "name": "Dylan Bronn",
    "position": "Defensor",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-9",
    "code": "TUN",
    "number": 9,
    "name": "Ellyes Skhiri",
    "position": "Defensor",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-10",
    "code": "TUN",
    "number": 10,
    "name": "Aissa Laidouni",
    "position": "Meio-Campista",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-11",
    "code": "TUN",
    "number": 11,
    "name": "Ferjani Sassi",
    "position": "Meio-Campista",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-12",
    "code": "TUN",
    "number": 12,
    "name": "Mohamed Ali Ben Romdhane",
    "position": "Meio-Campista",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-13",
    "code": "TUN",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-14",
    "code": "TUN",
    "number": 14,
    "name": "Hannibal Mejbri",
    "position": "Meio-Campista",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-15",
    "code": "TUN",
    "number": 15,
    "name": "Elias Achouri",
    "position": "Meio-Campista",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-16",
    "code": "TUN",
    "number": 16,
    "name": "Elias Saad",
    "position": "Atacante",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-17",
    "code": "TUN",
    "number": 17,
    "name": "Hazem Mastouri",
    "position": "Atacante",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-18",
    "code": "TUN",
    "number": 18,
    "name": "Ismael Gharbi",
    "position": "Atacante",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-19",
    "code": "TUN",
    "number": 19,
    "name": "Sayfallah Ltaief",
    "position": "Atacante",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "TUN-20",
    "code": "TUN",
    "number": 20,
    "name": "Naim Sliti",
    "position": "Atacante",
    "country_name": "Tunisia",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "BEL-1",
    "code": "BEL",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-2",
    "code": "BEL",
    "number": 2,
    "name": "Thibaut Courtois",
    "position": "Goleiro",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-3",
    "code": "BEL",
    "number": 3,
    "name": "Arthur Theate",
    "position": "Goleiro",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-4",
    "code": "BEL",
    "number": 4,
    "name": "Timothy Castagne",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-5",
    "code": "BEL",
    "number": 5,
    "name": "Zeno Debast",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-6",
    "code": "BEL",
    "number": 6,
    "name": "Brandon Mechele",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-7",
    "code": "BEL",
    "number": 7,
    "name": "Maxim De Cuyper",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-8",
    "code": "BEL",
    "number": 8,
    "name": "Thomas Meunier",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-9",
    "code": "BEL",
    "number": 9,
    "name": "Youri Tielemans",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-10",
    "code": "BEL",
    "number": 10,
    "name": "Amadou Onana",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-11",
    "code": "BEL",
    "number": 11,
    "name": "Nicolas Raskin",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-12",
    "code": "BEL",
    "number": 12,
    "name": "Alexis Saelemaekers",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-13",
    "code": "BEL",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-14",
    "code": "BEL",
    "number": 14,
    "name": "Hans Vanaken",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-15",
    "code": "BEL",
    "number": 15,
    "name": "Kevin De Bruyne",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-16",
    "code": "BEL",
    "number": 16,
    "name": "Jérémy Doku",
    "position": "Atacante",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-17",
    "code": "BEL",
    "number": 17,
    "name": "Charles De Ketelaere",
    "position": "Atacante",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-18",
    "code": "BEL",
    "number": 18,
    "name": "Leandro Trossard",
    "position": "Atacante",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-19",
    "code": "BEL",
    "number": 19,
    "name": "Loïs Openda",
    "position": "Atacante",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BEL-20",
    "code": "BEL",
    "number": 20,
    "name": "Romelu Lukaku",
    "position": "Atacante",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-2",
    "code": "BELs",
    "number": 2,
    "name": "Thibaut Courtois",
    "position": "Goleiro",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-3",
    "code": "BELs",
    "number": 3,
    "name": "Arthur Theate",
    "position": "Goleiro",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-4",
    "code": "BELs",
    "number": 4,
    "name": "Timothy Castagne",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-5",
    "code": "BELs",
    "number": 5,
    "name": "Zeno Debast",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-6",
    "code": "BELs",
    "number": 6,
    "name": "Brandon Mechele",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-7",
    "code": "BELs",
    "number": 7,
    "name": "Maxim De Cuyper",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-8",
    "code": "BELs",
    "number": 8,
    "name": "Thomas Meunier",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-9",
    "code": "BELs",
    "number": 9,
    "name": "Youri Tielemans",
    "position": "Defensor",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-10",
    "code": "BELs",
    "number": 10,
    "name": "Amadou Onana",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-11",
    "code": "BELs",
    "number": 11,
    "name": "Nicolas Raskin",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-12",
    "code": "BELs",
    "number": 12,
    "name": "Alexis Saelemaekers",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-14",
    "code": "BELs",
    "number": 14,
    "name": "Hans Vanaken",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-15",
    "code": "BELs",
    "number": 15,
    "name": "Kevin De Bruyne",
    "position": "Meio-Campista",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-16",
    "code": "BELs",
    "number": 16,
    "name": "Jérémy Doku",
    "position": "Atacante",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-17",
    "code": "BELs",
    "number": 17,
    "name": "Charles De Ketelaere",
    "position": "Atacante",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-18",
    "code": "BELs",
    "number": 18,
    "name": "Leandro Trossard",
    "position": "Atacante",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-19",
    "code": "BELs",
    "number": 19,
    "name": "Loïs Openda",
    "position": "Atacante",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "BELs-20",
    "code": "BELs",
    "number": 20,
    "name": "Romelu Lukaku",
    "position": "Atacante",
    "country_name": "Bélgica",
    "flag": "be",
    "group": "Grupo I"
  },
  {
    "id": "EGY-1",
    "code": "EGY",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-2",
    "code": "EGY",
    "number": 2,
    "name": "Mohamed El Shenawy",
    "position": "Goleiro",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-3",
    "code": "EGY",
    "number": 3,
    "name": "Mohamed Hany",
    "position": "Goleiro",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-4",
    "code": "EGY",
    "number": 4,
    "name": "Mohamed Hamdy",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-5",
    "code": "EGY",
    "number": 5,
    "name": "Yasser Ibrahim",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-6",
    "code": "EGY",
    "number": 6,
    "name": "Khaled Sobhi",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-7",
    "code": "EGY",
    "number": 7,
    "name": "Ramy Rabia",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-8",
    "code": "EGY",
    "number": 8,
    "name": "Hossam Abdelmaguid",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-9",
    "code": "EGY",
    "number": 9,
    "name": "Ahmed Fatouh",
    "position": "Defensor",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-10",
    "code": "EGY",
    "number": 10,
    "name": "Marwan Attia",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-11",
    "code": "EGY",
    "number": 11,
    "name": "Zizo",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-12",
    "code": "EGY",
    "number": 12,
    "name": "Hamdy Fathy",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-13",
    "code": "EGY",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-14",
    "code": "EGY",
    "number": 14,
    "name": "Mohamed Lasheen",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-15",
    "code": "EGY",
    "number": 15,
    "name": "Emam Ashour",
    "position": "Meio-Campista",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-16",
    "code": "EGY",
    "number": 16,
    "name": "Osama Faisal",
    "position": "Atacante",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-17",
    "code": "EGY",
    "number": 17,
    "name": "Mohamed Salah",
    "position": "Atacante",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-18",
    "code": "EGY",
    "number": 18,
    "name": "Mostafa Mohamed",
    "position": "Atacante",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-19",
    "code": "EGY",
    "number": 19,
    "name": "Trezeguet",
    "position": "Atacante",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "EGY-20",
    "code": "EGY",
    "number": 20,
    "name": "Omar Marmoush",
    "position": "Atacante",
    "country_name": "Egito",
    "flag": "eg",
    "group": "Grupo K"
  },
  {
    "id": "IRN-1",
    "code": "IRN",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-2",
    "code": "IRN",
    "number": 2,
    "name": "Alireza Beiranvand",
    "position": "Goleiro",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-3",
    "code": "IRN",
    "number": 3,
    "name": "Morteza Pouraliganji",
    "position": "Goleiro",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-4",
    "code": "IRN",
    "number": 4,
    "name": "Ehsan Hajsafi",
    "position": "Defensor",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-5",
    "code": "IRN",
    "number": 5,
    "name": "Milad Mohammadi",
    "position": "Defensor",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-6",
    "code": "IRN",
    "number": 6,
    "name": "Shojae Khalilzadeh",
    "position": "Defensor",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-7",
    "code": "IRN",
    "number": 7,
    "name": "Ramin Rezaeian",
    "position": "Defensor",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-8",
    "code": "IRN",
    "number": 8,
    "name": "Hossein Kanaani",
    "position": "Defensor",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-9",
    "code": "IRN",
    "number": 9,
    "name": "Sadegh Moharrami",
    "position": "Defensor",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-10",
    "code": "IRN",
    "number": 10,
    "name": "Saleh Hardani",
    "position": "Meio-Campista",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-11",
    "code": "IRN",
    "number": 11,
    "name": "Saeed Ezatolahi",
    "position": "Meio-Campista",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-12",
    "code": "IRN",
    "number": 12,
    "name": "Saman Ghoddos",
    "position": "Meio-Campista",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-13",
    "code": "IRN",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-14",
    "code": "IRN",
    "number": 14,
    "name": "Omid Noorafkan",
    "position": "Meio-Campista",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-15",
    "code": "IRN",
    "number": 15,
    "name": "Roozbeh Cheshmi",
    "position": "Meio-Campista",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-16",
    "code": "IRN",
    "number": 16,
    "name": "Mohammad Mohebi",
    "position": "Atacante",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-17",
    "code": "IRN",
    "number": 17,
    "name": "Sardar Azmoun",
    "position": "Atacante",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-18",
    "code": "IRN",
    "number": 18,
    "name": "Mehdi Taremi",
    "position": "Atacante",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-19",
    "code": "IRN",
    "number": 19,
    "name": "Alireza Jahanbakhsh",
    "position": "Atacante",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRN-20",
    "code": "IRN",
    "number": 20,
    "name": "Ali Gholizadeh",
    "position": "Atacante",
    "country_name": "Iran",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-1",
    "code": "NZL",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-2",
    "code": "NZL",
    "number": 2,
    "name": "Max Crocombe",
    "position": "Goleiro",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-3",
    "code": "NZL",
    "number": 3,
    "name": "Alex Paulsen",
    "position": "Goleiro",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-4",
    "code": "NZL",
    "number": 4,
    "name": "Michael Boxall",
    "position": "Defensor",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-5",
    "code": "NZL",
    "number": 5,
    "name": "Liberato Cacace",
    "position": "Defensor",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-6",
    "code": "NZL",
    "number": 6,
    "name": "Tim Payne",
    "position": "Defensor",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-7",
    "code": "NZL",
    "number": 7,
    "name": "Tyler Bindon",
    "position": "Defensor",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-8",
    "code": "NZL",
    "number": 8,
    "name": "Francis de Vries",
    "position": "Defensor",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-9",
    "code": "NZL",
    "number": 9,
    "name": "Finn Surman",
    "position": "Defensor",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-10",
    "code": "NZL",
    "number": 10,
    "name": "Joe Bell",
    "position": "Meio-Campista",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-11",
    "code": "NZL",
    "number": 11,
    "name": "Sarpreet Singh",
    "position": "Meio-Campista",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-12",
    "code": "NZL",
    "number": 12,
    "name": "Ryan Thomas",
    "position": "Meio-Campista",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-13",
    "code": "NZL",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-14",
    "code": "NZL",
    "number": 14,
    "name": "Matthew Garbett",
    "position": "Meio-Campista",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-15",
    "code": "NZL",
    "number": 15,
    "name": "Marko Stamenić",
    "position": "Meio-Campista",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-16",
    "code": "NZL",
    "number": 16,
    "name": "Ben Old",
    "position": "Atacante",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-17",
    "code": "NZL",
    "number": 17,
    "name": "Chris Wood",
    "position": "Atacante",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-18",
    "code": "NZL",
    "number": 18,
    "name": "Elijah Just",
    "position": "Atacante",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-19",
    "code": "NZL",
    "number": 19,
    "name": "Callum McCowatt",
    "position": "Atacante",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NZL-20",
    "code": "NZL",
    "number": 20,
    "name": "Kosta Barbarouses",
    "position": "Atacante",
    "country_name": "New Zealand",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ESP-1",
    "code": "ESP",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-2",
    "code": "ESP",
    "number": 2,
    "name": "Unai Simon",
    "position": "Goleiro",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-3",
    "code": "ESP",
    "number": 3,
    "name": "Robin Le Normand",
    "position": "Goleiro",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-4",
    "code": "ESP",
    "number": 4,
    "name": "Aymeric Laporte",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-5",
    "code": "ESP",
    "number": 5,
    "name": "Dean Huijsen",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-6",
    "code": "ESP",
    "number": 6,
    "name": "Pedro Porro",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-7",
    "code": "ESP",
    "number": 7,
    "name": "Dani Carvajal",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-8",
    "code": "ESP",
    "number": 8,
    "name": "Marc Cucurella",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-9",
    "code": "ESP",
    "number": 9,
    "name": "Martín Zubimendi",
    "position": "Defensor",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-10",
    "code": "ESP",
    "number": 10,
    "name": "Rodri",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-11",
    "code": "ESP",
    "number": 11,
    "name": "Pedri",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-12",
    "code": "ESP",
    "number": 12,
    "name": "Fabian Ruiz",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-13",
    "code": "ESP",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-14",
    "code": "ESP",
    "number": 14,
    "name": "Mikel Merino",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-15",
    "code": "ESP",
    "number": 15,
    "name": "Lamine Yamal",
    "position": "Meio-Campista",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-16",
    "code": "ESP",
    "number": 16,
    "name": "Dani Olmo",
    "position": "Atacante",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-17",
    "code": "ESP",
    "number": 17,
    "name": "Nico Williams",
    "position": "Atacante",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-18",
    "code": "ESP",
    "number": 18,
    "name": "Ferran Torres",
    "position": "Atacante",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-19",
    "code": "ESP",
    "number": 19,
    "name": "Álvaro Morata",
    "position": "Atacante",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "ESP-20",
    "code": "ESP",
    "number": 20,
    "name": "Mikel Oyarzabal",
    "position": "Atacante",
    "country_name": "Espanha",
    "flag": "es",
    "group": "Grupo F"
  },
  {
    "id": "CPV-1",
    "code": "CPV",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-2",
    "code": "CPV",
    "number": 2,
    "name": "Vozinha",
    "position": "Goleiro",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-3",
    "code": "CPV",
    "number": 3,
    "name": "Logan Costa",
    "position": "Goleiro",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-4",
    "code": "CPV",
    "number": 4,
    "name": "Pico",
    "position": "Defensor",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-5",
    "code": "CPV",
    "number": 5,
    "name": "Diney",
    "position": "Defensor",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-6",
    "code": "CPV",
    "number": 6,
    "name": "Steven Moreira",
    "position": "Defensor",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-7",
    "code": "CPV",
    "number": 7,
    "name": "Wagner Pina",
    "position": "Defensor",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-8",
    "code": "CPV",
    "number": 8,
    "name": "Joao Paulo",
    "position": "Defensor",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-9",
    "code": "CPV",
    "number": 9,
    "name": "Yannick Semedo",
    "position": "Defensor",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-10",
    "code": "CPV",
    "number": 10,
    "name": "Kevin Pina",
    "position": "Meio-Campista",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-11",
    "code": "CPV",
    "number": 11,
    "name": "Patrick Andrade",
    "position": "Meio-Campista",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-12",
    "code": "CPV",
    "number": 12,
    "name": "Jamiro Monteiro",
    "position": "Meio-Campista",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-13",
    "code": "CPV",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-14",
    "code": "CPV",
    "number": 14,
    "name": "Deroy Duarte",
    "position": "Meio-Campista",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-15",
    "code": "CPV",
    "number": 15,
    "name": "Garry Rodrigues",
    "position": "Meio-Campista",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-16",
    "code": "CPV",
    "number": 16,
    "name": "Jovane Cabral",
    "position": "Atacante",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-17",
    "code": "CPV",
    "number": 17,
    "name": "Ryan Mendes",
    "position": "Atacante",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-18",
    "code": "CPV",
    "number": 18,
    "name": "Dailon Livramento",
    "position": "Atacante",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-19",
    "code": "CPV",
    "number": 19,
    "name": "Willy Semedo",
    "position": "Atacante",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "CPV-20",
    "code": "CPV",
    "number": 20,
    "name": "Bebe",
    "position": "Atacante",
    "country_name": "Cape Verde",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "KSA-1",
    "code": "KSA",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-2",
    "code": "KSA",
    "number": 2,
    "name": "Nawaf Alaqidi",
    "position": "Goleiro",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-3",
    "code": "KSA",
    "number": 3,
    "name": "Abdulrahman Al-Sanbi",
    "position": "Goleiro",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-4",
    "code": "KSA",
    "number": 4,
    "name": "Saud Abdulhamid",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-5",
    "code": "KSA",
    "number": 5,
    "name": "Nawaf Bouwashl",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-6",
    "code": "KSA",
    "number": 6,
    "name": "Jihad Thakri",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-7",
    "code": "KSA",
    "number": 7,
    "name": "Moteb Al-Harbi",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-8",
    "code": "KSA",
    "number": 8,
    "name": "Hassan Altambakti",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-9",
    "code": "KSA",
    "number": 9,
    "name": "Musab Aljuwayr",
    "position": "Defensor",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-10",
    "code": "KSA",
    "number": 10,
    "name": "Ziyad Aljohani",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-11",
    "code": "KSA",
    "number": 11,
    "name": "Abdullah Alkhaibari",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-12",
    "code": "KSA",
    "number": 12,
    "name": "Nasser Aldawsari",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-13",
    "code": "KSA",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-14",
    "code": "KSA",
    "number": 14,
    "name": "Saleh Abu Alshamat",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-15",
    "code": "KSA",
    "number": 15,
    "name": "Marwan Alsahafi",
    "position": "Meio-Campista",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-16",
    "code": "KSA",
    "number": 16,
    "name": "Salem Aldawsari",
    "position": "Atacante",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-17",
    "code": "KSA",
    "number": 17,
    "name": "Abdulrahman Al-Aboud",
    "position": "Atacante",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-18",
    "code": "KSA",
    "number": 18,
    "name": "Feras Akbrikan",
    "position": "Atacante",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-19",
    "code": "KSA",
    "number": 19,
    "name": "Saleh Alshehri",
    "position": "Atacante",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "KSA-20",
    "code": "KSA",
    "number": 20,
    "name": "Abdullah Al-Hamdan",
    "position": "Atacante",
    "country_name": "Arábia Saudita",
    "flag": "sa",
    "group": "Grupo L"
  },
  {
    "id": "URU-1",
    "code": "URU",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-2",
    "code": "URU",
    "number": 2,
    "name": "Sergio Rochet",
    "position": "Goleiro",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-3",
    "code": "URU",
    "number": 3,
    "name": "Santiago Mele",
    "position": "Goleiro",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-4",
    "code": "URU",
    "number": 4,
    "name": "Ronald Araujo",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-5",
    "code": "URU",
    "number": 5,
    "name": "José María Giménez",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-6",
    "code": "URU",
    "number": 6,
    "name": "Sebastian Caceres",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-7",
    "code": "URU",
    "number": 7,
    "name": "Mathias Olivera",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-8",
    "code": "URU",
    "number": 8,
    "name": "Guillermo Varela",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-9",
    "code": "URU",
    "number": 9,
    "name": "Nahitan Nandez",
    "position": "Defensor",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-10",
    "code": "URU",
    "number": 10,
    "name": "Federico Valverde",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-11",
    "code": "URU",
    "number": 11,
    "name": "Giorgian De Arrascaeta",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-12",
    "code": "URU",
    "number": 12,
    "name": "Rodrigo Bentancur",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-13",
    "code": "URU",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-14",
    "code": "URU",
    "number": 14,
    "name": "Manuel Ugarte",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-15",
    "code": "URU",
    "number": 15,
    "name": "Nicolás de la Cruz",
    "position": "Meio-Campista",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-16",
    "code": "URU",
    "number": 16,
    "name": "Maxi Araujo",
    "position": "Atacante",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-17",
    "code": "URU",
    "number": 17,
    "name": "Darwin Núñez",
    "position": "Atacante",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-18",
    "code": "URU",
    "number": 18,
    "name": "Federico Viñas",
    "position": "Atacante",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-19",
    "code": "URU",
    "number": 19,
    "name": "Rodrigo Aguirre",
    "position": "Atacante",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "URU-20",
    "code": "URU",
    "number": 20,
    "name": "Facundo Pellistri",
    "position": "Atacante",
    "country_name": "Uruguai",
    "flag": "uy",
    "group": "Grupo B"
  },
  {
    "id": "FRA-1",
    "code": "FRA",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-2",
    "code": "FRA",
    "number": 2,
    "name": "Mike Maignan",
    "position": "Goleiro",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-3",
    "code": "FRA",
    "number": 3,
    "name": "Theo Hernandez",
    "position": "Goleiro",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-4",
    "code": "FRA",
    "number": 4,
    "name": "William Saliba",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-5",
    "code": "FRA",
    "number": 5,
    "name": "Jules Kounde",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-6",
    "code": "FRA",
    "number": 6,
    "name": "Ibrahima Konate",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-7",
    "code": "FRA",
    "number": 7,
    "name": "Dayot Upamecano",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-8",
    "code": "FRA",
    "number": 8,
    "name": "Lucas Digne",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-9",
    "code": "FRA",
    "number": 9,
    "name": "Aurélien Tchouaméni",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-10",
    "code": "FRA",
    "number": 10,
    "name": "Eduardo Camavinga",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-11",
    "code": "FRA",
    "number": 11,
    "name": "Manu Kone",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-12",
    "code": "FRA",
    "number": 12,
    "name": "Adrien Rabiot",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-13",
    "code": "FRA",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-14",
    "code": "FRA",
    "number": 14,
    "name": "Michael Olise",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-15",
    "code": "FRA",
    "number": 15,
    "name": "Ousmane Dembele",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-16",
    "code": "FRA",
    "number": 16,
    "name": "Bradley Barcola",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-17",
    "code": "FRA",
    "number": 17,
    "name": "Désiré Doué",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-18",
    "code": "FRA",
    "number": 18,
    "name": "Kingsley Coman",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-19",
    "code": "FRA",
    "number": 19,
    "name": "Hugo Ekitike",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-2",
    "code": "FRAs",
    "number": 2,
    "name": "Mike Maignan",
    "position": "Goleiro",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-3",
    "code": "FRAs",
    "number": 3,
    "name": "Theo Hernandez",
    "position": "Goleiro",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-4",
    "code": "FRAs",
    "number": 4,
    "name": "William Saliba",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-5",
    "code": "FRAs",
    "number": 5,
    "name": "Jules Kounde",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-6",
    "code": "FRAs",
    "number": 6,
    "name": "Ibrahima Konate",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-7",
    "code": "FRAs",
    "number": 7,
    "name": "Dayot Upamecano",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-8",
    "code": "FRAs",
    "number": 8,
    "name": "Lucas Digne",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-9",
    "code": "FRAs",
    "number": 9,
    "name": "Aurélien Tchouaméni",
    "position": "Defensor",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-10",
    "code": "FRAs",
    "number": 10,
    "name": "Eduardo Camavinga",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-11",
    "code": "FRAs",
    "number": 11,
    "name": "Manu Kone",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-12",
    "code": "FRAs",
    "number": 12,
    "name": "Adrien Rabiot",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-14",
    "code": "FRAs",
    "number": 14,
    "name": "Michael Olise",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-15",
    "code": "FRAs",
    "number": 15,
    "name": "Ousmane Dembele",
    "position": "Meio-Campista",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-16",
    "code": "FRAs",
    "number": 16,
    "name": "Bradley Barcola",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-17",
    "code": "FRAs",
    "number": 17,
    "name": "Désiré Doué",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-18",
    "code": "FRAs",
    "number": 18,
    "name": "Kingsley Coman",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-19",
    "code": "FRAs",
    "number": 19,
    "name": "Hugo Ekitike",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRA-20",
    "code": "FRA",
    "number": 20,
    "name": "Kylian Mbappe",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "FRAs-20",
    "code": "FRAs",
    "number": 20,
    "name": "Kylian Mbappe",
    "position": "Atacante",
    "country_name": "França",
    "flag": "fr",
    "group": "Grupo H"
  },
  {
    "id": "SEN-1",
    "code": "SEN",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-2",
    "code": "SEN",
    "number": 2,
    "name": "Édouard Mendy",
    "position": "Goleiro",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-3",
    "code": "SEN",
    "number": 3,
    "name": "Yehvann Diouf",
    "position": "Goleiro",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-4",
    "code": "SEN",
    "number": 4,
    "name": "Moussa Niakhaté",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-5",
    "code": "SEN",
    "number": 5,
    "name": "Abdoulaye Seck",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-6",
    "code": "SEN",
    "number": 6,
    "name": "Ismail Jakobs",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-7",
    "code": "SEN",
    "number": 7,
    "name": "El Hadji Malick Diouf",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-8",
    "code": "SEN",
    "number": 8,
    "name": "Kalidou Koulibaly",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-9",
    "code": "SEN",
    "number": 9,
    "name": "Idrissa Gana Gueye",
    "position": "Defensor",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-10",
    "code": "SEN",
    "number": 10,
    "name": "Pape Matar Sarr",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-11",
    "code": "SEN",
    "number": 11,
    "name": "Pape Gueye",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-12",
    "code": "SEN",
    "number": 12,
    "name": "Habib Diarra",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-13",
    "code": "SEN",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-14",
    "code": "SEN",
    "number": 14,
    "name": "Lamine Camara",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-15",
    "code": "SEN",
    "number": 15,
    "name": "Sadio Mane",
    "position": "Meio-Campista",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-16",
    "code": "SEN",
    "number": 16,
    "name": "Ismaïla Sarr",
    "position": "Atacante",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-17",
    "code": "SEN",
    "number": 17,
    "name": "Boulaye Dia",
    "position": "Atacante",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-18",
    "code": "SEN",
    "number": 18,
    "name": "Iliman Ndiaye",
    "position": "Atacante",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-19",
    "code": "SEN",
    "number": 19,
    "name": "Nicolas Jackson",
    "position": "Atacante",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "SEN-20",
    "code": "SEN",
    "number": 20,
    "name": "Krepin Diatta",
    "position": "Atacante",
    "country_name": "Senegal",
    "flag": "sn",
    "group": "Grupo K"
  },
  {
    "id": "IRQ-1",
    "code": "IRQ",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-2",
    "code": "IRQ",
    "number": 2,
    "name": "Jalal Hassan",
    "position": "Goleiro",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-3",
    "code": "IRQ",
    "number": 3,
    "name": "Rebin Sulaka",
    "position": "Goleiro",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-4",
    "code": "IRQ",
    "number": 4,
    "name": "Hussein Ali",
    "position": "Defensor",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-5",
    "code": "IRQ",
    "number": 5,
    "name": "Akam Hashem",
    "position": "Defensor",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-6",
    "code": "IRQ",
    "number": 6,
    "name": "Merchas Doski",
    "position": "Defensor",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-7",
    "code": "IRQ",
    "number": 7,
    "name": "Zaid Tahseen",
    "position": "Defensor",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-8",
    "code": "IRQ",
    "number": 8,
    "name": "Manaf Younis",
    "position": "Defensor",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-9",
    "code": "IRQ",
    "number": 9,
    "name": "Zidane Iqbal",
    "position": "Defensor",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-10",
    "code": "IRQ",
    "number": 10,
    "name": "Amir Al-Ammari",
    "position": "Meio-Campista",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-11",
    "code": "IRQ",
    "number": 11,
    "name": "Ibrahim Bavesh",
    "position": "Meio-Campista",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-12",
    "code": "IRQ",
    "number": 12,
    "name": "Ali Jasim",
    "position": "Meio-Campista",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-13",
    "code": "IRQ",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-14",
    "code": "IRQ",
    "number": 14,
    "name": "Youssef Amyn",
    "position": "Meio-Campista",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-15",
    "code": "IRQ",
    "number": 15,
    "name": "Aimar Sher",
    "position": "Meio-Campista",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-16",
    "code": "IRQ",
    "number": 16,
    "name": "Marko Farji",
    "position": "Atacante",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-17",
    "code": "IRQ",
    "number": 17,
    "name": "Osama Rashid",
    "position": "Atacante",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-18",
    "code": "IRQ",
    "number": 18,
    "name": "Ali Al-Hamadi",
    "position": "Atacante",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-19",
    "code": "IRQ",
    "number": 19,
    "name": "Aymen Hussein",
    "position": "Atacante",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "IRQ-20",
    "code": "IRQ",
    "number": 20,
    "name": "Mohanad Ali",
    "position": "Atacante",
    "country_name": "Iraq",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-1",
    "code": "NOR",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-2",
    "code": "NOR",
    "number": 2,
    "name": "Orjan Nyland",
    "position": "Goleiro",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-3",
    "code": "NOR",
    "number": 3,
    "name": "Julian Ryerson",
    "position": "Goleiro",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-4",
    "code": "NOR",
    "number": 4,
    "name": "Leo Ostigård",
    "position": "Defensor",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-5",
    "code": "NOR",
    "number": 5,
    "name": "Kristoffer Vassbakk Ajer",
    "position": "Defensor",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-6",
    "code": "NOR",
    "number": 6,
    "name": "Marcus Holmgren Pedersen",
    "position": "Defensor",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-7",
    "code": "NOR",
    "number": 7,
    "name": "David Møller Wolfe",
    "position": "Defensor",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-8",
    "code": "NOR",
    "number": 8,
    "name": "Torbjørn Heggem",
    "position": "Defensor",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-9",
    "code": "NOR",
    "number": 9,
    "name": "Morten Thorsby",
    "position": "Defensor",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-10",
    "code": "NOR",
    "number": 10,
    "name": "Martin Ødegaard",
    "position": "Meio-Campista",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-11",
    "code": "NOR",
    "number": 11,
    "name": "Sander Berge",
    "position": "Meio-Campista",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-12",
    "code": "NOR",
    "number": 12,
    "name": "Andreas Schjelderup",
    "position": "Meio-Campista",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-13",
    "code": "NOR",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-14",
    "code": "NOR",
    "number": 14,
    "name": "Patrick Berg",
    "position": "Meio-Campista",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-15",
    "code": "NOR",
    "number": 15,
    "name": "Erling Haaland",
    "position": "Meio-Campista",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-16",
    "code": "NOR",
    "number": 16,
    "name": "Alexander Sørloth",
    "position": "Atacante",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-17",
    "code": "NOR",
    "number": 17,
    "name": "Aron Dønnum",
    "position": "Atacante",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-18",
    "code": "NOR",
    "number": 18,
    "name": "Jorgen Strand Larsen",
    "position": "Atacante",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-19",
    "code": "NOR",
    "number": 19,
    "name": "Antonio Nusa",
    "position": "Atacante",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "NOR-20",
    "code": "NOR",
    "number": 20,
    "name": "Oscar Bobb",
    "position": "Atacante",
    "country_name": "Norway",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ARG-1",
    "code": "ARG",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-2",
    "code": "ARG",
    "number": 2,
    "name": "Emiliano Martinez",
    "position": "Goleiro",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-3",
    "code": "ARG",
    "number": 3,
    "name": "Nahuel Molina",
    "position": "Goleiro",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-4",
    "code": "ARG",
    "number": 4,
    "name": "Cristian Romero",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-5",
    "code": "ARG",
    "number": 5,
    "name": "Nicolas Otamendi",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-6",
    "code": "ARG",
    "number": 6,
    "name": "Nicolas Tagliafico",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-7",
    "code": "ARG",
    "number": 7,
    "name": "Leonardo Balerdi",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-8",
    "code": "ARG",
    "number": 8,
    "name": "Enzo Fernandez",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-9",
    "code": "ARG",
    "number": 9,
    "name": "Alexis Mac Allister",
    "position": "Defensor",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-10",
    "code": "ARG",
    "number": 10,
    "name": "Rodrigo De Paul",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-11",
    "code": "ARG",
    "number": 11,
    "name": "Exequiel Palacios",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-12",
    "code": "ARG",
    "number": 12,
    "name": "Leandro Paredes",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-13",
    "code": "ARG",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-14",
    "code": "ARG",
    "number": 14,
    "name": "Nico Paz",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-15",
    "code": "ARG",
    "number": 15,
    "name": "Franco Mastantuono",
    "position": "Meio-Campista",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-16",
    "code": "ARG",
    "number": 16,
    "name": "Nico Gonzalez",
    "position": "Atacante",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-17",
    "code": "ARG",
    "number": 17,
    "name": "Lionel Messi",
    "position": "Atacante",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-18",
    "code": "ARG",
    "number": 18,
    "name": "Lautaro Martinez",
    "position": "Atacante",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-19",
    "code": "ARG",
    "number": 19,
    "name": "Julian Alvarez",
    "position": "Atacante",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ARG-20",
    "code": "ARG",
    "number": 20,
    "name": "Giuliano Simeone",
    "position": "Atacante",
    "country_name": "Argentina",
    "flag": "ar",
    "group": "Grupo C"
  },
  {
    "id": "ALG-1",
    "code": "ALG",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-2",
    "code": "ALG",
    "number": 2,
    "name": "Alexis Guendouz",
    "position": "Goleiro",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-3",
    "code": "ALG",
    "number": 3,
    "name": "Ramy Bensebaini",
    "position": "Goleiro",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-4",
    "code": "ALG",
    "number": 4,
    "name": "Youcef Atal",
    "position": "Defensor",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-5",
    "code": "ALG",
    "number": 5,
    "name": "Rayan Aït-Nouri",
    "position": "Defensor",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-6",
    "code": "ALG",
    "number": 6,
    "name": "Mohamed Amine Tougai",
    "position": "Defensor",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-7",
    "code": "ALG",
    "number": 7,
    "name": "Aïssa Mandi",
    "position": "Defensor",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-8",
    "code": "ALG",
    "number": 8,
    "name": "Ismael Bennacer",
    "position": "Defensor",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-9",
    "code": "ALG",
    "number": 9,
    "name": "Houssem Aouar",
    "position": "Defensor",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-10",
    "code": "ALG",
    "number": 10,
    "name": "Hicham Boudaoui",
    "position": "Meio-Campista",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-11",
    "code": "ALG",
    "number": 11,
    "name": "Ramiz Zerrouki",
    "position": "Meio-Campista",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-12",
    "code": "ALG",
    "number": 12,
    "name": "Nabil Bentaleb",
    "position": "Meio-Campista",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-13",
    "code": "ALG",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-14",
    "code": "ALG",
    "number": 14,
    "name": "Farés Chaibi",
    "position": "Meio-Campista",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-15",
    "code": "ALG",
    "number": 15,
    "name": "Riyad Mahrez",
    "position": "Meio-Campista",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-16",
    "code": "ALG",
    "number": 16,
    "name": "Said Benrahma",
    "position": "Atacante",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-17",
    "code": "ALG",
    "number": 17,
    "name": "Anis Hadj Moussa",
    "position": "Atacante",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-18",
    "code": "ALG",
    "number": 18,
    "name": "Amine Gouiri",
    "position": "Atacante",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-19",
    "code": "ALG",
    "number": 19,
    "name": "Baghdad Bounedjah",
    "position": "Atacante",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "ALG-20",
    "code": "ALG",
    "number": 20,
    "name": "Mohammed Amoura",
    "position": "Atacante",
    "country_name": "Algeria",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "AUT-1",
    "code": "AUT",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-2",
    "code": "AUT",
    "number": 2,
    "name": "Alexander Schlager",
    "position": "Goleiro",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-3",
    "code": "AUT",
    "number": 3,
    "name": "Patrick Pentz",
    "position": "Goleiro",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-4",
    "code": "AUT",
    "number": 4,
    "name": "David Alaba",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-5",
    "code": "AUT",
    "number": 5,
    "name": "Kevin Danso",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-6",
    "code": "AUT",
    "number": 6,
    "name": "Philipp Lienhart",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-7",
    "code": "AUT",
    "number": 7,
    "name": "Stefan Posch",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-8",
    "code": "AUT",
    "number": 8,
    "name": "Phillipp Mwene",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-9",
    "code": "AUT",
    "number": 9,
    "name": "Alexander Prass",
    "position": "Defensor",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-10",
    "code": "AUT",
    "number": 10,
    "name": "Xaver Schlager",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-11",
    "code": "AUT",
    "number": 11,
    "name": "Marcel Sabitzer",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-12",
    "code": "AUT",
    "number": 12,
    "name": "Konrad Laimer",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-13",
    "code": "AUT",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-14",
    "code": "AUT",
    "number": 14,
    "name": "Florian Grillitsch",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-15",
    "code": "AUT",
    "number": 15,
    "name": "Nicolas Seiwald",
    "position": "Meio-Campista",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-16",
    "code": "AUT",
    "number": 16,
    "name": "Romano Schmid",
    "position": "Atacante",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-17",
    "code": "AUT",
    "number": 17,
    "name": "Patrick Wimmer",
    "position": "Atacante",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-18",
    "code": "AUT",
    "number": 18,
    "name": "Christoph Baumgartner",
    "position": "Atacante",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-19",
    "code": "AUT",
    "number": 19,
    "name": "Michael Gregoritsch",
    "position": "Atacante",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "AUT-20",
    "code": "AUT",
    "number": 20,
    "name": "Marko Arnautović",
    "position": "Atacante",
    "country_name": "Áustria",
    "flag": "at",
    "group": "Grupo H"
  },
  {
    "id": "JOR-1",
    "code": "JOR",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-2",
    "code": "JOR",
    "number": 2,
    "name": "Yazeed Abulaila",
    "position": "Goleiro",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-3",
    "code": "JOR",
    "number": 3,
    "name": "Ihsan Haddad",
    "position": "Goleiro",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-4",
    "code": "JOR",
    "number": 4,
    "name": "Mohammad Abu Hashish",
    "position": "Defensor",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-5",
    "code": "JOR",
    "number": 5,
    "name": "Yazan Al-Arab",
    "position": "Defensor",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-6",
    "code": "JOR",
    "number": 6,
    "name": "Abdallah Nasib",
    "position": "Defensor",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-7",
    "code": "JOR",
    "number": 7,
    "name": "Saleem Obaid",
    "position": "Defensor",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-8",
    "code": "JOR",
    "number": 8,
    "name": "Mohammad Abualnadi",
    "position": "Defensor",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-9",
    "code": "JOR",
    "number": 9,
    "name": "Ibrahim Saadeh",
    "position": "Defensor",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-10",
    "code": "JOR",
    "number": 10,
    "name": "Nizar Al-Rashdan",
    "position": "Meio-Campista",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-11",
    "code": "JOR",
    "number": 11,
    "name": "Noor Al-Rawabdeh",
    "position": "Meio-Campista",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-12",
    "code": "JOR",
    "number": 12,
    "name": "Mohannad Abu Taha",
    "position": "Meio-Campista",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-13",
    "code": "JOR",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-14",
    "code": "JOR",
    "number": 14,
    "name": "Amer Jamous",
    "position": "Meio-Campista",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-15",
    "code": "JOR",
    "number": 15,
    "name": "Musa Al-Taamari",
    "position": "Meio-Campista",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-16",
    "code": "JOR",
    "number": 16,
    "name": "Yazan Al-Naimat",
    "position": "Atacante",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-17",
    "code": "JOR",
    "number": 17,
    "name": "Mahmoud Al-Mardi",
    "position": "Atacante",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-18",
    "code": "JOR",
    "number": 18,
    "name": "Ali Olwan",
    "position": "Atacante",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-19",
    "code": "JOR",
    "number": 19,
    "name": "Mohammad Abu Zrayq",
    "position": "Atacante",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "JOR-20",
    "code": "JOR",
    "number": 20,
    "name": "Ibrahim Sabra",
    "position": "Atacante",
    "country_name": "Jordan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "POR-1",
    "code": "POR",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-2",
    "code": "POR",
    "number": 2,
    "name": "Diogo Costa",
    "position": "Goleiro",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-3",
    "code": "POR",
    "number": 3,
    "name": "José Sá",
    "position": "Goleiro",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-4",
    "code": "POR",
    "number": 4,
    "name": "Ruben Dias",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-5",
    "code": "POR",
    "number": 5,
    "name": "João Cancelo",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-6",
    "code": "POR",
    "number": 6,
    "name": "Diogo Dalot",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-7",
    "code": "POR",
    "number": 7,
    "name": "Nuno Mendes",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-8",
    "code": "POR",
    "number": 8,
    "name": "Gonçalo Inácio",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-9",
    "code": "POR",
    "number": 9,
    "name": "Bernardo Silva",
    "position": "Defensor",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-10",
    "code": "POR",
    "number": 10,
    "name": "Bruno Fernandes",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-11",
    "code": "POR",
    "number": 11,
    "name": "Ruben Neves",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-12",
    "code": "POR",
    "number": 12,
    "name": "Vitinha",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-13",
    "code": "POR",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-14",
    "code": "POR",
    "number": 14,
    "name": "João Neves",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-15",
    "code": "POR",
    "number": 15,
    "name": "Cristiano Ronaldo",
    "position": "Meio-Campista",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-16",
    "code": "POR",
    "number": 16,
    "name": "Francisco Trincao",
    "position": "Atacante",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-17",
    "code": "POR",
    "number": 17,
    "name": "João Felix",
    "position": "Atacante",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-18",
    "code": "POR",
    "number": 18,
    "name": "Gonçalo Ramos",
    "position": "Atacante",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-19",
    "code": "POR",
    "number": 19,
    "name": "Pedro Neto",
    "position": "Atacante",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "POR-20",
    "code": "POR",
    "number": 20,
    "name": "Rafael Leão",
    "position": "Atacante",
    "country_name": "Portugal",
    "flag": "pt",
    "group": "Grupo J"
  },
  {
    "id": "COD-1",
    "code": "COD",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-2",
    "code": "COD",
    "number": 2,
    "name": "Lionel Mpasi-Nzau",
    "position": "Goleiro",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-3",
    "code": "COD",
    "number": 3,
    "name": "Aaron Wan-Bissaka",
    "position": "Goleiro",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-4",
    "code": "COD",
    "number": 4,
    "name": "Axel Tuanzebe",
    "position": "Defensor",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-5",
    "code": "COD",
    "number": 5,
    "name": "Arthur Masuaku",
    "position": "Defensor",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-6",
    "code": "COD",
    "number": 6,
    "name": "Chancel Mbemba",
    "position": "Defensor",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-7",
    "code": "COD",
    "number": 7,
    "name": "Joris Kayembe",
    "position": "Defensor",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-8",
    "code": "COD",
    "number": 8,
    "name": "Charles Pickel",
    "position": "Defensor",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-9",
    "code": "COD",
    "number": 9,
    "name": "Ngal'ayel Mukau",
    "position": "Defensor",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-10",
    "code": "COD",
    "number": 10,
    "name": "Edo Kayembe",
    "position": "Meio-Campista",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-11",
    "code": "COD",
    "number": 11,
    "name": "Samuel Moutoussamy",
    "position": "Meio-Campista",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-12",
    "code": "COD",
    "number": 12,
    "name": "Noah Sadiki",
    "position": "Meio-Campista",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-13",
    "code": "COD",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-14",
    "code": "COD",
    "number": 14,
    "name": "Théo Bongonda",
    "position": "Meio-Campista",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-15",
    "code": "COD",
    "number": 15,
    "name": "Meschak Elia",
    "position": "Meio-Campista",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-16",
    "code": "COD",
    "number": 16,
    "name": "Yoane Wissa",
    "position": "Atacante",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-17",
    "code": "COD",
    "number": 17,
    "name": "Brian Cipenga",
    "position": "Atacante",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-18",
    "code": "COD",
    "number": 18,
    "name": "Fiston Mayele",
    "position": "Atacante",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-19",
    "code": "COD",
    "number": 19,
    "name": "Cédric Bakambu",
    "position": "Atacante",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COD-20",
    "code": "COD",
    "number": 20,
    "name": "Nathanaël Mbuku",
    "position": "Atacante",
    "country_name": "Congo DR",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-1",
    "code": "UZB",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-2",
    "code": "UZB",
    "number": 2,
    "name": "Utkir Yusupov",
    "position": "Goleiro",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-3",
    "code": "UZB",
    "number": 3,
    "name": "Farrukh Savfiev",
    "position": "Goleiro",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-4",
    "code": "UZB",
    "number": 4,
    "name": "Sherzod Nasrullaev",
    "position": "Defensor",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-5",
    "code": "UZB",
    "number": 5,
    "name": "Umar Eshmurodov",
    "position": "Defensor",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-6",
    "code": "UZB",
    "number": 6,
    "name": "Husniddin Aliqulov",
    "position": "Defensor",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-7",
    "code": "UZB",
    "number": 7,
    "name": "Rustamjon Ashurmatov",
    "position": "Defensor",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-8",
    "code": "UZB",
    "number": 8,
    "name": "Khojiakbar Alijonov",
    "position": "Defensor",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-9",
    "code": "UZB",
    "number": 9,
    "name": "Abdukodir Khusanov",
    "position": "Defensor",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-10",
    "code": "UZB",
    "number": 10,
    "name": "Odiljon Hamrobekov",
    "position": "Meio-Campista",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-11",
    "code": "UZB",
    "number": 11,
    "name": "Otabek Shukurov",
    "position": "Meio-Campista",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-12",
    "code": "UZB",
    "number": 12,
    "name": "Jamshid Iskanderov",
    "position": "Meio-Campista",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-13",
    "code": "UZB",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-14",
    "code": "UZB",
    "number": 14,
    "name": "Azizbek Turgunboev",
    "position": "Meio-Campista",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-15",
    "code": "UZB",
    "number": 15,
    "name": "Khojimat Erkinov",
    "position": "Meio-Campista",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-16",
    "code": "UZB",
    "number": 16,
    "name": "Eldor Shomurodov",
    "position": "Atacante",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-17",
    "code": "UZB",
    "number": 17,
    "name": "Oston Urunov",
    "position": "Atacante",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-18",
    "code": "UZB",
    "number": 18,
    "name": "Jaloliddin Masharipov",
    "position": "Atacante",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-19",
    "code": "UZB",
    "number": 19,
    "name": "Igor Sergeev",
    "position": "Atacante",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "UZB-20",
    "code": "UZB",
    "number": 20,
    "name": "Abbosbek Fayzullaev",
    "position": "Atacante",
    "country_name": "Uzbekistan",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "COL-1",
    "code": "COL",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-2",
    "code": "COL",
    "number": 2,
    "name": "Camilo Vargas",
    "position": "Goleiro",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-3",
    "code": "COL",
    "number": 3,
    "name": "David Ospina",
    "position": "Goleiro",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-4",
    "code": "COL",
    "number": 4,
    "name": "Dávinson Sánchez",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-5",
    "code": "COL",
    "number": 5,
    "name": "Yerry Mina",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-6",
    "code": "COL",
    "number": 6,
    "name": "Daniel Munoz",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-7",
    "code": "COL",
    "number": 7,
    "name": "Johan Mojica",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-8",
    "code": "COL",
    "number": 8,
    "name": "Jhon Lucumí",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-9",
    "code": "COL",
    "number": 9,
    "name": "Santiago Arias",
    "position": "Defensor",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-10",
    "code": "COL",
    "number": 10,
    "name": "Jefferson Lerma",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-11",
    "code": "COL",
    "number": 11,
    "name": "Kevin Castaño",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-12",
    "code": "COL",
    "number": 12,
    "name": "Richard Rios",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-13",
    "code": "COL",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-14",
    "code": "COL",
    "number": 14,
    "name": "James Rodriguez",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-15",
    "code": "COL",
    "number": 15,
    "name": "Juan Fernando Quintero",
    "position": "Meio-Campista",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-16",
    "code": "COL",
    "number": 16,
    "name": "Jorge Carrascal",
    "position": "Atacante",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-17",
    "code": "COL",
    "number": 17,
    "name": "Jhon Arias",
    "position": "Atacante",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-18",
    "code": "COL",
    "number": 18,
    "name": "Jhon Cordova",
    "position": "Atacante",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-19",
    "code": "COL",
    "number": 19,
    "name": "Luis Suarez",
    "position": "Atacante",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "COL-20",
    "code": "COL",
    "number": 20,
    "name": "Luis Diaz",
    "position": "Atacante",
    "country_name": "Colômbia",
    "flag": "co",
    "group": "Grupo D"
  },
  {
    "id": "ENG-1",
    "code": "ENG",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-2",
    "code": "ENG",
    "number": 2,
    "name": "Jordan Pickford",
    "position": "Goleiro",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-3",
    "code": "ENG",
    "number": 3,
    "name": "John Stones",
    "position": "Goleiro",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-4",
    "code": "ENG",
    "number": 4,
    "name": "Marc Guéhi",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-5",
    "code": "ENG",
    "number": 5,
    "name": "Ezri Konsa",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-6",
    "code": "ENG",
    "number": 6,
    "name": "Trent Alexander-Arnold",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-7",
    "code": "ENG",
    "number": 7,
    "name": "Reece James",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-8",
    "code": "ENG",
    "number": 8,
    "name": "Dan Burn",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-9",
    "code": "ENG",
    "number": 9,
    "name": "Jordan Henderson",
    "position": "Defensor",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-10",
    "code": "ENG",
    "number": 10,
    "name": "Declan Rice",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-11",
    "code": "ENG",
    "number": 11,
    "name": "Jude Bellingham",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-12",
    "code": "ENG",
    "number": 12,
    "name": "Cole Palmer",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-13",
    "code": "ENG",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-14",
    "code": "ENG",
    "number": 14,
    "name": "Morgan Rogers",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-15",
    "code": "ENG",
    "number": 15,
    "name": "Anthony Gordon",
    "position": "Meio-Campista",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-16",
    "code": "ENG",
    "number": 16,
    "name": "Phil Foden",
    "position": "Atacante",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-17",
    "code": "ENG",
    "number": 17,
    "name": "Bukayo Saka",
    "position": "Atacante",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-18",
    "code": "ENG",
    "number": 18,
    "name": "Harry Kane",
    "position": "Atacante",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-19",
    "code": "ENG",
    "number": 19,
    "name": "Marcus Rashford",
    "position": "Atacante",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "ENG-20",
    "code": "ENG",
    "number": 20,
    "name": "Ollie Watkins",
    "position": "Atacante",
    "country_name": "Inglaterra",
    "flag": "gb-eng",
    "group": "Grupo G"
  },
  {
    "id": "CRO-1",
    "code": "CRO",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-2",
    "code": "CRO",
    "number": 2,
    "name": "Dominik Livaković",
    "position": "Goleiro",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-3",
    "code": "CRO",
    "number": 3,
    "name": "Duje Caleta-Car",
    "position": "Goleiro",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-4",
    "code": "CRO",
    "number": 4,
    "name": "Josko Gvardiol",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-5",
    "code": "CRO",
    "number": 5,
    "name": "Josip Stanišić",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-6",
    "code": "CRO",
    "number": 6,
    "name": "Luka Vušković",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-7",
    "code": "CRO",
    "number": 7,
    "name": "Josip Sutalo",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-8",
    "code": "CRO",
    "number": 8,
    "name": "Kristijan Jakic",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-9",
    "code": "CRO",
    "number": 9,
    "name": "Luka Modrić",
    "position": "Defensor",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-10",
    "code": "CRO",
    "number": 10,
    "name": "Mateo Kovacic",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-11",
    "code": "CRO",
    "number": 11,
    "name": "Martin Baturina",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-12",
    "code": "CRO",
    "number": 12,
    "name": "Lovro Majer",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-13",
    "code": "CRO",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-14",
    "code": "CRO",
    "number": 14,
    "name": "Mario Pasalic",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-15",
    "code": "CRO",
    "number": 15,
    "name": "Petar Sucic",
    "position": "Meio-Campista",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-16",
    "code": "CRO",
    "number": 16,
    "name": "Ivan Perišić",
    "position": "Atacante",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-17",
    "code": "CRO",
    "number": 17,
    "name": "Marco Pasalic",
    "position": "Atacante",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-18",
    "code": "CRO",
    "number": 18,
    "name": "Ante Budimir",
    "position": "Atacante",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-19",
    "code": "CRO",
    "number": 19,
    "name": "Andrej Kramarić",
    "position": "Atacante",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "CRO-20",
    "code": "CRO",
    "number": 20,
    "name": "Franjo Ivanovic",
    "position": "Atacante",
    "country_name": "Croácia",
    "flag": "hr",
    "group": "Grupo F"
  },
  {
    "id": "GHA-1",
    "code": "GHA",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-2",
    "code": "GHA",
    "number": 2,
    "name": "Lawrence Ati Zigi",
    "position": "Goleiro",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-3",
    "code": "GHA",
    "number": 3,
    "name": "Tariq Lamptey",
    "position": "Goleiro",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-4",
    "code": "GHA",
    "number": 4,
    "name": "Mohammed Salisu",
    "position": "Defensor",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-5",
    "code": "GHA",
    "number": 5,
    "name": "Alidu Seidu",
    "position": "Defensor",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-6",
    "code": "GHA",
    "number": 6,
    "name": "Alexander Djiku",
    "position": "Defensor",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-7",
    "code": "GHA",
    "number": 7,
    "name": "Gideon Mensah",
    "position": "Defensor",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-8",
    "code": "GHA",
    "number": 8,
    "name": "Caleb Yirenkyi",
    "position": "Defensor",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-9",
    "code": "GHA",
    "number": 9,
    "name": "Abdul Issahaku Fatawu",
    "position": "Defensor",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-10",
    "code": "GHA",
    "number": 10,
    "name": "Thomas Partey",
    "position": "Meio-Campista",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-11",
    "code": "GHA",
    "number": 11,
    "name": "Salis Abdul Samed",
    "position": "Meio-Campista",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-12",
    "code": "GHA",
    "number": 12,
    "name": "Kamaldeen Sulemana",
    "position": "Meio-Campista",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-13",
    "code": "GHA",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-14",
    "code": "GHA",
    "number": 14,
    "name": "Mohammed Kudus",
    "position": "Meio-Campista",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-15",
    "code": "GHA",
    "number": 15,
    "name": "Inaki Williams",
    "position": "Meio-Campista",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-16",
    "code": "GHA",
    "number": 16,
    "name": "Jordan Ayew",
    "position": "Atacante",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-17",
    "code": "GHA",
    "number": 17,
    "name": "André Ayew",
    "position": "Atacante",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-18",
    "code": "GHA",
    "number": 18,
    "name": "Joseph Paintsil",
    "position": "Atacante",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-19",
    "code": "GHA",
    "number": 19,
    "name": "Osman Bukari",
    "position": "Atacante",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "GHA-20",
    "code": "GHA",
    "number": 20,
    "name": "Antoine Semenyo",
    "position": "Atacante",
    "country_name": "Ghana",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-1",
    "code": "PAN",
    "number": 1,
    "name": "Emblem",
    "position": "Escudo",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-2",
    "code": "PAN",
    "number": 2,
    "name": "Orlando Mosquera",
    "position": "Goleiro",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-3",
    "code": "PAN",
    "number": 3,
    "name": "Luis Mejia",
    "position": "Goleiro",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-4",
    "code": "PAN",
    "number": 4,
    "name": "Fidel Escobar",
    "position": "Defensor",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-5",
    "code": "PAN",
    "number": 5,
    "name": "Andres Andrade",
    "position": "Defensor",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-6",
    "code": "PAN",
    "number": 6,
    "name": "Michael Amir Murillo",
    "position": "Defensor",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-7",
    "code": "PAN",
    "number": 7,
    "name": "Eric Davis",
    "position": "Defensor",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-8",
    "code": "PAN",
    "number": 8,
    "name": "Jose Cordoba",
    "position": "Defensor",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-9",
    "code": "PAN",
    "number": 9,
    "name": "Cesar Blackman",
    "position": "Defensor",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-10",
    "code": "PAN",
    "number": 10,
    "name": "Cristian Martinez",
    "position": "Meio-Campista",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-11",
    "code": "PAN",
    "number": 11,
    "name": "Aníbal Godoy",
    "position": "Meio-Campista",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-12",
    "code": "PAN",
    "number": 12,
    "name": "Adalberto Carrasquilla",
    "position": "Meio-Campista",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-13",
    "code": "PAN",
    "number": 13,
    "name": "Team Photo",
    "position": "Meio-Campista",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-14",
    "code": "PAN",
    "number": 14,
    "name": "Édgar Bárcenas",
    "position": "Meio-Campista",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-15",
    "code": "PAN",
    "number": 15,
    "name": "Carlos Harvey",
    "position": "Meio-Campista",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-16",
    "code": "PAN",
    "number": 16,
    "name": "Ismael Díaz",
    "position": "Atacante",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-17",
    "code": "PAN",
    "number": 17,
    "name": "Jose Fajardo",
    "position": "Atacante",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-18",
    "code": "PAN",
    "number": 18,
    "name": "Cecilio Waterman",
    "position": "Atacante",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-19",
    "code": "PAN",
    "number": 19,
    "name": "Jose Luiz Rodriguez",
    "position": "Atacante",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "PAN-20",
    "code": "PAN",
    "number": 20,
    "name": "Alberto Quintero",
    "position": "Atacante",
    "country_name": "Panama",
    "flag": "un",
    "group": "Outros"
  },
  {
    "id": "FWC-9",
    "code": "FWC",
    "number": 9,
    "name": "Italy 1934",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-10",
    "code": "FWC",
    "number": 10,
    "name": "Uruguay 1950",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-11",
    "code": "FWC",
    "number": 11,
    "name": "West Germany 1954",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-12",
    "code": "FWC",
    "number": 12,
    "name": "Brazil 1962",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-13",
    "code": "FWC",
    "number": 13,
    "name": "West Germany 1974",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-14",
    "code": "FWC",
    "number": 14,
    "name": "Argentina 1986",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-15",
    "code": "FWC",
    "number": 15,
    "name": "Brazil 1994",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-16",
    "code": "FWC",
    "number": 16,
    "name": "Brazil 2002",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-17",
    "code": "FWC",
    "number": 17,
    "name": "Italy 2006",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-18",
    "code": "FWC",
    "number": 18,
    "name": "Germany 2014",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
  },
  {
    "id": "FWC-19",
    "code": "FWC",
    "number": 19,
    "name": "Argentina 2022",
    "position": "Especial",
    "country_name": "FIFA",
    "flag": "un",
    "group": "Especiais"
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
    "name": "Messi / Cristiano Ronaldo (Lendas)",
    "position": "Lenda",
    "country_name": "Lendas",
    "flag": "un",
    "group": "Lendas"
  }
];
