<script lang="ts" setup>
const { title } = useCourse();
const { query } = useRoute();
const { auth } = useSupabaseClient();
const user = useSupabaseUser();
const firstLesson = useFirstLesson();

watchEffect(async () => {
  if (user.value) {
    await navigateTo("/");
  }
});

const login = async () => {
  //   const redirectTo = `${window.location.origin}${query.redirectTo}`;

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
    <h1>log in to {{ title }}</h1>
    <button
      @click="login"
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      log in with Github
    </button>
  </div>
</template>

<style scoped></style>
