# App Interface

![Interface van de app](https://raw.githubusercontent.com/basv1996/progressive-web-apps-2122/main/docs/img/MovieDataBase_homescreen.png)

# Link naar de app
:globe_with_meridians: [Link naar live app](https://progressive-web-apps-2122.herokuapp.com/) 

## Table of Contents
- [App interface](#app-interface)
- [Link naar de app](#link-naar-de-app)
- [Inhoudsopgave](#table-of-contents)
- [De Opdracht](#de-opdracht)
- [Doelen van het vak](#doelen-bij-dit-vak)
- [Server Side & Client Side rendering](#server-side--client-side-renderen)
- [Activity Diagram](#activity-diagram)
- [Manifest](#create-a-manifest)
- [Critical Render Pad](#het-verbeteren-van-het-critical-render-pad)
- [De server aan krijgen](#hoe-krijg-je-de-server-aan)

# De Opdracht
"In deze cursus gaan we de eerder gemaakte Web App From Scratch client side webapplicatie omzetten naar een serverside rendered applicatie. Ook voegen we functionaliteiten toe op basis van de Service Worker en maken we van de applicatie een Progressive Web App. Uiteindelijk gaan we een reeks optimalisaties  implementeren om de prestaties van de applicatie te verbeteren."

## Doelen bij dit vak
Na het afsluiten van dit vak kan je het volgende:
After finishing this program you can:
- _Dealen met server side renderen;_
- _Het implementeren van een Service Worker;_
- _Het verbetren van het kritieke pad voor een betere runtime of perceived perfermonance._


## Server Side & Client Side renderen
Bij server-side rendering worden webpagina's voorbereid om te worden weergegeven door de server in plaats van door de browser van de gebruiker. Dit is het tegenovergestelde van client-side rendering. Dit proces bereidt de pagina voor op weergave aan de gebruikerskant. Het implementeren van server-side rendering biedt met name voordelen voor zoekmachineoptimalisatie (SEO) en laadsnelheid.

## Activity Diagram

![Activity Digram](https://raw.githubusercontent.com/basv1996/progressive-web-apps-2122/main/docs/img/FlowChart_PWA_V1.0.png)


# Create a manifest

De web app manifest is een JSOn bestand die de browser verteld over je PWA. Het verteld hoe het zich moet gedragen als de PWA wordt gedownload op de gebruiker desktop of mobiel. Een manifest heeft in het bestand staan wat de naam van de app is, welke iconen gebruikt moeten worden en welke URL er geopend moet worden als de app wordt gestart.

Een manifest bestand wordt meestal <code>manifest.json</code> genoemd.

De volgende keys heb je nodig voor je manifest bestand:
1. short_name of de naam
2. short_name
3. icons
4. start_url
5. display
6. orientation
7. background_color
8. theme_color

Het manifest bestand kan je toevoegen in je head. Je voegt hem toe met de `link` tag.

```
<link rel="manifest" href="/manifest.json">
```

<details>
<summary>Bronnen:</summary>
https://web.dev/add-manifest/#:~:text=The%20web%20app%20manifest%20is,when%20the%20app%20is%20launched.
</details>

# Service worker
Met een `service worker`, een script dat op de achtergrond in je browser draait, waarmee je dingen kan doen zonder gebruikersinteractie — kan je bijvoorbeeld push notifications gebruiken, data offline opslaan en synchroniseren als er een netwerkverbinding is.

# het verbeteren van het critical render pad
## Cache Headers
Een effectieve implementatie van de cachingstrategie kan de veerkracht van de Express-app aanzienlijk verbeteren en kosten besparen. Wanneerje de juiste cachingstrategieën in combinatie met een content delivery network (CDN) implementeert, kan de website enorme pieken in het verkeer opvangen zonder toename van de serverbelasting.

## Compressie Extensie
Retourneert de compressie-middleware met behulp van de gegeven opties. De middleware zal proberen om response bodies te comprimeren voor alle verzoeken die door de middleware gaan, op basis van de gegeven opties.

Deze middleware zal nooit reacties comprimeren die een Cache-Control-header bevatten met de no-transform-richtlijn, omdat comprimeren de body zal transformeren.

## Font-display
Met de property `font-display: swap` kan je voor een fallback zorgen. Als het exeterne font nog niet ingeladen zal eerst het standaard font worden getoond zodat er content op de pagina aanwezig is. met de `swap` property geeft het lettertype een extreem kleine blokperiode en een oneindige wisselperiode.


# Hoe krijg je de server aan
#### Installatie
om deze app te installeren heb je `NodeJS` en `NPM` nodig op jou apparat.

##### Hoe te installeren op jouw machine

Clone deze repo naar je pc met het volgende commando

```
git clone https://github.com/basv1996/progressive-web-apps-2122.git
```
Type in de command line het volgende om te downloaden 

```
npm install
```
Dit zal alle packages die je nodig hebt voor deze applicatie installeren


#### Het starten van de server
De applicatie zou automatisch moeten starten, zo niet probeer dan het volgende

```bash
npm run start
```
De applicatie zal op poort 3000 runnen. Je gaat dus naar localhost:3000












<!-- Here are some hints for your project! -->

<!-- Start out with a title and a description -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- ☝️ replace this description with a description of your own work -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- ...you should implement an explanation of client- server rendering choices 🍽 -->

<!-- ...and an activity diagram including the Service Worker 📈 -->

<!-- This would be a good place for a list of enhancements to optimize the critical render path implemented your app  -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- We all stand on the shoulders of giants, please link all the sources you used in to create this project. -->

<!-- How about a license here? When in doubt use GNU GPL v3. 📜  -->
