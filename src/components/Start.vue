<template>
    <div class="ChallengeStart">
        <img src="https://static.eudic.net/web/yinyang/challenge_logo@2x.png" alt="">
        <div>
            <p>
              <router-link to="/catalog">开始挑战</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome1 to Your Vue.js App'
    }
  }
}
</script>
<style scoped lang="scss">
    .ChallengeStart{
      overflow:hidden;
      img{
        width:54%;
        margin:2.8rem auto 1.4rem;
        display:block;
      }
      div{
        width:90%;
        margin:0 auto;
        p{
          font-size:0.307rem;
          height: 0.853rem;
          line-height: 0.853rem;
          background-image: linear-gradient(-137deg, #FF1C6C 0%, #EC4343 100%);
          border-radius: 100px;
          text-align:center;
          a{
            display:block;
            width:100%;
            height:100%;
            color:#fff;
          }
        }
      }
    }
</style>
