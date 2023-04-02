<template>
    <v-row justify="center" align="center">
        <h2 class="title">Story Time With GPT</h2>
        <v-row justify="center" align="center" style="margin: 3%;">
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="nounAnimal" class="input" placeholder="Noun (animal/creature)" v-model="nounAnimal" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="pluralNoun" class="input" placeholder="Plural Noun" v-model="pluralNoun" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="noun" class="input" placeholder="Noun" v-model="noun" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="verb1" class="input" placeholder="Verb" v-model="verb1" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="verb2" class="input" placeholder="Verb" v-model="verb2" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="verb3" class="input" placeholder="Verb" v-model="verb3" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="verbPastTense" class="input" placeholder="Verb (Past Tense)" v-model="verbPastTense" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="verbEndingING" class="input" placeholder="Verb ending in -ing" v-model="verbEndingING" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="color" class="input" placeholder="Color" v-model="color" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="adjective1" class="input" placeholder="Adjective" v-model="adjective1" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="adjective2" class="input" placeholder="Adjective" v-model="adjective2" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="famousPerson" class="input" placeholder="Famous Person" v-model="famousPerson" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="problem" class="input" placeholder="Problem" v-model="problem" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="emotion" class="input" placeholder="Emotion" v-model="emotion" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="partOfTheBodyPlural" class="input" placeholder="Part of the body (plural)" v-model="partOfTheBodyPlural" required>
            </div>
            <div class="input-wrapper">
                <label for="input" class="label"></label>
                <input type="text" id="timeEra" class="input" placeholder="Time Period/Era" v-model="timeEra" required>
            </div>
            <button class="neon-button-6" @click="sendData">Start Adventure!</button>
        </v-row>
    </v-row>
</template>

<script>
export default {
    data() {
    return {
    //   nounAnimal: 'dog',
    //   pluralNoun: 'cats',
    //   noun: 'wolf',
    //   verb1: 'run',
    //   verb2: 'jump',
    //   verb3: 'bike',
    //   verbPastTense: 'ate',
    //   verbEndingING: 'eatting',
    //   color: 'red',
    //   adjective1: 'smooth',
    //   adjective2: 'rough',
    //   famousPerson: 'chris rock',
    //   problem: 'long nails',
    //   emotion: 'fear',
    //   partOfTheBodyPlural: 'toes',
    //   timeEra: '80s',
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
    sendData() {
        if (this.checkInputFields()) {
            alert("Please fill in all the fields")
        } else {
            const storyData = {
                nounAnimal: this.nounAnimal,
                pluralNoun: this.pluralNoun,
                noun: this.noun,
                verb1: this.verb1,
                verb2: this.verb2,
                verb3: this.verb3,
                verbPastTense: this.verbPastTense,
                verbEndingING: this.verbEndingING,
                color: this.color,
                adjective1: this.adjective1,
                adjective2: this.adjective2,
                famousPerson: this.famousPerson,
                problem: this.problem,
                emotion: this.emotion,
                partOfTheBodyPlural: this.partOfTheBodyPlural,
                timeEra: this.timeEra
            }
            // console.log(storyData)
            this.$emit('story-data', storyData)
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
    }
  },
}
</script>

<style scoped>
.title {
  margin-top: 5%;
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
</style>
