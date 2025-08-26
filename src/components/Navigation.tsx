import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "About me", href: "#about" },
    { label: "My portfolio", href: "#portfolio" },
    { label: "My services", href: "#services" },
    { label: "My contacts", href: "#contacts" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-md rounded-full px-8 py-3 border border-white/10">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="nav-link text-white font-medium text-sm tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;