<template>
    <v-row>
        <img v-if="dispalyImage" :src="`${storyImage}`" style="margin-top;: 2%">
        <h2 class="story">
            {{story}}
        </h2>
        <button class="neon-button-6" @click="reset">Restart</button>
    </v-row>
</template>

<script>
export default {
    props: {
        story: {
            type: String,
            required: true,
        },
        storyImage: {
            type: String,
            required: false,
            default: ''
        },
        dispalyImage: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        reset() {
            this.$emit('reset-btn-click')
        }
    },
}
</script>


<style scoped>
/* Sixth Button */
.neon-button-6 {
  margin: 3%;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  background-color: #000;
  box-shadow: 0 0 5px #00ec00, 
              0 0 25px #00ec00, 
              0 0 50px #00ec00,
              0 0 75px #00ec00;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
}

.neon-button-6::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: #00ec00;
  box-shadow: 0 0 10px #00ec00, 
              0 0 20px #00ec00, 
              0 0 30px #00ec00,
              0 0 40px #00ec00, 
              0 0 70px #00ec00, 
              0 0 80px #00ec00, 
              0 0 100px #00ec00;
  opacity: 0;
  z-index: -1;
  transition: all 0.3s ease;
}

.neon-button-6:hover {
  box-shadow: none;
  transform: translateY(4px);
}

.neon-button-6:hover::before {
  opacity: 1;
}
.story {
  margin-top: 2%;
  width: auto;
  font-size: 20px !important;
  font-weight: bold !important;
  color: #ffffff;
}
</style>