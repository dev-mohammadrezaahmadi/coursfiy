<script lang="ts" setup>
const props = defineProps({
  videoId: {
    type: Number,
    required: true
  }
})

</script>

<template>
  <iframe width="560" height="315" :src="`https://player.vimeo.com/video/${props.videoId}`" title="Video Player"
    frameborder="0" allow="accelerometer; clipboard-write; encrypted-media;" allowfullscreen></iframe>
</template>

