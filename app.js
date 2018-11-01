
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
			var navHandler = "onNavigate"+ target.charAt(0).toUpperCase() + target.slice(1);
			if(this[navHandler]) this[navHandler]();
		}
	}
});

onload = function() {
	console.log(location.hash)
	if(location.hash && location.hash != "#home") app.navigate(location.hash, false);
};

onpopstate = function(event) {
	app.navigate(event.state.target, false); 
};

