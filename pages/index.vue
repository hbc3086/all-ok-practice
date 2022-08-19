<template>
  <div class="wrap">
    <section class="visual">
      <h1 class="blind">다된다 메인</h1>
      <article class="inner">
        <div class="cont">
          <h1 class="animate__animated">다된다</h1>
          <h2 class="animate__animated">
            기업대출, 정책자금 <br /><strong class="ani_typing"
              >다된다<em>cursor</em></strong
            >에서 다된다!
          </h2>
          <p class="animate__animated">
            60만 법인을 위한 대출가능기관 조회서비스 <br />기업신용도가 낮아도
            기술력이 있는 기업이라면? <br />모두 다된다!
          </p>
        </div>
        <div class="btns">
          <!-- <button class="btn">대출가능기관 무료로 알아보기</button> -->
          <nuxt-link to="/lookup" class="btn"
            >대출가능기관 무료로 알아보기</nuxt-link
          >
        </div>
      </article>
    </section>
    <section class="area1">
      <div class="inner">
        <h2><b class="txt_point">대출가능기관</b> 찾아드립니다!</h2>
        <div class="col3">
          <article class="unit u1">
            <h3>
              특허가 있는 기업이라면? <br />기술을 담보로
              <br class="tablet" />대출을 받을수 있어요!
            </h3>
            <p>
              특허가 없더라도 <br class="tablet" />출원, 등록,
              <br class="mobile" />매매를 <br class="tablet pc" />통해
              기술담보대출가능!
            </p>
          </article>
          <article class="unit u2">
            <h3>
              사업자번호로 <br class="tablet" />간편하게 조회!
              <br />기업대표라면 누구나!
            </h3>
            <p>
              사업자등록번호만 입력하면 <br />대출가능기관
              <br class="tablet" />무료로 확인가능!
            </p>
          </article>
          <article class="unit u3">
            <h3>
              기업의 신용도가 <br class="tablet" />낮아도 <br />해결방안제시
            </h3>
            <p>
              기업재무관리를 통해 <br />기업신용도 상승
              <br class="tablet" />해결방안제시
            </p>
          </article>
        </div>
        <div class="btns">
          <!-- <button class="btn">대출가능기관 무료로 알아보기</button> -->
          <nuxt-link to="/lookup" class="btn"
            >대출가능기관 무료로 알아보기</nuxt-link
          >
        </div>
      </div>
    </section>
    <section class="area2">
      <div class="inner colb">
        <div class="col animate__animated">
          <article class="unit">
            <h3>특허 보유 기업 특허가치 평가 제공</h3>
            <h2>80,000여 기업 기술분석데이터</h2>
            <p>
              기업보유특허 가치평가금액 정보 무료제공! <br />기술이전하면 좋은
              특허정보제공
            </p>
          </article>
          <article class="unit">
            <h3>대출가능기관 정보 무료제공</h3>
            <h2>정부기관 및 은행권정보</h2>
            <!-- <p>기업보유특허 가치평가금액 정보 무료제공! <br/>기술이전하면 좋은 특허정보제공</p> -->
          </article>
          <article class="unit">
            <h3>기업원스톱 서비스제공</h3>
            <h2>세무, 노무, 법무</h2>
            <p>
              제휴세무사, 노무사, 법무사를 통한 <br />세무기장, 법인등기,
              노무관리 원스톱 서비스 제공
            </p>
          </article>
        </div>
        <div class="col_img animate__animated">
          왜 다된다일까요? 내기업 기술력분석정보, 보유특허가치, 기술금융대출
          가능기관정보 제공
        </div>
      </div>
    </section>
    <aside class="area_bnr">
      <div class="inner">
        <p>복잡한 기업자금, <b>다된다</b>에서 쉽고, 간편하게!</p>
        <nuxt-link to="/lookup" class="btn"
          >대출가능기관 무료로 알아보기</nuxt-link
        >
      </div>
    </aside>
    <section class="area3">
      <div class="inner">
        <h2><b>자주묻는질문</b></h2>
        <article class="unit">
          <h3 class="blind">리스트</h3>
          <ul class="list">
            <li :class="{ on: faq.toggle1 == true }">
              <div class="top" @click="fnToggle(1)">
                <div class="left">
                  <h3>기술금융 (TCB)란 무엇인가요?</h3>
                </div>
                <div class="right">
                  <span class="btn_more">더보기</span>
                </div>
              </div>
              <div class="cont">
                자본이 부족하고 낮은 신용등급의 중소기업 기술력을 담보로
                저금리로 제공하는 대출이며 2022년 금융권은 4대 은행의
                기술신용대출 잔액 이 올해 200조원을 돌파할 것으로 보고 있을정도
                로 활성화 되고 있습니다. <br />
                중소기업이 대출을 신청 하면 은행은 기술신용평가기관(TCB)에
                평가를 의뢰해 대출 여부를 결정하게 됩니다.
              </div>
            </li>
            <li :class="{ on: faq.toggle2 == true }">
              <div class="top" @click="fnToggle(2)">
                <div class="left">
                  <h3>기업 신용도가 낮은데도 가능할까요?</h3>
                </div>
                <div class="right">
                  <button class="btn_more">더보기</button>
                </div>
              </div>
              <div class="cont">
                네, 가능합니다. 2019년 특허청 자료에 의하면 IP담보대출 기업의
                신용등급은 최저 B-등급부터 최고 BBB+등급(9개 등급)까지 분포됐고
                이 중 신용등급이 높지 않은 BB+등급 이하 기업에 대한 대출이
                90.7%를 차지, 신용등급이 높지 않은 기업도 다수 대출을 받을 수
                있는것으로 확인되었습니다. <br />
                또한, 다된다에서는 기업신용도를 상승시킬수 있는 솔루션을 함께
                제공합니다.
              </div>
            </li>
            <li :class="{ on: faq.toggle3 == true }">
              <div class="top" @click="fnToggle(3)">
                <div class="left">
                  <h3>기술금융 (TCB)란 무엇인가요?</h3>
                </div>
                <div class="right">
                  <button class="btn_more">더보기</button>
                </div>
              </div>
              <div class="cont">
                기술금융대출은 특허가 없어도 기업이 보유한 기업의 기술력이
                인정되면, 기술력을 담보로 대출 이 가능합니다. <br />
                다된다에서는 상담신청을 통해 기업기술력분석을 무료로 해드리고
                있습니다.
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
    <footer>
      <div class="inner">
        <h2>(주) 유니콘랜치</h2>
        <ul class="bx_biz">
          <li>
            <span>대표자</span>
            <b>전호</b>
          </li>
          <li>
            <span>개인정보보호책임자</span>
            <b>정재석</b>
          </li>
          <li class="grow">
            <span>사업자등록번호</span>
            <b>698-87-02015</b>
          </li>
          <li>
            <span>통신판매신고번호</span>
            <b>합병 후 신고예정</b>
          </li>
          <li>
            <span>주소</span>
            <b>서울특별시 영등포구 여의대로 108 파크원1, 5층</b>
          </li>
        </ul>
        <div class="coln">
          <h3>고객상담</h3>
          <ul class="bx_cs">
            <li>
              <span>전화</span>
              <a class="link" href="tel:02-3486-5116">02-3486-5116</a>
            </li>
            <li>
              <span>평일</span><span>10:00~18:00 (점심 12:00~13:00)</span>
              <br />
              <span>주말, 공휴일 휴무</span>
            </li>
          </ul>
          <ul class="bx_email">
            <li>
              <span>이메일</span>
              <a class="link" href="mailto:allok@unicornranch.co.kr"
                ><b>allok@unicornranch.co.kr</b></a
              >
            </li>
          </ul>
        </div>
        <div class="copy">
          Copyright(c) Unicornranch Corp. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: {
        toggle1: false,
        toggle2: false,
        toggle3: false,
      },
    };
  },
  methods: {
    fnToggle(i) {
      this.faq["toggle" + i] = !this.faq["toggle" + i];
    },
  },
};
</script>
