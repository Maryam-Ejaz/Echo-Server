import "reflect-metadata"
import { DataSource } from "typeorm"
import {dbDatasourceOptions} from "../../../src/environment/db";

export const AppDataSource = new DataSource(dbDatasourceOptions);
