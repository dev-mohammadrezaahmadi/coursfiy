<script setup lang="ts">
const error = useError()
const handleError = () => {
  clearError({
    redirect: '/'
  })
}
</script>

<template>
  <NuxtLayout>
    <div class="max-w-prose">
      <h1>dang</h1>
      <p>it looks like something has broke</p>
      <p>sorry about that</p>
      <p>
        <code>{{ error?.message }}</code>
      </p>
      <button class="hover:cursor-pointer p-2 bg-green-400 text-white" @click="handleError">go home</button>
    </div>
  </NuxtLayout>
</template>
