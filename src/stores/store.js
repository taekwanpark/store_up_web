import { defineStore } from 'pinia';
import { useAuthStore } from '@/stores/authStore';

export const useStore = defineStore( 'mainStore', {
		// state = ref()
		state: () => ({
			count: 0,
			name: 'Eduardo',
		}),
		// getters = computed()
		getters: {
			doubleCount: ( state ) => {
				const auth = useAuthStore();
				if( auth.career === 'developer' ) {
					return state.count = 999;
				} else if( auth.career === 'doctor' ) {
					auth.changeCareer();
					return state.count * 2;
				} else {
					return state.count = -999;
				}

			},
		},
		// actions = function()
		actions: {
			increment(){
				console.log( 'actions' );
				this.count++;
			},
		},
	},
);


