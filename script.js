const materias = [
  // PRIMER AÑO - I SEMESTRE
  { id: "Algebra Calculo Numérico y Geometría Analítica", abre: ["Física I", "Análisis Matemático II", "Química General"], requisitos: [], bloque: "primer-1" },
  { id: "Análisis Matemático I", abre: ["Física I", "Análisis Matemático II", "Química General"], requisitos: [], bloque: "primer-1" },
  { id: "Introducción a la Química", abre: ["Química General", "Biología"], requisitos: [], bloque: "primer-1" },

  // PRIMER AÑO - II SEMESTRE
  { id: "Física I", abre: ["Física II"], requisitos: ["Algebra Calculo Numérico y Geometría Analítica", "Análisis Matemático I"], bloque: "primer-2" },
  { id: "Análisis Matemático II", abre: ["Física II", "Análisis de Datos"], requisitos: ["Algebra Calculo Numérico y Geometría Analítica", "Análisis Matemático I"], bloque: "primer-2" },
  { id: "Química General", abre: ["Química Inorgánica", "Análisis de Datos"], requisitos: ["Introducción a la Química", "Algebra Calculo Numérico y Geometría Analítica", "Análisis Matemático I"], bloque: "primer-2" },

  // (Agrega el resto igual, manteniendo su bloque)
];

const estado = {};

// 📌 Recuperar estado guardado
const guardado = localStorage.getItem("estadoMalla");
if (guardado) {
  const estadoGuardado = JSON.parse(guardado);
  materias.forEach(m => {
    estado[m.id] = estadoGuardado[m.id] || {
      aprobada: false,
      bloqueada: m.requisitos.length > 0
    };
  });
} else {
  materias.forEach(m => {
    estado[m.id] = {
      aprobada: false,
      bloqueada: m.requisitos.length > 0
    };
  });
}

materias.forEach(materia => {
  const div = document.createElement("div");
  div.className = "materia";
  if (estado[materia.id].bloqueada) div.classList.add("bloqueada");
  if (estado[materia.id].aprobada) div.classList.add("aprobada");
  div.textContent = materia.id;
  div.id = materia.id;

  let clickTimer;

  div.addEventListener("click", () => {
    if (estado[materia.id].bloqueada && !estado[materia.id].aprobada) return;

    if (clickTimer) {
      clearTimeout(clickTimer);
      clickTimer = null;

      estado[materia.id].aprobada = false;
      div.classList.remove("aprobada");
      bloquearDependientes(materia.id);
      localStorage.setItem("estadoMalla", JSON.stringify(estado));
    } else {
      clickTimer = setTimeout(() => {
        clickTimer = null;

        estado[materia.id].aprobada = true;
        div.classList.add("aprobada");

        materia.abre.forEach(destino => {
          const desbloquear = materias.find(m => m.id === destino);
          const requisitosCumplidos = desbloquear.requisitos.every(req => estado[req].aprobada);
          if (requisitosCumplidos) {
            estado[destino].bloqueada = false;
            document.getElementById(destino).classList.remove("bloqueada");
          }
        });

        localStorage.setItem("estadoMalla", JSON.stringify(estado));
      }, 400); // Tiempo para detectar doble clic
    }
  });

  document.getElementById(materia.bloque).appendChild(div);
});

// 🔁 Función para bloquear dependientes
function bloquearDependientes(id) {
  materias.forEach(destino => {
    if (destino.requisitos.includes(id)) {
      const requisitosCumplidos = destino.requisitos.every(req => estado[req].aprobada);
      if (!requisitosCumplidos) {
        estado[destino.id].bloqueada = true;
        estado[destino.id].aprobada = false;
        const el = document.getElementById(destino.id);
        el.classList.add("bloqueada");
        el.classList.remove("aprobada");
        bloquearDependientes(destino.id);
      }
    }
  });
}
