const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();

const laptopData = [
  {
    brand: "Asus",
    description: "Laptop paling keren",
    price: "5000", 
  },
  {
    brand: "Acer",
    description: "Laptop keren tapi kerenan Asus",
    price: "700000",
  },
  {
    brand: "Apple",
    description: "Sungguh overpriced",
    price: "8000000",
  },
];

const seed = async () => {
  try {
    await client.laptop.createMany({
      data: laptopData,
    });
    console.log("Seeding completed!");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await client.$disconnect();
  }
};

seed();
