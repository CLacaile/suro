from datetime import datetime
import argparse
from SuroGenerator import SuroGenerator


def get_args():
    parser = argparse.ArgumentParser(
        description='Génération de questions via chatgpt')
    parser.add_argument('-t', '--themes', type=str,
                        help='Nom du fichier txt contenant les themes', required=True)
    return parser.parse_args()


def get_themes(file_name):
    lines = []

    with open(file_name, 'r', encoding='utf-8') as file:
        for line in file:
            # strip() pour supprimer les caractères de saut de ligne
            lines.append(line.strip())

    print("Themes à générer : " + ', '.join(lines))
    return lines


def main():
    print("==== SURO GENERATOR ====")

    args = get_args()

    # Récupération des themes
    themes_filename = args.themes
    themes = get_themes(themes_filename)

    # Generation des questions
    suro_generator = SuroGenerator(
        themes=themes, nb_questions_per_theme=5, show_cost=False)
    suro_generator.generate_questions()
    suro_generator.show_total_cost()


if __name__ == '__main__':
    main()
