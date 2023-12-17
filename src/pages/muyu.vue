<template>
  <div class="index">
    <div id="container">
      <img class="muyu" src="../assets/11.png" @click="play">
      <img class="gunzi" v-if="!data.auto" src="../assets/22.png">
      <img class="gunzi1" v-if="data.auto" src="../assets/22.png">
      <audio id="music">
        <source src="../assets/1.mp3" />
      </audio>
      <audio id="music1">
        <source src="../assets/2.mp3" />
      </audio>
      <div id="jia1"></div>
    </div>
  </div>
</template>
  
<script>
import { reactive, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'test1',
  props: [],


  setup() {
    const store = useStore()
    let data = reactive({
      music: 0,
      Intervalflag: 0,
      auto: 0
    })
    onBeforeUnmount(() => {
      clearInterval(data.Intervalflag);

    })

    function play() {
      var audio = document.getElementById('music');
      audio.currentTime = 0;
      audio.play();
      store.commit('gd', 1)
      window.localStorage.setItem('muyutime', store.state.gongde)

      var jia = document.getElementById("jia1");
      var divv = document.createElement("div");
      divv.classList.add("show1")
      var jiajia = jia.appendChild(divv)
      setTimeout(() => {
        jia.removeChild(jiajia)
      }, 2000);

    }
    return {
      data,
      play,

    }
  },
}
</script>
<style scoped>
#container {
  width: 600px;
  height: 500px;
  position: relative;
  transform: translate(0, -40px);


}

.muyu {
  width: 800px;
  position: absolute;
  bottom: -50px;
  left: -85px;
  z-index: 10

}

.gunzi {
  height: 380px;
  position: absolute;
  top: 115px;
  transform: rotateZ(30deg);
  transition: transform 0.5s cubic-bezier(.85, .1, .89, .65);

}

.muyu:active+.gunzi {
  transform: rotateZ(12deg);
  transition: 0.05s
}



.gunzi1 {
  height: 100px;
  position: absolute;
  left: 320px;
  top: 80px;
  transform: rotateZ(30deg);
  animation: run 1s alternate infinite cubic-bezier(.85, .1, .89, .65);
}

.bu {
  position: absolute;
  bottom: 50px;
  right: 10px;

}


@keyframes run {
  from {
    transform: rotateZ(30deg);
  }

  to {
    transform: rotateZ(12deg);
  }
}
</style>
<style>
.show1::after {
  content: "Merit and virtue+1";
  color: #cecece;
  font-size: 28px;
  position: absolute;
  top: 50px;
  left: 200px;
  animation: run1 2s 0.1s ease-in;
  z-index: 11;
}

.show2::after {
  content: "Merit and virtue+1";
  color: #cecece;
  font-size: 28px;
  position: absolute;
  top: 80px;
  left: 200px;
  animation: run1 2s 1s ease-in;
  z-index: 11;
}



@keyframes run1 {
  from {
    top: 150px;
  }

  to {
    top: -100px;
  }
}
</style>