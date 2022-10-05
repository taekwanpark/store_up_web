<template>
  <div>
    <div>
      <div class="relative flex w-full items-center justify-center">
        <input
          id="search"
          class="block w-96 rounded-lg border-none bg-gray-100 px-5 py-4 text-left text-base shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
          name="search"
          placeholder="검색어를 입력해주세요."
          type="text"
        />
        <div class="absolute inset-y-0 right-4 flex">
          <div class="inline-flex items-center">
            <svg
              class="h-8 w-8"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
