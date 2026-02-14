export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  
  // Initialize auth state (check cookie) if not already
  if (!authStore.token) {
      authStore.initializeAuth();
  }

  if (!authStore.isAuthenticated && to.path !== '/login') {
    return navigateTo('/login');
  }
});
