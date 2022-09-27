<template>
  <div class="flex h-[413px] w-full flex-col items-center">
    <Divider />
    <InnerLayout>
      <PolicyRow />
    </InnerLayout>
    <Divider />
    <div class="flex h-full w-full justify-center bg-amuzGray-f5f5f5">
      <InnerLayout>
        <CompanyRow />
      </InnerLayout>
    </div>
  </div>
</template>

<script setup></script>
<script>
import InnerLayout from "@/components/InnerLayout";
import PolicyRow from "@/components/footer/PolicyRow";
import Divider from "@/components/Divider";
import CompanyRow from "@/components/footer/CompanyRow";

export default {
  components: { CompanyRow, Divider, PolicyRow, InnerLayout },
};
</script>
