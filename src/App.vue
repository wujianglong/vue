
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  //组件创建之前
  beforeCreated:()=>{

  },
  //组件创建
  created:()=>{
    ((doc, win) =>{
        let docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = ()=> {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;

                if (clientWidth >= 840) {
                    docEl.style.fontSize = '150px';
                } else if (clientWidth >= 640) {
                    docEl.style.fontSize = '100px';
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);

    })(document, window);
  },
}


</script>

<style lang="scss">
  @import './assets/css/reset';
  @import './assets/css/animate';

  html,body{
    height:100%;
    #app{
      background:url("https://static.eudic.net/web/yinyang/challenge_bg@2x.png") center center no-repeat;
      background-size:100% 100% ;
      height:100%;
      padding-left:3.7%;
      padding-right:3.7%;
      overflow:hidden;
    }
  }
</style>



