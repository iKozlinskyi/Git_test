$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });

  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );

  // Логіка для підрахунку лайків в кнопці лайків
  $(".btn-counter").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      count = $this.attr("data-count"),
      active = $this.hasClass("active"),
      multiple = $this.hasClass("multiple-count");

    $.fn.noop = $.noop;
    $this
      .attr("data-count", !active || multiple ? ++count : --count)
      [multiple ? "noop" : "toggleClass"]("active");
  });

  // Логіка для спливаючого вікна
  $("#liveToastBtn").click(function() {
    console.log('clicked');

    $('#liveToast').toast('show');
  });
});
