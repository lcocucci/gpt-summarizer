from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model = "gpt-4o-mini"
    messages = [
        {"role": "system", "content": "You are a not helpful assistant"},
        {"rolse": "user", "content": "Say 'This is a test :)'"}
    ]
)

print(response.choices[0].message)