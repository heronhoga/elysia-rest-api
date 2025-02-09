import { Elysia } from "elysia";

//routes
import laptopRoutes from "./routes/laptop";

const app = new Elysia()

app
  .group('/api', (app) => app.use(laptopRoutes))
  .listen(process.env.PORT || 3030)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
