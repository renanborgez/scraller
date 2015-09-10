# Scraller 
Minimalist lib. Thats make easy to call a function when a element is scrolled into view.

## Demonstration
http://renan.ninja/scraller/

## Usage
<html>
	<div data-scrall="foo"></div>
	<div data-scrall="bar"></div>
	<div data-scrall="abc"></div>
	<div data-scrall="xyz"></div>
</html>
<script>
	// Your object must have a object with 2 properties
	// <params> thats contains a {Array} of parameters
	// <map> thats contains a {object} with each property name equals your data-scrall element attribute
	
	var obj = {
		params: ['my','array','of','params'],
		map: {
			foo: function(){},
			bar: function(){},
			abc: function(my,array,of,params),
			xyz: function()
		}
	}
</script>

## Support
Chrome, Firefox, Opera, Safari, IE8+

## License
Dual - BDB license and MIT license