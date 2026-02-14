import type { Character, ApiResponse } from '~/types';

export const useCharacters = () => {
    const config = useRuntimeConfig();
    const API_URL = 'https://rickandmortyapi.com/api/character';

    const page = ref(1);
    const search = ref('');
    const status = ref('');

    // Construct query parameters reactively
    const query = computed(() => {
        const params: Record<string, any> = {
            page: page.value,
        };
        if (search.value) {
            params.name = search.value;
        }
        return params;
    });

    const { data, pending, error, refresh } = useFetch<ApiResponse>(API_URL, {
        query,
        watch: [page, search], // Refetch when page or search changes
    });

    const characters = computed(() => data.value?.results || []);
    const info = computed(() => data.value?.info);

    const nextPage = () => {
        if (info.value?.next) {
            page.value++;
        }
    };

    const prevPage = () => {
        if (info.value?.prev) {
            page.value--;
        }
    };
    
    const setPage = (p: number) => {
        page.value = p;
    }

    return {
        characters,
        info,
        pending,
        error,
        page,
        search,
        nextPage,
        prevPage,
        setPage,
        refresh
    };
};
