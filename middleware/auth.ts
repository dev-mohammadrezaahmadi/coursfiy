export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.chapterSlug === "chapter-1") {
    return;
  }
  return navigateTo("/login");
});
