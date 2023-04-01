<template>
  <v-row justify="center" align="center">
    <h2 v-if="!loading && !displayStory" class="title">Story Time With GPT</h2>
    <v-row v-if="!loading && !displayStory" justify="center" align="center" style="margin: 3%;">
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Noun (animal/creature)" v-model="nounAnimal" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Plural Noun" v-model="pluralNoun" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Noun" v-model="noun" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Verb" v-model="verb1" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Verb" v-model="verb2" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Verb" v-model="verb3" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Verb (Past Tense)" v-model="verbPastTense" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Verb ending in -ing" v-model="verbEndingING" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Color" v-model="color" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Adjective" v-model="adjective1" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Adjective" v-model="adjective2" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Famous Person" v-model="famousPerson" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Problem" v-model="problem" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Emotion" v-model="emotion" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Part of the body (plural)" v-model="partOfTheBodyPlural" required>
      </div>
      <div class="input-wrapper">
        <label for="input" class="label"></label>
        <input type="text" id="input" class="input" placeholder="Time Period/Era" v-model="timeEra" required>
      </div>
      <button class="neon-button-6" @click="submitForm">Start Adventure!</button>
    </v-row>

    <div v-if="loading && !displayStory" class="cube">
      <div class="top"></div>
      <div>
        <span style="--i:0;">
          <h2>Loading</h2>
          <h2>Loading</h2>
        </span>
        <span style="--i:1;">
          <h2>Loading</h2>
          <h2>Loading</h2>
        </span>
        <span style="--i:2;">
          <h2>Loading</h2>
          <h2>Loading</h2>
        </span>
        <span style="--i:3;">
          <h2>Loading</h2>
          <h2>Loading</h2>
        </span>
      </div>
    </div>

    <div v-if="displayStory">
      <img v-if="showImage" :src="`${storyImage}`">

      <h2 class="story">
        {{story}}
      </h2>
      <button class="neon-button-6" @click="reset">Restart</button>
    </div>

  </v-row>
</template>

