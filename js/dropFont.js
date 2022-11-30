(function($) {
  $.fn.dropFont = function(distance) {
    let style = "";
    for (let d = 0; d <= distance; d++) {
      style += `-${d}px ${d}px 0px var(--drop-color)`
      if (d != distance)
        style += `, `;
      }
      $(this).css("text-shadow", style);
      return this;
    };
})(jQuery);
