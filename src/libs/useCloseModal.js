import { ref } from "vue";

const isOpen = ref(false);
const closeModal = () => {
  isOpen.value = false;
};

const openModal = () => {
  isOpen.value = true;
};

export { isOpen, closeModal, openModal };
