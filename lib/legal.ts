export const privacyPath = "/politica-de-privacidad"

const pending = (label: string) => `[${label} PENDIENTE]`

export const legalConfig = {
  // TODO: Completar estos datos antes de publicar la politica como documento legal definitivo.
  legalName: pending("RAZON SOCIAL"),
  tradeName: "TalentoYa",
  identificationNumber: pending("NIT O DOCUMENTO DE IDENTIFICACION"),
  address: pending("DIRECCION"),
  city: pending("CIUDAD"),
  country: "Colombia",
  privacyEmail: pending("CORREO DE PROTECCION DE DATOS"),
  supportEmail: "info.talentoya@gmail.com",
  phone: pending("TELEFONO"),
  websiteUrl: "https://talentoya.vercel.app",
  effectiveDate: "2026-06-10",
  lastUpdatedDate: "2026-06-18",
} as const

export const detectedProviders = [
  {
    name: "Supabase",
    function:
      "base de datos, almacenamiento de documentos laborales y generacion de enlaces firmados para acceso a archivos",
    context:
      "Detectado en la landing para guardar leads y en la aplicacion SaaS para datos operativos, documentos y almacenamiento.",
  },
  {
    name: "Clerk",
    function: "autenticacion, registro, inicio de sesion y gestion de usuarios de la aplicacion",
    context: "Detectado en TalentoYa-App mediante @clerk/nextjs.",
  },
  {
    name: "Vercel",
    function: "hosting de la aplicacion y analitica basica de uso con Vercel Analytics",
    context: "Detectado por metadataBase, dominio de despliegue y @vercel/analytics.",
  },
  {
    name: "Mailchimp",
    function: "captura de correos en formularios de descarga o demo cuando esos componentes esten activos",
    context:
      "Detectado en un componente publico de formulario con endpoint externo. El codigo indica que esta archivado, pero el componente aun existe y se usa en secciones de la landing.",
  },
] as const

export const tableOfContents = [
  { id: "alcance", label: "Alcance" },
  { id: "definiciones", label: "Definiciones" },
  { id: "datos", label: "Datos tratados" },
  { id: "sensibles-menores", label: "Datos sensibles y menores" },
  { id: "finalidades", label: "Finalidades" },
  { id: "bases", label: "Bases del tratamiento" },
  { id: "clientes", label: "Empresas clientes" },
  { id: "proveedores", label: "Proveedores" },
  { id: "seguridad", label: "Seguridad" },
  { id: "conservacion", label: "Conservacion" },
  { id: "derechos", label: "Derechos" },
  { id: "procedimiento", label: "Consultas y reclamos" },
  { id: "cookies", label: "Cookies" },
  { id: "comunicaciones", label: "Comunicaciones" },
  { id: "cambios", label: "Cambios" },
  { id: "legislacion", label: "Legislacion" },
  { id: "contacto", label: "Contacto" },
] as const

export const definitions = [
  {
    term: "Autorizacion",
    description:
      "Consentimiento previo, expreso e informado del titular para llevar a cabo el tratamiento de sus datos personales, salvo las excepciones legales aplicables.",
  },
  {
    term: "Base de datos",
    description: "Conjunto organizado de datos personales que sea objeto de tratamiento.",
  },
  {
    term: "Dato personal",
    description:
      "Cualquier informacion vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.",
  },
  {
    term: "Dato privado",
    description:
      "Informacion que por su naturaleza intima o reservada solo es relevante para el titular o para personas autorizadas conforme a la ley.",
  },
  {
    term: "Dato sensible",
    description:
      "Informacion que afecta la intimidad del titular o cuyo uso indebido puede generar discriminacion, incluida informacion de salud, biometrica u otras categorias protegidas.",
  },
  {
    term: "Encargado del tratamiento",
    description:
      "Persona natural o juridica que realiza tratamiento de datos personales por cuenta del responsable del tratamiento.",
  },
  {
    term: "Responsable del tratamiento",
    description:
      "Persona natural o juridica que decide sobre la base de datos o sobre el tratamiento de los datos personales.",
  },
  {
    term: "Titular",
    description: "Persona natural cuyos datos personales son objeto de tratamiento.",
  },
  {
    term: "Tratamiento",
    description:
      "Cualquier operacion sobre datos personales, como recoleccion, almacenamiento, uso, circulacion, actualizacion, transmision, transferencia o supresion.",
  },
] as const

