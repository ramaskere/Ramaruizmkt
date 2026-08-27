import type { Metadata } from "next";
import Reveal from "../../reveal";

export const metadata: Metadata = {
  title: "Ramaruizmkt — Propuesta de gestión de tráfico para Sidra Luna Negra",
  description:
    "Gestión de pauta digital de punta a punta para Sidra Luna Negra: puesta en línea, monitoreo diario y reportes. Fee fijo de USD 450/mes, sin porcentaje sobre la inversión.",
};

const WHATSAPP_HREF = `https://wa.me/5492645406690?text=${encodeURIComponent(
  "Hola! Vi la propuesta de gestión de tráfico para Sidra Luna Negra y quiero avanzar."
)}`;

export default function PropuestaSidraLunaNegra() {
  return (
    <div className="page">
      <Reveal />
      <header className="wrap">
        <nav className="nav" aria-label="Principal">
          <a className="nav-brand" href="#top">
            Ramaruizmkt
          </a>
          <div className="nav-links">
            <a href="#cubre">Qué cubre</a>
            <a href="#proceso">Cómo funciona</a>
            <a href="#incluye">Qué incluye</a>
            <a href="#presupuesto">Presupuesto</a>
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
            <p className="eyebrow">Propuesta · Sidra Luna Negra</p>
            <h1>
              <strong>Gestión de tráfico</strong>
              <span>para Sidra Luna Negra.</span>
            </h1>
            <p className="section-lead">
              Me hago cargo de la pauta digital de punta a punta:
              investigación, armado y puesta en línea de las campañas,
              monitoreo diario y reportes. La marca pone la inversión, yo
              hago que rinda.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
              >
                Quiero avanzar →
              </a>
              <a className="btn btn-ghost" href="#presupuesto">
                Ver presupuesto ↓
              </a>
            </div>
            <p className="hero-stats">
              Instagram + Facebook Ads · Monitoreo diario · Fee fijo, no % de
              pauta
            </p>
          </div>
        </section>

        <section className="section" id="cubre">
          <div className="wrap">
            <p className="section-label">Qué cubre el servicio</p>
            <h2>Puesta en línea, monitoreo y resultados.</h2>
            <p className="section-lead">
              Los tres frentes de la gestión de pauta, cubiertos por una sola
              persona que lleva la cuenta de principio a fin.
            </p>
            <ul className="card-grid stagger">
              <li className="card reveal" data-n="01">
                <span className="card-tag">Puesta en línea</span>
                <h3>Investigación y armado</h3>
                <p>
                  Audiencias, ángulos y competencia, armado de las campañas,
                  configuración de cuenta y píxel, y lanzamiento.
                </p>
              </li>
              <li className="card reveal" data-n="02">
                <span className="card-tag">Monitoreo</span>
                <h3>Seguimiento diario</h3>
                <p>
                  Optimización sobre la marcha: lo que rinde se potencia, lo
                  que no se corta. Presupuesto, audiencias y anuncios.
                </p>
              </li>
              <li className="card reveal" data-n="03">
                <span className="card-tag">Resultados</span>
                <h3>Reportes claros</h3>
                <p>
                  Un reporte de avance cada semana y un reporte mensual con
                  el panorama completo: inversión, retorno y plan siguiente.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="proceso">
          <div className="wrap">
            <p className="section-label">Cómo funciona</p>
            <h2>Tres pasos y las campañas están corriendo.</h2>
            <p className="section-lead">La marca aprueba. Yo ejecuto y reporto.</p>
            <ul className="timeline timeline--wide stagger">
              <li className="timeline-item reveal">
                <span className="timeline-dot" aria-hidden="true" />
                <h4>Arranque</h4>
                <p>
                  Reviso la cuenta publicitaria, lo que se hizo antes y la
                  tienda online. Definimos objetivo, audiencias y estructura
                  de campañas.
                </p>
              </li>
              <li className="timeline-item reveal">
                <span className="timeline-dot" aria-hidden="true" />
                <h4>Puesta en línea</h4>
                <p>
                  Configuro todo (cuenta, píxel, catálogo, campañas) y
                  lanzamos con la inversión acordada.
                </p>
              </li>
              <li className="timeline-item reveal">
                <span className="timeline-dot" aria-hidden="true" />
                <h4>Gestión y reportes</h4>
                <p>
                  Monitoreo diario, un reporte de lo ajustado cada semana y
                  un reporte mensual con resultados y el plan del mes
                  siguiente.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="incluye">
          <div className="wrap">
            <p className="section-label">Qué incluye</p>
            <h2>Todo lo que entra por el fee.</h2>
            <p className="section-lead">
              Esto es exactamente lo que cubre el servicio, una vez al
              arranque y todos los meses.
            </p>
            <ul className="card-grid stagger">
              <li className="card reveal" data-n="01">
                <span className="card-tag">Arranque</span>
                <h3>Auditoría de la cuenta</h3>
                <p>Qué se hizo antes y qué rindió.</p>
              </li>
              <li className="card reveal" data-n="02">
                <span className="card-tag">Arranque</span>
                <h3>Investigación de audiencias</h3>
                <p>Segmentaciones, ángulos y competencia.</p>
              </li>
              <li className="card reveal" data-n="03">
                <span className="card-tag">Arranque</span>
                <h3>Setup técnico</h3>
                <p>Cuenta, píxel, catálogo y eventos.</p>
              </li>
              <li className="card reveal" data-n="04">
                <span className="card-tag">Cada mes</span>
                <h3>Armado de campañas</h3>
                <p>Estructura, segmentación y presupuestos.</p>
              </li>
              <li className="card reveal" data-n="05">
                <span className="card-tag">Cada mes</span>
                <h3>Textos y variantes de anuncios</h3>
                <p>Copy y ángulos para testear.</p>
              </li>
              <li className="card reveal" data-n="06">
                <span className="card-tag">Cada mes</span>
                <h3>Monitoreo diario</h3>
                <p>Optimización de las campañas sobre la marcha.</p>
              </li>
              <li className="card reveal" data-n="07">
                <span className="card-tag">Cada mes</span>
                <h3>Pruebas A/B</h3>
                <p>Audiencias, creativos y mensajes.</p>
              </li>
              <li className="card reveal" data-n="08">
                <span className="card-tag">Cada mes</span>
                <h3>Reporte semanal</h3>
                <p>Avance y qué se ajustó esa semana.</p>
              </li>
              <li className="card reveal" data-n="09">
                <span className="card-tag">Cada mes</span>
                <h3>Reporte mensual</h3>
                <p>Inversión, retorno y plan del mes siguiente.</p>
              </li>
            </ul>
            <p className="cupo-note">
              <strong>No incluye</strong> producción de contenido orgánico,
              community management ni publicaciones de feed. El servicio es
              exclusivamente gestión de pauta. El material para los anuncios
              (fotos y videos) lo provee la marca.
            </p>
          </div>
        </section>

        <section className="section" id="presupuesto">
          <div className="wrap offer-block">
            <p className="section-label">Presupuesto</p>
            <h2>Todo esto, por un fee fijo.</h2>
            <p className="section-lead">
              Un solo fee mensual por la gestión completa de la pauta. Sin
              costo de setup y sin porcentaje sobre la inversión.
            </p>
            <p className="plan-price" style={{ fontSize: "2.1rem" }}>
              USD 450 <span>por mes</span>
            </p>
            <ul className="offer-bullets">
              <li>Auditoría de la cuenta e investigación de audiencias</li>
              <li>Armado y puesta en línea de las campañas</li>
              <li>Setup técnico: cuenta, píxel, catálogo y eventos</li>
              <li>Redacción de textos y variantes de anuncios</li>
              <li>Monitoreo diario y optimización sobre la marcha</li>
              <li>Pruebas A/B de audiencias, creativos y mensajes</li>
              <li>Reporte de avance cada semana</li>
              <li>Reporte mensual con resultados y plan del mes siguiente</li>
            </ul>
            <p className="cupo-note">
              <strong>Setup inicial sin costo.</strong> La inversión
              publicitaria, lo que se pone en Meta, la define y abona la
              marca; sugerido para arrancar: USD 400 a 600 por mes.
            </p>
            <div className="hero-cta" style={{ justifyContent: "flex-start" }}>
              <a
                className="btn btn-primary"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
              >
                Avanzar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="vs">
          <div className="wrap">
            <p className="section-label">Por qué así y no con una agencia</p>
            <h2>La diferencia está en cómo se cobra y quién ejecuta.</h2>
            <p className="section-lead">
              Están evaluando un cambio de gestión. Esto es lo que cambia
              trabajando directo con quien maneja las campañas, sin capas
              intermedias.
            </p>
            <ul className="vs-grid stagger">
              <li className="vs-col vs-col--agency reveal">
                <p className="vs-col-title">Agencia</p>
                <ul className="vs-list">
                  <li>Tu pauta la lleva un junior con 15 cuentas más</li>
                  <li>
                    Cobran un porcentaje de lo que gastás, les conviene que
                    gastes de más
                  </li>
                  <li>Te enterás de los resultados recién a fin de mes</li>
                  <li>
                    Hablás con un ejecutivo de cuentas, no con quien opera
                  </li>
                </ul>
              </li>
              <li className="vs-col vs-col--me reveal">
                <p className="vs-col-title">Directo conmigo</p>
                <ul className="vs-list">
                  <li>
                    La lleva quien tiene experiencia en pauta, con cupo de
                    pocas cuentas
                  </li>
                  <li>
                    Fee fijo: me conviene lo mismo que a vos, que la pauta
                    rinda
                  </li>
                  <li>
                    Monitoreo diario y un reporte cada semana, sin sorpresas
                  </li>
                  <li>
                    Hablás siempre con la persona que maneja tus campañas
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap cta-band-inner">
            <h2>¿Arrancamos?</h2>
            <p>
              Escribime y coordinamos una llamada para revisar la cuenta y
              dejar todo listo para poner las campañas en línea.
            </p>
            <a
              className="btn btn-primary"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Ramaruizmkt</span>
        <span>Propuesta de gestión de tráfico para Sidra Luna Negra · fee fijo</span>
      </footer>
    </div>
  );
}
