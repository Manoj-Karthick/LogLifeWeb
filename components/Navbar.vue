<script setup lang="ts">
const route = useRoute();

const links = [
  {
    label: "Dashboard",
    icon: "i-circum-bookmark-remove",
    to: "/dashboard",
  },
  {
    label: "Log Finance",
    icon: "i-heroicons-home",
    to: "/finance",
  },
  {
    label: "Log Habits",
    icon: "i-heroicons-chart-bar",
    to: "/habits",
  },
  {
    label: "Log Expiry",
    icon: "i-heroicons-command-line",
    to: "/expiry",
  },
  {
    label: "Log Todos",
    icon: "i-heroicons-command-line",
    to: "/todos",
  },
];
</script>

<template>
  <div class="bg-slate-100 min-h-screen">
    <UVerticalNavigation :links="links" />
  </div>
</template>
