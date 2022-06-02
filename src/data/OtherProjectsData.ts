import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-o-8", "Game Design Bootcamp", "img/projects/core_bootcamp.png", `
    <div class="paragraph">
        I was part of the Core <strong>Advanced Game Design Bootcamp</strong> in February 2022. It was well organized with an expert talk and a challenge every day for two weeks.
    </div>
    <div class="paragraph center">
        <a href="https://learn.coregames.com/bootcamp/" target="_blank">Website link</a>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/core_bootcamp.jpg" alt="Drew Blood Screenshot" />
    </div>`),
    new ProjectData("project-o-7", "Crayta Ignition", "img/projects/crayta_ignition_cropped.jpg", `
    <div class="paragraph">
        In January 2022 I joined the <strong>Crayta Ignition</strong> program, after having won several Spark and Game Jam awards.
    </div>
    <div class="paragraph">
        This allowed me to pursue my career as a Game Developer, which I'm very grateful for.
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/crayta_ignition.jpg" alt="Drew Blood Screenshot" />
    </div>`),
    new ProjectData("project-o-6", "Core Affiliate", "img/projects/core_affiliates.png", `
    <div class="paragraph">
        I made a YouTube channel for Core and joined the <strong>Core Affiliate</strong> program in May 2021.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtu.be/hK8E0xWAA3E" frameborder="0" allowfullscreen></iframe>
    </div>`),
    new ProjectData("project-o-5", "Core Invitational", "img/projects/core_invitational.png", `
    <div class="paragraph">
        In 2021 I gathered a team of developers and artists and we applied to the <strong>Core Invitational</strong>. It was a very well organized event, and a great experience for us to be part of it. We built strong and lasting friendships there.
    </div>
    <div class="paragraph">
        Later that year I was leading another team for the Core Summer Invitational.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtu.be/QkXq9D2ivAY" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtu.be/BoOvFWPnfW4" frameborder="0" allowfullscreen></iframe>
    </div>`),
    new ProjectData("project-o-4", "Cloudflight Coding Contest", "img/projects/cloudflight-coding-contest.jpg", `
    <div class="paragraph">
        I participated in the 2019 <strong>Cloudflight Coding Contest</strong> and scored a Top 3 finish. Afterwards I received a job offer.
    </div>
    <div class="paragraph">
        <a href="https://register.codingcontest.org/" target="_blank">Cloudflight Coding Contest Website</a>.
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/cloudflight-coding-contest.jpg" alt="Drew Blood Screenshot" />
    </div>`, "#1ca1e2"),
    new ProjectData("project-o-3", "Google Hash Code", "img/projects/hash_code.jpg", `
    <div class="paragraph">
        In 2019 I joined <strong>Google Hash Code</strong> with some of my colleagues. We made it into the Top 2% of participants. I also joined the Google Code Jam later that year.
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/hash_code_result.jpg" alt="Drew Blood Screenshot" />
    </div>`, "#1ca1e2"),
    new ProjectData("project-o-2", "CodinGame", "img/projects/codingame.jpg", `
    <div class="paragraph">
        I like to solve programming challenges on <strong>CodinGame</strong>. They also have competitions every few months.
    </div>
    <div class="paragraph">
        This is my profile: <a href="https://www.codingame.com/profile/9645f21127a7f7e18b4f0f82be09e00d8947272" target="_blank">Profile link</a>.
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/codingame-logo.jpg" alt="Drew Blood Screenshot" />
    </div>`, "#1ca1e2"),
    new ProjectData("project-o-1", "Twitch Playz HS", "img/projects/twitchplayzhs.jpg", `
    <div class="paragraph">
        <strong>Twitch Playz HS</strong> (formerly MixerPlaysHS) was an interactive livestream experiment, which allowed viewers on twitch.tv to play Hearthstone together on stream. Mouse input was collected from viewers using the brand new Twitch Extension system. The extension "Screen Controls" was developed by me and used as stream overlay. It was one of the first 100 extensions that got approved by Twitch. Mouse input was send to my Server (hosted on AWS), which evaluated inputs (sorting out invalid inputs and calculating the user action with the most agreement each time step). The resulting action for each time step was send to my streaming PC, which automatically executed the action.
    </div>
    <div class="paragraph">
        I tried to automate as much as possible with Deck Tracker, Collection Manager, and Arena Draft help.
    </div>
    <div class="paragraph">
        Initially I launched on Beam (which rebranded to Mixer and then shut down), because it had lower latency and offered easier controls for viewers. Later I started a parallel broadcast on twitch.tv to reach a larger audience. Unfortunately I didn't record the peak gameplay with over 50 concurrent players. But I managed to save some gameplay to my YouTube channel.
    </div>
    <div class="paragraph">
        You can still view the Twitch Channel here: <a href="https://www.twitch.tv/twitchplayzhs" target="_blank">Channel link</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/watch?v=37RoABe06fs" frameborder="0" allowfullscreen></iframe>
    </div>`, "#c10606", false, true),
];