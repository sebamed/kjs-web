<template>
  <div class="stat">
    <h1 class="stat__number">{{ stat.number }}</h1>
    <span class="stat__title">{{ stat.title }}</span>
  </div>
</template>

<style lang="scss" scoped>
.stat {
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 20px;
  text-align: center;
  width: 220px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);

  &__number {
    font-size: 110px;
    color: #32325d;
  }

  &__title {
    font-size: 18px;
    font-weight: bolder;
    text-transform: uppercase;
    color: #8898aa;
  }
}
</style>