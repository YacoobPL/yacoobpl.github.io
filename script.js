function toggleBurgerMenu() {
    var menu = document.querySelector('.burger-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Get the modal
var postModal = document.getElementById('postModal');
if (postModal) {

    var forumInfo = {
        'Urban Gardening Standort im Brunnenviertel gesucht' : {
            Benutzername: 'OttakringsNextGrätzlgärtnerin',
            Datum: '1. Juni 2024',
            Nachricht: 'Hallo zusammen! Ich würde sehr gerne ein Urban Gardening Projekt in meinem Grätzl Brunnenviertel in 1160 starten. Kennt jemand eine ungenutzte Fläche, die man in einen kleinen Gemeinschaftsgarten verwandeln kann? Und hat jemand Erfahrung mit ähnlichen Projekten und/oder Interesse, mitzumachen?  Ich freue mich auf eure Rückmeldungen und Tipps!',
            Kommentare: [
                {
                    Benutzername: 'WildBiene123',
                    Datum: '2. Juni 2024',
                    Nachricht: 'Hi, OttakringsNextGrätzlgärtnerin! Das klingt nach einer tollen Idee. Ich betreibe selbst Urban Gardening und habe letztes Jahr mit ein paar Nachbar*innen einen kleinen Gemeinschaftsgarten angelegt. Kann gerne meine Erfahrungen zum unserem Urban Gardening Projekt in Meidling mit dir teilen und du bist eingeladen, auch mal vorbei zu kommen!'
                },
                {
                    Benutzername: 'Pflanzenfreund90',
                    Datum: '3. Juni 2024',
                    Nachricht: 'Hallo! Ich wohne in der Nähe und würde auch gerne mitmachen. Ich bin Student der Landschaftsplanung und Garteln gehört zu meinen Hobbys. Ich könnte mich auch in meinem Bekanntenkreis umhören, um mehr Leute ins Beet zu holen. ;-)'
                }
            ]
        },
        'Suche Werkzeug für Renovierungsprojekt!' : {
            Benutzername: 'PeterParklet',
            Datum: '10. Juni 2024',
            Nachricht: 'Hallo Nachbar*innen im Grätzl Piaristenviertel, ich bin dabei ein Parklet zu renovieren und benötige dafür verschiedene Werkzeuge, insbesondere eine Bohrmaschine und eine Schleifmaschine, da meine kurzfristig den Geist aufgegeben haben.  Hat jemand von euch solche Werkzeuge, die ich mir für ein paar Tage ausleihen könnte? Vielen Dank im Voraus!',
            Kommentare: [
                {
                    Benutzername: 'HeimwerkerinHannah',
                    Datum: '11. Juni 2024',
                    Nachricht: 'Hallo Peter, ich habe eine Bohrmaschine, die du dir gerne ausleihen kannst. Gerne kann ich sie dir zum Parklet vorbeibringen und dir auch helfen, falls du Unterstützung brauchst.'
                },
                {
                    Benutzername: 'Thomas',
                    Datum: '11. Juni 2024',
                    Nachricht: 'Hi du, ich habe eine Schleifmaschine, die ich momentan nicht benötige. Ich wohne in der Nähe der Josefstädter Straße, kannst sie jederzeit abholen.'
                }
            ]
        },
        'Suche Helfer*innen für Gemeinschaftsgarten' : {
            Benutzername: 'GartenGuru1150',
            Datum: '15. Juni 2024',
            Nachricht: 'Hallo liebe Nachbar*innen von Sechshaus. Wir haben ein ungenutztes Grundstück in unserer Nachbarschaft, das wir in einen Gemeinschaftsgarten verwandeln könnten. Wer hat Interesse, an diesem Projekt mitzuwirken? Wir brauchen Hilfe bei der Planung, dem Anlegen der Beete und der Pflege des Gartens. Jeder ist willkommen!',
            Kommentare: [
                {
                    Benutzername: 'PflanzenProfi',
                    Datum: '16. Juni 2024',
                    Nachricht: 'Hallo GartenGuru1150, ich bin Hobbygärtner, wohne selbst in Sechshaus und würde gerne mitmachen. Wann können wir uns treffen, um die ersten Schritte zu planen?'
                },
                {
                    Benutzername: 'GrünDaumen',
                    Datum: '16. Juni 2024',
                    Nachricht: 'Hi, ich finde die Idee großartig und bin auf jeden Fall dabei. Ich kann bei der Planung helfen und habe auch ein paar Pflanzen, die wir verwenden könnten.'
                }
            ]
        },
        'Wie kann ich ein Graffiti-Projekt umsetzen?' : {
            Benutzername: 'KunstKreativ',
            Datum: '10. Juni 2024',
            Nachricht: 'Liebe Leute, ich bin Künstler und habe Lust, ein Graffiti-Projekt ins Leben zu rufen, um eine triste Unterführung  in unserem Grätzl zu verschönern. Wie kann man das auf legalem Wege in die Wege leiten? Hat jemand (vielleicht sind hier weitere Künstler*innen unter uns?) Erfahrung mit einem ähnlichen Projekt und möchte sich mit mir kurzschließen?',
            Kommentare: [
                {
                    Benutzername: 'StreetArtFan',
                    Datum: '11. Juni 2024',
                    Nachricht: 'Hallo KunstKreativ, ich kenne einige Grafitti Künstler*innen, die bereits im öffentlichen Raum seitens der Stadt engagiert wurden, zu sprayen . Ich kann dich mit ihnen vernetzen und ihr könnt euch zu dem Prozess austauschen. Finde das eine super Idee von dir!'
                }
            ]
        },
        'Wie können wir einen Gemeinschaftsgarten finanzieren?' : {
            Benutzername: 'GrünDaumen',
            Datum: '10. Juni 2024',
            Nachricht: 'Liebe Grätzlbook Community, wir möchten einen Gemeinschaftsgarten in unserer Nachbarschaft anlegen, aber uns fehlen die finanziellen Mittel. Hat jemand Ideen oder Erfahrungen, wie wir Gelder für das Projekt auftreiben können?',
            Kommentare: [
                {
                    Benutzername: 'FörderProfi',
                    Datum: '11. Juni 2024',
                    Nachricht: 'Hallo GrünDaumen, ihr könnt Förderanträge bei der Stadt Wien stellen und euch dort informieren. Crowdfunding kann auch eine gute Möglichkeit sein, um Geld zu sammeln. Vielleicht könnt ihr auch lokale Unternehmen um Sponsoring bitten.'
                },
                {
                    Benutzername: 'UrbanJungle',
                    Datum: '11. Juni 2024',
                    Nachricht: 'Hi, wir haben für unsere Projekt damals Spendenaktionen wie Kuchenverkäufe und Flohmärkte organisiert, um unseren Gemeinschaftsgarten zu finanzieren. Es hat uns auch geholfen, bei Stadtteilfesten präsent zu sein und für unser Projekt zu werben.'
                },
                {
                    Benutzername: 'GartenFreund',
                    Datum: '18. Juni 2024',
                    Nachricht: 'Hi, aus meiner Erfahrung kann ich sagen, dass es sich auf jeden Fall lohnt, die Förderung der Stadt Wien in Anspruch zu nehmen. Wir haben unser Urban Gardening Projekt so gut finanziert bekommen. Check auf jeden Fall die Seite der MA2412 für die aktuellen Fördermöglichkeiten ab.'
                }
            ]
        },
        'Wer hat Erfahrung mit der Einrichtung eines Co-Working-Spaces?' : {
            Benutzername: 'BüroGenie',
            Datum: '19. Juni 2024',
            Nachricht: 'Hallo Grätzelbook Community, wir überlegen, einen Co-Working-Space in unserem Grätzl im Rembrandtviertel einzurichten, um Freiberuflern und kleinen Unternehmen einen Arbeitsort zu bieten. Hat jemand Erfahrung mit der Einrichtung und dem Betrieb eines solchen Spaces? Worauf müssen wir achten?',
            Kommentare: [
                {
                    Benutzername: 'FlexWorker',
                    Datum: '19. Juni 2024',
                    Nachricht: 'Hi BüroGenie, ich habe bei der Eröffnung eines Co-Working-Spaces mitgeholfen. Wichtig sind gute Internetverbindung, flexible Arbeitsplätze und Gemeinschaftsbereiche. Auch die Nähe zu Cafés und Geschäften kann attraktiv sein. Gerne stehe ich dir für weitere Fragen zur Verfügung.'
                },
                {
                    Benutzername: 'OfficeProfi',
                    Datum: '19. Juni 2024',
                    Nachricht: 'Hallo, wir haben einen Co-Working-Space eingerichtet und haben besonders auf eine gute Ausstattung geachtet: bequeme Möbel, genug Steckdosen, und gute Beleuchtung. Außerdem haben wir regelmäßige Events organisiert, um die Community zu stärken. Es braucht mehr gute Co-working Spaces! Gerne können wir uns vernetzen!'
                }
            ]
        },
        'Biete Material für Kunst- oder Handwerksprojekte' : {
            Benutzername: 'BastelKram',
            Datum: '09. Juni 2024',
            Nachricht: 'Liebe Nachbar*innen und Community, ich habe einige Materialien für Kunstprojekte übrig, die ich gerne spenden würde. Es handelt sich um Farben, Leinwände, Holzplatten und andere Materialien. Wenn ihr ein Kunstprojekt in eurem Grätzl plant, meldet euch!',
            Kommentare: [
                {
                    Benutzername: 'Künstler*innenKollektiv',
                    Datum: '10. Juni 2024',
                    Nachricht: 'Hallo BastelKram, wir planen eine Ausstellung und eine Kunstinstallation in unserem Grätzl und könnten die Materialien gut gebrauchen. Wie können wir die Abholung organisieren?'
                }
            ]
        },
        'Biete Raum für Nachbarschaftstreffen, Workshops etc.' : {
            Benutzername: 'RaumVerteiler',
            Datum: '14. Juni 2024',
            Nachricht: 'Liebe Nachbar*innen, wir haben in unserem Gebäude in der Vogelsanggasse einen großen Raum, den wir gerne für Nachbarschaftstreffen, Workshops und andere Projekte zur Verfügung stellen möchten. Der Raum ist ausgestattet mit Tischen, Stühlen und einem Beamer. Bei Interesse meldet euch!',
            Kommentare: [
                {
                    Benutzername: 'GreenFuture',
                    Datum: '14. Juni 2024',
                    Nachricht: 'Hallo RaumVerteiler, ich plane einen Workshop zum Thema nachhaltiges Bauen und könnte den Raum gut nutzen. Was sind die Konditionen für die Nutzung?'
                },
                {
                    Benutzername: 'Nachbar_schafft',
                    Datum: '17. Juni 2024',
                    Nachricht: 'Hi, wir suchen einen Raum für regelmäßige Nachbarschaftstreffen. Wie oft kann der Raum genutzt werden und gibt es bestimmte Regeln?'
                }
            ]
        },
        'Biete Hilfe bei der Beantragung von Fördermitteln für Nachbarschaftsprojekte' : {
            Benutzername: 'FörderFachfrau',
            Datum: '16. Juni 2024',
            Nachricht: 'Liebe Community von Grätzlbook, ich habe Erfahrung in der Beantragung von Fördermitteln und biete meine Unterstützung bei der Erstellung von Anträgen für eure Nachbarschaftsprojekte an. Egal ob für Co-Working-Spaces, Gemeinschaftsgärten oder Kulturprojekte – ich helfe euch gerne weiter. Schreibt mir bei Interesse!',
            Kommentare: [
                {
                    Benutzername: 'KulturKomitee',
                    Datum: '17. Juni 2024',
                    Nachricht: 'Hallo FörderFachfrau, wir planen ein kleines Kulturfestival in unserem Grätzl und könnten Hilfe bei der Beantragung von Fördermitteln gebrauchen. Können wir uns mal zusammensetzen?'
                },
                {
                    Benutzername: 'StadtGärtner',
                    Datum: '19. Juni 2024',
                    Nachricht: 'Hi, wir arbeiten an einem Gemeinschaftsgartenprojekt und brauchen Unterstützung bei den Förderanträgen. Vielen Dank für dein Angebot!'
                }
            ]
        },
    };

    // Get the links
    var links = document.querySelectorAll('td a');

    // Add the event listener to the links
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the link from being followed
            openModal(this.textContent); // Open the modal
        });
    }

    // The function to open the modal
    function openModal(text) {
        var info = forumInfo[text];
        if (info) {
            // Set the title, description, and comments of the entry
            postModal.querySelector('.postmodal-title').textContent = text; // Replace with the actual title
            postModal.querySelector('.postmodal-description').textContent = info.Nachricht; // Replace with the actual description
            postModal.querySelector('.postmodal-author').textContent = 'Erstellt von ' + info.Benutzername + ' am ' + info.Datum + ':'; // Replace with the actual author and date

            var commentsContainer = postModal.querySelector('.postmodal-comments');
            commentsContainer.innerHTML = ''; // Clear previous comments
            info.Kommentare.forEach(function(comment) {
                var commentElement = document.createElement('p');
                commentElement.textContent = comment.Benutzername + ' (' + comment.Datum + '): ' + comment.Nachricht;
                commentElement.style.marginBottom = '1vh';
                commentElement.style.backgroundColor = '#BB99AA';
                commentElement.style.borderRadius = '20px';
                commentElement.style.fontSize = '0.9em';
                commentElement.style.padding = '1vh';
                commentsContainer.appendChild(commentElement);
            });

            // Display the modal
            postModal.style.display = 'block';
        }
    }

    // Get the element that closes the modal
    var close = postModal.querySelector('.close')
    if (close) {

        // When the user clicks on <span> (x), close the modal
        close.onclick = function() {
            postModal.style.display = 'none';
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == postModal) {
                postModal.style.display = 'none';
            }
        }
    }
}

