<template>
	<!-- <view>
		<view class="od-banner">
			<image class="od-banner-icon" src="/static/resource/images/od_bg_icon.png" mode="widthFix" />
			<view class="od-jd od-jd-0">
				<view class="od-jd-out">
					<view class="od-jd-in"></view>
				</view>
				<view class="vp-flex od-jd-text">
					<view class="vp-flex_1">
						<text class="od-jd-st-0">填写订单</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-10">在线支付</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-20">专人服务</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-30">服务完成</text>
					</view>
				</view>
			</view>
		</view>
		<view class="pub-box">
			<view class="pub-box-bd">
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<image class="serv-icon"
							:src="service.icon_image ? service.icon_image_url : '../../static/resource/images/avatar.jpg'">
						</image>
					</view>
					<view class="weui-cell__bd">
						<text class="serv-name">{{service.name}}</text>
					</view>
					<view class="weui-cell__ft">
						<view class="f5 ic_info" @click="handleTap">服务内容</view>
					</view>
				</view>
			</view>
		</view>
		<block v-if="service.stype == 10 || service.stype == 15 || service.stype == 20">
			<view class="pub-box">
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">就诊医院</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<picker @change="onHospitalChange" :value="hospital_index" :range="hospitals"
									range-key="name">
									<input type="text" :disabled="true" placeholder="请选择要就诊的医院"
										:value="hospitals[hospital_index].name" placeholder-class="vp-placeholder" />
								</picker>
							</view>
						</view>
					</view>
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">就诊时间</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<dtPicker @dtPickerChanged="onStartTimeChanged" :timestamp="order.starttime"
									placeholder="请选择就诊时间"></dtPicker>
							</view>
						</view>
					</view>
					<view class="weui-cell weui-cell_input" @click="onClientChange">
						<view class="weui-cell__hd">
							<view class="weui-label">就诊人</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<input class="weui-input" placeholder-class="vp-placeholder" placeholder="请选择就诊人"
									style="text-align: right;" :disabled="true" :value="client.name" type="text">
							</view>
						</view>
					</view>
					<block v-if="service.stype == 15">

						<view class="weui-cell weui-cell_input">
							<view class="weui-cell__hd">接送地址</view>
							<view class="weui-cell__bd">
								<input class="weui-input" name="receiveAddress" style="text-align: right"
									placeholder-class="vp-placeholder" placeholder="请填写就诊人所在地址"
									v-model="order.receiveAddress" />
							</view>
						</view>
					</block>

					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">联系电话</view>
						<view class="weui-cell__bd">
							<input class="weui-input" type="number" name="tel" style="text-align: right"
								placeholder-class="vp-placeholder" placeholder="请填写您的联系电话" v-model="order.tel" />
						</view>
					</view>
				</view>
			</view>
			<view class="pub-box">
				<view class="pub-box-tt">服务需求</view>
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__bd">
							<textarea name="demand" auto-height placeholder="请简单描述您要就诊的科室.."
								placeholder-class="vp-placeholder" style="min-height: 150rpx" v-model="order.demand" />
						</view>
					</view>
				</view>
			</view>
		</block> -->
















	<view>
		<view class="od-banner">
			<image class="od-banner-icon" src="/static/resource/images/od_bg_icon.png" mode="widthFix" />
			<view class="od-jd od-jd-0">
				<view class="od-jd-out">
					<view class="od-jd-in"></view>
				</view>
				<view class="vp-flex od-jd-text">
					<view class="vp-flex_1">
						<text class="od-jd-st-0">填写订单</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-10">在线支付</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-20">专人服务</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-30">服务完成</text>
					</view>
				</view>
			</view>
		</view>
		<view class="pub-box">
			<view class="pub-box-bd">
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<image class="serv-icon"
							:src="service.icon_image ? service.icon_image_url : '../../static/resource/images/avatar.jpg'">
						</image>
					</view>
					<view class="weui-cell__bd">
						<text class="serv-name">{{ service.name }}</text>
					</view>
					<view class="weui-cell__ft">
						<view class="f5 ic_info" @click="handleTap">服务内容</view>
					</view>
				</view>
			</view>
		</view>
		<block v-if="service.stype == 10 || service.stype == 15 || service.stype == 20">
			<view class="pub-box">
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">就诊医院</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<picker @change="onHospitalChange" :value="hospital_index" :range="hospitals"
									range-key="name">
									<input type="text" :disabled="true" placeholder="请选择要就诊的医院"
										:value="hospitals[hospital_index].name" placeholder-class="vp-placeholder" />
								</picker>
							</view>
						</view>
					</view>
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">就诊时间</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<dtPicker @dtPickerChanged="onStartTimeChanged" :timestamp="order.starttime"
									placeholder="请选择就诊时间"></dtPicker>
							</view>
						</view>
					</view>
					<view class="weui-cell weui-cell_input" @click="onClientChange">
						<view class="weui-cell__hd">
							<view class="weui-label">就诊人</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<input class="weui-input" placeholder-class="vp-placeholder" placeholder="请选择就诊人"
									style="text-align: right;" :disabled="true" :value="client.name" type="text">
							</view>
						</view>
					</view>
					<block v-if="service.stype == 15">
						<!-- 接送陪诊 -->
						<view class="weui-cell weui-cell_input">
							<view class="weui-cell__hd">接送地址</view>
							<view class="weui-cell__bd">
								<input class="weui-input" name="receiveAddress" style="text-align: right"
									placeholder-class="vp-placeholder" placeholder="请填写就诊人所在地址"
									v-model="order.receiveAddress" />
							</view>
						</view>
					</block>

					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">联系电话</view>
						<view class="weui-cell__bd">
							<input class="weui-input" type="number" name="tel" style="text-align: right"
								placeholder-class="vp-placeholder" placeholder="请填写您的联系电话" v-model="order.tel" />
						</view>
					</view>
				</view>
			</view>
			<view class="pub-box">
				<view class="pub-box-tt">服务需求</view>
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__bd">
							<textarea name="demand" auto-height placeholder="请简单描述您要就诊的科室.."
								placeholder-class="vp-placeholder" style="min-height: 150rpx" v-model="order.demand" />
						</view>
					</view>
				</view>
			</view>
		</block>
		<block v-if="service.stype == 30 || service.stype == 40">
			<!-- 送取结果,代跑取药 -->
			<view class="pub-box">
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">所在医院</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<picker @change="onHospitalChange" :value="hospital_index" :range="hospitals"
									range-key="name">
									<input type="text" :disabled="true" placeholder="请选择就诊所在医院"
										:value="hospitals[hospital_index].name" placeholder-class="vp-placeholder" />
								</picker>
							</view>
						</view>
					</view>

					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">服务时间</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<dtPicker @dtPickerChanged="onStartTimeChanged" :timestamp="order.starttime"
									placeholder="请选择期望服务时间"></dtPicker>
							</view>
						</view>
					</view>

					<view class="weui-cell weui-cell_input" @click="onAddressChange">
						<view class="weui-cell__hd">
							<view class="weui-label">收件信息</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<input class="weui-input" :disabled="true" style="text-align: right"
								placeholder-class="vp-placeholder" placeholder="请选择收件信息" :value="
		                                                            order.address.userName
		                                                                ? order.address.userName + '(' + order.address.cityName + order.address.countyName + order.address.detailInfo + ')'
		                                                                : ''
		                                                        " />
							<!-- {{order.address?(order.address.userName+'('+order.address.telNumber+')'):''}} -->
						</view>
					</view>
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">联系电话</view>
						<view class="weui-cell__bd">
							<input class="weui-input" type="number" name="tel" style="text-align: right"
								placeholder-class="vp-placeholder" placeholder="请填写您的联系电话" v-model="order.tel" />
						</view>
					</view>
				</view>
			</view>

			<view class="pub-box">
				<view class="pub-box-tt">服务需求</view>
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__bd">
							<textarea name="demand" auto-height placeholder="如有其他服务要求请在此填写.."
								placeholder-class="vp-placeholder" style="min-height: 150rpx" v-model="order.demand" />
						</view>
					</view>
				</view>
			</view>
		</block>
		<block v-if="service.stype == 110">
			<!-- 上门服务 -->
			<view class="pub-box">
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">服务时间</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<dtPicker @dtPickerChanged="onStartTimeChanged" :timestamp="order.starttime"
									placeholder="请选择期望服务时间"></dtPicker>
							</view>
						</view>
					</view>

					<view class="weui-cell weui-cell_input" @click="onClientChange">
						<view class="weui-cell__hd">服务对象</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<input class="weui-input" :disabled="true" style="text-align: right"
								placeholder-class="vp-placeholder" placeholder="请选择服务对象" :value="client.name" />
						</view>
					</view>
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">服务地址</view>
						<view class="weui-cell__bd">
							<input class="weui-input" name="receiveAddress" style="text-align: right"
								placeholder-class="vp-placeholder" placeholder="请填写服务所在地址"
								v-model="order.receiveAddress" />
						</view>
					</view>
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">联系电话</view>
						<view class="weui-cell__bd">
							<input class="weui-input" type="number" name="tel" style="text-align: right"
								placeholder-class="vp-placeholder" placeholder="请填写您的联系电话" v-model="order.tel" />
						</view>
					</view>
				</view>
			</view>

			<view class="pub-box">
				<view class="pub-box-tt">服务需求</view>
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__bd">
							<textarea name="demand" auto-height placeholder="请简单描述您要就诊的科室.."
								placeholder-class="vp-placeholder" style="min-height: 150rpx" v-model="order.demand" />
						</view>
					</view>
				</view>
			</view>
		</block>
		<view style="height: 300rpx"></view>
		<!-- 悬浮提交按钮 -->
		<view class="vp-foot">
			<view style="background: #ffffff; padding: 20rpx">
				<view class="xieyi" style="text-align: center">
					<text :class="'is_xieyi ' + (is_xieyi ? 'is_xieyi_on' : '')" @click="onXieyiChange">我已阅读并同意</text>
					<navigator :url="cfg.page_xy">《用户协议》</navigator>
					<text>和</text>
					<navigator :url="cfg.page_fw">《服务协议》</navigator>
				</view>
				<view>
					<button :class="'btnp ' + (is_xieyi ? '' : 'btnp-disabled')" @click="submit">
						确认下单
						<block v-if="order.price > 0">（支付{{ order.price }}元）</block>
					</button>
				</view>
			</view>
		</view>
	</view>
	<!-- 占位 -->
	<view style="height: 30rpx"></view>
	<!-- 悬浮提交按钮 -->
	<view class="vp-foot">
		<view style="background: #ffffff; padding: 20rpx">
			<view class="xieyi" style="text-align: center">
				<text :class="'is_xieyi ' + (is_xieyi ? 'is_xieyi_on' : '')" @click="onXieyiChange">我已阅读并同意</text>
				<navigator :url="cfg.page_xy">《用户协议》</navigator>
				<text>和</text>
				<navigator :url="cfg.page_fw">《服务协议》</navigator>
			</view>
			<view>
				<button :class="'btnp ' + (is_xieyi ? '' : 'btnp-disabled')" @click="submit">
					确认下单
					<block v-if="order.price > 0">（支付{{ order.price }}元）</block>
				</button>
			</view>
		</view>
		<uni-popup ref="popup" type="center" :is-mask-click = "false" background-color="#fff">
			<view class="popup-content">
				<view class="group">
					<input class="uni-input" type="tel" v-model="validMobile.phone" placeholder="手机号">
				</view>
				<view class="group">
					<input class="uni-input" v-model="validMobile.validCode" placeholder="验证码">
					<text class="valid-text" @click="countdownChange">{{countdown.validText}}</text>
				</view>
			</view>
			<view class="btns">
				<view class="cancal" @click="cancal">取消</view>
				<view class="ok" @click="ok">确定</view>
			</view>
		</uni-popup>
	</view>

