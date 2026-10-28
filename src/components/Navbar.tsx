import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/Projects" },
  { name: "Education", href: "/Education" },
  { name: "Skills", href: "/Skills" },
  { name: "Contact", href: "/Contact" },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
