<script lang="ts" setup>
const course = await useCourse();
const { auth } = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo("/");
  }
});

const login = async () => {
  const { error } = await auth.signInWithOAuth({
    provider: "github",
  });

  if (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="max-w-prose w-full h-9">
    <h1>log in to {{ course.title }}</h1>
    <button
      @click="login"
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      log in with Github
    </button>
  </div>
</template>

<style scoped></style>
