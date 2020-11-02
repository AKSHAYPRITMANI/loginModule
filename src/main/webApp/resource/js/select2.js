(function($) {
  'use strict';

  if ($(".js-loginmodule-basic-single").length) {
    $(".js-loginmodule-basic-single").select2();
  }
  if ($(".js-loginmodule-basic-multiple").length) {
    $(".js-loginmodule-basic-multiple").select2();
  }
})(jQuery);