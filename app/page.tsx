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
            <a href="#oferta">Oferta</a>
            <a href="#contacto">WhatsApp</a>
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
            <h1>Publicidad lista. Vos solo cobrás.</h1>
            <p>
              Oferta simple para arrancar: yo me encargo de todo lo referido a
              tu publicidad. Vos recibís soporte por WhatsApp y te enfocás en
              vender.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                Quiero la oferta
              </a>
              <a className="btn btn-ghost" href="#incluye">
                Ver qué incluye
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="incluye">
          <div className="wrap">
            <p className="section-label">Qué incluye</p>
            <h2>Todo hecho por mí. Cero vueltas.</h2>
            <p className="section-lead">
              Pensado para farmear resultados sin que tengas que aprender ads
              ni estar encima de Meta todos los días.
            </p>
            <ul className="perk-list">
              <li>
                <h3>Yo me encargo de tu publicidad</h3>
                <p>
                  Armado, publicación y seguimiento de campañas. No tenés que
                  tocar el administrador de anuncios.
                </p>
              </li>
              <li>
                <h3>Soporte por WhatsApp</h3>
                <p>
                  Consultas, avances y ajustes por WhatsApp. Respuesta directa,
                  sin tickets ni formularios eternos.
                </p>
              </li>
              <li>
                <h3>Mensaje y creatividades</h3>
                <p>
                  Definimos qué decir y con qué piezas salir para que el anuncio
                  hable claro a tu audiencia.
                </p>
              </li>
              <li>
                <h3>Optimización semanal</h3>
                <p>
                  Recorto lo que no rinde y refuerzo lo que convierte. El
                  presupuesto trabaja, no se tira.
                </p>
              </li>
              <li>
                <h3>Reporte simple</h3>
                <p>
                  Números claros: cuánto se gastó, qué entró y qué conviene
                  hacer la próxima semana.
                </p>
              </li>
              <li>
                <h3>Arranque rápido</h3>
                <p>
                  En pocos días estás en el aire. Ideal si querés empezar a
                  mover plata sin montar un equipo de marketing.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="proceso">
          <div className="wrap">
            <p className="section-label">Cómo funciona</p>
            <h2>Tres pasos y listo</h2>
            <p className="section-lead">
              Sin contratos eternos ni procesos hinchados. Entrás, alineamos y
              salimos a vender.
            </p>
            <div className="process">
              <article className="step">
                <h3>Me contás tu oferta</h3>
                <p>
                  Qué vendés, a quién y con qué presupuesto querés arrancar.
                  Lo alineamos por WhatsApp.
                </p>
              </article>
              <article className="step">
                <h3>Yo armo y lanzo</h3>
                <p>
                  Configuro cuentas, campañas y creatividades. Vos solo
                  aprobás y listo.
                </p>
              </article>
              <article className="step">
                <h3>Medimos y ajustamos</h3>
                <p>
                  Semana a semana optimizo para que cada peso invertido
                  busque retorno.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="oferta">
          <div className="wrap offer-block">
            <p className="section-label">Oferta de entrada</p>
            <h2>Barato para arrancar y farmear.</h2>
            <p className="section-lead">
              Precio bajo a propósito: para que puedas probar el sistema sin
              quemar el mes. Si funciona, escalamos juntos.
            </p>
            <div className="price-row">
              <p className="price">
                <span className="price-amount">USD 49</span>
                <span className="price-period">/ mes</span>
              </p>
              <p className="price-note">
                Gestión completa de publicidad + soporte por WhatsApp. El
                presupuesto de ads se paga aparte a Meta/Google.
              </p>
            </div>
            <ul className="offer-bullets">
              <li>Todo referido a tu publicidad, a cargo mío</li>
              <li>Soporte directo por WhatsApp</li>
              <li>Optimización y reporte semanal</li>
              <li>Sin permanencia: mes a mes</li>
            </ul>
            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section contact" id="contacto">
          <div className="wrap">
            <p className="section-label">Contacto</p>
            <h2>Escribime y arrancamos</h2>
            <p className="section-lead">
              Mandame un WhatsApp con qué vendés y cuánto querés invertir en
              ads. Te digo si la oferta te sirve y cómo arrancar esta semana.
            </p>
            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/"
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
        <span>Publicidad hecha por mí, resultados para vos</span>
      </footer>
    </div>
  );
}
