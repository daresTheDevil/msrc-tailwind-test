<template>
  <div class="container">
    <div class="flex flex-wrap">
      <div class="flex w-1/3 p-2" v-for="item in entities" :key="item.id">
        <div class="w-full bg-white rounded-lg p-4">
          <h1 class="text-gray-800 text-2xl font-bold">
            {{ item.entityDisplayName }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      entities: 'entities/getEntities'
    })
  }
}
</script>

<style></style>
