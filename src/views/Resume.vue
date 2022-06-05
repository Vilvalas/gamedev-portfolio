<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Andreas Geis</strong>, an experienced developer from Germany. I'm currently based around Frankfurt.
      After graduating as a computer science engineer in 2006, I've been working as a fullstack developer for 6 years, mostly in Java, but I'm open to any other stack.
    <br /><br />
      I love working in small companies where everyone knows each other, and everyone's work matters.
    <br /><br />
      Right now I'm self employed and mostly working as a Indie Game Developer.
    <br /><br />
      Besides development, I'm passionate about video games (obviously), and I love hiking and cycling.
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download my CV as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Andreas" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Independent Game Developer</h3>
      <h4>2022 - Present</h4>

      <div>
      <ul>
          <li>Designing and developing games and community packages</li>
          <li>Supporting other creators with feedback or helping them out with coding</li>
          <li>Managing my YouTube Channel and Discord community</li>
      </ul>
      </div>

      <div class="tech-stack">Unreal Engine, Unity, Lua, C#, HTML, JS, Photoshop, OBS, Premiere</div>

      <h3>Software Developer - Cloudflight</h3>
      <h4>2019-2022</h4>

      <div>
        <ul>
          <li>Developed, refactored, and extended automated software tests and the test framework for a logistics software</li>
          <li>Maintained, analyzed, and evaluated automated test case executions. Reported results to customer development and business departments</li>
          <li>Developed microservices for mockups/simulations of third-party systems</li>
          <li>Built a web application for a Transport Monitoring System. Integrated a route planner</li>
        </ul>
      </div>

      <div class="tech-stack">
        Java / Kotlin, Silk4J (Borland), Java Message Service (JMS), Java Persistence API (JPA), Docker, JUnit, Swagger, Apache Kafka, RabbitMQ, Elasticsearch, GitLab, Jenkins, Liquibase, Keycloak, Spring Boot, Hibernate, Angular
      </div>

      <h3>Software Developer - Fraport AG</h3>
      <h4>2016-2019</h4>

      <div>
        <ul>
          <li>Built a service management platform with ServiceNow. Implemented ITIL processes and order management for software and hardware</li>
          <li>Constructed an internal configuration management database (CMDB)</li>
          <li>Developed a web application to request rides and transport staff around the airport taxiway</li>
          <li>Launched a prototype application to locate vehicles around the airport. Processed, utilized, and displayed geographic information</li>
          <li>Developed a mobile web application for passport checks. Maintained and further updated mobile web applications</li>
          <li>Launched a virtual assistant for Amazon Alexa that enables passengers to query flight data</li>
        </ul>
      </div>

      <div class="tech-stack">
        Java, C#, ServiceNow, Angular, Angular JS, React, OpenLayers, GeoServer, Apache Cordova, Node.js, AWS Lambda
      </div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming Languages</h3>
          <div class="skill">Java / Kotlin</div>
          <div class="skill">JavaScript / TypeScript</div>
          <div class="skill">C#</div>
          <div class="skill">Python</div>
          <div class="skill">C++</div>
          <div class="skill">HTML / CSS</div>
          <div class="skill">SQL</div>
      </div>
      
      <div class="skill-set">
        <h3>Gamedev & Influencer</h3>
          <div class="skill">Unreal Engine</div>
          <div class="skill">Unity</div>
          <div class="skill">Phaser</div>
          <div class="skill">Photoshop</div>
          <div class="skill">OBS</div>
          <div class="skill">Premiere</div>
          <div class="skill">Google Sheets</div>
      </div>
      
      <div class="skill-set">
        <h3>Tools & Frameworks</h3>
          <div class="skill">Spring Boot</div>
          <div class="skill">Hibernate</div>
          <div class="skill">JUnit</div>
          <div class="skill">JMS</div>
          <div class="skill">JPA</div>
          <div class="skill">Maven</div>
          <div class="skill">Gradle</div>
          <div class="skill">Docker</div>
          <div class="skill">Git</div>
          <div class="skill">GitLab</div>
          <div class="skill">Jenkins</div>
          <div class="skill">Keycloak</div>
          <div class="skill">Liquibase</div>
          <div class="skill">Swagger</div>
          <div class="skill">RabbitMQ</div>
          <div class="skill">Elasticsearch</div>
          <div class="skill">Apache Kafka</div>
          <div class="skill">Angular</div>
          <div class="skill">React</div>
          <div class="skill">Vue</div>
          <div class="skill">ServiceNow</div>
          <div class="skill">JIRA</div>
          <div class="skill">OpenLayers</div>
          <div class="skill">GeoServer</div>
          <div class="skill">AWS</div>
          <div class="skill">TensorFlow</div>
      </div>
      
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Baden-Wuerttemberg Cooperative State University - 2016</h3>
      <h4>Bachelor of Science - Applied Computer Science</h4>
      <div>Specialty in International Business Competence</div>

      <h3>Einhardschule Seligenstadt - 2013</h3>
      <h4>General qualification for university entrance</h4>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Fluent</div>

      <h3>German</h3>
      <div>Mother tongue</div>
    </div>
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