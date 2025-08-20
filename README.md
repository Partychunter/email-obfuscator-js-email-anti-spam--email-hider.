# email-obfuscator-js-email-anti-spam--email-hider.
Simple JavaScript to hide email addresses from spambots while maintaining full 'mailto:' link functionality.
Tytuł projektu

Np. # JavaScript Email Obfuscator
Krótki opis

"Proste i lekkie skrypty JavaScript zaprojektowane w celu ukrywania adresów e-mail przed robotami spamującymi, przy jednoczesnym zachowaniu pełnej funkcjonalności linku mailto: dla użytkowników."
Funkcjonalność

    Ukrywanie e-maila: Skrypty dynamicznie generują adres e-mail, co utrudnia botom indeksowanie.

    Pełna funkcjonalność mailto:: Po kliknięciu w link, użytkownik może wysłać wiadomość e-mail.

    Dwie wersje: Dostępne są dwie wersje skryptu, w zależności od potrzeb: jedna dla ukrytego tekstu linku, druga dla wyświetlania pełnego adresu e-mail.

Jak to działa?

"Zamiast umieszczać adres e-mail bezpośrednio w kodzie HTML (np. <a href="mailto:user@domain.com">), skrypty dzielą adres na części (np. user i domain) i składają go dopiero po załadowaniu strony przez przeglądarkę. Boty, które parsają statyczny kod HTML, nie są w stanie złożyć pełnego adresu."
Instalacja i użycie

Wersja 1: Zdefiniowany wcześniej tekst linku (email-obfuscator-text-link.js)

    HTML: Umieść element <a> z unikalnym id, np. kontaktLink, i dowolnym tekstem.

    JavaScript: Wklej poniższy kod do swojego pliku HTML (przed </body>) lub do oddzielnego pliku .js i załaduj go na stronie.
    code Html

    IGNORE_WHEN_COPYING_START
    IGNORE_WHEN_COPYING_END

        
    <a id="kontaktLink" href="#">Skontaktuj się z nami</a>

    <script LANGUAGE="JavaScript">
      var user = "twojanazwa"; // Zmień na swoją nazwę użytkownika (przed @)
      var site = "twojadomena.com"; // Zmień na swoją domenę (po @)
      var emailLink = "mailto:" + user + "@" + site;
      var kontaktLink = document.getElementById("kontaktLink");
      kontaktLink.href = emailLink;
    </script>

      

    Wskazówka: Zastąp twojanazwa i twojadomena.com swoimi danymi.

Wersja 2: Wyświetlająca adres e-mail (email-obfuscator-display-email.js)

    JavaScript: Wstaw ten skrypt bezpośrednio w miejscu, gdzie chcesz wyświetlić i ukryć adres e-mail.
    code Html

IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END

    
<script LANGUAGE="JavaScript">
  var user = "twojanazwa"; // Zmień na swoją nazwę użytkownika (przed @)
  var site = "twojadomena.com"; // Zmień na swoją domenę (po @)

  document.write('<a href=\"mailto:' + user + '@' + site + '\">');
  document.write(user + '@' + site + '</a>');
</script>

  

Wskazówka: Zastąp twojanazwa i twojadomena.com swoimi danymi.