<script>
export default {
  data() {
    return {
      nounAnimal: 'dog',
      pluralNoun: 'cats',
      noun: 'wolf',
      verb1: 'run',
      verb2: 'jump',
      verb3: 'bike',
      verbPastTense: 'ate',
      verbEndingING: 'eatting',
      color: 'red',
      adjective1: 'smooth',
      adjective2: 'rough',
      famousPerson: 'chris rock',
      problem: 'long nails',
      emotion: 'fear',
      partOfTheBodyPlural: 'toes',
      timeEra: '80s',

      loading: false,
      displayStory: false,
      showImage: false,

      story: '',
      storyImage: '',
    };
  },
  methods: {
    async submitForm() {
      if (this.checkInputFields()) {
        alert("Please fill in all the input fields")
      }
      else {
        this.loading = true

        // await new Promise(resolve => setTimeout(resolve, 5000));

        prompt = `Make a children's story about a ${this.color} ${this.nounAnimal} with this input (like a Mad Lib):\n`
        prompt += `Plural Noun: "${this.pluralNoun}" \n`
        prompt += `Noun: "${this.noun}" \n`
        prompt += `Verb: "${this.verb1}" \n`
        prompt += `Verb: "${this.verb2}" \n`
        prompt += `Verb: "${this.verb3}" \n`
        prompt += `Verb (Past Tense): "${this.verbPastTense}" \n`
        prompt += `Verb Ending with -ing: "${this.verbEndingING}" \n`
        prompt += `Adjective: "${this.adjective1}" \n`
        prompt += `Adjective: "${this.adjective2}" \n`
        prompt += `Famous Person: "${this.famousPerson}" \n`
        prompt += `Problem: "${this.problem}" \n`
        prompt += `Emotion: "${this.emotion}" \n`
        prompt += `Part of Body (plural): "${this.partOfTheBodyPlural}" \n`
        prompt += `Time Era/Period: "${this.timeEra}" \n`

        this.story = await this.$store.dispatch('GPT/GPTconnect', {
          prompt: prompt,
        })

        prompt = `A ${this.color} ${this.nounAnimal} in a ${this.timeEra} style`

        this.storyImage = await this.$store.dispatch('DALLE2/DALLE2connect', {
          prompt: prompt,
        })

        if (this.storyImage === 'Error') {
          this.showImage = false
        } else {
          this.showImage = true
        }

        // this.story = "Once upon a time, there was a bossy unicorn who crept through the frozen landscape of the Ice Age. The unicorn was always alone, until one day it met a dodo. The dodo was small and friendly, and it didn't seem to mind the unicorn's bossy ways. \nTogether, the unicorn and the dodo explored the snowy hills and icy caves, where they discovered many smooth and wild things. They went dancing in the snow and chased after the northern lights. The unicorn felt happy to have a friend.\nBut one day, the unicorn started to feel a strange emotion. It was lust, a feeling the unicorn had never experienced before. The unicorn didn't know what to do with these new feelings, so it turned to the dodo for help.\nThe dodo explained that lust was a normal emotion and that it was okay to feel new things. The unicorn felt better, knowing that it could talk to its friend about anything.\nFrom then on, the unicorn and the dodo continued their adventures, dancing and playing and exploring the icy wilderness together. And even though the unicorn was still a bit bossy at times, it had learned that having a friend was more important than being in charge all the time."

        this.loading = false
        this.displayStory = true
      }
    },

    checkInputFields() {
      return (this.nounAnimal === '' ||
              this.pluralNoun === '' ||
              this.noun === '' ||
              this.verb1 === '' ||
              this.verb2 === '' ||
              this.verb3 === '' ||
              this.verbPastTense === '' ||
              this.verbEndingING === '' ||
              this.color === '' ||
              this.adjective1 === '' ||
              this.adjective2 === '' ||
              this.famousPerson === '' ||
              this.problem === '' ||
              this.emotion === '' ||
              this.partOfTheBodyPlural === '' ||
              this.timeEra  === '')
    },

    reset() {
      this.nounAnimal = ''
      this.pluralNoun = ''
      this.noun = ''
      this.verb1 = ''
      this.verb2 = ''
      this.verb3 = ''
      this.verbPastTense = ''
      this.verbEndingING = ''
      this.color = ''
      this.adjective1 = ''
      this.adjective2 = ''
      this.famousPerson = ''
      this.problem = ''
      this.emotion = ''
      this.partOfTheBodyPlural = ''
      this.timeEra = ''

      this.loading = false
      this.displayStory = false
      this.showImage = false

      this.story = ''
      this.storyImage = ''
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');

* {
  font-family: 'Oswald', sans-serif;
}

.title {
  margin-top: 2%;
  font-size: 50px !important;
  font-weight: bold !important;
  color: #00ec00;
  widows: 100%;
}

input[type="text"],
textarea {
  background-color: white;
  color: black;
}

/* Cube YouTube */
.cube {
  margin-top: 12%;
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotateX(-30deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(-30deg) rotateY(360deg);
  }
}

.cube div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.cube div span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#151515, #00ec00);
  transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
}

.cube div span h2 {
  position: absolute;
  font-size: 4em;
  color: #fff;
  transform: translateZ(50px);
}

.cube div span h2:nth-child(1) {
  transform: translateZ(0) translateY(20px);
  color: rgba(0, 0, 0, 1);
  filter: blur(2px);
}

.top {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background: #222;
  transform: rotateX(90deg) translateZ(150px);
}

.top::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background: #0f0;
  transform: translateZ(-380px);
  filter: blur(20px);
  box-shadow: 0 0 120px rgba(0, 255, 0, 0.2),
              0 0 200px rgba(0, 255, 0, 0.4),
              0 0 300px rgba(0, 255, 0, 0.6),
              0 0 400px rgba(0, 255, 0, 0.8),
              0 0 500px rgba(0, 255, 0, 1);

}

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

/* input field */

.input-wrapper {
  position: relative;
  margin: 20px;
}

.input {
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 5px #fff;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.input:focus {
  outline: none;
  background-color: #00ec00;
  box-shadow: 0 0 5px #00ec00, 
              0 0 25px #00ec00, 
              0 0 50px #00ec00, 
              0 0 100px #00ec00;
}

.label {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out, color 0.3s ease-in-out;
}

.input:focus ~ .label, .input:not(:placeholder-shown) ~ .label {
  transform: translateY(-100%) scale(0.8);
  font-size: 12px;
  color: #00ec00;
}

/* 00ffff cool color */

.story {
  margin-top: 2%;
  width: auto;
  font-size: 20px !important;
  font-weight: bold !important;
  color: #ffffff;
}

</style>