</template>

<script setup>
	import {
		ref,
		reactive,
		computed,
		onBeforeMount,
		toRaw
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'

	const app = getApp()


	onLoad((options) => {
		main_load(options)
	})

	//定义页面详情数据
	const service = ref([])
	//医院的数据
	const hospitals = ref([])
	//选中的医院的索引
	const hospital_index = ref([])
	//定义订单数据
	const order = reactive({
		price: '',
		starttime: '',
		address: {
			userName: '',
			cityName: '',
			countyName: '',
			detailInfo: ''
		},
		receiveAddress: '',
		tel: '',
		demand: '',
	})
	//定义陪诊人数据
	const client = reactive({
		name: ''
	})
	//定义是否选中协议
	const is_xieyi = ref(false)

	//开发用的临时变量
	const cfg = reactive({
		page_xy: '',
		page_fw: ''
	})
	//定义弹窗控制变量
	const popup = ref()
	//定义手机验证
	const validMobile = reactive({
		phone: '',
		validMobile: ''
	})
	//
	const countdown = reactive({
		validText: '获取验证码',
		time:60
	})







	//===============================================================================================
	const main_load = (options) => {
		app.globalData.utils.request({
			url: '/Service/order',
			data: {
				svid: options.svid,

			},
			success: res => {
				service.value = res.data.service
				hospitals.value = res.data.hospitals
				//默认医院的选中
				const hospitalsData = toRaw(hospitals.value)
				if (options.hid > 0) {
					//设置自动选中
					for (let i = 0; i < hospitalsData.length; i++) {
						if (hospitalsData[i].id == options.hid) {
							hospital_index.value = i
							order.price = hospitalsData[i].service_price
							break;
						}
					}
				}
			}
		})
	}
	//点击弹出服务提醒
	const handleTap = () => {

	}
	//改变医院的数据
	const onHospitalChange = (e) => {
		const value = parseInt(e.detail.value)
		hospital_index.value = value
		order.price = toRaw(hospitals.value)[value].service_price
	}
	//修改日期的回调
	const onStartTimeChanged = (e) => {
		order.starttime = e.detail.value
	}
	//选择就诊人
	const onClientChange = () => {
		uni.navigateTo({
			url: '/pages/clients/index?act=select'
		})
	}
	//定义监听全局的自定义事件
	uni.$on('clientChange', (data) => {
		client.name = data.name
		client.id = data.user_id
		client.sex = data.sex
		client.age = data.age
		client.mobile = data.mobile
	})

	const onXieyiChange = () => {
		is_xieyi.value = !is_xieyi.value
	}

	//选择送货地址回调
	const onAddressChange = () => {
		uni.chooseAddress({
			success: res => {
				order.address.userName = res.userName
				order.address.cityName = res.cityName
				order.address.countyName = res.countyName
				order.address.detailInfo = res.detailInfo
			},
			fail: res => {
				console.log(res, 'err')
			}
		})
	}

	//下单回调
	const submit = () => {
		if (!is_xieyi.value) {
			return uni.showToast({
				title: '请先阅读并同意用户协议和服务协议',
				icon: 'none',
				duration: 1000
			})
		}

		const orderData = toRaw(order) //把订单数据转为普通对象
		const serviceData = toRaw(service.value) //服务数据
		const hospitalsData = toRaw(hospitals.value) //医院数据
		const clientData = toRaw(client) //就诊人

		//医院的选择校验
		if (serviceData.stype < 100) {
			if (hospital_index.value == 0) {
				return uni.showToast({
					title: '请选择医院',
					icon: 'none',
					duration: 1000
				})
			}
			orderData.hospital_id = hospitalsData[hospital_index.value].id
			orderData.hospital_name = hospitalsData[hospital_index.value].name
		}
		//服务时间
		if (!orderData.starttime) {
			return uni.showToast({
				title: '请选择服务时间',
				icon: 'none',
				duration: 1000
			})
		}
		//若服务类型为陪诊
		if (service.stype == 10 || service.stype == 15 || service.stype == 20) {
			//判断就诊人
			if (!clientData.id) {
				return uni.showToast({
					title: '请选择就诊人',
					icon: 'none',
					duration: 1000
				})
			}
			orderData.client = {}
			orderData.client.age = clientData.age
			orderData.client.mobile = clientData.mobile
			orderData.client.name = clientData.name
			orderData.client.sex = clientData.sex

			//接送地址验证
			if (serviceData.stype == 15) {
				if (!orderData.receiveAddress) {
					return uni.showToast({
						title: '请填写就诊人所在地址',
						icon: 'none',
						duration: 1000
					})
				}
			}
		}
		//若服务类型为代跑取药
		if (service.stype == 30 || service.stype == 40) {
			//判断收件地址
			if (!orderData.address.userName) {
				return uni.showToast({
					title: '请选择收件信息',
					icon: 'none',
					duration: 1000
				})
			}
		}
		//判断联系电话
		if (!orderData.tel) {
			return uni.showToast({
				title: '请填写联系方式',
				icon: 'none',
				duration: 1000
			})
		}
		if(!uni.getStorageSync('token')){
			popup.value.open('center')
		}

	}


	//弹窗===================================================================
	//判断当前用户是否存在
	
	
	const cancal = () => {

	}
	const ok = () => {
		
	}
	let flag = false
	const countdownChange = () => {
		//判断手机号是否填入
		if(!validMobile.phone){
			return uni.showToast({
				title: '请输入手机号',
				icon: 'none',
				duration: 1000
			})
		}
		if(flag) return
		const time = setInterval(()=>{
			if(countdown.time <= 0){
				countdown.validText = '获取验证码'
				countdown.time = 60
				flag = false
				clearInterval(time)
			}else{
				countdown.time -= 1
				 countdown.validText = `剩余${countdown.time}s`
			}
		},1000)
		flag = true
	}
</script>

<style>
	@import './index.css'
</style>