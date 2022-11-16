CREATE_CATEGORY_TABLE = """create table category(
                        category VARCHAR(50) PRIMARY KEY 
                        ) """


CREATE_TRANSACTION_TABLE = """create table transaction(
                            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            amount INT,
                            category VARCHAR(50),
                            vendor VARCHAR(50),
                            FOREIGN KEY (category) REFERENCES category(category))"""


GET_ALL_TRANSACTIONS = """SELECT * FROM transaction """

ADD_TRANSACTION = """INSERT INTO transaction VALUES(null, %s, %s, %s)"""

GET_TRANSACTION_BY_ID = """SELECT * FROM transaction WHERE id = %s"""

DELETE_TRANSACTION_BY_ID = """DELETE FROM transaction WHERE id = %s"""

GET_LAST_TRANSACTION = """SELECT TOP 1 * FROM transaction ORDER BY ID DESC"""

GET_TRANSACTIONS_SUM_FOR_EVERY_CATEGORY = """SELECT category,SUM(amount)
                                            FROM transaction
                                            GROUP BY category;"""
