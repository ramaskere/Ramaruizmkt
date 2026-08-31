import Reveal from "./reveal";
import CountUp from "./count-up";
import { Figure } from "./photo";
import { whatsappLink } from "./lib/whatsapp";

const WHATSAPP_HREF = whatsappLink(
  "Hola Rama! Vi tu página y quiero agendar el diagnóstico de cuenta y embudo."
);

const MARQUEE_ITEMS = [
  "Infoproductores de ventas",
  "Pauta Meta",
  "Creativos con IA",
  "Research de ángulos",
  "Lanzamientos",
  "Evergreen",
  "Reporte diario",
];

export default function Home() {
  return (
    <div className="page">
      <Reveal />
      <header className="site-header">
        <nav className="nav wrap" aria-label="Principal">
          <a className="nav-brand" href="#top">
            Ramaruizmkt
          </a>
          <div className="nav-links">
            <a href="#solucion">Qué hago</a>
            <a href="#caso">El caso</a>
            <a
              className="nav-cta"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              Agendar diagnóstico
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-rings" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-stack">
            <p className="eyebrow">
              Meta Ads + creativos para infoproductores de ventas
            </p>
            <h1>
              <strong>Ayudo a infoproductores</strong>
              <span>a escalar en Meta</span>
              <strong>sin quemar plata.</strong>
            </h1>
            <p className="hero-lead">
              Tu research de ángulos, tus creativos y tu pauta en un solo
              sistema que se encarga de todo. Dejás de coordinar un editor, un
              redactor y un media buyer que no se hablan entre ellos.
            </p>

            <div className="intro-video reveal">
              <div className="intro-video-frame">
                <div className="intro-video-placeholder">
                  <span className="play-icon" aria-hidden="true">
                    ▶
                  </span>
                  <p>Video en camino</p>
                </div>
              </div>
            </div>

            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
              >
                Agendar diagnóstico →
              </a>
            </div>
            <p className="hero-stats">
              +US$700K gestionados en Meta Ads · Lanzamientos · Evergreen
            </p>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((rep) => (
              <div className="marquee-group" key={rep}>
                {MARQUEE_ITEMS.map((item) => (
                  <span className="marquee-item" key={`${rep}-${item}`}>
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="stats-band wrap">
          <div className="stats-bento stagger">
            <div className="stat-block reveal">
              <span className="stat-block-value">
                <CountUp value={700} prefix="+US$" suffix="K" />
              </span>
              <span className="stat-block-label">Gestionados en Meta Ads</span>
            </div>
            <div className="stat-block reveal">
              <span className="stat-block-value">4 en 1</span>
              <span className="stat-block-label">
                Research, creativo, pauta y reporte
              </span>
            </div>
            <div className="stat-block reveal">
              <span className="stat-block-value">
                <CountUp value={500} prefix="US$" suffix="K/mes" />
              </span>
              <span className="stat-block-label">Facturado con ads en meses pico</span>
            </div>
          </div>
        </section>

        <section className="section" id="problema">
          <div className="wrap">
            <p className="section-label">El problema</p>
            <h2>
              Escalar no falla en el botón de &ldquo;subir presupuesto&rdquo;.
              Falla antes.
            </h2>
            <p className="section-lead">
              Cuando tu research, tus creativos y tu pauta los maneja gente
              distinta, pasa esto:
            </p>
            <ul className="offer-bullets reveal">
              <li>
                El creativo se hace sin saber qué objeción tiene que romper.
              </li>
              <li>
                El media buyer optimiza a ciegas: ve el número, pero no puede
                cambiar el anuncio que no funciona.
              </li>
              <li>
                Nadie mira la cuenta hasta fin de mes, cuando ya se fueron tres
                semanas de gasto.
              </li>
            </ul>
            <p className="section-lead" style={{ marginBottom: 0 }}>
              Subís el presupuesto y el costo por venta sube con él.
            </p>
          </div>
        </section>

        <section className="section" id="solucion">
          <div className="wrap">
            <p className="section-label">La solución</p>
            <h2>Un solo sistema que se encarga de todo lo que mueve tu costo por venta.</h2>
            <p className="section-lead">
              Cuatro piezas, un mismo responsable, y en este orden. La estrategia
              primero, las campañas después.
            </p>
            <ol className="steps stagger">
              <li className="step reveal">
                <span className="step-n">01</span>
                <div className="step-body">
                  <h3>Research de ángulos y competencia</h3>
                  <p>
                    Primero, qué decir. Cada mes reviso qué corre tu
                    competencia y qué ángulos nuevos vale la pena probar. De acá
                    sale todo lo demás.
                  </p>
                </div>
              </li>
              <li className="step reveal">
                <span className="step-n">02</span>
                <div className="step-body">
                  <h3>Creativos que convierten</h3>
                  <p>
                    Producción de los anuncios en video que tu cuenta necesite,
                    apoyada en IA para probar más ángulos en menos tiempo. Los
                    hooks salen de tu oferta y de las objeciones reales de tus
                    compradores, no de una plantilla.
                  </p>
                </div>
              </li>
              <li className="step reveal">
                <span className="step-n">03</span>
                <div className="step-body">
                  <h3>Gestión de campañas Meta</h3>
                  <p>
                    Estructura, segmentación, escalado y optimización diaria.
                    Nada de &ldquo;esperar a ver qué pasa&rdquo;.
                  </p>
                </div>
              </li>
              <li className="step reveal">
                <span className="step-n">04</span>
                <div className="step-body">
                  <h3>Reporte diario, semanal y mensual</h3>
                  <p>
                    Diario: los números clave de tus campañas. Semanal: qué se
                    probó y qué funcionó. Mensual: análisis con lectura
                    estratégica y plan del mes siguiente. Vas a saber cómo van
                    tus anuncios todos los días, no una vez al mes.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section caso" id="caso">
          <div className="wrap">
            <p className="section-label">Un cliente</p>
            <h2>Tino Mossu.</h2>
            <p className="section-lead">
              Tino es CEO de Factor Studios y fundador de la U del Closer, una
              de las escuelas de ventas y closing más grandes de Latam, con un
              equipo de más de 40 personas. Trabajé 18 meses con él llevando
              toda su pauta de Meta.
            </p>

            <div className="caso-layout">
              <Figure
                src="/sobre-mi/rama-tino.jpg"
                alt="Rama Ruiz junto a Tino Mossu"
                caption="Con Tino Mossu (camisa blanca). Nos conocimos en persona, no fue trabajar por mail y mandar un reporte."
                className="caso-photo"
              />

              <div className="caso-story reveal">
                <p>
                  A Tino lo conocí en un evento. Antes de tocar un solo anuncio
                  me senté con él y con su equipo a entender cómo piensan la
                  oferta, a quién quieren adentro y a quién no.
                </p>
                <p>
                  Durante 18 meses llevé su cuenta como un solo sistema:
                  research, creativos en video y campañas, todo desde el mismo
                  lugar. El evergreen nunca se apagó y encima montamos los
                  lanzamientos arriba.
                </p>
                <p className="caso-kicker">
                  En ese tiempo llevé su cuenta a meses de más de US$400.000
                  facturados con ads, tocando los US$500.000 varios meses
                  seguidos.
                </p>
              </div>
            </div>

            <div className="caso-stats stagger">
              <div className="client-stat reveal">
                <span className="client-stat-value">18 meses</span>
                <span className="client-stat-label">Llevando su pauta</span>
              </div>
              <div className="client-stat reveal">
                <span className="client-stat-value">+US$400K</span>
                <span className="client-stat-label">Facturados con ads por mes</span>
              </div>
              <div className="client-stat reveal">
                <span className="client-stat-value">US$500K</span>
                <span className="client-stat-label">En los meses pico</span>
              </div>
            </div>

            <Figure
              src="/sobre-mi/rama-tino-call.jpg"
              alt="Rama Ruiz en una videollamada de trabajo con el equipo de Tino Mossu"
              caption="En una call con el equipo. El trabajo se hacía con ellos adentro, no mandando un reporte a fin de mes."
              className="photo-figure--wide caso-call"
            />
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap cta-band-inner">
            <h2>Empecemos por el diagnóstico.</h2>
            <p>
              Reviso tu cuenta y tu embudo, y te digo con sinceridad qué está
              frenando tu escalado y si tiene sentido trabajar juntos.
            </p>
            <a
              className="btn btn-primary"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              Agendar diagnóstico por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Ramaruizmkt</span>
        <span>
          Pauta y creativos de Meta Ads para infoproductores de ventas · fee
          fijo mensual
        </span>
      </footer>
    </div>
  );
}
