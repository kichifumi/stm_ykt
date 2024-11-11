/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPool, Pool } from 'mysql2/promise';

// プール変数を初期化しておく
let pool: Pool | null = null;

// 環境変数や接続設定を使用して接続
export async function getConnection(apponfig: any) {
  try {
    // 正規表現でホスト名とデータベース名を抽出
    const pattern = /jdbc:mysql:\/\/([^:/]+).*\/([^?/]+)/;
    const connectionInfo = apponfig['DBHost'].match(pattern); // [1]: host, [2]: database

    // プールが未作成の場合、appConfigからプールを作成
    if (!pool) {
      pool = createPool({
        host: connectionInfo[1],
        user: apponfig['DBUser'],
        password: apponfig['DBPass'],
        database: connectionInfo[2],
        ssl: {
          rejectUnauthorized: true,
        },
      });
    }

    // 接続を取得して返す
    const connection = await pool.getConnection();
    return connection;
  } catch (error) {
    console.error('Error getting connection:', error);
    throw new Error('Failed to connect to the MySQL database');
  }
}
