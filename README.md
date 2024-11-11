# 動かし方
- .envファイルにDB接続情報定義（ファイルが無かったらルートに作って）
  - DBHost: MySQLホスト名 jdbc:mysql//localhost:8080
  - DBUser: DBユーザー名
  - DBPass: DBパスワード
 ```.env
  DBHost=jdbc:mysql://localhost:8080
  DBUser=stm
  DBPass=1930
```  
- ↑はローカルDBなんでサーバーのMySQLのやつに書き換えてね

- `npm run dev`コマンド実行
  - http://localhost:8080/api/users
    - とりあえずこれが動くか

```sql
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(36)  NOT NULL,
  `age` int unsigned NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
```

```json
[
    {
        "id": 1,
        "name": "佐藤",
        "age": 20,
        "created_at": "2024-10-23T18:02:50.000Z",
        "updated_at": "2024-10-23T18:02:50.000Z",
        "deleted_at": null
    },
    {
        "id": 2,
        "name": "田中",
        "age": 30,
        "created_at": "2024-10-23T18:02:58.000Z",
        "updated_at": "2024-10-23T18:02:58.000Z",
        "deleted_at": null
    },
    {
        "id": 3,
        "name": "鈴木",
        "age": 40,
        "created_at": "2024-10-23T18:03:10.000Z",
        "updated_at": "2024-10-23T18:03:14.000Z",
        "deleted_at": "2024-10-23T18:03:10.000Z"
    }
]
```
