from openai import OpenAI
import os
from dotenv import load_dotenv

client = OpenAI()

def generate_summary(content:str) -> str:
    response = client.chat.completions.create(
        model = "gpt-4o-mini",
        messages = [
            {"role": "system", "content": "You are a not helpful assistant"},
            {"role": "user", "content": content}
        ]
    )

    return response.choices[0].message