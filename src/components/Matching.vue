<template>
    <div id="matching">
      <transition name="matchSpeedTransition" appear
      @after-appear="matchSpeedAfterAppear"
      >
        <div class="matchSpeed">
              <img src="https://static.frdic.com/web/yinyang/match_img@2x.png" alt="">
              <div class="matchTime">
                 <div v-if="matchIngAchieve">
                   <p>匹配</p>
                   <p>成功</p>
                 </div>
                 <div v-else>
                   <p>匹配中</p>
                   <p>{{matchIng}}</p>
                 </div>
              </div>
        </div>
      </transition>

      <div class="matchIngInfo">

        <transition name="grayBjTransition" appear >
            <section class="grayBj" :class="{grayActive:grayActive}"></section>
        </transition>
        
        <div class="matchUserInfo challengeInfo" :class="{infoActiveL:infoActive}">
            <img src="https://static.eudic.net/web/jingtingdang/bitmap_img2.png" alt="">
            <p class="infoName">
                zhanghuanglong
            </p>
            <p class="infoTotalCount">
                <span>总场次:</span><span>2000</span>
            </p>
        </div>

        <div class="matchOpponentInfo challengeInfo" :class="{infoActiveR:infoActive}">
             <img src="https://static.eudic.net/web/jingtingdang/bitmap_img2.png" alt="">
             <p class="infoName">
                wujianglong
             </p>
             <p class="infoTotalCount">
                <span>总场次:</span><span>2000</span>
             </p>
        </div>

      </div>
    </div>
</template>
<script>
export default {
  name: 'matching',
  created:()=>{

  },
  data(){
    return {
      random:8,
      matchIngAchieve:false,
      matchIng:"00:00",
      grayActive:false,
      infoActive:false
    }
  },
  methods:{
      matchSpeedAfterAppear(){
        let n=Math.floor(Math.random()*this.random),i=0,interval=null;

        let format=(f)=>{
            let f1="00",f2="00",f3=f%60,f4=f/60;
            if(f4>1){
              f1=f4.length>1?f4:"0"+f4;
              f2=f3;
            }else{
              f1="00"
              f2=f3.length>1?f3:"0"+f3;
            }
            return f1+":"+f2;
        }

        interval=setInterval(()=>{
          if(i>n){
              clearInterval(interval)
              this.matchIngAchieve=true
              this.grayActive=true
              setTimeout(function(){
                  this.infoActive=true;
              },300)
          }else{
              i++;
              this.matchIng=format(i)
          } 
        },1000)
      },
      
  }
}

/**
* 此页面动效 通过动画animation过渡配合apper after-appear方法监听匹配成功动画完成 用添加class方法 下面对战的动画依次出来  
*/
</script>
<style scoped lang="scss">

  #matching{
    .matchSpeed{
        width: 58%;
        left:100%;
        position:relative;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        animation: bounce-in .3s;
        animation-fill-mode: forwards;
        >img{
            width:100%;
            top:0;
        }
        .matchTime{
          color:#02f2f3;
          top:0;
          font-size:0.4rem;
          position:absolute;
          width:100%;
          height:100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          letter-spacing: 0.5px;
          p{
            margin-bottom:0.15rem;
          }
        }
    }

    .matchIngInfo{
      border-radius: 5px;
      height:3.07rem;
      position:relative;
      color:#fff;
      .grayBj{
        background: #000000;
        width:100%;
        height:100%;
        opacity:0;
       
      }
      >div{
        width:50%;
        height:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position:absolute;
        top:0;
        z-index:999;
        .infoName{
            font-size:0.307rem;
            margin-top: 0.2rem;
            margin-bottom: 0.2rem;
        }
        .infoTotalCount{
            font-size:0.239rem;
        }
        img{
           width:25%;
           border:2px solid #fff;
           border-radius:1rem;
        }
      }
      .matchUserInfo {
          left:-50%;
      }
      .matchOpponentInfo{ 
          right:-50%;
      }
    }
  }
  
  .grayActive{
       animation: gray  .8s;
        animation-fill-mode: forwards;
  }
  .infoActiveL:first-child{
    
      animation: fadeInLeft  .5s;
      animation-fill-mode: forwards;
  }
  .infoActiveR:last-child{

      animation: fadeInRight .5s;
      animation-fill-mode: forwards;
  }
  
  @keyframes bounce-in {
    from {
      left:100%;
    }
    to {
      left:20%;
    }
  }

  @keyframes gray{
    from {
      opacity:0;
    }
    to {
      opacity:0.4;
    }
  }
  
  @keyframes fadeInLeft{
    from:{
      left:-50%;
    }
    to{
      left:0%;
    }
  }

  @keyframes fadeInRight{
    from:{
      right:-50%;
    }
    to{
      right:0%;
    }
  }


</style>