document.querySelector('.forum-button').addEventListener('click', function() {
    var existingForm = this.parentNode.querySelector('form');
    if (existingForm) {
        this.parentNode.removeChild(existingForm);
    } else {
        var form = document.createElement('form');
        
        var titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.placeholder = 'Titel';
        titleInput.style.marginTop = '1vh';
        titleInput.style.width = '29vw';
        form.appendChild(titleInput);
        
        var usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.placeholder = 'Benutzer:innenname';
        usernameInput.style.width = '30vw';
        usernameInput.style.marginLeft = '1vh';
        form.appendChild(usernameInput);
        
        var descInput = document.createElement('textarea');
        descInput.placeholder = 'Beschreibung';
        descInput.style.width = '60vw';
        form.appendChild(descInput);
        
        this.parentNode.appendChild(form);
    }
});

document.querySelector('.comment-button').addEventListener('click', function() {
    var existingInput = this.parentNode.querySelector('input');
    if (existingInput) {
        this.parentNode.removeChild(existingInput);
    } else {
        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Schreibe ein Kommentar...';
        input.style.width = '400px'; 
        input.style.height = '40px'; 
        input.style.marginTop = '1vh'; 
        input.style.backgroundColor = '#E5E0CC';
        this.parentNode.appendChild(input);
    }
});