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

    const createLaptop:any[] =
      await db.$queryRaw`INSERT INTO "Laptop" (id_laptop, brand, description, price) VALUES (gen_random_uuid(), ${body.brand}, ${body.description}, ${body.price}) RETURNING *`;

    if (createLaptop.length === 0) {
        set.status = 500
        return "Error creating Laptop data"
    }

    return createLaptop;
  } catch (error: any) {
    console.log(error);
    set.status = 500;
    return "Internal server error!";
  }
}

export async function updateLaptop({ params: { id }, body, set, error }: any) {
  try {
    const newLaptop = body;
    //find old data
    const oldLaptopData: any[] =
      await db.$queryRaw`SELECT * from "Laptop" where id_laptop = ${id}`;
    if (oldLaptopData.length === 0) {
      return error(404, "Laptop not found");
    }

    const updatedLaptop = {
      brand: newLaptop.brand ? newLaptop.brand : oldLaptopData[0].brand,
      description: newLaptop.description
        ? newLaptop.description
        : oldLaptopData[0].description,
      price: newLaptop.price ? newLaptop.price : oldLaptopData[0].price,
      updated_at: new Date(),
    };

    //update laptop data
    const updateLaptop =
      await db.$queryRaw`UPDATE "Laptop" set brand = ${updatedLaptop.brand}, description = ${updatedLaptop.description}, price = ${updatedLaptop.price}, updated_at = ${updatedLaptop.updated_at} WHERE id_laptop = ${id} RETURNING *`;

    return updateLaptop;
  } catch (error) {
    console.log(error);
    set.status(500);
    return "Internal server error";
  }
}

export async function deleteLaptop({ params: { id }, set, error }: any) {
  try {
    const deleteLaptop:any[] =
      await db.$queryRaw`DELETE FROM "Laptop" WHERE id_laptop = ${id} RETURNING id_laptop`;

    if (deleteLaptop.length === 0) {
      set.status = 500;
      return "Error lur";
    }

    return deleteLaptop
  } catch (error) {
    console.log(error);
    set.status = 500;
    return "Internal server error!";
  }
}
