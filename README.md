jQuery-inject
=============

Ruby-like inject for jQuery

h2. Usage

```jquery
$([1, 2, 3]).inject(0, function(sum, n) { return sum + n; }); // => 6
$([{ length: 1 }, { length: 2 }, { length: 3 }]).inject(0, function(sum) { return sum + this.length; }); // => 6
$('li').inject(0, function(sum) { return sum + $(this).outerWidth(); }); # => Combined outerwidth of all li tags
