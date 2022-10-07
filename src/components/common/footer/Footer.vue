<template>
  <div class="= flex h-96 w-full flex-col items-center">
    <Divider />
    <InnerLgLayout>
      <PolicyRow />
    </InnerLgLayout>
    <Divider />
    <div class="bg-amuzGray-f5f5f5 flex h-full w-full justify-center">
      <InnerLgLayout>
        <CompanyRow />
      </InnerLgLayout>
    </div>
  </div>
</template>

<script setup>
import PolicyRow from "@/components/common/footer/PolicyRow";
import Divider from "@/components/common/Divider";
import CompanyRow from "@/components/common/footer/CompanyRow";
import InnerLgLayout from "@/components/common/layouts/InnerLgLayout";
</script>
