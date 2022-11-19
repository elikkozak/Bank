from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

from router.transaction_router import transaction_api


app = FastAPI()
app.include_router(transaction_api.router)

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3000/transactions",
    "http://localhost:3000/breakdown",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return "server is up and running"


if __name__ == "__main__":
    uvicorn.run("server:app", host="localhost", port=8000, reload=True)
