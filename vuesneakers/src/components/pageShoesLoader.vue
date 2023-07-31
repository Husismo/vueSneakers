<template>
  <svg
    role="img"
    width="900"
    height="350"
    aria-labelledby="loading-aria"
    viewBox="0 0 900 350"
    preserveAspectRatio="none"
  >
    <title id="loading-aria">Loading...</title>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clip-path="url(#clip-path)"
      style="fill: url('#fill')"
    ></rect>
    <defs>
      <clipPath id="clip-path">
        <rect x="0" y="0" rx="10" ry="10" width="300" height="280" />
        <rect x="120" y="189" rx="0" ry="0" width="3" height="18" />
        <rect x="330" y="21" rx="10" ry="10" width="390" height="20" />
        <rect x="330" y="66" rx="10" ry="10" width="100" height="20" />
        <rect x="330" y="213" rx="25" ry="25" width="330" height="50" />
      </clipPath>
      <linearGradient id="fill">
        <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1.59996" stop-color="#dedede" stop-opacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </svg>
</template>

<script></script>

<style lang="scss" scoped></style>
