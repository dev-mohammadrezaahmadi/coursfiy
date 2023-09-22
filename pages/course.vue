<script setup lang="ts">
const { chapters, title } = useCourse();

const resetError = (error: any) => {
  error.value = null;
};
</script>

<template>
  <div class="">
    <div class="mb-4 flex justify-between items-center w-full">
      <h1 class="text-3xl">
        <span class="font-medium">
          <span class="font-bold">{{ title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="max-w-prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <div
          class="space-y-1 mb-4 flex flex-col"
          v-for="chapter in chapters"
          :key="chapter.slug"
        >
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline font-normal"
            :to="lesson.path"
            :class="{
              'text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }"
          >
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="max-w-prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <NuxtPage></NuxtPage>
          <template #error="{ error }">
            <p>oh, there must be something wrong !!!</p>
            <code>{{ error }}</code>
            <button
              @click="resetError(error)"
              class="hover:cursor-pointer bg-gray-500 text-white font-bold"
            >
              <p>reset</p>
            </button>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>
