-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS VideojuegosDB;

USE VideojuegosDB;

-- Crear la tabla 'Juegos'
CREATE TABLE IF NOT EXISTS Juegos (
    id INT PRIMARY KEY AUTO_INCREMENT, titulo VARCHAR(100) NOT NULL, genero VARCHAR(50), plataforma VARCHAR(50), lanzamiento DATE, desarrolladora VARCHAR(100)
);

-- Insertar algunos ejemplos de juegos
INSERT INTO
    Juegos (
        titulo, genero, plataforma, lanzamiento, desarrolladora
    )
VALUES (
        'Call of Duty: Warzone', 'Battle Royale', 'PC', '2020-03-10', 'Infinity Ward'
    ),
    (
        'Among Us', 'Social Deduction', 'PC', '2018-11-16', 'Innersloth'
    ),
    (
        'The Last of Us Part II', 'Acción y Aventura', 'PlayStation 4', '2020-06-19', 'Naughty Dog'
    ),
    (
        'Apex Legends', 'Battle Royale', 'PC', '2019-02-04', 'Respawn Entertainment'
    ),
    (
        'World of Warcraft', 'MMORPG', 'PC', '2004-11-23', 'Blizzard Entertainment'
    ),
    (
        'Hades', 'Roguelike', 'PC', '2020-09-17', 'Supergiant Games'
    ),
    (
        'Genshin Impact', 'Action RPG', 'PC', '2020-09-28', 'miHoYo'
    ),
    (
        'Star Wars Jedi: Fallen Order', 'Acción y Aventura', 'Xbox One', '2019-11-15', 'Respawn Entertainment'
    ),
    (
        'Nier: Automata', 'Action RPG', 'PlayStation 4', '2017-02-23', 'PlatinumGames'
    ),
    (
        'Fall Guys: Ultimate Knockout', 'Battle Royale', 'PC', '2020-08-04', 'Mediatonic'
    ),
    (
        'God of War', 'Acción y Aventura', 'PlayStation 4', '2018-04-20', 'Santa Monica Studio'
    ),
    (
        'Among Us', 'Social Deduction', 'iOS', '2018-11-16', 'Innersloth'
    ),
    (
        'Valorant', 'FPS', 'PC', '2020-06-02', 'Riot Games'
    ),
    (
        'Monster Hunter: World', 'Action RPG', 'PlayStation 4', '2018-01-26', 'Capcom'
    ),
    (
        'The Sims 4', 'Simulación', 'PC', '2014-09-02', 'Maxis'
    ),
    (
        'Rainbow Six: Quarantine', 'FPS', 'PC', '2022-01-20', 'Ubisoft Montreal'
    ),
    (
        'Diablo III', 'Action RPG', 'PC', '2012-05-15', 'Blizzard Entertainment'
    ),
    (
        'Fortnite', 'Battle Royale', 'Xbox One', '2017-07-25', 'Epic Games'
    ),
    (
        'Cyberpunk 2077', 'RPG', 'Xbox Series X', '2020-12-10', 'CD Projekt'
    ),
    (
        'Rocket League', 'Deportes', 'PC', '2015-07-07', 'Psyonix'
    );