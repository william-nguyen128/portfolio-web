import "./NavbarComponents.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaDribbble, FaTwitter, FaGithub } from "react-icons/fa";

export const socialIcons = [
  <FaYoutube />,
  <FaDribbble />,
  <FaTwitter />,
  <FaGithub />,
];

export const Logo = (
  <Link to="/" className="logo">
    William Nguyen
  </Link>
);

export const navItems = [
  {
    name: "Home",
    id: "/",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Projects",
    id: "portfolio",
  },
  {
    name: "FAQs",
    id: "faqs",
  },
  {
    name: "Appointment",
    id: "appointment",
  },
];
