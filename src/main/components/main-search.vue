<script lang="ts" setup>
defineOptions({ name: 'MainSearch' })
</script>

<template>
  <div class="w-full h-300px bg-transparent m-y-10 flex-center">
    <SearchInput :is-header="false" />
  </div>
</template>
