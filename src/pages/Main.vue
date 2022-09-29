<template>
  <div class="h-full">
    <div>
      <TwBtn btn-size="xs" help="please" label="tailwind" type="button"
        >Xs
      </TwBtn>
      <TwBtn btn-size="sm" help="please" label="tailwind" type="button"
        >SM
      </TwBtn>
      <TwBtn btn-size="md" help="please" label="tailwind" type="button"
        >Md
      </TwBtn>
      <TwBtn btn-size="lg" help="please" label="tailwind" type="button"
        >Lg
      </TwBtn>
      <TwBtn btn-size="xl" help="please" label="tailwind" type="button"
        >Xl
      </TwBtn>
    </div>
    <div>
      <TwInput placeholder="asdf"></TwInput>
    </div>
  </div>
</template>

<script setup>
import TwBtn from "@/components/TwBtn";
import TwInput from "@/components/TwInput";
</script>
