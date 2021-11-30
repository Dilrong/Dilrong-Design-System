<template>
  <title>딜롱 디자인 시스템</title>
  <div class="home">
    <div class="slogan">
      누구나, 쉬운, 발전하는 웹을 지향합니다.<br />
      <span class="bold">디자인 시스템</span>을 통해 저의 모든 서비스와 채널에서
      <br />저의 가치를 일관되게 표현하도록 돕습니다.
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.slogan {
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  font-size: 48px;
  line-height: 2;
  font-weight: 300;
}

.bold {
  color: #036635;
  font-weight: 500;
}
</style>
