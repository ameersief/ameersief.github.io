(function () {
  var host = window.location.hostname.toLowerCase();
  var isCustomDomain = host === "ameer-sief.com" || host === "www.ameer-sief.com";
  if (!isCustomDomain) return;

  var canonicalHost = "www.ameer-sief.com";
  var needsHttps = window.location.protocol !== "https:";
  var needsCanonicalHost = host !== canonicalHost;

  if (needsHttps || needsCanonicalHost) {
    window.location.replace(
      "https://" + canonicalHost + window.location.pathname + window.location.search + window.location.hash,
    );
  }
})();
