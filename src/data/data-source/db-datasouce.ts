import "reflect-metadata"
import { DataSource } from "typeorm"
import {dbDatasourceOptions} from "./db";

export const AppDataSource = new DataSource(dbDatasourceOptions);
