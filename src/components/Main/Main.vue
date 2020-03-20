<template>
  <div>
    <div class="background"></div>
    <StateTitle :title="generalState.title" />
    <MainStats />
    <ChartCard />
    <div class="news-container">
      <h1>Ogranicenja, obaveze i uslovi</h1>
      <h5>Propisani od strane drzavnih organa</h5>
      <News v-for="(n, i) in news" :news="n" :key="i" />
    </div>
    <div class="tips-container">
      <h1>Sta? Koliko?</h1>
      <h5>Saveti za smanjenje sirenja virusa</h5>
      <ul>
        <Tip v-for="(tip, i) in tips" :key="i" :tip="tip" />
      </ul>
    </div>
    <Disclaimer />
    <div class="footer">
      <span>
        Sajt izradjen u informativne svrhe -
        <a
          target="_blank"
          href="https://github.com/sebamed"
        >Github</a>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.tips-container {
  ul {
    list-style-type: none;
  }
}

.tips-container,
.news-container {
  width: 900px;
  margin: 30px auto;
  padding: 20px;
  h1 {
    text-align: center;
    color: #172b4d;
    text-transform: uppercase;
  }

  h5 {
    color: #8898aa;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
}

.background,
.footer {
  width: 100%;
  background: linear-gradient(87deg, #f5365c 0, #f56036 100%);
  //   background: linear-gradient(87deg, #2dce89 0, #2dcecc 100%);
  //       background: linear-gradient(87deg, #fb6340 0, #fbb140 100%) !important;
}

.background {
  z-index: -1;
  position: absolute;
  height: 95vh;
  clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 95vh);
  top: 0;
  left: 0;
}

.footer {
  position: relative;
  margin-top: 10px;
  text-align: center;
  padding: 40px 0;

  span {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;

    a {
      text-decoration: none;
      color: #172b4d;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -50px;
    width: 100%;
    background: linear-gradient(87deg, #f5365c 0, #f56036 100%);
    height: 50px;
    z-index: -1;
    clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%) !important;
  }
}

.card {
  z-index: 1;
  width: 940px;
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  padding: 20px;
  background-color: #172b4d;

  &__header {
    padding: 0 20px 10px 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    h4 {
      color: #fff;
      font-weight: bolder;
      letter-spacing: 1px;
      margin: 5px 0;
    }

    span {
      font-size: 12px;
      letter-spacing: 0.5px;
      font-weight: bold;
      color: #ccc;
      text-transform: uppercase;
    }
  }

  &__body {
    p {
      margin: 20px;
      color: #fff;
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
}
</style>