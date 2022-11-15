from fastapi import APIRouter, status, Response, Request


router = APIRouter()


@router.get("/transactions", status_code=status.HTTP_200_OK)
def get_all_transaction():
    # TODO
    pass


@router.post("/transactions", status_code=status.HTTP_201_CREATED)
def add_transaction(request: Request, response: Response):
    # TODO
    pass


@router.delete("/transactions/{transaction_id}", status_code=status.HTTP_200_OK)
def delete_transaction(transaction_id, response: Response):
    # TODO
    pass


@router.get("/transactions/rundown", status_code=status.HTTP_200_OK)
def get_transaction_by_categories():
    # TODO
    pass
