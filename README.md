# Scraller  [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/renanborgez/scraller/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
Minimalist lib. Thats make easy to call a function when a element is scrolled into view.
* No jquery
* No dependencies
* 1kb minified

## Demonstration
http://renan.ninja/scraller/

## Usage
```html
<html>
  <div data-scrall-in="foo" data-scrall-out-top="outFromTop"></div>
  <div data-scrall-in="bar"></div>
  <div data-scrall-in="abc"></div>
  <div data-scrall-in="xyz" data-scrall-out-bottom="outFromBottom"></div>
</html>
```
```javascript
<script>
  // Your object must have 2 properties, <params> and <map>
  // <params> containing a {Array} of parameters (optional)
  // <map> thats contains a {object} with each property name equals
  //       your data-scrall's element attribute's
  
  var obj = {
    params: ['my','array','of','params'],
    map: {
      foo: function(){},
      bar: function(){},
      abc: function(my,array,of,params),
      xyz: function(),
      outFromTop: function(params){alert('First element is out to up of view');},
      outFromBottom: function(params){alert('Last element is out to down of view');}
    }
  }
  
  // call scraller
  Scraller(options);
</script>
```

When the element has ```data-scrall-in``` the function with this property value is called from map object when element is visible on screen.

When the element has ```data-scrall-out-top``` the function with this property value is called from map object when element gets invisible on screen leaving from top of page.

When the element has ```data-scrall-out-bottom``` the function with this property value is called from map object when element gets invisible on screen leaving from bottom of page.


## License
Dual - BSB license and MIT license

