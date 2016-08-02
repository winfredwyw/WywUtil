// ��������
var appUtil = {
	// ����key��ȡurl����value
	getQueryString: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}, 
	//��ȡ����ʣ������
	getDayDiff: function() {
		var nowDate = new Date(),
			nowDateYDM = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate(),
			newDate = new Date(nowDateYDM);
		newDate.setDate(newDate.getDate() + 1);
		var ret = ((newDate.getTime() - nowDate.getTime()) / 1000).toFixed(0);
		return parseInt(ret);
	},
	//���������
	getRandomNum: function(Min, Max) {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}
}