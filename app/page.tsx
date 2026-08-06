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
            <a href="#oferta">Setup</a>
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
            <h1>Setup de anuncios para tu tienda. Yo me encargo de todo.</h1>
            <p>
              Armo tus primeras campañas, creatividades y estructura en Meta.
              Vos recibís soporte por WhatsApp y un sistema listo para vender —
              sin fee mensual.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                Quiero el Setup
              </a>
              <a className="btn btn-ghost" href="#oferta">
                Ver precio
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="incluye">
          <div className="wrap">
            <p className="section-label">Qué incluye</p>
            <h2>Todo referido a tu publicidad, a cargo mío.</h2>
            <p className="section-lead">
              Un Setup completo para que tu tienda empiece a generar consultas
              sin que tengas que pelearte con el administrador de anuncios.
            </p>
            <ul className="perk-list">
              <li>
                <h3>Primeras campañas armadas</h3>
                <p>
                  Configuro Business Manager, estructura y las primeras
                  campañas listas para salir a vender.
                </p>
              </li>
              <li>
                <h3>Primeras creatividades</h3>
                <p>
                  Piezas y mensajes pensados para tu producto y tu audiencia,
                  no plantillas genéricas.
                </p>
              </li>
              <li>
                <h3>Presupuesto optimizado</h3>
                <p>
                  Te digo cuánto invertir para arrancar sin quemar plata ni
                  quedarte corto de datos.
                </p>
              </li>
              <li>
                <h3>Soporte por WhatsApp</h3>
                <p>
                  15 días de acompañamiento directo por WhatsApp para dudas,
                  ajustes y seguimiento del arranque.
                </p>
              </li>
              <li>
                <h3>Guía para sostenerlo</h3>
                <p>
                  Manual simple para que puedas mantener las campañas vos, o
                  seguir trabajando juntos si preferís delegar.
                </p>
              </li>
              <li>
                <h3>Listo en 15 días</h3>
                <p>
                  En dos semanas tenés el sistema funcionando. Sin procesos
                  eternos ni agencias hinchadas.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="proceso">
          <div className="wrap">
            <p className="section-label">Cómo funciona</p>
            <h2>Tres pasos y salís al aire</h2>
            <p className="section-lead">
              Pago único. Yo ejecuto. Vos vendés.
            </p>
            <div className="process">
              <article className="step">
                <h3>Brief por WhatsApp</h3>
                <p>
                  Me contás qué vendés, a quién y con qué presupuesto querés
                  arrancar. Alineamos en minutos.
                </p>
              </article>
              <article className="step">
                <h3>Armo y lanzo</h3>
                <p>
                  Campañas, creatividades y estructura técnica. Vos solo
                  aprobás y listo.
                </p>
              </article>
              <article className="step">
                <h3>Acompañamiento</h3>
                <p>
                  15 días de soporte para ajustar, responder dudas y dejar el
                  sistema estable.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="oferta">
          <div className="wrap offer-block">
            <p className="section-label">Setup · Pago único</p>
            <h2>Entrada accesible. Sin retainer.</h2>
            <p className="section-lead">
              Otros Setup similares rondan los USD 350–450. Acá arrancás más
              bajo, con todo hecho y soporte incluido. Ideal para tiendas que
              quieren probar el sistema sin engancharse a un fee mensual.
            </p>
            <div className="price-row">
              <p className="price">
                <span className="price-anchor">USD 280</span>
                <span className="price-amount">USD 197</span>
                <span className="price-period">pago único</span>
              </p>
              <p className="price-note">
                Setup completo de publicidad + 15 días de soporte por WhatsApp.
                El presupuesto de ads se paga aparte a Meta.
              </p>
            </div>
            <ul className="offer-bullets">
              <li>Yo me encargo de todo lo referido a tu publicidad</li>
              <li>Campañas + creatividades + presupuesto optimizado</li>
              <li>Soporte directo por WhatsApp (15 días)</li>
              <li>Guía para mantenerlo vos después</li>
              <li>Sin fee mensual · sin permanencia</li>
            </ul>
            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                Reservar Setup por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section contact" id="contacto">
          <div className="wrap">
            <p className="section-label">Contacto</p>
            <h2>Escribime y vemos tu tienda</h2>
            <p className="section-lead">
              Mandame un WhatsApp con qué vendés y cuánto podés invertir en
              ads. Te confirmo si el Setup te sirve y cómo arrancar.
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
        <span>Setup de ads para tiendas · pago único</span>
      </footer>
    </div>
  );
}
