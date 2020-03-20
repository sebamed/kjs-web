<template>
  <div :if="stats.confirmed" class="main-stats"> 
      <Stat :stat="stats.confirmed" />   
      <Stat :stat="stats.deaths" />   
      <Stat :stat="stats.recovered" />   
  </div>
</template>

<style lang="scss" scoped>
.main-stats {
    width: 820px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
}
</style>