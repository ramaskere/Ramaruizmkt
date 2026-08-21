import Reveal from "./reveal";
import { whatsappLink } from "./lib/whatsapp";

const WHATSAPP_HREF = whatsappLink(
  "Hola! Vi tu página y quiero saber más sobre la gestión de Meta Ads."
);

export default function Home() {
  return (
    <div className="page">
      <Reveal />
      <header className="wrap">
        <nav className="nav" aria-label="Principal">
          <a className="nav-brand" href="#top">
            Ramaruizmkt
          </a>
          <div className="nav-links">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#clientes">Con quién trabajé</a>
            <a href="#planes">Planes</a>
            <a href="#oferta">Cupo</a>
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
          <div className="hero-content">
            <div className="hero-avatar">
              <span className="avatar-initials">RR</span>
            </div>
            <p className="availability-pill">
              <span className="pill-dot" aria-hidden="true" />
              Cupo disponible — 2 a 3 clientes este mes
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
              <a className="btn btn-ghost" href="#oferta">
                Ver cupo ↓
              </a>
            </div>
            <p className="hero-stats">
              +$700K gestionados · Lanzamientos · Evergreen · Ecommerce
            </p>
          </div>
        </section>

        <section className="stats-band wrap">
          <div className="stats-bento stagger">
            <div className="stat-block reveal">
              <span className="stat-block-value">+$700K</span>
              <span className="stat-block-label">Gestionados en Meta Ads</span>
            </div>
            <div className="stat-block reveal">
              <span className="stat-block-value">3</span>
              <span className="stat-block-label">Formatos dominados</span>
            </div>
            <div className="stat-block reveal">
              <span className="stat-block-value">2-3</span>
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
                  los anuncios se fue de un día para el otro — y alguien
                  tenía que hacerse cargo.
                </p>
                <p className="bio-text">
                  Me puse la camiseta, aprendí a las corridas, y terminé
                  metiendo las manos en cuentas grandes de infoproductores
                  top de Argentina y Latam — como las de Tino Mossu, Teo
                  Tinivelli y Jesús Tasarolo — gestionando lanzamientos,
                  evergreen y ecommerce. Ahí encontré lo mío: no en la
                  edición, en hacer que la pauta realmente venda.
                </p>
                <div className="bio-signature-row">
                  <div className="bio-avatar">
                    <span className="avatar-initials">RR</span>
                  </div>
                  <p className="bio-signature">
                    Rama Ruiz — gestión de Meta Ads.
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

              <ul className="timeline stagger">
                <li className="timeline-item reveal">
                  <span className="timeline-dot" aria-hidden="true" />
                  <h4>Editor de video</h4>
                  <p>Así arranqué, editando piezas para otros.</p>
                </li>
                <li className="timeline-item reveal">
                  <span className="timeline-dot" aria-hidden="true" />
                  <h4>Se hizo cargo de los anuncios</h4>
                  <p>En la agencia, cuando nadie más podía, me tocó a mí.</p>
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

        <section className="section" id="clientes">
          <div className="wrap">
            <p className="section-label">Con quién trabajé</p>
            <h2>Cuentas reales, con nombre y apellido.</h2>
            <p className="section-lead">
              Nada de "cuentas top" genéricas. Estos son los infoproductores
              con los que laburé, y lo que gestionamos juntos.
            </p>
            <ul className="card-grid stagger">
              <li className="card client-card reveal">
                <span className="card-tag">Evergreen + Lanzamientos</span>
                <h3>Tino Mossu &amp; Teo Tinivelli</h3>
                <div className="client-stats">
                  <div className="client-stat">
                    <span className="client-stat-value">1.5 años</span>
                    <span className="client-stat-label">Trabajando juntos</span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">$500K</span>
                    <span className="client-stat-label">En meses fuertes</span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">+$3.5M</span>
                    <span className="client-stat-label">Generados en total</span>
                  </div>
                </div>
              </li>
              <li className="card client-card reveal">
                <span className="card-tag">Lanzamientos</span>
                <h3>Jesús Tasarolo</h3>
                <div className="client-stats">
                  <div className="client-stat">
                    <span className="client-stat-value">2</span>
                    <span className="client-stat-label">
                      Lanzamientos gestionados
                    </span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">+$20K</span>
                    <span className="client-stat-label">
                      Invertidos en pauta
                    </span>
                  </div>
                </div>
              </li>
              <li className="card client-card reveal">
                <span className="card-tag">Ecommerce · Producto A</span>
                <h3>Cliente de ecommerce</h3>
                <div className="client-stats">
                  <div className="client-stat">
                    <span className="client-stat-value">$1.034</span>
                    <span className="client-stat-label">Invertidos</span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">$5.263</span>
                    <span className="client-stat-label">En ventas</span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">5.09x</span>
                    <span className="client-stat-label">De retorno</span>
                  </div>
                </div>
              </li>
              <li className="card client-card reveal">
                <span className="card-tag">Ecommerce · Producto B</span>
                <h3>Cliente de ecommerce</h3>
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
                    <span className="client-stat-value">3.81x</span>
                    <span className="client-stat-label">De retorno</span>
                  </div>
                </div>
              </li>
              <li className="card client-card reveal">
                <span className="card-tag">Tienda Apple</span>
                <h3>Campaña de conversaciones</h3>
                <div className="client-stats">
                  <div className="client-stat">
                    <span className="client-stat-value">668</span>
                    <span className="client-stat-label">Conversaciones</span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">$0,20</span>
                    <span className="client-stat-label">
                      Por conversación
                    </span>
                  </div>
                  <div className="client-stat">
                    <span className="client-stat-value">$134,85</span>
                    <span className="client-stat-label">Gasto total</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="planes">
          <div className="wrap">
            <p className="section-label">Planes</p>
            <h2>Elegís el nivel de involucramiento.</h2>
            <p className="section-lead">
              Tres formas de trabajar juntos, según cuánto querés delegar.
            </p>
            <ul className="card-grid stagger">
              <li className="card plan-card reveal">
                <span className="card-tag">Plan 1</span>
                <h3>Consultoría 1 a 1</h3>
                <p>
                  Llamada + análisis de lo que ya estás haciendo. Resolvemos
                  dudas, vemos qué mejorar, y salís con un plan de acción
                  concreto para ejecutar vos.
                </p>
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
              <li className="card plan-card reveal">
                <span className="card-tag">Plan 2</span>
                <h3>Plan Básico</h3>
                <p>
                  Investigación, estrategia, estructura y armado de los
                  anuncios. Te dejo las campañas configuradas y lanzadas —
                  después las gestionás vos.
                </p>
                <a
                  className="btn btn-ghost plan-cta"
                  href={whatsappLink(
                    "Hola! Vi tu página y quiero saber más sobre el Plan Básico."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar por WhatsApp →
                </a>
              </li>
              <li className="card plan-card plan-card--highlight reveal">
                <span className="card-tag">Plan 3 · El más completo</span>
                <h3>Gestión de Tráfico</h3>
                <p>
                  Investigación, estrategia, creación y edición de los
                  anuncios, configuración, publicación, seguimiento,
                  optimización y métricas. Yo me encargo de todo, de punta a
                  punta.
                </p>
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
              Vos seguís haciendo lo tuyo — crear contenido, vender, dar tus
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
                <p>Reporte diario y una vez por semana vemos el panorama completo.</p>
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

        <section className="section">
          <div className="wrap">
            <p className="section-label">Más contenido</p>
            <h2>Esto todavía no existe, pero va a estar.</h2>
            <p className="section-lead">
              Prefiero no mostrarte testimonios o notas que no son reales.
              Cuando los tenga, van a estar acá.
            </p>
            <ul className="soon-grid stagger">
              <li className="soon-card reveal">
                <span className="soon-tag">Próximamente</span>
                <h3>Testimonios</h3>
                <p>
                  Los clientes que trabajen conmigo van a poder dejar su
                  opinión acá.
                </p>
              </li>
              <li className="soon-card reveal">
                <span className="soon-tag">Próximamente</span>
                <h3>Artículos</h3>
                <p>
                  Notas sobre pauta, embudos de venta y lo que voy
                  aprendiendo gestionando cuentas.
                </p>
              </li>
              <li className="soon-card reveal">
                <span className="soon-tag">Próximamente</span>
                <h3>Charlas</h3>
                <p>Si en algún momento sumo esto, va a aparecer acá.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="oferta">
          <div className="wrap offer-block">
            <p className="section-label">Cupo limitado</p>
            <h2>Fee fijo. Sin letra chica.</h2>
            <p className="section-lead">
              Trabajo con un máximo de 2-3 clientes en simultáneo — no es
              marketing, es lo que me permite dar atención de verdad en vez
              de manejar 15 cuentas a la vez. El fee se ajusta según el
              tamaño de tu cuenta e inversión en pauta — te lo cuento por
              WhatsApp.
            </p>
            <ul className="offer-bullets">
              <li>Diagnóstico de negocio + investigación de competencia</li>
              <li>Gestión de evergreen, lanzamiento, leads o una mezcla</li>
              <li>Edición de creativos (video e imagen) incluida</li>
              <li>Reportes diarios y semanales + dashboard en vivo</li>
              <li>Fee fijo, sin % de tu inversión publicitaria</li>
              <li>Cupo limitado a 2-3 clientes simultáneos</li>
            </ul>
            <div className="hero-cta" style={{ justifyContent: "flex-start" }}>
              <a
                className="btn btn-primary"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
              >
                Reservar mi cupo por WhatsApp
              </a>
            </div>
            <p className="cupo-note">
              <strong>Solo trabajo con 2-3 clientes a la vez.</strong>{" "}
              Escribime y te confirmo si hay cupo este mes.
            </p>
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
