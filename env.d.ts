// file: env.d.ts

import { D1Database } from "@cloudflare/workers-types";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;

      DB_TWEET: D1Database;
    }
  }
}

export {};