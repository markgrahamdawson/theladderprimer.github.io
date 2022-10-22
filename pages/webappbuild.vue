<script lang="ts" setup></script>

<template>
  <div>
      <div class="p-8">
        <h1 class="m-2 font-medium text-4xl mt-0 mb-8 text-black">Web App Build</h1>
        <p class="m-2">
          The website will be built in three phases:
        </p>
        <p class="m-2 font-semibold">
          Phase 1 - static site build
        </p>
        <p class="m-2">
          <ol>
            <li>A landing page - possibly prismic to give the team the ability to customize</li>
            <li>Static pages for about - contact - ect</li>
            <li>Static page listing all the organisations using the space</li>
            <li>This will all be built with nuxt and tailwind and hosted on netlify</li>
          </ol>
        </p>
        <p class="m-2 font-semibold">
          Phase 2 - content management system (CMS)
        </p>
        <p class="m-2">
          <ol>
            <li>A 'whats on' page that lists events that are scheduled</li>
            <li>The page will have a simple cms</li>
            <li>The front end of the site will be a nuxt app and hosted on netlify</li>
            <li>The data for this part of the app will be managed by firebase</li>
          </ol>
        </p>
        <p class="m-2 font-semibold">
          Phase 3 - booking system
        </p>
        <p class="m-2">
          <ol>
            <li>A booking system for managing bookings for larger events.</li>
            <li>The front end of the site will be a nuxt app and hosted on netlify</li>
            <li>This part of the site will have an express backend hosted on Google Cloud Run</li>
          </ol>
        </p>
      </div>
  </div>
</template>

<style lang="css" scoped></style>