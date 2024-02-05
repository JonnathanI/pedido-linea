import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.pedidoL.upsert({
    where: { id: 1 }, // Actualiza con los valores correctos
    update: {},
    create: {
      Name: 'Salsa de Tomate',
      description: 'Salsa de Tomate Gustadina',
      code: 'A015',
      email: 'salsaGus@gmail.com',
    }
  });
  
  // Modificaciones similares para otras llamadas upsert
  

  const post2 = await prisma.pedidoL.upsert({
    where: { id: 2 },
    update: {},
    create: {
        Name: 'Coca-Cola',
        description: 'Es la Bebida mas Famosa del Ecuador',
        code: 'C056',
        email: 'cocaCola@gmail.com',
    }
  });
  
  const post3 = await prisma.pedidoL.upsert({
    where: { id: 3 },
    update: {},
    create: {
        Name: 'Rufles',
        description: 'El mejor Snack del Ecuador',
        code: 'R075',
        email: 'Rufle5@gmail.com',
    }
  });
  
  const post4 = await prisma.pedidoL.upsert({
    where: { id: 4 },
    update: {},
    create: {
        Name: 'Alesol',
        description: 'El aceite especial para el ama de casa',
        code: 'A065',
        email: 'Alesol45@gmail.com',
    }
  });
  
  const post5 = await prisma.pedidoL.upsert({
    where: { id: 5 },
    update: {},
    create: {
        Name: 'Pizza Hut',
        description: 'El mejor sabor de los peques de la casa',
        code: 'PZ06',
        email: 'Pz4546@gmail.com',
    }
  });
  


  console.log({ post1, post2,post3,post4,post5 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });