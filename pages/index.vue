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
              Mississippi Succeeds Report Card
            </h1>
            <h1
              class="text-gray-100 text-base tablet:text-2xl font-semibold leading-none mb-4"
            >
              Search for school or district data.
            </h1>
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
                class="absolute inset-y-0 right-0 px-4 py-1 m-1 bg-gray-800 text-gray-100 text-sm rounded-lg"
                @click="handleClick"
              >
                {{
                  selectedEntities.length > 1
                    ? 'Compare ' + selectedEntities.length + 'selected'
                    : 'View Entity'
                }}
              </button>
            </div>
            <!-- <div
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
            </div> -->

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
              <div
                class="mt-2 absolute left-0 origin-top-left w-full overflow-auto"
                style="height: 400px;"
              >
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <!-- block -->
                  <div
                    class="w-full border-b last:border-none px-4 py-3 cursor-pointer"
                    v-for="item in results"
                    :key="item.EntityId"
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
                              {{ item.EntityGrade[0].toUpperCase() }}
                            </h1>
                          </div>
                        </div>

                        <div class="ml-4 flex flex-col text-gray-700">
                          <h1
                            class="text-base tablet:text-lg font-semibold tracking-tight leading-none"
                          >
                            {{ item.EntityDisplayName }}
                          </h1>
                          <h1 class="text-sm tablet:text-base leading-none">
                            {{ item.EntityCity }}, MS
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="bg-gray-200 py-24 border-b">
      <div class="container">
        <div class="flex flex-col w-full tablet:w-1/2 mx-auto">
          <h1 class="text-3xl font-medium">
            Statewide Accountability Performance Results
          </h1>

          <p class="leading-snug">
            The Mississippi Statewide Accountability System is a single “A”
            through “F” school and district accountability system. Grades are
            based on student achievement, student growth, student participation
            in testing, and other academic measures.
          </p>
        </div>
        <div class="flex flex-wrap mt-12">
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-teal-500 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">Mississippi Average</h1>

                <p class="text-sm leading-snug">
                  Learn more about the state results and subgroup breakdowns.
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-blue-500 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">Data Map</h1>

                <p class="text-sm leading-snug">
                  View performance measures on a map.
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-red-600 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">All Data</h1>

                <p class="text-sm leading-snug">
                  Download the full dataset for the current year in spreadsheet
                  format or select prior year below.
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-cyan-500 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">Student Group Data</h1>

                <p class="text-sm leading-snug">
                  Review academic performance by various student groups.
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-yellow-300 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">Video Overview</h1>

                <p class="text-sm leading-snug">
                  A quick video with highlights of the Mississippi Succeeds
                  Report Card.
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-red-500 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">User Guide</h1>

                <p class="text-sm leading-snug">
                  Get an in-depth understanding of report card details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-100 py-24 border-b">
      <div class="container">
        <div class="flex flex-col w-full tablet:w-1/2 mx-auto">
          <h1 class="text-3xl font-medium">
            The Data
          </h1>

          <p class="leading-snug">
            The Data Every school and district has an overall accountability
            grade and score. The data include assessment, teacher, and
            environment data that gives an overview of school performance with
            the ability to link to more detailed data.
          </p>
        </div>
        <div class="flex flex-wrap mt-12">
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-teal-500 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">Mississippi Average</h1>

                <p class="text-sm leading-snug">
                  Learn more about the state results and subgroup breakdowns.
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-blue-500 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">Data Map</h1>

                <p class="text-sm leading-snug">
                  View performance measures on a map.
                </p>
              </div>
            </div>
          </div>

          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="w-12 h-12 bg-red-600 rounded-full" />
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">All Data</h1>

                <p class="text-sm leading-snug">
                  Download the full dataset for the current year in spreadsheet
                  format or select prior year below.
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-cyan-500 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">Student Group Data</h1>

                <p class="text-sm leading-snug">
                  Review academic performance by various student groups.
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-yellow-300 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">Video Overview</h1>

                <p class="text-sm leading-snug">
                  A quick video with highlights of the Mississippi Succeeds
                  Report Card.
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-2">
            <div
              class="flex bg-white w-full border shadow px-4 py-2 rounded-lg"
            >
              <div class="flex w-1/6">
                <div class="flex h-12 w-12 bg-red-500 rounded-full"></div>
              </div>
              <div class="flex w-5/6 flex-col ml-4">
                <h1 class="text-2xl font-medium">User Guide</h1>

                <p class="text-sm leading-snug">
                  Get an in-depth understanding of report card details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    })
  },
  methods: {
    handleClick() {
      const entities = this.selectedEntities.map((item) => item.EntityId)
      console.log('entities', entities)
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
      // 'https://github.com/davidbkay/msrc-serverless-test/2017/entities.json'
    )
    store.commit('entities/add', data)
    // store.commit('auth/add', data.results[0])
    // store.commit('auth/toggle')
  },
  data: () => ({
    search: '',
    selectedEntities: [],
    apiEntities: [],
    results: []
  })
}
</script>

<style></style>
