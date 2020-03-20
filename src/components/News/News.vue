<template>
  <div class="news">
    <h6>{{ news.date }}</h6>
    <p>{{ news.text }}</p>
  </div>
</template>

<style lang="scss">
.news {
  margin: 15px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  h6 {
    color: #8898aa;
    font-size: 14px;
    font-weight: 300;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    color: #4b4b4d;
  }
}
</style>