<template>
  <div>
    <div
      class="flex w-full py-12 desktop:py-32 bg-center bg-cover bg-no-repeat relative"
      style="background-image: url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2304&q=80');"
    >
      <div class="z-0 absolute inset-0">
        <div class="absolute inset-0 bg-black opacity-75" tabindex="-1"></div>
      </div>
      <div class="container">
        <div class="flex justify-center">
          <div class="flex flex-col z-10 w-full desktop:w-2/3">
            <h1
              class="text-gray-100 text-4xl tablet:text-6xl font-bold leading-none"
            >
              Data that matter.
            </h1>
            <h1
              class="text-gray-100 text-base tablet:text-2xl font-semibold leading-none mb-4"
            >
              Search for school or district data.
            </h1>
            <div
              class="bg-white px-4 pt-2 pb-4 rounded-lg w-full flex flex-col"
            >
              <div class="flex items-center w-full">
                <select
                  class="form-select rounded-lg py-2 border-none text-gray-800 px-4"
                >
                  <option>All</option>
                  <option>Districts</option>
                  <option>Schools</option>
                </select>
                <select
                  class="form-select border-none rounded-lg py-2 text-gray-800 px-4 ml-4"
                >
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                </select>
              </div>
              <div class="flex">
                <input
                  class="form-input rounded-none block w-full"
                  placeholder="Jane Doe"
                />
              </div>
            </div>

            <!-- <label class="inline-flex items-center relative">
              <select class="form-select block rounded-l-lg rounded-r-none">
                <option>All</option>
                <option>Districts</option>
                <option>Schools</option>
              </select>
              <input
                class="form-input rounded-none block w-full"
                placeholder="Jane Doe"
              />
              <n-link
                to="msrc/fullsearch"
                tag="button"
                class="inline-flex items-center border border-orange-400 py-2 px-4 font-semibold text-gray-100 bg-orange-400 rounded-r-lg active:bg-gray-900"
              >
                <svg
                  class="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                  />
                </svg>
              </n-link>
            </label> -->
            <div class="block relative">
              <div class="mt-2 absolute left-0 origin-top-left w-full">
                <div class="bg-white rounded-lg p-4 shadow-lg">
                  <!-- block -->
                  <div
                    class="flex items-center my-2 p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
                    v-for="i in 5"
                    :key="i"
                  >
                    <div
                      class="bg-purple-600 h-10 w-10 flex items-center justify-center rounded-full"
                    >
                      <h1
                        class="text-4xl font-bold text-gray-100 tracking-none"
                      >
                        A
                      </h1>
                    </div>
                    <div class="ml-4 flex flex-col text-gray-800">
                      <h1 class="text-xl font-bold tracking-tight leading-none">
                        Jackson Public School District
                      </h1>
                      <h1 class="text-base leading-none">Jackson, MS</h1>
                    </div>
                  </div>
                  <!-- end block -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style></style>
