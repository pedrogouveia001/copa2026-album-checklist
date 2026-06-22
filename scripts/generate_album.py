import urllib.request
import json
import os

def get_group_and_flag(team_name):
    # Dicionário de mapeamento de nome da seleção -> (Grupo, FlagCDN Code)
    mapping = {
        "Canada": ("Grupo A", "ca"),
        "Mexico": ("Grupo A", "mx"),
        "USA": ("Grupo A", "us"),
        "Uruguay": ("Grupo B", "uy"),
        "Ecuador": ("Grupo B", "ec"),
        "Venezuela": ("Grupo B", "ve"),
        "Jamaica": ("Grupo B", "jm"),
        "Argentina": ("Grupo C", "ar"),
        "Peru": ("Grupo C", "pe"),
        "Chile": ("Grupo C", "cl"),
        "Canada": ("Grupo A", "ca"), # just in case
        "Brazil": ("Grupo D", "br"),
        "Colombia": ("Grupo D", "co"),
        "Paraguay": ("Grupo D", "py"),
        "Costa Rica": ("Grupo D", "cr"),
        "Germany": ("Grupo E", "de"),
        "Scotland": ("Grupo E", "gb-sct"),
        "Hungary": ("Grupo E", "hu"),
        "Switzerland": ("Grupo E", "ch"),
        "Spain": ("Grupo F", "es"),
        "Croatia": ("Grupo F", "hr"),
        "Italy": ("Grupo F", "it"),
        "Albania": ("Grupo F", "al"),
        "Slovenia": ("Grupo G", "si"),
        "Denmark": ("Grupo G", "dk"),
        "Serbia": ("Grupo G", "rs"),
        "England": ("Grupo G", "gb-eng"),
        "Netherlands": ("Grupo H", "nl"),
        "France": ("Grupo H", "fr"),
        "Poland": ("Grupo H", "pl"),
        "Austria": ("Grupo H", "at"),
        "Belgium": ("Grupo I", "be"),
        "Slovakia": ("Grupo I", "sk"),
        "Romania": ("Grupo I", "ro"),
        "Ukraine": ("Grupo I", "ua"),
        "Turkey": ("Grupo J", "tr"),
        "Georgia": ("Grupo J", "ge"),
        "Portugal": ("Grupo J", "pt"),
        "Czechia": ("Grupo J", "cz"),
        "Morocco": ("Grupo K", "ma"),
        "Senegal": ("Grupo K", "sn"),
        "Egypt": ("Grupo K", "eg"),
        "Nigeria": ("Grupo K", "ng"),
        "Japan": ("Grupo L", "jp"),
        "South Korea": ("Grupo L", "kr"),
        "Australia": ("Grupo L", "au"),
        "Saudi Arabia": ("Grupo L", "sa")
    }
    
    # Tradução de nomes para Português
    translations = {
        "Canada": "Canadá",
        "Mexico": "México",
        "USA": "Estados Unidos",
        "Uruguay": "Uruguai",
        "Ecuador": "Equador",
        "Venezuela": "Venezuela",
        "Jamaica": "Jamaica",
        "Argentina": "Argentina",
        "Peru": "Peru",
        "Chile": "Chile",
        "Brazil": "Brasil",
        "Colombia": "Colômbia",
        "Paraguay": "Paraguai",
        "Costa Rica": "Costa Rica",
        "Germany": "Alemanha",
        "Scotland": "Escócia",
        "Hungary": "Hungria",
        "Switzerland": "Suíça",
        "Spain": "Espanha",
        "Croatia": "Croácia",
        "Italy": "Itália",
        "Albania": "Albânia",
        "Slovenia": "Eslovênia",
        "Denmark": "Dinamarca",
        "Serbia": "Sérvia",
        "England": "Inglaterra",
        "Netherlands": "Holanda",
        "France": "França",
        "Poland": "Polônia",
        "Austria": "Áustria",
        "Belgium": "Bélgica",
        "Slovakia": "Eslováquia",
        "Romania": "Romênia",
        "Ukraine": "Ucrânia",
        "Turkey": "Turquia",
        "Georgia": "Geórgia",
        "Portugal": "Portugal",
        "Czechia": "República Checa",
        "Morocco": "Marrocos",
        "Senegal": "Senegal",
        "Egypt": "Egito",
        "Nigeria": "Nigéria",
        "Japan": "Japão",
        "South Korea": "Coreia do Sul",
        "Australia": "Austrália",
        "Saudi Arabia": "Arábia Saudita"
    }

    if team_name in mapping:
        g, f = mapping[team_name]
        return g, f, translations.get(team_name, team_name)
    
    # Fallback default
    return "Outros", "un", team_name

