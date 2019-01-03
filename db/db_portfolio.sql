-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 03, 2019 at 04:54 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_portfoliopieces`
--

DROP TABLE IF EXISTS `tbl_portfoliopieces`;
CREATE TABLE IF NOT EXISTS `tbl_portfoliopieces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(75) NOT NULL,
  `thumbnail` varchar(50) NOT NULL,
  `main_image` varchar(50) NOT NULL,
  `main_desc` varchar(800) NOT NULL,
  `sub_image1` varchar(50) NOT NULL,
  `sub_desc1` varchar(500) NOT NULL,
  `sub_image2` varchar(50) NOT NULL,
  `sub_desc2` varchar(500) NOT NULL,
  `sub_image3` varchar(50) NOT NULL,
  `sub_desc3` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_portfoliopieces`
--

INSERT INTO `tbl_portfoliopieces` (`id`, `title`, `thumbnail`, `main_image`, `main_desc`, `sub_image1`, `sub_desc1`, `sub_image2`, `sub_desc2`, `sub_image3`, `sub_desc3`) VALUES
(1, 'Bayson Heat Treating', 'bayson_thumb.png', 'bayson_main.png', 'Heat treatment is a process that takes worn down metal parts and heats them in industrial furnaces to strengthen their molecular structure. Bayson Heat Treating is London\'s local heat treatment facility, and they were looking to expand their market beyond the city limits. At the time, the 43-year-old company had almost no branding. They had a story, but they weren\'t telling it, and their competitors were taking advantage.', 'bayson_img1', 'As I learned more about the business and their history, a striking parallel between this project and their services began to emerge: just as they take worn metal and strengthen it with heat, the company was trying to revitalize their image -- like a phoenix reborn through fire. With a narrative in hand, I set to designing a logo web layout that would evoke the mythology without compromising the strong-as-steel motif Bayson needed to convey.', 'bayson_img2', 'We worked through several concepts and the result was a crisp logo that would be the face of their new story and a website to complement it. All the photography was taken myself and stylized to fit into a fiery colour scheme. The layout is a strong, clean, industrial aesthetic that looks great on desktop, tablet, and mobile. Check it out at baysonheattreat.com', '', ''),
(2, 'Seegco Power', 'seegco_thumb.png', 'seegco_main.png', 'What started out as a small promotional design quickly evolved into a complete branding project. The client, Seegco Power, is an international startup that saves manufacturers on electric and repair bills using harmonics to ensure no power is wasted and all machines are running at the same frequency.', 'seegco_img1', 'The main goal with the logo was to convey a sense of power and harmony while avoiding cliche pitfalls like lightning bolts or batteries. If there\'s a symbol that oversaturates and industry, I tend to avoid it at all costs because it runs the risk of your story being lost in all the noise. The result is an emblem that uses power lines to show power and cohesion, as well as progress and forward momentum, in an original and memorable way.', 'seegco_img2', 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin semper lectus in lobortis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae hendrerit ex, rhoncus feugiat quam. Sed sollicitudin turpis vitae odio efficitur dapibus. Morbi ligula lectus, tempor eu justo a, vestibulum vestibulum massa.', '', ''),
(3, 'PureVolume', 'purevolume_thumb.png', 'purevolume_main.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet iaculis enim. Nam pretium pellentesque massa, sit amet euismod odio ornare vitae. Phasellus lacinia tincidunt blandit. Ut neque dui, dapibus at neque quis, gravida accumsan orci. Nunc efficitur pulvinar turpis, sed convallis magna congue et. Suspendisse odio felis, feugiat vitae finibus eget, vestibulum suscipit justo.', 'purevolume_img1.png', 'Fusce nec purus eget eros venenatis eleifend sit amet id urna. Curabitur lobortis bibendum ipsum, at tempus enim suscipit in. Mauris convallis placerat ligula et ultricies. Sed volutpat tincidunt fringilla. Integer fringilla erat nulla, at feugiat velit ullamcorper nec. Maecenas iaculis metus odio, vel euismod ex pulvinar ut.', 'purevolume_img2.png', 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin semper lectus in lobortis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae hendrerit ex, rhoncus feugiat quam. Sed sollicitudin turpis vitae odio efficitur dapibus. Morbi ligula lectus, tempor eu justo a, vestibulum vestibulum massa.', '', ''),
(4, 'Oceanfuse', 'oceanfuse_thumb.png', 'oceanfuse_main.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet iaculis enim. Nam pretium pellentesque massa, sit amet euismod odio ornare vitae. Phasellus lacinia tincidunt blandit. Ut neque dui, dapibus at neque quis, gravida accumsan orci. Nunc efficitur pulvinar turpis, sed convallis magna congue et. Suspendisse odio felis, feugiat vitae finibus eget, vestibulum suscipit justo.', 'oceanfuse_img1.png', 'Fusce nec purus eget eros venenatis eleifend sit amet id urna. Curabitur lobortis bibendum ipsum, at tempus enim suscipit in. Mauris convallis placerat ligula et ultricies. Sed volutpat tincidunt fringilla. Integer fringilla erat nulla, at feugiat velit ullamcorper nec. Maecenas iaculis metus odio, vel euismod ex pulvinar ut.', 'oceanfuse_img2.png', 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin semper lectus in lobortis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae hendrerit ex, rhoncus feugiat quam. Sed sollicitudin turpis vitae odio efficitur dapibus. Morbi ligula lectus, tempor eu justo a, vestibulum vestibulum massa.', '', ''),
(5, 'Branding', 'branding_thumb.png', 'branding_main.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet iaculis enim. Nam pretium pellentesque massa, sit amet euismod odio ornare vitae. Phasellus lacinia tincidunt blandit. Ut neque dui, dapibus at neque quis, gravida accumsan orci. Nunc efficitur pulvinar turpis, sed convallis magna congue et. Suspendisse odio felis, feugiat vitae finibus eget, vestibulum suscipit justo.', 'branding_img1.png', 'Fusce nec purus eget eros venenatis eleifend sit amet id urna. Curabitur lobortis bibendum ipsum, at tempus enim suscipit in. Mauris convallis placerat ligula et ultricies. Sed volutpat tincidunt fringilla. Integer fringilla erat nulla, at feugiat velit ullamcorper nec. Maecenas iaculis metus odio, vel euismod ex pulvinar ut. ', 'branding_img2.png', 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin semper lectus in lobortis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae hendrerit ex, rhoncus feugiat quam. Sed sollicitudin turpis vitae odio efficitur dapibus. Morbi ligula lectus, tempor eu justo a, vestibulum vestibulum massa.', '', ''),
(6, 'Digital Media', 'digital_thumb.png', 'digital_main.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet iaculis enim. Nam pretium pellentesque massa, sit amet euismod odio ornare vitae. Phasellus lacinia tincidunt blandit. Ut neque dui, dapibus at neque quis, gravida accumsan orci. Nunc efficitur pulvinar turpis, sed convallis magna congue et. Suspendisse odio felis, feugiat vitae finibus eget, vestibulum suscipit justo.', 'digital_img1.png', 'Fusce nec purus eget eros venenatis eleifend sit amet id urna. Curabitur lobortis bibendum ipsum, at tempus enim suscipit in. Mauris convallis placerat ligula et ultricies. Sed volutpat tincidunt fringilla. Integer fringilla erat nulla, at feugiat velit ullamcorper nec. Maecenas iaculis metus odio, vel euismod ex pulvinar ut.', 'digital_img2.png', 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin semper lectus in lobortis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae hendrerit ex, rhoncus feugiat quam. Sed sollicitudin turpis vitae odio efficitur dapibus. Morbi ligula lectus, tempor eu justo a, vestibulum vestibulum massa.', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
