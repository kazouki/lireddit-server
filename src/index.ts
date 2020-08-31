import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

require("dotenv").config();

const main = async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: "lireddit",
    type: "postgresql",
    clientUrl: process.env.DATABASE_URL_DEV,
    debug: !__prod__,
  });
};

main();
