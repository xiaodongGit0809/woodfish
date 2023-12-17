<template>
    <div class="index" v-show="data.display">
        <canvas id="container" width="500" height="500" @mousemove="mousepos"></canvas>
    </div>
    <div class="note" v-if="!data.display">
        <div class="f">Burning incense will cost 500 merit and virtue, and you will get 1000 merit and virtue after burning incense. Are you sure you want to burn incense?</div>
        <el-button class="b1" @click="cal">cancel</el-button>
        <el-button class="b2" @click="yes" type="primary" plain>submit</el-button>
    </div>

</template>
  
<script>
import { reactive, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
export default {
    //组件名
    name: 'test2',
    props: [],


    setup() {
        const store = useStore()
        const router = useRouter()
        let data = reactive({
            center: { x: 250, y: 250 },
            spiralExpanse: 8,
            pointnum: 550,
            points: [],
            animationFrame: true,
            display:0
        })

        function cal() {
            router.push('/')

        }

        function yes() {
            data.display=1
            store.commit('gd', -500)
            window.localStorage.setItem('muyutime', store.state.gongde)
            setupSets()
            drawLoop()

        }

        function setupSets() {
            for (let i = 0; i < data.pointnum; i++) {
                let point = {}
                let angle = 0.05 * -i;
                point.x = data.center.x + (data.spiralExpanse * angle) * Math.cos(angle)
                point.y = data.center.y + (data.spiralExpanse * angle) * Math.sin(angle)
                point.active = true;
                point.life = 1;

                data.points.push(point)

            }


        }

        function draw() {
            var canvas = document.getElementById('container');
            if (!canvas.getContext) return;
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, 500, 500);
            ctx.lineCap = "round"
            ctx.moveTo(data.points[0].x, data.points[0].y)

            for (let i = 1; i < data.points.length; i++) {
                if (data.points[i].life < 1 && data.points[i].active === true) {
                    ctx.strokeStyle = "rgba(244, 110, 28, " + (0.1 + data.points[i].life) + ")";
                } else {
                    ctx.strokeStyle = "rgba(255, 255, 255, " + (0.1 + data.points[i].life) + ")";
                }
                ctx.lineWidth = (6 * data.points[i].life + 4) + "";

                ctx.beginPath();
                ctx.moveTo(data.points[i - 1].x, data.points[i - 1].y);
                ctx.lineTo(data.points[i].x, data.points[i].y);
                ctx.stroke();
            }
        }

        function drawLoop() {       
            update();
            if (data.animationFrame) {
                draw();
                data.animationFrame = requestAnimationFrame(drawLoop);
            }
        }


        function update() {
            let foundActive = false

            for (let i = 1; i < data.points.length; i++) {
                let dot = data.points[i];
                let a = data.mouseX - dot.x
                let b = data.mouseY - dot.y
                let distance = Math.sqrt(a * a + b * b)


                if (data.points[i].active === true) {
                    foundActive = true
                }

                if (distance < 25 && data.points[i].active === true) {

                    data.points[i].life = data.points[i].life - 0.04
                    if (data.points[i].life <= 0) {
                        data.points[i].active = false
                    }
                } else if (data.points[i].active === true && data.points[i].life < 1) {
                    data.points[i].life = data.points[i].life + 0.05
                }

            }

            if (foundActive === false) {
                cancelAnimationFrame(data.animationFrame);
                data.animationFrame = null;
                endGame()

            }

        }
        onBeforeUnmount(() => {
            cancelAnimationFrame(data.animationFrame);
            data.animationFrame = null;

        })


        function mousepos(e) { 
            data.mouseX = e.offsetX
            data.mouseY = e.offsetY
        }


        function endGame() {
            alert("The burning of incense is over, congratulations on getting 1000 merit and virtue!")
            store.commit('gd', 1000)
            window.localStorage.setItem('muyutime', store.state.gongde)
            router.push('/')
        }
        return {
            data,
            mousepos,
            cal,
            yes
        }
    },









}
</script>
<style scoped>
.index {
    width: 100%;
    height: 100%;

}

#container {

    transform: translate(0, -80px);
}

.note {
    width: 500px;
    height: 220px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border:4px solid;
    border-color:white;
}

.f {
    font-size: 24px;
    margin: 25px;
    color: #cecece;
}

.b1 {
    position: absolute;
    bottom: 15px;
    right: 100px;
}
.b2 {
    position: absolute;
    bottom: 15px;
    right: 25px;
}

</style>
