from datetime import datetime
import json
from openai import OpenAI

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


class SuroGenerator:
    __client = OpenAI()
    __model = "gpt-3.5-turbo-1106"

    def __init__(self, themes, nb_questions_per_theme=1, show_cost=True) -> None:
        self.themes = themes
        self.nb_questions_per_theme = nb_questions_per_theme
        self.show_cost = show_cost
        self.messages = [
            {
                "role": "system",
                "content": SYSTEM_CONTEXT
            }
        ]
        self.__total_input_tokens = 0
        self.__total_output_tokens = 0

    def __add_message(self, message) -> None:
        self.messages.append({"role": "user", "content": message})

    def __create_completion(self):
        response = '{"questions":[]}'
        try:
            response = self.__client.chat.completions.create(
                model=self.__model,
                response_format={"type": "json_object"},
                messages=self.messages
            )
        except:
            print("Something went wrong when creating the completions.")
            return response

        if response.usage:
            self.__total_input_tokens += int(response.usage.prompt_tokens)
            self.__total_output_tokens += int(response.usage.completion_tokens)

        if response.choices:
            print(f"Finish reason: {response.choices[0].finish_reason}")
            return response.choices[0].message.content

        return response

    def __print_questions(self, output_json):
        # Création du nom du fichier avec la date et l'heure actuelles
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_filename = f"output_questions_{timestamp}.json"
        with open(output_filename, "w") as json_file:
            json_file.write(output_json)

    def generate_n_questions_by_theme(self, n, theme):
        '''
        Generate n questions based on a theme.
            Parameters:
                n (int): the number of questions that should be generated
                theme (str): the theme of the questions
            Returns:
                (str) a JSON string
        '''
        messsage_to_add = f"Génère {n} questions et leurs réponses sur qui portent sur le thème {theme}."
        self.__add_message(messsage_to_add)
        return self.__create_completion()

    def generate_questions(self):
        # Generate all the questions
        json_questions_list = []
        for theme in self.themes:
            print("Génération des questions du theme : " + theme)
            questions = self.generate_n_questions_by_theme(
                self.nb_questions_per_theme, theme)
            json_questions = json.loads(questions)
            json_questions_list.append(json_questions)

        # Merge all questions into one single JSON
        merged_json = {"questions": []}
        for json_questions in json_questions_list:
            merged_json["questions"].extend(json_questions["questions"])

        # Save the JSON as file
        merged_questions = json.dumps(
            merged_json, ensure_ascii=False, indent=2)
        self.__print_questions(merged_questions)

    def show_total_cost(self):
        print("---- USAGE ----")
        input_cost = self.__total_input_tokens * INPUT_TOKENS_COST
        output_cost = self.__total_output_tokens * OUTPUT_TOKENS_COST
        print(
            f"Input: {self.__total_input_tokens} tokens ({input_cost}$)")
        print(
            f"Output: {self.__total_output_tokens} tokens ({output_cost}$)")
        print(f"Total cost: {input_cost + output_cost}$")
