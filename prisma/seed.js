import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const course = await prisma.course.create({
    data: {
      title: "Course Title",
      chapters: {
        create: [
          {
            title: "Chapter 1",
            slug: "chapter-1",
            number: 1,
            lessons: {
              create: [
                {
                  title: "Lesson 1",
                  slug: "lesson-1",
                  number: 1,
                  downloadUrl: "",
                  sourceUrl: "",
                  videoId: 684236333,
                  text: `some text for lesson 1.`,
                },
                {
                  title: "Lesson 2",
                  slug: "lesson-2",
                  number: 2,
                  downloadUrl: "",
                  sourceUrl: "",
                  videoId: 687483743,
                  text: `some text for lesson 2.`,
                },
                {
                  title: "Lesson 3",
                  slug: "lesson-3",
                  number: 3,
                  downloadUrl: "",
                  sourceUrl: "",
                  videoId: 684243433,
                  text: `some text for lesson 2.`,
                },
              ],
            },
          },
          {
            title: "Chapter 2",
            slug: "chapter-2",
            number: 2,
            lessons: {
              create: [
                {
                  title: "Lesson 1",
                  slug: "lesson-1",
                  number: 1,
                  downloadUrl: "",
                  sourceUrl: "",
                  videoId: 684236333,
                  text: `some text for lesson 1.`,
                },
              ],
            },
          },
          {
            title: "Chapter 3",
            slug: "chapter-3",
            number: 3,
            lessons: {
              create: [
                {
                  title: "Lesson 1",
                  slug: "lesson-1",
                  number: 1,
                  downloadUrl: "",
                  sourceUrl: "",
                  videoId: 684236333,
                  text: `some text for lesson 1.`,
                },
                {
                  title: "Lesson 2",
                  slug: "lesson-2",
                  number: 2,
                  downloadUrl: "",
                  sourceUrl: "",
                  videoId: 687483743,
                  text: `some text for lesson 2.`,
                },
                {
                  title: "Lesson 3",
                  slug: "lesson-3",
                  number: 3,
                  downloadUrl: "",
                  sourceUrl: "",
                  videoId: 684243433,
                  text: `some text for lesson 2.`,
                },
                {
                  title: "Lesson 4",
                  slug: "lesson-4",
                  number: 4,
                  downloadUrl: "",
                  sourceUrl: "",
                  videoId: 932443433,
                  text: `some text for lesson 4.`,
                },
                {
                  title: "Lesson 5",
                  slug: "lesson-5",
                  number: 5,
                  downloadUrl: "",
                  sourceUrl: "",
                  videoId: 684299933,
                  text: `some text for lesson 5.`,
                },
              ],
            },
          },
        ],
      },
    },
  });
}

try {
  await seed();
  await prisma.$disconnect();
} catch (error) {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
}