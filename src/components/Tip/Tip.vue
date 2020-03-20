<template>
  <li class="tip">
    <p>{{ tip }}</p>
  </li>
</template>

<style lang="scss">
.tip {
  margin: 15px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 3px solid rgba(0,0,0,0.2);
  padding-left: 20px;
  padding-right: 20px;
  transition: all .1s ease-in-out;

  &:hover {
    border-left: 5px solid rgba(0,0,0,0.2);
  }

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