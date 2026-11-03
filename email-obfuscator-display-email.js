// Edit these two lines, then include this file where the link should appear:
// <script src="email-obfuscator-display-email.js"></script>
var user = "yourname";
var site = "yourdomain.com";

var link = document.createElement("a");
link.href = "mailto:" + user + "@" + site;
link.textContent = user + "@" + site;

// Insert the link in place of the script tag; fall back to end of body.
var self = document.currentScript;
if (self && self.parentNode) {
  self.parentNode.insertBefore(link, self.nextSibling);
} else {
  document.body.appendChild(link);
}
