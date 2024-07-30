<script lang="ts">
  import Section from './Section.svelte';
  import { PUBLIC_ENABLE_STATS } from '$env/static/public';
</script>

<Section
  id="collaboration"
  tagline="Collaborative"
  title="Student and Teacher Community"
  description="Forum-like feature where students and teachers can ask and answer questions, creating a collaborative learning environment. This fosters engagement and knowledge sharing among the community"
  src="/brainstorming.svg"
  rightToLeft={false}
/>
<Section
  id="growwithtech"
  tagline="Grow With Tech"
  title="Brilliantaire: Where Kids Grow with Technology"
  description="Blending advanced AI with interactive learning experiences to inspire curiosity, enhance skills, and build a solid foundation for future success. Through tailored lessons and gamified challenges, Brilliantaire empowers students to explore their passions, master new concepts, and develop a lifelong love of learning."
  src="/drone.svg"
  rightToLeft={true}
/>
<Section
  id="oncloud"
  tagline="24/7 On Cloud"
  title="Brilliantaire: Anytime !!! Anywhere !!!"
  description="Brilliantaire ensures that students have access to their personalized learning environment anytime, anywhere. Whether they're diving into interactive lessons, collaborating with peers, or receiving real-time feedback, the platform's seamless cloud integration supports continuous learning and growth, no matter the time or place."
  rightToLeft={true}
  src="/teacher.svg"
/>
<Section
  id="aiorientedlms"
  tagline="AI Oriented LMS"
  title="Where AI Meets Education, Every Step of the Way"
  description="We harness the power of artificial intelligence to personalize learning experiences, adapt curriculum to individual needs, and optimize educational outcomes. "
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
