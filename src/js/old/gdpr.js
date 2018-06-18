var gdprConsent = Cookies.get("gdpr-consent");
var accepts = ["Ok, Thanks"];
if(accepts.indexOf(gdprConsent) == -1) {
  $("body").append("<div class='gdpr-consent-form fixed-top alert alert-success' style='display: none;z-index:100343;'><p class='container text-center mb-0'><small>You probably don't care, but <a href='/privacy-policy'>Minafi uses cookies</a>.</small> <button class='gdpr-consent-button btn-primary btn-sm ml-3'>Ok, Thanks</button></p></div>");

  setTimeout(function() {
    $(".gdpr-consent-form").slideDown();
  }, 1000);
}

$("body").on("click", ".gdpr-consent-button", function() {
  var compliance = $(this).text();
  Cookies.set("gdpr-consent", compliance);
  if(accepts.indexOf(compliance) !== -1) {
    Cookies.set("gdpr-consent-time", +(new Date()));
    $(".gdpr-consent-form").slideUp();
  }
});
