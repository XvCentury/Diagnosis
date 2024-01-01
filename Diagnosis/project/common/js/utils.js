class Utils {
	//请求url中的公共部分
	constructor(){
		this.baseUrl = 'http://159.75.169.224:7300/pz'
	}
	//获取用户信息
	getUserInfo(){
		// 调用登录的api
		uni.login({
			success:res =>{
				console.log(res)
				this.request({
					url:'/auth/wxLogin',
					data:{
						code:res.code
					},
					success:res=>{
						console.log(res,'res')
					}
				})
			}
		})
	}
	//请求封装
	request(option = {
		showLoading:false
	}){
		//判断url是否存在
		if(!option.url){
			return false
		}
		if(option.showLoading){
			this.showLoading()
		}
		
		uni.request({
			url:this.baseUrl + option.url,
			data:option.data ? option.data : {},
			header: option.header ? option.header :{},
			method: option.method ? option.method :'GET',
			success: (response) => {
				uni.hideLoading()
				//后端返回的数据是异常的
				if(response.data.code != 10000){
					//将失败的结果返回出去
					if(option.fail && typeof option.fail == 'function'){
						option.fail(response)
					}
				}else{
					//将成功的结果返回
					if(option.success && typeof option.success == 'function'){
						option.success(response.data)
					}
				}
			},
			fail: response =>{
				uni.hideLoading()
				console.log(response)
			}
		})
	}
	//loading效果
	showLoading(){
		//利用缓存
		const isShowLoading = uni.getStorageInfoSync('isShowLoading')
		if(isShowLoading){
			uni.hideLoading()
			uni.setStorageSync('isShowLoading',false)
		}
		uni.showLoading({
			titel: '加载中...',
			complete: () => {
				uni.setStorageSync('isShowLoading',true)
			},
			fail: () => {
				uni.setStorageSync('isShowLoading',false)
			}
		})
	}
}

export default new Utils()