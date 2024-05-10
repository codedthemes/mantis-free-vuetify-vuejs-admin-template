import { defineStore } from 'pinia';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

const baseUrl = `${import.meta.env.VITE_API_URL}/todos`;

export const useTodostore = defineStore({
  id: 'todos',
  state: () => ({
    todos: {}
  }),
  actions: {
    async getAll() {
      try {
        this.todos = { loading: true };
        const response = await fetchWrapper.get(baseUrl);
        this.todos = response;
        console.log('this.todos', this.todos);
      } catch (error) {
        console.error('Erro ao buscar todos:', error);
        this.todos = { error };
      }
    }
  }
});
