(function () {
  var params = new URLSearchParams(window.location.search);
  var fields = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    fields.forEach(function (key) {
      var input = form.querySelector('input[name="' + key + '"]');
      if (input && params.get(key)) input.value = params.get(key);
    });
    var page = form.querySelector('input[name="page"]');
    if (page && params.get("source") && !page.dataset.keep) {
      page.value = page.value + ":" + params.get("source");
    }
  });
})();
