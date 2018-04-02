# vue

> wjl

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##代办
全局scss整理

局部scss写法

##数据接口
参数名 可以参照后台格式
1.用户信息
{	
	//头像
	userAvatar:"",
	//用户名
	userName:"",
	//总场次
	totalCount:"",
	//胜率
	WinPercentage:"",
	.....
}

2.数据接口
{
	userInfo:{	
		//头像
		userAvatar:"",
		//用户名
		userName:"",
		//总场次
		totalCount:"",
		//胜率
		WinPercentage:"",
		.....
	},
	enemyInfo:{
		//头像
		userAvatar:"",
		//用户名
		userName:"",
		//总场次
		totalCount:"",
		//胜率
		WinPercentage:"",
		.....
	},
	wordInfo:[
		{	
			//单词
			word:"",
			//单词解释
			wordExplain:"",
			//单词词性列表
			wordTypeList:[
				'n.m.',
				'n.f',
				'n.m.',
				'n.f',
			],
			//单词词性
			wordType:1,
		},
		{	
			//单词
			word:"",
			//单词解释
			wordExplain:"",
			//单词词性列表
			wordTypeList:[
				'n.m.',
				'n.f',
				'n.m.',
				'n.f',
			],
			//单词词性
			wordType:1,
		},
		{	
			//单词
			word:"",
			//单词解释
			wordExplain:"",
			//单词词性列表
			wordTypeList:[
				'n.m.',
				'n.f',
				'n.m.',
				'n.f',
			],
			//单词词性
			wordType:1,
		},
		...
	]
}
3.待定