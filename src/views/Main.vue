<template>
	<div>
		<div>Main</div>
		{{ doubleValue }}
	</div>
</template>

<script setup>
import { useStore } from '@/stores/store';
import { computed } from 'vue';

const store = useStore();

const doubleValue = computed( () => store.doubleCount );
store.increment();
</script>

