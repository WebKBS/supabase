import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: {
      id: 1,
    },
  });

  console.log(posts);

  return (
    <main className="text-white">
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </main>
  );
}
