import { PrismaClient } from "@prisma/client";
// import protectRoute from "~/server/utils/protectRoute";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // We allow users to access the first lesson without being logged in
  //   if (event.context.params?.chapterSlug !== "chapter-1") {
  //     protectRoute(event);
  //   }

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: event.context.params?.lessonSlug,
      Chapter: {
        slug: event.context.params?.chapterSlug,
      },
    },
  });

  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: "Lesson was not found",
    });
  }

  return {
    ...lesson,
    path: `/course/chapter/${event.context.params?.chapterSlug}/lesson/${event.context.params?.lessonSlug}`,
  };
});
