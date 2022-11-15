import pymysql

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
        # TODO
        pass

    def add_transactions(self, amount, category, vendor):
        # TODO
        pass

    def delete_transactions(self):
        # TODO
        pass

    def get_transactions_by_categories(self):
        # TODO
        pass
