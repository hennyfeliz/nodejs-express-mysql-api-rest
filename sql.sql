/* [ You must to use the db of your preference :D ] */

/*	[ add these tables ] */

/* [INQUILINOS TABLE] */
CREATE TABLE `inquilinos` (
  `id_inquilino` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellido` varchar(80) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `descripcion_preferencia` text NOT NULL,
  PRIMARY KEY (id_inquilino)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/* [PROPIETARIOS TABLE] */
CREATE TABLE `propietarios` (
  `id_propietario` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellidos` varchar(80) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (id_propietario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/* [VIVIENDAS TABLE] */
CREATE TABLE `viviendas` (
  `id_vivienda` int NOT NULL,
  `calle` varchar(100) NOT NULL,
  `numero` int NOT NULL,
  `piso` int NOT NULL,
  `provincia` varchar(40) NOT NULL,
  `municipio` int NOT NULL,
  `id_inquilino` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci default NULL,
  `id_propietario` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  CONSTRAINT fk_id_propietario FOREIGN KEY (id_propietario) REFERENCES propietarios (id_propietario),
  CONSTRAINT fk_id_inquilinos FOREIGN KEY (id_inquilino) REFERENCES inquilinos (id_inquilino),
  PRIMARY KEY (id_vivienda)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/* [CONTRATO TABLE] */
CREATE TABLE `contrato` (
  `id_contrato` int NOT NULL,
  `fecha_fin_alquiler` date DEFAULT NULL,
  `fecha_firma` date DEFAULT NULL,
  `fecha_inicio_alquiler` date DEFAULT NULL,
  `importe` int DEFAULT NULL,
  `id_inquilino` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_vivienda` int DEFAULT NULL,
  CONSTRAINT fk_inquilinos FOREIGN KEY (id_inquilino) REFERENCES inquilinos (id_inquilino),
  CONSTRAINT fk_viviendas FOREIGN KEY (id_vivienda) REFERENCES viviendas (id_vivienda),
  PRIMARY KEY (id_contrato)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


/* [ add these records ] */


/* [PROPIETARIOS TABLE] */
insert into propietarios(id_propietario, nombre, apellidos, telefono, direccion, email) values
("402-2398122-1", "Roberto", "Sanchez","+1(809)293-1238","Las palmas #293", "roberto@gmail.com"),
("402-3988458-1", "Francisco", "Gonzales","+1(809)482-4921","Las rosas #592", "francisco@gmail.com"),
("402-1928342-1", "Maria", "Rosario","+1(809)582-5492","Las pinchas #482", "maria@gmail.com"),
("402-6932941-1", "Felipe", "Mendez","+1(809)584-5923","Las rosarias #392", "felipe@gmail.com");

/* [INQUILINOS TABLE] */
insert into inquilinos(id_inquilino, nombre, apellido, fecha_nacimiento , telefono, descripcion_preferencia) values
("402-4912382-1", "Cristobal", "Melineli",'2001-10-01',"+1(809)230-3912", "Una bonita casa blanca"),
("402-4812394-1", "Carlos", "Santino", '1992-03-13',"+1(809)293-2391", "Una bonita casa preciosa"),
("402-1293123-1", "Miguel", "Muncano", '1993-11-05',"+1(809)203-2398", "Una bonita casa azul"),
("402-8928312-1", "Ramiro", "Reyes", '1999-07-12',"+1(809)328-2931", "Una bonita casa grande");

/* [VIVIENDAS TABLE] */
insert into viviendas(id_vivienda, calle, numero, piso, provincia, municipio, id_propietario, id_inquilino) values
(1, "Las palmas #238", 2912, 2, "Guadalupe", 1, "402-2398122-1", null),
(2, "Las rosas #21", 21, 21,"Francisca", 3, "402-2398122-1", null),
(3, "Las fresas #22", 25, 2123,"Gutierres", 412, "402-3988458-1", "402-4912382-1"),
(4, "Las mariposas #111", 1131,21,"La vega", 333, "402-3988458-1", "402-4812394-1"),
(5, "Las palomas #29", 295, 22,"San Francisco", 1221, "402-3988458-1", "402-1293123-1"),
(6, "Las subidas #001", 23, 28,"Herrera", 111, "402-3988458-1", "402-8928312-1");

/* [CONTRATO TABLE] */
insert into contrato(id_contrato, id_inquilino, id_vivienda, fecha_firma, fecha_inicio_alquiler, fecha_fin_alquiler, importe) values
(18421, "402-4812394-1", 1, '2014-01-10', '2014-01-10', '2017-11-06', 5000),
(22309, "402-1293123-1", 2, '2020-12-01', '2020-12-01', '2021-12-11', 4000),
(12393, "402-4912382-1", 3, '2022-01-01', '2022-01-01', '2022-11-17', 10000);

