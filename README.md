# email-obfuscator-js-email-anti-spam--email-hider.
Simple JavaScript to hide email addresses from spambots while maintaining full 'mailto:' link functionality.

Project title

email-obfuscator-js-email-anti-spam--email-hider.

Description

"Simple and lightweight JavaScript scripts designed to hide email addresses from spambots while maintaining full mailto: link functionality for users.

Hiding Email: Scripts dynamically generate email addresses, making it difficult for bots to crawl them.

Full mailto: functionality: After clicking the link, the user can send an email.

Two Versions: Two versions of the script are available, depending on your needs: one for hiding the link text, the other for displaying the full email address.

How does it work?

"Instead of embedding the email address directly into the HTML code (e.g., <a href="mailto:user@domain.com">), scripts break the address into parts (e.g., user and domain) and reassemble it only after the browser loads the page. Bots that parse static HTML are unable to reassemble the full address."

Installation and use

Version 1: Predefined link text(email-obfuscator-text-link.js)

HTML: Place an <a> element with a unique id, e.g. contactLink, and any text.


 // <html>
   // <a id="kontaktLink" href="#">Contact us</a>
//</html>
   // <script LANGUAGE="JavaScript">
     // var user = "yourname"; 
      //var site = "yourdomin"; 
     // var emailLink = "mailto:" + user + "@" + site;
     // var kontaktLink = document.getElementById("kontaktLink");
      //kontaktLink.href = emailLink;
   // </script>

      

Version 2: Displaying email address (email-obfuscator-display-email.js)

JavaScript: Insert this script directly where you want to display or hide your email address.


//<script LANGUAGE="JavaScript">
  //var user = "yourname"; 
  //var site = "yourdomin"; 

 // document.write('<a href=\"mailto:' + user + '@' + site + '\">');
 // document.write(user + '@' + site + '</a>');
// </script>

  
