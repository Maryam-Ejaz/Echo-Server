import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";
import {TextMessageEntity} from "../domain/entity/text-message-entity";
import {UserEntity} from "../domain/entity/user-entity";

export const dbDatasourceOptions: DataSourceOptions = {
    // TODO: replace with your database configuration in the fields bellow:
    type: "mysql",
    host: "sql.freedb.tech", //localhost
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: "freedb_rooot",
    password: "gaJ&fhDEC53%t8u",
    database: "freedb_flutter_chat_app_with_nodejs",

    // No need to change this fields bellow
    synchronize: true,
    logging: false,
    charset : 'utf8mb4',
    entities: [TextMessageEntity, UserEntity],
    migrations: [],
    subscribers: [],
}
