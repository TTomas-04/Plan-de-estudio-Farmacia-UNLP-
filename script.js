const materias = [
  // PRIMER AÑO - I SEMESTRE
  { id: "Algebra Calculo Numérico y Geometría Analítica", abre: ["Física I", "Análisis Matemático II", "Química General"], requisitos: [], bloque: "primer-1" },
  { id: "Análisis Matemático I", abre: ["Física I", "Análisis Matemático II", "Química General"], requisitos: [], bloque: "primer-1" },
  { id: "Introducción a la Química", abre: ["Química General", "Biología"], requisitos: [], bloque: "primer-1" },

  // PRIMER AÑO - II SEMESTRE
  { id: "Física I", abre: ["Física II"], requisitos: ["Algebra Calculo Numérico y Geometría Analítica", "Análisis Matemático I"], bloque: "primer-2" },
  { id: "Análisis Matemático II", abre: ["Física II", "Análisis de Datos"], requisitos: ["Algebra Calculo Numérico y Geometría Analítica", "Análisis Matemático I"], bloque: "primer-2" },
  { id: "Química General", abre: ["Química Inorgánica", "Análisis de Datos"], requisitos: ["Introducción a la Química", "Algebra Calculo Numérico y Geometría Analítica", "Análisis Matemático I"], bloque: "primer-2" },

  // SEGUNDO AÑO - I SEMESTRE
  { id: "Física II", abre: ["Fisicoquímica"], requisitos: ["Física I", "Análisis Matemático II"], bloque: "segundo-1" },
  { id: "Biología", abre: ["Anatomía E Histología", "Farmacobotanica", "Química Biológica"], requisitos: ["Introducción a la Química"], bloque: "segundo-1" },
  { id: "Química Inorgánica", abre: ["Fisicoquímica", "Química Orgánica I", "Química Analítica I"], requisitos: ["Química General"], bloque: "segundo-1" },
  { id: "Análisis de Datos", abre: ["Fisicoquímica", "Química Analítica I", "Biofarmacia", "Diseño de Experimentos"], requisitos: ["Análisis Matemático II", "Química General"], bloque: "segundo-1" },

  // SEGUNDO AÑO - II SEMESTRE
  { id: "Fisicoquímica", abre: ["Ingles Científico Técnico", "Química Medicinal"], requisitos: ["Física II", "Química Inorgánica", "Análisis de Datos"], bloque: "segundo-2" },
  { id: "Química Orgánica I", abre: ["Ingles Científico Técnico", "Química Orgánica II", "Farmacología"], requisitos: ["Química Inorgánica"], bloque: "segundo-2" },
  { id: "Química Analítica I", abre: ["Ingles Científico Técnico", "Química Analítica Instrumental", "Química Biológica"], requisitos: ["Química Inorgánica", "Análisis de Datos"], bloque: "segundo-2" },

  // TERCER AÑO - I SEMESTRE
  { id: "Ingles Científico Técnico", abre: [], requisitos: ["Fisicoquímica", "Química Orgánica I", "Química Analítica I"], bloque: "tercer-1" },
  { id: "Química Orgánica II", abre: ["Farmacognosia", "Química Biológica"], requisitos: ["Química Orgánica I"], bloque: "tercer-1" },
  { id: "Química Analítica Instrumental", abre: ["Biofarmacia", "Diseño de Experimentos"], requisitos: ["Química Analítica I"], bloque: "tercer-1" },
  { id: "Anatomía E Histología", abre: ["Fisiología"], requisitos: ["Biología"], bloque: "tercer-1" },
  { id: "Farmacobotanica", abre: ["Farmacognosia"], requisitos: ["Biología"], bloque: "tercer-1" },

  // TERCER AÑO - II SEMESTRE
  { id: "Farmacognosia", abre: ["Farmacocinética I", "Química Medicinal"], requisitos: ["Farmacobotanica", "Química Orgánica II"], bloque: "tercer-2" },
  { id: "Química Biológica", abre: ["Fisiopatología", "Microbiología General", "Nutrición y Bromatología"], requisitos: ["Biología", "Química Analítica I", "Química Orgánica II"], bloque: "tercer-2" },
  { id: "Fisiología", abre: ["Fisiopatología", "Nutrición y Bromatología"], requisitos: ["Anatomía E Histología"], bloque: "tercer-2" },

  // CUARTO AÑO - I SEMESTRE
  { id: "Fisiopatología", abre: ["Farmacología I", "Higiene y Salud Publica"], requisitos: ["Fisiología", "Química Biológica"], bloque: "cuarto-1" },
  { id: "Microbiología General", abre: ["Farmacología II", "Higiene y Salud Publica"], requisitos: ["Química Biológica"], bloque: "cuarto-1" },
  { id: "Diseño de Experimentos", abre: [], requisitos: ["Química Analítica Instrumental", "Análisis de Datos"], bloque: "cuarto-1" },
  { id: "Biofarmacia", abre: ["Farmacología I", "Farmacotecnia I", "Farmacia Clínica y Asistencial"], requisitos: ["Química Analítica Instrumental", "Análisis de Datos"], bloque: "cuarto-1" },

  // CUARTO AÑO - II SEMESTRE
  { id: "Farmacología I", abre: ["Farmacología II"], requisitos: ["Biofarmacia", "Fisiopatología"], bloque: "cuarto-2" },
  { id: "Nutrición y Bromatología", abre: [], requisitos: ["Química Biológica", "Fisiología"], bloque: "cuarto-2" },
  { id: "Farmacotecnia I", abre: ["Higiene y Salud Publica", "Farmacotecnia II", "Control de Calidad de Medicamentos", "Economía y Legislación Farmacéutica", "Practicas Farmacéuticas"], requisitos: ["Biofarmacia"], bloque: "cuarto-2" },

  // QUINTO AÑO - I SEMESTRE
  { id: "Farmacología II", abre: ["Farmacia Clínica y Asistencial", "Practicas Farmacéuticas"], requisitos: ["Farmacología I", "Microbiología General"], bloque: "quinto-1" },
  { id: "Higiene y Salud Publica", abre: [], requisitos: ["Fisiopatología", "Microbiología General", "Farmacotecnia I"], bloque: "quinto-1" },
  { id: "Química Medicinal", abre: [], requisitos: ["Fisicoquímica", "Farmacognosia"], bloque: "quinto-1" },
  { id: "Economía y Legislación Farmacéutica", abre: [], requisitos: ["Farmacotecnia I"], bloque: "quinto-1" },

  // QUINTO AÑO - II SEMESTRE
  { id: "Farmacotecnia II", abre: [], requisitos: ["Farmacotecnia I"], bloque: "quinto-2" },
  { id: "Control de Calidad de Medicamentos", abre: [], requisitos: ["Farmacotecnia I"], bloque: "quinto-2" },
  { id: "Farmacia Clínica y Asistencial", abre: [], requisitos: ["Biofarmacia", "Farmacología II"], bloque: "quinto-2" },
  { id: "Practicas Farmacéuticas", abre: [], requisitos: ["Farmacología II", "Farmacotecnia I"], bloque: "quinto-2" }
];

const estado = {};
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
      }, 400);
    }
  });

  document.getElementById(materia.bloque).appendChild(div);
});

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
