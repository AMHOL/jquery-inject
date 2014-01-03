(function(window, $, undefined) {
  $.fn.inject = function(start, callback) {
    this.each(function(k, v) {
      if ( $.isFunction(callback) ) {
        start = callback.call(this, start, v, k);
      }
    });
    return start;
  };
})(this, jQuery);
