import pymysql

try:
    connection = pymysql.connect(
        host='83.222.8.33',
        user='gen_user',
        password='<zP%niM9hp(Xp<',
        database='default_db',
        port=3306,
        cursorclass=pymysql.cursors.DictCursor
    )
    print('Connection successful')

    #with connection.cursor() as cursor:
    #    create_table_query = "CREATE TABLE `users` (user_id varchar(32), refer_id varchar(32), balance varchar(32))"
    #
    #    cursor.execute(create_table_query)
    #    print('Success')

    #with connection.cursor() as cursor:
    #    insert_query = "INSERT INTO `users` (user_id, refer_id) VALUES ('55023429523', '3258239529');"
    #    cursor.execute(insert_query)
    #    connection.commit()

    with connection.cursor() as cursor:
        select_all_rows = "SELECT * FROM `users`"
        cursor.execute(select_all_rows)

        rows = cursor.fetchall()
        for row in rows:
            print(row)
        print("#" * 20)


except Exception as error:
    print('Connection error...')
    print(error)


