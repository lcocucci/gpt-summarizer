from fastapi import APIRouter, HTTPException
from service.summarizer_service import generate_summary 
from model.SummaryRequest import SummaryRequest 

router = APIRouter()

@router.post('/summarize')
def summarize(request: SummaryRequest):
    summary = generate_summary(request.content)
    # return{
    #     'name': 'summary',
    #     'content': summary,
    #     'subject': 'sub',
    #     'tags': []
    # }
    return summary

