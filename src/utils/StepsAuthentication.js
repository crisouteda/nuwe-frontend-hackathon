import {
  Unete,
  Registra,
  Complete,
  Verifica,
  Safe,
  Google,
} from "../components";

export const StepsAuthentication = [
  {
    title: "¡Únete a la comunidad!",
    subtitle: "Para empezar, dinos que cuenta te gustaría abrir.",
    component: Unete,
  },
  {
    header: "Personal Info.",
    title: "Registra tu cuenta individual",
    component: Registra,
    continuar: "Registrar cuenta",
    modalTitle: "¡Ups, algo ha ido mal!",
    modalSubtitle:
      "Parece que hay un error en el correo electrónico. Por favor, revísalo y vuelve a intentarlo de nuevo.",
    google: <Google />,
  },
  {
    header: "Localización",
    title: "Complete Your Profile!",
    component: Complete,
    continuar: "Guardar y continuar",
    safe: <Safe />,
  },
  {
    header: "Verificación por tarjeta",
    title: "Verifica tu perfil",
    component: Verifica,
    continuar: "Crear cuenta",
    safe: <Safe />,
    modalTitle: "¡Todo guay!",
    modalSubtitle: "Tu cuenta se ha creado correctamente",
  },
];
