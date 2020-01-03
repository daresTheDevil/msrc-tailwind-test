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
              class="text-blue-400 tablet:text-gray-100 text-4xl tablet:text-6xl font-bold leading-none"
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
              <div class="mt-2 absolute left-0 origin-top-left w-full">
                <div class="bg-white rounded-lg shadow-lg">
                  <!-- block -->
                  <div
                    class="w-full border-b last:border-none px-4 py-3 cursor-pointer"
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
                            class="text-base tablet:text-lg font-semibold tracking-tight leading-none"
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
    onChange() {
      this.results = this.entities.filter(
        (item) =>
          item.entityDisplayName
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
      )
    }
  },
  async fetch({ store, params }) {
    const { data } = await axios.get(
      'https://davidbkay.github.io/msrc-serverless-test/entities/2017.json'
    )
    console.log('data', data)
    store.commit('entities/add', data)
    // store.commit('auth/add', data.results[0])
    // store.commit('auth/toggle')
  },
  data: () => ({
    search: '',
    selectedEntities: [],
    apiEntities: [],
    results: []
    /* entities: [
      {
        id: 1,
        name: 'University of Swaziland',
        city: 'Talawakele',
        grade: 'ut',
        students: 1883
      },
      {
        id: 2,
        name: 'Pharos International University',
        city: 'Barra Mansa',
        grade: 'magna vestibulum',
        students: 607
      },
      {
        id: 3,
        name: 'Mutesa 1 Royal University',
        city: 'Açucena',
        grade: 'congue',
        students: 1426
      },
      {
        id: 4,
        name: 'Nagoya University of Foreign Studies',
        city: 'Tangxia',
        grade: 'eget tempus vel pede morbi',
        students: 939
      },
      {
        id: 5,
        name: 'Universidad Arcis',
        city: 'Longzhong',
        grade: 'lobortis est phasellus sit amet',
        students: 272
      },
      {
        id: 6,
        name: 'Rajamangala University of Technology, Lanna Chiang Rai',
        city: 'Sekartaji',
        grade: 'varius ut blandit',
        students: 514
      },
      {
        id: 7,
        name: 'Najran University',
        city: 'Studená',
        grade: 'semper porta volutpat quam pede',
        students: 356
      },
      {
        id: 8,
        name: 'Universidad Adventista de Bolivia',
        city: 'Heqian',
        grade: 'id',
        students: 1665
      },
      {
        id: 9,
        name: 'Lynn University',
        city: 'Vũ Thư',
        grade: 'morbi a ipsum integer a',
        students: 825
      },
      {
        id: 10,
        name: 'Physical Education Academy in Wroclaw',
        city: 'Žeravice',
        grade: 'sociis natoque penatibus',
        students: 1631
      },
      {
        id: 11,
        name: 'Centre de Formation et de Perfectionnement des Journalistes',
        city: 'Melaka',
        grade: 'vel nulla eget eros elementum',
        students: 1293
      },
      {
        id: 12,
        name: 'University of Durham',
        city: 'Hadyach',
        grade: 'integer non velit donec diam',
        students: 393
      },
      {
        id: 13,
        name: 'St. Petersburg State Technological University of Plant Polymers',
        city: 'Espargos',
        grade: 'justo',
        students: 645
      },
      {
        id: 14,
        name: 'Warsaw School of Social Psychology',
        city: 'Saint Ann’s Bay',
        grade: 'sit',
        students: 175
      },
      {
        id: 15,
        name: 'University of Suceava',
        city: 'Ratíškovice',
        grade: 'donec vitae nisi nam ultrices',
        students: 277
      },
      {
        id: 16,
        name: 'Universitas Lampung',
        city: 'Fulin',
        grade: 'erat eros viverra eget congue',
        students: 1897
      },
      {
        id: 17,
        name: 'Berklee College of Music',
        city: 'Yijing',
        grade: 'magna bibendum',
        students: 1140
      },
      {
        id: 18,
        name: 'Westbrook University ',
        city: 'Puncakwangi',
        grade: 'at nunc commodo',
        students: 440
      },
      {
        id: 19,
        name: "Université d'Orléans",
        city: 'Sutton',
        grade: 'nulla eget eros elementum',
        students: 1918
      },
      {
        id: 20,
        name: 'University of Iasi',
        city: 'Krasnokholmskiy',
        grade: 'volutpat dui maecenas tristique',
        students: 1256
      },
      {
        id: 21,
        name: 'Universidad Autónoma de la Laguna',
        city: 'Sidi Qacem',
        grade: 'amet consectetuer',
        students: 1725
      },
      {
        id: 22,
        name: 'University of Catania',
        city: 'Hepingjie',
        grade: 'id luctus nec molestie sed',
        students: 1849
      },
      {
        id: 23,
        name: 'California State University, Fullerton',
        city: 'Mougins',
        grade: 'auctor gravida sem',
        students: 1068
      },
      {
        id: 24,
        name: 'Universidad Mayor',
        city: 'Champaign',
        grade: 'morbi vestibulum',
        students: 176
      },
      {
        id: 25,
        name: 'Justus Liebig Universität Gießen',
        city: 'Messíni',
        grade: 'nibh fusce lacus',
        students: 813
      },
      {
        id: 26,
        name: 'Universitas Trisakti',
        city: 'Rembes',
        grade: 'dui proin leo',
        students: 753
      },
      {
        id: 27,
        name: 'Muroran Institute of Technology',
        city: 'Brovary',
        grade: 'venenatis turpis enim blandit',
        students: 1263
      },
      {
        id: 28,
        name: 'Belmont Abbey College',
        city: 'Thành Phố Thái Bình',
        grade: 'felis',
        students: 1896
      },
      {
        id: 29,
        name: 'Ecole Nationale Supérieure des Arts et Industries Textiles',
        city: 'Oodweyne',
        grade: 'justo nec',
        students: 1971
      },
      {
        id: 30,
        name: 'Gifu University',
        city: 'Godziszów Pierwszy',
        grade: 'in hac habitasse platea',
        students: 587
      }
    ] */
  })
}
</script>

<style></style>
