<template>
  <div
    class="min-h-screen w-full flex column justify-center items-center flex-col bg-yellow-500"
  >
    <span
      class="text-3xl font-bold text-slate-800 py-5 px-10 bg-white rounded-md shadow-sm shadow-white-700/90"
    >
      Hello world!
    </span>

    <v-chip class="my-5" color="primary" label>
      <v-icon start icon="mdi:mdi-car"></v-icon>
      {{ message }}
    </v-chip>

    <v-icon icon="mdi:mdi-food" size="60" class="my-5" />

    <Icon icon="mdi-light:home" width="40" class="my-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  components: {
    Icon,
  },
  props: ["message"],
});
</script>