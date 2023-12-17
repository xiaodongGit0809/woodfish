<template>
    <div class="main">
        <div v-if="data.showtc" class="tc">
            <div class="title">{{ data.qnow["title"] }}</div>
            <div class="content">{{ data.qnow["content"].substr(0, data.qnow["content"].length/2) }}</div>
            <div class="content">{{ data.qnow["content"].substr(data.qnow["content"].length/2, data.qnow["content"].length) }}</div>
        </div>
        <div v-if="data.showj" class="j">
            <div class="shiyi">The meaning of the poem：{{ data.qnow["Poetry"]}}</div>
            <div class="jieyue">Explanation says：{{ data.qnow["Explanation"]}}</div>
        </div>

        <el-button v-if="!data.showtc" @click="qiu">Requesting a divination (500 merit and virtue per time)</el-button>
        <el-button class="jieb" v-if="data.showtc==1 && data.showj==0" @click="jie">Interpreting a divination (1000 merit and virtue per time)</el-button>
    </div>

</template>
  
<script>
import { reactive, onMounted } from 'vue'
import qian from './qian.json'
import { useStore } from 'vuex'

export default {
    name: 'qiuqian',
    setup() {
        const store = useStore()
        let data = reactive({
            qdata: [],
            qnow: {},
            showtc: 0,
            showj: 0,

        })

        onMounted(() => {
            data.qdata = qian
        })

        function qiu() {
            let rand = Math.floor(Math.random() * 10)
            data.qnow = data.qdata[rand]
            data.showtc = 1
            store.commit('gd', -500)
            window.localStorage.setItem('muyutime', store.state.gongde)

        }
        function jie() {
            data.showj = 1
            store.commit('gd', -1000)
            window.localStorage.setItem('muyutime', store.state.gongde)
        }
        return {
            data,
            qiu,
            jie
        }
    },



}
</script>
<style scoped>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
    color: white;
    font-size: 30px;
    margin: 20px 0;
}

.content {
    color: white;
    font-size: 24px;
    margin:  10px 0;

}

.tc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.shiyi {
    color: #cecece;
    font-size: 18px;
    margin: 10px 0;

}
.jieyue {
    color: #cecece;
    font-size: 18px;
    margin: 10px 0;

}
.jieb {
    margin: 50px 0;
}
</style>

  