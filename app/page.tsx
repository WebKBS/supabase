import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: {
      id: 1,
    },
  });

  console.log(posts);

  return <main></main>;
}
