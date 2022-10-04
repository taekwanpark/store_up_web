<template>
  <div class="= flex h-96 w-full flex-col items-center">
    <Divider />
    <InnerLgLayout>
      <PolicyRow />
    </InnerLgLayout>
    <Divider />
    <div class="flex h-full w-full justify-center bg-amuzGray-f5f5f5">
      <InnerLgLayout>
        <CompanyRow />
      </InnerLgLayout>
    </div>
  </div>
</template>

<script setup>
import PolicyRow from "@/components/footer/PolicyRow";
import Divider from "@/components/Divider";
import CompanyRow from "@/components/footer/CompanyRow";
import InnerLgLayout from "@/components/layouts/InnerLgLayout";
</script>
