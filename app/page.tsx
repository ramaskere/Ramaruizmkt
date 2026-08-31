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

        <section className="section vs-section" id="opciones">
          <div className="wrap">
            <p className="section-label">Tus opciones</p>
            <h2 className="vs-title">
              Para llevar tu pauta tenés tres caminos. Uno solo te baja el
              costo por venta.
            </h2>
            <ul className="vs-grid vs-grid--trio stagger">
              <li className="vs-col vs-col--free reveal">
                <p className="vs-col-title">Vos + 3 freelancers</p>
                <ul className="vs-list">
                  <li>Hablás con tres personas para sacar un anuncio nuevo.</li>
                  <li>
                    El que edita no sabe de ventas; el que sabe de ventas no
                    edita.
                  </li>
                  <li>Cada uno entrega su parte y nadie se hace cargo del número.</li>
                  <li>El project manager terminás siendo vos.</li>
                </ul>
              </li>
              <li className="vs-col vs-col--agency reveal">
                <p className="vs-col-title">Una agencia</p>
                <ul className="vs-list">
                  <li>Te asignan una cuenta junior que aprende con tu presupuesto.</li>
                  <li>Cada cambio pasa por aprobaciones y tarda semanas.</li>
                  <li>Sos un cliente más en una lista larga.</li>
                  <li>Pagás la estructura, no el resultado.</li>
                </ul>
              </li>
              <li className="vs-col vs-col--me reveal">
                <p className="vs-col-title">Conmigo</p>
                <ul className="vs-list">
                  <li>Research, creativos y pauta salen de la misma cabeza.</li>
                  <li>El anuncio que no funciona lo cambio yo, el mismo día.</li>
                  <li>Reporte diario, semanal y mensual. No te enterás a fin de mes.</li>
                  <li>Me meto en tu cuenta como si fuera mía.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="section flow-section" id="solucion">
          <div className="wrap">
            <p className="section-label">Qué hago</p>
            <h2 className="flow-headline">
              Me encargo de todo lo que mueve tu costo por venta. Y en este
              orden.
            </h2>
            <ol className="flow stagger">
              <li className="reveal">
                <span className="flow-k">Research</span>
                <span className="flow-d">
                  Qué ángulos están funcionando en tu nicho este mes. De acá
                  sale todo lo demás.
                </span>
              </li>
              <li className="reveal">
                <span className="flow-k">Creativos</span>
                <span className="flow-d">
                  Los videos que hagan falta, con hooks sacados de las
                  objeciones reales de tus compradores. Apoyado en IA para
                  probar más en menos tiempo.
                </span>
              </li>
              <li className="reveal">
                <span className="flow-k">Campañas</span>
                <span className="flow-d">
                  Estructura, segmentación, escalado y optimización. Todos los
                  días, no cuando me acuerdo.
                </span>
              </li>
              <li className="reveal">
                <span className="flow-k">Reporte</span>
                <span className="flow-d">
                  Diario, semanal y mensual, con lectura estratégica y el plan
                  del mes que viene.
                </span>
              </li>
            </ol>
          </div>
        </section>

        <section className="section story-section" id="caso">
          <div className="wrap">
            <p className="section-label">Un cliente</p>
            <div className="story">
              <p className="story-lead reveal">
                Con Tino Mossu llevé la cuenta de Meta{" "}
                <strong>
                  <CountUp value={18} suffix=" meses" />
                </strong>
                . Tuvimos meses de más de{" "}
                <strong>
                  <CountUp value={400000} prefix="US$" />
                </strong>{" "}
                facturados con ads, y una racha de varios meses seguidos en{" "}
                <strong>
                  <CountUp value={500000} prefix="US$" />
                </strong>
                .
              </p>

              <p className="reveal">
                Tino es CEO de Factor Studios y fundador de la U del Closer, una
                de las escuelas de ventas y closing más grandes de Latam, con
                más de 40 personas en el equipo.
              </p>

              <Figure
                src="/sobre-mi/rama-tino.jpg"
                alt="Rama Ruiz junto a Tino Mossu"
                caption="Con Tino (camisa blanca). Lo conocí en persona, no fue trabajar por mail y mandar un reporte."
                className="story-photo story-photo--right"
              />

              <p className="reveal">
                Antes de tocar un solo anuncio me senté con él y con su equipo a
                entender cómo piensan la oferta y a quién quieren adentro. De ahí
                salió la primera estructura de campañas.
              </p>
              <p className="reveal">
                Los 18 meses llevé todo desde el mismo lugar: el research de
                ángulos, los creativos en video y las campañas. Cuando un
                anuncio dejaba de rendir lo cambiaba yo el mismo día, sin
                esperar a nadie.
              </p>

              <Figure
                src="/sobre-mi/rama-tino-call.jpg"
                alt="Rama Ruiz en una videollamada de trabajo con el equipo de Tino Mossu"
                caption="En una call con el equipo. Todo se trabajaba con ellos adentro."
                className="story-photo story-photo--left"
              />

              <p className="reveal">
                El evergreen no se apagó nunca y encima montamos los
                lanzamientos arriba, sin frenar uno para hacer el otro.
              </p>
              <p className="story-kicker reveal">
                Así trabajo: me meto en la cuenta, me quedo, y la hago crecer
                mes a mes.
              </p>
            </div>
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
