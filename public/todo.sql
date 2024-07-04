-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 04-07-2024 a las 19:32:37
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `todo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `porhacer`
--

CREATE TABLE `porhacer` (
  `id` int NOT NULL,
  `tarea` varchar(500) NOT NULL,
  `completado` varchar(2) NOT NULL,
  `fechacreacion` date NOT NULL,
  `fecharealizacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `porhacer`
--

INSERT INTO `porhacer` (`id`, `tarea`, `completado`, `fechacreacion`, `fecharealizacion`) VALUES
(4, 'Crear formularios para recopilar datos del usuario', 'Si', '2022-01-18', '2024-01-08'),
(7, 'Agregar interactividad con JavaScript', 'No', '2022-01-17', '2022-01-17'),
(8, 'Crear formularios para recopilar datos del usuario', 'No', '2022-01-18', '2022-01-18'),
(9, 'Conectar la página a una base de datos MySQL', 'No', '2022-01-19', '2022-01-19'),
(10, 'Implementar un sistema de inicio de sesión', 'No', '2022-01-20', '2022-01-20'),
(11, 'Optimizar la página para mejorar el rendimiento', 'No', '2022-01-21', '2022-01-21'),
(12, 'Realizar pruebas y depuración', 'No', '2022-01-22', '2022-01-22'),
(13, 'contenido de css II', 'No', '2024-07-03', '2024-07-03'),
(14, 'Contenido de HTML', 'No', '2024-07-03', '2024-07-03'),
(16, 'Contenido de Node', 'No', '2024-07-03', '2024-07-03'),
(19, 'Contenido de Astro III', 'No', '2024-07-04', '2024-07-04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `porhacer`
--
ALTER TABLE `porhacer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `porhacer`
--
ALTER TABLE `porhacer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
