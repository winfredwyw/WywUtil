// 辅助方法
var appUtil = {
	// 根据key获取url参数value
	getQueryString: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}, 
	//获取当天剩余秒数
	getDayDiff: function() {
		var nowDate = new Date(),
			nowDateYDM = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate(),
			newDate = new Date(nowDateYDM);
		newDate.setDate(newDate.getDate() + 1);
		var ret = ((newDate.getTime() - nowDate.getTime()) / 1000).toFixed(0);
		return parseInt(ret);
	},
	//产生随机数
	getRandomNum: function(Min, Max) {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}
}