/*! 
scraller - v1.0.0 - 2015-09-09
Renan Borges
https://github.com/renanborgez/scraller
Copyright (c) 2015 - Licensed under BSB license and MIT license
 */
/*!
 * Scraller plugin
 * Author: @renanborgez
 * Website: https://github.com/renanborgez/scraller
 * Licensed under the Dual license - BSB license and MIT license
 */
;(function(){
	var attributeName = 'data-scrall';
	var Scraller = function(options){
		if(options === undefined || options === null){
			console.log('Wrong function signature.');
			return;
		}
		var self = this;
		this.params = options.params;
		this.mapper = (options.map === undefined || typeof options.map !== "object") ? null : options.map;
		this.elements = document.querySelectorAll('[' + attributeName + ']');	
		this.isOnView = function(element) {
			var elementTopPosition = element.getBoundingClientRect().top;
			var elementBottomPosition = element.getBoundingClientRect().bottom;
			return elementTopPosition >= 0 && elementBottomPosition <= window.innerHeight;
		};
		this.runScroll = function(){
			var elements = self.elements;
			var l = elements.length;
			if (l === 0) {
				return;
			}
			for(var i = 0; i < l; i++){
				var func = self.mapper[elements[i].getAttribute(attributeName)];
				if(self.isOnView(elements[i])){
					func.apply(this, self.params);
				}
			}
		};
		window.onscroll = this.runScroll;
		this.runScroll();
	};
	window.Scraller = Scraller;
})();