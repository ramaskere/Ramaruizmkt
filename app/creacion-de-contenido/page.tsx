import type { Metadata } from "next";
import Reveal from "../reveal";
import Carousel from "../carousel";
import { whatsappLink } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "Ramaruizmkt — Creación de contenido en video, todo incluido",
  description:
    "Investigo, escribo el guion, armo el calendario, edito y publico. Vos solo grabás. Planes Básico, Medio y Ultra Picante.",
};

const WHATSAPP_HREF = whatsappLink(
  "Hola! Vi tu página de creación de contenido y quiero saber más."
);

export default function CreacionDeContenido() {
  return (
    <div className="page">
      <Reveal />
      <header className="wrap">
        <nav className="nav" aria-label="Principal">
          <a className="nav-brand" href="#top">
            Ramaruizmkt
          </a>
          <div className="nav-links">
            <a href="#proceso">Cómo funciona</a>
            <a href="#asi-edito">Así edito</a>
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
          <div className="hero-content">
            <div className="hero-avatar">
              <span className="avatar-initials">RR</span>
            </div>
            <p className="availability-pill">
              <span className="pill-dot" aria-hidden="true" />
              Cupo disponible este mes
            </p>
            <p className="eyebrow">Creación de contenido · Servicio integral</p>
            <h1>
              <strong>Vos grabás.</strong>
              <span>Yo investigo, escribo,</span>
              <span>edito y publico</span>
              <strong>todo lo demás.</strong>
            </h1>
            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
              >
                Quiero armar mi plan →
              </a>
              <a className="btn btn-ghost" href="#asi-edito">
                Ver cómo edito ↓
              </a>
            </div>
            <p className="hero-stats">
              Investigación · Guion · Calendario · Edición · Publicación
            </p>
          </div>
        </section>

        <section className="section" id="proceso">
          <div className="wrap">
            <p className="section-label">Cómo funciona</p>
            <h2>Servicio alfombra roja: vos solo prendés la cámara.</h2>
            <p className="section-lead">
              Nada de estar pensando qué publicar ni de perder horas
              editando. Yo me encargo de armar todo el ciclo, vos solo
              grabás lo que te paso.
            </p>
            <ul className="timeline timeline--wide stagger">
              <li className="timeline-item reveal">
                <span className="timeline-dot" aria-hidden="true" />
                <h4>Investigo tu nicho</h4>
                <p>
                  Reviso qué preguntas hace tu audiencia y qué formatos
                  están funcionando en cuentas parecidas a la tuya.
                </p>
              </li>
              <li className="timeline-item reveal">
                <span className="timeline-dot" aria-hidden="true" />
                <h4>Te paso la pauta</h4>
                <p>
                  Los puntos clave a decir en cada video, no un guion
                  palabra por palabra, para que grabar sea rápido y natural.
                </p>
              </li>
              <li className="timeline-item reveal">
                <span className="timeline-dot" aria-hidden="true" />
                <h4>Vos grabás</h4>
                <p>
                  Es lo único que hacés. Con el teléfono, cuando tengas un
                  rato.
                </p>
              </li>
              <li className="timeline-item reveal">
                <span className="timeline-dot" aria-hidden="true" />
                <h4>Yo edito y publico</h4>
                <p>
                  Cortes, subtítulos, música, calendario armado y todo
                  subido a tiempo, en las plataformas que corresponda.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="incluye">
          <div className="wrap">
            <p className="section-label">Qué incluye</p>
            <h2>Todo el ciclo, de punta a punta.</h2>
            <p className="section-lead">
              Vos seguís haciendo lo tuyo — atender tu negocio, dar tus
              servicios. Yo me hago cargo de que el contenido salga, y
              salga bien.
            </p>
            <ul className="card-grid stagger">
              <li className="card reveal" data-n="01">
                <span className="card-tag">Investigación</span>
                <h3>Temas y preguntas de tu nicho</h3>
                <p>Qué le funciona a cuentas parecidas a la tuya, hoy.</p>
              </li>
              <li className="card reveal" data-n="02">
                <span className="card-tag">Guion / Pauta</span>
                <h3>Puntos clave por video</h3>
                <p>Para que grabar sea rápido y no suene leído.</p>
              </li>
              <li className="card reveal" data-n="03">
                <span className="card-tag">Calendario</span>
                <h3>Planificación mensual</h3>
                <p>Qué se publica y cuándo, ya definido de antemano.</p>
              </li>
              <li className="card reveal" data-n="04">
                <span className="card-tag">Edición</span>
                <h3>Cortes, subtítulos y música</h3>
                <p>Formato vertical, listo para cada plataforma.</p>
              </li>
              <li className="card reveal" data-n="05">
                <span className="card-tag">Publicación</span>
                <h3>Subo todo por vos</h3>
                <p>Reels, TikTok y Shorts, en el horario que mejor rinde.</p>
              </li>
              <li className="card reveal" data-n="06">
                <span className="card-tag">Reporte</span>
                <h3>Qué funcionó mejor</h3>
                <p>Reporte mensual simple, para ajustar los próximos temas.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="asi-edito">
          <div className="wrap">
            <p className="section-label">Así edito yo</p>
            <h2>Contenido real, editado por mí.</h2>
            <p className="section-lead">
              Algunos ejemplos de piezas que edité — cortes, ritmo,
              subtítulos y formato listo para publicar.
            </p>
            <Carousel>
              <li className="card video-card result-card result-card--compact reveal">
                <div className="video-frame">
                  <video
                    className="video-el"
                    src="/contenido/ejemplo-1.mp4"
                    poster="/contenido/ejemplo-1.jpg"
                    controls
                    playsInline
                    preload="none"
                  />
                </div>
                <div className="video-caption">
                  <h4>Ejemplo 1</h4>
                  <p>Corte + subtítulos + formato vertical</p>
                </div>
              </li>
              <li className="card video-card result-card result-card--compact reveal">
                <div className="video-frame">
                  <video
                    className="video-el"
                    src="/contenido/ejemplo-2.mp4"
                    poster="/contenido/ejemplo-2.jpg"
                    controls
                    playsInline
                    preload="none"
                  />
                </div>
                <div className="video-caption">
                  <h4>Ejemplo 2</h4>
                  <p>Ritmo de edición + música</p>
                </div>
              </li>
              <li className="card video-card result-card result-card--compact reveal">
                <div className="video-frame">
                  <video
                    className="video-el"
                    src="/contenido/ejemplo-3.mp4"
                    poster="/contenido/ejemplo-3.jpg"
                    controls
                    playsInline
                    preload="none"
                  />
                </div>
                <div className="video-caption">
                  <h4>Ejemplo 3</h4>
                  <p>Hook + estructura de guion</p>
                </div>
              </li>
              <li className="card video-card result-card result-card--compact reveal">
                <div className="video-frame">
                  <video
                    className="video-el"
                    src="/contenido/ejemplo-4.mp4"
                    poster="/contenido/ejemplo-4.jpg"
                    controls
                    playsInline
                    preload="none"
                  />
                </div>
                <div className="video-caption">
                  <h4>Ejemplo 4</h4>
                  <p>Antes y después de una nota cruda</p>
                </div>
              </li>
            </Carousel>
          </div>
        </section>

        <section className="section" id="planes">
          <div className="wrap">
            <p className="section-label">Planes</p>
            <h2>3 formas de delegarlo.</h2>
            <p className="section-lead">
              Elegís el volumen y las plataformas. El precio se ajusta
              según eso — lo charlamos por WhatsApp, sin sorpresas.
            </p>
            <ul className="card-grid stagger">
              <li className="card plan-card reveal" data-n="01">
                <span className="card-tag">Plan 1</span>
                <h3>Plan Básico</h3>
                <p className="plan-tagline">
                  Para mantener el ritmo sin pensar en nada.
                </p>
                <ul className="offer-bullets plan-includes">
                  <li>Investigación de temas del mes</li>
                  <li>Pauta de grabación por video</li>
                  <li>Edición completa (cortes, subtítulos, música)</li>
                  <li>Publicación en 1 plataforma</li>
                  <li>Calendario mensual</li>
                </ul>
                <a
                  className="btn btn-ghost plan-cta"
                  href={whatsappLink(
                    "Hola! Vi tu página y quiero saber más sobre el Plan Básico de contenido."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar precio →
                </a>
              </li>
              <li className="card plan-card reveal" data-n="02">
                <span className="card-tag">Plan 2</span>
                <h3>Plan Medio</h3>
                <p className="plan-tagline">
                  Más volumen, más presencia, mismo trabajo de tu lado: cero.
                </p>
                <ul className="offer-bullets plan-includes">
                  <li>Investigación + pauta por video</li>
                  <li>Mayor volumen de piezas por mes</li>
                  <li>Edición completa, formato por plataforma</li>
                  <li>Publicación en 2 plataformas</li>
                  <li>Calendario + reporte mensual</li>
                </ul>
                <a
                  className="btn btn-ghost plan-cta"
                  href={whatsappLink(
                    "Hola! Vi tu página y quiero saber más sobre el Plan Medio de contenido."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar precio →
                </a>
              </li>
              <li
                className="card plan-card plan-card--highlight reveal"
                data-n="03"
              >
                <span className="card-tag">Plan 3 · Ultra Picante</span>
                <h3>Plan Ultra Picante</h3>
                <p className="plan-tagline">
                  Para no tener que pensar en contenido nunca más.
                </p>
                <ul className="offer-bullets plan-includes">
                  <li>Investigación semanal, no mensual</li>
                  <li>Máximo volumen de piezas por mes</li>
                  <li>Edición más elaborada (B-roll, efectos, ritmo)</li>
                  <li>Publicación en Reels, TikTok y Shorts</li>
                  <li>Calendario + reporte + llamada mensual de estrategia</li>
                </ul>
                <a
                  className="btn btn-primary plan-cta"
                  href={whatsappLink(
                    "Hola! Vi tu página y quiero saber más sobre el Plan Ultra Picante de contenido."
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

        <section className="section contact" id="sobre-mi">
          <div className="wrap">
            <p className="section-label">Sobre mí</p>
            <h2>Arranqué editando video. Nunca dejé de hacerlo.</h2>
            <div className="bio-layout">
              <div className="reveal">
                <p className="bio-text">
                  Antes de meterme en pauta publicitaria, edité video para
                  otros — ahí aprendí a cortar, a pensar el ritmo de una
                  pieza y a armar algo que a alguien le den ganas de ver
                  hasta el final.
                </p>
                <p className="bio-text">
                  Hoy gestiono cuentas grandes de infoproductores de
                  Argentina y Latam, pero seguí con las manos en la edición
                  — investigar temas, escribir la pauta y armar sistemas de
                  contenido es lo que más disfruto de todo esto.
                </p>
                <div className="bio-signature-row">
                  <div className="bio-avatar">
                    <span className="avatar-initials">RR</span>
                  </div>
                  <p className="bio-signature">
                    Rama Ruiz — creación y edición de contenido.
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
                  <h4>Media buyer</h4>
                  <p>Terminé gestionando pauta de cuentas grandes.</p>
                </li>
                <li className="timeline-item reveal">
                  <span className="timeline-dot" aria-hidden="true" />
                  <h4>Contenido, de punta a punta</h4>
                  <p>
                    Hoy sumo investigación, guion, edición y publicación en
                    un solo servicio.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap cta-band-inner">
            <h2>¿Listo para dejar de pensar qué publicar?</h2>
            <p>
              Contame de tu marca o negocio y armamos un plan de contenido
              a tu medida — vos solo tenés que grabar.
            </p>
            <a
              className="btn btn-primary"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              Quiero armar mi plan por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Ramaruizmkt</span>
        <span>
          Creación de contenido en video · investigo, escribo, edito y
          publico
        </span>
      </footer>
    </div>
  );
}
