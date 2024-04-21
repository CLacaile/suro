from datetime import datetime
import argparse
from SuroGenerator import SuroGenerator


def get_args():
    parser = argparse.ArgumentParser(
        description='Génération de questions via chatgpt')
    parser.add_argument('-t', '--themes', type=str,
                        help='Nom du fichier txt contenant les thèmes', required=True)
    parser.add_argument('-n', '--nb_questions', type=int,
                        help='Nombre de questions à générer par thème', required=True)
    parser.add_argument('-s', '--batch_size', type=int,
                        help='Nombre de questions dans un lot', required=False, default=10)
    return parser.parse_args()


def get_themes(file_name):
    lines = []

    with open(file_name, 'r', encoding='utf-8') as file:
        for line in file:
            lines.append(line.strip())

    print("Themes à générer : " + ', '.join(lines))
    return lines


def main():
    print("==== SURO GENERATOR ====")

    args = get_args()

    # Récupération des arguments
    themes_filename = args.themes
    themes = get_themes(themes_filename)
    nb_questions_per_theme = args.nb_questions
    nb_questions_per_batch = args.batch_size

    # Generation des questions
    suro_generator = SuroGenerator(
        themes, nb_questions_per_theme, nb_questions_per_batch)
    suro_generator.generate_questions()
    suro_generator.show_total_cost()


if __name__ == '__main__':
    main()
