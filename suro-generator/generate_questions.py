from openai import OpenAI
from datetime import datetime
import json

client = OpenAI()

SYSTEM_CONTEXT = """Tu es un assitant concu pour générer des questions de 100 caractères maximum 
et 4 réponses courtes (30 car. maximum) par question (dont la première est la bonne réponse). 
Les questions sont de culture générale au format JSON. 
L'objet final retourné contiendra un objet 'questions' contenant une liste d'objet 'question' 
qui ont les propriétés suivantes : 'id' un identifiant unique, 'question' le texte de la question, 
'theme' le thème en anglais de la question, 'answers' un tableau d'objet.
Les objets answers ont les propriétés suivantes : 'id' un identifiant unique, 'label' le texte de la réponse, 
'isCorrect' un booléen indiquant si réponse est vraie ou fausse."""

INPUT_TOKENS_COST = 0.001/1000
OUTPUT_TOKENS_COST = 0.002/1000

def generate_questions(nb_questions, themes, show_cost=True):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo-1106",
        response_format={"type": "json_object"},
        messages=[
            {
                "role": "system",
                "content": SYSTEM_CONTEXT
            },
            {
                "role": "user",
                "content": f"Génère {nb_questions} questions et leurs réponses sur qui portent sur les thèmes {', '.join(themes)}."
            }
        ]
    )

    print(f"Finish reason: {response.choices[0].finish_reason}")

    print(f"Number of choices generated: {len(response.choices)}")

    if show_cost:
        input_cost = int(response.usage.prompt_tokens) * INPUT_TOKENS_COST
        output_cost = int(response.usage.completion_tokens) * OUTPUT_TOKENS_COST
        print(f"Input: {response.usage.prompt_tokens} tokens ({input_cost}$)")
        print(f"Output: {response.usage.completion_tokens} tokens ({output_cost}$)")
        print(f"Total cost: {input_cost + output_cost}$")

    return response.choices[0].message.content

output_json = generate_questions(1000, ['histoire', 'géographie', 'sciences', 'musique', 'sport', 'arts', 'littérature'])

# Création du nom du fichier avec la date et l'heure actuelles
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
output_filename = f"output_questions_{timestamp}.json"
with open(output_filename, "w") as json_file:
    json_file.write(output_json)