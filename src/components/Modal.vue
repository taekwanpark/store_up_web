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
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
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
              class="relative w-full max-w-[730px] transform overflow-hidden rounded-[5px] bg-white p-6 px-[33px] pt-[30px] pb-[39px] transition-all"
            >
              <DialogTitle
                as="h3"
                class="mb-[12px] text-left text-[24px] font-medium leading-[47px] text-black"
                >알림 메세지
              </DialogTitle>
              <Divider />
              <div class="my-[85px] flex w-full justify-center">
                <p class="text-[24px] leading-[35px] text-amuzGray-707070">
                  {{ props.text }}
                </p>
              </div>
              <div class="">
                <button
                  class="inline-flex w-full w-auto justify-center rounded-[5px] border border-transparent bg-amuzGray-707070 bg-amuzGray-707070 px-[98px] py-[20px] text-[20px] text-white shadow-sm hover:bg-amuzGray-979797 focus:outline-none focus:ring-2 focus:ring-amuzGray-707070 focus:ring-offset-2"
                  type="button"
                  @click="closeModal"
                >
                  확인
                </button>
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
