# Email Obfuscator JS — Email Anti-Spam & Email Hider

Small, dependency-free JavaScript snippets that hide email addresses from spambots while keeping
full `mailto:` functionality for real users.

## How it works

Instead of putting the address straight into the HTML (`<a href="mailto:user@domain.com">`), the
address is assembled by JavaScript after the page loads. Bots that scrape static HTML never see a
complete address.

## Files

- `email-obfuscator-display-email.js` — creates the link and shows the full address as its text.
- `email-obfuscator-text-link.js` — keeps your own link text, only fills in the `href`.

## Usage

Both files are self-contained: edit the two variables at the top, then include the file where the
link should appear (just before `</body>`, so the element already exists).

```js
var user = "yourname";
var site = "yourdomain.com";
```

### 1. Show the full address as link text

```html
<script src="email-obfuscator-display-email.js"></script>
```

The link is inserted in place of the script tag, so the include position decides where it lands.

### 2. Keep your own link text

```html
<a id="kontaktLink" href="#">Contact us</a>
<script src="email-obfuscator-text-link.js"></script>
```

The `id` must match the one used in the script (`kontaktLink` by default).

## Requirements

No dependencies, no build step, no framework. Any browser with JavaScript enabled. The address
appears in the page source only in pieces, never as a full `mailto:` string.

## Limitations

This defeats static scrapers and simple crawlers, not headless browsers that execute JavaScript. It
raises the cost of harvesting an address; it is not bulletproof.

## License

Apache License 2.0 — see [LICENSE](LICENSE).
