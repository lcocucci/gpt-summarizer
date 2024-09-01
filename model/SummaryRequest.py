from pydantic import BaseModel

class SummaryRequest(BaseModel):
    # name: str
    content: str
    # subject: str
    # tags: list[str]