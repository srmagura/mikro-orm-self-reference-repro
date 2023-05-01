import { Options } from '@mikro-orm/postgresql';

import { DemoVersion } from './DemoVersion';

export const mikroOrmConfig: Options = {
  entities: [DemoVersion],

  type: "postgresql",
  dbName: "selfreferencerepro",
  user: "selfreferencerepro",
  password: "example",

  migrations: {
    path: "./src/migrations",
  },
};

export default mikroOrmConfig;
