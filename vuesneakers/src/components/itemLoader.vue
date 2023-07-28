<template>
    <svg
  role="img"
  width="150"
  height="200"
  aria-labelledby="loading-aria"
  viewBox="0 0 150 200"
  preserveAspectRatio="none"
>
  <title id="loading-aria">Loading...</title>
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    clip-path="url(#clip-path)"
    style='fill: url("#fill");'
  ></rect>
  <defs>
    <clipPath id="clip-path">
        <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
        <rect x="0" y="102" rx="5" ry="5" width="150" height="15" /> 
        <rect x="0" y="128" rx="5" ry="5" width="100" height="15" /> 
        <rect x="0" y="165" rx="5" ry="5" width="80" height="24" /> 
        <rect x="110" y="160" rx="5" ry="5" width="32" height="32" />
    </clipPath>
    <linearGradient id="fill">
      <stop
        offset="0.599964"
        stop-color="#f3f3f3"
        stop-opacity="1"
      >
        <animate
          attributeName="offset"
          values="-2; -2; 1"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="1.59996"
        stop-color="#dedede"
        stop-opacity="1"
      >
        <animate
          attributeName="offset"
          values="-1; -1; 2"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="2.59996"
        stop-color="#f3f3f3"
        stop-opacity="1"
      >
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

<script>

</script>

<style lang="scss" scoped>
svg{
    border: 1px solid #F3F3F3;
    border-radius:10px;
    padding: 30px;
}
</style>