const productos = [
  {
    id: 1,
    nombre: "PROBI GO!",
    precio: 1098,
    presentacion: "Caja con 30 stickpacks de 2g",
    categoria: "Digestión",
    imagen: "img/probi_go.png",
    ingredientes: [
      "Lactobacillus rhamnosus",
      "Lactiplantibacillus plantarum",
      "Bifidobacterium animalis",
      "Inulina",
      "FOS",
      "XOS",
      "Dextrina resistente",
      "Arándano",
      "Vitamina D3",
      "Zinc"
    ],
    beneficios: [
      "Mantiene microbiota intestinal equilibrada",
      "Fortalece defensas naturales",
      "Favorece absorción de nutrientes",
      "Protege mucosa intestinal",
      "Aporta antioxidantes"
    ],
    modoUso: "Tomar 1 stickpack al día, directamente o disuelto en 240 ml de agua",
    descripcionCorta: "🌿 Digestión equilibrada y defensas fuertes",
    descripcionLarga: "PROBI GO! es un suplemento avanzado con prebióticos, probióticos y postbióticos que ayuda a mantener una microbiota intestinal saludable, fortalece las defensas naturales y favorece la absorción de nutrientes. Con vitamina D3 y zinc, protege la mucosa intestinal y aporta antioxidantes para tu bienestar diario."
  },
  {
    id: 2,
    nombre: "ZENDRA",
    precio: 807,
    presentacion: "Frasco con 60 cápsulas de 750mg",
    categoria: "Mental",
    imagen: "img/zendra.png",
    ingredientes: ["Ashwagandha","Melena de León","Bacopa"],
    beneficios: [
      "Reduce estrés y cortisol",
      "Favorece memoria y concentración",
      "Apoya salud cerebral",
      "Aumenta energía sin cafeína",
      "Mejora sueño y bienestar emocional"
    ],
    modoUso: "Tomar 2 cápsulas al día (1 mañana, 1 noche)",
    descripcionCorta: "🧘 Reduce el estrés y mejora tu memoria",
    descripcionLarga: "ZENDRA es tu aliado para el equilibrio mental y emocional. Con Ashwagandha, Melena de León y Bacopa, ayuda a reducir el estrés, favorece la memoria y concentración, y apoya la salud cerebral. Ideal para quienes buscan claridad mental, energía estable y descanso reparador."
  },
  {
    id: 3,
    nombre: "FEMBALANZ",
    precio: 900,
    presentacion: "Frasco con 60 cápsulas de 500mg",
    categoria: "Mujeres",
    imagen: "img/fembalanz.png",
    ingredientes: [
      "Probióticos (Lactobacillus reuteri, fermentum, acidophilus, rhamnosus)",
      "Myo-inositol","Arándano","Nopal","Vitamina C","Inulina de agave","Fruto de plátano"
    ],
    beneficios: [
      "Fortalece defensas","Equilibrio microbiota intestinal, urinaria y vaginal",
      "Favorece equilibrio hormonal","Mantiene pH vaginal saludable",
      "Previene infecciones urinarias","Protección antioxidante","Mejora digestión"
    ],
    modoUso: "Tomar 2 cápsulas al día",
    descripcionCorta: "🌸 Equilibrio femenino total",
    descripcionLarga: "FEMBALANZ es tu aliado diario para el bienestar femenino. Con probióticos especializados, arándano e inulina de agave, fortalece tus defensas, protege la microbiota intestinal, urinaria y vaginal, y favorece un pH saludable. Te ayuda a sentirte ligera, protegida y en equilibrio cada día."
  },
  {
    id: 4,
    nombre: "LEVIUS",
    precio: 516,
    presentacion: "Frasco con 30 cápsulas de 600mg",
    categoria: "Control de Peso",
    imagen: "img/levius.png",
    ingredientes: ["Café verde","Vinagre de manzana","Propionil-L-carnitina","Nopal","Té verde","Picolinato de cromo","Bifidobacterium longum","Papaína","Vitamina D3"],
    beneficios: [
      "Controla apetito","Apoya pérdida de peso","Disminuye glucosa y colesterol",
      "Favorece digestión","Aumenta energía","Propiedades antioxidantes","Favorece circulación"
    ],
    modoUso: "Tomar 1 cápsula por la mañana antes del desayuno",
    descripcionCorta: "🔥 Controla tu apetito y activa tu metabolismo",
    descripcionLarga: "LEVIUS es el suplemento que acompaña tu meta de control de peso. Con extractos naturales como café verde, té verde y nopal, ayuda a controlar el apetito, reducir glucosa y colesterol, y aumentar tu energía. Ideal para quienes buscan un metabolismo activo y un estilo de vida saludable."
  },
  {
    id: 5,
    nombre: "LEVIUS NIGHT",
    precio: 593,
    presentacion: "Frasco con 30 cápsulas de 500mg",
    categoria: "Control de Peso",
    imagen: "img/levius_night.png",
    ingredientes: ["Chá de bugre","Jengibre","Cocolmeca","Ciruela","Malva","Naranjo amargo","Papaya","Nopal","Lima","Tila"],
    beneficios: [
      "Disminuye apetito","Favorece quema de grasa abdominal","Apoya pérdida de peso",
      "Mejora digestión","Combate estreñimiento","Aporta antioxidantes","Efecto diurético natural"
    ],
    modoUso: "Tomar 1 cápsula por la noche antes de dormir",
    descripcionCorta: "🌙 Quema grasa y mejora tu digestión mientras duermes",
    descripcionLarga: "LEVIUS NIGHT trabaja mientras descansas. Con ingredientes naturales como jengibre, nopal y ciruela, ayuda a controlar el apetito nocturno, favorecer la quema de grasa abdominal y mejorar la digestión. Es el complemento perfecto para tu rutina de control de peso."
  },
  {
    id: 6,
    nombre: "Gummys RedNatura",
    precio: 697,
    presentacion: "Frasco con 60 gomitas de 3g",
    categoria: "Control de Peso",
    imagen: "img/gummys_rednatura.png",
    ingredientes: [
      "Vinagre de manzana","Granada","Propionil-L-carnitina glicina",
      "Vitamina B6","Vitamina B12","Ácido fólico","Fruto del monje"
    ],
    beneficios: [
      "Controla apetito","Favorece reducción de grasa corporal",
      "Apoya digestión y desintoxicación","Efecto diurético",
      "Aumenta energía y desarrollo muscular","Aporta antioxidantes","Favorece salud cardiovascular"
    ],
    modoUso: "Masticar 2 gomitas al día",
    descripcionCorta: "🍬 Control de peso delicioso y práctico",
    descripcionLarga: "Las Gummys RedNatura convierten el control de peso en un hábito fácil y agradable. Con vinagre de manzana, granada y vitaminas, ayudan a controlar el apetito, reducir grasa corporal y aportar energía. Un suplemento funcional en formato de gomita que cuida tu salud y tu figura."
  },
  {
    id: 7,
    nombre: "DIVANT NF",
    precio: 656,
    presentacion: "Frasco con 60 cápsulas de 500mg",
    categoria: "Glucosa",
    imagen: "img/divant_nf.png",
    ingredientes: ["Gymnema silvestre","Semilla de uva","Melón amargo","Quercetina","Bifidobacterium longum"],
    beneficios: [
      "Mejora función del páncreas","Contribuye al control de glucosa",
      "Apoya manejo de diabetes","Previene complicaciones","Aporta antioxidantes"
    ],
    modoUso: "Tomar 1 cápsula cada 12 horas",
    descripcionCorta: "💙 Apoya tu metabolismo y controla la glucosa",
    descripcionLarga: "DIVANT NF está diseñado para cuidar tu metabolismo y mantener niveles saludables de glucosa. Con Gymnema, melón amargo y antioxidantes, apoya la función del páncreas y previene complicaciones. Ideal para quienes buscan bienestar integral y control metabólico."
  },
  {
    id: 8,
    nombre: "NORANTRIX",
    precio: 480,
    presentacion: "Caja con 36 sobres de 2g",
    categoria: "Digestión",
    imagen: "img/norantrix.png",
    ingredientes: ["Momordica charantia","Nogal"],
    beneficios: [
      "Regula niveles de azúcar","Apoya función del páncreas",
      "Favorece sistema inmunológico","Aporta antioxidantes",
      "Protege contra estrés oxidativo","Actividad antimicrobiana","Apoya hígado y digestión"
    ],
    modoUso: "Colocar 1 sobre en agua hirviendo, tomar 3 veces al día",
    descripcionCorta: "🍵 Infusión natural para glucosa y digestión",
    descripcionLarga: "NORANTRIX es un té herbolario que regula el azúcar en sangre y apoya la digestión. Con Momordica charantia y nogal, fortalece el sistema inmunológico y protege contra el estrés oxidativo. Una bebida natural que cuida tu metabolismo y tu bienestar diario."
  },
  {
    id: 9,
    nombre: "FLUBI",
    precio: 458,
    presentacion: "Frasco con 30 cápsulas de 700mg",
    categoria: "Urinario",
    imagen: "img/flubi.png",
    ingredientes: ["Arándano","Cola de caballo"],
    beneficios: [
      "Favorece función renal","Previene microorganismos en vías urinarias",
      "Apoya infecciones urinarias","Elimina líquidos retenidos","Apoya salud urinaria"
    ],
    modoUso: "Tomar 1 cápsula por la mañana",
    descripcionCorta: "💧 Protege tu sistema urinario con arándano",
    descripcionLarga: "FLUBI cuida tu salud urinaria y renal. Con arándano y cola de caballo, favorece la función renal, previene infecciones y ayuda a eliminar líquidos retenidos. Ideal para mantener un sistema urinario saludable y libre de molestias."
  },
  {
    id: 10,
    nombre: "ANT1-VR",
    precio: 450,
    presentacion: "Frasco con 30 tabletas",
    categoria: "Inmunológico",
    imagen: "img/ant1_vr.png",
    ingredientes: ["Sello de oro","Vitamina C","Zinc","Ajo negro","Equinácea","Cordyceps","Elderberry"],
    beneficios: [
      "Fortalece sistema inmunológico","Protección frente a agentes externos",
      "Favorece respuesta natural","Reduce duración de malestares","Aporta antioxidantes","Mantiene energía"
    ],
    modoUso: "Tomar 1 tableta al día",
    descripcionCorta: "🛡️ Refuerza tus defensas naturales cada día",
    descripcionLarga: "ANT1-VR es tu escudo contra agentes externos. Con vitamina C, zinc, equinácea y elderberry, fortalece tu sistema inmunológico, reduce la duración de malestares estacionales y aporta antioxidantes. Ideal para mantener energía y bienestar general durante todo el año."
  },
  {
    id: 11,
    nombre: "BLUNNER NF",
    precio: 625,
    presentacion: "Caja con 20 sobres de 4.3g",
    categoria: "Energía",
    imagen: "img/blunner_nf.png",
    ingredientes: [
      "L-glutamina","Taurina","Té verde","Guaraná","Stevia","L-arginina",
      "Cafeína anhidra","Glucuronolactona",
      "Vitaminas A, B1, B2, B3, B6, B9, B12, C, D3, E",
      "Minerales: calcio, fósforo, hierro, magnesio, zinc, cobre, yodo, flúor"
    ],
    beneficios: [
      "Proporciona energía diaria","Favorece rendimiento físico y mental",
      "Aporta vitaminas y minerales","Apoya recuperación tras esfuerzo",
      "Contribuye al bienestar cardiovascular","Acción antioxidante"
    ],
    modoUso: "Vaciar 1 sobre en 240 ml de agua, mezclar y consumir",
    descripcionCorta: "⚡ Energía instantánea para cuerpo y mente",
    descripcionLarga: "BLUNNER NF es la bebida energizante que impulsa tu rendimiento físico y mental. Con aminoácidos, vitaminas y minerales, aporta energía diaria, favorece la recuperación tras el esfuerzo y protege contra el estrés oxidativo. Perfecto para mantenerte activo y concentrado."
  },
  {
    id: 12,
    nombre: "CLOORI",
    precio: 560,
    presentacion: "Frasco con 500 ml, sabor menta-hierbabuena",
    categoria: "Desintoxicación",
    imagen: "img/cloori.png",
    ingredientes: ["Clorofila","Vitaminas","Minerales"],
    beneficios: [
      "Protege células con acción antioxidante","Favorece oxigenación celular",
      "Contribuye al bienestar corporal","Apoya sistema inmunológico",
      "Complementa control de peso","Mantiene colesterol y glucosa saludables"
    ],
    modoUso: "Disolver 5 ml en 240 ml de agua, consumir 2 a 3 veces al día",
    descripcionCorta: "🌱 Vitalidad y frescura con clorofila líquida",
    descripcionLarga: "CLOORI es un suplemento líquido refrescante con clorofila, vitaminas y minerales. Favorece la oxigenación celular, protege contra el estrés oxidativo y apoya el sistema inmunológico. Su sabor menta-hierbabuena lo convierte en un aliado delicioso para tu bienestar diario."
  },
  {
    id: 13,
    nombre: "GELTYVIT GUMMYS",
    precio: 730,
    presentacion: "Frasco con 60 gomitas de 3g",
    categoria: "Niños",
    imagen: "img/geltyvit_gummys.png",
    ingredientes: [
      "Vitaminas A, C, E, B1, B2, B5, B6, B12",
      "Ácido fólico","Biotina","Vitamina D3",
      "Minerales: calcio, potasio, yodo, zinc",
      "Omega 3","Flor de jamaica","Fruto del monje"
    ],
    beneficios: [
      "Aporta vitaminas y minerales","Favorece rendimiento físico y mental",
      "Fortalece defensas","Apoya piel, cabello y uñas","Mantiene huesos y visión saludables"
    ],
    modoUso: "Masticar 4 gomitas al día",
    descripcionCorta: "🍬 Multivitamínico delicioso para toda la familia",
    descripcionLarga: "GELTYVIT GUMMYS aporta vitaminas, minerales y omega 3 en un formato divertido y delicioso. Favorece el rendimiento físico y mental, fortalece el sistema inmunológico y apoya la salud de piel, cabello y uñas. Ideal para complementar la nutrición de grandes y pequeños."
  },
  {
    id: 14,
    nombre: "OXIALOE NF",
    precio: 802,
    presentacion: "Frasco con 1 litro",
    categoria: "Desintoxicación",
    imagen: "img/oxialoe_nf.png",
    ingredientes: ["Sábila","Fenogreco","Hinojo","Jengibre","Miel de abeja","Guayaba","Mango"],
    beneficios: [
      "Favorece tránsito intestinal suave","Apoya equilibrio digestivo",
      "Cuida mucosa digestiva","Acción prebiótica natural","Aporta vitaminas y antioxidantes"
    ],
    modoUso: "Tomar 2 cucharadas (30 ml) antes del desayuno",
    descripcionCorta: "🌿 Digestión suave y natural con sábila",
    descripcionLarga: "OXIALOE NF es un suplemento líquido con sábila y extractos naturales que favorece el tránsito intestinal, cuida la mucosa digestiva y aporta vitaminas y antioxidantes. Una fórmula refrescante que apoya tu equilibrio digestivo de manera natural."
  },
  {
    id: 15,
    nombre: "VENTRE TEA",
    precio: 292,
    presentacion: "Caja con 30 sobres de 2g",
    categoria: "Digestión",
    imagen: "img/ventre_tea.png",
    ingredientes: ["Té verde","Té rojo","Té blanco","Hoja sen"],
    beneficios: [
      "Favorece tránsito intestinal","Apoya limpieza digestiva",
      "Elimina desechos naturalmente","Complementa control de peso",
      "Disminuye retención de líquidos","Aporta antioxidantes"
    ],
    modoUso: "Colocar 1 sobre en agua hirviendo, reposar 5 minutos, consumir preferentemente de noche",
    descripcionCorta: "🍵 Infusión herbal para digestión ligera",
    descripcionLarga: "VENTRE TEA es una mezcla de té verde, rojo, blanco y hoja sen que favorece el tránsito intestinal, apoya la limpieza digestiva y complementa el control de peso. Una infusión natural que ayuda a eliminar desechos y aporta antioxidantes para tu bienestar."
  },
  {
    id: 16,
    nombre: "DESMODIN",
    precio: 752,
    presentacion: "Frasco con 60 cápsulas de 500mg",
    categoria: "Desintoxicación",
    imagen: "img/desmodin.png",
    ingredientes: ["Desmodium adscendens (hoja en polvo)"],
    beneficios: [
      "Apoya salud y funcionamiento del hígado","Favorece depuración natural",
      "Apoya vesícula biliar","Contribuye al metabolismo","Favorece equilibrio digestivo"
    ],
    modoUso: "Tomar 1 cápsula antes de cada comida",
    descripcionCorta: "🌿 Depura y fortalece tu hígado naturalmente",
    descripcionLarga: "DESMODIN es un suplemento natural que apoya la salud y funcionamiento del hígado. Favorece procesos de depuración, ayuda a la vesícula biliar y contribuye al metabolismo. Ideal para quienes buscan bienestar digestivo y desintoxicación natural."
  },
  {
    id: 17,
    nombre: "DIALEGRI NF",
    precio: 555,
    presentacion: "Frasco con 60 cápsulas de 650mg",
    categoria: "Digestión",
    imagen: "img/dialegri_nf.png",
    ingredientes: ["Raíz de angélica","Aloe vera","Boldo","Hinojo","Fenogreco","Lúpulo","Té de limón"],
    beneficios: [
      "Favorece bienestar digestivo","Reduce inflamación abdominal",
      "Alivia gases y pesadez","Promueve digestión ligera",
      "Apoya vesícula biliar","Equilibrio digestivo tras alimentos"
    ],
    modoUso: "Tomar 1 cápsula antes de cada alimento",
    descripcionCorta: "🌱 Bienestar digestivo con extractos naturales",
    descripcionLarga: "DIALEGRI NF es un suplemento que favorece la digestión ligera y confortable. Con aloe vera, boldo y hinojo, reduce la inflamación abdominal, alivia gases y apoya la vesícula biliar. Una fórmula natural para sentirte ligero después de cada comida."
  },
  {
    id: 18,
    nombre: "SERENTRA",
    precio: 619,
    presentacion: "Frasco con 60 cápsulas de 500mg",
    categoria: "Mental",
    imagen: "img/serentra.png",
    ingredientes: [
      "Toronjil (Melissa)","Flor de azahar","Manzanilla","Omega 3",
      "Vitaminas A, B1, B2, B3, B6, D3, E, ácido fólico",
      "Minerales: magnesio, calcio, fósforo, hierro, zinc, cobre, yodo, silicio"
    ],
    beneficios: [
      "Favorece relajación y bienestar emocional","Equilibra estado de ánimo",
      "Ayuda frente al estrés","Apoya descanso reparador","Favorece claridad mental"
    ],
    modoUso: "Tomar 1 cápsula por la mañana y 1 por la noche",
    descripcionCorta: "😴 Relajación y descanso reparador",
    descripcionLarga: "SERENTRA ayuda a equilibrar tu estado de ánimo y mejorar la calidad del sueño. Con toronjil, manzanilla y omega 3, favorece la relajación, apoya el sistema nervioso y aporta vitaminas y minerales esenciales para tu bienestar emocional."
  },
  {
    id: 19,
    nombre: "PRO SHAKE Capuchino",
    precio: 983,
    presentacion: "Bolsa con 500g",
    categoria: "Energía",
    imagen: "img/pro_shake_capuchino.png",
    ingredientes: ["Proteína de suero de leche","Leche descremada en polvo","Lecitina de soya","Vitaminas A, C, D3","Minerales: potasio, fósforo, hierro, calcio"],
    beneficios: [
      "Complementa nutrición diaria","Favorece masa muscular","Apoya recuperación física",
      "Aumenta energía","Fortalece sistema inmunológico"
    ],
    modoUso: "Mezclar 2 cucharadas (17g) en 240 ml de agua",
    descripcionCorta: "💪 Nutrición completa sabor capuchino",
    descripcionLarga: "PRO SHAKE Capuchino es un suplemento con proteína de suero, vitaminas y minerales que complementa tus requerimientos diarios, favorece la masa muscular y apoya la recuperación tras la actividad física. Ideal para aumentar energía y resistencia."
  },
  {
    id: 20,
    nombre: "PRO SHAKE Fresa",
    precio: 983,
    presentacion: "Bolsa con 500g",
    categoria: "Energía",
    imagen: "img/pro_shake_fresa.png",
    ingredientes: ["Proteína de suero de leche","Leche descremada en polvo","Lecitina de soya","Vitaminas A, C, D3","Minerales: potasio, fósforo, hierro, calcio"],
    beneficios: [
      "Complementa nutrición diaria","Favorece masa muscular","Apoya recuperación física",
      "Aumenta energía","Fortalece sistema inmunológico"
    ],
    modoUso: "Mezclar 2 cucharadas (17g) en 240 ml de agua",
    descripcionCorta: "🍓 Nutrición completa sabor fresa",
    descripcionLarga: "PRO SHAKE Fresa es un suplemento con proteína de suero, vitaminas y minerales que complementa tus requerimientos diarios, favorece la masa muscular y apoya la recuperación tras la actividad física. Ideal para aumentar energía y resistencia."
  },
  {
    id: 21,
    nombre: "4 KIDDY'S GUMMYS",
    precio: 728,
    presentacion: "Frasco con 60 gomitas de 3g",
    categoria: "Niños",
    imagen: "img/4_kiddys_gummys.png",
    ingredientes: [
      "Omega 3","Vitaminas A, C, E, B1, B2, B3, B6, B12","Vitamina D3","Ácido fólico",
      "Minerales: calcio, fósforo, magnesio, hierro, cobre, zinc",
      "Flor de jamaica","Zanahoria","Miel de abeja","Fruto del monje","Betabel",
      "Jugos de piña, naranja, manzana, limón, naranjo amargo"
    ],
    beneficios: [
      "Aporta nutrientes esenciales","Favorece huesos y músculos",
      "Fortalece defensas","Apoya concentración y aprendizaje","Mantiene energía diaria"
    ],
    modoUso: "Masticar 4 gomitas al día",
    descripcionCorta: "👶 Nutrición divertida y completa para niños",
    descripcionLarga: "4 KIDDY'S GUMMYS son gomitas multivitamínicas diseñadas para el crecimiento infantil. Con omega 3, vitaminas y minerales, favorecen huesos fuertes, apoyan la concentración y fortalecen el sistema inmunológico. Una forma deliciosa y práctica de cuidar la salud de los más pequeños."
  },
  {
    id: 22,
    nombre: "4 KIDDY'S NF",
    precio: 494,
    presentacion: "Frasco con 500 ml",
    categoria: "Niños",
    imagen: "img/4_kiddys_nf.png",
    ingredientes: [
      "Omega 3","Vitaminas B3, B6, E, ácido fólico",
      "Minerales: calcio, fósforo, potasio, magnesio, hierro, zinc",
      "Miel de abeja","Betabel","Zanahoria",
      "Jugos de piña, naranja, manzana, limón, naranjo amargo"
    ],
    beneficios: [
      "Aporta nutrientes esenciales","Favorece huesos y músculos",
      "Fortalece defensas","Apoya aprendizaje y memoria","Mantiene energía diaria"
    ],
    modoUso: "Tomar 2 cucharadas (10 ml) tres veces al día",
    descripcionCorta: "🍼 Nutrición líquida para el crecimiento infantil",
    descripcionLarga: "4 KIDDY'S NF es un suplemento líquido infantil que aporta omega 3, vitaminas y minerales esenciales. Favorece el desarrollo de huesos y músculos, fortalece el sistema inmunológico y apoya la concentración y memoria. Una fórmula deliciosa y práctica para acompañar el crecimiento saludable de los niños."
  },
  {
    id: 23,
    nombre: "RESVIV NF",
    precio: 896.50,
    presentacion: "Frasco con 620 ml",
    categoria: "Antioxidantes",
    imagen: "img/resviv_nf.png",
    ingredientes: ["Resveratrol","IP6","Mangostán","Noni","Goji","Arándano","Granada","Fresa","Jalea real","Jengibre","Inositol"],
    beneficios: [
      "Aporta antioxidantes","Favorece bienestar y vitalidad",
      "Mantiene energía física y mental","Apoya sistema inmunológico","Contribuye al equilibrio metabólico"
    ],
    modoUso: "Tomar 30 ml antes del desayuno",
    descripcionCorta: "🍇 Vitalidad y energía con antioxidantes",
    descripcionLarga: "RESVIV NF es un suplemento líquido con resveratrol y superfrutas como granada, arándano y mangostán. Aporta antioxidantes que protegen contra el estrés oxidativo, mantiene la energía física y mental y apoya el sistema inmunológico. Una fórmula avanzada para bienestar y vitalidad diaria."
  },
  {
    id: 24,
    nombre: "RESVIV STICK PACK",
    precio: 893,
    presentacion: "Bolsa con 15 sobres de 8g",
    categoria: "Antioxidantes",
    imagen: "img/resviv_stick_pack.png",
    ingredientes: ["Resveratrol","Jalea real","Uva ursi","Mangostán","Goji","Jengibre","Granada","IP6","Noni","Myo-inositol","Acaí"],
    beneficios: [
      "Protege células del estrés oxidativo","Favorece vitalidad y bienestar",
      "Mantiene energía física y mental","Apoya sistema inmunológico","Favorece depuración natural"
    ],
    modoUso: "Disolver 1 sobre en 240 ml de agua, no exceder una porción al día",
    descripcionCorta: "💥 Antioxidantes prácticos en formato stick",
    descripcionLarga: "RESVIV STICK PACK ofrece antioxidantes y vitalidad en un formato práctico. Con resveratrol, jalea real y superfrutas, protege las células del estrés oxidativo, apoya el sistema inmunológico y favorece la depuración natural. Ideal para quienes buscan energía y bienestar en movimiento."
  },
  {
    id: 25,
    nombre: "KRONNOS+",
    precio: 1459,
    presentacion: "Frasco con 60 cápsulas de 750mg",
    categoria: "Antioxidantes",
    imagen: "img/kronnos_plus.png",
    ingredientes: [
      "Nicotinamida Ribósido (NR)",
      "Complejo NAC (N-Acetil-L-Cisteína, Cordyceps, Curcumina, Pterostilbeno, Silicio, Magnesio)",
      "L-Glutatión","Quercetina","Cycloastragenol","Alga AFA","Ajo negro","Extracto de brócoli"
    ],
    beneficios: [
      "Apoya energía celular","Protección frente al estrés oxidativo",
      "Favorece regeneración celular","Contribuye al bienestar integral","Complementa envejecimiento saludable"
    ],
    modoUso: "Tomar 2 cápsulas al día",
    descripcionCorta: "🔬 Longevidad y energía celular avanzada",
    descripcionLarga: "KRONNOS+ es un suplemento premium que impulsa la energía celular y favorece la regeneración. Con nicotinamida ribósido, NAC y antioxidantes, protege frente al estrés oxidativo y complementa un envejecimiento saludable. Ideal para quienes buscan vitalidad y bienestar integral."
  },
  {
    id: 26,
    nombre: "MUSH KAFFI",
    precio: 805.50,
    presentacion: "Bolsa con 225 g, sabor moka",
    categoria: "Energía",
    imagen: "img/mush_kaffi.png",
    ingredientes: ["Melena de León","Cordyceps","Tsugae","Trametes Versicolor","Café"],
    beneficios: [
      "Favorece concentración y memoria","Apoya rendimiento físico y mental",
      "Mantiene energía estable","Aporta antioxidantes","Favorece bienestar general"
    ],
    modoUso: "Añadir 2 cucharadas (15 g) en una taza con 240 ml de agua caliente",
    descripcionCorta: "☕ Café funcional para energía y enfoque",
    descripcionLarga: "MUSH KAFFI combina café con hongos funcionales como Melena de León y Cordyceps. Favorece la concentración, memoria y rendimiento físico y mental, aportando energía estable y antioxidantes. Una bebida deliciosa que impulsa tu bienestar diario."
  },
  {
    id: 27,
    nombre: "RED KAFFI",
    precio: 934,
    presentacion: "Caja con 15 sticks de 4.5 g",
    categoria: "Energía",
    imagen: "img/red_kaffi.png",
    ingredientes: ["Café soluble","MCT","CLA","L-Carnitina","Polinicotinato de cromo","Té verde","Citrus aurantium"],
    beneficios: [
      "Aumenta energía y rendimiento","Contribuye a saciedad y control del apetito",
      "Apoya metabolismo de grasas","Complementa control de peso","Favorece estilo de vida activo","Apoya bienestar cardiovascular"
    ],
    modoUso: "Disolver 1 stick en 240 ml de agua caliente, máximo 3 al día",
    descripcionCorta: "🔥 Café funcional para energía y control de peso",
    descripcionLarga: "RED KAFFI es una bebida funcional que combina café soluble con MCT, CLA y L-Carnitina. Aumenta la energía, favorece la saciedad y apoya el metabolismo de grasas. Ideal para quienes buscan un estilo de vida activo y un control de peso efectivo."
  },
  {
    id: 28,
    nombre: "KAVARNA",
    precio: 717,
    presentacion: "Bolsa con 90 g",
    categoria: "Energía",
    imagen: "img/kavarna.png",
    ingredientes: ["Café soluble","Ganoderma Tsugae"],
    beneficios: [
      "Aporta antioxidantes","Favorece energía y vitalidad",
      "Apoya sistema inmunológico","Favorece concentración y desempeño mental","Contribuye a bienestar general"
    ],
    modoUso: "Agregar 1 cucharadita (4.5 g) en una taza con 240 ml de agua caliente",
    descripcionCorta: "☕ Café con antioxidantes y energía",
    descripcionLarga: "KAVARNA es una bebida funcional que combina café soluble con Ganoderma Tsugae. Aporta antioxidantes, favorece la energía y vitalidad, apoya el sistema inmunológico y ayuda a mantener la concentración. Una opción deliciosa para un estilo de vida activo y saludable."
  },
  {
    id: 29,
    nombre: "KAFICHAI",
    precio: 769,
    presentacion: "Bote con 400 g, sabor chai",
    categoria: "Energía",
    imagen: "img/kafichai.png",
    ingredientes: ["Café soluble","Ganoderma Tsugae","Hongo Shiitake","Té verde"],
    beneficios: [
      "Aporta antioxidantes","Favorece energía estable",
      "Apoya concentración y enfoque","Fortalece sistema inmunológico","Favorece bienestar general"
    ],
    modoUso: "Agregar 3 cucharaditas (20 g) en 240 ml de agua caliente",
    descripcionCorta: "☕ Energía y enfoque con sabor chai",
    descripcionLarga: "KAFICHAI combina café soluble, té verde y hongos funcionales como Ganoderma y Shiitake. Favorece la concentración, aporta antioxidantes y mantiene niveles estables de energía. Una bebida deliciosa para un estilo de vida activo y saludable."
  },
  {
    id: 30,
    nombre: "LEVENÉ NF",
    precio: 613,
    presentacion: "Frasco con 30 cápsulas de 750mg",
    categoria: "Circulación",
    imagen: "img/levene_nf.png",
    ingredientes: ["Hoja de bambú","Bioflavonoides cítricos","Semilla de uva"],
    beneficios: [
      "Favorece circulación sanguínea","Fortalece vasos sanguíneos",
      "Reduce pesadez en piernas","Aporta antioxidantes","Apoya bienestar vascular"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcionCorta: "💙 Piernas ligeras y circulación saludable",
    descripcionLarga: "LEVENÉ NF está formulado con hoja de bambú, bioflavonoides cítricos y semilla de uva. Favorece la circulación sanguínea, fortalece los vasos sanguíneos y reduce la sensación de pesadez en las piernas. Ideal para mantener bienestar vascular y energía diaria."
  },
  {
    id: 31,
    nombre: "SENZADOL Crema",
    precio: 433,
    presentacion: "Tubo con crema tópica",
    categoria: "Articulaciones",
    imagen: "img/senzadol_crema.png",
    ingredientes: ["Romero","Salicilato de metilo","MSM"],
    beneficios: [
      "Alivia molestias musculares","Favorece confort articular",
      "Relaja músculos","Apoya movilidad","Sensación refrescante"
    ],
    modoUso: "Aplicar sobre la zona afectada con masaje suave",
    descripcionCorta: "🧴 Alivio inmediato para músculos y articulaciones",
    descripcionLarga: "SENZADOL Crema proporciona alivio y confort en músculos y articulaciones. Con romero, MSM y salicilato de metilo, ayuda a relajar, reducir molestias y favorecer la movilidad. Ideal para uso diario tras esfuerzo físico."
  },
  {
    id: 32,
    nombre: "UC-II NF",
    precio: 994.50,
    presentacion: "Frasco con cápsulas",
    categoria: "Articulaciones",
    imagen: "img/ucii_nf.png",
    ingredientes: ["Colágeno tipo II no desnaturalizado","Vitamina C"],
    beneficios: [
      "Favorece movilidad articular","Apoya regeneración de cartílago",
      "Reduce molestias","Protección antioxidante","Favorece flexibilidad"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcionCorta: "🏃 Movilidad y flexibilidad articular",
    descripcionLarga: "UC-II NF aporta colágeno tipo II no desnaturalizado y vitamina C para favorecer la movilidad articular, apoyar la regeneración del cartílago y reducir molestias. Ideal para mantener articulaciones flexibles y saludables."
  },
  {
    id: 33,
    nombre: "FEMICOL",
    precio: 313,
    presentacion: "Frasco con cápsulas",
    categoria: "Belleza",
    imagen: "img/femicol.png",
    ingredientes: ["Colágeno hidrolizado","Vitamina C","Biotina"],
    beneficios: [
      "Favorece elasticidad de la piel","Fortalece cabello y uñas",
      "Apoya salud articular","Protección antioxidante","Favorece regeneración celular"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcionCorta: "✨ Piel firme, cabello fuerte y uñas saludables",
    descripcionLarga: "FEMICOL combina colágeno hidrolizado, vitamina C y biotina para favorecer la elasticidad de la piel, fortalecer cabello y uñas y apoyar la salud articular. Una fórmula completa para cuidar tu belleza desde dentro."
  },
  {
    id: 34,
    nombre: "DUGRAN-X",
    precio: 523,
    presentacion: "Frasco con cápsulas",
    categoria: "Hombres",
    imagen: "img/dugran_x.png",
    ingredientes: ["Extractos naturales energizantes","Vitaminas","Minerales"],
    beneficios: [
      "Favorece energía masculina","Apoya rendimiento físico",
      "Fortalece defensas","Favorece equilibrio hormonal","Apoya vitalidad diaria"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcionCorta: "💪 Energía y vitalidad para hombres",
    descripcionLarga: "DUGRAN-X es un suplemento diseñado para hombres que buscan energía, rendimiento físico y equilibrio hormonal. Con extractos naturales, vitaminas y minerales, fortalece defensas y apoya la vitalidad diaria."
  },
  {
    id: 35,
    nombre: "OMEPAX NF",
    precio: 720,
    presentacion: "Frasco con cápsulas",
    categoria: "Inmunológico",
    imagen: "img/omepax_nf.png",
    ingredientes: ["Aceite de pescado (EPA y DHA)","Vitamina E"],
    beneficios: [
      "Favorece salud cardiovascular","Mantiene niveles saludables de colesterol",
      "Apoya función cerebral","Protección antioxidante","Favorece articulaciones"
    ],
    modoUso: "Tomar 2 cápsulas al día",
    descripcionCorta: "❤️ Cuida tu corazón y tus defensas",
    descripcionLarga: "OMEPAX NF aporta ácidos grasos esenciales EPA y DHA que favorecen la salud cardiovascular, mantienen niveles saludables de colesterol y apoyan la función cerebral. Con vitamina E para protección antioxidante, es un aliado integral para tu bienestar."
  },
  {
    id: 36,
    nombre: "BLEX",
    precio: 565,
    presentacion: "Frasco con cápsulas",
    categoria: "Inmunológico",
    imagen: "img/blex.png",
    ingredientes: ["Extractos naturales","Vitaminas","Minerales"],
    beneficios: [
      "Fortalece defensas","Favorece energía diaria",
      "Protección antioxidante","Apoya bienestar general","Complementa nutrición"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcionCorta: "🛡️ Refuerza tus defensas y tu energía",
    descripcionLarga: "BLEX es un suplemento que fortalece el sistema inmunológico y aporta energía diaria. Con extractos naturales, vitaminas y minerales, protege contra el estrés oxidativo y complementa tu nutrición para mantenerte activo y saludable."
  },
  {
    id: 37,
    nombre: "PLENNA",
    precio: 651,
    presentacion: "Frasco con cápsulas",
    categoria: "Mujeres",
    imagen: "img/plenna.png",
    ingredientes: ["Extractos naturales","Vitaminas","Minerales"],
    beneficios: [
      "Favorece equilibrio hormonal","Apoya salud femenina",
      "Fortalece defensas","Favorece bienestar general","Apoya energía diaria"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcionCorta: "🌸 Bienestar y equilibrio femenino",
    descripcionLarga: "PLENNA es un suplemento diseñado para mujeres que buscan equilibrio hormonal y bienestar integral. Con extractos naturales, vitaminas y minerales, fortalece defensas y aporta energía para acompañar tu día."
  },
  {
    id: 39,
    nombre: "FLUSSORIN",
    precio: 808,
    presentacion: "Frasco con cápsulas",
    categoria: "Hombres",
    imagen: "img/flussorin.png",
    ingredientes: ["Extractos naturales energizantes","Vitaminas","Minerales"],
    beneficios: [
      "Favorece energía masculina","Apoya rendimiento físico",
      "Fortalece defensas","Favorece equilibrio hormonal","Apoya vitalidad diaria"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcionCorta: "💪 Energía y vitalidad para hombres",
    descripcionLarga: "FLUSSORIN es un suplemento diseñado para hombres que buscan energía, rendimiento físico y equilibrio hormonal. Con extractos naturales, vitaminas y minerales, fortalece defensas y apoya la vitalidad diaria."
  },
  {
    id: 41,
    nombre: "RENAISS Crema",
    precio: 661,
    presentacion: "Envase con crema tópica",
    categoria: "Belleza",
    imagen: "img/renaiss_crema.png",
    ingredientes: ["Colágeno hidrolizado","Ácido hialurónico","Biotina","Vitaminas","Extractos naturales"],
    beneficios: [
      "Favorece hidratación profunda de la piel","Aporta firmeza y elasticidad",
      "Reduce líneas de expresión","Fortalece cabello y uñas","Protección antioxidante"
    ],
    modoUso: "Aplicar sobre la piel limpia con masaje suave, uso diario",
    descripcionCorta: "🧴 Hidratación y firmeza para tu piel",
    descripcionLarga: "RENAISS Crema es un tratamiento tópico que combina colágeno hidrolizado, ácido hialurónico y biotina para hidratar profundamente, aportar firmeza y reducir líneas de expresión. Una fórmula antioxidante que cuida tu piel, cabello y uñas desde fuera hacia dentro."
  }
];
