<template>
  <v-row justify="center" align="center">

    <v-row justify="center" align="center" style="margin: 5%;">
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
      <button class="neon-button-6">Click me!</button>
    </v-row>

    <v-spacer style="margin: 6%"/>

    <v-spacer/>
    <button class="neon-button-3">Buy now</button>
    <v-spacer/>
    <!-- <button class="neon-button-4">Get started</button> -->
    <v-spacer/>
    <button class="neon-button-5">Click me!</button>
    <v-spacer/>
    <button class="neon-button-6">Click me!</button>
    <v-spacer/>


    <div class="cube">
      <div class="top"></div>
      <div>
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
    </div>

  </v-row>
</template>

<script>
export default {
  data() {
    return {
      nounAnimal: '',
      pluralNoun: '',
      noun: '',
      verb1: '',
      verb2: '',
      verb3: '',
      verbPastTense: '',
      verbEndingING: '',
      color: '',
      adjective1: '',
      adjective2: '',
      famousPerson: '',
      problem: '',
      emotion: '',
      partOfTheBodyPlural: '',
      timeEra: '',
    };
  },
  methods: {
    async submitForm() {
      prompt = "Tell me a children's story about a "
      if (this.color !== '') {
        prompt += `${this.color}, `
      }
      if (this.adjective !== '') {
        prompt += `${this.adjective} `
      }

      prompt += `${this.animal} `

      if (this.skill !== '') {
        prompt += `, that's really good at ${this.skill}, `
      }
      if (this.problem !== '') {
        prompt += `but they have a problem with ${this.problem} `
      }

      await this.$store.dispatch('GPT/connect', {
        prompt: prompt,
      })
    },
  },
}
</script>

<style scoped>
.container {
  /* background-color: white; */
  text-align: center;
}

.form-group {
  padding: 1%;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  background-color: white;
  color: black;
}

.btn {
  background-color: red;
  text-decoration-color: white;
}

/* Cube YouTube */
.cube {
  margin-top: 25%;
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

/* Third GPT Button */
.neon-button-3 {
  margin: 3%;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 30px;
  background: linear-gradient(90deg, #ff6b6b, #ffc44c);
  box-shadow: 0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 30px #ff6b6b,
    0 0 40px #ffc44c, 0 0 70px #ffc44c, 0 0 80px #ffc44c, 0 0 100px #ffc44c;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.neon-button-3::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: linear-gradient(90deg, #ff6b6b, #ffc44c);
  filter: blur(20px);
  opacity: 0;
  z-index: -1;
  transition: all 0.3s ease;
}

.neon-button-3:hover {
  box-shadow: none;
  transform: translateY(4px);
}

.neon-button-3:hover::before {
  opacity: 1;
  filter: blur(40px);
}

/* Fifth Button */
.neon-button-5 {
  margin: 3%;
  display: inline-block;
  padding: 12px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 25px;
  background-color: #000;
  box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00,
    0 0 40px #00ff00, 0 0 70px #00ff00, 0 0 80px #00ff00, 0 0 100px #00ff00;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
}

.neon-button-5::before,
.neon-button-5::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  opacity: 0;
  z-index: -1;
  transition: all 0.3s ease;
}

.neon-button-5::before {
  top: 0;
  left: 0;
  background-color: #00ff00;
  transform: scale(0.8);
}

.neon-button-5::after {
  bottom: 0;
  right: 0;
  background-color: #ff00ff;
  transform: scale(0.8);
}

.neon-button-5:hover {
  box-shadow: none;
  transform: translateY(4px);
}

.neon-button-5:hover::before,
.neon-button-5:hover::after {
  opacity: 1;
  transform: scale(1);
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
  box-shadow: 0 0 5px #00ffff, 0 0 25px #00ffff, 0 0 50px #00ffff,
    0 0 75px #00ffff;
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
  background-color: #00ffff;
  box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff,
    0 0 40px #00ffff, 0 0 70px #00ffff, 0 0 80px #00ffff, 0 0 100px #00ffff;
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
  background-color: #00ff8b;
  box-shadow: 0 0 5px #00ff8b, 0 0 25px #00ff8b, 0 0 50px #00ff8b, 0 0 100px #00ff8b;
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
  color: #00ff8b;
}



</style>
