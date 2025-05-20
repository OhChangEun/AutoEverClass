import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
      email: "",
      name: "",
      isLoggedIn: false,
    },
  }),

  actions: {
    login(userData) {
      this.user = {
        email: userData.email,
        name: userData.name,
        isLoggedIn: true,
      };
    },

    logout() {
      this.user = {
        name: "",
        name: "",
        isLoggedIn: false,
      };
    },
  },

  // persist: true, // localstorage에 자동저장
});
