import Elysia from "elysia";
import { createLaptop, deleteLaptop, getLaptops, getSpecificLaptop, updateLaptop } from "./handlers";

const laptopRoutes = new Elysia({ prefix: "/laptop" })
  .get("/", getLaptops) 
  .get("/:id", getSpecificLaptop)
  .post("/", createLaptop)
  .patch("/:id", updateLaptop)
  .delete("/:id", deleteLaptop);

export default laptopRoutes;
