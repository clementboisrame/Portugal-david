DROP TABLE IF EXISTS admin;

DROP TABLE IF EXISTS demande_de_contact;

DROP TABLE IF EXISTS avis_client;

DROP DATABASE IF EXISTS immo;

CREATE DATABASE immo;

USE immo;

CREATE TABLE
    admin (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nom VARCHAR(255) NOT NULL,
        mot_de_passe VARCHAR(255) NOT NULL
    );

CREATE TABLE
    demande_de_contact (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nom VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        date_demande TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    avis_client (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nom VARCHAR(255) NOT NULL,
        commentaire TEXT NOT NULL,
        date_publication DATE NOT NULL,
        note INT CHECK (
            note >= 1
            AND note <= 5
        )
    );

INSERT INTO admin (nom, mot_de_passe) VALUES ("admin", "admin");

INSERT INTO
    demande_de_contact (nom, email, message)
VALUES (
        "Simon",
        "simon@gmail.com",
        "Je souhaiterais acheter une maison au Portugal. Merci de me contacter."
    );

-- Ajoutez d'autres lignes d'avis_client et demande_de_contact selon vos besoins.

-- Ajouter plusieurs demandes de contact avec des messages plus longs

INSERT INTO
    demande_de_contact (nom, email, message)
VALUES (
        "Alice",
        "alice@example.com",
        "Demande de contact 1. Ceci est un message plus long décrivant la demande de contact d'Alice."
    ), (
        "Bob",
        "bob@example.com",
        "Demande de contact 2. Bob a des questions spécifiques sur les propriétés disponibles."
    ), (
        "Charlie",
        "charlie@example.com",
        "Demande de contact 3. Charlie souhaite planifier une visite pour explorer les options."
    );

-- Ajouter plusieurs avis clients avec des commentaires plus longs

INSERT INTO
    avis_client (
        nom,
        commentaire,
        date_publication,
        note
    )
VALUES (
        "Eva",
        "Excellent service! Je recommande vivement cette agence immobilière.",
        '2023-11-29',
        5
    ), (
        "David",
        "Très satisfait de mon achat. Le processus a été fluide et professionnel.",
        '2023-11-28',
        4
    ), (
        "Sophie",
        "Bonne expérience globale. Le personnel était aimable et compétent.",
        '2023-11-27',
        3
    );