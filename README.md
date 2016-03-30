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
  <div data-scrall="foo"></div>
  <div data-scrall="bar"></div>
  <div data-scrall="abc"></div>
  <div data-scrall="xyz"></div>
</html>
```
```javascript
<script>
  // Your object must have 2 properties, <params> and <map>
  // <params> containing a {Array} of parameters (optional)
  // <map> thats contains a {object} with each property name equals
  //       your data-scrall element attribute (required)
  
  var obj = {
    params: ['my','array','of','params'],
    map: {
      foo: function(){},
      bar: function(){},
      abc: function(my,array,of,params),
      xyz: function()
    }
  }
  
  // call scraller
  Scraller(options);
</script>
```

## Support
Chrome, Firefox, Opera, Safari, IE8+

## License
Dual - BSB license and MIT license

