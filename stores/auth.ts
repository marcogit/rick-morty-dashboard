import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null, // Simulated token
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    login(email: string) {
      // Simulate login by setting a token
      const token = btoa(email + Date.now());
      this.token = token;
      
      // Persist to cookie/localStorage (simulated with Cookie)
      const cookie = useCookie('auth_token');
      cookie.value = token;
    },
    logout() {
      this.token = null;
      const cookie = useCookie('auth_token');
      cookie.value = null;
      navigateTo('/login');
    },
    initializeAuth() {
        const cookie = useCookie('auth_token');
        if (cookie.value) {
            this.token = cookie.value;
        }
    }
  },
});
