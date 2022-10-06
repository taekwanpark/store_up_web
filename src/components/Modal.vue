<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot :show="props.isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-store-gray-extraDark bg-opacity-50 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end items-center justify-center p-4 p-0 text-center"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 translate-y-0 scale-95"
            enter-to="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 scale-100"
            leave-to="opacity-0 translate-y-4 translate-y-0 scale-95"
          >
            <DialogPanel
              class="relative w-full max-w-xl transform overflow-hidden rounded-lg bg-white px-8 pt-6 pb-8 transition-all"
            >
              <DialogTitle
                as="h3"
                class="mb-3 text-left text-xl font-medium leading-loose text-black"
                >알림 메세지
              </DialogTitle>
              <Divider />
              <div class="my-16 flex w-full justify-center">
                <p class="text-2xl text-store-gray-extraDark">
                  {{ props.text }}
                </p>
              </div>
              <div class="">
                <StoreBtn btn-size="sm" is-black @click="closeModal"
                  >확인
                </StoreBtn>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { defineEmits, defineProps } from "vue";
import Divider from "@/components/Divider";
import StoreBtn from "@/components/StoreBtn";

const props = defineProps({
  isOpen: { type: Boolean, required: true },
  text: {
    type: String,
    required: true,
  },
});
const emits = defineEmits(["closeModal"]);
const closeModal = () => {
  emits("closeModal");
};
</script>
