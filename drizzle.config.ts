import { defineConfig } from "drizzle-kit";
import "dotenv/config";

const db_url = process.env.DATABASE_URL;
if (!db_url) {
  throw new Error("DATABASE_URL is not set");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/models/*.ts",
  out: "./drizzle",
  dbCredentials: {
    url: db_url,
  },
});
