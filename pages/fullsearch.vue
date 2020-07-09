<template>
  <div>
    <div class="flex bg-gray-900 py-4">
      <div class="container">
        <div class="w-full tablet:w-1/2 mx-auto">
          <label
            class="block text-sm tablet:text-lg text-gray-100 tablet:mb-2"
          ></label>
          <!-- <label class="block text-sm tablet:text-lg text-gray-100 mb-2"
            >Search for school or district data here</label
          > -->
          <div class="relative">
            <input
              v-model="search"
              class="form-input block w-full px-8"
              @input="onChange"
            />
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </div>
            <button
              v-if="selectedEntities.length > 0"
              @click="handleClick"
              class="absolute inset-y-0 right-0 px-4 py-1 m-1 bg-gray-800 text-gray-100 text-sm rounded-lg"
            >
              {{
                selectedEntities.length > 1
                  ? 'Compare ' + selectedEntities.length + 'selected'
                  : 'View Entity'
              }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50">
      <div class="container">
        <div class="flex">
          <div class="hidden tablet:flex w-1/5 flex-col py-8">
            <div class="py-1 border-b border-gray-400">
              <h1 class="text-sm text-gray-700 tracking-widest font-semibold">
                ENTITY LEVEL
              </h1>
            </div>
            <div class="py-1 flex flex-col">
              <div class="flex items-center justify-between mb-2">
                <h1 class="text-blue-500 font-bold">All</h1>
                <h1 class="text-blue-500 font-bold">
                  {{ results.length ? results.length : 0 }}
                </h1>
              </div>
              <div class="flex items-center justify-between">
                <h1 class="text-gray-600 font-medium">1000</h1>
                <h1 class="text-gray-500 font-bold">
                  {{ highStudents.length ? highStudents.length : 0 }}
                </h1>
              </div>
              <div class="flex items-center justify-between">
                <h1 class="text-gray-600 font-medium">600</h1>
                <h1 class="text-gray-500 font-medium">
                  {{ lowStudents.length ? lowStudents.length : 0 }}
                </h1>
              </div>
            </div>
            <div class="py-1 border-b border-gray-400 mt-4">
              <h1 class="text-sm text-gray-700 tracking-widest font-semibold">
                TYPE
              </h1>
            </div>
            <div class="py-1 flex flex-col">
              <div class="flex items-center justify-between mb-2">
                <h1 class="text-blue-500 font-bold">All</h1>
                <h1 class="text-blue-500 font-bold">
                  {{ results.length ? results.length : 0 }}
                </h1>
              </div>
              <div class="flex items-center justify-between">
                <h1 class="text-gray-600 font-medium">Districts</h1>
                <h1 class="text-gray-500 font-medium">
                  {{ numDistricts.length ? numDistricts.length : 0 }}
                </h1>
              </div>
              <div class="flex items-center justify-between">
                <h1 class="text-gray-600 font-medium">Schools</h1>
                <h1 class="text-gray-500 font-medium">
                  {{ numSchools.length ? numSchools.length : 0 }}
                </h1>
              </div>
            </div>

            <!-- <button
              class="block py-2 px-4 bg-gray-700 text-gray-100 rounded-lg mt-6"
            >
              Compare {{ selectedEntities.length }}
            </button> -->
          </div>

          <div
            class="flex w-full tablet:w-4/5 flex-col py-4 tablet:py-8 tablet:pl-12 overflow-auto"
            style="height: 90vh;"
          >
            <div class="py-1 border-b border-gray-400 tablet:mb-2">
              <h1 class="text-sm text-gray-700 tracking-widest font-semibold">
                {{ results.length || 0 }} Results
              </h1>
            </div>
            <div class="block flex flex-col">
              <transition-group name="list" tag="div" mode="out-in">
                <div
                  class="tablet:bg-white tablet:border w-full rounded-lg border-b last:border-none shadow-none p-4 cursor-pointer mb-2"
                  v-for="item in results"
                  :key="item.entityId"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex items-center justify-center w1/6">
                        <div
                          class="bg-purple-600 h-8 w-8 tablet:h-10 tablet:w-10 flex items-center justify-center rounded-full"
                        >
                          <h1
                            class="text-2xl tablet:text-3xl font-bold text-gray-100 tracking-none"
                          >
                            {{ item.entityGrade[0].toUpperCase() }}
                          </h1>
                        </div>
                      </div>

                      <div class="ml-4 flex flex-col text-gray-700">
                        <h1
                          class="text-base tablet:text-xl font-semibold tracking-tight leading-none"
                        >
                          {{ item.entityDisplayName }}
                        </h1>
                        <h1 class="text-sm tablet:text-base leading-none">
                          {{ item.entityCity }}, MS
                        </h1>
                      </div>
                    </div>
                    <div class="flex items-center justify-center w1/6">
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          :value="item"
                          v-model="selectedEntities"
                          class="form-checkbox h-5 w-5 bg-gray-300 border-2"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-expressions */
/* eslint-disable unicorn/prefer-includes */
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  components: {},
  computed: {
    ...mapGetters({
      entities: 'entities/getEntities'
    }),
    numDistricts() {
      if (this.results.length)
        return this.results.filter((item) => item.EntityType === 'District')
      return 0
    },
    numSchools() {
      if (this.results.length)
        return this.results.filter((item) => item.EntityType === 'School')
      return 0
    },
    lowStudents() {
      if (this.results.length)
        return this.results.filter((item) => item.EntityLevel === 600)
      return 0
    },
    highStudents() {
      if (this.results.length)
        return this.results.filter((item) => item.EntityLevel === 1000)
      return 0
    }
  },
  methods: {
    handleClick() {
      const entities = this.selectedEntities.map((item) => item.EntityId)
      this.$store.commit('entities/add', this.selectedEntities)
      this.$router.push({
        name: 'entities',
        query: { entities: entities.join(',') }
      })
    },
    onChange() {
      this.results = this.entities.filter(
        (item) =>
          item.EntityDisplayName
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
      )
    }
  },
  async fetch({ store, params }) {
    const { data } = await axios.get(
      'https://raw.githubusercontent.com/davidbkay/msrc-serverless-test/master/2017/entities/entities.json'
    )
    console.log('data', data)
    store.commit('entities/add', data)
    // store.commit('auth/add', data.results[0])
    // store.commit('auth/toggle')
  },
  data: () => ({
    search: '',
    selectedEntities: [],
    results: []
  })
}
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter,
.list.leave.to {
  transform: translateX(2rem);
  opacity: 0;
}

.test-move {
  transition: all 0.5s;
}
</style>
