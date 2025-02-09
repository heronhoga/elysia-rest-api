import Elysia from "elysia";
import { createLaptop, getLaptops, getSpecificLaptop } from "./handlers";

const laptopRoutes = new Elysia({ prefix: "/laptop" })
  .get("/", getLaptops) 
  .get("/:id", getSpecificLaptop)
  .post("/", createLaptop)
  .patch("/:id", () => "update specific laptop data")
  .delete("/:id", () => "delete specific laptop data");

export default laptopRoutes;
