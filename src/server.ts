import express from 'express';
import { config } from 'dotenv';

import { createUser } from './controllers/CreateUser';
import { getUser } from './controllers/GetUser';
import { getUsers } from './controllers/GetUsers';
import { updateUser } from './controllers/UpdateUser';

config(); // 環境変数を読み込む

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// ルーティング
// TODO: 外だし
app.get('/api/user', getUser);
app.get('/api/users', getUsers);
app.post('/api/users', createUser);
app.put('/api/users', updateUser);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
