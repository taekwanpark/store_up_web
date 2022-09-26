import { defineStore } from 'pinia';

export const useAuthStore = defineStore( 'authStore', {
		// state = ref()
		state: () => ({
			career: 'doctor',
		}),
		// getters = computed()
		getters: {
			getCareer: ( state ) => state.career = 'doctor',
		},
		// actions = function()
		actions: {
			changeCareer(){
				this.career = 'carpenter';
			},
		},
	},
);


