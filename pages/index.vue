<template>
  <v-row justify="center" align="center">
    <InputField v-if="!loading && !displayStory" @story-data="submitForm"/>

    <LoadingCube v-if="loading && !displayStory"/>

    <DisplayStory v-if="displayStory"
    :key="1"
    :story=story 
    :storyImage=storyImage
    :dispalyImage="displayImage"
    @reset-btn-click="reset"/>

  </v-row>
</template>

<script>
import InputField from "../components/InputField.vue";
import LoadingCube from '../components/LoadingCube.vue';
import DisplayStory from "../components/DisplayStory.vue";

export default {
  components: {
    InputField,
    LoadingCube,
    DisplayStory,
  },

  data() {
    return {
      loading: false,
      displayStory: false,
      displayImage: false,

      story: '',
      storyImage: '',
    };
  },
  methods: {
    async submitForm(data) {
      this.loading = true

      // await new Promise(resolve => setTimeout(resolve, 5000));

      prompt = `Make a children's story about a(n) ${data.color} ${data.nounAnimal} with these words\n`
      prompt += `Plural Noun: "${data.pluralNoun}" \n`
      prompt += `Noun: "${data.noun}" \n`
      prompt += `Verb: "${data.verb1}" \n`
      prompt += `Verb: "${data.verb2}" \n`
      prompt += `Verb: "${data.verb3}" \n`
      prompt += `Verb (Past Tense): "${data.verbPastTense}" \n`
      prompt += `Verb Ending with -ing: "${data.verbEndingING}" \n`
      prompt += `Adjective: "${data.adjective1}" \n`
      prompt += `Adjective: "${data.adjective2}" \n`
      prompt += `Famous Person: "${data.famousPerson}" \n`
      prompt += `Problem: "${data.problem}" \n`
      prompt += `Emotion: "${data.emotion}" \n`
      prompt += `Part of Body (plural): "${data.partOfTheBodyPlural}" \n`
      prompt += `Time Era/Period: "${data.timeEra}" \n`

      this.story = await this.$store.dispatch('GPT/GPTconnect', {
        prompt: prompt,
      })

      prompt = `A ${data.color} ${data.nounAnimal} in a ${data.timeEra} style`

      this.storyImage = await this.$store.dispatch('DALLE2/DALLE2connect', {
        prompt: prompt,
      })

      this.story = "Once upon a time, there was a bossy unicorn who crept through the frozen landscape of the Ice Age. The unicorn was always alone, until one day it met a dodo. The dodo was small and friendly, and it didn't seem to mind the unicorn's bossy ways. \nTogether, the unicorn and the dodo explored the snowy hills and icy caves, where they discovered many smooth and wild things. They went dancing in the snow and chased after the northern lights. The unicorn felt happy to have a friend.\nBut one day, the unicorn started to feel a strange emotion. It was lust, a feeling the unicorn had never experienced before. The unicorn didn't know what to do with these new feelings, so it turned to the dodo for help.\nThe dodo explained that lust was a normal emotion and that it was okay to feel new things. The unicorn felt better, knowing that it could talk to its friend about anything.\nFrom then on, the unicorn and the dodo continued their adventures, dancing and playing and exploring the icy wilderness together. And even though the unicorn was still a bit bossy at times, it had learned that having a friend was more important than being in charge all the time."

      this.loading = false

      if (this.story === '') {
        alert("Something went wrong.\nTry reloading the page and try again.")
      } else {
        this.displayStory = true
      }
      if (this.storyImage !== '') {
        this.displayImage = true
      }
    },

    reset() {
      this.loading = false
      this.displayStory = false
      this.displayImage = false

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
</style>
