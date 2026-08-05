export default function Home() {
  return (
    <div className="page">
      <header className="wrap">
        <nav className="nav" aria-label="Principal">
          <a className="nav-brand" href="#top">
            Ramaruizmkt
          </a>
          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-plane" aria-hidden="true" />
          <div className="hero-content">
            <p className="brand-mark">
              Rama
              <span>ruiz</span>
              mkt
            </p>
            <h1>Marketing digital que hace crecer tu marca.</h1>
            <p>
              Estrategia, contenido y adquisición pensados para negocios que
              necesitan claridad y resultados medibles.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#contacto">
                Hablar de tu proyecto
              </a>
              <a className="btn btn-ghost" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="wrap">
            <p className="section-label">Servicios</p>
            <h2>Lo que puedo hacer por vos</h2>
            <p className="section-lead">
              Un enfoque práctico: menos ruido, más sistema. Cada servicio se
              adapta a tu etapa y a tu capacidad de ejecución.
            </p>
            <div className="services">
              <article className="service">
                <h3>Estrategia digital</h3>
                <p>
                  Definimos posicionamiento, canales y prioridades para que cada
                  acción tenga un objetivo claro.
                </p>
              </article>
              <article className="service">
                <h3>Contenido y redes</h3>
                <p>
                  Calendario editorial, piezas y narrativa de marca para
                  construir presencia consistente y memorable.
                </p>
              </article>
              <article className="service">
                <h3>Ads y adquisición</h3>
                <p>
                  Campañas en Meta y Google orientadas a leads o ventas, con
                  seguimiento y optimización continua.
                </p>
              </article>
              <article className="service">
                <h3>Crecimiento continuo</h3>
                <p>
                  Análisis, pruebas y mejoras mensuales para sostener el
                  crecimiento sin perder foco.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="proceso">
          <div className="wrap">
            <p className="section-label">Proceso</p>
            <h2>Cómo trabajamos</h2>
            <p className="section-lead">
              Un proceso corto y transparente, diseñado para arrancar rápido y
              medir desde el día uno.
            </p>
            <div className="process">
              <article className="step">
                <h3>Diagnóstico</h3>
                <p>
                  Revisamos tu marca, audiencia y canales actuales para
                  encontrar oportunidades reales.
                </p>
              </article>
              <article className="step">
                <h3>Plan de acción</h3>
                <p>
                  Armamos un plan concreto: mensajes, formatos, presupuesto y
                  métricas de éxito.
                </p>
              </article>
              <article className="step">
                <h3>Ejecución y ajuste</h3>
                <p>
                  Publicamos, medimos y iteramos. Lo que no convierte, se
                  mejora o se corta.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact" id="contacto">
          <div className="wrap">
            <p className="section-label">Contacto</p>
            <h2>Contame qué querés lograr</h2>
            <p className="section-lead">
              Escribime y vemos juntos el siguiente paso. Ideal si ya tenés un
              negocio activo y querés ordenar o escalar tu marketing.
            </p>
            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href="mailto:hola@ramaruizmkt.com"
              >
                hola@ramaruizmkt.com
              </a>
              <a
                className="btn btn-ghost"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Ramaruizmkt</span>
        <span>Marketing digital con foco en resultados</span>
      </footer>
    </div>
  );
}
