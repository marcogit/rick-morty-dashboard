import { defineStore } from 'pinia';
import type { Character } from '~/types';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as Character[],
  }),
  getters: {
    isFavorite: (state) => (characterId: number) => {
      return state.favorites.some((c) => c.id === characterId);
    },
  },
  actions: {
    toggleFavorite(character: Character) {
      const index = this.favorites.findIndex((c) => c.id === character.id);
      if (index === -1) {
        this.favorites.push(character);
      } else {
        this.favorites.splice(index, 1);
      }
      this.saveToLocalStorage();
    },
    loadFromLocalStorage() {
      if (process.client) {
        const stored = localStorage.getItem('favorites');
        if (stored) {
          try {
            this.favorites = JSON.parse(stored);
          } catch (e) {
            console.error('Failed to parse favorites', e);
            this.favorites = [];
          }
        }
      }
    },
    saveToLocalStorage() {
      if (process.client) {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      }
    }
  },
});
