import { Unete, Registra, Complete, Verifica, Safe } from "../components";

export const StepsAuthentication = [
  {
    title: "¡Únete a la comunidad!",
    subtitle: "Para empezar, dinos que cuenta te gustaría abrir.",
    component: <Unete />,
  },
  {
    header: "Persnal Info.",
    title: "Registra tu cuenta individual",
    component: <Registra />,
    continuar: "Registrar cuenta",
  },
  {
    header: "Localización",
    title: "Complete Your Profile!",
    component: <Complete />,
    continuar: "Guardar y continuar",
    safe: <Safe />,
  },
  {
    header: "Verificación por tarjeta",
    title: "Verifica tu perfil",
    component: <Verifica />,
    continuar: "Crear cuenta",
    safe: <Safe />,
  },
];
