-- Supprimer la base de données immo s'il existe
DROP DATABASE IF EXISTS immo;

-- Créer une nouvelle base de données immo
CREATE DATABASE immo;

-- Utiliser la base de données immo
USE immo;

-- Table pour les utilisateurs
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(255) NOT NULL, mot_de_passe VARCHAR(255) NOT NULL
);

-- Table pour les demandes de contact
CREATE TABLE demande_de_contact (
    id INT PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, telephone VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, sujet VARCHAR(255) NOT NULL, message TEXT NOT NULL, date_demande TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les avis clients
CREATE TABLE avis_client (
    id INT PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(255) NOT NULL, commentaire TEXT NOT NULL, date_publication DATE NOT NULL, note INT CHECK (
        note >= 1
        AND note <= 5
    )
);

-- Table pour les annonces
CREATE TABLE annonce (
    id INT PRIMARY KEY AUTO_INCREMENT, titre VARCHAR(255) NOT NULL, description TEXT NOT NULL, prix DECIMAL(10, 2) NOT NULL
);

-- Table pour les images des annonces
CREATE TABLE annonce_image (
    id INT PRIMARY KEY AUTO_INCREMENT, annonce_id INT NOT NULL, image_url TEXT NOT NULL, FOREIGN KEY (annonce_id) REFERENCES annonce (id)
);

-- Insertion d'un utilisateur admin
INSERT INTO user
 (nom, mot_de_passe) 
 VALUES
  ("admin", "admin"), ("visiteur", "visiteur");

-- Insertion d'exemples de demandes de contact
INSERT INTO
    demande_de_contact (
        nom, prenom, telephone, adresse, sujet, message
    )
VALUES (
        "Simon", "PrénomSimon", "123456789", "AdresseSimon", "SujetSimon", "MessageSimon"
    ),
    (
        "Alice", "PrénomAlice", "987654321", "AdresseAlice", "SujetAlice", "MessageAlice"
    ),
    (
        "Bob", "PrénomBob", "567890123", "AdresseBob", "SujetBob", "MessageBob"
    );

-- Insertion d'avis clients
INSERT INTO
    avis_client (
        nom, commentaire, date_publication, note
    )
VALUES (
        "Eva", "Excellent service! Je recommande vivement cette agence immobilière.", '2023-11-29', 5
    ),
    (
        "David", "Très satisfait de mon achat. Le processus a été fluide et professionnel.", '2023-11-28', 4
    ),
    (
        "Sophie", "Bonne expérience globale. Le personnel était aimable et compétent.", '2023-11-27', 3
    );

-- Insertion d'exemples d'annonces
INSERT INTO
    annonce (titre, description, prix)
VALUES (
        "Appartement spacieux en centre-ville", "Bel appartement lumineux de 3 pièces en plein cœur de la ville. Proche des commerces et des transports en commun.", 150000.00
    ),
    (
        "Maison avec jardin et piscine", "Magnifique maison de 4 chambres avec un grand jardin et une piscine. Idéale pour une famille.", 300000.00
    ),
    (
        "Studio cosy près du parc", "Studio récemment rénové situé à proximité d'un parc. Parfait pour un étudiant ou un jeune professionnel.", 80000.00
    ),
    (
        "Studio cosy près du parc", "Studio récemment rénové situé à proximité d'un parc. Parfait pour un étudiant ou un jeune professionnel.", 80000.00
    ),
    (
        "Studio cosy près du parc", "Studio récemment rénové situé à proximité d'un parc. Parfait pour un étudiant ou un jeune professionnel.", 80000.00
    ),
    (
        "Studio cosy près du parc", "Studio récemment rénové situé à proximité d'un parc. Parfait pour un étudiant ou un jeune professionnel.", 80000.00
    );

-- Insertion des images associées aux annonces
INSERT INTO
    annonce_image (annonce_id, image_url)
VALUES (
        1, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    ),
    (
        1, "https://cdn.pixabay.com/photo/2018/08/20/11/38/house-3618709_960_720.jpg"
    ),
    (
        1, "https://cdn.pixabay.com/photo/2018/08/20/11/38/house-3618709_960_720.jpg"
    ),
    (
        2, "https://cdn.pixabay.com/photo/2018/08/20/11/38/house-3618709_960_720.jpg"
    ),
    (
        2, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    ),
    (
        2, "https://cdn.pixabay.com/photo/2018/08/20/11/38/house-3618709_960_720.jpg"
    ),
    (
        3, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    ),
    (
        4, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    ),
    (
        5, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    ),
    (
        3, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    ),
    (
        4, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    ),
    (
        5, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    ),
    (
        6, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    ),
    (
        6, "https://cdn.pixabay.com/photo/2018/08/20/11/38/house-3618709_960_720.jpg"
    ),
    (
        6, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    ),
    (
        6, "https://cdn.pixabay.com/photo/2020/04/30/19/48/interior-5114392_1280.jpg"
    );