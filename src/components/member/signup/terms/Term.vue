<template>
  <div class="flex flex-col gap-y-2">
    <div class="mb-2 flex items-center space-x-1">
      <span class="text-left text-lg">{{ props.title }}</span>
      <span class="text-normal font-light text-store-red-light">{{
        props.isRequired ? "(필수)" : "(선택)"
      }}</span>
    </div>
    <div>
      <div
        class="h-72 overflow-auto rounded-md border border-store-border p-8 text-lg text-store-gray-extraDark"
      >
        {{ Terms[0].text }}
      </div>
    </div>
    <FormKit
      v-model="isChecked"
      :classes="{
        label: {
          $reset: true,
        },
      }"
      label="위 항목에 동의합니다."
      off-value="off"
      on-value="on"
      type="checkbox"
    />
  </div>
</template>

<script setup>
import Terms from "@/assets/Terms";
import { ref, watch } from "vue";

const props = defineProps({
  term: String,
  title: String,
  priority: String,
  isRequired: Boolean,
  checkedList: { type: Array, default: () => [] },
});
const isChecked = ref("off");
const emits = defineEmits(["isChecked"]);
watch(isChecked, (newChecked) => {
  emits("isChecked", newChecked, props.priority);
});
watch(
  () => props.checkedList,
  (newList) => {
    if (newList.length > 0) {
      newList.forEach((i) => {
        if (i === props.priority) {
          isChecked.value = "on";
        }
      });
    } else if (newList.length === 0) {
      isChecked.value = "off";
    }
  }
);
</script>