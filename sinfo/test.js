const formulario = document.getElementById("quizForm");
const resultado = document.getElementById("resultado");
const tituloCarrera = document.getElementById("tituloCarrera");
const descripcionCarrera = document.getElementById("descripcionCarrera");
const motivoCarrera = document.getElementById("motivoCarrera");
const carrerasRelacionadas = document.getElementById("carrerasRelacionadas");
const universidadesResultado = document.getElementById("universidadesResultado");
const botonRepetir = document.getElementById("botonRepetir");

const carreras = {
    ingenieria_sistemas: {
        nombre: "Ingeniería de Sistemas",
        descripcion: "Carrera relacionada con la programación, desarrollo de software, sistemas informáticos y tecnología.",
        motivo: "Tus respuestas muestran interés por la tecnología, la lógica y la solución de problemas.",
        relacionadas: [
            "Ingeniería Electrónica",
            "Ingeniería Industrial",
            "Ingeniería en Telecomunicaciones"
        ]
    },

    medicina: {
        nombre: "Medicina",
        descripcion: "Carrera orientada al estudio de la salud humana, prevención, diagnóstico y tratamiento de enfermedades.",
        motivo: "Tus respuestas muestran interés por la salud, el cuerpo humano y la investigación.",
        relacionadas: [
            "Enfermería",
            "Odontología",
            "Nutrición y Dietética"
        ]
    },

    diseno_grafico: {
        nombre: "Diseño Gráfico",
        descripcion: "Carrera relacionada con la comunicación visual, diseño digital, creatividad y creación de contenido gráfico.",
        motivo: "Tus respuestas muestran interés por el dibujo, la creatividad y la comunicación visual.",
        relacionadas: [
            "Diseño Digital",
            "Artes Plásticas",
            "Comunicación Social"
        ]
    },

    administracion: {
        nombre: "Administración de Empresas",
        descripcion: "Carrera enfocada en la organización, planificación y gestión de empresas y recursos.",
        motivo: "Tus respuestas muestran interés por organizar actividades, administrar recursos y trabajar con proyectos.",
        relacionadas: [
            "Ingeniería Comercial",
            "Contaduría Pública",
            "Ingeniería Financiera"
        ]
    },

    enfermeria: {
        nombre: "Enfermería",
        descripcion: "Carrera orientada al cuidado de la salud y atención de las personas.",
        motivo: "Tus respuestas muestran interés por ayudar a las personas y trabajar en el área de salud.",
        relacionadas: [
            "Medicina",
            "Fisioterapia y Kinesiología",
            "Nutrición y Dietética"
        ]
    },

    derecho: {
        nombre: "Derecho",
        descripcion: "Carrera dedicada al estudio de las leyes, normas jurídicas, derechos y obligaciones.",
        motivo: "Tus respuestas muestran interés por la justicia, las normas y la defensa de derechos.",
        relacionadas: [
            "Ciencias Políticas",
            "Administración de Empresas",
            "Comunicación Social"
        ]
    },

    ciencias_educacion: {
        nombre: "Ciencias de la Educación",
        descripcion: "Carrera relacionada con la enseñanza, aprendizaje, educación y orientación de estudiantes.",
        motivo: "Tus respuestas muestran interés por enseñar, orientar y ayudar a otras personas.",
        relacionadas: [
            "Psicología",
            "Psicopedagogía",
            "Educación"
        ]
    },

    ingenieria_ambiental: {
        nombre: "Ingeniería Ambiental",
        descripcion: "Carrera orientada al cuidado del medio ambiente, prevención de impactos y uso responsable de recursos.",
        motivo: "Tus respuestas muestran interés por la naturaleza y la búsqueda de soluciones para problemas ambientales.",
        relacionadas: [
            "Ingeniería Agronómica",
            "Ingeniería Civil",
            "Ingeniería Industrial"
        ]
    },

    medicina_veterinaria: {
        nombre: "Medicina Veterinaria y Zootecnia",
        descripcion: "Carrera enfocada en la salud, cuidado y producción de animales.",
        motivo: "Tus respuestas muestran interés por los animales y su cuidado.",
        relacionadas: [
            "Ingeniería Agronómica",
            "Ingeniería Ambiental",
            "Gastronomía"
        ]
    },

    psicologia: {
        nombre: "Psicología",
        descripcion: "Carrera dedicada al estudio del comportamiento, pensamiento y desarrollo de las personas.",
        motivo: "Tus respuestas muestran interés por comprender, escuchar y ayudar a las personas.",
        relacionadas: [
            "Ciencias de la Educación",
            "Trabajo Social",
            "Derecho"
        ]
    },

    ingenieria_electronica: {
        nombre: "Ingeniería Electrónica",
        descripcion: "Carrera relacionada con sistemas electrónicos, dispositivos, automatización y tecnología.",
        motivo: "Tus respuestas muestran interés por los dispositivos, la tecnología y la solución de problemas técnicos.",
        relacionadas: [
            "Ingeniería de Sistemas",
            "Ingeniería Industrial",
            "Ingeniería Civil"
        ]
    },

    comunicacion_social: {
        nombre: "Comunicación Social",
        descripcion: "Carrera orientada a la producción y difusión de información mediante diferentes medios.",
        motivo: "Tus respuestas muestran interés por comunicar ideas, crear contenido y trabajar con medios.",
        relacionadas: [
            "Diseño Gráfico",
            "Marketing",
            "Ciencias Políticas"
        ]
    },

    arquitectura: {
        nombre: "Arquitectura",
        descripcion: "Carrera relacionada con el diseño y planificación de espacios, edificaciones y proyectos arquitectónicos.",
        motivo: "Tus respuestas muestran interés por crear, diseñar y resolver problemas relacionados con espacios.",
        relacionadas: [
            "Ingeniería Civil",
            "Diseño Gráfico",
            "Artes Plásticas"
        ]
    },

    contaduria: {
        nombre: "Contaduría Pública",
        descripcion: "Carrera enfocada en la gestión contable, financiera y administrativa de organizaciones.",
        motivo: "Tus respuestas muestran interés por los números, la organización y el manejo de recursos.",
        relacionadas: [
            "Administración de Empresas",
            "Economía",
            "Ingeniería Financiera"
        ]
    },

    ingenieria_civil: {
        nombre: "Ingeniería Civil",
        descripcion: "Carrera relacionada con el diseño, construcción y mantenimiento de obras e infraestructura.",
        motivo: "Tus respuestas muestran interés por la construcción, planificación y solución de problemas técnicos.",
        relacionadas: [
            "Arquitectura",
            "Ingeniería Ambiental",
            "Ingeniería Industrial"
        ]
    },

    ingenieria_industrial: {
        nombre: "Ingeniería Industrial",
        descripcion: "Carrera orientada a mejorar procesos, producción, organización y funcionamiento de empresas.",
        motivo: "Tus respuestas muestran interés por organizar procesos y buscar soluciones eficientes.",
        relacionadas: [
            "Ingeniería de Sistemas",
            "Administración de Empresas",
            "Ingeniería Comercial"
        ]
    },

    ingenieria_agronomica: {
        nombre: "Ingeniería Agronómica",
        descripcion: "Carrera relacionada con la producción agrícola, recursos naturales y desarrollo del sector agropecuario.",
        motivo: "Tus respuestas muestran interés por la naturaleza, producción y recursos naturales.",
        relacionadas: [
            "Ingeniería Ambiental",
            "Medicina Veterinaria y Zootecnia",
            "Ingeniería de Producción de Alimentos"
        ]
    },

    odontologia: {
        nombre: "Odontología",
        descripcion: "Carrera dedicada al cuidado, prevención y tratamiento de la salud bucal.",
        motivo: "Tus respuestas muestran interés por la salud y el trabajo especializado con las personas.",
        relacionadas: [
            "Medicina",
            "Enfermería",
            "Bioquímica y Farmacia"
        ]
    },

    nutricion: {
        nombre: "Nutrición y Dietética",
        descripcion: "Carrera relacionada con la alimentación, nutrición y promoción de hábitos saludables.",
        motivo: "Tus respuestas muestran interés por la salud, alimentación y bienestar.",
        relacionadas: [
            "Medicina",
            "Enfermería",
            "Bioquímica y Farmacia"
        ]
    },

    fisioterapia: {
        nombre: "Fisioterapia y Kinesiología",
        descripcion: "Carrera orientada a la recuperación del movimiento y rehabilitación física de las personas.",
        motivo: "Tus respuestas muestran interés por la salud, el cuerpo humano y la recuperación física.",
        relacionadas: [
            "Enfermería",
            "Medicina",
            "Nutrición y Dietética"
        ]
    },

    bioquimica: {
        nombre: "Bioquímica y Farmacia",
        descripcion: "Carrera relacionada con análisis de laboratorio, medicamentos, sustancias y procesos biológicos.",
        motivo: "Tus respuestas muestran interés por la ciencia, investigación y salud.",
        relacionadas: [
            "Medicina",
            "Nutrición y Dietética",
            "Enfermería"
        ]
    },

    fonoaudiologia: {
        nombre: "Fonoaudiología",
        descripcion: "Carrera dedicada a la evaluación y atención de dificultades relacionadas con la comunicación y el lenguaje.",
        motivo: "Tus respuestas muestran interés por ayudar a las personas y trabajar con comunicación y salud.",
        relacionadas: [
            "Psicología",
            "Enfermería",
            "Ciencias de la Educación"
        ]
    },

    ingenieria_comercial: {
        nombre: "Ingeniería Comercial",
        descripcion: "Carrera relacionada con administración, negocios, marketing y gestión empresarial.",
        motivo: "Tus respuestas muestran interés por los negocios, organización y gestión.",
        relacionadas: [
            "Administración de Empresas",
            "Marketing",
            "Ingeniería Financiera"
        ]
    },

    ingenieria_financiera: {
        nombre: "Ingeniería Financiera",
        descripcion: "Carrera enfocada en análisis financiero, gestión de recursos y planificación económica.",
        motivo: "Tus respuestas muestran interés por los números, finanzas y toma de decisiones.",
        relacionadas: [
            "Contaduría Pública",
            "Economía",
            "Administración de Empresas"
        ]
    },

    economia: {
        nombre: "Economía",
        descripcion: "Carrera relacionada con el análisis de recursos, mercados, producción y actividad económica.",
        motivo: "Tus respuestas muestran interés por los números, análisis y funcionamiento de la economía.",
        relacionadas: [
            "Ingeniería Financiera",
            "Administración de Empresas",
            "Ingeniería Comercial"
        ]
    },

    marketing: {
        nombre: "Marketing y Medios Digitales",
        descripcion: "Carrera relacionada con estrategias de comunicación, publicidad, marketing y medios digitales.",
        motivo: "Tus respuestas muestran interés por la creatividad, comunicación y estrategias comerciales.",
        relacionadas: [
            "Comunicación Social",
            "Diseño Gráfico",
            "Administración de Empresas"
        ]
    },

    trabajo_social: {
        nombre: "Trabajo Social",
        descripcion: "Carrera orientada al apoyo, orientación e intervención social para mejorar las condiciones de vida de las personas.",
        motivo: "Tus respuestas muestran interés por ayudar a otras personas y participar en soluciones sociales.",
        relacionadas: [
            "Psicología",
            "Ciencias de la Educación",
            "Derecho"
        ]
    },

    ciencias_politicas: {
        nombre: "Ciencias Políticas",
        descripcion: "Carrera relacionada con el estudio de la sociedad, instituciones, gobierno y procesos políticos.",
        motivo: "Tus respuestas muestran interés por la sociedad, las normas y los asuntos públicos.",
        relacionadas: [
            "Derecho",
            "Comunicación Social",
            "Administración de Empresas"
        ]
    },

    artes_plasticas: {
        nombre: "Artes Plásticas",
        descripcion: "Carrera orientada a la expresión artística mediante diferentes técnicas y medios visuales.",
        motivo: "Tus respuestas muestran interés por el arte, la creatividad y la expresión visual.",
        relacionadas: [
            "Diseño Gráfico",
            "Arquitectura",
            "Diseño Digital"
        ]
    },

    gastronomia: {
        nombre: "Gastronomía",
        descripcion: "Carrera relacionada con la preparación de alimentos, técnicas culinarias y gestión gastronómica.",
        motivo: "Tus respuestas muestran interés por la creatividad, preparación de alimentos y actividades prácticas.",
        relacionadas: [
            "Administración de Empresas",
            "Turismo y Hotelería",
            "Ingeniería de Producción de Alimentos"
        ]
    }
};

