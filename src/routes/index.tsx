import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
  Search,
} from "lucide-react";

import patagonia from "@/assets/patagonia.jpg";
import costarica from "@/assets/costarica.jpg";
import andes from "@/assets/andes.jpg";
import amazonia from "@/assets/amazonia.jpg";
import uyuni from "@/assets/uyuni.jpg";
import cartagena from "@/assets/cartagena.jpg";
import galapagos from "@/assets/galapagos.jpg";
import machupicchu from "@/assets/machupicchu.jpg";
import iguazu from "@/assets/iguazu.jpg";
import atacama from "@/assets/atacama.jpg";
import tayrona from "@/assets/tayrona.jpg";
import noronha from "@/assets/noronha.jpg";

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

const categories = ["Naturaleza", "Playa", "Montaña", "Cultura"] as const;

type Category = (typeof categories)[number];

type Destination = {
  id: string;
  title: string;
  image: string;
  description: string;
  categories: Category[];
};

const destinations: Destination[] = [
  {
    id: "patagonia",
    title: "Bosques de Patagonia",
    image: patagonia,
    description:
      "Recorre senderos de lenga y coihue entre glaciares y montañas. Una experiencia de trekking de bajo impacto en el corazón de la Argentina austral.",
    categories: ["Naturaleza", "Montaña"],
  },
  {
    id: "costarica",
    title: "Playas de Costa Rica",
    image: costarica,
    description:
      "Relájate en albergues ecológicos frente al Caribe o el Pacífico. Avistamiento de tortugas, surf sostenible y comunidades locales te esperan.",
    categories: ["Playa", "Naturaleza"],
  },
  {
    id: "andes",
    title: "Montañas de los Andes",
    image: andes,
    description:
      "Descubre pueblos originarios, valles verdes y cumbres nevadas. Turismo comunitario que respeta las tradiciones y protege la biodiversidad.",
    categories: ["Montaña", "Cultura"],
  },
  {
    id: "amazonia",
    title: "Selva de la Amazonia",
    image: amazonia,
    description:
      "Navegá ríos navegables y lodges de madera certificada. Guías locales te muestran la flora, la fauna y el trabajo de conservación de la selva.",
    categories: ["Naturaleza"],
  },
  {
    id: "uyuni",
    title: "Altiplano y Salar de Uyuni",
    image: uyuni,
    description:
      "Cruza lagunas de colores, geiseres y desiertos de sal a más de 3.500 metros. Un recorrido en 4x4 con operadores que compensan su huella de carbono.",
    categories: ["Montaña", "Naturaleza"],
  },
  {
    id: "cartagena",
    title: "Ciudad Colonial de Cartagena",
    image: cartagena,
    description:
      "Caminá murallas, plazas y barrios caribeños. Alojamientos familiares, cocina de mercado y visitas que sostienen el patrimonio vivo de la costa.",
    categories: ["Cultura", "Playa"],
  },
  {
    id: "galapagos",
    title: "Islas Galápagos",
    image: galapagos,
    description:
      "Nadá junto a lobos marinos y tortugas gigantes en un parque nacional con cupos limitados que protegen uno de los ecosistemas más únicos del mundo.",
    categories: ["Playa", "Naturaleza"],
  },
  {
    id: "machupicchu",
    title: "Machu Picchu",
    image: machupicchu,
    description:
      "Llegá por el Camino Inca con porteadores locales y entradas reguladas. Historia, montaña y respeto por el legado de los pueblos andinos.",
    categories: ["Cultura", "Montaña"],
  },
  {
    id: "iguazu",
    title: "Cataratas del Iguazú",
    image: iguazu,
    description:
      "Recorré pasarelas sobre saltos imponentes en plena selva paranaense, con guías que explican la conservación de su fauna y flora.",
    categories: ["Naturaleza"],
  },
  {
    id: "atacama",
    title: "Desierto de Atacama",
    image: atacama,
    description:
      "Observá flamencos en lagunas altiplánicas y uno de los cielos más limpios del planeta, en tours de astroturismo con comunidades atacameñas.",
    categories: ["Naturaleza", "Montaña", "Cultura"],
  },
  {
    id: "tayrona",
    title: "Parque Tayrona",
    image: tayrona,
    description:
      "Playas vírgenes entre selva y rocas gigantes, territorio ancestral de los pueblos de la Sierra Nevada. Se accede a pie y con aforo controlado.",
    categories: ["Playa", "Cultura"],
  },
  {
    id: "noronha",
    title: "Fernando de Noronha",
    image: noronha,
    description:
      "Archipiélago brasileño con tasa ambiental y visitantes limitados: buceo entre delfines, arrecifes protegidos y playas de agua cristalina.",
    categories: ["Playa", "Naturaleza"],
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
  const [activeCategory, setActiveCategory] = useState<"Todos" | Category>(
    "Todos",
  );
  const [query, setQuery] = useState("");

  const filteredDestinations = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return destinations.filter((destination) => {
      const matchesCategory =
        activeCategory === "Todos" ||
        destination.categories.includes(activeCategory);
      const matchesQuery =
        needle === "" ||
        `${destination.title} ${destination.description}`
          .toLowerCase()
          .includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const hasActiveFilters = activeCategory !== "Todos" || query.trim() !== "";

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
          <div className="mb-10 text-center md:mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Destinos destacados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Doce experiencias seleccionadas por su compromiso con la
              conservación, las comunidades locales y la aventura responsable.
              Filtrá por categoría o buscá lo que necesitás.
            </p>
          </div>

          <div className="mx-auto mb-10 flex max-w-4xl flex-col gap-5">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar destinos, actividades o paisajes..."
                aria-label="Buscar destinos"
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-11 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              {query !== "" && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Limpiar la búsqueda"
                  className="absolute right-3 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <div
              role="group"
              aria-label="Filtrar destinos por categoría"
              className="flex flex-wrap items-center justify-center gap-2"
            >
              {(["Todos", ...categories] as const).map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={
                      isActive
                        ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors"
                        : "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    }
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              <span aria-live="polite">
                Mostrando {filteredDestinations.length} de{" "}
                {destinations.length} destinos
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("Todos");
                    setQuery("");
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDestinations.map((destination) => (
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
                    <div className="flex flex-wrap gap-2">
                      {destination.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
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
          ) : (
            <div className="mx-auto max-w-md rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Search className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                No encontramos destinos con esos filtros
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Probá con otra palabra o elegí una categoría distinta para ver
                más experiencias.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("Todos");
                  setQuery("");
                }}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ver todos los destinos
              </button>
            </div>
          )}
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

export default Index;
