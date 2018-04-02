
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

<style  lang="scss">
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    a{
      text-decoration:none;
    }
    .f_l{
      float:left;
    }
    .f_r{
      float:right;
    }
    .p_r{
      position:relative;
    }
    .p_a{
      position:absolute;
    }
    .clear:after{
      display:table;
      content:'';
      clear:both;
    }
    a:hover, a:visited, a:link, a:active {
      color:#fff;
    }
  
    html,body{
      height:100%;
      #app{
        background:url("https://static.eudic.net/web/yinyang/challenge_bg@2x.png") center center no-repeat;
        background-size:100% 100% ;
        height:100%;
        padding-left:5%;
        padding-right:5%;
      }
    }
    
</style>



