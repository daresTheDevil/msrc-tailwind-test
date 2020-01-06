<template>
  <div class="container">
    <!-- main wrapper -->

    <div class="flex w-full flex-wrap">
      <div
        class="p-2 flex w-full tablet:w-1/2 desktop:w-1/3"
        v-for="item in entities"
        :key="item.entityId"
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

    <div class="flex flex-col mt-8">
      <div class="flex flex-col w-full">
        <h1
          class="text-4xl leading-none tracking-tight font-bold text-gray-800 mb-1"
        >
          Student Proficiency
        </h1>
        <p class="text-gray-800 text-lg leading-tight" style="width: 70em;">
          Proficiency is the measurement of how well students performed on state
          assessments.
        </p>
      </div>
      <div class="flex flex-wrap">
        <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-1">
          <div
            class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap"
          >
            <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
            <div class="flex flex-col w-full my-4">
              <h1 class="text-2xl font-bold text-gray-800">
                Math Proficiency
              </h1>
              <p class="text-sm">
                Percentage of students who scored proficient (levels 4 + 5) on
                the state math assessment
              </p>
            </div>
            <div class="flex flex-col flex-grow">
              <div v-for="item in facts" :key="item.entityId">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-gray-800 text-sm">{{
                    item.DistrictName
                  }}</span>
                  <span class="font-bold text-gray-800 text-sm">{{
                    item.MathProficiency ? item.MathProficiency + '%' : 'N/A'
                  }}</span>
                </div>
                <div
                  class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
                >
                  <div
                    class="h-full bg-blue-400"
                    :style="`width: ` + item.MathProficiency + `%;`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-1">
          <div
            class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap"
          >
            <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
            <div class="flex flex-col w-full my-4">
              <h1 class="text-2xl font-bold text-gray-800">
                Science Proficiency
              </h1>
              <p class="text-sm">
                Percentage of students who scored proficient (levels 4 + 5) on
                the state science assessment
              </p>
            </div>
            <div class="flex flex-col flex-grow">
              <div v-for="item in facts" :key="item.entityId">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-gray-800 text-sm">{{
                    item.DistrictName
                  }}</span>
                  <span class="font-bold text-gray-800 text-sm">{{
                    item.ScienceProficiency
                      ? item.ScienceProficiency + '%'
                      : 'N/A'
                  }}</span>
                </div>
                <div
                  class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
                >
                  <div
                    class="h-full bg-blue-400"
                    :style="`width: ` + item.ScienceProficiency + `%;`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-1">
          <div
            class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap"
          >
            <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
            <div class="flex flex-col w-full my-4">
              <h1 class="text-2xl font-bold text-gray-800">
                English Proficiency
              </h1>
              <p class="text-sm">
                Percentage of students who scored proficient (levels 4 + 5) on
                the state english assessment
              </p>
            </div>
            <div class="flex flex-col flex-grow">
              <div v-for="item in facts" :key="item.entityId">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-gray-800 text-sm">{{
                    item.DistrictName
                  }}</span>
                  <span class="font-bold text-gray-800 text-sm">{{
                    item.EnglishProficiency
                      ? item.EnglishProficiency + '%'
                      : 'N/A'
                  }}</span>
                </div>
                <div
                  class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
                >
                  <div
                    class="h-full bg-blue-400"
                    :style="`width: ` + item.EnglishProficiency + `%;`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-1">
          <div
            class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap"
          >
            <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
            <div class="flex flex-col w-full my-4">
              <h1 class="text-2xl font-bold text-gray-800">
                US History Proficiency
              </h1>
              <p class="text-sm">
                Percentage of students who scored proficient (levels 4 + 5) on
                the state history assessment
              </p>
            </div>
            <div class="flex flex-col flex-grow">
              <div v-for="item in facts" :key="item.entityId">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-gray-800 text-sm">{{
                    item.DistrictName
                  }}</span>
                  <span class="font-bold text-gray-800 text-sm">{{
                    item.HistoryProficiency
                      ? item.HistoryProficiency + '%'
                      : 'N/A'
                  }}</span>
                </div>
                <div
                  class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
                >
                  <div
                    class="h-full bg-blue-400"
                    :style="`width: ` + item.HistoryProficiency + `%;`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-8">
      <div class="flex items-center mb-4">
        <div class="flex">
          <h1
            class="text-5xl leading-none tracking-tight font-bold text-gray-800"
          >
            Student Growth
          </h1>
        </div>
        <div class="h-12 flex border rounded mx-4" />
        <div class="flex w-1/2">
          <p class="text-gray-800 leading-tight">
            Points awarded to students making adequate progress in performance
            on the statewide English assessment from one year to the next.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-1">
          <div
            class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap"
          >
            <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
            <div class="flex flex-col w-full my-4">
              <h1 class="text-2xl font-bold text-gray-800">
                Math Growth
              </h1>
              <p class="text-sm">
                Points awarded to students making adequate progress in
                performance on the statewide math assessment from one year to
                the next.
              </p>
            </div>
            <div class="flex flex-col flex-grow">
              <div v-for="item in entities" :key="item.entityId">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-gray-800 text-sm">{{
                    item.entityDisplayName
                  }}</span>
                  <span class="font-bold text-gray-800 text-sm"
                    >{{ mathGrowth(item) }}%</span
                  >
                </div>
                <div
                  class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
                >
                  <div
                    class="h-full bg-blue-400"
                    :style="`width: ` + mathGrowth(item) + `%;`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full tablet:w-1/2 desktop:w-1/3 p-1">
          <div
            class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap"
          >
            <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
            <div class="flex flex-col w-full my-4">
              <h1 class="text-2xl font-bold text-gray-800">
                English Growth
              </h1>
              <p class="text-sm">
                Points awarded to students making adequate progress in
                performance on the statewide English assessment from one year to
                the next.
              </p>
            </div>
            <div class="flex flex-col flex-grow">
              <div v-for="item in entities" :key="item.entityId">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-gray-800 text-sm">{{
                    item.entityDisplayName
                  }}</span>
                  <span class="font-bold text-gray-800 text-sm"
                    >{{ englishGrowth(item) }}%</span
                  >
                </div>
                <div
                  class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
                >
                  <div
                    class="h-full bg-blue-400"
                    :style="`width: ` + englishGrowth(item) + `%;`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="flex w-full tablet:w-1/3 flex-col">
        <h1 class="text-4xl text-gray-800 border-b mb-4">
          Student Proficiency
        </h1>
        <p class="text-sm">
          Proficiency is the measurement of how well students performed on state
          assessments.
        </p>
      </div>
      <div
        class="flex flex-col w-full tablet:w-2/3 tablet:pl-4 tablet:pt-4 tablet:mt-12"
      >
        <div class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap">
          <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
          <div class="flex flex-col w-full my-4 tablet:my-0 tablet:w-5/12">
            <h1 class="text-2xl font-bold text-gray-800">
              Math Proficiency
            </h1>
            <p class="text-sm">
              Percentage of students who scored proficient (levels 4 + 5) on the
              state math assessment
            </p>
          </div>
          <div class="flex flex-col flex-grow">
            <div v-for="item in entities" :key="item.entityId">
              <div class="flex items-center justify-between">
                <span class="font-bold text-gray-800 text-sm">{{
                  item.entityDisplayName
                }}</span>
                <span class="font-bold text-gray-800 text-sm"
                  >{{ mathProficiency(item) }}%</span
                >
              </div>
              <div
                class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
              >
                <div
                  class="h-full bg-blue-400"
                  :style="`width: ` + mathProficiency(item) + `%;`"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap">
          <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
          <div class="flex flex-col w-full my-4 tablet:my-0 tablet:w-5/12">
            <h1 class="text-2xl font-bold text-gray-800">
              English Proficiency
            </h1>
            <p class="text-sm">
              Percentage of students who scored proficient (levels 4 + 5) on the
              state english assessment
            </p>
          </div>
          <div class="flex flex-col flex-grow">
            <div v-for="item in entities" :key="item.entityId">
              <div class="flex items-center justify-between">
                <span class="font-bold text-gray-800 text-sm">{{
                  item.entityDisplayName
                }}</span>
                <span class="font-bold text-gray-800 text-sm"
                  >{{ englishProficiency(item) }}%</span
                >
              </div>
              <div
                class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
              >
                <div
                  class="h-full bg-green-300"
                  :style="`width: ` + englishProficiency(item) + `%;`"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap">
          <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
          <div class="flex flex-col w-full my-4 tablet:my-0 tablet:w-5/12">
            <h1 class="text-2xl font-bold text-gray-800">
              History Proficiency
            </h1>
            <p class="text-sm">
              Percentage of students who scored proficient (levels 4 + 5) on the
              state history assessment
            </p>
          </div>
          <div class="flex flex-col flex-grow">
            <div v-for="item in entities" :key="item.entityId">
              <div class="flex items-center justify-between">
                <span class="font-bold text-gray-800 text-sm">{{
                  item.entityDisplayName
                }}</span>
                <span class="font-bold text-gray-800 text-sm"
                  >{{ historyProficiency(item) }}%</span
                >
              </div>
              <div
                class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
              >
                <div
                  class="h-full bg-green-300"
                  :style="`width: ` + historyProficiency(item) + `%;`"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="my-2 bg-white shadow border rounded-lg p-4 flex flex-wrap">
          <div class="flex h-16 w-16 bg-blue-400 rounded-full mr-4" />
          <div class="flex flex-col w-full my-4 tablet:my-0 tablet:w-5/12">
            <h1 class="text-2xl font-bold text-gray-800">
              Science Proficiency
            </h1>
            <p class="text-sm">
              Percentage of students who scored proficient (levels 4 + 5) on the
              state science assessment
            </p>
          </div>
          <div class="flex flex-col flex-grow">
            <div v-for="item in entities" :key="item.entityId">
              <div class="flex items-center justify-between">
                <span class="font-bold text-gray-800 text-sm">{{
                  item.entityDisplayName
                }}</span>
                <span class="font-bold text-gray-800 text-sm"
                  >{{ scienceProficiency(item) }}%</span
                >
              </div>
              <div
                class="bg-gray-300 rounded-full w-full h-6 mb-2 overflow-hidden"
              >
                <div
                  class="h-full bg-green-300"
                  :style="`width: ` + scienceProficiency(item) + `%;`"
                />
              </div>
            </div>
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
          <div v-for="item in entities" :key="item.entityId">
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
          <div v-for="item in entities" :key="item.entityId">
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
import axios from 'axios'
export default {
  methods: {
    mathProficiency(entity) {
      const fact = this.facts.filter(
        (item) => item.EntityId === entity.entityId && item.Subgroup === 'All'
      )
      return fact[0].MathProficiency
    },
    englishProficiency(entity) {
      const fact = this.facts.filter(
        (item) => item.EntityId === entity.entityId && item.Subgroup === 'All'
      )
      return fact[0].EnglishProficiency
    },
    historyProficiency(entity) {
      const fact = this.facts.filter(
        (item) => item.EntityId === entity.entityId && item.Subgroup === 'All'
      )
      return fact[0].HistoryProficiency
    },
    scienceProficiency(entity) {
      const fact = this.facts.filter(
        (item) => item.EntityId === entity.entityId && item.Subgroup === 'All'
      )
      return fact[0].ScienceProficiency
    },
    mathGrowth(entity) {
      const fact = this.facts.filter(
        (item) => item.EntityId === entity.entityId && item.Subgroup === 'All'
      )
      return fact[0].MathGrowth
    },
    englishGrowth(entity) {
      const fact = this.facts.filter(
        (item) => item.EntityId === entity.entityId && item.Subgroup === 'All'
      )
      return fact[0].EnglishGrowth
    },
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
  async fetch({ store, route, query }) {
    const { data } = await axios.get(
      'https://davidbkay.github.io/msrc-serverless-test/facts/2017.json'
    )
    const entities = query.entities.split(',')
    console.log('entities', entities)
    // const entities = store.state.entities.entities.map((item) => item.entityId)
    const filteredFacts = data.filter(
      (item) => entities.includes(item.EntityId) && item.Subgroup === 'All'
    )
    console.log('filteredFacts', filteredFacts)
    store.commit('facts/add', filteredFacts)
    // store.commit('auth/add', data.results[0])
    // store.commit('auth/toggle')
  },
  computed: {
    /* randomNumber() {
      return Math.floor(Math.random() * 100) + 1
    }, */
    ...mapGetters({
      entities: 'entities/getEntities',
      facts: 'facts/getFacts'
    })
  }
}
</script>

<style></style>
