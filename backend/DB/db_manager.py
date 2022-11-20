import pymysql
from DB.queries import *


HOST = "localhost"
USER = "root"
PWD = ""
DB = "bank_app"


class DB_Manager:
    def __init__(self, host=HOST, user=USER, pwd=PWD, db=DB):
        self.connection = pymysql.connect(
            host=host,
            user=user,
            password=pwd,
            db=db,
            charset="utf8",
            cursorclass=pymysql.cursors.DictCursor,
            autocommit=True
        )

    def get_all_transactions(self):
        self.connection.ping()
        with self.connection.cursor() as cursor:

            cursor.execute(GET_ALL_TRANSACTIONS)
            return cursor.fetchall()

    def add_transactions(self, amount, category, vendor):
        self.connection.ping()
        with self.connection.cursor() as cursor:
            cursor.execute(ADD_TRANSACTION, (amount, category, vendor))
            self.connection.commit()
            cursor.execute(GET_LAST_TRANSACTION)
            return cursor.fetchone()

    def delete_transactions(self, transaction_id):
        with self.connection.cursor() as cursor:
            cursor.execute(DELETE_TRANSACTION_BY_ID, transaction_id)
            self.connection.commit()

    def get_breakdown_for_every_category(self):
        self.connection.ping()
        with self.connection.cursor() as cursor:
            cursor.execute(GET_TRANSACTIONS_SUM_FOR_EVERY_CATEGORY)
            return cursor.fetchall()

    def get_balance(self):
        self.connection.ping()
        with self.connection.cursor() as cursor:
            cursor.execute(GET_BALANCE)
            return cursor.fetchone()


db_manager = DB_Manager()
