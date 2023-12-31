from datetime import datetime
import argparse
from SuroGenerator import SuroGenerator

def get_args():
    parser = argparse.ArgumentParser(description='Génération de questions via chatgpt')
    parser.add_argument('-t', '--themes', type=str, help='Nom du fichier txt contenant les themes', required=True)
    return parser.parse_args()


def get_themes(file_name):
    lines = []

    with open(file_name, 'r', encoding='utf-8') as file:
        for line in file:
            lines.append(line.strip())  # strip() pour supprimer les caractères de saut de ligne

    print("Themes à générer : " + ', '.join(lines))
    return lines


def print_questions(output_json):
    # Création du nom du fichier avec la date et l'heure actuelles
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_filename = f"output_questions_{timestamp}.json"
    with open(output_filename, "w") as json_file:
        json_file.write(output_json)


def main():
    print("==== SURO GENERATOR ====")

    # Récupération des arguments
    args = get_args()
    themes_filename = args.themes

    # Parcours des thèmes pour générer les questions 
    themes = get_themes(themes_filename)
    suro_generator = SuroGenerator()
    output_json = ""
    for theme in themes:
      print("Génération des questions du theme : " + theme)
      output_json = suro_generator.generate_questions(1, theme)

    print_questions(output_json)

        
if __name__ == '__main__':
    main()