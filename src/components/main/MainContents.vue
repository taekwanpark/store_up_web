<template>
  <InnerLgLayout>
    <!--		인기 상품-->
    <MainProductList
      :products="products"
      routeTo="/products-list/best"
      title="BEST - 인기 상품"
    />
    <!--		신상품-->
    <MainProductList :products="products" routeTo="/" title="신상품" />

    <!--		이달의 제철 - 수산물-->
    <div class="h-96 w-full bg-gray-100">이달의 제철 - 수산물</div>
    <MainProductList
      :products="products"
      list-amount="4"
      routeTo="/"
      title="농산물"
    />
    <MainProductList
      :products="products"
      list-amount="4"
      routeTo="/"
      title="축산물"
    />
    <MainProductList
      :products="products"
      list-amount="4"
      routeTo="/"
      title="임산물"
    />
    <MainProductList
      :products="products"
      list-amount="4"
      routeTo="/"
      title="가공 식품"
    />
  </InnerLgLayout>
</template>

<script setup>
import InnerLgLayout from "@/components/layouts/InnerLgLayout";
import MainProductList from "@/components/main/ProductsList";

import img1 from "@/assets/images/img1.jpg";
import img3 from "@/assets/images/img3.jpg";
import img5 from "@/assets/images/img5.jpg";
import img6 from "@/assets/images/img6.jpeg";
import img7 from "@/assets/images/img7.jpeg";

const products = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "1,900",
    imageUrl: img1,
    subscription: true,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "7,200",
    imageUrl: img5,
    subscription: false,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "13,500",
    imageUrl: img6,
    subscription: true,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "7,800",
    imageUrl: img7,
    subscription: false,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "6,800",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    subscription: false,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "+1-202-555-0170",
    imageUrl: img3,
    subscription: false,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "6,800",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    subscription: true,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "7,800",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    subscription: false,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "13,500",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    subscription: false,
  },
];
</script>
