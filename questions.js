
const serieA = [
  {
    module: "Module 1 — Architecture Web et fondamentaux Django",
    title: "Cycle d’une requête HTTP",
    text: "Un utilisateur visite /etablissements/. Quel composant détermine la vue correspondant à cette URL ?",
    options: [
      ["A", "Le système de templates"],
      ["B", "Le système de routage URL (urls.py)"],
      ["C", "Le modèle de données"],
      ["D", "Le fichier admin.py"]
    ]
  },
  {
    module: "Module 1 — Architecture Web et fondamentaux Django",
    title: "Architecture MVT",
    text: "Dans l’architecture MVT, quel est le rôle principal du template ?",
    options: [
      ["A", "Gérer la structure de la base de données"],
      ["B", "Administrer les migrations"],
      ["C", "Présenter les données dans une interface, généralement HTML"],
      ["D", "Établir la connexion PostgreSQL"]
    ]
  },
  {
    module: "Module 1 — Architecture Web et fondamentaux Django",
    title: "Routage et maintenance",
    text: "Pourquoi utiliser des noms de routes Django plutôt que de répéter les URL en dur dans les templates ?",
    options: [
      ["A", "Générer les URL par leur nom et faciliter les modifications"],
      ["B", "Convertir automatiquement les géométries en GeoJSON"],
      ["C", "Supprimer le besoin de vues"],
      ["D", "Éviter toutes les migrations"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Migrations",
    text: "Après avoir ajouté un champ au modèle Etablissement, quelle séquence génère puis applique la modification du schéma ?",
    options: [
      ["A", "runserver, puis createsuperuser"],
      ["B", "makemigrations, puis migrate"],
      ["C", "collectstatic, puis runserver"],
      ["D", "startapp, puis check"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Relations entre modèles",
    text: "Une catégorie regroupe plusieurs établissements, mais chaque établissement appartient à une seule catégorie. Quel champ utiliser ?",
    options: [
      ["A", "OneToOneField"],
      ["B", "ManyToManyField"],
      ["C", "ForeignKey"],
      ["D", "PointField"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Fonctionnement de l’ORM",
    text: "Que se passe-t-il généralement lors de cette affectation : qs = Etablissement.objects.filter(actif=True) ?",
    options: [
      ["A", "Tous les résultats sont immédiatement chargés dans une liste"],
      ["B", "La table est automatiquement recréée"],
      ["C", "La requête est exécutée plusieurs fois"],
      ["D", "Un QuerySet est construit et la requête est généralement différée jusqu’à son évaluation"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Performance de l’ORM",
    text: "Une page affiche de nombreux établissements et accède à leur catégorie via une ForeignKey. Quelle méthode peut réduire le problème N+1 ?",
    options: [
      ["A", "select_related('categorie')"],
      ["B", "makemigrations()"],
      ["C", "reverse()"],
      ["D", "createsuperuser"]
    ]
  },
  {
    module: "Module 3 — Formulaires et sécurité",
    title: "Validation des données",
    text: "Pourquoi valider côté serveur si le navigateur vérifie déjà les champs d’un formulaire ?",
    options: [
      ["A", "Les formulaires HTML ne peuvent pas contenir de nombres"],
      ["B", "L’utilisateur peut contourner ou modifier les contrôles du navigateur"],
      ["C", "La validation serveur remplace la base de données"],
      ["D", "Django ignore systématiquement le contenu des formulaires"]
    ]
  },
  {
    module: "Module 3 — Formulaires et sécurité",
    title: "Authentification et autorisation",
    text: "Quelle affirmation distingue correctement ces deux notions ?",
    options: [
      ["A", "L’authentification gère les cartes et l’autorisation les coordonnées"],
      ["B", "Les deux termes désignent exactement la même opération"],
      ["C", "L’authentification établit l’identité ; l’autorisation détermine les droits"],
      ["D", "L’autorisation sert uniquement à créer des comptes"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Types géométriques",
    text: "Quel champ GeoDjango est adapté pour stocker la position d’un centre de santé sous forme de point ?",
    options: [
      ["A", "PolygonField"],
      ["B", "PointField"],
      ["C", "MultiPolygonField"],
      ["D", "RasterField"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Reprojection",
    text: "Une couche doit passer d’un système de coordonnées A vers un système B. Quelle opération faut-il effectuer ?",
    options: [
      ["A", "Modifier uniquement le nom du fichier"],
      ["B", "Changer le SRID sans transformer les coordonnées"],
      ["C", "Supprimer les informations spatiales"],
      ["D", "Transformer les coordonnées par une opération de reprojection"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Distances géographiques",
    text: "Des points sont stockés en EPSG:4326. Avant de rechercher ceux situés à moins de 1 000 mètres d’un point, que faut-il vérifier ?",
    options: [
      ["A", "La méthode de calcul et les unités adaptées aux distances métriques"],
      ["B", "Que toutes les coordonnées sont exprimées en mètres"],
      ["C", "Que le SRID est supprimé"],
      ["D", "Que les coordonnées sont converties en texte"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Relations spatiales",
    text: "Quel prédicat spatial permet de rechercher les points situés à l’intérieur d’un polygone communal ?",
    options: [
      ["A", "order_by()"],
      ["B", "select_related()"],
      ["C", "within"],
      ["D", "icontains"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Index spatial",
    text: "À quoi sert principalement un index spatial dans PostGIS ?",
    options: [
      ["A", "À corriger toutes les géométries invalides"],
      ["B", "À accélérer la recherche de géométries candidates pour certaines requêtes"],
      ["C", "À remplacer le contrôle des systèmes de coordonnées"],
      ["D", "À convertir les vecteurs en rasters"]
    ]
  },
  {
    module: "Module 5 — API, GeoJSON et Leaflet",
    title: "Ordre des coordonnées GeoJSON",
    text: "Pour un point GeoJSON conforme à RFC 7946, quel est l’ordre usuel des coordonnées ?",
    options: [
      ["A", "Latitude, longitude"],
      ["B", "Altitude, latitude"],
      ["C", "Code EPSG, longitude"],
      ["D", "Longitude, latitude"]
    ]
  },
  {
    module: "Module 5 — API, GeoJSON et Leaflet",
    title: "Conception d’une API géographique",
    text: "Une carte doit afficher plusieurs milliers d’établissements. Quelle pratique est la plus pertinente ?",
    options: [
      ["A", "Renvoyer toutes les colonnes et tous les enregistrements sans limite"],
      ["B", "Construire le SQL par concaténation directe des paramètres utilisateur"],
      ["C", "Valider les paramètres, limiter les champs et maîtriser le volume des résultats"],
      ["D", "Désactiver toute vérification d’accès"]
    ]
  },
  {
    module: "Module 5 — API, GeoJSON et Leaflet",
    title: "Rôle de Leaflet",
    text: "Dans une architecture Django–PostGIS–Leaflet, quel composant rend principalement la carte interactive dans le navigateur ?",
    options: [
      ["A", "Leaflet"],
      ["B", "Le système de migrations Django"],
      ["C", "Le moteur SQL PostgreSQL"],
      ["D", "settings.py"]
    ]
  },
  {
    module: "Module 6 — Tests et déploiement",
    title: "Configuration de production",
    text: "Quelle configuration convient à une application Django en production ?",
    options: [
      ["A", "Laisser DEBUG=True pour afficher publiquement les détails techniques"],
      ["B", "Désactiver les permissions"],
      ["C", "Inscrire tous les secrets dans Git"],
      ["D", "Désactiver le mode debug, configurer les hôtes autorisés et protéger les secrets"]
    ]
  },
  {
    module: "Module 6 — Tests et déploiement",
    title: "Tests spatiaux",
    text: "Pourquoi tester les requêtes spatiales sur PostGIS réel ou un environnement de test équivalent ?",
    options: [
      ["A", "Pour ne plus avoir besoin de données de test"],
      ["B", "Les capacités spatiales et les résultats peuvent dépendre du backend"],
      ["C", "Pour garantir l’exactitude de toutes les données terrain"],
      ["D", "Pour remplacer les tests de vues et de permissions"]
    ]
  },
  {
    module: "Module 6 — Tests et déploiement",
    title: "Documentation des données",
    text: "Quelles informations sont importantes à documenter avant de diffuser une application WebSIG ?",
    options: [
      ["A", "Uniquement la couleur des symboles"],
      ["B", "Uniquement le nom du développeur"],
      ["C", "La provenance, la licence, la date et les limites des données"],
      ["D", "Uniquement la résolution d’écran de l’enseignant"]
    ]
  }
];

////////////////////////////////////serieC///////////////////////////////////////////////////////////////////////
const serieB = [
  {
    module: "Module 1 — Architecture Web et Django",
    title: "Association URL et vue",
    text: "Dans un projet Django, quel fichier contient généralement les règles qui associent les chemins URL aux vues ?",
    options: [
      ["A", "models.py"],
      ["B", "urls.py"],
      ["C", "admin.py"],
      ["D", "apps.py"]
    ]
  },
  {
    module: "Module 1 — Architecture Web et Django",
    title: "Responsabilité d’une vue",
    text: "Dans une application Django, quelle est la responsabilité principale d’une vue ?",
    options: [
      ["A", "Définir le système de coordonnées des données"],
      ["B", "Créer automatiquement toutes les tables"],
      ["C", "Traiter une requête et retourner une réponse HTTP"],
      ["D", "Remplacer le serveur de base de données"]
    ]
  },
  {
    module: "Module 1 — Architecture Web et Django",
    title: "Routes nommées",
    text: "Une route nommée permet notamment d’utiliser reverse() pour :",
    options: [
      ["A", "Construire une URL à partir du nom d’une route"],
      ["B", "Reprojeter une couche géographique"],
      ["C", "Créer une nouvelle table SQL"],
      ["D", "Chiffrer les données d’un formulaire"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Application des migrations",
    text: "Après la création d’un fichier de migration, quelle commande applique les modifications correspondantes à la base de données ?",
    options: [
      ["A", "createsuperuser"],
      ["B", "startapp"],
      ["C", "makemigrations"],
      ["D", "migrate"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Relation entre établissements et catégories",
    text: "Plusieurs établissements peuvent appartenir à une même catégorie. Chaque établissement ne possède qu’une seule catégorie. Quelle relation utiliser ?",
    options: [
      ["A", "OneToOneField"],
      ["B", "ForeignKey"],
      ["C", "ManyToManyField"],
      ["D", "FileField"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Exécution d’une requête ORM",
    text: "À quel moment un QuerySet Django est-il généralement évalué et sa requête exécutée ?",
    options: [
      ["A", "Dès que le serveur Django démarre"],
      ["B", "Dès que le modèle est importé"],
      ["C", "Lorsqu’une opération provoque son évaluation, par exemple une itération"],
      ["D", "Uniquement lorsqu’une migration est créée"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Relations multiples et performance",
    text: "Une page affiche les établissements et leurs équipements associés par une relation ManyToManyField. Quelle méthode ORM aide à charger efficacement les équipements associés ?",
    options: [
      ["A", "prefetch_related()"],
      ["B", "makemigrations()"],
      ["C", "reverse()"],
      ["D", "get_absolute_url()"]
    ]
  },
  {
    module: "Module 3 — Formulaires et sécurité",
    title: "Fiabilité d’un formulaire",
    text: "Une personne envoie directement une requête HTTP sans passer par le formulaire affiché dans le navigateur. Quelle mesure protège les données reçues ?",
    options: [
      ["A", "Masquer le bouton de soumission"],
      ["B", "Supprimer le template HTML"],
      ["C", "Désactiver le routage URL"],
      ["D", "Valider les données côté serveur"]
    ]
  },
  {
    module: "Module 3 — Formulaires et sécurité",
    title: "Contrôle des permissions",
    text: "Dans une application cartographique, seuls certains agents peuvent supprimer un établissement. Quel mécanisme doit contrôler cette opération ?",
    options: [
      ["A", "La couleur du marqueur Leaflet"],
      ["B", "Les permissions vérifiées côté serveur"],
      ["C", "Le système de coordonnées de la carte"],
      ["D", "Le nom du template"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Représenter un axe routier",
    text: "Quel champ GeoDjango convient pour représenter la géométrie linéaire d’un tronçon de route ?",
    options: [
      ["A", "PointField"],
      ["B", "PolygonField"],
      ["C", "LineStringField"],
      ["D", "BooleanField"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Système de référence spatial",
    text: "Une couche contient des coordonnées en EPSG:4326. On lui attribue l’étiquette EPSG:32628 sans transformer ses coordonnées. Quelle affirmation est correcte ?",
    options: [
      ["A", "La couche est automatiquement reprojetée"],
      ["B", "Les coordonnées deviennent nécessairement métriques"],
      ["C", "Toutes les géométries sont corrigées"],
      ["D", "Le changement d’étiquette seul ne transforme pas les coordonnées"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Calcul d’un buffer",
    text: "Un géomaticien veut créer un buffer de 500 mètres autour de points stockés en longitude-latitude. Quelle précaution est la plus appropriée ?",
    options: [
      ["A", "Utiliser une opération adaptée aux unités métriques, par exemple après reprojection dans un CRS approprié"],
      ["B", "Traiter directement 500 comme une valeur en degrés"],
      ["C", "Supprimer toutes les coordonnées"],
      ["D", "Convertir les géométries en chaînes de caractères"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Filtrage spatial",
    text: "On souhaite récupérer les établissements dont le PointField se trouve à l’intérieur de la géométrie d’une commune. Quel lookup correspond à cette relation ?",
    options: [
      ["A", "icontains"],
      ["B", "within"],
      ["C", "order_by"],
      ["D", "select_related"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Optimisation des requêtes spatiales",
    text: "Une table PostGIS contient plusieurs centaines de milliers de points. Quel mécanisme peut améliorer les performances de certains filtres spatiaux ?",
    options: [
      ["A", "Un template supplémentaire"],
      ["B", "Une migration sans modification du schéma"],
      ["C", "Un index spatial approprié, par exemple GiST"],
      ["D", "Une conversion de chaque géométrie en texte"]
    ]
  },
  {
    module: "Module 5 — API, GeoJSON et Leaflet",
    title: "Lecture d’un point GeoJSON",
    text: "Dans GeoJSON, un point est représenté par coordinates: [-16.90, 14.70]. Pour les coordonnées horizontales, à quoi correspondent ces deux valeurs ?",
    options: [
      ["A", "Latitude puis longitude"],
      ["B", "Est puis altitude"],
      ["C", "Code EPSG puis latitude"],
      ["D", "Longitude puis latitude"]
    ]
  },
  {
    module: "Module 5 — API, GeoJSON et Leaflet",
    title: "Volume d’une réponse API",
    text: "Une API cartographique doit renvoyer les établissements d’une commune sélectionnée. Quelle approche est préférable ?",
    options: [
      ["A", "Filtrer les résultats côté serveur et renvoyer uniquement les propriétés nécessaires"],
      ["B", "Transmettre toute la base de données à chaque requête"],
      ["C", "Ignorer les paramètres envoyés par l’utilisateur"],
      ["D", "Renvoyer les mots de passe associés aux comptes"]
    ]
  },
  {
    module: "Module 5 — API, GeoJSON et Leaflet",
    title: "Affichage des entités",
    text: "Dans Leaflet, quelle fonction permet notamment de transformer un objet GeoJSON en couche cartographique ?",
    options: [
      ["A", "django.setup()"],
      ["B", "L.geoJSON()"],
      ["C", "makemigrations()"],
      ["D", "PostGIS_Full_Version()"]
    ]
  },
  {
    module: "Module 6 — Tests et déploiement",
    title: "Sécurisation du déploiement",
    text: "Une application Django doit être publiée sur Internet. Quelle mesure est appropriée ?",
    options: [
      ["A", "Laisser les secrets accessibles dans le dépôt"],
      ["B", "Activer DEBUG pour tous les utilisateurs"],
      ["C", "Protéger les secrets et configurer les paramètres de production"],
      ["D", "Supprimer les contrôles d’accès"]
    ]
  },
  {
    module: "Module 6 — Tests et déploiement",
    title: "Validation des requêtes spatiales",
    text: "Une requête de proximité fonctionne sur le poste de développement, mais échoue sur la base destinée à la production. Quelle démarche est la plus pertinente ?",
    options: [
      ["A", "Supprimer les données spatiales"],
      ["B", "Remplacer les points par du texte"],
      ["C", "Désactiver les tests"],
      ["D", "Vérifier le backend spatial, le SRID, les unités et les conditions d’exécution"]
    ]
  },
  {
    module: "Module 6 — Tests et déploiement",
    title: "Documentation des sources",
    text: "Avant de réutiliser un jeu de données d’établissements sanitaires dans un WebSIG public, quelle vérification est essentielle ?",
    options: [
      ["A", "Vérifier la provenance et les conditions de licence des données"],
      ["B", "Changer le nom de tous les champs sans documentation"],
      ["C", "Supprimer la date de collecte"],
      ["D", "Ignorer les restrictions de réutilisation"]
    ]
  }
];

////////////////////////////////////serieC///////////////////////////////////////////////////////////////////////

const serieC = [
  {
    module: "Module 1 — Architecture Web et fondamentaux Django",
    title: "Configuration des routes",
    text: "Une URL doit appeler la vue qui affiche la fiche d’un établissement. Quel élément Django permet de relier ce chemin à cette vue ?",
    options: [
      ["A", "Le champ PointField"],
      ["B", "Le fichier de migration"],
      ["C", "Le registre des modèles de l’administration"],
      ["D", "La configuration de routage URL"]
    ]
  },
  {
    module: "Module 1 — Architecture Web et fondamentaux Django",
    title: "Rôle du modèle",
    text: "Dans une application Django, quel est le rôle principal d’un modèle ?",
    options: [
      ["A", "Afficher une carte interactive dans le navigateur"],
      ["B", "Décrire la structure des données et les opérations associées"],
      ["C", "Remplacer le système de routage"],
      ["D", "Configurer le fond cartographique Leaflet"]
    ]
  },
  {
    module: "Module 1 — Architecture Web et fondamentaux Django",
    title: "Maintenance des URL",
    text: "Un développeur modifie le chemin d’une page dans les routes Django. Quelle pratique aide à limiter les modifications nécessaires dans les templates ?",
    options: [
      ["A", "Inscrire chaque chemin en dur dans les templates"],
      ["B", "Créer une table spatiale pour chaque page"],
      ["C", "Utiliser les noms de routes et les mécanismes d’inversion d’URL"],
      ["D", "Désactiver les vues Django"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Modification du schéma",
    text: "Après avoir modifié un modèle Django, quelles commandes servent respectivement à créer les migrations et à les appliquer ?",
    options: [
      ["A", "makemigrations puis migrate"],
      ["B", "runserver puis check"],
      ["C", "collectstatic puis createsuperuser"],
      ["D", "startapp puis shell"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Relation un-à-un",
    text: "Chaque utilisateur d’une application possède exactement un profil complémentaire, et chaque profil appartient à un seul utilisateur. Quel champ convient à cette relation ?",
    options: [
      ["A", "ManyToManyField"],
      ["B", "ForeignKey sans contrainte supplémentaire"],
      ["C", "PointField"],
      ["D", "OneToOneField"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Évaluation du QuerySet",
    text: "Une variable contient un QuerySet construit avec filter(). Quelle opération peut déclencher son évaluation et l’exécution de la requête ?",
    options: [
      ["A", "Renommer la variable Python"],
      ["B", "Parcourir les résultats avec une boucle"],
      ["C", "Modifier le titre d’un template"],
      ["D", "Changer le nom d’une application"]
    ]
  },
  {
    module: "Module 2 — Modèles, migrations et ORM",
    title: "Jointures et accès aux relations",
    text: "Une page affiche le nom de chaque établissement et le nom de sa catégorie, liée par une ForeignKey. Quelle méthode aide à éviter une requête supplémentaire par établissement ?",
    options: [
      ["A", "prefetch_related() est toujours obligatoire pour toute relation"],
      ["B", "collectstatic()"],
      ["C", "select_related('categorie')"],
      ["D", "makemigrations()"]
    ]
  },
  {
    module: "Module 3 — Formulaires et sécurité",
    title: "Entrées non fiables",
    text: "Un utilisateur peut modifier les données envoyées depuis son navigateur. Que doit faire l’application avant d’enregistrer ces données ?",
    options: [
      ["A", "Les valider et les contrôler côté serveur"],
      ["B", "Supposer que toutes les valeurs sont correctes"],
      ["C", "Désactiver la base de données"],
      ["D", "Les convertir systématiquement en HTML"]
    ]
  },
  {
    module: "Module 3 — Formulaires et sécurité",
    title: "Droits d’accès",
    text: "Un utilisateur est connecté, mais il n’a pas le droit de modifier une couche communale. Quel principe Django doit empêcher cette modification ?",
    options: [
      ["A", "La reprojection des géométries"],
      ["B", "L’héritage des templates"],
      ["C", "La pagination des résultats"],
      ["D", "Le contrôle des permissions et de l’autorisation"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Géométrie d’une commune",
    text: "Une commune est représentée par une surface polygonale. Si certaines communes peuvent contenir plusieurs parties disjointes, quel type de champ est approprié ?",
    options: [
      ["A", "PointField"],
      ["B", "MultiPolygonField"],
      ["C", "LineStringField"],
      ["D", "IntegerField"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Métadonnées du CRS",
    text: "On remplace le SRID déclaré d’une géométrie sans calculer de nouvelles coordonnées. Quelle conclusion est correcte ?",
    options: [
      ["A", "Les coordonnées sont nécessairement reprojetées"],
      ["B", "La géométrie devient automatiquement valide"],
      ["C", "La modification des métadonnées ne constitue pas à elle seule une reprojection"],
      ["D", "Les coordonnées deviennent automatiquement des pixels"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Unités d’EPSG:4326",
    text: "Pourquoi une différence de 0,01 dans une coordonnée EPSG:4326 ne représente-t-elle pas directement une distance de 0,01 mètre ?",
    options: [
      ["A", "Parce que le CRS ne stocke aucune coordonnée"],
      ["B", "Parce que les coordonnées géographiques sont angulaires et non exprimées directement en mètres"],
      ["C", "Parce que PostGIS ne gère que les coordonnées textuelles"],
      ["D", "Parce que tous les points ont obligatoirement la même longitude"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Intersection spatiale",
    text: "On souhaite récupérer les géométries qui ont une intersection avec une zone donnée, y compris lorsqu’elles ne sont pas entièrement contenues dans cette zone. Quel prédicat est adapté ?",
    options: [
      ["A", "order_by"],
      ["B", "select_related"],
      ["C", "get_absolute_url"],
      ["D", "intersects"]
    ]
  },
  {
    module: "Module 4 — GeoDjango, PostGIS et CRS",
    title: "Limites d’un index spatial",
    text: "Une géométrie invalide est stockée dans une table PostGIS. Que peut-on conclure de la présence d’un index spatial ?",
    options: [
      ["A", "L’index n’assure pas à lui seul la validité géométrique"],
      ["B", "L’index corrige automatiquement la géométrie"],
      ["C", "L’index transforme la géométrie dans le bon CRS"],
      ["D", "L’index supprime les erreurs d’attributs"]
    ]
  },
  {
    module: "Module 5 — API, GeoJSON et Leaflet",
    title: "Coordonnées dans GeoJSON",
    text: "Pour un point GeoJSON bidimensionnel conforme à RFC 7946, quelle information est placée en premier dans le tableau des coordonnées ?",
    options: [
      ["A", "La latitude"],
      ["B", "La longitude"],
      ["C", "Le code EPSG"],
      ["D", "L’unité de distance"]
    ]
  },
  {
    module: "Module 5 — API, GeoJSON et Leaflet",
    title: "Propriétés exposées par une API",
    text: "Une fiche cartographique n’a besoin que du nom, de la catégorie et de la géométrie d’un établissement. Quelle pratique est la plus sûre ?",
    options: [
      ["A", "Exposer toutes les colonnes de la base sans distinction"],
      ["B", "Ajouter les mots de passe aux propriétés GeoJSON"],
      ["C", "Ne sérialiser que les propriétés nécessaires à la fonctionnalité"],
      ["D", "Envoyer les données de tous les utilisateurs connectés"]
    ]
  },
  {
    module: "Module 5 — API, GeoJSON et Leaflet",
    title: "Fonctionnement de Leaflet",
    text: "Quelle affirmation décrit le rôle de Leaflet dans une application WebSIG classique ?",
    options: [
      ["A", "Leaflet remplace PostgreSQL"],
      ["B", "Leaflet crée les migrations Django"],
      ["C", "Leaflet stocke la base métier côté serveur"],
      ["D", "Leaflet affiche la carte et gère les interactions dans le navigateur"]
    ]
  },
  {
    module: "Module 6 — Tests et déploiement",
    title: "Protection des secrets",
    text: "Où est-il préférable de stocker les mots de passe de base de données et les clés privées utilisés par l’application en production ?",
    options: [
      ["A", "Dans des variables d’environnement ou un gestionnaire de secrets adapté"],
      ["B", "Dans un dépôt Git public"],
      ["C", "Dans le code JavaScript envoyé au navigateur"],
      ["D", "Dans les propriétés GeoJSON"]
    ]
  },
  {
    module: "Module 6 — Tests et déploiement",
    title: "Environnement de test spatial",
    text: "Une fonctionnalité repose sur des prédicats spatiaux PostGIS. Quelle stratégie de test donne une évaluation plus fiable de cette fonctionnalité ?",
    options: [
      ["A", "Tester uniquement que le bouton s’affiche"],
      ["B", "Ne jamais créer de géométrie de test"],
      ["C", "Tester les requêtes avec des données contrôlées dans un backend spatial compatible"],
      ["D", "Remplacer les résultats de requête par des valeurs codées en dur"]
    ]
  },
  {
    module: "Module 6 — Tests et déploiement",
    title: "Traçabilité des données",
    text: "Pourquoi documenter la date, la source, la licence et les limites d’un jeu de données géographiques ?",
    options: [
      ["A", "Pour faire disparaître les erreurs de mesure"],
      ["B", "Pour permettre d’évaluer sa provenance, sa réutilisation et la portée des résultats"],
      ["C", "Pour remplacer les tests de l’application"],
      ["D", "Pour garantir que tous les objets sont à jour"]
    ]
  }
];


const seriesDisponibles = {
  A: serieA,
  B: serieB,
  C: serieC
};