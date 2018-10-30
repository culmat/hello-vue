
var app = new Vue({
	el : '#app',
	data : {
		nav : { about : false, home : true}
	},
	methods : {
		navigate : function(target, pushState = true) {
			if(target.startsWith("#")) target = target.substr(1)
			if(pushState) history.pushState({target:target}, target, "#"+target);
			for ( var property in this.nav) {
				this.nav[property] = (property == target);
			}
		}
	}
});

onload = function() {
	console.log(location.hash)
	if(location.hash && location.hash != "#home") app.navigate(location.hash, false);
};



