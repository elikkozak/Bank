from fastapi import FastAPI
import uvicorn
from router.transaction_router import transaction_router


app = FastAPI()
app.include_router(transaction_router.router)


@app.get("/")
def root():
    return "server is up and running"


if __name__ == "__main__":
    uvicorn.run("server:app", host="localhost", port=8000, reload=True)
