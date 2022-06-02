<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      The following are some of the games I've made or heavily contributed to.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      You can find more of my games on my <strong>Profile Pages</strong>:
      <ul>
        <li>
          <a target="_blank" href="https://play.crayta.com/users/6efe6e88-5a53-48b1-b443-c3e45b7012aa">Crayta Games</a>
        </li>
        <li>
          <a target="_blank" href="https://www.coregames.com/user/94473ebbd6ea41fa81c165f7a73d3acb/created">Core Games</a>
        </li>
      </ul>
    </div>

    <div style="margin-top: 20px;">
      I also love to share my creations with other people. Here is a list of some of the packages I made, which you can use for free:
      
      <br/>
      <h2>Crayta</h2>
      <ul>
        <li>Music Player</li>
        <li>Minesweeper Machine</li>
        <li>Tower Defense with Pathfinding</li>
        <li>Toggle Cursor</li>
        <li>Persistent Collectibles</li>
        <li>Cosmetics Item Shop</li>
        <li>Pushable Blocks</li>
        <li>Dungeon Generator</li>
        <li>Pulse Pistol Package</li>
        <li>Car Racing Blueprint</li>
      </ul>
      
      <h2>Core</h2>
      <ul>
        <li>Ultimate Obby Kit</li>
        <li>Wave Spawner</li>
      </ul>
    </div>
    <div class="paragraph center">
        <img class="main-page-screenshot" src="img/projects/dungeon_generator.jpg" alt="Optimistic Chubby Screenshot" />
        <img class="main-page-screenshot" src="img/projects/pushable_blocks.jpg" alt="Optimistic Chubby Screenshot" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
