<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <div
    :class="
      cn('flex flex-col space-y-2 text-center sm:text-right', props.class)
    "
  >
    <slot />
  </div>
</template>
