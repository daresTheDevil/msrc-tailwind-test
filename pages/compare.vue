<template>
  <div class="container">
    <!-- main wrapper -->

    <div class="flex w-full flex-wrap">
      <div
        class="p-2 flex w-full tablet:w-1/2 desktop:w-1/3"
        v-for="item in entities"
        :key="item._id"
      >
        <div class="flex flex-col w-full bg-white rounded-lg shadow p-2">
          <p class="text-2xl font-medium text-gray-800 leading-none">
            {{ item.entityDisplayName }}
          </p>
          <div class="flex flex-col my-4">
            <span class="text-gray-700 leading-none">{{
              item.entityAddress
            }}</span>
            <span class="text-gray-700 leading-none">
              {{ item.entityCity }}, {{ item.entityState }}
              {{ item.entityZip }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full">
      <h1 class="text-4xl text-gray-800 border-b mb-4">Student Performance</h1>
      <div class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap">
        <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
        <div class="flex flex-col w-full my-4 tablet:my-0 tablet:w-5/12">
          <h1 class="text-2xl font-bold text-gray-800">
            English Performance
          </h1>
          <p class="text-sm">
            Percentage of students who scored proficient (levels 4 + 5) on the
            state english assessment
          </p>
        </div>
        <div class="flex flex-col flex-grow">
          <div v-for="item in entities" :key="item.entityDisplayName">
            <div class="flex items-center justify-between">
              <span class="font-bold text-gray-800 text-sm">{{
                item.entityDisplayName
              }}</span>
              <span class="font-bold text-gray-800 text-sm"
                >{{ randomNumber() }}%</span
              >
            </div>
            <div
              class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
            >
              <div
                class="h-full"
                :class="bgColor()"
                :style="`width: ` + randomNumber() + `%;`"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap">
        <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
        <div class="flex flex-col w-full my-4 tablet:my-0 tablet:w-5/12">
          <h1 class="text-2xl font-bold text-gray-800">
            Math Performance
          </h1>
          <p class="text-sm">
            Percentage of students who scored proficient (levels 4 + 5) on the
            state math assessment
          </p>
        </div>
        <div class="flex flex-col flex-grow">
          <div v-for="item in entities" :key="item.entityDisplayName">
            <div class="flex items-center justify-between">
              <span class="font-bold text-gray-800 text-sm">{{
                item.entityDisplayName
              }}</span>
              <span class="font-bold text-gray-800 text-sm"
                >{{ randomNumber() }}%</span
              >
            </div>
            <div
              class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
            >
              <div
                class="h-full"
                :class="bgColor()"
                :style="`width: ` + randomNumber() + `%;`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    randomNumber() {
      return Math.floor(Math.random() * 100) + 1
    },
    bgColor() {
      const r = Math.floor(Math.random() * 10) + 1
      switch (r) {
        case 1:
          return 'bg-blue-400'
        case 2:
          return 'bg-green-400'
        case 3:
          return 'bg-purple-400'
        case 4:
          return 'bg-indigo-400'
        case 5:
          return 'bg-mint-400'
        case 6:
          return 'bg-red-400'
        case 7:
          return 'bg-magenta-400'
        case 8:
          return 'bg-violet-400'
        case 9:
          return 'bg-pink-400'
        case 10:
          return 'bg-cyan-400'
        default:
          return 'bg-gray-400'
      }
    }
  },
  computed: {
    /* randomNumber() {
      return Math.floor(Math.random() * 100) + 1
    }, */
    ...mapGetters({
      entities: 'entities/getEntities'
    })
  }
}
</script>

<style></style>