const universidades = {
    "Ingeniería de Sistemas": [
        ["UPEA", "carreras/upea.html"],
        ["UNIFRANZ", "carreras/unifranz.html"],
        ["UNITEPC", "carreras/unitepc.html"],
        ["UUB", "carreras/uub.html"],
        ["UCB", "carreras/catolica.html"],
        ["La Salle", "carreras/lasalle.html"],
        ["USFA", "carreras/usfa.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Medicina": [
        ["UPEA", "carreras/upea.html"],
        ["UNIFRANZ", "carreras/unifranz.html"],
        ["UNITEPC", "carreras/unitepc.html"],
        ["UCB", "carreras/catolica.html"]
    ],

    "Diseño Gráfico": [
        ["UCB", "carreras/catolica.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Administración de Empresas": [
        ["UPEA", "carreras/upea.html"],
        ["UUB", "carreras/uub.html"],
        ["UCB", "carreras/catolica.html"],
        ["USFA", "carreras/usfa.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Enfermería": [
        ["UPEA", "carreras/upea.html"],
        ["UNIFRANZ", "carreras/unifranz.html"],
        ["UNITEPC", "carreras/unitepc.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Derecho": [
        ["UPEA", "carreras/upea.html"],
        ["UNIFRANZ", "carreras/unifranz.html"],
        ["UNITEPC", "carreras/unitepc.html"],
        ["UUB", "carreras/uub.html"],
        ["UCB", "carreras/catolica.html"],
        ["La Salle", "carreras/lasalle.html"],
        ["USFA", "carreras/usfa.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Ciencias de la Educación": [
        ["UPEA", "carreras/upea.html"],
        ["UUB", "carreras/uub.html"]
    ],

    "Ingeniería Ambiental": [
        ["UPEA", "carreras/upea.html"],
        ["UCB", "carreras/catolica.html"]
    ],

    "Medicina Veterinaria y Zootecnia": [
        ["UPEA", "carreras/upea.html"],
        ["UNITEPC", "carreras/unitepc.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Psicología": [
        ["UPEA", "carreras/upea.html"],
        ["UNIFRANZ", "carreras/unifranz.html"],
        ["UNITEPC", "carreras/unitepc.html"],
        ["La Salle", "carreras/lasalle.html"],
        ["USFA", "carreras/usfa.html"]
    ],

    "Ingeniería Electrónica": [
        ["UPEA", "carreras/upea.html"],
        ["UNITEPC", "carreras/unitepc.html"],
        ["UCB", "carreras/catolica.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Comunicación Social": [
        ["UPEA", "carreras/upea.html"],
        ["UNITEPC", "carreras/unitepc.html"],
        ["UCB", "carreras/catolica.html"],
        ["USFA", "carreras/usfa.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Arquitectura": [
        ["UPEA", "carreras/upea.html"],
        ["UCB", "carreras/catolica.html"]
    ],

    "Contaduría Pública": [
        ["UPEA", "carreras/upea.html"],
        ["UUB", "carreras/uub.html"],
        ["UCB", "carreras/catolica.html"],
        ["La Salle", "carreras/lasalle.html"],
        ["USFA", "carreras/usfa.html"]
    ],

    "Ingeniería Civil": [
        ["UPEA", "carreras/upea.html"],
        ["UCB", "carreras/catolica.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Ingeniería Industrial": [
        ["UCB", "carreras/catolica.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Ingeniería Agronómica": [
        ["UPEA", "carreras/upea.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Odontología": [
        ["UPEA", "carreras/upea.html"],
        ["UNIFRANZ", "carreras/unifranz.html"],
        ["UNITEPC", "carreras/unitepc.html"],
        ["UCB", "carreras/catolica.html"]
    ],

    "Nutrición y Dietética": [
        ["UPEA", "carreras/upea.html"],
        ["UNITEPC", "carreras/unitepc.html"]
    ],

    "Fisioterapia y Kinesiología": [
        ["UNITEPC", "carreras/unitepc.html"]
    ],

    "Bioquímica y Farmacia": [
        ["UNIFRANZ", "carreras/unifranz.html"],
        ["UNITEPC", "carreras/unitepc.html"]
    ],

    "Fonoaudiología": [
        ["UNITEPC", "carreras/unitepc.html"]
    ],

    "Ingeniería Comercial": [
        ["UCB", "carreras/catolica.html"],
        ["La Salle", "carreras/lasalle.html"],
        ["USFA", "carreras/usfa.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Ingeniería Financiera": [
        ["UUB", "carreras/uub.html"],
        ["USFA", "carreras/usfa.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Economía": [
        ["UPEA", "carreras/upea.html"],
        ["UCB", "carreras/catolica.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ],

    "Marketing y Medios Digitales": [
        ["UCB", "carreras/catolica.html"]
    ],

    "Trabajo Social": [
        ["UPEA", "carreras/upea.html"]
    ],

    "Ciencias Políticas": [
        ["UPEA", "carreras/upea.html"]
    ],

    "Artes Plásticas": [
        ["UPEA", "carreras/upea.html"]
    ],

    "Gastronomía": [
        ["UUB", "carreras/uub.html"],
        ["Universidad Loyola", "carreras/loyola.html"]
    ]
};

const puntosPorRespuesta = {
    ingenieria_sistemas: [
        "ingenieria_sistemas",
        "ingenieria_electronica",
        "ingenieria_industrial",
        "ingenieria_civil"
    ],

    medicina: [
        "medicina",
        "enfermeria",
        "odontologia",
        "nutricion",
        "fisioterapia",
        "bioquimica"
    ],

    diseno_grafico: [
        "diseno_grafico",
        "arquitectura",
        "artes_plasticas",
        "comunicacion_social",
        "marketing"
    ],

    administracion: [
        "administracion",
        "contaduria",
        "ingenieria_comercial",
        "ingenieria_financiera",
        "economia",
        "marketing"
    ],

    enfermeria: [
        "enfermeria",
        "medicina",
        "fisioterapia",
        "nutricion",
        "fonoaudiologia"
    ],

    derecho: [
        "derecho",
        "ciencias_politicas",
        "administracion",
        "comunicacion_social",
        "trabajo_social"
    ],

    ciencias_educacion: [
        "ciencias_educacion",
        "psicologia",
        "trabajo_social",
        "comunicacion_social"
    ],

    ingenieria_ambiental: [
        "ingenieria_ambiental",
        "ingenieria_agronomica",
        "ingenieria_civil",
        "ingenieria_industrial"
    ],

    medicina_veterinaria: [
        "medicina_veterinaria",
        "ingenieria_agronomica",
        "ingenieria_ambiental"
    ],

    psicologia: [
        "psicologia",
        "ciencias_educacion",
        "trabajo_social",
        "fonoaudiologia"
    ],

    ingenieria_electronica: [
        "ingenieria_electronica",
        "ingenieria_sistemas",
        "ingenieria_industrial"
    ],

    comunicacion_social: [
        "comunicacion_social",
        "diseno_grafico",
        "marketing",
        "derecho"
    ]
};

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const respuestas = document.querySelectorAll(
        'input[type="radio"]:checked'
    );

    if (respuestas.length !== 20) {
        alert("Debes responder las 20 preguntas antes de ver tu resultado.");
        return;
    }

    const puntos = {};

    Object.keys(carreras).forEach(function(carrera) {
        puntos[carrera] = 0;
    });

    respuestas.forEach(function(respuesta) {

        const carrerasRelacionadas = puntosPorRespuesta[respuesta.value];

        if (carrerasRelacionadas) {

            carrerasRelacionadas.forEach(function(carrera) {

                if (puntos[carrera] !== undefined) {
                    puntos[carrera]++;
                }

            });

        }

    });

    let carreraGanadora = Object.keys(puntos)[0];

    Object.keys(puntos).forEach(function(carrera) {

        if (puntos[carrera] > puntos[carreraGanadora]) {
            carreraGanadora = carrera;
        }

    });

    const carrera = carreras[carreraGanadora];

    tituloCarrera.textContent = carrera.nombre;
    descripcionCarrera.textContent = carrera.descripcion;
    motivoCarrera.textContent = carrera.motivo;

    carrerasRelacionadas.innerHTML = "";

    carrera.relacionadas.forEach(function(nombre) {

        const tarjeta = document.createElement("div");

        tarjeta.className = "tarjeta-relacionada";

        tarjeta.innerHTML = "<p>" + nombre + "</p>";

        carrerasRelacionadas.appendChild(tarjeta);

    });

    universidadesResultado.innerHTML = "";

    const universidadesCarrera = universidades[carrera.nombre] || [];

    if (universidadesCarrera.length === 0) {

        universidadesResultado.innerHTML =
            "<p>No se encontraron universidades registradas para esta carrera.</p>";

    } else {

        universidadesCarrera.forEach(function(universidad) {

            const tarjeta = document.createElement("div");

            tarjeta.className = "tarjeta-universidad-resultado";

            tarjeta.innerHTML = `
                <h5>${universidad[0]}</h5>
                <a href="${universidad[1]}">Ver información</a>
            `;

            universidadesResultado.appendChild(tarjeta);

        });

    }

    localStorage.setItem("carreraResultado", carrera.nombre);
    localStorage.setItem("carreraResultadoId", carreraGanadora);
    localStorage.setItem(
        "carrerasRelacionadas",
        JSON.stringify(carrera.relacionadas)
    );

    formulario.style.display = "none";
    resultado.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

botonRepetir.addEventListener("click", function() {

    formulario.reset();

    resultado.style.display = "none";
    formulario.style.display = "flex";

    localStorage.removeItem("carreraResultado");
    localStorage.removeItem("carreraResultadoId");
    localStorage.removeItem("carrerasRelacionadas");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});