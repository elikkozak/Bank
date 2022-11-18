from fastapi import APIRouter, status, Response, Request
from DB.db_manager import db_manager


router = APIRouter()


@router.get("/transactions", status_code=status.HTTP_200_OK)
def get_all_transactions():
    all_transaction = db_manager.get_all_transactions()
    return all_transaction


@router.post("/transactions", status_code=status.HTTP_201_CREATED)
async def add_transaction(request: Request, response: Response):
    req = await request.json()
    # TODO add category if category does not exitst...
    transaction_added = db_manager.add_transactions(**req)
    return transaction_added


@router.delete("/transactions/{transaction_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_transaction(transaction_id, response: Response):
    db_manager.delete_transactions(transaction_id)


@router.get("/transactions/rundown", status_code=status.HTTP_200_OK)
def get_transaction_by_categories():
    categories_to_total_sum = db_manager.get_breakdown_for_every_category
    return categories_to_total_sum
