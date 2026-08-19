import Image from "next/image";
import Reveal from "./reveal";
import Carousel from "./carousel";

const WHATSAPP_NUMBER = "5492645127846";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_MSG = encodeURIComponent(
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
            <a href="#incluye">Qué incluye</a>
            <a href="#proceso">Proceso</a>
            <a href="#resultados">Resultados</a>
            <a href="#oferta">Cupo</a>
            <a
              className="nav-cta"
              href={`${WHATSAPP_BASE}?text=${WHATSAPP_MSG}`}
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
            <p className="eyebrow">
              Meta Ads · Coaches, negocios e infoproductores
            </p>
            <h1>
              <strong>Escalo resultados de</strong>
              <span>coaches, negocios</span>
              <strong>e infoproductores.</strong>
            </h1>
            <p>
              Gestión completa de pauta para coaches, negocios e
              infoproductores que ya facturan y quieren escalar sin vivir
              pegados al Administrador de anuncios. Fee fijo, cupo limitado a
              2-3 clientes.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href={`${WHATSAPP_BASE}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noreferrer"
              >
                Quiero mi cupo →
              </a>
              <a className="btn btn-ghost" href="#oferta">
                Ver cupo ↓
              </a>
            </div>
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

        <section className="section" id="resultados">
          <div className="wrap">
            <p className="section-label">Resultados reales</p>
            <h2>Los números, tal cual salen del Ads Manager.</h2>
            <p className="section-lead">
              Nada de mockups ni cifras infladas — capturas reales, directo
              de las cuentas que gestiono.
            </p>

            <Carousel>
              <li className="card result-card reveal">
                <span className="card-tag">Ecommerce · Producto A</span>
                <p className="result-headline">
                  Invirtió <span className="result-metric">$1.034</span> y
                  generó <span className="result-metric">$5.263</span> en
                  ventas
                </p>
                <p className="result-sub">5.09x de retorno</p>
                <div className="result-image">
                  <Image
                    src="/resultados/ecommerce-producto-a.jpeg"
                    alt="Resultados de Meta Ads: gasto $1.034, facturación $5.263, ROAS 5.09x"
                    width={1600}
                    height={244}
                  />
                </div>
              </li>
              <li className="card result-card reveal">
                <span className="card-tag">Ecommerce · Producto B</span>
                <p className="result-headline">
                  Invirtió <span className="result-metric">$1.615</span> y
                  generó <span className="result-metric">$6.152</span> en
                  ventas
                </p>
                <p className="result-sub">3.81x de retorno</p>
                <div className="result-image">
                  <Image
                    src="/resultados/ecommerce-producto-b.jpeg"
                    alt="Resultados de Meta Ads: gasto $1.615, facturación $6.152, ROAS 3.81x"
                    width={1600}
                    height={248}
                  />
                </div>
              </li>
              <li className="card result-card result-card--compact reveal">
                <span className="card-tag">
                  Tienda Apple · Campaña de conversaciones
                </span>
                <p className="result-headline">
                  Trayendo clientes a{" "}
                  <span className="result-metric">$0,20</span> por
                  conversación
                </p>
                <p className="result-sub">668 conversaciones generadas</p>
                <div className="result-image">
                  <Image
                    src="/resultados/tienda-apple-conversaciones.jpeg"
                    alt="Resultados de Meta Ads: 668 conversaciones generadas a $0,20 cada una, $134,85 de gasto total"
                    width={676}
                    height={466}
                  />
                </div>
              </li>
            </Carousel>
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
                href={`${WHATSAPP_BASE}?text=${WHATSAPP_MSG}`}
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

        <section className="section contact" id="contacto">
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
                  top de Argentina y Latam — gestionando lanzamientos,
                  evergreen y ecommerce. Ahí encontré lo mío: no en la
                  edición, en hacer que la pauta realmente venda.
                </p>
                <p className="bio-signature">
                  Rama Ruiz — gestión de Meta Ads.
                </p>
                <div className="contact-actions">
                  <a
                    className="btn btn-primary"
                    href={`${WHATSAPP_BASE}?text=${WHATSAPP_MSG}`}
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
