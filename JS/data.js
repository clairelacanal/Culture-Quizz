Class QuestionsReponses {
    constructor(question, index, poserQuestion,reponsesPossibles,indexOfReponse)
    this.question = 'Question',
    this.index = this.index,
    this.poserQuestion = this.poserQuestion,
    this.reponsesPossibles = this.reponsesPossibles,
    this.indexOfReponse = this.indexOfReponse
}

let newTheme1 = new QuestionsReponses(artEtLiterrature);
let newTheme2 = new QuestionsReponses(geographieEtHistoire);
let newTheme3 = new QuestionsReponses(musiqueEtFilms);
let newTheme4 = new QuestionsReponses(natureEtEnvironnement);
let newTheme5 = new QuestionsReponses(santeEtMedecine);
let newThème6 = new QuestionsReponses(sport);



const artEtLiterrature = [
    {
        question: 'Question',
        index: 1,
        poserQuestion: 'Quel artiste a peint : Les raboteurs de parquets?',
        reponsesPossibles: ['Pierre-Auguste Renoir', 'Gustave Caillebotte', 'Georges Seurat', ' Frédéric Bazille'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 2,
        poserQuestion: 'Comment Auguste Rodin a-t-il baptisé son oeuvre ?',
        reponsesPossibles: ['Le Penseur', 'Le Songeur', 'La Méditation', ' Le Siffleur'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 3,
        poserQuestion: 'Quel peintre représentant du mouvement américain du pop art a représenté Jackie Kennedy ?',
        reponsesPossibles: ['Tom Wesselmann', 'Roy Lichtenstein', 'Andy Warhol', ' Jean-Michel Basquiat'],
        indexOfReponse: 2
    },


    {
        question: 'Question',
        index: 4,
        poserQuestion: 'Parmi ces livres, lequel n\'a pas été écrit par François Rabelais ?',
        reponsesPossibles: ['Gargantua', 'Le Tiers Livre', 'Le Roman de Renart', ' Pantagruel'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 5,
        poserQuestion: 'Parmi ces oeuvres de Pierre Corneille, laquelle a été écrite en première ?',
        reponsesPossibles: ['L\'illusion comique', 'Polyeucte', 'Le Cid', ' Horace'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 6,
        poserQuestion: 'Parmi les auteurs ci-dessous, lequel ne fait pas partie du mouvement littéraire du Romantisme ?',
        reponsesPossibles: ['Gustave Flaubert', 'Les Frères Grimm', 'Chateaubriand', ' Victor Hugo'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 7,
        poserQuestion: 'Quel peintre fit scandale avec "L\'Origine du Monde", peint en 1866 ?',
        reponsesPossibles: ['Gustave Courbet', 'Edouard Manet', 'André Derain', ' Georges Seurat'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 8,
        poserQuestion: 'Quelle est l\'origine de "Rococo", le nom d\'un mouvement artistique du XVIIIème siècle ?',
        reponsesPossibles: [' Du chant du coq', 'Du nom d\'un peintre italien', "Du mot 'rocaille'", 'Du nom d\'un chien'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 9,
        poserQuestion: 'Parmi ces livres, lequel n\'a pas été écrit par Charles Dickens ?',
        reponsesPossibles: [' David Copperfield', 'La ferme des animaux', 'Un chant de Noël', ' Oliver Twist'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 10,
        poserQuestion: 'Quel poème de Lamartine contient les vers suivants : Ô temps ! suspends ton vol, et vous, heures propices !/ Suspendez votre cours',
        reponsesPossibles: [' L\'Horloge', ' Le Papillon', 'Le Lac', ' La Marée'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 11,
        poserQuestion: 'Quel romancier a créé le personnage "Eugène de Rastignac" ?',
        reponsesPossibles: [' François Mauriac', ' Honoré de Balzac', 'Gérard de Nerval', ' Alfred de Musset'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 12,
        poserQuestion: 'Dans les années 60, les temples égyptiens d\'Abou Simbel ont été déplacés. Pourquoi ?',
        reponsesPossibles: [' Pour éviter l\'ensablement', 'Pour éviter leur inondation par le Nil', 'A cause de la construction du barrage d\'Assouan', ' A cause d\'un virus'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 13,
        poserQuestion: 'En 1974, dans quel pays les archéologues ont-ils découvert une armée de milliers de statues en terre cuite ?',
        reponsesPossibles: ['En Chine', 'Au Japon', 'En Mongolie', 'Au Laos'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 14,
        poserQuestion: 'De quelle nationalité est l\'écrivain Paulo Coelho ?',
        reponsesPossibles: ['Italienne', 'Espagnole', 'Bresilienne', 'Portugaise'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 15,
        poserQuestion: 'Où Harry Potter et ses amis vont-ils pour libérer Sirius Black qui serait emprisonné par Voldemort ?',
        reponsesPossibles: ['La forêt interdite', 'La salle sur demande', 'Le chemin de Travers', 'Le ministère de la magie'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 16,
        poserQuestion: 'A quelle déesse était dédié le Temple d\'Ephèse qui constitue la quatrième merveille du monde antique ?',
        reponsesPossibles: ['Athéna', 'Hygie', '  Artémis', ' Aphrodite'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 17,
        poserQuestion: 'Qu\'est-ce qu\'un polyptique ?',
        reponsesPossibles: ['Une pièce de porcelaine', 'Une peinture à l\'huile', 'Un tableau à plusieurs volets', 'Un dessin gravé sur la pierre'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 18,
        poserQuestion: 'Dali avait une obsession pour un animal, lequel ?',
        reponsesPossibles: ['Le lézard', 'La mouche', 'Le scarabé', 'La fourmi'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 19,
        poserQuestion: 'De quel roman "Julien Sorel" est-il le personnage principal ?',
        reponsesPossibles: ['"Des souris et des hommes" de  John Steinbeck', '"Bel-Ami" de Guy de Maupassant', 'Le Rouge et le Noir" de Stendhal', ' "La Dame de chez Maxim" de Georges Feydeau'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 20,
        poserQuestion: 'Dans le poème « Voyelles » de quelle couleur est le A?',
        reponsesPossibles: ['Gris', 'Noir', 'Blanc', 'Bleu'],
        indexOfReponse: 1
    },

];




const geographieEtHistoire = [
    {
        question: 'Question',
        index: 1,
        poserQuestion: 'Dans quel océan se trouve la Nouvelle-Zélande ?',
        reponsesPossibles: ['Le Pacifique', 'Océan Indien', 'Le Pacifique à l\'Ouest, Océan Indien à l\'Est', 'La mer Baltique'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 2,
        poserQuestion: 'Qui était Quetzalcoalt pour les Aztèques ? ',
        reponsesPossibles: ['Le cheval de Troie', 'Le dieu Soleil', 'L\'Empereur', ' Le serpent à plumes'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 3,
        poserQuestion: 'Qui était Lisa Gherardini ? ',
        reponsesPossibles: ['L\'impératrice Eugénie', 'Mona Lisa', 'La première femme qui a traversé l\'Atlantique en avion', 'Une peintre du 20ème siècle'],
        indexOfReponse: 1
    },


    {
        question: 'Question',
        index: 4,
        poserQuestion: 'Où se trouve le désert de Taklamakan? ',
        reponsesPossibles: ['En Afrique', 'En Australie', 'En Chine', ' Au Chili'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 5,
        poserQuestion: 'Que doit-on à l\'empereur Chinois Qin Shi Huangi?',
        reponsesPossibles: ['La grande Muraille de Chine', 'L\'invention de la poudre à canon', 'Les fuseaux horaires ', 'Le nouvel an Chinois'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 6,
        poserQuestion: 'Que s\'est-il passé le 21 avril 753 avant Jésus-Christ?',
        reponsesPossibles: ['La révolte de l\'Autriche', 'La fondation de Rome', 'Les premiers jeux olympiques de l\'histoire', 'Un énorme incendie'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 7,
        poserQuestion: 'De quelle ville Nabuchodonosor II était-il le roi ?',
        reponsesPossibles: ['Babylone', ' Voltage', 'Pompei', 'Carthage'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 8,
        poserQuestion: 'Lequel de ces pays d\'Afrique s\'est appelé Dahomey ?',
        reponsesPossibles: [' Togo', 'Sénégal', 'Zaire', 'Bénin'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 9,
        poserQuestion: 'Quel âge a la terre ?',
        reponsesPossibles: ['4.5 milliards d\'années', '22 milliards d\'années', ' 850 millions d\'années', '9 milliards d\'années'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 10,
        poserQuestion: 'Quelle théorie a élaboré Alfred Wegener en 1912 ?',
        reponsesPossibles: ['La théorie du genre', 'La théorie de l\'évolution', 'La dérive des continents', 'La théorie de la relativité'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 11,
        poserQuestion: 'Dans quelle région du monde a voyagé Marco Polo, le plus célèbre des explorateurs ?',
        reponsesPossibles: ['L\'Amérique du Sud', 'L\'Asie', 'L\'Océanie', 'L\'Amérique du Nord'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 12,
        poserQuestion: 'Comment s\'appelle le Détroit qui sépare l\'Amérique du Nord de la Russie ? ',
        reponsesPossibles: ['Le détroit de Dardanelles', 'Le détroit de Magellan', 'Le détroit de Béring', 'Le détroit de Malacca'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 13,
        poserQuestion: 'Quel est le point culminant du continent européen ?',
        reponsesPossibles: ['Le Mont Blanc', 'Le Cervin', 'La Grande Etoile', 'Le Mont Elbrouz'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 14,
        poserQuestion: ' En quelle année, la majorité a-t-elle été abaissée à 18 ans en France ?',
        reponsesPossibles: ['1946', '1974', '1999', '2010'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 15,
        poserQuestion: ' Qui était Siddharta Gautama ?',
        reponsesPossibles: ['Bouddha', 'Lao Tseu', 'Gengis Khan', 'Nabuchodonosor'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 16,
        poserQuestion: 'De qui la fameuse "Berthe au Grand Pied" était-elle l’épouse ?',
        reponsesPossibles: ['Childéric III', 'Charlemagne', 'Pépin le Bref', 'Dagobert Ier'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 17,
        poserQuestion: 'Quel est l\'état le plus peuplé des États-Unis ?',
        reponsesPossibles: ['Texas', 'New York', 'Floride', 'Californie'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 18,
        poserQuestion: 'Qui a aidé Thésée à sortir du labyrinthe grâce à son fil ?',
        reponsesPossibles: ['Ariane', 'Diane', 'Persée', 'Andromaque'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 19,
        poserQuestion: ' Quel homme politique a obtenu le prix Nobel de Littérature ?',
        reponsesPossibles: ['Le général de Gaulle', 'Winston Churchill', 'Konrad Adenauer', 'Thomas Jefferson'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 20,
        poserQuestion: ' En quelle année a-t-on fait fonctionner pour la dernière fois la guillotine en France ?',
        reponsesPossibles: ['1970', '1981', '1980', '1977'],
        indexOfReponse: 3
    },

];





const musiqueEtFilms = [
    {
        question: 'Question',
        index: 1,
        poserQuestion: 'Quel film de David Fincher avec Brad Pitt et Kevin Spacey se termine par une scène au milieu du désert ?',
        reponsesPossibles: ['L\'armée des 12 singes', 'Ocean\'s eleven',  'Seven', 'Fight Club'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 2,
        poserQuestion: 'Dans quel drame psychologique réalisé par Martin Scorsese peut-on suivre un Robert De Niro marginal et quelque peu déséquilibré ? ',
        reponsesPossibles: [ 'Taxi Driver',  'Raging Bull', 'New York, New York', 'Les infiltrés'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 3,
        poserQuestion: 'Quel est le cocktail préféré de James Bond ?',
        reponsesPossibles: ['Le Cosmopolitan', 'La Vodka-Martini', 'Le Mojito', 'La Margarita'],
        indexOfReponse: 1
    },


    {
        question: 'Question',
        index: 4,
        poserQuestion: 'Quel n° porte la symphonie inachevée de Beethoven ? ',
        reponsesPossibles: ['8', '9', '10', '11'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 5,
        poserQuestion: 'A qui doit-on l\'oeuvre symphonique nommée "Prélude à l\'après-midi d\'un faune" ?',
        reponsesPossibles: ['Liszt', 'Wagner', 'Chopin', 'Debussy'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 6,
        poserQuestion: 'Dans quel film Leonardo DiCaprio n\'a-t-il pas joué ?',
        reponsesPossibles: ['Aviator', 'La Mémoire dans la peau', 'La Plage', ' Les Noces rebelles'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 7,
        poserQuestion: 'Lequel de ces films a reçu le plus d\'Oscars ?',
        reponsesPossibles: ['Le Seigneur des Anneaux : Le Retour du roi', 'La Môme', 'Autant en emporte le vent', 'Amadeus'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 8,
        poserQuestion: 'A qui doit-on "Pierre et le loup" ?',
        reponsesPossibles: ['Stravinsky', 'Borodine', 'Prokofiev', 'Leps'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 9,
        poserQuestion: 'A qui s\'adressait Nougaro, en chantant "ma fille" ?',
        reponsesPossibles: ['Sandrine', 'Séverine', 'Céline', 'Cécile'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 10,
        poserQuestion: 'Quelle actrice américaine a prêté sa voix à la Princesse Fiona, dans le dessin animé Shrek ?',
        reponsesPossibles: ['Emma Stone', 'Julia Roberts', 'Cameron Diaz', 'Whoopy Goldberg'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 11,
        poserQuestion: 'Qui est la muse de Woody Allen ?',
        reponsesPossibles: ['Reese Witherspoon', 'Penelope Cruz', 'Scarlett Johansson', 'Nicole Kidman'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 12,
        poserQuestion: 'Pour Charles Aznavour, quelle ville est triste "Quand on ne s\'aime plus, Les musées, les églises, Ouvrent en vain leur portes, Inutiles beautés devant nos yeux déçus" ...?',
        reponsesPossibles: ['Florence', 'Venise', 'Rome', 'Vérone'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 13,
        poserQuestion: 'Stromae chante "Ave Cesaria, en hommage à Cesária Évora, une chanteuse :"',
        reponsesPossibles: ['Malgache', 'Burkinabé', 'Capverdienne', 'Malienne'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 14,
        poserQuestion: 'Dans lequel de ces films le héros n\'est-il pas un être humain ?',
        reponsesPossibles: ['La Marche de l\'Empereur', 'La Momie 3 : La tombe de l\'empereur', 'Le Dernier Empereur', 'L\'Empereur de Paris'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 15,
        poserQuestion: 'Quelle série n\'a pas été adaptée au cinéma ?',
        reponsesPossibles: ['Sex & the City', 'Arnold et Willy', 'Starsky et Huch', 'Les Simpson'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 16,
        poserQuestion: 'Il a chanté simplement son amour pour toutes les femmes : "Femmes... Je vous aime... ?"',
        reponsesPossibles: ['Michel Sardou', 'Serge Lama', 'Joe Dassin', 'Julien Clerc'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 17,
        poserQuestion: 'Quel a été le premier métier de Claude François ?',
        reponsesPossibles: ['Employé dans une piscine municipale', 'Marchand de journaux', 'Joueur de batterie ambulant', 'Employé dans une banque'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 18,
        poserQuestion: 'Lequel de ces films n\'a pas été réalisé par Gérard Oury ?',
        reponsesPossibles: ['Le Corniaud', 'La grande vadrouille', 'L\'Aile ou la cuisse', 'Les aventures de Rabbi Jacob'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 19,
        poserQuestion: 'Qui a dit : "Rien ne m\'échappe, rien ne m\'arrête"?',
        reponsesPossibles: ['Le Choixpeau Magique', 'Albus Dumbledore', 'Sirius Black', 'Harry Potter'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 20,
        poserQuestion: 'Dans "Le bon , La brute , et le truand" qui décède à la fin du film ?',
        reponsesPossibles: ['Personne', 'Le bon', 'La brute', 'Le truand'],
        indexOfReponse: 2
    },

];



const natureEtEnvironnement = [
    {
        question: 'Question',
        index: 1,
        poserQuestion: 'Quelle fleur pousse en haute montagne ? ',
        reponsesPossibles: ['La rose', 'Le muguet', 'L\'edelweiss', 'Le coquelicot'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 2,
        poserQuestion: 'À quelle famille de plantes appartient le trèfle  ? ',
        reponsesPossibles: ['Les fabacées', 'Les renonculacées', 'Les crucifères', 'Les orchidées'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 3,
        poserQuestion: ' Quelle est la particularité du martinet noir?',
        reponsesPossibles: ['Il ne vole presque jamais', 'Il a les pattes crochues', 'Il ne vole qu’en couple', 'Il ne se pose presque jamais'],
        indexOfReponse: 3
    },


    {
        question: 'Question',
        index: 4,
        poserQuestion: 'Comment les chauves-souris voient-elles dans le noir ? ',
        reponsesPossibles: ['Avec leurs oreilles', 'Avec des capteurs sur leur nez', ' Elles se déplacent sans voir', 'Avec leur odorat'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 5,
        poserQuestion: 'Quelle plante a inspiré la création du scratch Velcro?',
        reponsesPossibles: [' Le chardon', 'Le cactus', ' La bardane', 'L\'ortie'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 6,
        poserQuestion: ' Comment la grenouille des bois (Amérique du Nord) hiberne-t-elle ?',
        reponsesPossibles: ['Son organisme gèle', 'Elle s\’enterre', 'Elle se déplace dans une région chaude', 'Elle meurt avant d\'hiberner'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 7,
        poserQuestion: ' Quelle est la particularité du faucon pelerin?',
        reponsesPossibles: [' Il peut rester plusieurs mois sans manger', 'Il se camoufle pour capturer ses proies', 'C’est l’oiseau le plus rapide', 'Il dort 2 heures par nuit'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 8,
        poserQuestion: 'Quelle ressource naturelle n’est pas utilisée dans la fabrication du verre ?',
        reponsesPossibles: ['Du carbonate de soude', 'Du calcaire', 'Du sable', 'De la terre'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 9,
        poserQuestion: 'Combien faut-il de temps à une canette en acier pour se dégrader ?',
        reponsesPossibles: ['1 à 2 ans', '10 à 20 ans', '40 à 60 ans', '80 à 100 ans'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 10,
        poserQuestion: 'Depuis quand existe-t-il des lois en France qui protègent l\'environnement ?',
        reponsesPossibles: ['1970', '1975', '1960', '1965'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 11,
        poserQuestion: 'A combien de douches équivaut un bain ?',
        reponsesPossibles: ['5 douches', '6 douches', '7 douches', '8 douches'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 12,
        poserQuestion: 'Comment nomme-t-on les sources d\'énergies alternatives ? ',
        reponsesPossibles: ['Les énergies impérissables', 'Les énergies durables', 'Les énergies infranchissables', 'Les énergies impénétrables'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 13,
        poserQuestion: 'Qu\'est-ce qu\'une forêt de pluie ?',
        reponsesPossibles: ['Une expression africaine désignant un orage', 'Une averse de grêle sous les tropiques', 'Un dessert Vietnamien', 'Une forêt équatoriale où il pleut en permanence'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 14,
        poserQuestion: 'À quelle famille appartient le mimosa ?',
        reponsesPossibles: ['Acacia', 'Asclépiade', 'Rosa', 'Magnolia'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 15,
        poserQuestion: 'L\'églantier ou rosier sauvage est aussi appelé "rosier du chien". À quel fait doit-il ce nom ?',
        reponsesPossibles: ['Que son parfum attire les chiens', 'Qu\'il est censé guérir de la rage', 'Que ses épines écartent les chiens', 'Qu\'il fait vomir les chiens'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 16,
        poserQuestion: 'Une plante de la famille des euphorbes, Homolanthus nutans, est testée depuis 1992 pour ses capacités à stopper le virus du sida. Où l\'a-t-on découverte ?',
        reponsesPossibles: ['Aux îles Vanuatu', 'Au Costa-Rica', 'Aux îles Samoa', 'A Bora Bora'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 17,
        poserQuestion: 'Parmi ces quatre céréales, laquelle ne contient pas de gluten ?',
        reponsesPossibles: ['Le maïs', 'Le kamut', 'Le seigle', 'Le sarrasin'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 18,
        poserQuestion: 'L\'orchidée est une plante très recherchée qui symbolise la femme idéale. Elle tire son nom du grec "orkhis". Que signifie-t-il ?',
        reponsesPossibles: ['Beauté', 'Sensualité', 'Volupté', 'Fidélité'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 19,
        poserQuestion: 'Qu\'étudie un phycologue ?',
        reponsesPossibles: ['Les étoiles de mer', 'Les coquillages', 'Les oursins', 'Les algues'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 20,
        poserQuestion: 'Zébrina , une des plantes d\'appartement les plus résistantes, au beau feuillage panaché, nous la connaissons mieux sous le nom de :',
        reponsesPossibles: ['Misère', 'Souci', 'Problème', 'Ennui'],
        indexOfReponse: 0
    },

],




const santeEtMedecine = [
    {
        question: 'Question',
        index: 1,
        poserQuestion: 'Un analeptique est censé : ',
        reponsesPossibles: ['Provoquer le sommeil', 'Supprimer la douleur', 'Tuer les microbes', 'Redonner des forces'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 2,
        poserQuestion: 'Quel est le nom courant de la maladie influenza ? ',
        reponsesPossibles: ['Angine', 'Grippe', 'Migraine', ' Vertige'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 3,
        poserQuestion: 'Le BCG est un vaccin contre : ',
        reponsesPossibles: ['Le tétanos', 'La grippe', 'La rage', 'La tuberculose'],
        indexOfReponse: 3
    },


    {
        question: 'Question',
        index: 4,
        poserQuestion: 'Chez l’être humain, quelle glande située sous l’encéphale produit notamment l’hormone de croissance ? ',
        reponsesPossibles: ['Hypophyse', 'Surrénale', 'Thyroide', ' Sudoripare'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 5,
        poserQuestion: 'Qu\'est-ce qu\'une épidémie ?',
        reponsesPossibles: [' Une maladie qui s\'étend sur un continent', 'La propagation d\'une maladie', 'Ce qui provoque la propagation d\'une maladie ', ' Une famine'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 6,
        poserQuestion: 'Qu\'est-ce que la psychologie globalement ?',
        reponsesPossibles: ['L\'étude des personnes à moitié dérangées', 'L\'étude des personnes fragilisées', 'L\'étude du fonctionnement du cerveau', ' L\'étude des habitudes des personnes fragilisées'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 7,
        poserQuestion: 'Combien y a-t-il d\'hémisphères cérébraux chez l\'homme ?',
        reponsesPossibles: ['2', ' 4', '6', '8'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 8,
        poserQuestion: 'Si on compare le volume du cerveau de l\'homme avec celui du gorille, on peut dire que :',
        reponsesPossibles: [' Ils sont sensiblement de la même taille', ' Le cerveau du gorille est 2 fois plus gros que celui de l\'homme', ' Le cerveau de l\'homme est 3 fois plus gros que celui du gorille', 'Il n\'y a pas eu d\'études'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 9,
        poserQuestion: 'Voici une petite citation " sucrée ": Quand on a oublié d\'acheter du sucre, on peut parfaitement sucrer son café avec une betterave, mais c\'est plus long ". De qui est-elle ?',
        reponsesPossibles: ['Franck Dubosc', 'Coluche', '   Guy Bedos', 'François Cavanna'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 10,
        poserQuestion: 'Qui a introduit le tabac en France ?',
        reponsesPossibles: [' Philip Morris', 'Patrick Tabacco', 'Jean Nicot', 'René Filtre'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 11,
        poserQuestion: 'La dyspnée est le terme savant pour :',
        reponsesPossibles: ['Les problème d\'apnée du sommeil', 'La difficulté à avaler les aliments', 'L\'essoufflement', 'Un trouble des tissus'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 12,
        poserQuestion: 'La substance fabriquée par les glandes du conduit auditif s’appelle : ',
        reponsesPossibles: ['Le lichen', 'Le phérumen', 'La cire humaine', 'Le cérumen'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 13,
        poserQuestion: 'La lunule de l’ongle est :',
        reponsesPossibles: ['Une tâche blanche en forme de strie', 'Située sur le bord libre de l\'ongle', 'Une tâche en forme de croissant à la base de l\'ongle', 'Les bouts de peau qu\'on arrache'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 14,
        poserQuestion: 'Le cerveau :',
        reponsesPossibles: ['Est plus gros en moyenne chez l\'homme que chez la femme', 'Chez le gaucher, le lobe droit et gauche sont inversés', 'Représente 10% du poids du corps et consomme 50% de l\'oxygène utilisé par l\'organisme', 'Est plus gros chez la femme'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 15,
        poserQuestion: 'En cas de brûlure sévère :',
        reponsesPossibles: ['Il faut très vite déshabiller le brûlé', 'On peut asperger d\'eau froidre une partie découverte brûlée par un liquide', 'Il faut rapidement faire vomir s\'il s\'agit d\'une brûlure interne par ingestion de produit chimique', 'Il faut frotter avec du savon'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 16,
        poserQuestion: 'Les signaux de détresse internationaux :',
        reponsesPossibles: ['Les deux bras en Y sont une semande de secours', 'Un bras levé signale une blessure légère', 'Le pouce levé désigne une mauvaise action', 'Un rond blanc sur un carré de tissu rouge de 1 mètre carré environ signale une risque d\'avalanche'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 17,
        poserQuestion: 'Les globules rouges :',
        reponsesPossibles: ['Représentent environ 70% du volume sanguin', 'Sont au nombre de 4 à 5 millions par littre chez l\'adulte', 'Vivent environ 9 mois chacun', 'Doivent leur couleur à l\'hémoglobine'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 18,
        poserQuestion: 'Le poignet est formé par les os :',
        reponsesPossibles: ['Du tarse', 'Du Larse', 'Du carpe', 'Du scarte'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 19,
        poserQuestion: 'La mononucléose infectieuse :',
        reponsesPossibles: ['Est aussi appelée "Maladie des griffes de chat"', 'Donne surtout une gastro-entérite', 'Attaque les orteils', 'Est due au virus d’EPSTEIN-BARR'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 20,
        poserQuestion: 'Le masséter :',
        reponsesPossibles: ['Est un muscle de la face', 'Est un muscle de la fesse', 'Est un muscle du mollet', 'Est un muscle du genoux'],
        indexOfReponse: 0
    },
],



const sport = [
    {
        question: 'Question',
        index: 1,
        poserQuestion: 'Quelle est la distance du marathon ?',
        reponsesPossibles: ['42,195 km', '50km', '43km', '40km'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 2,
        poserQuestion: 'De combien de joueurs se compose une équipe de football ? ',
        reponsesPossibles: ['14 joueurs', '13 joueurs', '12 joueurs', ' 11 joueurs'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 3,
        poserQuestion: 'Les Jeux olympiques (été ou hiver) sont organisés : ',
        reponsesPossibles: ['Tous les 5 ans', 'Tous les 4 ans', 'Tous les 3 ans', 'Tous les 2 ans'],
        indexOfReponse: 1
    },


    {
        question: 'Question',
        index: 4,
        poserQuestion: 'Quel sport est arbitré obligatoirement en français ? ',
        reponsesPossibles: ['Le football', 'Le handball', 'L\'escrime', ' Le ping-pong'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 5,
        poserQuestion: 'Combien y a-t-il de périodes dans un match de hockey sur glace ?',
        reponsesPossibles: [' 3 périodes de 20 minutes chacune', ' 3 périodes de 30 minutes chacune', '2 périodes de 15 minutes chacune', '2 périodes de 25 minutes chacune'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 6,
        poserQuestion: 'Au bowling, quel est le score parfait (pour douze strikes consécutifs) ?',
        reponsesPossibles: ['150 points', '200 points', '250 points', '300 points'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 7,
        poserQuestion: 'Avant un combat de sumo, que jettent les lutteurs sur la zone de combat ??',
        reponsesPossibles: ['Du sucre', ' Du sel', 'De la farine', 'De l\'eau'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 8,
        poserQuestion: 'Quel est le revêtement d’un terrain de curling ?',
        reponsesPossibles: ['Le synthétique', 'La terre battue', 'Le sable', 'La glace'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 9,
        poserQuestion: 'De quel pays le buzkaschi (un sport équestre où les concurrents tentent d’attraper un cadavre de chèvre) est-il le sport national ?',
        reponsesPossibles: ['Tajikistan', ' Afghanistan', 'Uzbekistan', 'Turkmenistan'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 10,
        poserQuestion: 'Quel est le surnom de l\'équipe de football d\'Allemagne ?',
        reponsesPossibles: ['Die Wunderteam', 'Die Nationalmannschaf', 'Die Fußballmannschaft', 'Die Ballspielerteam'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 11,
        poserQuestion: 'Combien de quilles sont alignées sur la dernière rangée au bowling ?',
        reponsesPossibles: ['7', '6', '5', '4'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 12,
        poserQuestion: 'Quelle est la différence entre un canoé et un kayak ? ',
        reponsesPossibles: ['La couleur du bateau', 'La forme de la jupe', 'La position des sportifs', 'La taille de la pagaie'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 13,
        poserQuestion: 'Quel est le nom de l\'ancêtre du badminton ?',
        reponsesPossibles: ['Le poona', 'Le plumeau', 'Le caracas', 'Le jeu de paume'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 14,
        poserQuestion: 'Depuis quelle année est-ce que le "patin clap" est-il utilisé en compétition de patinage de vitesse ?',
        reponsesPossibles: ['1966', '1976', '1986', '1996'],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 15,
        poserQuestion: 'Où a lieu chaque année la compétition la plus dure du monde :"a Touch Guy Competition" ?',
        reponsesPossibles: ['Aux Etats-Unis', 'En Ecosse', 'En Angleterre', 'En Nouvelle-Zélande'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 16,
        poserQuestion: 'Combien de pays participent aux jeux olympiques des petits pays ?',
        reponsesPossibles: ['7', '9', '11', '13'],
        indexOfReponse: 1
    },

    {
        question: 'Question',
        index: 17,
        poserQuestion: 'De combien de face est constitué un ballon de football ?',
        reponsesPossibles: ['24', '28', '32', '36'],
        indexOfReponse: 2
    },

    {
        question: 'Question',
        index: 18,
        poserQuestion: 'A l\'origine, en quelle matière étaient faites les balles de golf ?',
        reponsesPossibles: ['En cuir', 'En plâtre', 'En bois', 'En terre'],
        indexOfReponse: 0
    },

    {
        question: 'Question',
        index: 19,
        poserQuestion: 'Dans quelle catégorie le judoka David Douillet s’est-il illustré ?',
        reponsesPossibles: ['+ 80 kg', '+ 85 kg', '+ 90 kg', '+ 95 kg '],
        indexOfReponse: 3
    },

    {
        question: 'Question',
        index: 20,
        poserQuestion: 'Médaillée d’or à deux reprises en athlétisme aux JO de 1948, Micheline Ostermeyer était également :',
        reponsesPossibles: ['Chanteuse', 'Violoncelliste', 'Guitariste', 'Pianiste'],
        indexOfReponse: 3
    },

],







