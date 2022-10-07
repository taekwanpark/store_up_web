<template>
  <div class="flex flex-col items-center justify-center">
    <!--		이용약관-->
    <div class="mb-20 flex flex-col gap-y-20">
      <Term
        :checked-list="checkedList"
        is-required
        priority="first"
        title="이용약관"
        @is-checked="isChecked"
      />
      <Term
        :checked-list="checkedList"
        is-required
        priority="second"
        title="개인정보 수집 및 이용동의"
        @is-checked="isChecked"
      />
      <Term
        :checked-list="checkedList"
        priority="third"
        title="개인정보 제 3자 제공 동의"
        @is-checked="isChecked"
      />
    </div>
    <Divider />
    <div class="mt-6 flex w-full flex-col items-center justify-center">
      <FormKit
        v-model="totalCheck"
        :classes="{
          label: {
            $reset: true,
          },
        }"
        label="위 모든 항목에 모두 동의합니다."
        off-value="off"
        on-value="on"
        type="checkbox"
        @change="onChange"
      />
      <div class="mt-16 flex justify-center gap-x-2">
        <StoreBtn btn-size="sm" route-to="/">취소</StoreBtn>
        <StoreBtn btn-size="sm" is-black @click="props.btnClick"
          >다음 단계
        </StoreBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import Divider from "@/components/common/Divider";
import Term from "@/components/member/signup/terms/Term";
import StoreBtn from "@/components/common/StoreBtn";
import { ref, watch } from "vue";

const props = defineProps({
  currentTab: String,
  btnClick: Function,
});

const totalCheck = ref("off");
const checkList = ref(["first", "second", "third"]);
const checkedList = ref([]);

const isChecked = (checked, priority) => {
  if (checked === "on") {
    checkedList.value.push(priority);
  } else {
    checkedList.value.forEach((i, index) => {
      if (i === priority) {
        checkedList.value.splice(index, 1);
      }
    });
  }
};

watch(checkedList.value, (newList) => {
  console.log(checkedList.value);
  console.log(newList);
  if (newList.length === checkList.value.length) {
    totalCheck.value = "on";
  } else if (newList.length < checkList.value.length) {
    console.log("total off");
    totalCheck.value = "off";
  }
});

//total check on/off (done)
watch(totalCheck, (newCheck) => {
  if (newCheck === "off") {
    console.log("dd");

    checkedList.value = [];
  } else {
    checkedList.value = [...checkList.value];
  }
});
const onChange = () => {
  console.log("dd");
};
</script>
