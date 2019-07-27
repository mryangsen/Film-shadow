<template>
  <div class="map-main">
    <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
      <bm-marker :position="center" :dragging="false">
      </bm-marker>
    </baidu-map>
  </div>
</template>
<script>
export default {
  name: "myMap",
  data() {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
    };
  },
  methods: {
    handler ({BMap, map}) {
      // console.log(BMap, map)
      this.center.lng = 113.774509
      this.center.lat = 34.776795
      this.zoom = 30
    },
  },
  mounted() {
    
  }
};
</script>
<style lang='scss' scoped>
.map-main {
  width: 100%;
  margin-top: 44px;
  ::v-deep.map {
    width: 100%;
    height: 584px;
    background:rgba(34,38,45,1);
    border-radius:22px;
  }
}
</style>