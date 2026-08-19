const WHATSAPP_NUMBER = "5492645127846";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_MSG = encodeURIComponent(
  "Hola! Vi tu página y quiero saber más sobre la gestión de Meta Ads."
);

export default function Home() {
  return (
    <div className="page">
      <header className="wrap">
        <nav className="nav" aria-label="Principal">
          <a className="nav-brand" href="#top">
            Ramaruizmkt
          </a>
          <div className="nav-links">
            <a href="#incluye">Qué incluye</a>
            <a href="#proceso">Proceso</a>
            <a href="#oferta">Fee y cupo</a>
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
            <p className="eyebrow">Meta Ads · Infoproductores y coaches</p>
            <h1>
              <strong>Me dedico a escalar tus resultados</strong>
              <span>con Meta Ads.</span>
              <strong>Vos te olvidás de todo.</strong>
            </h1>
            <p>
              Gestión completa de pauta para infoproductores y coaches que ya
              facturan y quieren escalar sin vivir pegados al Administrador
              de anuncios. Fee fijo, cupo limitado a 2-3 clientes.
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
                Ver fee y cupo ↓
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="incluye">
          <div className="wrap">
            <p className="section-label">Qué incluye</p>
            <h2>Yo me encargo de todo. Literal.</h2>
            <p className="section-lead">
              Vos seguís haciendo lo tuyo — crear contenido, vender, dar tus
              programas. Yo me hago cargo de que la pauta funcione, de punta
              a punta.
            </p>
            <ul className="card-grid">
              <li className="card">
                <span className="card-num">01</span>
                <span className="card-tag">Diagnóstico</span>
                <h3>Reviso tu funnel primero</h3>
                <p>
                  Oferta, landing y pauta actual, antes de tocar nada. Para
                  saber qué tipo de tráfico necesitás de verdad: evergreen,
                  lanzamiento, leads o una mezcla.
                </p>
              </li>
              <li className="card">
                <span className="card-num">02</span>
                <span className="card-tag">Gestión</span>
                <h3>Pauta completa, de punta a punta</h3>
                <p>
                  Armo y optimizo las campañas según lo que salga del
                  diagnóstico. Vos no tocás el Ads Manager.
                </p>
              </li>
              <li className="card">
                <span className="card-num">03</span>
                <span className="card-tag">Funnel</span>
                <h3>Miro más allá de los anuncios</h3>
                <p>
                  Si algo no vende, no te tiro la pelota. Reviso oferta,
                  landing y copy, y te aviso apenas lo veo.
                </p>
              </li>
              <li className="card">
                <span className="card-num">04</span>
                <span className="card-tag">Reporte</span>
                <h3>Reporte semanal, corto y claro</h3>
                <p>
                  Qué se gastó, qué trajo, qué se ajusta. Nada de planillas
                  de 40 columnas.
                </p>
              </li>
              <li className="card">
                <span className="card-num">05</span>
                <span className="card-tag">Revisión</span>
                <h3>Llamada mensual</h3>
                <p>
                  Nos sentamos una vez al mes a ver el panorama completo y
                  decidir los próximos pasos.
                </p>
              </li>
              <li className="card">
                <span className="card-num">06</span>
                <span className="card-tag">Fee</span>
                <h3>Fee fijo, no % de inversión</h3>
                <p>
                  Pagás lo mismo factures lo que factures en ads. No tengo
                  incentivo para que gastes de más.
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
            <div className="process">
              <article className="step">
                <h3>Diagnóstico</h3>
                <p>
                  Miro tu funnel y tu cuenta actual. Definimos juntos qué
                  tipo de tráfico necesitás ahora.
                </p>
              </article>
              <article className="step">
                <h3>Armo y gestiono</h3>
                <p>
                  Estructuro las campañas y me hago cargo de la optimización
                  día a día.
                </p>
              </article>
              <article className="step">
                <h3>Reporto y ajusto</h3>
                <p>
                  Reporte semanal + llamada mensual para ir afinando sin
                  sorpresas.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="oferta">
          <div className="wrap offer-block">
            <p className="section-label">Fee mensual · Cupo limitado</p>
            <h2>Gestión completa, fee fijo.</h2>
            <p className="section-lead">
              Trabajo con un máximo de 2-3 clientes en simultáneo — no es
              marketing, es lo que me permite dar atención de verdad en vez
              de manejar 15 cuentas a la vez.
            </p>
            <div className="price-row">
              <p className="price">
                <span className="price-amount">USD 600–1.200</span>
                <span className="price-period">/ mes</span>
              </p>
              <p className="price-note">
                Fee fijo según tamaño de cuenta e inversión en pauta. El
                presupuesto de ads se paga aparte a Meta.
              </p>
            </div>
            <ul className="offer-bullets">
              <li>Diagnóstico de funnel incluido al arrancar</li>
              <li>Gestión de evergreen, lanzamiento, leads o una mezcla</li>
              <li>Reporte semanal + llamada mensual</li>
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
            <p className="section-label">Contacto</p>
            <h2>Escribime y vemos si hay match</h2>
            <p className="section-lead">
              Contame cómo está tu pauta hoy — la manejás vos, tenés a
              alguien, o no corrés nada — y te digo con sinceridad si tiene
              sentido trabajar juntos.
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
              <a className="btn btn-ghost" href="mailto:hola@ramaruizmkt.com">
                hola@ramaruizmkt.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Ramaruizmkt</span>
        <span>Gestión de Meta Ads para infoproductores y coaches · fee fijo</span>
      </footer>
    </div>
  );
}
