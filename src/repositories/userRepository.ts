/* eslint-disable @typescript-eslint/no-explicit-any */
import { Users } from '../types/Users';
import { BaseMySqlRepository } from './baseMySqlRepository';
import { Tables } from '../constants/Tables';

export class UserRepository extends BaseMySqlRepository {
  constructor(appConfig: any) {
    super(appConfig);
  }

  // 単一ユーザー情報を取得
  public async getUser(users: Users): Promise<Users> {
    const query = `
      SELECT * FROM ${Tables.Users} WHERE id = ?
    `;
    const params = [users.id];
    const result = await this.executeQuery(query, params);
    return result as Users;
  }

  // 複数のユーザー情報を取得
  public async getUsers(): Promise<Users[]> {
    const query = `
      SELECT * FROM ${Tables.Users}
    `;
    const result = await this.executeQuery(query);
    return result as Users[];
  }

  // ユーザー情報を挿入
  public async insertUser(users: Users): Promise<number> {
    const query = `
      INSERT INTO ${Tables.Users}
        (user_id, user_name, user_tntn)
      VALUES (?, ?, ?)
    `;
    const params = [users.id, users.name, users.size];
    const result = await this.executeQuery(query, params);
    return result.insertId;
  }

  // ユーザー情報を更新
  public async updateUser(users: Users): Promise<number> {
    const query = `
      UPDATE ${Tables.Users}
      SET user_name = ?, user_tntn = ?
      WHERE user_id = ?
    `;
    const params = [users.id, users.name, users.size];
    const result = await this.executeQuery(query, params);
    return result.affectedRows;
  }

  // ユーザー情報を削除
  public async deleteUser(userId: string): Promise<number> {
    const query = `
      DELETE FROM ${Tables.Users}
      WHERE user_id = ?
    `;
    const params = [userId];
    const result = await this.executeQuery(query, params);
    return result.affectedRows;
  }
}
