<template>
    <div class="cataLog">
    	<!-- <div class="minLogo">
    		
    	</div> -->
        <ul>
            <li v-for="(item, index) in cataData" :style="{background:item.bj}">
            	<div class="userInfoLi" v-if="index==0">
            		<div class="userInfoLiT">
            			<img :src=item.userAvatar alt="">
            			<div>
            				<p>{{item.userName}}</p>
            				<p>尚未选择任何课本</p>
            			</div>
            		</div>
            		<div class="userInfoLiB clear">
            			<div>
            				<div class="f_l">
	            				<span>总场次:</span><span>{{item.totalCount}}</span>
	            			</div>
	            			<div class="f_r">
	            				<span>当前胜率:</span><span>{{item.WinPercentage}}</span>
	            			</div>
            			</div>
            			<div class="grayBj"></div>
            		</div>
            	</div>
            	<div class="linkLi" v-else>
            		<router-link to="item.link">
            			<img :src=item.url alt="">
            			<div>
            				<p>{{item.title}}</p>
            				<p>{{item.des}}</p>
            			</div>
            		</router-link>
            	</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
   name: 'CataLog',
   created:()=>{

   },
   data:()=>{
   	  return {
   	  	cataData:[
   	  		{	
   	  			userAvatar:"https://static.eudic.net/web/jingtingdang/bitmap_img2.png",
				//用户名
				userName:"伍江龙",
				//总场次
				totalCount:"2000",
				//胜率
				WinPercentage:"81%",
				//背景色
				bj:"#4898D6"
   	  		},
   	  		{
				title:"选择课本",
				des:"选择一本喜欢的课本，开始你的阅读之旅～",
				link:"",
				bj:"#8C62DA",
				url:"https://static.eudic.net/web/yinyang/select_book_bg@2x.png",
				link:"/matching"
  			},
  			{
  				title:"开始PK",
  				des:"斗智斗勇，和你的对手展开一场智力比拼吧",
  				linl:"",
  				bj:"#A763CA",
  				url:"https://static.eudic.net/web/yinyang/pk_bg@2x.png",
  				link:"/matching"
  			},
  			{
  				title:"排名榜",
  				des:"斗智斗勇，和你的对手展开一场智力比拼吧",
  				link:"",
  				bj:"#7DBE69",
  				url:"https://static.eudic.net/web/yinyang/ranking_bg@2x.png",
  				link:"/matching"
  			},
   	  	],
   	  };
   }
}
</script>

<style scoped lang="scss">
	$ft_1:0.239rem;
	$ft_2:0.307rem;
	$ft_3:0.341rem;

	.cataLog{
		color:#fff;
		overflow:hidden;
		li{
			border-radius: 5px;
			margin-bottom:0.341rem;
		}
		.userInfoLiT{
			display:flex;
			padding-top:0.495rem;
			padding-left:6%;
			padding-right:6%;
			margin-bottom: 0.495rem;
			img{
				width:0.853rem;
				height:0.853rem;
				border-radius:0.853rem;
				border:2px solid #fff;
				margin-right:0.341rem;
			}
			div{
				p:first-child{
					font-size:$ft_2;
				}
				display: flex;
			    flex-direction: column;
			    justify-content: space-around;
				font-size:$ft_1;
			}
		}

		.userInfoLiB{
			font-size:$ft_1;
			height:0.717rem;
			line-height:0.717rem;
			>div{
				position: relative;
				z-index:9;
				padding-left:6%;
				padding-right:6%;
			}
			.grayBj{
				position:relative;
				width:100%;
				height:100%;
				opacity: 0.2;
				background: #000000;
				z-index:8;
			}
		}
		

		.linkLi{
			padding-bottom: 0.1rem;
    		padding-top: 0.1rem;
			a{
				display:flex;
				div{
					padding-right:0.3rem;
					p:first-child{
						font-size:$ft_3;
						margin-top:0.5rem;
						margin-bottom:0.2rem;
					}
					p:last-child{
						line-height:1.3;
					}
					font-size:$ft_1;
				}
				img{
					width:2rem;
					height:2rem;
					margin-left: 0.1rem;
				}
			}
			
		}
	}



</style>




