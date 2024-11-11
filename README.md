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
