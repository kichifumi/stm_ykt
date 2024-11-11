/* eslint-disable @typescript-eslint/no-explicit-any */
import { getConnection } from './connector/mySqlConnector';

export class BaseMySqlRepository {
  protected appConfig: any;

  constructor(appConfig: any) {
    this.appConfig = appConfig;
  }

  protected async executeQuery(
    query: string,
    params: any[] = [],
  ): Promise<any> {
    const connection = await getConnection(this.appConfig);
    try {
      const [result] = await connection.execute(query, params);
      return result;
    } catch (error) {
      console.error('Database query execution failed:', error);
      const customError = new Error('Database query execution error');
      (customError as any).status = 500;
      throw customError;
    } finally {
      connection.release();
    }
  }
}
