<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Andreas Geis</strong>, an experienced developer from Germany. I'm currently based around Frankfurt.
      After graduating as a computer science engineer in 2016, I've been working as a fullstack developer for 6 years, mostly in Java, but I'm open to any other stack.
    <br /><br />
      I love working in small companies where everyone knows each other, and everyone's work matters.
    <br /><br />
      Right now I'm self employed and mostly working as a Indie Game Developer.
    <br /><br />
      Besides development, I'm passionate about video games (obviously), and I love hiking and cycling.
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Andreas" />
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    // SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.skill {
    display: inline-block;
    border: 1px solid hsla(0,0%,86.3%,.44);
    padding: 2px 10px;
    margin: 5px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>
