<template>
  <div class="= flex h-96 w-full flex-col items-center border-b">
    <Divider />
    <InnerLgLayout>
      <PolicyRow />
    </InnerLgLayout>
    <Divider />
    <div class="flex w-full justify-center bg-store-gray-extraLight">
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
