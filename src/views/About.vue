<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Vilva</strong>, a passionate game developer.<br/>
        I also love playing games and discussing / designing games in general.
      </div>

      <div style="margin-top: 20px;">
        I enjoy building a community of like-minded individuals on my YouTube and Discord channels.
      </div>

      <div style="margin-top: 20px;">
        In January 2022 I got invited to the Crayta Ignition program and decided to quit my Software Dev job to pursue my passion in Game Development.
      </div>

      <div style="margin-top: 20px;">Here you can find a collection of my <router-link to="/game-projects">games</router-link>, some of my <router-link to="/other-projects">other projects</router-link>, and my <router-link to="/resume">resume</router-link> as well.</div>

      <div style="margin-top: 40px;">You can reach me at <a href="mailto:andreasgeis94@gmail.com">andreasgeis94@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Vilva" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>