export const dataCategories = [
  {
    title: "Identificacion y contacto",
    items: [
      "Nombre, apellidos, tipo y numero de documento, correo electronico, telefono, empresa y datos de contacto suministrados en formularios.",
      "Datos de contacto de emergencia cuando las empresas clientes los registran en expedientes laborales.",
    ],
  },
  {
    title: "Datos de cuenta y autenticacion",
    items: [
      "Identificadores de usuario, correo, nombre, imagen de perfil, invitaciones, membresias, roles, estado de acceso y ultimo inicio de sesion, segun lo gestione Clerk y la aplicacion.",
      "Cookies o identificadores necesarios para mantener sesiones, redirecciones y seleccion de empresa activa.",
    ],
  },
  {
    title: "Informacion laboral",
    items: [
      "Cargo, area, estado del empleado, salario base, tipo de contrato, fechas laborales, informacion bancaria laboral cuando sea registrada por la empresa cliente y datos asociados al expediente.",
    ],
  },
  {
    title: "Contratos y documentos",
    items: [
      "Contratos laborales, certificados, documentos adjuntos, tipo de documento, descripcion, observaciones, nombre de archivo, tamano, estado y metadatos de carga.",
    ],
  },
  {
    title: "Asistencia, permisos, vacaciones e incapacidades",
    items: [
      "Registros de asistencia, ausencias, solicitudes, estados, fechas, observaciones y documentos de soporte asociados a permisos, vacaciones o incapacidades.",
    ],
  },
  {
    title: "Informacion de soporte y relacion comercial",
    items: [
      "Mensajes enviados por formularios, solicitudes de demo, interes en planes, empresa, telefono y comunicaciones operativas necesarias para responder al usuario.",
    ],
  },
  {
    title: "Informacion tecnica y de seguridad",
    items: [
      "Registros de actividad, acciones de auditoria, tenant o empresa activa, limites de uso, estado de suscripcion y datos tecnicos derivados del uso normal de la aplicacion.",
    ],
  },
  {
    title: "Datos de suscripcion y pagos basicos",
    items: [
      "La aplicacion contiene planes, limites y suscripciones administradas, pero no se detecto una pasarela de pagos externa en el codigo revisado.",
      "El modulo de pagos corresponde a pagos laborales basicos registrados por las empresas clientes; no debe entenderse como procesamiento automatico de pagos comerciales de TalentoYa.",
    ],
  },
  {
    title: "Cookies, analitica y herramientas externas",
    items: [
      "Vercel Analytics puede recolectar informacion agregada o tecnica sobre visitas y uso, solo si el visitante acepta cookies no esenciales.",
      "Mailchimp puede tratar datos cuando el usuario envia un formulario de suscripcion o descarga.",
    ],
  },
] as const

export const purposeItems = [
  "Crear, administrar y proteger cuentas de usuario.",
  "Autenticar usuarios, controlar accesos y gestionar permisos por empresa, rol o modulo.",
  "Prestar las funcionalidades contratadas o habilitadas en la plataforma.",
  "Almacenar, organizar y consultar informacion laboral cargada por las empresas clientes.",
  "Permitir la carga, consulta, firma logica de acceso o eliminacion de documentos laborales segun la funcionalidad disponible.",
  "Gestionar soporte tecnico, solicitudes comerciales, demostraciones y comunicaciones operativas.",
  "Administrar planes, limites de uso, suscripciones internas y relacion comercial, cuando corresponda.",
  "Prevenir fraude, abuso, accesos no autorizados y uso indebido de la plataforma.",
  "Mantener seguridad, auditoria, trazabilidad y separacion logica de informacion por empresa.",
  "Cumplir obligaciones legales, contractuales, contables, administrativas o requerimientos de autoridades competentes.",
  "Mejorar el producto mediante informacion agregada, estadistica o anonimizada cuando sea posible.",
  "Enviar comunicaciones comerciales solo cuando exista autorizacion o fundamento aplicable, y permitiendo los mecanismos de oposicion que correspondan.",
] as const

export const legalBasisItems = [
  "Autorizacion del titular, cuando sea necesaria.",
  "Ejecucion de una relacion contractual o precontractual con clientes, usuarios o empresas interesadas.",
  "Cumplimiento de obligaciones legales o requerimientos de autoridad competente.",
  "Intereses legitimos permitidos por la normativa aplicable, por ejemplo seguridad, prevencion de abuso, soporte y mejora del servicio.",
  "Las excepciones previstas por la ley para casos en los que la autorizacion no sea exigible.",
] as const

export const clientResponsibilities = [
  "Verificar la legalidad, exactitud y pertinencia de la informacion que carga en TalentoYa.",
  "Informar a empleados, contratistas, usuarios u otros titulares sobre el tratamiento que realizara y sobre el uso de la plataforma.",
  "Obtener y conservar las autorizaciones necesarias cuando la ley lo exija.",
  "Respetar los principios de finalidad, necesidad, acceso restringido, seguridad, confidencialidad y circulacion restringida.",
  "Evitar cargar datos excesivos, innecesarios, desactualizados o ajenos a las finalidades laborales o administrativas definidas por la empresa.",
  "Gestionar adecuadamente roles, invitaciones, usuarios activos, permisos y desvinculaciones dentro de la plataforma.",
] as const

export const securityItems = [
  "Autenticacion de usuarios y proteccion de rutas privadas en la aplicacion.",
  "Control de acceso por empresa, membresia, rol y modulo segun la logica implementada.",
  "Separacion logica de datos por tenant o empresa cliente.",
  "Almacenamiento de documentos en rutas asociadas a empresa y empleado, con enlaces firmados de duracion limitada para consulta.",
  "Registro de acciones de auditoria para ciertas operaciones sensibles, como carga y eliminacion de documentos.",
  "Principio de minimo privilegio en la gestion de permisos y accesos.",
  "Cifrado en transito mediante HTTPS cuando la aplicacion se usa en entornos desplegados con TLS.",
  "Medidas administrativas y tecnicas razonables para reducir riesgos de perdida, alteracion, acceso no autorizado o uso indebido.",
] as const

export const rightsItems = [
  "Conocer, actualizar y rectificar sus datos personales.",
  "Solicitar prueba de la autorizacion otorgada, salvo cuando la ley exceptue este requisito.",
  "Ser informado, previa solicitud, sobre el uso dado a sus datos.",
  "Presentar consultas o reclamos sobre el tratamiento de sus datos personales.",
  "Solicitar la supresion del dato cuando sea procedente.",
  "Revocar la autorizacion cuando sea procedente y no exista deber legal o contractual que impida la supresion o conservacion.",
  "Acceder gratuitamente a sus datos personales en los terminos de la ley.",
  "Presentar quejas ante la Superintendencia de Industria y Comercio una vez agotado el tramite de consulta o reclamo correspondiente, cuando aplique.",
] as const
