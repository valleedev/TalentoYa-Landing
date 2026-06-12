import Link from "next/link"
import { ArrowLeft, CalendarDays, Mail, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  clientResponsibilities,
  dataCategories,
  definitions,
  detectedProviders,
  legalBasisItems,
  legalConfig,
  purposeItems,
  rightsItems,
  securityItems,
  tableOfContents,
} from "@/lib/legal"

function formatDate(value: string) {
  return new Intl.DateTimeFormat("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Bogota",
  }).format(new Date(`${value}T00:00:00-05:00`))
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4 border-t border-[#E8F0F8] pt-10">
      <h2 className="text-2xl font-bold tracking-tight text-[#061C4A] md:text-3xl">{title}</h2>
      <div className="space-y-4 text-base leading-7 text-slate-700">{children}</div>
    </section>
  )
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#20C8B8]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PlaceholderValue({ value }: { value: string }) {
  const pending = value.startsWith("[")
  return (
    <span className={pending ? "font-semibold text-[#B45309]" : "text-slate-800"}>
      {value}
    </span>
  )
}

export function PrivacyPolicyContent() {
  return (
    <main className="bg-white text-[#061C4A]">
      <section className="border-b border-[#E8F0F8] bg-[#F7FBFF] px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Button
            variant="outline"
            className="mb-8 border-[#0758B8]/30 text-[#0758B8] hover:bg-[#E8F0F8] hover:text-[#061C4A] focus-visible:ring-[#0758B8]/40"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#58B5E2]/40 bg-white px-4 py-2 text-sm font-medium text-[#0758B8]">
              <ShieldCheck className="h-4 w-4" />
              Documento publico de TalentoYa
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#061C4A] md:text-5xl">
              Política de Privacidad y Tratamiento de Datos Personales
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              Esta politica explica de forma general como TalentoYa puede recolectar, usar,
              almacenar, transmitir, conservar y proteger datos personales en el marco de sus
              servicios SaaS de gestion de talento humano para empresas. No constituye asesoria
              juridica ni garantiza por si sola el cumplimiento legal absoluto.
            </p>
            <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-lg border border-[#E8F0F8] bg-white px-4 py-3">
                <CalendarDays className="h-4 w-4 text-[#0758B8]" />
                Entrada en vigencia: {formatDate(legalConfig.effectiveDate)}
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[#E8F0F8] bg-white px-4 py-3">
                <CalendarDays className="h-4 w-4 text-[#0758B8]" />
                Ultima actualizacion: {formatDate(legalConfig.lastUpdatedDate)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:py-14">
        <nav
          aria-label="Indice de la politica de privacidad"
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <div className="rounded-lg border border-[#E8F0F8] bg-[#F7FBFF] p-4">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#061C4A]">
              Contenido
            </h2>
            <ol className="grid gap-1 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-md px-3 py-2 text-slate-700 transition-colors hover:bg-white hover:text-[#0758B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0758B8]/50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="min-w-0 space-y-12">
          <Section id="identificacion" title="1. Identificacion del responsable">
            <p>
              Cuando TalentoYa actue como responsable del tratamiento, los datos de identificacion
              deberan completarse con la informacion legal vigente del responsable. Mientras estos
              datos no esten definidos, se muestran placeholders visibles para evitar publicar
              informacion no confirmada.
            </p>
            <dl className="grid gap-3 rounded-lg border border-[#E8F0F8] bg-[#F7FBFF] p-5 sm:grid-cols-2">
              {[
                ["Razon social o nombre", legalConfig.legalName],
                ["Nombre comercial", legalConfig.tradeName],
                ["NIT o documento", legalConfig.identificationNumber],
                ["Domicilio", `${legalConfig.city}, ${legalConfig.country}`],
                ["Direccion", legalConfig.address],
                ["Correo de proteccion de datos", legalConfig.privacyEmail],
                ["Correo de soporte", legalConfig.supportEmail],
                ["Telefono", legalConfig.phone],
                ["Sitio web", legalConfig.websiteUrl],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md bg-white p-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm">
                    <PlaceholderValue value={value} />
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="alcance" title="2. Alcance de la politica">
            <p>
              Esta politica aplica al sitio publico, formularios comerciales y plataforma TalentoYa,
              asi como al tratamiento de datos personales realizado por TalentoYa segun corresponda.
              TalentoYa puede actuar como responsable respecto a datos recopilados directamente para
              crear cuentas, administrar la relacion comercial, prestar soporte, enviar
              comunicaciones, operar seguridad y mejorar el servicio.
            </p>
            <p>
              Tambien puede actuar como encargado del tratamiento respecto a informacion de
              empleados, contratistas u otras personas que las empresas clientes cargan en la
              plataforma. En ese caso, dependiendo de la relacion y finalidad del tratamiento, la
              empresa cliente generalmente determina las finalidades y medios del tratamiento y debe
              contar con las autorizaciones o fundamentos necesarios.
            </p>
          </Section>

          <Section id="definiciones" title="3. Definiciones esenciales">
            <dl className="grid gap-4">
              {definitions.map((item) => (
                <div key={item.term} className="rounded-lg border border-[#E8F0F8] p-4">
                  <dt className="font-semibold text-[#061C4A]">{item.term}</dt>
                  <dd className="mt-1 text-slate-700">{item.description}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="datos" title="4. Datos que puede tratar TalentoYa">
            <p>
              Las categorias dependen de la funcionalidad usada, del rol de TalentoYa y de la
              informacion que entregue el titular o cargue la empresa cliente.
            </p>
            <div className="grid gap-5">
              {dataCategories.map((category) => (
                <div key={category.title} className="rounded-lg border border-[#E8F0F8] p-5">
                  <h3 className="mb-3 text-lg font-semibold text-[#061C4A]">{category.title}</h3>
                  <List items={category.items} />
                </div>
              ))}
            </div>
          </Section>

          <Section id="sensibles-menores" title="5. Datos sensibles y datos de menores">
            <p>
              Algunos documentos laborales, incapacidades, soportes medicos o archivos cargados por
              empresas clientes podrian contener datos sensibles, por ejemplo informacion de salud o
              datos cuyo uso indebido pueda afectar la intimidad del titular. Su tratamiento debe ser
              limitado, necesario, seguro y contar con fundamento legal o autorizacion aplicable.
            </p>
            <p>
              TalentoYa no esta dirigido intencionalmente a menores de edad. Si una empresa cliente
              llegara a registrar datos de menores por una finalidad permitida por la ley, dicha
              empresa debera verificar el fundamento aplicable, respetar el interes superior del
              menor y aplicar restricciones adicionales de acceso, necesidad y seguridad.
            </p>
          </Section>

          <Section id="finalidades" title="6. Finalidades del tratamiento">
            <List items={purposeItems} />
          </Section>

          <Section id="bases" title="7. Bases que permiten el tratamiento">
            <p>
              El tratamiento podra realizarse con base en uno o varios fundamentos, segun el tipo de
              dato, el contexto y el rol de TalentoYa.
            </p>
            <List items={legalBasisItems} />
          </Section>

          <Section id="clientes" title="8. Tratamiento realizado por las empresas clientes">
            <p>
              Cada empresa cliente es responsable de la legalidad, proporcionalidad y finalidad de
              la informacion que carga y administra en TalentoYa, sin perjuicio de las obligaciones
              que correspondan a TalentoYa como encargado o responsable segun el caso.
            </p>
            <List items={clientResponsibilities} />
          </Section>

          <Section id="proveedores" title="9. Proveedores y transmision de datos">
            <p>
              Para operar la plataforma, TalentoYa utiliza o tiene integrados los siguientes
              proveedores detectados en el codigo revisado. No se publican claves, identificadores
              privados, URLs internas ni detalles sensibles de infraestructura.
            </p>
            <div className="grid gap-4">
              {detectedProviders.map((provider) => (
                <div key={provider.name} className="rounded-lg border border-[#E8F0F8] p-5">
                  <h3 className="font-semibold text-[#061C4A]">{provider.name}</h3>
                  <p className="mt-2 text-slate-700">{provider.function}.</p>
                  <p className="mt-2 text-sm text-slate-500">{provider.context}</p>
                </div>
              ))}
            </div>
            <p>
              Algunos proveedores pueden estar ubicados o tratar informacion fuera de Colombia. En
              esos casos podrian existir transmisiones o transferencias internacionales de datos,
              segun la configuracion del servicio, los terminos del proveedor, el tipo de dato y la
              relacion contractual aplicable.
            </p>
          </Section>

          <Section id="seguridad" title="10. Almacenamiento y seguridad">
            <p>
              TalentoYa aplica medidas razonables para proteger la informacion. Ningun sistema es
              absolutamente seguro, por lo que estas medidas buscan reducir riesgos y mantener
              controles proporcionales a la naturaleza de los datos tratados.
            </p>
            <List items={securityItems} />
            <p>
              No se identifico en el codigo revisado una politica tecnica especifica de copias de
              seguridad administrada por TalentoYa; por eso esta politica no promete respaldos con
              periodicidad determinada.
            </p>
          </Section>

          <Section id="conservacion" title="11. Conservacion y eliminacion">
            <p>
              Los datos se conservaran durante el tiempo necesario para cumplir las finalidades del
              tratamiento, la relacion contractual, las solicitudes de soporte, la seguridad de la
              plataforma y las obligaciones legales aplicables. Esta politica no fija un numero de
              anos porque el periodo puede variar segun el tipo de dato, la finalidad, el cliente y
              los deberes legales o contractuales.
            </p>
            <p>
              Al terminar una suscripcion o relacion comercial, la informacion podra conservarse de
              forma limitada mientras sea necesaria para cierre operativo, soporte, auditoria,
              defensa de reclamaciones, cumplimiento legal o conservacion ordenada. La eliminacion
              activa de datos puede diferir de la eliminacion en respaldos tecnicos o registros que
              deban conservarse por obligacion legal.
            </p>
          </Section>

          <Section id="derechos" title="12. Derechos de los titulares">
            <p>
              Los titulares pueden ejercer los derechos reconocidos por la normativa colombiana de
              proteccion de datos personales, segun proceda en cada caso.
            </p>
            <List items={rightsItems} />
          </Section>

          <Section id="procedimiento" title="13. Procedimiento para consultas y reclamos">
            <p>
              Las consultas y reclamos podran enviarse al canal de proteccion de datos indicado en
              esta politica. La solicitud debe incluir, como minimo, identificacion del titular,
              datos de contacto, descripcion clara de la solicitud, documentos de soporte cuando
              correspondan y la calidad en la que actua quien presenta la solicitud.
            </p>
            <p>
              TalentoYa podra validar la identidad del solicitante antes de entregar informacion o
              realizar cambios. Si un reclamo esta incompleto, se solicitara la informacion faltante
              dentro de los terminos legales aplicables.
            </p>
            <p>
              Conforme a la Ley 1581 de 2012, las consultas deben atenderse en un termino maximo de
              diez (10) dias habiles, prorrogable hasta por cinco (5) dias habiles adicionales
              cuando no sea posible responder en el termino inicial. Los reclamos deben atenderse en
              un termino maximo de quince (15) dias habiles, prorrogable hasta por ocho (8) dias
              habiles adicionales cuando corresponda. La queja ante la Superintendencia de Industria
              y Comercio procede una vez agotado el tramite de consulta o reclamo, cuando aplique.
            </p>
          </Section>

          <Section id="cookies" title="14. Cookies y tecnologias similares">
            <p>
              La aplicacion puede utilizar cookies o tecnologias similares necesarias para operar
              sesiones, autenticacion, redirecciones, seleccion de empresa activa y seguridad. Estas
              tecnologias son necesarias para prestar el servicio y controlar acceso a areas
              privadas.
            </p>
            <p>
              Tambien se detecto Vercel Analytics en el proyecto, que puede recopilar metricas
              tecnicas o agregadas de navegacion. La landing carga Calendly como widget externo, y
              algunos formularios usan un endpoint de Mailchimp cuando esos componentes estan
              activos.
            </p>
            <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              TODO tecnico: si se mantienen cookies o tecnologias no esenciales de analitica,
              agenda, marketing o proveedores externos, implementar un mecanismo de informacion y
              consentimiento/preferencias cuando sea requerido por la normativa aplicable.
            </p>
          </Section>

          <Section id="comunicaciones" title="15. Comunicaciones">
            <p>
              TalentoYa podra enviar comunicaciones operativas relacionadas con cuentas, seguridad,
              soporte, solicitudes, demostraciones, cambios del servicio o relacion comercial. Las
              comunicaciones comerciales se enviaran unicamente cuando exista autorizacion o
              fundamento aplicable, y el titular podra solicitar no recibirlas cuando proceda.
            </p>
          </Section>

          <Section id="cambios" title="16. Cambios a la politica">
            <p>
              TalentoYa podra actualizar esta politica para reflejar cambios legales, tecnicos,
              operativos o comerciales. La version publicada indicara la fecha de ultima
              actualizacion. Cuando los cambios sean sustanciales, se procurara informar por medios
              razonables a los usuarios o clientes afectados.
            </p>
          </Section>

          <Section id="legislacion" title="17. Legislacion aplicable">
            <p>
              Esta politica toma como referencia la Constitucion Politica de Colombia, articulo 15,
              la Ley 1581 de 2012, el Decreto 1074 de 2015 y las demas normas colombianas
              aplicables sobre proteccion de datos personales, sin perjuicio de otras disposiciones
              que resulten aplicables segun el tipo de titular, dato o relacion contractual.
            </p>
          </Section>

          <Section id="contacto" title="18. Contacto para proteccion de datos">
            <div className="rounded-lg border border-[#20C8B8]/40 bg-[#ECFFFC] p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#20C8B8] text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#061C4A]">
                    Canal de proteccion de datos
                  </h3>
                  <p className="text-slate-700">
                    Para consultas, reclamos o solicitudes relacionadas con datos personales, usa el
                    correo indicado abajo. Si el dato esta administrado por una empresa cliente,
                    TalentoYa podra orientar la solicitud o remitirla al cliente cuando corresponda.
                  </p>
                  <p className="text-sm font-semibold">
                    Correo: <PlaceholderValue value={legalConfig.privacyEmail} />
                  </p>
                  <p className="text-sm">
                    Soporte:{" "}
                    <a
                      href={`mailto:${legalConfig.supportEmail}`}
                      className="font-semibold text-[#0758B8] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0758B8]/50"
                    >
                      {legalConfig.supportEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </article>
      </div>
    </main>
  )
}
