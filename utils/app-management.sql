-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 29-08-2024 a las 13:19:19
-- Versión del servidor: 10.6.18-MariaDB-cll-lve
-- Versión de PHP: 8.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `app-management`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `init_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `end_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `attendance`
--

INSERT INTO `attendance` (`id`, `user_id`, `init_date`, `end_date`) VALUES
(1, 1, '2024-07-15 19:11:36', '2024-07-02 03:00:00'),
(2, 2, '2024-07-01 07:00:00', '0000-00-00 00:00:00'),
(3, 3, '2024-07-01 07:00:00', '0000-00-00 00:00:00'),
(4, 4, '2024-07-01 07:00:00', '0000-00-00 00:00:00'),
(5, 5, '2024-07-01 07:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `attendances`
--

CREATE TABLE `attendances` (
  `id` int(11) NOT NULL,
  `init_date` datetime NOT NULL,
  `end_date` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `benefits`
--

CREATE TABLE `benefits` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `benefit_type_id` int(11) DEFAULT NULL,
  `request_date` date DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `created` date DEFAULT NULL,
  `updated` date DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `benefits`
--

INSERT INTO `benefits` (`id`, `user_id`, `benefit_type_id`, `request_date`, `status`, `created`, `updated`, `updated_by`) VALUES
(1, 1, 1, '2024-06-01', 'Aprobado', '2024-06-01', '2024-06-02', 3),
(2, 2, 2, '2024-05-15', 'Pendiente', '2024-05-15', '2024-05-16', 1),
(3, 3, 3, '2024-04-20', 'Aprobado', '2024-04-20', '2024-04-21', 2),
(4, 4, 4, '2024-03-10', 'Rechazado', '2024-03-10', '2024-03-11', 3),
(5, 5, 1, '2024-02-25', 'Pendiente', '2024-02-25', '2024-02-26', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `benefit_types`
--

CREATE TABLE `benefit_types` (
  `id` int(11) NOT NULL,
  `benefit_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `benefit_types`
--

INSERT INTO `benefit_types` (`id`, `benefit_name`) VALUES
(3, 'Bono'),
(2, 'Seguro Médico'),
(4, 'Transporte'),
(1, 'Vacaciones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(400) NOT NULL,
  `init_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `end_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `place` varchar(200) NOT NULL,
  `is_private` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `event`
--

INSERT INTO `event` (`id`, `title`, `description`, `init_date`, `end_date`, `created`, `place`, `is_private`) VALUES
(1, 'evento1 - hola', 'descripcion evento 1', '2024-07-10 19:55:42', '2024-07-31 00:22:04', '2024-07-17 00:52:04', 'fasfsafsaf', 0),
(2, 'evento2', 'gfadfasdadfasfasf', '2024-08-17 00:33:28', '2024-07-31 00:22:04', '2024-07-17 01:04:26', 'kkkk', 1),
(3, 'evento3', 'gfadfasdadfasfasf', '2024-07-26 00:24:32', '2024-07-31 00:22:04', '2024-07-17 01:04:31', 'kkkk', 1),
(4, 'evento4', 'hassafdsa', '2024-07-29 19:33:35', '2024-07-31 00:24:54', '2024-07-17 00:24:57', 'fafasf', 1),
(5, 'evento5', 'hassafdsa', '2024-07-17 00:33:39', '2024-07-31 00:24:54', '2024-07-17 00:25:49', 'fafasf', 1),
(6, 'evento6', 'hassafdsa', '2024-07-17 00:33:42', '2024-07-31 00:24:54', '2024-07-17 00:27:36', 'fafasf', 1),
(7, 'evento6', 'hassafdsa', '2024-07-17 00:33:42', '2024-07-31 00:24:54', '2024-07-17 00:43:20', 'fafasf', 0),
(8, 'evento1fsafasf', 'gfadfasdad', '2024-07-17 00:33:22', '2024-07-31 00:22:04', '2024-07-17 00:46:00', 'fasfsafsaf', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payroll`
--

CREATE TABLE `payroll` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `payment_date` date NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `status` varchar(20) NOT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `payroll`
--

INSERT INTO `payroll` (`id`, `user_id`, `payment_date`, `amount`, `status`, `updated_by`) VALUES
(1, 1, '2024-06-30', 1500.00, 'Pagado', 3),
(2, 2, '2024-06-30', 1600.00, 'Pendiente', 1),
(3, 3, '2024-06-30', 2000.00, 'Pagado', 2),
(4, 4, '2024-06-30', 1400.00, 'Pendiente', 3),
(5, 5, '2024-06-30', 1800.00, 'Pagado', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `description` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `description`) VALUES
(1, 'Admin', 'Administrador del sistema con todos los permisos'),
(2, 'Manager', 'Gerente con permisos limitados a su departamento'),
(3, 'Employee', 'Empleado con permisos básicos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `password` varchar(250) NOT NULL,
  `created` date NOT NULL,
  `job_title` varchar(50) DEFAULT NULL,
  `image_url` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone`, `password`, `created`, `job_title`, `image_url`) VALUES
(1, 'Diegoss', 'Merinos', 'diegos@gmail.com', '99999', '$2a$10$KJe1qyJiY0OTZJNUNYPlC.4lpDjE/hgjjW0AiBDLNYzVB9a73Az4y', '2022-01-10', 'Desarrolladors', 'https://cdn-icons-png.flaticon.com/512/912/912265.png'),
(2, 'John', 'Doe', 'maria.garcia@example.com', '0987654321', '$2a$10$KJe1qyJiY0OTZJNUNYPlC.4lpDjE/hgjjW0AiBDLNYzVB9a73Az4y', '2021-05-22', 'Analista', 'https://www.idearius.com/es/wp-content/uploads/foto-ambiente-lab-01.jpg'),
(3, 'Pedro', 'Rodriguez', 'pedro.rodriguez@example.com', '1122334455', '$2a$10$KJe1qyJiY0OTZJNUNYPlC.4lpDjE/hgjjW0AiBDLNYzVB9a73Az4y', '2020-03-15', 'Gerente', 'https://flexoh.com/hrtrendy/wp-content/uploads/2021/12/propuesta-valor-empleado-pve-como-mejorarla-1024x680.jpg'),
(4, 'Ana', 'Martinez', 'ana.martinez@example.com', '5566778899', '$2a$10$KJe1qyJiY0OTZJNUNYPlC.4lpDjE/hgjjW0AiBDLNYzVB9a73Az4y', '2019-07-01', 'Soporte Técnico', 'https://suramericana.com/content/uploads/sites/10/2020/01/seguros-sura-que-hacer-si-un-empleado-se-cae-en-la-empresa.jpg'),
(5, 'Luis', 'Lopez', 'luis.lopez@example.com', '6677889900', '$2a$10$KJe1qyJiY0OTZJNUNYPlC.4lpDjE/hgjjW0AiBDLNYzVB9a73Az4y', '2018-11-30', 'Consultor', 'https://www.muycomputerpro.com/wp-content/uploads/2018/01/tiempo-media-empleado-tecnologicas.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`id`, `user_id`, `role_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 1, 3),
(5, 5, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `benefits`
--
ALTER TABLE `benefits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `benefit_type_id` (`benefit_type_id`),
  ADD KEY `updated_by` (`updated_by`);

--
-- Indices de la tabla `benefit_types`
--
ALTER TABLE `benefit_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `benefit_name` (`benefit_name`);

--
-- Indices de la tabla `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `payroll`
--
ALTER TABLE `payroll`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `updated_by` (`updated_by`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `role_name` (`role_name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `attendances`
--
ALTER TABLE `attendances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `benefits`
--
ALTER TABLE `benefits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `benefit_types`
--
ALTER TABLE `benefit_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `payroll`
--
ALTER TABLE `payroll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `attendances`
--
ALTER TABLE `attendances`
  ADD CONSTRAINT `attendances_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `benefits`
--
ALTER TABLE `benefits`
  ADD CONSTRAINT `benefits_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `benefits_ibfk_2` FOREIGN KEY (`benefit_type_id`) REFERENCES `benefit_types` (`id`),
  ADD CONSTRAINT `benefits_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `payroll`
--
ALTER TABLE `payroll`
  ADD CONSTRAINT `payroll_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `payroll_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
