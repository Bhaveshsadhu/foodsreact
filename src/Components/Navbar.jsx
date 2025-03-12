import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <a href="#" className="navbar-link">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </a>
        <a href="#" className="navbar-link">
          <i class="fas fa-utensils"></i>
          <span>Meals</span>
        </a>
        <a href="#" className="navbar-link">
          <i class="fas fa-hamburger"></i>
          <span>Burger</span>
        </a>
        <a href="#" className="navbar-link">
          <i class="fas fa-pizza-slice"></i>
          <span>Pizza</span>
        </a>
        <a href="#" className="navbar-link">
          <i class="fas fa-blender-phone"></i>
          <span>Contact</span>
        </a>
      </nav>

      <div
        className={`menu ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>
    </>
  );
}
