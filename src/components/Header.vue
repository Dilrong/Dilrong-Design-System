<template>
  <div class="header">
    <img alt="Vue logo" src="../assets/logo.svg" />
    <ul class="nav">
      <li><router-link to="/logo">로고타입</router-link></li>
      <li><router-link to="/color">색상</router-link></li>
      <li><router-link to="/typography">타이포그래피</router-link></li>
      <li><router-link to="/component">컴포넌트</router-link></li>
      <li><router-link to="/photo">사진</router-link></li>
      <li><router-link to="/resouce">그래픽 리소스</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  padding-bottom: 32px;
}
.nav {
  list-style-type: none;
  padding-top: 8px;
  font-weight: 300;
}

.nav li {
  text-align: center;
  font-size: 14px;
  padding: 0px 16px;
  white-space: nowrap;
  float: left;
}

.nav a {
  color: #2c3e50;
  text-decoration: none;
}

.nav a:hover {
  font-weight: 500;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  font-weight: 500;
  color: black;
}
</style>
