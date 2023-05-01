import { Options } from "@mikro-orm/postgresql";
import { User } from "./User";

const mikroOrmConfig: Options = {
  entities: [User],

  type: "postgresql",
  dbName: "selfreferencerepro",
  user: "selfreferencerepro",
  password: "example",

  migrations: {
    path: "./src/migrations",
  },
};

export default mikroOrmConfig;
