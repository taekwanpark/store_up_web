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
import LoginRow from "@/components/header/LoginRow";
import NavBar from "@/components/header/NavBar";
import InnerLayout from "@/components/InnerLgLayout";
import MainRow from "@/components/header/MainRow";
import Divider from "@/components/Divider";
</script>
