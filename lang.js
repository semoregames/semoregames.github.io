// Dil seçimi: önce kayıtlı tercih, yoksa tarayıcı dili (Türkçe değilse İngilizce)
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("semore-lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "en").toLowerCase().indexOf("tr") === 0 ? "tr" : "en");

  function apply(l) {
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l);
    var buttons = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-set") === l ? "true" : "false");
    }
    var t = document.querySelector('meta[name="title-' + l + '"]');
    if (t) document.title = t.getAttribute("content");
  }

  apply(lang);
  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    var buttons = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        lang = this.getAttribute("data-set");
        try { localStorage.setItem("semore-lang", lang); } catch (e) {}
        apply(lang);
      });
    }
  });
})();
