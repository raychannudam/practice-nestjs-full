import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Ranger@2002',
    database: 'postgres',
    synchronize: true,
    logging: true,
    entities: ['dist/src/**/**/*.entity{.ts,.js}'],

}

export default config