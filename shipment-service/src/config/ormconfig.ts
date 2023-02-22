import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import entities from "./typeorm.entities";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'app_user',
    password: 'password',
    database: 'dev',
    entities: entities,
    synchronize: false,
  }

export default config;