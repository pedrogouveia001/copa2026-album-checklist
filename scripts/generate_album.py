import json
import os

# Lista das 48 seleções divididas em 12 grupos de 4
groups = {
    "Grupo A": [
        {"name": "Estados Unidos", "code": "USA", "flag": "us"},
        {"name": "Uruguai", "code": "URU", "flag": "uy"},
        {"name": "Gana", "code": "GHA", "flag": "gh"},
        {"name": "Escócia", "code": "SCO", "flag": "gb-sct"}
    ],
    "Grupo B": [
        {"name": "México", "code": "MEX", "flag": "mx"},
        {"name": "Equador", "code": "ECU", "flag": "ec"},
        {"name": "Nigéria", "code": "NGA", "flag": "ng"},
        {"name": "Polônia", "code": "POL", "flag": "pl"}
    ],
    "Grupo C": [
        {"name": "Canadá", "code": "CAN", "flag": "ca"},
        {"name": "Peru", "code": "PER", "flag": "pe"},
        {"name": "Marrocos", "code": "MAR", "flag": "ma"},
        {"name": "Suécia", "code": "SWE", "flag": "se"}
    ],
    "Grupo D": [
        {"name": "Brasil", "code": "BRA", "flag": "br"},
        {"name": "Colômbia", "code": "COL", "flag": "co"},
        {"name": "Egito", "code": "EGY", "flag": "eg"},
        {"name": "Ucrânia", "code": "UKR", "flag": "ua"}
    ],
    "Grupo E": [
        {"name": "Argentina", "code": "ARG", "flag": "ar"},
        {"name": "Chile", "code": "CHI", "flag": "cl"},
        {"name": "Senegal", "code": "SEN", "flag": "sn"},
        {"name": "País de Gales", "code": "WAL", "flag": "gb-wls"}
    ],
    "Grupo F": [
        {"name": "França", "code": "FRA", "flag": "fr"},
        {"name": "Paraguai", "code": "PAR", "flag": "py"},
        {"name": "Argélia", "code": "ALG", "flag": "dz"},
        {"name": "Áustria", "code": "AUT", "flag": "at"}
    ],
    "Grupo G": [
        {"name": "Espanha", "code": "ESP", "flag": "es"},
        {"name": "Costa Rica", "code": "CRC", "flag": "cr"},
        {"name": "Camarões", "code": "CMR", "flag": "cm"},
        {"name": "Turquia", "code": "TUR", "flag": "tr"}
    ],
    "Grupo H": [
        {"name": "Inglaterra", "code": "ENG", "flag": "gb-eng"},
        {"name": "Jamaica", "code": "JAM", "flag": "jm"},
        {"name": "Tunísia", "code": "TUN", "flag": "tn"},
        {"name": "República Checa", "code": "CZE", "flag": "cz"}
    ],
    "Grupo I": [
        {"name": "Itália", "code": "ITA", "flag": "it"},
        {"name": "Panamá", "code": "PAN", "flag": "pa"},
        {"name": "Mali", "code": "MLI", "flag": "ml"},
        {"name": "Dinamarca", "code": "DEN", "flag": "dk"}
    ],
    "Grupo J": [
        {"name": "Alemanha", "code": "GER", "flag": "de"},
        {"name": "Honduras", "code": "HON", "flag": "hn"},
        {"name": "Coreia do Sul", "code": "KOR", "flag": "kr"},
        {"name": "Romênia", "code": "ROU", "flag": "ro"}
    ],
    "Grupo K": [
        {"name": "Portugal", "code": "POR", "flag": "pt"},
        {"name": "Arábia Saudita", "code": "KSA", "flag": "sa"},
        {"name": "Costa do Marfim", "code": "CIV", "flag": "ci"},
        {"name": "Suíça", "code": "SUI", "flag": "ch"}
    ],
    "Grupo L": [
        {"name": "Holanda", "code": "NED", "flag": "nl"},
        {"name": "Japão", "code": "JPN", "flag": "jp"},
        {"name": "Austrália", "code": "AUS", "flag": "au"},
        {"name": "Croácia", "code": "CRO", "flag": "hr"}
    ]
}

