function App() {
  return (
    <>
      {/* Sección 1 — fondo claro azul (zona Symptoms) */}
      <section className="bg-bg-landing-symptoms text-text-primary p-xl">
        <h2 className="text-heading-xl">Symptoms</h2>
        <p className="text-body-lg text-text-secondary mt-md">
          Fondo <code>bg-landing-symptoms</code> · texto secundario gris medio.
        </p>
      </section>

      {/* Sección 2 — fondo gris (zona Prevent) */}
      <section className="bg-bg-landing-prevent text-text-primary p-xl">
        <h2 className="text-heading-xl">Prevention</h2>
        <p className="text-body-lg text-text-secondary mt-md">
          Fondo <code>bg-landing-prevent</code> · igual paleta de texto.
        </p>
      </section>

      {/* Sección 3 — fondo navy oscuro (zona Footer / Hero) */}
      <section className="bg-bg-landing-footer text-neutral-0 p-xl">
        <h1 className="text-display-xl">Covid Tracker</h1>
        <p className="text-body-lg text-neutral-300 mt-md">
          Si lees esto en Poppins sobre fondo navy, funciona.
        </p>

        <div className="mt-lg flex gap-md text-body-md">
          <span className="text-status-cases">Casos</span>
          <span className="text-status-active">Activos</span>
          <span className="text-status-recovered">Recuperados</span>
          <span className="text-status-critical">Críticos</span>
        </div>

        <div className="mt-xl bg-neutral-0 text-text-primary p-lg rounded-lg">
          Tarjeta blanca con padding <code>lg</code> y radius <code>lg</code>.
          Cambia entre 8px (móvil) y 12px (desktop).
        </div>

        <div className="mt-md flex gap-sm">
          <span className="bg-status-cases-bg text-status-cases px-md py-sm rounded-md text-label-sm">
            Cases pill
          </span>
          <span className="bg-status-active-bg text-status-active px-md py-sm rounded-md text-label-sm">
            Active pill
          </span>
          <span className="bg-status-recovered-bg text-status-recovered px-md py-sm rounded-md text-label-sm">
            Recovered pill
          </span>
        </div>
      </section>
    </>
  )
}

export default App
