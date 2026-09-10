import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf,
  Menu,
  X,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
} from "lucide-react";

import patagonia from "@/assets/patagonia.jpg";
import costarica from "@/assets/costarica.jpg";
import andes from "@/assets/andes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "EcoTravel - Descubre el turismo sostenible",
      },
      {
        name: "description",
        content:
          "Explora destinos responsables, conecta con la naturaleza y viaja dejando una huella positiva en el planeta.",
      },
      {
        property: "og:title",
        content: "EcoTravel - Descubre el turismo sostenible",
      },
      {
        property: "og:description",
        content:
          "Explora destinos responsables, conecta con la naturaleza y viaja dejando una huella positiva en el planeta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "EcoTravel - Descubre el turismo sostenible",
      },
      {
        name: "twitter:description",
        content:
          "Explora destinos responsables, conecta con la naturaleza y viaja dejando una huella positiva en el planeta.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Destinos", href: "#destinos" },
  { label: "Consejos", href: "#consejos" },
  { label: "Contacto", href: "#contacto" },
];

const destinations = [
  {
    id: "patagonia",
    title: "Bosques de Patagonia",
    image: patagonia,
    description:
      "Recorre senderos de lenga y coihue entre glaciares y montañas. Una experiencia de trekking de bajo impacto en el corazón de la Argentina austral.",
  },
  {
    id: "costarica",
    title: "Playas de Costa Rica",
    image: costarica,
    description:
      "Relájate en albergues ecológicos frente al Caribe o el Pacífico. Avistamiento de tortugas, surf sostenible y comunidades locales te esperan.",
  },
  {
    id: "andes",
    title: "Montañas de los Andes",
    image: andes,
    description:
      "Descubre pueblos originarios, valles verdes y cumbres nevadas. Turismo comunitario que respeta las tradiciones y protege la biodiversidad.",
  },
];

function NavAnchor({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
          >
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              EcoTravel
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavAnchor
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </NavAnchor>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
            >
              Planifica tu viaje
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground md:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavAnchor
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </NavAnchor>
              ))}
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Planifica tu viaje
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-accent/10 via-primary/5 to-background px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
              <Leaf className="h-4 w-4 text-accent" aria-hidden="true" />
              Viajes que cuidan el planeta
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Descubre destinos que dejan huella positiva
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              EcoTravel reúne experiencias de turismo responsable: naturaleza,
              cultura local y alojamientos sostenibles para quienes viajan con
              conciencia.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#destinos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explorar destinos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#consejos"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Consejos de viaje verde
              </a>
            </div>
          </div>
        </section>

        <section
          id="destinos"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mb-12 text-center md:mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Destinos destacados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tres experiencias seleccionadas por su compromiso con la
              conservación, las comunidades locales y la aventura responsable.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {destination.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {destination.description}
                  </p>
                  <a
                    href={`#${destination.id}`}
                    className="mt-5 inline-flex items-center gap-2 self-start rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Ver más
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="consejos"
          className="border-y border-border bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
              Consejos para viajar responsablemente
            </h2>
            <div className="mt-10 grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Leaf className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Reduce tu impacto
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Elige transporte colectivo, alojamientos con certificación
                  ambiental y evita los plásticos de un solo uso.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Apoya lo local
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Contrata guías de la zona, compra artesanías y come en
                  restaurantes que impulsen la economía comunitaria.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Comparte tu experiencia
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cuéntale a otros viajeros cómo minimizaste tu huella y
                  recomienda destinos que cuiden la naturaleza.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contacto"
        className="border-t border-border bg-secondary px-4 py-12 text-secondary-foreground sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Leaf className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="font-display text-xl font-bold tracking-tight">
                  EcoTravel
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Proyecto educativo de turismo sostenible. Inspiramos viajes que
                respetan la naturaleza y valoran las culturas locales.
              </p>
            </div>

            <div>
              <h4 className="font-display text-base font-semibold text-foreground">
                Contacto
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:hola@ecotravel.edu"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    hola@ecotravel.edu
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <MapPin
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    Buenos Aires, Argentina
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base font-semibold text-foreground">
                Seguinos
              </h4>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EcoTravel. Todos los derechos
              reservados. Proyecto educativo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
