const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M"
    },
    diasIngresado: 5,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M"
    },
    diasIngresado: 1,
    dieta: "Sin sal"
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H"
    },
    diasIngresado: 2,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M"
    },
    diasIngresado: 6,
    dieta: "Sin sal"
  }
];

console.log(filtrarPacientes(pacientes));

function filtrarPacientes(pacientes) {
  const pacientesFiltrados = {};
  pacientesFiltrados.nPacientes = pacientes.length;
  pacientesFiltrados.nMayoresEdad = pacientes.filter(x => x.paciente.edad >= 18).length;
  pacientesFiltrados.nHombresDiabeticos = pacientes.filter(x => x.dieta === "Diabetes").length;
  pacientesFiltrados.totalDiasIngreso = pacientes.diasIngresado;

  return pacientesFiltrados;
}
