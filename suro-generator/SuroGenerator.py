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

    def __init__(self, show_cost=True) -> None:
        self.show_cost = show_cost
        self.messages = [
            {
                "role": "system",
                "content": SYSTEM_CONTEXT
            }
        ]

    def __add_message(self, message) -> None:
        self.messages.append({"role": "user", "content": message})

    def __create_completion(self):
        response = self.__client.chat.completions.create(
            model=self.__model,
            response_format={"type": "json_object"},
            messages=self.messages
        )

        print(f"Finish reason: {response.choices[0].finish_reason}")

        if self.show_cost:
            input_cost = int(response.usage.prompt_tokens) * INPUT_TOKENS_COST
            output_cost = int(
                response.usage.completion_tokens) * OUTPUT_TOKENS_COST
            print(
                f"Input: {response.usage.prompt_tokens} tokens ({input_cost}$)")
            print(
                f"Output: {response.usage.completion_tokens} tokens ({output_cost}$)")
            print(f"Total cost: {input_cost + output_cost}$")

        return response.choices[0].message.content

    def generate_questions(self, n, theme):
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
