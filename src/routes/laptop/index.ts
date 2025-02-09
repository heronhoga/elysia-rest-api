import Elysia from "elysia";
import { createLaptop, getLaptops, getSpecificLaptop, updateLaptop } from "./handlers";

const laptopRoutes = new Elysia({ prefix: "/laptop" })
  .get("/", getLaptops) 
  .get("/:id", getSpecificLaptop)
  .post("/", createLaptop)
  .patch("/:id", updateLaptop)
  .delete("/:id", () => "delete specific laptop data");

export default laptopRoutes;
