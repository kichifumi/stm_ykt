import express from 'express';
import { config } from 'dotenv';

import { createUser } from './controllers/CreateUser';
import { getUsers } from './controllers/GetUsers';

config(); // 環境変数を読み込む

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// ルーティング
// TODO: 外だし
app.get('/api/users', getUsers);
app.post('/api/users', createUser);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
