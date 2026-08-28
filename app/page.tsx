import Reveal from "./reveal";
import CountUp from "./count-up";
import { Avatar, Figure } from "./photo";
import { whatsappLink } from "./lib/whatsapp";

const WHATSAPP_HREF = whatsappLink(
  "Hola! Vi tu página y quiero saber más sobre la gestión de Meta Ads."
);

const MARQUEE_ITEMS = [
  "Tino Mossu",
  "Teo Tinivelli",
  "Jesús Tasarolo",
  "Lanzamientos",
  "Evergreen",
  "Ecommerce",
  "Tiendas Apple",
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
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#resultados">Resultados</a>
            <a href="#planes">Planes</a>
            <a
              className="nav-cta"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              Escribime
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
          <div className="hero-grid">
            <div className="hero-content">
              <p className="availability-pill">
                <span className="pill-dot" aria-hidden="true" />
                Cupo disponible · 2 a 3 clientes este mes
              </p>
              <p className="eyebrow">
                Meta Ads · Coaches, negocios e infoproductores
              </p>
              <h1>
                <strong>Escalo resultados</strong>
                <span>de coaches, negocios</span>
                <span>e infoproductores</span>
                <strong>con anuncios.</strong>
              </h1>
              <div className="hero-cta">
                <a
                  className="btn btn-primary"
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                >
                  Quiero mi cupo →
                </a>
                <a className="btn btn-ghost" href="#planes">
                  Ver planes ↓
                </a>
              </div>
              <p className="hero-stats">
                +$700K gestionados · Lanzamientos · Evergreen · Ecommerce
              </p>
            </div>

            <div className="portrait-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sobre-mi/rama-card.jpg"
                alt="Rama Ruiz explicando un embudo de conversión en el pizarrón"
              />
              <span className="portrait-badge portrait-badge--tl">
                <span className="pill-dot" aria-hidden="true" />
                Cupo disponible
              </span>
              <span className="portrait-badge portrait-badge--br">
                <span className="portrait-badge-n">+$2M</span>
                <span className="portrait-badge-l">Generados para clientes</span>
              </span>
            </div>
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
                <CountUp value={700} prefix="+$" suffix="K" />
              </span>
              <span className="stat-block-label">Gestionados en Meta Ads</span>
            </div>
            <div className="stat-block reveal">
              <span className="stat-block-value">
                <CountUp value={2} prefix="+$" suffix="M" />
              </span>
              <span className="stat-block-label">Generados para clientes</span>
            </div>
            <div className="stat-block reveal">
              <span className="stat-block-value">2&ndash;3</span>
              <span className="stat-block-label">Cupos por mes</span>
            </div>
          </div>
        </section>

        <section className="section contact" id="sobre-mi">
          <div className="wrap">
            <p className="section-label">Sobre mí</p>
            <h2>No planeé ser media buyer. Pasó, y no volví atrás.</h2>
            <div className="bio-highlights reveal">
              <span className="bio-stat">
                <strong>+$700K</strong> gestionados en Meta Ads
              </span>
              <span className="bio-tag-group">
                <span className="bio-tag">Lanzamientos</span>
                <span className="bio-tag">Evergreen</span>
                <span className="bio-tag">Ecommerce</span>
              </span>
            </div>
            <div className="bio-layout">
              <div className="reveal">
                <p className="bio-text">
                  Arranqué como editor de video, sin pensar en meterme en
                  pauta. Pero en la agencia donde trabajaba, el que llevaba
                  los anuncios se fue de un día para el otro, y alguien
                  tenía que hacerse cargo.
                </p>
                <p className="bio-text">
                  Me puse la camiseta, aprendí a las corridas, y terminé
                  metiendo las manos en cuentas grandes de infoproductores
                  top de Argentina y Latam, como las de Tino Mossu, Teo
                  Tinivelli y Jesús Tasarolo, gestionando lanzamientos,
                  evergreen y ecommerce. Ahí encontré lo mío: no en la
                  edición, en hacer que la pauta realmente venda.
                </p>
                <div className="bio-signature-row">
                  <div className="bio-avatar">
                    <Avatar src="/sobre-mi/rama-retrato.jpg" alt="Rama Ruiz" />
                  </div>
                  <p className="bio-signature">
                    Rama Ruiz · gestión de Meta Ads.
                  </p>
                </div>
                <div className="contact-actions">
                  <a
                    className="btn btn-primary"
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>

              <div className="bio-aside">
                <Figure
                  src="/sobre-mi/rama-escritorio.jpg"
                  alt="Rama Ruiz trabajando en sus campañas de Meta Ads"
                />
                <ul className="timeline stagger">
                  <li className="timeline-item reveal">
                    <span className="timeline-dot" aria-hidden="true" />
                    <h4>Editor de video</h4>
                    <p>Así arranqué, editando piezas para otros.</p>
                  </li>
                  <li className="timeline-item reveal">
                    <span className="timeline-dot" aria-hidden="true" />
                    <h4>Se hizo cargo de los anuncios</h4>
                    <p>
                      En la agencia, cuando nadie más podía, me tocó a mí.
                    </p>
                  </li>
                  <li className="timeline-item reveal">
                    <span className="timeline-dot" aria-hidden="true" />
                    <h4>Full time en Meta Ads</h4>
                    <p>
                      Hoy gestiono cuentas grandes de infoproductores top de
                      Argentina y Latam.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="skills-pills reveal">
              <li className="skill-pill">Meta Ads</li>
              <li className="skill-pill">Evergreen</li>
              <li className="skill-pill">Lanzamientos</li>
              <li className="skill-pill">Ecommerce</li>
              <li className="skill-pill">Investigación de competencia</li>
              <li className="skill-pill">Creativos (video e imagen)</li>
              <li className="skill-pill">Embudos de venta</li>
              <li className="skill-pill">Reportes y dashboards</li>
            </ul>
          </div>
        </section>

        <section className="section" id="resultados">
          <div className="wrap">
            <p className="section-label">Resultados</p>
            <h2>Números reales, de cuentas reales.</h2>
            <p className="section-lead">
              Cada caso con lo que gestioné y lo que generó. Nada de "cuentas
              top" genéricas.
            </p>

            <article className="result-featured reveal">
              <div className="result-featured-body">
                <span className="card-tag">Ecommerce · Tráfico frío</span>
                <h3 className="result-hook">
                  5x de retorno partiendo de cero
                </h3>
                <p className="result-note">
                  Campaña de conversión para un producto de ecommerce, sin
                  audiencia previa.
                </p>
                <div className="client-stats">
                  <div className="client-stat">
                    <span className="client-stat-value">
                      $<CountUp value={1034} />
                    </span>
                    <span className="client-stat-label">Invertidos</span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">
                      $<CountUp value={5263} />
                    </span>
                    <span className="client-stat-label">En ventas</span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">
                      <CountUp value={5.09} decimals={2} suffix="x" />
                    </span>
                    <span className="client-stat-label">De retorno</span>
                  </div>
                </div>
              </div>
              <figure className="result-shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/resultados/ecommerce-producto-a.jpeg"
                  alt="Captura de Ads Manager: campaña de ecommerce con 5.09x de retorno"
                />
                <figcaption>Captura de Ads Manager</figcaption>
              </figure>
            </article>

            <ul className="card-grid card-grid--duo stagger">
              <li className="card client-card reveal">
                <span className="card-tag">Evergreen + Lanzamientos</span>
                <h3 className="result-hook">
                  +$3,5M generados en año y medio
                </h3>
                <p className="result-client">Tino Mossu &amp; Teo Tinivelli</p>
                <div className="client-stats">
                  <div className="client-stat">
                    <span className="client-stat-value">18 meses</span>
                    <span className="client-stat-label">
                      Trabajando juntos
                    </span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">$500K</span>
                    <span className="client-stat-label">En meses fuertes</span>
                  </div>
                </div>
              </li>

              <li className="card client-card reveal">
                <span className="card-tag">Lanzamientos</span>
                <h3 className="result-hook">
                  2 lanzamientos de infoproducto gestionados
                </h3>
                <p className="result-client">Jesús Tasarolo</p>
                <div className="client-stats">
                  <div className="client-stat">
                    <span className="client-stat-value">+$20K</span>
                    <span className="client-stat-label">
                      Invertidos en pauta
                    </span>
                  </div>
                </div>
              </li>

              <li className="card client-card reveal">
                <span className="card-tag">Tienda Apple</span>
                <h3 className="result-hook">
                  668 conversaciones a $0,20 cada una
                </h3>
                <p className="result-client">Campaña de conversaciones</p>
                <div className="client-stats">
                  <div className="client-stat">
                    <span className="client-stat-value">668</span>
                    <span className="client-stat-label">Conversaciones</span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">$134,85</span>
                    <span className="client-stat-label">Gasto total</span>
                  </div>
                </div>
                <figure className="result-shot result-shot--inline">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/resultados/tienda-apple-conversaciones.jpeg"
                    alt="Captura de Ads Manager: 668 conversaciones a $0,20"
                  />
                </figure>
              </li>

              <li className="card client-card reveal">
                <span className="card-tag">Ecommerce · Producto B</span>
                <h3 className="result-hook">3,8x de retorno sostenido</h3>
                <p className="result-client">Cliente de ecommerce</p>
                <div className="client-stats">
                  <div className="client-stat">
                    <span className="client-stat-value">$1.615</span>
                    <span className="client-stat-label">Invertidos</span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">$6.152</span>
                    <span className="client-stat-label">En ventas</span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">3,81x</span>
                    <span className="client-stat-label">De retorno</span>
                  </div>
                </div>
                <figure className="result-shot result-shot--inline">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/resultados/ecommerce-producto-b.jpeg"
                    alt="Captura de Ads Manager: campaña de ecommerce con 3.81x de retorno"
                  />
                </figure>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="planes">
          <div className="wrap">
            <p className="section-label">Planes</p>
            <h2>La estrategia primero. Las campañas, después.</h2>
            <p className="section-lead">
              No arranco poniendo anuncios al aire. Primero armamos la
              estrategia que hace que conviertan, recién ahí entran las
              campañas.
            </p>
            <ul className="card-grid card-grid--duo stagger">
              <li className="card plan-card reveal" data-n="01">
                <span className="card-tag">Plan 1</span>
                <h3>Consultoría 1 a 1</h3>
                <p className="plan-tagline">
                  Para resolver dudas y armar tu propio plan.
                </p>
                <ul className="offer-bullets plan-includes">
                  <li>Llamada 1 a 1</li>
                  <li>Análisis de lo que ya estás haciendo</li>
                  <li>Resolución de dudas puntuales</li>
                  <li>Plan de acción concreto para que lo ejecutes vos</li>
                </ul>
                <a
                  className="btn btn-ghost plan-cta"
                  href={whatsappLink(
                    "Hola! Vi tu página y quiero saber más sobre la Consultoría 1 a 1."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar por WhatsApp →
                </a>
              </li>
              <li
                className="card plan-card plan-card--highlight reveal"
                data-n="02"
              >
                <span className="card-tag">Plan 2 · El más completo</span>
                <h3>Gestión de Tráfico</h3>
                <p className="plan-tagline">
                  Para no tener que pensar ni tocar nada.
                </p>
                <ul className="offer-bullets plan-includes">
                  <li>Estrategia de marketing y conversión</li>
                  <li>Creación y edición de los anuncios</li>
                  <li>Configuración y publicación</li>
                  <li>Seguimiento y optimización constante</li>
                  <li>Reportes y métricas</li>
                  <li>Gestión de punta a punta, todo el mes</li>
                </ul>
                <a
                  className="btn btn-primary plan-cta"
                  href={whatsappLink(
                    "Hola! Vi tu página y quiero saber más sobre la Gestión de Tráfico completa."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reservar mi cupo →
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="incluye">
          <div className="wrap">
            <p className="section-label">Qué incluye</p>
            <h2>Yo me encargo de todo.</h2>
            <p className="section-lead">
              Vos seguís haciendo lo tuyo: crear contenido, vender, dar tus
              programas. Yo me hago cargo de que la pauta funcione, de punta
              a punta.
            </p>
            <ul className="card-grid stagger">
              <li className="card reveal" data-n="01">
                <span className="card-tag">Diagnóstico</span>
                <h3>Reviso tu negocio primero</h3>
                <p>Oferta, páginas y anuncios que ya usaste.</p>
              </li>
              <li className="card reveal" data-n="02">
                <span className="card-tag">Investigación</span>
                <h3>Estudio tu nicho y competencia</h3>
                <p>Qué corre la competencia y qué le funciona.</p>
              </li>
              <li className="card reveal" data-n="03">
                <span className="card-tag">Gestión</span>
                <h3>Pauta completa, de punta a punta</h3>
                <p>Armo y optimizo todo. Vos no tocás el Ads Manager.</p>
              </li>
              <li className="card reveal" data-n="04">
                <span className="card-tag">Creativos</span>
                <h3>Edito los anuncios, video e imagen</h3>
                <p>Las piezas quedan listas por mí, no solo la pauta.</p>
              </li>
              <li className="card reveal" data-n="05">
                <span className="card-tag">Embudo de ventas</span>
                <h3>Miro más allá de los anuncios</h3>
                <p>
                  Si algo no vende, reviso todo el embudo de ventas, no solo
                  los anuncios.
                </p>
              </li>
              <li className="card reveal" data-n="06">
                <span className="card-tag">Reporte y revisión</span>
                <h3>Dashboard en vivo + llamada semanal</h3>
                <p>
                  Reporte diario y una vez por semana vemos el panorama
                  completo.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="proceso">
          <div className="wrap">
            <p className="section-label">Cómo funciona</p>
            <h2>Tres pasos y arrancamos</h2>
            <p className="section-lead">Vos aprobás. Yo ejecuto y reporto.</p>
            <ul className="timeline timeline--wide stagger">
              <li className="timeline-item reveal">
                <span className="timeline-dot" aria-hidden="true" />
                <h4>Diagnóstico</h4>
                <p>
                  Miro tu negocio y tu cuenta actual. Definimos juntos qué
                  tipo de tráfico necesitás ahora.
                </p>
              </li>
              <li className="timeline-item reveal">
                <span className="timeline-dot" aria-hidden="true" />
                <h4>Armo y gestiono</h4>
                <p>
                  Estructuro las campañas y me hago cargo de la optimización
                  día a día.
                </p>
              </li>
              <li className="timeline-item reveal">
                <span className="timeline-dot" aria-hidden="true" />
                <h4>Reporto y ajusto</h4>
                <p>
                  Reporte diario + llamada semanal para ir afinando sin
                  sorpresas.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap cta-band-inner">
            <h2>¿Listo para escalar con anuncios?</h2>
            <p>
              Contame cómo está tu pauta hoy y te digo con sinceridad si hay
              cupo y si tiene sentido trabajar juntos.
            </p>
            <a
              className="btn btn-primary"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              Reservar mi cupo por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Ramaruizmkt</span>
        <span>
          Gestión de Meta Ads para coaches, negocios e infoproductores · fee
          fijo
        </span>
      </footer>
    </div>
  );
}