def get_position(code_num):
    # Guess position based on sticker number in country slots (1 to 20)
    # Slot 1 is Shield/Emblem
    # Slot 2-3 are goalkeepers
    # Slot 4-9 are defenders
    # Slot 10-15 are midfielders
    # Slot 16-20 are forwards
    try:
        num = int(code_num)
        if num == 1:
            return "Escudo"
        elif 2 <= num <= 3:
            return "Goleiro"
        elif 4 <= num <= 9:
            return "Defensor"
        elif 10 <= num <= 15:
            return "Meio-Campista"
        else:
            return "Atacante"
    except:
        return "Jogador"

def main():
    print("Baixando catálogo oficial do World Cup 2026...")
    url = "https://raw.githubusercontent.com/danieltartaro/sticker-swap/main/data/raw/panini-wc-2026-catalog.json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    
    try:
        with urllib.request.urlopen(req) as response:
            raw_data = json.loads(response.read().decode())
    except Exception as e:
        print(f"Erro ao baixar o catálogo: {e}")
        return

    print("Processando figurinhas do catálogo...")
    raw_stickers = raw_data.get("stickers", [])
    
    stickers_list = []
    groups_teams = {}
    
    # Para armazenar bandeiras por código de país
    country_flags = {}

    for s in raw_stickers:
        code_str = s["code"] # ex: "BRA10", "FWC5", "00"
        name = s["name"]
        team = s["team"]
        
        # Separar letras e números do código
        # Ex: "BRA10" -> code: "BRA", num: 10
        # Ex: "FWC5" -> code: "FWC", num: 5
        # Ex: "00" -> code: "FWC", num: 0
        code = ""
        num_str = ""
        
        if code_str == "00":
            code = "FWC"
            num_str = "0"
        else:
            for char in code_str:
                if char.isalpha():
                    code += char
                else:
                    num_str += char
                    
        num = int(num_str) if num_str else 0
        
        # Mapear grupo, bandeira e tradução
        if code == "FWC":
            group_name = "Especiais"
            flag = "un"
            country_name = "FIFA"
            pos = "Especial"
        else:
            group_name, flag, country_name = get_group_and_flag(team)
            pos = get_position(num)
            
            # Salvar no mapeamento de grupos para o JS
            if group_name != "Outros":
                if group_name not in groups_teams:
                    groups_teams[group_name] = []
                # Evitar duplicados
                if not any(t["code"] == code for t in groups_teams[group_name]):
                    groups_teams[group_name].append({
                        "name": country_name,
                        "code": code,
                        "flag": flag
                    })

        # Adicionar figurinha formatada
        stickers_list.append({
            "id": f"{code}-{num}",
            "code": code,
            "number": num,
            "name": name,
            "position": pos,
            "country_name": country_name,
            "flag": flag,
            "group": group_name
        })

    # Adicionar figurinhas extras (Lendas) se não estiverem no catálogo
    # Verificamos se já existem "LEG"
    has_legends = any(s["code"] == "LEG" for s in stickers_list)
    if not has_legends:
        print("Adicionando figurinhas de Lendas...")
        legend_names = {
            1: "Pelé (Brasil)",
            2: "Maradona (Argentina)",
            3: "Zidane (França)",
            4: "Cruyff (Holanda)",
            5: "Beckenbauer (Alemanha)",
            6: "Eusébio (Portugal)",
            7: "Ronaldo Fenômeno (Brasil)",
            8: "Messi / Cristiano Ronaldo (Lendas)"
        }
        for i in range(1, 9):
            stickers_list.append({
                "id": f"LEG-{i}",
                "code": "LEG",
                "number": i,
                "name": legend_names[i],
                "position": "Lenda",
                "country_name": "Lendas",
                "flag": "un",
                "group": "Lendas"
            })

    total_stickers = len(stickers_list)
    print(f"Total de {total_stickers} figurinhas processadas.")
    
    # Salvar arquivo albumData.js
    output_dir = os.path.join(os.path.dirname(__file__), "..")
    output_path = os.path.join(output_dir, "albumData.js")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("// Banco de dados oficial do Album da Copa do Mundo 2026 (Panini)\n")
        f.write("const albumGroups = ")
        json.dump(groups_teams, f, ensure_ascii=False, indent=2)
        f.write(";\n\n")
        
        f.write("const albumStickers = ")
        json.dump(stickers_list, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    print(f"Arquivo albumData.js oficial gerado com sucesso em {output_path}!")

if __name__ == "__main__":
    main()
