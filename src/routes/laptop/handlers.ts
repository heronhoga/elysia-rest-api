import db from "../../db";

export async function getLaptops({ error }: any) {
  try {
    const laptop: any[] = await db.$queryRaw`SELECT * from "Laptop"`;
    if (laptop.length === 0) {
      return error(404, "Laptop not found");
    }
    return laptop;
  } catch (error: any) {
    console.log(error);
    return error(500, "Internal server error");
  }
}

export async function getSpecificLaptop({ params: { id }, error }: any) {
  try {
    const laptop: any[] =
      await db.$queryRaw`SELECT * from "Laptop" where id_laptop = ${id}`;
    if (laptop.length === 0) {
      return error(404, "Laptop not found");
    }
    return laptop;
  } catch (error: any) {
    console.log(error);
    return error(500, "Internal server error");
  }
}

export async function createLaptop({ body, set, error }: any) {
  try {
    if (!body.brand || !body.description || !body.price) {
      return error(400, "Bad request!");
    }

    const createLaptop =
      await db.$queryRaw`INSERT INTO "Laptop" (id_laptop, brand, description, price) VALUES (gen_random_uuid(), ${body.brand}, ${body.description}, ${body.price}) RETURNING *`;

    return createLaptop;
  } catch (error: any) {
    console.log(error);
    set.status = 500;
    return "Internal server error!";
  }
}
