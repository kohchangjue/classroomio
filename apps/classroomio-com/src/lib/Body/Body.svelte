<script lang="ts">
  import Section from './Section.svelte';
  import { PUBLIC_ENABLE_STATS } from '$env/static/public';
</script>

<Section
  id="collaboration"
  tagline="Collaborative"
  title="Student and Teacher Community"
  description="Our in-house LMS platform includes a forum-like feature where students and teachers can ask and answer questions, creating a collaborative learning environment. This fosters engagement and knowledge sharing among the community"
  src="/brainstorming.svg"
  rightToLeft={false}
/>
<Section
  id="growwithtech"
  tagline="Grow With Tech"
  title="Brilliantaire: Where Kids Grow with Technology"
  description="At Brilliantaire, we believe in nurturing young minds to thrive in a tech-driven world. Our programs introduce children to the fascinating realms of robotics, artificial intelligence, and technology, sparking their curiosity and creativity. Join us on a journey where young learners not only grow with tech but also shape the future with innovation and knowledge."
  src="/drone.svg"
  rightToLeft={true}
/>
<Section
  id="professionaltutor"
  tagline="Professional Tutor"
  title="Brilliantaire Professional Tutoring: Where Expertise Leads the Way"
  description="At Brilliantaire, we bring you the expertise of tutors who hail from esteemed tech industries, each boasting over 10 years of invaluable experience. With personalized guidance tailored to your needs, our tutors ensure that you not only master the intricacies of technology but also gain practical insights from real-world applications."
  rightToLeft={true}
  src="/teacher.svg"
/>
<Section
  id="aiorientedlms"
  tagline="AI Oriented In House LMS"
  title="Where AI Meets Education, Every Step of the Way"
  description="We harness the power of artificial intelligence to personalize learning experiences, adapt curriculum to individual needs, and optimize educational outcomes. With cutting-edge AI technologies at your fingertips, embark on a journey of discovery and mastery in the realm of artificial intelligence. Join AIcademy and revolutionize the way you learn, one algorithm at a time"
  rightToLeft={false}
  src="/artificial-intelligence.svg"
/>

<!-- body section 5 -->
{#if PUBLIC_ENABLE_STATS}
  <div
    class="flex justify-between flex-row flex-wrap lg:flex-nowrap items-center text-center px-[10%] py-[7%] border-b-[1px] gap-y-20 gap-x-20 mx-0 lg:mx-[12%]"
  >
    <div class="w-full">
      <h2
        class="w-full order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
      >
        1 thousand
      </h2>
      <p class="text-base leading-7 text-gray-600">Feedback collected</p>
    </div>
    <div class="w-full">
      <h2 class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        5 thousand
      </h2>
      <p class="text-base leading-7 text-gray-600">Documents processed</p>
    </div>
    <div class="w-full">
      <h2 class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        1 million
      </h2>
      <p class="text-base leading-7 text-gray-600">Page views recorded</p>
    </div>
  </div>
{/if}
