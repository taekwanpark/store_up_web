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
				console.log( 'getters' );
				const auth = useAuthStore();
				console.log( auth.career );
				if( auth.career === 'developer' ) {
					return state.count = 999;
				} else if( auth.career === 'doctor' ) {
					auth.changeCareer();
					console.log( auth.career );
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


