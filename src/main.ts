import { MikroORM } from "@mikro-orm/postgresql";

import { DemoVersion } from "./DemoVersion";
import { mikroOrmConfig } from "./mikro-orm.config";

async function main() {
  const orm = await MikroORM.init(mikroOrmConfig);
  const em = orm.em.fork();

  await em.raw('delete from "demo_version";');

  const parentVersion = new DemoVersion(undefined);
  await em.persistAndFlush(parentVersion);

  const results = await em.find(DemoVersion, {});
  console.log(results);

  orm.close();
}

main().catch(console.error);
