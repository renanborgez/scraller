/*! 
scraller - v1.0.0 - 2016-03-30
Renan Borges
https://github.com/renanborgez/scraller
Copyright (c) 2016 - Licensed under BSB license and MIT license
 */
;(function(){

  var inAttributeName = 'data-scrall-in';
  var offUpAttributeName = 'data-scrall-off-up';
  var offDownAttributeName = 'data-scrall-off-down';

  var Scraller = function(options){
    if(options === undefined || options === null){
      throw new Error('Scraller with wrong signature.');
    }

    var _this = this;
    
    this.params = options.params;
    this.mapper = (options.map === undefined || typeof options.map !== "object") ? null : options.map;
    this.elements = document.querySelectorAll('[data-scrall-in], [data-scrall-off-up], [data-scrall-off-down]');

    this.elementPosition = function(element) {
      var elementTopPosition = element.getBoundingClientRect().top;
      var elementBottomPosition = element.getBoundingClientRect().bottom;
      return { top: elementTopPosition, bottom: elementBottomPosition }
    }
    
    this.isOnView = function(element) {
      var position = _this.elementPosition(element);
      return position.top >= 0 && position.bottom <= window.innerHeight;
    };
    
    this.isOffUpView = function(element){
      var position = _this.elementPosition(element);
      return !self.isOnView(element) && position.top >= window.innerHeight;
    };
    
    this.isOffDownView = function(element){
      var position = _this.elementPosition(element);
      return !self.isOnView(element) && position.bottom <= window.innerHeight;
    };

    this.runScroll = function(){
      
      var elements = _this.elements;
      var l = elements.length;
      
      if (l === 0) {
        return;
      }
      
      for(var i = 0; i < l; i++){
        var inFunction = _this.mapper[elements[i].getAttribute(inAttributeName)];
        var offUpFunction = _this.mapper[elements[i].getAttribute(offUpAttributeName)];
        var offDownFunction = _this.mapper[elements[i].getAttribute(offDownAttributeName)];
        
        if(_this.isOnView(elements[i])){
          inFunction.apply(this, _this.params);
        }
        
        if(_this.isOffUpView(elements[i])){
          offUpFunction.apply(this, _this.params);
        }
        
        if(_this.isOffDownView(elements[i])){
          offDownFunction.apply(this, _this.params);
        }
      }
      
    };
    
    window.onscroll = this.runScroll;
    this.runScroll();
  };
  window.Scraller = Scraller;
})();