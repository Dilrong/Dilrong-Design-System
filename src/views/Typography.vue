<template>
  <div class="typography">
    <h1>타이포그래피</h1>
    <h2 class="divider">Font</h2>
    <hr />
    <div>
      dilrong이 제작한 모든 서비스와 문서에는
      <a href="https://cactus.tistory.com/306">Pretendard</a>를 사용합니다.
    </div>
    <h2 class="divider">Usage</h2>
    <hr />
    <div>텍스트의 위계에 따라 폰트 크기 및 자족을 아래와 같이 사용합니다.</div>
    <div class="row">
      <div>
        <div>Headline 1</div>
        <div>45px, bold</div>
      </div>
      <h1>Dilrong 타이포그래피</h1>
    </div>
    <div class="row">
      <div>
        <div>Headline 2</div>
        <div>36px, bold</div>
      </div>
      <h2>Dilrong 타이포그래피</h2>
    </div>
    <div class="row">
      <div>
        <div>Headline 3</div>
        <div>32px, bold</div>
      </div>
      <h3>Dilrong 타이포그래피</h3>
    </div>
    <div class="row">
      <div>
        <div>Headline 4</div>
        <div>24px, bold</div>
      </div>
      <h4>Dilrong 타이포그래피</h4>
    </div>
    <div class="row">
      <div>
        <div>Headline 5</div>
        <div>20px, bold</div>
      </div>
      <h5>Dilrong 타이포그래피</h5>
    </div>
    <div class="row">
      <div>
        <div>Headline 6</div>
        <div>16px, bold</div>
      </div>
      <h6>Dilrong 타이포그래피</h6>
    </div>
  </div>
  <div class="row">
    <div>
      <div>Paragraph</div>
      <div>14px, Regular</div>
    </div>
    <div class="paragraph">Dilrong 타이포그래피</div>
  </div>
  <div class="row">
    <div>
      <div>Caption</div>
      <div>12px, Regular</div>
    </div>
    <div class="caption">Dilrong 타이포그래피</div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 45px;
  margin: 0;
}

h2 {
  font-weight: bold;
  font-size: 36px;
  margin: 0;
}

h3 {
  font-weight: bold;
  font-size: 32px;
  margin: 0;
}

h4 {
  font-weight: bold;
  font-size: 24px;
  margin: 0;
}

h5 {
  font-weight: bold;
  font-size: 20px;
  margin: 0;
}

h6 {
  font-weight: bold;
  font-size: 16px;
  margin: 0;
}

.paragraph {
  font-size: 14px;
  margin: 0;
}

.caption {
  font-size: 12px;
  margin: 0;
}

hr {
  border: none;
  color: #a9afb3;
  background-color: #a9afb3;
  height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
}

div {
  font-size: 1rem;
}

a {
  color: #3190fd;
}

.row {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  margin-top: 32px;
}

.divider {
  margin-top: 72px;
}
</style>
