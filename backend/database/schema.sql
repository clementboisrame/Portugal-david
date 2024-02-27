-- Supprimer la base de données immo s'il existe
DROP DATABASE IF EXISTS immo;

-- Créer une nouvelle base de données immo
CREATE DATABASE immo;

-- Utiliser la base de données immo
USE immo;

-- Table pour les utilisateurs
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL
);

-- Table pour les demandes de contact
CREATE TABLE demande_de_contact (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    telephone VARCHAR(255) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    sujet VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    date_demande TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les avis clients
CREATE TABLE avis_client (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    commentaire TEXT NOT NULL,
    date_publication DATE NOT NULL,
    note INT CHECK (note >= 1 AND note <= 5)
);
-- Table pour les annonces
CREATE TABLE annonce (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    images TEXT NOT NULL
);

-- Insertion d'un utilisateur admin
INSERT INTO user (nom, mot_de_passe)
VALUES ("admin", "admin");

-- Insertion d'exemples de demandes de contact
INSERT INTO demande_de_contact (nom, prenom, telephone, adresse, sujet, message)
VALUES
    ("Simon", "PrénomSimon", "123456789", "AdresseSimon", "SujetSimon", "MessageSimon"),
    ("Alice", "PrénomAlice", "987654321", "AdresseAlice", "SujetAlice", "MessageAlice"),
    ("Bob", "PrénomBob", "567890123", "AdresseBob", "SujetBob", "MessageBob");

-- Insertion d'avis clients
INSERT INTO avis_client (nom, commentaire, date_publication, note)
VALUES
    ("Eva", "Excellent service! Je recommande vivement cette agence immobilière.", '2023-11-29', 5),
    ("David", "Très satisfait de mon achat. Le processus a été fluide et professionnel.", '2023-11-28', 4),
    ("Sophie", "Bonne expérience globale. Le personnel était aimable et compétent.", '2023-11-27', 3);
-- Insertion d'exemples d'annonces
INSERT INTO annonce (titre, description, prix, images)
VALUES
    ("Appartement spacieux en centre-ville", "Bel appartement lumineux de 3 pièces en plein cœur de la ville. Proche des commerces et des transports en commun.", 150000.00, "/chemin/vers/image1.jpg,/chemin/vers/image2.jpg,/chemin/vers/image3.jpg"),
    ("Maison avec jardin et piscine", "Magnifique maison de 4 chambres avec un grand jardin et une piscine. Idéale pour une famille.", 300000.00, "/chemin/vers/image4.jpg,/chemin/vers/image5.jpg"),
    ("Studio cosy près du parc", "Studio récemment rénové situé à proximité d'un parc. Parfait pour un étudiant ou un jeune professionnel.", 80000.00, "/chemin/vers/image6.jpg"),
 ("Appartement spacieux en centre-ville", "Bel appartement lumineux de 3 pièces en plein cœur de la ville. Proche des commerces et des transports en commun.", 150000.00, "/chemin/vers/image1.jpg,/chemin/vers/image2.jpg,/chemin/vers/image3.jpg"),
    ("Maison avec jardin et piscine", "Magnifique maison de 4 chambres avec un grand jardin et une piscine. Idéale pour une famille.", 300000.00, "/chemin/vers/image4.jpg,/chemin/vers/image5.jpg"),
    ("Studio cosy près du parc", "Studio récemment rénové situé à proximité d'un parc. Parfait pour un étudiant ou un jeune professionnel.", 80000.00, "/chemin/vers/image6.jpg"),
 ("Appartement spacieux en centre-ville", "Bel appartement lumineux de 3 pièces en plein cœur de la ville. Proche des commerces et des transports en commun.", 150000.00, "/chemin/vers/image1.jpg,/chemin/vers/image2.jpg,/chemin/vers/image3.jpg"),
    ("Maison avec jardin et piscine", "Magnifique maison de 4 chambres avec un grand jardin et une piscine. Idéale pour une famille.", 300000.00, "/chemin/vers/image4.jpg,/chemin/vers/image5.jpg"),
    ("Studio cosy près du parc", "Studio récemment rénové situé à proximité d'un parc. Parfait pour un étudiant ou un jeune professionnel.", 80000.00, "/chemin/vers/image6.jpg"),
 ("Appartement spacieux en centre-ville", "Bel appartement lumineux de 3 pièces en plein cœur de la ville. Proche des commerces et des transports en commun.", 150000.00, "/chemin/vers/image1.jpg,/chemin/vers/image2.jpg,/chemin/vers/image3.jpg"),
    ("Maison avec jardin et piscine", "Magnifique maison de 4 chambres avec un grand jardin et une piscine. Idéale pour une famille.", 300000.00, "/chemin/vers/image4.jpg,/chemin/vers/image5.jpg"),
    ("Studio cosy près du parc", "Studio récemment rénové situé à proximité d'un parc. Parfait pour un étudiant ou un jeune professionnel.", 80000.00, "/chemin/vers/image6.jpg");
