// Requires a link with a unique id, e.g. <a id="kontaktLink" href="#">Contact us</a>
// Edit these two lines, then include this file in your page:
// <script src="email-obfuscator-text-link.js"></script>
var user = "yourname";
var site = "yourdomain.com";

var kontaktLink = document.getElementById("kontaktLink");
if (kontaktLink) {
  kontaktLink.href = "mailto:" + user + "@" + site;
}
