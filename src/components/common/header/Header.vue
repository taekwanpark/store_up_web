<template>
  <header class="flex w-full flex-col items-center">
    <!--		login + service center-->
    <InnerLayout>
      <LoginRow />
    </InnerLayout>

    <!--		title + search + myPage-->
    <InnerLayout>
      <MainRow />
    </InnerLayout>

    <!--		categories-->
    <InnerLayout>
      <NavBar />
    </InnerLayout>
    <Divider />
  </header>
</template>

<script setup>
import LoginRow from "@/components/common/header/LoginRow";
import InnerLayout from "@/components/common/layouts/InnerLgLayout";
import MainRow from "@/components/common/header/MainRow";
import Divider from "@/components/common/Divider";
import NavBar from "@/components/common/header/NavBar";
</script>
