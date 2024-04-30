<script>
export default {
  setup() {
    definePageMeta({
      layout: "landing-page",
    });
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      emailDirty: false, // Track if email field is dirty
    };
  },
  methods: {
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    submitForm() {
      if (!this.isValidEmail(this.email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      this.login();
    },
    async login() {
      console.log("Logging in...");
      const response = await $fetch("/api/login", {
        method: "POST",
        body: { email: this.email, password: this.password },
      });
    },
  },
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="submitForm"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
          >Email:</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          v-model="email"
          @input="emailDirty = true"
          required
        />
        <p
          class="text-red-500 text-xs italic"
          v-if="emailDirty && !isValidEmail(email)"
        >
          Please enter a valid email address.
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
          >Password:</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          v-model="password"
          required
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="confirmPassword"
          >Confirm Password:</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
          required
        />
        <p
          class="text-red-500 text-xs italic"
          v-if="password !== confirmPassword"
        >
          Passwords do not match.
        </p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