# Jogadores famosos conhecidos para personalizar algumas seleções
famous_players = {
    "BRA": {
        2: "Alisson", 3: "Ederson", 4: "Marquinhos", 5: "Gabriel Magalhães", 6: "Danilo",
        7: "Éder Militão", 8: "Guilherme Arana", 9: "Bruno Guimarães", 10: "Lucas Paquetá",
        11: "Douglas Luiz", 12: "Neymar Jr", 13: "Rodrygo", 14: "Vinicius Jr", 15: "Endrick",
        16: "Gabriel Martinelli", 17: "Raphinha", 18: "Savinho", 19: "Estêvão"
    },
    "ARG": {
        2: "Dibu Martínez", 3: "Rulli", 4: "Otamendi", 5: "Romero", 6: "Tagliafico",
        7: "Molina", 8: "Lisandro Martínez", 9: "Enzo Fernández", 10: "De Paul",
        11: "Mac Allister", 12: "Lionel Messi", 13: "Di María", 14: "Julián Álvarez",
        15: "Lautaro Martínez", 16: "Garnacho", 17: "Nico González", 18: "Lo Celso", 19: "Dybala"
    },
    "FRA": {
        2: "Maignan", 3: "Samba", 4: "Upamecano", 5: "Konaté", 6: "Theo Hernández",
        7: "Koundé", 8: "Saliba", 9: "Pavard", 10: "Tchouaméni", 11: "Camavinga",
        12: "Rabiot", 13: "Antoine Griezmann", 14: "Kylian Mbappé", 15: "Ousmane Dembélé",
        16: "Olivier Giroud", 17: "Marcus Thuram", 18: "Barcola", 19: "Coman"
    },
    "POR": {
        2: "Diogo Costa", 3: "Rui Patrício", 4: "Rúben Dias", 5: "Pepe", 6: "João Cancelo",
        7: "Nuno Mendes", 8: "Dalot", 9: "Palhinha", 10: "Bruno Fernandes", 11: "Vitinha",
        12: "Bernardo Silva", 13: "Cristiano Ronaldo", 14: "Rafael Leão", 15: "João Félix",
        16: "Gonçalo Ramos", 17: "Diogo Jota", 18: "Pedro Neto", 19: "Francisco Conceição"
    },
    "USA": {
        2: "Matt Turner", 12: "Christian Pulisic", 13: "Weston McKennie", 14: "Timothy Weah", 15: "Folarin Balogun"
    },
    "URU": {
        2: "Rochet", 12: "Federico Valverde", 13: "Darwin Núñez", 14: "Luis Suárez", 15: "De Arrascaeta"
    }
}

positions_map = {
    1: "Escudo",
    2: "Goleiro",
    3: "Goleiro",
    4: "Defensor",
    5: "Defensor",
    6: "Defensor",
    7: "Defensor",
    8: "Defensor",
    9: "Defensor",
    10: "Meio-Campista",
    11: "Meio-Campista",
    12: "Meio-Campista",
    13: "Meio-Campista",
    14: "Meio-Campista",
    15: "Atacante",
    16: "Atacante",
    17: "Atacante",
    18: "Atacante",
    19: "Atacante"
}

def generate_stickers():
    stickers = []
    
    # 1. Adicionar Figurinhas Iniciais FWC (0 a 19)
    for i in range(0, 20):
        name = ""
        if i == 0: name = "Logo da Copa 2026"
        elif i == 1: name = "Mascote Oficial"
        elif i == 2: name = "Troféu da Copa do Mundo"
        elif i == 3: name = "Pôster Oficial"
        elif 4 <= i <= 15: name = f"Estádio {i - 3}"
        else: name = f"Especial FWC {i}"
        
        stickers.append({
            "id": f"FWC-{i}",
            "code": "FWC",
            "number": i,
            "name": name,
            "position": "Especial",
            "country_name": "FIFA",
            "flag": "un", # United Nations/FIFA flag fallback
            "group": "Especiais"
        })
        
    # 2. Adicionar Figurinhas de cada Seleção
    for group_name, teams in groups.items():
        for team in teams:
            code = team["code"]
            name = team["name"]
            flag = team["flag"]
            
            for num in range(1, 20):
                sticker_id = f"{code}-{num}"
                pos = positions_map[num]
                
                # Definir nome do jogador
                player_name = ""
                if num == 1:
                    player_name = f"Escudo - {name}"
                else:
                    # Tentar pegar do dicionário de famosos
                    if code in famous_players and num in famous_players[code]:
                        player_name = famous_players[code][num]
                    else:
                        player_name = f"Jogador {num - 1}"
                        
                stickers.append({
                    "id": sticker_id,
                    "code": code,
                    "number": num,
                    "name": player_name,
                    "position": pos,
                    "country_name": name,
                    "flag": flag,
                    "group": group_name
                })
                
    # 3. Adicionar Figurinhas Extras (Legends/Lendas)
    for i in range(1, 9):
        legend_names = {
            1: "Pelé (Brasil)",
            2: "Maradona (Argentina)",
            3: "Zidane (França)",
            4: "Cruyff (Holanda)",
            5: "Beckenbauer (Alemanha)",
            6: "Eusébio (Portugal)",
            7: "Ronaldo Fenômeno (Brasil)",
            8: "Messi / Cristiano Ronaldo (Lendas Ativas)"
        }
        stickers.append({
            "id": f"LEG-{i}",
            "code": "LEG",
            "number": i,
            "name": legend_names[i],
            "position": "Lenda",
            "country_name": "Lendas",
            "flag": "un",
            "group": "Lendas"
        })
        
    return stickers

def main():
    print("Gerando banco de dados do álbum da Copa de 2026...")
    stickers_list = generate_stickers()
    total_stickers = len(stickers_list)
    print(f"Total de {total_stickers} figurinhas geradas.")
    
    # Criar diretório se não existir
    output_dir = os.path.join(os.path.dirname(__file__), "..")
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, "albumData.js")
    
    # Gerar a estrutura de dados de grupos e times separada para facilitar filtros em JS
    teams_by_group = {}
    for group_name, teams in groups.items():
        teams_by_group[group_name] = teams

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("// Banco de dados estatico do Album da Copa do Mundo 2026 (Panini)\n")
        f.write("const albumGroups = ")
        json.dump(teams_by_group, f, ensure_ascii=False, indent=2)
        f.write(";\n\n")
        
        f.write("const albumStickers = ")
        json.dump(stickers_list, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    print(f"Arquivo albumData.js gerado com sucesso em {output_path}!")

if __name__ == "__main__":
    main()
