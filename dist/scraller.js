/*! 
scraller - v1.1.0 - 2016-03-31
Renan Borges
https://github.com/renanborgez/scraller
Copyright (c) 2016 - Licensed under BSB license and MIT license
 */
;(function(){
  var Scraller = function(options){
    if(options === undefined || options === null){
      throw new Error('Scraller with wrong signature.');
    }
    var inAttributeName = 'data-scrall-in';
    var outFromTopAttributeName = 'data-scrall-out-top';
    var outFromBottomAttributeName = 'data-scrall-out-bottom';
    
    var _this = this;
    
    this.params = options.params;
    this.mapper = (options.map === undefined || typeof options.map !== "object") ? null : options.map;
    this.scrallElements = document.querySelectorAll('[' + inAttributeName + '], [' + outFromBottomAttributeName + '], [' + outFromTopAttributeName + ']');

    this.elementPosition = function(element) {
      var elementTopPosition = element.getBoundingClientRect().top;
      var elementBottomPosition = element.getBoundingClientRect().bottom;
      return { top: elementTopPosition, bottom: elementBottomPosition }
    }
    
    this.isOnView = function(element) {
      var position = _this.elementPosition(element);
      return position.top >= 0 && position.bottom <= window.innerHeight;
    };
    
    this.comesOutFromTop = function(element){
      var position = _this.elementPosition(element);
      return !self.isOnView(element) && position.bottom < 0;
    };
    
    this.comesOutFromBottom = function(element){
      var position = _this.elementPosition(element);
      return !self.isOnView(element) && position.top < window.innerHeight;
    };

    this.runScroll = function(){
      
      var elements = _this.scrallElements;
      var l = elements.length;
      
      if (l === 0) {
        return;
      }
      
      for(var i = 0; i < l; i++){
        var element = elements[i];
        var seen = element.dataset.seen;
        
        var inFunction = _this.mapper[elements[i].getAttribute(inAttributeName)];
        var outFromTopFunction = _this.mapper[elements[i].getAttribute(outFromTopAttributeName)];
        var outFromBottomFunction = _this.mapper[elements[i].getAttribute(outFromBottomAttributeName)];
        
        if(_this.isOnView(elements[i]) && inFunction){
          inFunction.apply(this, _this.params);
          element.dataset.seen = true;
        }
        
        if(_this.comesOutFromTop(elements[i]) && !!outFromTopFunction && seen == "true"){
          outFromTopFunction.apply(this, _this.params);
          element.dataset.seen = false;
        }
        
        if(_this.comesOutFromBottom(elements[i]) && !!outFromBottomFunction && seen == "true"){
          outFromBottomFunction.apply(this, _this.params);
          element.dataset.seen = false;
        }
      }
      
    };
    
    window.onscroll = this.runScroll;
    this.runScroll();
  };
  window.Scraller = Scraller;
})();
