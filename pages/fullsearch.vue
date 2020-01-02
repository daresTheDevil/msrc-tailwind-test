<template>
  <div>
    <div class="flex bg-gray-800 py-4">
      <div class="container">
        <div class="w-full tablet:w-1/2 mx-auto">
          <label class="block text-sm tablet:text-lg text-gray-100 mb-2"
            >Search for school or district data here</label
          >
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
        </div>
      </div>
    </div>
    <div class="bg-gray-50">
      <div class="container">
        <div class="flex">
          <div class="hidden tablet:flex w-1/5 flex-col py-8">
            <div class="py-1 border-b border-gray-400">
              <h1 class="text-sm text-gray-700 tracking-widest font-semibold">
                TYPE
              </h1>
            </div>
            <div class="py-1 flex flex-col">
              <div class="flex items-center justify-between mb-2">
                <h1 class="text-blue-500 font-bold">All</h1>
                <h1 class="text-blue-500 font-bold">7</h1>
              </div>
              <div class="flex items-center justify-between">
                <h1 class="text-gray-600 font-medium">Districts</h1>
                <h1 class="text-gray-500 font-medium">4</h1>
              </div>
              <div class="flex items-center justify-between">
                <h1 class="text-gray-600 font-medium">Schools</h1>
                <h1 class="text-gray-500 font-medium">3</h1>
              </div>
            </div>
            <div class="py-1 border-b border-gray-400 mt-4">
              <h1 class="text-sm text-gray-700 tracking-widest font-semibold">
                STUDENTS
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
                <h1 class="text-gray-600 font-medium">Less than 1000</h1>
                <h1 class="text-gray-500 font-medium">
                  {{ lowStudents.length ? lowStudents.length : 0 }}
                </h1>
              </div>
              <div class="flex items-center justify-between">
                <h1 class="text-gray-600 font-medium">Greater than 1000</h1>
                <h1 class="text-gray-500 font-medium">
                  {{ highStudents.length ? highStudents.length : 0 }}
                </h1>
              </div>
            </div>

            <button
              class="block py-2 px-4 bg-gray-700 text-gray-100 rounded-lg mt-6"
            >
              Compare {{ selectedEntities.length }}
            </button>
          </div>

          <div
            class="flex w-full tablet:w-4/5 flex-col py-4 tablet:py-8 tablet:pl-12"
          >
            <div class="py-1 border-b border-gray-400">
              <h1 class="text-sm text-gray-700 tracking-widest font-semibold">
                {{ results.length || 0 }} Results
              </h1>
            </div>
            <div class="py-4 block flex flex-col">
              <transition-group name="list" tag="div" mode="out-in">
                <div
                  class="bg-white border w-full tablet:w-1/2 rounded-lg hover:shadow-md p-4 cursor-pointer mb-2"
                  @click="selectItem"
                  v-for="(item, index) in results"
                  :key="index"
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
                            {{ item.grade[0].toUpperCase() }}
                          </h1>
                        </div>
                      </div>

                      <div class="ml-4 flex flex-col text-gray-700">
                        <h1
                          class="text-base tablet:text-xl font-semibold tracking-tight leading-none"
                        >
                          {{ item.name }}
                        </h1>
                        <h1 class="text-sm tablet:text-base leading-none">
                          {{ item.city }}, MS
                        </h1>
                      </div>
                    </div>
                    <div class="flex items-center justify-center w1/6">
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          :value="item"
                          v-model="selectedEntities"
                          class="form-checkbox h-5 w-5"
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
export default {
  data: () => ({
    search: '',
    selectedEntities: [],
    results: [],
    entities: [
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
    ]
  }),
  methods: {
    selectItem(e) {
      console.log('item', e.target)
    },
    onChange() {
      this.results = this.entities.filter(
        (item) =>
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      )
    }
  },
  computed: {
    lowStudents() {
      if (this.results.length)
        return this.results.filter((item) => item.students < 1000)
      return 0
    },
    highStudents() {
      if (this.results.length)
        return this.results.filter((item) => item.students > 1000)
      return 0
    }
  }
  /* watch: {
    search(val) {
      console.log('value', val)
      this.results = this.schools.filter((item) => {
        item.name.toLowerCase().includes(val.toLowerCase())
      })
      console.log('results', this.results)
    }
  } */
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
