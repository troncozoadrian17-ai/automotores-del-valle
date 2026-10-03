let vehiculos = [  
// ==============================  
// VEHÍCULOS  
// ==============================

{
marca: "Peugeot",
modelo: "207 Compact",
año: 2014,
motor: "1.4 nafta",
kilometraje: "137.000 km",
categoria: "Autos",
precio: 12500000,
moneda: "ARS",

entregaMinima: 7800000,
maximoFinanciar: 4700000,
financiacionDecreditos: true,

cuotasTradicional: {
    12: 591500,
    18: 452500,
    24: 378000,
    36: 311000
},

cuotasUVA: {
    12: 520000,
    18: 385000,
    24: 317000
},

imagen: "img/207.jpg",
fotos: [
    "img/207.jpg",
    "img/2072.jpg",
    "img/2073.jpg",
    "img/2074.jpg",
    "img/2075.jpg",
    "img/2076.jpg",
    "img/2077.jpg",
    "img/2078.jpg"
]

},
    {  
    marca: "Renault",  
    modelo: "Kangoo II Express Emotion 1.6 SCe",  
    año: 2023,  
    motor: "1.6 nafta con GNC",  
    kilometraje: "36.791 km",  
    categoria: "Utilitarios",  
    precio: 32000000,  
    moneda: "ARS", 
    entregaMinima: 16300000,
    maximoFinanciar: 15700000,
    financiacionDecreditos: true,
    cuotasTradicional: {
        12: 1909073,
        18: 1431396,
        24: 1184091,
        36: 948164,
        48: 833860
    },
    cuotasUVA: {
        12: 1734735,
        18: 1283835,
        24: 1059340
    },
    transferencia: "Precio más gastos de transferencia.",  
    imagen: "img/kangoo0.jpg",   
    fotos: [  
        "img/kangoo0.jpg",  
        "img/kangoo01.jpg",  
        "img/kangoo03.jpg",  
        "img/kangoo04.jpg",  
        "img/kangoo05.jpg",  
        "img/kangoo07.jpg",
        "img/kangoo08.jpg"
    ]  
},

{
marca: "Volkswagen",
modelo: "Gol Power",
año: 2009,
motor: "1.6 nafta",
kilometraje: "180.000 km",
categoria: "Autos",
precio: 8500000,
moneda: "ARS",
entregaMinima: 5000000,
cuotasMaximas: 12,
financiacionPropia: true,
imagen: "img/gol.jpg",
fotos: [
"img/gol.jpg",
"img/gol2.jpg",
"img/gol3.jpg",
"img/gol4.jpg",
"img/gol5.jpg",
"img/gol6.jpg",
"img/gol7.jpg",
"img/gol8.jpg",
"img/gol9.jpg",
"img/gol10.jpg"
]
},

{  
    marca: "Toyota",  
    modelo: "RAV4",  
    año: 2004,  
    motor: "2.0 nafta",  
    kilometraje: "Consultar",  
    categoria: "SUV",  
    precio: 13900000,  
    moneda: "ARS", 
    entregaMinima: 10000000,
    cuotasMaximas: 12,
    financiacionPropia: true,
    traccion: "4x4",  
    caja: "Automática",  
    imagen: "img/rav4.jpg",

fotos: [
"img/rav4.jpg",
"img/rav42.jpg",
"img/rav43.jpg",
"img/rav44.jpg",
"img/rav45.jpg",
"img/rav46.jpg",
"img/rav47.jpg"
]
},

{  
    marca: "Ford",  
    modelo: "EcoSport XL Plus",  
    año: 2012,  
    motor: "1.6 nafta cadenero",  
    kilometraje: "158.000 km",  
    categoria: "SUV",  
    precio: 13500000,  
    moneda: "ARS",  
    entregaMinima: 7700000,
    maximoFinanciar: 5800000,
    financiacionDecreditos: true,
    cuotasTradicional: {
        12: 756799,  // Promedio entre $743.253 y $770.345[span_0](start_span)[span_0](end_span)
        18: 586662,  // Promedio entre $572.403 y $600.921[span_1](start_span)[span_1](end_span)
        24: 493550,  // Promedio entre $478.663 y $508.437[span_2](start_span)[span_2](end_span)
        36: 412185   // Promedio entre $397.128 y $427.242[span_3](start_span)[span_3](end_span)
    },
    // Nota: Para este vehículo el sistema indica que UVA no aplica[span_4](start_span)[span_4](end_span)
    transferencia: "Precio sin gastos de transferencia incluidos.",  
    imagen: "img/ecosport.jpg",

fotos: [
"img/ecosport.jpg",
"img/ecosport2.jpg",
"img/ecosport4.jpg",
"img/ecosport5.jpg",
"img/ecosport6.jpg"
]
},
{
    marca: "Honda",
    modelo: "Civic Si",
    año: 2009,
    motor: "2.0 nafta",
    kilometraje: "180.000 km",
    categoria: "Autos",
    tipo: "Deportivo",
    precio: 15000,
    moneda: "USD",
    estado: "Excelente estado",
    imagen: "img/civic.jpg",
    fotos: [
        "img/civic.jpg",
        "img/civic2.jpg",
        "img/civic3.jpg",
        "img/civic4.jpg",
        "img/civic5.jpg",
        "img/civic6.jpg",
        "img/civic7.jpg"
    ]
},

{  
    marca: "Toyota",  
    modelo: "Corolla XEi",  
    año: 2017,  
    motor: "1.8 nafta",  
    kilometraje: "160.000 km",  
    categoria: "Autos",  
    precio: 24500000,  
    moneda: "ARS", 
    entregaMinima: 12500000,
    maximoFinanciar: 12000000,
    financiacionDecreditos: true,
    cuotasTradicional: {
        12: 1539872,  // Promedio entre $1.510.054 y $1.569.690[span_1](start_span)[span_1](end_span)
        18: 1182332,  // Promedio entre $1.155.245 y $1.209.420[span_2](start_span)[span_2](end_span)
        24: 990478,   // Promedio entre $964.405 y $1.016.552[span_3](start_span)[span_3](end_span)
        36: 819437    // Promedio entre $793.467 y $845.408[span_4](start_span)[span_4](end_span)
    },
    cuotasUVA: {
        12: 1325912,  // Valor inicial informado (Hasta: No aplica)[span_5](start_span)[span_5](end_span)
        18: 981275,   // Valor inicial informado (Hasta: No aplica)[span_6](start_span)[span_6](end_span)
        24: 809687    // Valor inicial informado (Hasta: No aplica)[span_7](start_span)[span_7](end_span)
        // 36 meses no aplica para UVA en este caso[span_8](start_span)[span_8](end_span)
    },
    imagen: "img/corolla.jpg",   
    fotos: [  
        "img/corolla.jpg",  
        "img/corolla2.jpg",  
        "img/corolla3.jpg",  
        "img/corolla4.jpg",  
        "img/corolla5.jpg",  
        "img/corolla6.jpg"
    ]  
},

{  
    marca: "Renault",  
    modelo: "Duster Privilege",  
    año: 2015,  
    motor: "1.6 nafta",  
    kilometraje: "105.000 km",  
    categoria: "SUV",  
    precio: 19900000,  
    moneda: "ARS",
    entregaMinima: 11400000,
    maximoFinanciar: 8500000,
    financiacionDecreditos: true,
    manos: "2 manos de fábrica",  
    cuotasTradicional: {
        12: 1090742,  // Promedio entre $1.069.621 y $1.111.864[span_1](start_span)[span_1](end_span)
        18: 837485,   // Promedio entre $818.299 y $856.672[span_2](start_span)[span_2](end_span)
        24: 701589,   // Promedio entre $683.120 y $720.058[span_3](start_span)[span_3](end_span)
        36: 580435    // Promedio entre $562.039 y $598.831[span_4](start_span)[span_4](end_span)
    },
    cuotasUVA: {
        12: 939188,   // Valor inicial informado (Hasta: No aplica)[span_5](start_span)[span_5](end_span)
        18: 695070,   // Valor inicial informado (Hasta: No aplica)[span_6](start_span)[span_6](end_span)
        24: 573528    // Valor inicial informado (Hasta: No aplica)[span_7](start_span)[span_7](end_span)
        // 36 meses no aplica para UVA en este caso[span_8](start_span)[span_8](end_span)
    },
    manos: "2 manos de fábrica",  
    imagen: "img/duster.jpg",

    fotos: [
        "img/duster.jpg",
        "img/duster2.jpeg",
        "img/duster3.jpeg",
        "img/duster4.jpeg",
        "img/duster5.jpg",
        "img/duster6.jpg"
    ]
},

{  
    marca: "Ford",  
    modelo: "Ranger Limited",  
    año: 2023,  
    motor: "3.2 diésel",  
    kilometraje: "76.000 km",  
    categoria: "Pick-ups",  
    caja: "Automática",  
    traccion: "4x4",  
    manos: "Única mano de fábrica",  
    precio: 48900000,  
    moneda: "ARS",
    entregaMinima: 24450000,
    maximoFinanciar: 24450000,
    financiacionDecreditos: true,
    cuotasTradicional: {
        12: 3484199,  // Promedio entre $3.429.036 y $3.539.362[span_0](start_span)[span_0](end_span)
        18: 2628418,  // Promedio entre $2.571.042 y $2.685.795[span_1](start_span)[span_1](end_span)
        24: 2186511,  // Promedio entre $2.126.839 y $2.246.184[span_2](start_span)[span_2](end_span)
        36: 1756613,  // Promedio entre $1.703.072 y $1.810.154[span_3](start_span)[span_3](end_span)
        48: 1548980   // Promedio entre $1.497.761 y $1.600.199[span_4](start_span)[span_4](end_span)
    },
    cuotasUVA: {
        12: 3115894,  // Valor inicial informado (Hasta: No aplica)[span_5](start_span)[span_5](end_span)
        18: 2305996,  // Valor inicial informado (Hasta: No aplica)[span_6](start_span)[span_6](end_span)
        24: 1902764   // Valor inicial informado (Hasta: No aplica)[span_7](start_span)[span_7](end_span)
        // 36 y 48 meses no aplican para UVA en este caso[span_8](start_span)[span_8](end_span)
    },
    imagen: "img/ranger.jpg",   
    fotos: [  
        "img/ranger.jpg",  
        "img/ranger2.jpg",  
        "img/ranger3.jpg",  
        "img/ranger4.jpg",  
        "img/ranger5.jpg",  
        "img/ranger6.jpg",  
        "img/ranger7.jpg",  
        "img/ranger8.jpg"
    ]  
},

{  
    marca: "Fiat",  
    modelo: "Palio Attractive",  
    año: 2013,  
    motor: "1.4 nafta",  
    kilometraje: "160.000 km",  
    categoria: "Autos",  
    precio: 13500000,  
    moneda: "ARS",
    entregaMinima: 7600000,
    maximoFinanciar: 5900000,
    financiacionDecreditos: true,
    cuotasTradicional: {
        12: 756068,
        18: 582272,
        24: 486915,
        36: 403975
    },
    cuotasUVA: {
        12: 651907,
        18: 482460,
        24: 398096
    },

    imagen: "img/palioattractive.jpg",   
    fotos: [  
        "img/palioattractive.jpg",  
        "img/palioattractive2.jpg",  
        "img/palioattractive3.jpg",  
        "img/palioattractive4.jpg",  
        "img/palioattractive5.jpg"
    ]  
},

{  
    marca: "Fiat",  
    modelo: "Palio Fire",  
    año: 2013,  
    motor: "1.4 nafta",  
    kilometraje: "105.000 km",  
    categoria: "Autos",  
    precio: 12500000,  
    moneda: "ARS",  
    financiacionDecreditos: true,
    entregaMinima: 7900000,
    maximoFinanciar: 4600000,

    cuotasTradicional: {
        12: 589477,
        18: 453975,
        24: 379629,
        36: 314964
    },

    cuotasUVA: {
        12: 508266,
        18: 376155,
        24: 310380
    },
    imagen: "img/paliofire.jpg",   
    fotos: [  
        "img/paliofire.jpg",  
        "img/paliofire2.jpg",  
        "img/paliofire3.jpg",  
        "img/paliofire4.jpg",  
        "img/paliofire5.jpg",  
        "img/paliofire6.jpg",  
        "img/paliofire7.jpg",  
        "img/paliofire8.jpg"
    ]  
},

{  
    marca: "Ford",  
    modelo: "Kuga Titanium",  
    año: 2010,  
    motor: "2.5 nafta",  
    kilometraje: "206.000 km",  
    categoria: "SUV",  
    precio: 16900000,  
    moneda: "ARS", 
    entregaMinima: 11900000,
    maximoFinanciar: 5000000,
    cuotasMaximas: 12,
    financiacionPropia: true,
    traccion: "4x4",  
    caja: "Automática",  
    traccion: "4x4",  
    imagen: "img/kuga.jpg",   
    fotos: [  
        "img/kuga.jpg",  
        "img/kuga2.jpg",  
        "img/kuga3.jpg",  
        "img/kuga4.jpg",  
        "img/kuga5.jpg",  
        "img/kuga6.jpg",  
        "img/kuga7.jpg",  
        "img/kuga8.jpg",  
        "img/kuga9.jpg"
    ]  
},

{  
    marca: "Citroën",  
    modelo: "Berlingo 1.6 HDi",  
    año: 2012,  
    motor: "1.6 HDi",  
    kilometraje: "Consultar",  
    categoria: "Utilitarios",  
    tipo: "Familiar",  
    precio: 13900000,  
    moneda: "ARS",
    entregaMinima: 8800000,
    maximoFinanciar: 5100000,
    financiacionDecreditos: true,
    cuotasTradicional: {
        12: 665461,  // Promedio entre $653.550 y $677.372[span_1](start_span)[span_1](end_span)
        18: 515858,  // Promedio entre $503.320 y $528.396[span_2](start_span)[span_2](end_span)
        24: 433983,  // Promedio entre $420.893 y $447.074[span_3](start_span)[span_3](end_span)
        36: 362439   // Promedio entre $349.199 y $375.679[span_4](start_span)[span_4](end_span)
    },
    imagen: "img/berlingo.jpg",   
    fotos: [  
        "img/berlingo.jpg",  
        "img/berlingo2.jpg",  
        "img/berlingo3.jpg",  
        "img/berlingo4.jpg",  
        "img/berlingo5.jpg",  
        "img/berlingo6.jpg",  
        "img/berlingo7.jpg"
    ]  
},

{  
    marca: "Volkswagen",  
    modelo: "Amarok Highline Pack",  
    año: 2017,  
    motor: "2.0 TDI 180 CV",  
    kilometraje: "180.000 km",  
    categoria: "Pick-ups",  
    caja: "Manual",  
    traccion: "4x2",  
    precio: 34900000,  
    moneda: "ARS",
    entregaMinima: 20200000,
    maximoFinanciar: 14700000,
    financiacionDecreditos: true,
    equipamiento: [  
        "Butacas de cuero",  
        "Butacas eléctricas",  
        "Butacas calefaccionadas"  
    ],  
    cuotasTradicional: {
        12: 1886343,  // Promedio entre $1.849.816 y $1.922.871[span_1](start_span)[span_1](end_span)
        18: 1448357,  // Promedio entre $1.415.175 y $1.481.539[span_2](start_span)[span_2](end_span)
        24: 1213336,  // Promedio entre $1.181.396 y $1.245.277[span_3](start_span)[span_3](end_span)
        36: 1003811   // Promedio entre $971.997 y $1.035.625[span_4](start_span)[span_4](end_span)
    },
    cuotasUVA: {
        12: 1624243,  // Valor inicial informado (Hasta: No aplica)[span_5](start_span)[span_5](end_span)
        18: 1202062,  // Valor inicial informado (Hasta: No aplica)[span_6](start_span)[span_6](end_span)
        24: 991866    // Valor inicial informado (Hasta: No aplica)[span_7](start_span)[span_7](end_span)
        // 36 meses no aplica para UVA en este caso[span_8](start_span)[span_8](end_span)
    },

    equipamiento: [  
        "Butacas de cuero",  
        "Butacas eléctricas",  
        "Butacas calefaccionadas"  
    ],  

    imagen: "img/amarok.jpg",  

    fotos: [  
        "img/amarok.jpg",  
        "img/amarok2.jpg",  
        "img/amarok3.jpg",  
        "img/amarok4.jpg",  
        "img/amarok5.jpg",  
        "img/amarok6.jpg",  
        "img/amarok7.jpg"  
    ]  
}, 
{  
    marca: "Renault",  
    modelo: "Kangoo PH3 Confort",  
    año: 2016,  
    motor: "1.6 nafta y GNC",  
    kilometraje: "Consultar",  
    categoria: "Utilitarios",  
    tipo: "Furgón",  
    precio: 15000000,  
    moneda: "ARS",  
    entregaMinima: 8200000,
    maximoFinanciar: 6800000,
    financiacionDecreditos: true,
    cuotasTradicional: {
        12: 872594,  
        18: 669988,  
        24: 561271,  
        36: 464348   
    },
    cuotasUVA: {
        12: 751350,  
        18: 556056,  
        24: 458823   
    },
    imagen: "img/kangoo.jpg",   
    fotos: [  
        "img/kangoo.jpg", 
        "img/kangoo2.jpg", 
        "img/kangoo3.jpg", 
        "img/kangoo4.jpg",
        "img/kangoo5.jpg", 
        "img/kangoo6.jpg", 
        "img/kangoo7.jpg", 
        "img/kangoo8.jpg", 
        "img/kangoo9.jpg"
    ]  
},
  {  
    marca: "Sumo",  
    modelo: "Tanck 250 Parrillero Cardánico",  
    año: 2010,  
    motor: "250 cc",  
    kilometraje: "Consultar",  
    categoria: "Motos y Cuatriciclos",  
    precio: 4900000,  
    moneda: "ARS", 
    entregaMinima: 0,
    maximoFinanciar: 0,
    financiacionDecreditos: false,
    transferencia: "Vehículo de dueño directo - Contado efectivo.",  
    imagen: "img/sumo.jpg",   
    fotos: [  
        "img/sumo.jpg",  
        "img/sumo2.jpg",  
        "img/sumo3.jpg",  
        "img/sumo4.jpg"
    ]  
},
{  
    marca: "KTM",  
    modelo: "Adventure 390",  
    año: 2021,  
    motor: "390 cc",  
    kilometraje: "1.834 km",  
    categoria: "Motos y Cuatriciclos",  
    precio: 8500,  
    moneda: "USD", 
    entregaMinima: 0,
    maximoFinanciar: 0,
    financiacionDecreditos: false,
    transferencia: "Consignación - Precio contado efectivo. Radicación Mendoza.",  
    imagen: "img/ktmt.jpg",   
    fotos: [  
        "img/ktmt.jpg",  
        "img/ktm2.jpg",  
        "img/ktm3.jpg",  
        "img/ktm4.jpg"
    ]  
},
{  
    marca: "Corven",  
    modelo: "Hunter 150",  
    año: 2025,  
    motor: "150 cc",  
    kilometraje: "3.738 km",  
    categoria: "Motos y Cuatriciclos",  
    precio: 2500000,  
    moneda: "ARS", 
    entregaMinima: 0,
    maximoFinanciar: 0,
    financiacionDecreditos: false,
    transferencia: "Consignación - Precio de contado. Radicación Mendoza.",  
    imagen: "img/hunter.jpg",   
    fotos: [  
        "img/hunter.jpg",  
        "img/hunter2.jpg",  
        "img/hunter3.jpg",  
        "img/hunter4.jpg"
    ]  
},
{  
    marca: "Gaf",  
    modelo: "70cc Enduro Infantil",  
    año: 2009,  
    motor: "70 cc",  
    kilometraje: "Consultar",  
    categoria: "Motos y Cuatriciclos",  
    precio: 1300000,  
    moneda: "ARS", 
    entregaMinima: 0,
    maximoFinanciar: 0,
    financiacionDecreditos: false,
    transferencia: "Contado efectivo.",  
    imagen: "img/gaf.jpg",   
    fotos: [  
        "img/gaf.jpg",  
        "img/gaf2.jpg",  
        "img/gaf3.jpg",  
        "img/gaf4.jpg"
    ]  
},
  
];

// ==============================
// FORMATEAR PRECIO
// ==============================

function mostrarPrecio(vehiculo) {
    if (!vehiculo.precio) {  
        return "Consultar";  
    }  
    if (vehiculo.moneda === "USD") {  
        return "USD " + vehiculo.precio.toLocaleString("es-AR");  
    }  
    return "$" + vehiculo.precio.toLocaleString("es-AR");
}

// ==============================
// CATÁLOGO AUTOMÁTICO
// ==============================

function mostrarCatalogo() {
    let contenedor = document.getElementById("catalogoVehiculos");  
    if (!contenedor) return;
    contenedor.innerHTML = "";  

    vehiculos.forEach(function(vehiculo, indice) {  
        let tarjeta = document.createElement("div");  
        tarjeta.className = "vehiculo";  
        tarjeta.dataset.categoria = vehiculo.categoria;  

        tarjeta.innerHTML = `  
            <img src="${vehiculo.imagen}" alt="${vehiculo.marca} ${vehiculo.modelo}">  
            <h3>${vehiculo.marca} ${vehiculo.modelo}</h3>  
            <p>Año: ${vehiculo.año}</p>  
            <p>Motor: ${vehiculo.motor}</p>  
            <p>Kilometraje: ${vehiculo.kilometraje}</p>  
            <p>
                Precio:
                <span class="precio-vehiculo">${mostrarPrecio(vehiculo)}</span>
            </p>
            <p>
                <small>${vehiculo.transferencia ? vehiculo.transferencia : "Precio sin gastos de transferencia."}</small>
            </p>  
            <button onclick="mostrarVehiculoNuevo(${indice})">Ver vehículo</button>  
            <div id="detalle-${indice}"></div>  
        `;  
        contenedor.appendChild(tarjeta);  
    });
}

// ==============================
// DETALLE DEL VEHÍCULO
// ==============================

function mostrarVehiculoNuevo(indice) {
    let vehiculo = vehiculos[indice];
    let detalle = document.getElementById("detalle-" + indice);
    if (!detalle) return;

    if (detalle.innerHTML !== "") {
        detalle.innerHTML = "";
        return;
    }

    let fotos = vehiculo.fotos || [vehiculo.imagen];

    detalle.innerHTML = `
        <div class="detalle-generado">
            <h3>${vehiculo.marca} ${vehiculo.modelo}</h3>
            <img id="fotoPrincipal-${indice}" src="${fotos[0]}" alt="${vehiculo.marca} ${vehiculo.modelo}" data-posicion="0">
            <div class="galeria-fotos">
                ${fotos.map(function(foto, posicion) {
                    return `<img src="${foto}" alt="${vehiculo.marca}${vehiculo.modelo}" onclick="cambiarFoto(${indice},${posicion})">`;
                }).join("")}
            </div>
            <div class="controles-fotos">
                <button onclick="fotoAnterior(${indice})">◀ Anterior</button>
                <button onclick="fotoSiguiente(${indice})">Siguiente ▶</button>
            </div>
            <p><strong>Año:</strong> ${vehiculo.año}</p>
            <p><strong>Motor:</strong> ${vehiculo.motor}</p>
            <p><strong>Kilometraje:</strong> ${vehiculo.kilometraje}</p>
            ${vehiculo.tipo ? `<p><strong>Tipo:</strong> ${vehiculo.tipo}</p>` : ""}
            ${vehiculo.caja ? `<p><strong>Caja:</strong> ${vehiculo.caja}</p>` : ""}
            ${vehiculo.traccion ? `<p><strong>Tracción:</strong> ${vehiculo.traccion}</p>` : ""}
            ${vehiculo.manos ? `<p><strong>Manos:</strong> ${vehiculo.manos}</p>` : ""}
            ${vehiculo.estado ? `<p><strong>Estado:</strong> ${vehiculo.estado}</p>` : ""}
            ${vehiculo.equipamiento ? `<p><strong>Equipamiento:</strong></p><ul>${vehiculo.equipamiento.map(item => `<li>${item}</li>`).join("")}</ul>` : ""}
            <p><strong>Precio:</strong> ${mostrarPrecio(vehiculo)}</p>
            ${(vehiculo.financiacionPropia || vehiculo.financiacionDecreditos) ? `<button onclick="simularCuotas(${indice})">💳 Simular cuotas</button>` : ""}
            <p><small>Precio sin gastos de transferencia.</small></p>
            <button onclick="consultarVehiculo(${indice})">🛒 Comprar</button>
        </div>
    `;
}

// ==============================
// SIMULADOR DE CUOTAS (DEFINITIVO)
// ==============================

function simularCuotas(indice) {
    let vehiculo = vehiculos[indice];
    let detalle = document.getElementById("detalle-" + indice);
    if (!detalle) return;

    let simuladorExistente = detalle.querySelector(".simulador-cuotas");
    if (simuladorExistente) {
        simuladorExistente.remove();
        return;
    }

    if (vehiculo.cuotasTradicional) {
        let entregaInicial = vehiculo.entregaMinima;
        let maxFinanciarInicial = vehiculo.precio - entregaInicial;

        let htmlTradicional = `
            <div style="margin-top: 15px; background: #f9f9f9; padding: 10px; border-radius: 6px;">
                <p><strong>Financiación Tradicional (Fijas y en pesos):</strong></p>
                <p>• 12 Cuotas de: <strong id="trad-12-${indice}">$${vehiculo.cuotasTradicional[12].toLocaleString("es-AR")}</strong></p>
                <p>• 18 Cuotas de: <strong id="trad-18-${indice}">$${vehiculo.cuotasTradicional[18].toLocaleString("es-AR")}</strong></p>
                <p>• 24 Cuotas de: <strong id="trad-24-${indice}">$${vehiculo.cuotasTradicional[24].toLocaleString("es-AR")}</strong></p>
                <p>• 36 Cuotas de: <strong id="trad-36-${indice}">$${vehiculo.cuotasTradicional[36].toLocaleString("es-AR")}</strong></p>
            </div>
        `;

        let htmlUVA = "";
        if (vehiculo.cuotasUVA) {
            htmlUVA = `
                <div style="margin-top: 10px; background: #f9f9f9; padding: 10px; border-radius: 6px;">
                    <p><strong>Financiación UVA:</strong></p>
                    <p>• 12 Cuotas de: <strong id="uva-12-${indice}">$${vehiculo.cuotasUVA[12] ? vehiculo.cuotasUVA[12].toLocaleString("es-AR") : "No aplica"}</strong></p>
                    <p>• 18 Cuotas de: <strong id="uva-18-${indice}">$${vehiculo.cuotasUVA[18] ? vehiculo.cuotasUVA[18].toLocaleString("es-AR") : "No aplica"}</strong></p>
                    <p>• 24 Cuotas de: <strong id="uva-24-${indice}">$${vehiculo.cuotasUVA[24] ? vehiculo.cuotasUVA[24].toLocaleString("es-AR") : "No aplica"}</strong></p>
                </div>
            `;
        }

        detalle.innerHTML += `
            <div class="simulador-cuotas" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; margin-top: 15px; background: #fff;">
                <h4 style="margin-top: 0;">💳 Simulación de financiación</h4>
                <p><strong>Valor del auto:</strong> ${mostrarPrecio(vehiculo)}</p>
                <p><strong>Entrega mínima:</strong> $${vehiculo.entregaMinima.toLocaleString("es-AR")}</p>
                <label><strong>Elegí tu entrega:</strong></label>
                <input type="range" min="${vehiculo.entregaMinima}" max="${vehiculo.precio}" step="100000" value="${entregaInicial}" style="width: 100%; margin: 10px 0;" oninput="actualizarSimulacion(${indice}, this.value)">
                <p>Entrega seleccionada: <strong id="entrega-${indice}">$${entregaInicial.toLocaleString("es-AR")}</strong></p>
                <p><strong>Máximo a financiar:</strong> <span id="financiar-${indice}">$${maxFinanciarInicial.toLocaleString("es-AR")}</span></p>
                ${htmlTradicional}
                ${htmlUVA}
            </div>
        `;
    } else {
        let entregaInicial = vehiculo.entregaMinima || (vehiculo.precio * 0.5);
        let maxFinanciarInicial = vehiculo.precio - entregaInicial;
        let cuotaDefault = Math.round(((maxFinanciarInicial * 1.96) / 12) / 1000) * 1000;

        detalle.innerHTML += `
            <div class="simulador-cuotas">
                <h4>💳 Simulación de financiación</h4>
                <p><strong>Valor del auto:</strong> ${mostrarPrecio(vehiculo)}</p>
                <p><strong>Entrega mínima:</strong> $${vehiculo.entregaMinima ? vehiculo.entregaMinima.toLocaleString("es-AR") : 0}</p>
                <label><strong>Elegí tu entrega:</strong></label>
                <input type="range" min="${vehiculo.entregaMinima || 0}" max="${vehiculo.precio}" step="100000" value="${entregaInicial}" oninput="actualizarSimulacion(${indice}, this.value)">
                <p>Entrega seleccionada: <strong id="entrega-${indice}">$${entregaInicial.toLocaleString("es-AR")}</strong></p>
                <p><strong>Máximo a financiar:</strong> <span id="financiar-${indice}">$${maxFinanciarInicial.toLocaleString("es-AR")}</span></p>
                <p><strong>12 cuotas de:</strong> <span id="cuota-${indice}">$${cuotaDefault.toLocaleString("es-AR")}</span> fijas y en pesos</p>
            </div>
        `;
    }
}

function actualizarSimulacion(indice, valorEntrega) {
    let vehiculo = vehiculos[indice];
    let entrega = Number(valorEntrega);
    let maximoFinanciar = vehiculo.precio - entrega;

    document.getElementById("entrega-" + indice).textContent = "$" + entrega.toLocaleString("es-AR");
    document.getElementById("financiar-" + indice).textContent = "$" + maximoFinanciar.toLocaleString("es-AR");

    if (vehiculo.cuotasTradicional) {
        let proporcion = vehiculo.maximoFinanciar ? (maximoFinanciar / vehiculo.maximoFinanciar) : 1;
        
        if(document.getElementById("trad-12-" + indice)) 
            document.getElementById("trad-12-" + indice).textContent = "$" + Math.round(vehiculo.cuotasTradicional[12] * proporcion).toLocaleString("es-AR");
        if(document.getElementById("trad-18-" + indice)) 
            document.getElementById("trad-18-" + indice).textContent = "$" + Math.round(vehiculo.cuotasTradicional[18] * proporcion).toLocaleString("es-AR");
        if(document.getElementById("trad-24-" + indice)) 
            document.getElementById("trad-24-" + indice).textContent = "$" + Math.round(vehiculo.cuotasTradicional[24] * proporcion).toLocaleString("es-AR");
        if(document.getElementById("trad-36-" + indice)) 
            document.getElementById("trad-36-" + indice).textContent = "$" + Math.round(vehiculo.cuotasTradicional[36] * proporcion).toLocaleString("es-AR");
        
        if (vehiculo.cuotasUVA) {
            if(document.getElementById("uva-12-" + indice) && vehiculo.cuotasUVA[12]) 
                document.getElementById("uva-12-" + indice).textContent = "$" + Math.round(vehiculo.cuotasUVA[12] * proporcion).toLocaleString("es-AR");
            if(document.getElementById("uva-18-" + indice) && vehiculo.cuotasUVA[18]) 
                document.getElementById("uva-18-" + indice).textContent = "$" + Math.round(vehiculo.cuotasUVA[18] * proporcion).toLocaleString("es-AR");
            if(document.getElementById("uva-24-" + indice) && vehiculo.cuotasUVA[24]) 
                document.getElementById("uva-24-" + indice).textContent = "$" + Math.round(vehiculo.cuotasUVA[24] * proporcion).toLocaleString("es-AR");
        }
    } else {
        let cuota = Math.round(((maximoFinanciar * 1.96) / 12) / 1000) * 1000;
        if(document.getElementById("cuota-" + indice)) {
            document.getElementById("cuota-" + indice).textContent = "$" + cuota.toLocaleString("es-AR");
        }
    }
}

// ==============================
// CAMBIAR FOTO
// ==============================

function cambiarFoto(indice, posicion) {
    let vehiculo = vehiculos[indice];  
    let fotos = vehiculo.fotos || [vehiculo.imagen];  
    let fotoPrincipal = document.getElementById("fotoPrincipal-" + indice);  
    if (!fotoPrincipal) return;
    fotoPrincipal.src = fotos[posicion];  
    fotoPrincipal.dataset.posicion = posicion;
}

function fotoAnterior(indice) {
    let vehiculo = vehiculos[indice];  
    let fotos = vehiculo.fotos || [vehiculo.imagen];  
    let fotoPrincipal = document.getElementById("fotoPrincipal-" + indice);  
    if (!fotoPrincipal) return;
    let posicion = Number(fotoPrincipal.dataset.posicion || 0);  
    posicion--;  
    if (posicion < 0) {  
        posicion = fotos.length - 1;  
    }  
    cambiarFoto(indice, posicion);
}

function fotoSiguiente(indice) {
    let vehiculo = vehiculos[indice];  
    let fotos = vehiculo.fotos || [vehiculo.imagen];  
    let fotoPrincipal = document.getElementById("fotoPrincipal-" + indice);  
    if (!fotoPrincipal) return;
    let posicion = Number(fotoPrincipal.dataset.posicion || 0);  
    posicion++;  
    if (posicion >= fotos.length) {  
        posicion = 0;  
    }  
    cambiarFoto(indice, posicion);
}

// ==============================
// CONSULTAR VEHÍCULO
// ==============================

function consultarVehiculo(indice) {
    let vehiculo = vehiculos[indice];  
    let mensaje = "Hola, quiero comprar el vehículo " + vehiculo.marca + " " + vehiculo.modelo + " " + vehiculo.año + ".";  
    let url = "https://wa.me/542622592664?text=" + encodeURIComponent(mensaje);  
    window.open(url, "_blank");
}

// ==============================
// NAVEGACIÓN Y FILTROS
// ==============================

function irA(seccion) {
    let elemento = document.getElementById(seccion);  
    if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
    }
}

function filtrarVehiculos(categoria) {
    let vehiculosHTML = document.querySelectorAll(".vehiculo");  
    vehiculosHTML.forEach(function(vehiculo) {  
        if (categoria === "Todos" || vehiculo.dataset.categoria === categoria) {  
            vehiculo.style.display = "block";  
        } else {  
            vehiculo.style.display = "none";  
        }  
    });
}

// ==============================
// FINANCIACIÓN GENERAL
// ==============================

function mostrarNecesitoFinanciar() {
    let contenido = document.getElementById("contenidoFinanciacion");  
    if (!contenido) return;
    contenido.innerHTML = `  
        <div class="financiacion-box">  
            <h3>¿Cuánto necesitás financiar?</h3>  
            <input type="number" id="montoNecesario" placeholder="Ej: 5000000">  
            <br>  
            <button onclick="enviarMontoFinanciacion()">Consultar financiación</button>  
        </div>  
    `;
}

function enviarMontoFinanciacion() {
    let monto = Number(document.getElementById("montoNecesario").value);  
    if (monto <= 0) {  
        alert("Ingresá un monto válido.");  
        return;  
    }  
    let mensaje = "Hola, quiero consultar financiación.\n\nNecesito financiar aproximadamente: $" + monto.toLocaleString("es-AR");  
    let url = "https://wa.me/542622592664?text=" + encodeURIComponent(mensaje);  
    window.open(url, "_blank");
}

// ==============================
// SIMULADOR GENERAL INTELIGENTE
// ==============================

function mostrarSimulador() {
    let contenido = document.getElementById("contenidoFinanciacion");
    if (!contenido) return;

    let opcionesVehiculos = '<option value="">-- Seleccioná un vehículo del catálogo --</option>';
    if (typeof vehiculos !== 'undefined' && vehiculos.length > 0) {
        vehiculos.forEach(function(auto, index) {
            if (auto.moneda === "ARS" && auto.precio) {
                opcionesVehiculos += `<option value="${index}">${auto.marca} ${auto.modelo} (${auto.año}) - $${auto.precio.toLocaleString("es-AR")}</option>`;
            }
        });
    }

    contenido.innerHTML = `  
        <div class="financiacion-box" style="background: white; padding: 20px; border-radius: 10px; margin-top: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: left;">  
            <h3 style="color: #a83232; margin-bottom: 15px; text-align: center;">Simulador de Cuotas</h3>  
            <label style="font-weight: bold; display: block; margin-bottom: 5px;">1. Elegí el vehículo:</label>
            <select id="vehiculoSimuladorSelect" onchange="seleccionarVehiculoGeneral()" style="width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 5px; border: 1px solid #ccc;">
                ${opcionesVehiculos}
            </select>  
            <div id="seccionDatosSimulador" style="display: none;">
                <p id="infoPrecioGeneral" style="font-weight: bold; color: #333; margin-bottom: 10px;"></p>
                <label style="font-weight: bold; display: block; margin-bottom: 5px;">Entrega / Anticipo:</label>
                <input type="range" id="rangoEntregaGeneral" min="0" max="100" value="0" step="100000" oninput="actualizarMontoEntregaGeneral()" style="width: 100%; margin-bottom: 5px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span id="textoMinEntregaGeneral" style="font-size: 0.9em; color: #666;">Mín: $0</span>
                    <span id="textoValorVehiculoGeneral" style="font-size: 0.9em; color: #666;">Precio Total</span>
                </div>
                <input type="number" id="inputEntregaManualGeneral" oninput="actualizarBarraEntregaGeneral()" style="width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 5px; border: 1px solid #ccc;" placeholder="Monto de entrega">
                <div id="resultadoCuotasGeneral" style="margin-top: 15px; border-top: 1px solid #eee; padding-top: 15px;"></div>
            </div>
        </div>  
    `;
}

function seleccionarVehiculoGeneral() {
    let index = document.getElementById('vehiculoSimuladorSelect').value;
    let seccionDatos = document.getElementById('seccionDatosSimulador');
    if (!seccionDatos) return;
    
    if (index === "") {
        seccionDatos.style.display = 'none';
        return;
    }

    let auto = vehiculos[index];
    seccionDatos.style.display = 'block';

    document.getElementById('infoPrecioGeneral').innerText = `Precio de lista: $${auto.precio.toLocaleString('es-AR')}`;

    let entregaMin = auto.entregaMinima || Math.round(auto.precio * 0.5);
    let rango = document.getElementById('rangoEntregaGeneral');
    
    rango.min = entregaMin;
    rango.max = auto.precio;
    rango.value = entregaMin;

    document.getElementById('inputEntregaManualGeneral').value = entregaMin;
    document.getElementById('textoMinEntregaGeneral').innerText = `Mínimo: $${entregaMin.toLocaleString('es-AR')}`;
    document.getElementById('textoValorVehiculoGeneral').innerText = `Total: $${auto.precio.toLocaleString('es-AR')}`;

    calcularSimulacionGeneralDinamica();
}

function actualizarMontoEntregaGeneral() {
    let valorRango = document.getElementById('rangoEntregaGeneral').value;
    document.getElementById('inputEntregaManualGeneral').value = valorRango;
    calcularSimulacionGeneralDinamica();
}

function actualizarBarraEntregaGeneral() {
    let valorInput = document.getElementById('inputEntregaManualGeneral').value;
    let rango = document.getElementById('rangoEntregaGeneral');
    if (valorInput >= Number(rango.min) && valorInput <= Number(rango.max)) {
        rango.value = valorInput;
    }
    calcularSimulacionGeneralDinamica();
}

function calcularSimulacionGeneralDinamica() {
    let index = document.getElementById('vehiculoSimuladorSelect').value;
    if (index === "") return;

    let auto = vehiculos[index];
    let entrega = parseFloat(document.getElementById('inputEntregaManualGeneral').value) || 0;
    let financiar = auto.precio - entrega;
    let contenedorResultado = document.getElementById('resultadoCuotasGeneral');
    if (!contenedorResultado) return;

    if (financiar <= 0) {
        contenedorResultado.innerHTML = `<p style="color: red; font-weight: bold;">La entrega cubre el valor total del vehículo.</p>`;
        return;
    }

    let htmlResultados = `<p style="font-weight: bold; color: #333; margin-bottom: 10px;">Monto a financiar: $${financiar.toLocaleString('es-AR')}</p>`;

    if (auto.cuotasTradicional) {
        let baseMaxFinanciar = auto.maximoFinanciar || (auto.precio - auto.entregaMinima);
        let proporcion = baseMaxFinanciar > 0 ? (financiar / baseMaxFinanciar) : 1;

        htmlResultados += `<h4 style="color: #a83232; margin-bottom: 8px;">Opciones de Financiación Tradicional (Fijas y en pesos):</h4>`;
        
        for (let plazo in auto.cuotasTradicional) {
            let valorCuota = Math.round(auto.cuotasTradicional[plazo] * proporcion);
            htmlResultados += `<div style="background: #f9f9f9; padding: 8px 12px; margin-bottom: 6px; border-radius: 5px; display: flex; justify-content: space-between;">
                <span><b>${plazo} Cuotas</b></span>
                <span style="color: #2e7d32; font-weight: bold;">$${valorCuota.toLocaleString('es-AR')} /mes</span>
            </div>`;
        }

        if (auto.cuotasUVA) {
            htmlResultados += `<h4 style="color: #a83232; margin: 12px 0 8px 0;">Opciones de Financiación UVA:</h4>`;
            for (let plazoUva in auto.cuotasUVA) {
                let valorUva = auto.cuotasUVA[plazoUva] ? Math.round(auto.cuotasUVA[plazoUva] * proporcion) : 'No aplica';
                htmlResultados += `<div style="background: #f9f9f9; padding: 8px 12px; margin-bottom: 6px; border-radius: 5px; display: flex; justify-content: space-between;">
                    <span><b>${plazoUva} Cuotas (UVA)</b></span>
                    <span style="color: #1976d2; font-weight: bold;">${typeof valorUva === 'number' ? '$' + valorUva.toLocaleString('es-AR') + ' /mes' : valorUva}</span>
                </div>`;
            }
        }
    } else {
        let cuotaDefault = Math.round(((financiar * 1.96) / 12) / 1000) * 1000;
        htmlResultados += `
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
                <p><strong>12 cuotas de:</strong> <span style="color: #2e7d32; font-weight: bold;">$${cuotaDefault.toLocaleString("es-AR")}</span> fijas y en pesos</p>
            </div>
        `;
    }

    htmlResultados += `
        <div style="margin-top: 15px; padding-top: 10px; border-top: 1px dashed #ddd; text-align: center;">
            <p style="font-size: 0.85em; color: #d32f2f; font-weight: 600; line-height: 1.4;">
                * Cuotas estimadas de carácter orientativo. Las operaciones están sujetas a revisión crediticia y resolución bancaria final.
            </p>
        </div>
    `;

    contenedorResultado.innerHTML = htmlResultados;
}

// ==============================
// CONTACTO Y WHATSAPP
// ==============================

function mostrarWhatsApp() {
    let submenu = document.getElementById("submenu-whatsapp");
    if (!submenu) return;
    submenu.style.display = (submenu.style.display === "none") ? "block" : "none";
}
// ==============================
// CONTACTO WHATSAPP CON VEHÍCULO
// ==============================

let numeroWhatsAppSeleccionado = "";
let vehiculoContactoSeleccionado = null;
let modalidadContactoSeleccionada = "";

function iniciarContactoWhatsApp(tipoDestino) {

    if (tipoDestino === "agencia") {
        numeroWhatsAppSeleccionado = "5492622560680";

    } else if (tipoDestino === "dario") {
        numeroWhatsAppSeleccionado = "5492622592664";

    } else {
        return;
    }

    vehiculoContactoSeleccionado = null;
    modalidadContactoSeleccionada = "";

    let modal = document.getElementById("modalContactoWsp");

    if (!modal) {
        alert("No se encontró el formulario de contacto.");
        return;
    }

    let selector = document.getElementById("vehiculoContacto");

    if (!selector) {
        alert("No se encontró el selector de vehículos.");
        return;
    }

    selector.innerHTML =
        '<option value="">Seleccionar vehículo...</option>';

    vehiculos.forEach(function(vehiculo, indice) {

        let opcion = document.createElement("option");

        opcion.value = indice;

        opcion.textContent =
            vehiculo.marca +
            " " +
            vehiculo.modelo +
            " " +
            vehiculo.año +
            " — " +
            mostrarPrecio(vehiculo);

        selector.appendChild(opcion);
    });

    let modalidad =
        document.getElementById("modalidadContacto");

    if (modalidad) {
        modalidad.style.display = "none";
    }

    let resumen =
        document.getElementById("resumenContacto");

    if (resumen) {
        resumen.style.display = "none";
    }

    let resumenVehiculo =
        document.getElementById("resumenVehiculoContacto");

    let resumenModalidad =
        document.getElementById("resumenModalidadContacto");

    if (resumenVehiculo) {
        resumenVehiculo.innerHTML = "";
    }

    if (resumenModalidad) {
        resumenModalidad.innerHTML = "";
    }

    modal.style.display = "flex";
}

function seleccionarVehiculoContacto() {

    let selector =
        document.getElementById("vehiculoContacto");

    if (!selector) return;

    let indice = selector.value;

    if (indice === "") {

        vehiculoContactoSeleccionado = null;

        let modalidad =
            document.getElementById("modalidadContacto");

        let resumen =
            document.getElementById("resumenContacto");

        if (modalidad) {
            modalidad.style.display = "none";
        }

        if (resumen) {
            resumen.style.display = "none";
        }

        return;
    }

    vehiculoContactoSeleccionado =
        vehiculos[indice];

    let modalidad =
        document.getElementById("modalidadContacto");

    if (modalidad) {
        modalidad.style.display = "block";
    }

    modalidadContactoSeleccionada = "";

    let resumen =
        document.getElementById("resumenContacto");

    if (resumen) {
        resumen.style.display = "none";
    }
}

function seleccionarModalidadContacto(modalidad) {

    if (!vehiculoContactoSeleccionado) {

        alert("Primero seleccioná un vehículo.");

        return;
    }

    modalidadContactoSeleccionada =
        modalidad;

    let resumenVehiculo =
        document.getElementById("resumenVehiculoContacto");

    let resumenModalidad =
        document.getElementById("resumenModalidadContacto");

    if (resumenVehiculo) {

        resumenVehiculo.innerHTML =
            "<strong>🚗 Vehículo:</strong> " +
            vehiculoContactoSeleccionado.marca +
            " " +
            vehiculoContactoSeleccionado.modelo +
            " " +
            vehiculoContactoSeleccionado.año +
            "<br>" +
            "<strong>💰 Precio:</strong> " +
            mostrarPrecio(
                vehiculoContactoSeleccionado
            );
    }

    if (resumenModalidad) {

        resumenModalidad.innerHTML =
            "<strong>💳 Modalidad de pago:</strong> " +
            modalidadContactoSeleccionada;
    }

    let resumen =
        document.getElementById("resumenContacto");

    if (resumen) {
        resumen.style.display = "block";
    }
}

function continuarWhatsAppContacto() {

    if (!vehiculoContactoSeleccionado) {

        alert("Seleccioná un vehículo.");

        return;
    }

    if (!modalidadContactoSeleccionada) {

        alert("Seleccioná una modalidad de pago.");

        return;
    }

    let nombreVehiculo =
        vehiculoContactoSeleccionado.marca +
        " " +
        vehiculoContactoSeleccionado.modelo +
        " " +
        vehiculoContactoSeleccionado.año;

    let mensaje =
        "Hola, quiero consultar por este vehículo: " +
        nombreVehiculo +
        " de Automotores del Valle.\n\n" +

        "Precio publicado: " +
        mostrarPrecio(
            vehiculoContactoSeleccionado
        ) +

        "\n" +

        "Modalidad de pago: " +
        modalidadContactoSeleccionada +

        "\n\n" +

        "Me gustaría recibir asesoramiento " +
        "sobre disponibilidad y condiciones.";

    let url =
        "https://wa.me/" +
        numeroWhatsAppSeleccionado +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(url, "_blank");

    cerrarContactoWhatsApp();
}

function cerrarContactoWhatsApp() {

    let modal =
        document.getElementById("modalContactoWsp");

    if (modal) {
        modal.style.display = "none";
    }

    vehiculoContactoSeleccionado = null;
    modalidadContactoSeleccionada = "";
}

function abrirWhatsApp() {
    let mensaje = "Hola, quiero hacer una consulta sobre los vehículos disponibles.";
    let url = "https://wa.me/542622592664?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

function abrirWhatsAppAgencia() {
    let mensaje = "Hola, quiero consultar por autos o vehículos disponibles. Me comunico con Automotores del Valle.";
    let url = "https://wa.me/5492622560680?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

function abrirWhatsAppDario() {
    let mensaje = "Hola, quiero consultar por autos o vehículos disponibles. Me comunico con Darío Troncozo.";
    let url = "https://wa.me/5492622592664?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

function abrirInstagram() {
    window.open("https://www.instagram.com/_automotoresdelvalle/", "_blank");
}

function abrirFacebook() {
    window.open("https://www.facebook.com/share/1DtYZCpmQ7/", "_blank");
}

function abrirTikTok() {
    window.open("https://www.tiktok.com/", "_blank");
}

function abrirMapa() {
    window.open("https://www.google.com/maps/search/?api=1&query=Liniers+403,+Tupungato,+Mendoza,+Argentina", "_blank");
}

// ==============================
// CUESTIONARIO INTELIGENTE WHATSAPP
// ==============================

let autoSeleccionadoConsulta = "Consulta general desde la web";

function abrirCuestionario() {
    document.getElementById("modalWsp").style.display = "flex";
    document.getElementById("seccionPresupuesto").style.display = "none";
    document.getElementById("seccionModalidad").style.display = "none";
    document.getElementById("inputPresupuesto").value = "";
    document.getElementById("resultadoBusquedaPresupuesto").innerHTML = "";
    autoSeleccionadoConsulta = "Consulta general desde la web";
}

function cerrarCuestionario() {
    document.getElementById("modalWsp").style.display = "none";
}

function seleccionarFlujo(tipo) {
    if (tipo === 'presupuesto') {
        document.getElementById("seccionPresupuesto").style.display = "block";
        document.getElementById("seccionModalidad").style.display = "none";
    } else {
        document.getElementById("seccionPresupuesto").style.display = "none";
        document.getElementById("textoVehiculoElegido").innerText = "Vehículo: Consulta general";
        document.getElementById("seccionModalidad").style.display = "block";
    }
}

function buscarAutosPorPresupuesto() {
    let presupuestoIngresado = Number(document.getElementById("inputPresupuesto").value);
    let contenedorResultado = document.getElementById("resultadoBusquedaPresupuesto");
    contenedorResultado.innerHTML = "";

    if (presupuestoIngresado <= 0) {  
        contenedorResultado.innerHTML = "<p style='color: red; font-size: 14px;'>Ingresá un monto válido.</p>";  
        return;  
    }  

    let valorDolarReferencia = 1550;  

    let autosEncontrados = vehiculos.filter(function(auto) {  
        if (!auto.precio) return false;   
        let precioEnPesosReal = auto.precio;  
        if (auto.moneda === "USD") {  
            precioEnPesosReal = auto.precio * valorDolarReferencia;  
        }  
        return precioEnPesosReal <= presupuestoIngresado;  
    });  

    if (autosEncontrados.length === 0) {  
        contenedorResultado.innerHTML = "<p style='font-size: 14px; color: #555;'>No encontramos vehículos por ese monto exacto, pero podés consultarnos igual.</p>";  
        let btnGeneral = document.createElement("button");  
        btnGeneral.innerText = "Consultar con un asesor";  
        btnGeneral.className = "btn-enviar-final";  
        btnGeneral.onclick = function() {  
            autoSeleccionadoConsulta = "Presupuesto de $" + presupuestoIngresado.toLocaleString("es-AR") + " (Sin match exacto)";  
            document.getElementById("textoVehiculoElegido").innerText = "Interés: " + autoSeleccionadoConsulta;  
            document.getElementById("seccionPresupuesto").style.display = "none";  
            document.getElementById("seccionModalidad").style.display = "block";  
        };  
        contenedorResultado.appendChild(btnGeneral);  
        return;  
    }  

    let titulo = document.createElement("p");  
    titulo.style.fontSize = "14px";  
    titulo.style.fontWeight = "bold";  
    titulo.style.margin = "5px 0";  
    titulo.innerText = "Autos disponibles según tu presupuesto:";  
    contenedorResultado.appendChild(titulo);  

    autosEncontrados.forEach(function(auto) {  
        let itemAuto = document.createElement("div");  
        itemAuto.style.padding = "8px";  
        itemAuto.style.margin = "4px 0";  
        itemAuto.style.backgroundColor = "#f2f2f2";  
        itemAuto.style.borderRadius = "6px";  
        itemAuto.style.cursor = "pointer";  
        itemAuto.style.fontSize = "14px";  
        itemAuto.innerHTML = `<strong>${auto.marca} ${auto.modelo}</strong> (${auto.año}) - ${mostrarPrecio(auto)}`;  
          
        itemAuto.onclick = function() {  
            autoSeleccionadoConsulta = `${auto.marca} ${auto.modelo} (${auto.año}) - ${mostrarPrecio(auto)}`;  
            document.getElementById("textoVehiculoElegido").innerText = "Seleccionaste: " + autoSeleccionadoConsulta;  
            document.getElementById("seccionPresupuesto").style.display = "none";  
            document.getElementById("seccionModalidad").style.display = "block";  
        };  

        contenedorResultado.appendChild(itemAuto);  
    });
}

function finalizarConModalidad(modalidad) {
    let mensaje = "Hola, consulto desde la web de Automotores del Valle.\n\n• Vehículo de interés: " + autoSeleccionadoConsulta + "\n• Modalidad de pago: " + modalidad;
    let url = "https://wa.me/542622592664?text=" + encodeURIComponent(mensaje);  
    window.open(url, "_blank");  
    cerrarCuestionario();
}

// ==============================
// BOTÓN FLOTANTE Y EXTRAS
// ==============================

window.addEventListener("scroll", function() {
    let botonInicio = document.getElementById("botonInicio");
    if (!botonInicio) return;
    if (window.scrollY > 300) {
        botonInicio.style.display = "flex";
    } else {
        botonInicio.style.display = "none";
    }
});

function irAlInicio() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarEntregas() {
    let entregas = document.getElementById("entregas");
    if (!entregas) return;
    entregas.style.display = "block";
    entregas.scrollIntoView({ behavior: "smooth" });
}

function mostrarVideos() {
    let videos = document.getElementById("videos");
    if (!videos) return;
    videos.style.display = "block";
    videos.scrollIntoView({ behavior: "smooth" });
}

function cerrarEntregas() {
    let entregas = document.getElementById("entregas");
    if (!entregas) return;
    entregas.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function cerrarVideos() {
    let videos = document.getElementById("videos");
    if (!videos) return;
    let reproductores = videos.querySelectorAll("video");
    reproductores.forEach(function(video) {
        video.pause();
        video.currentTime = 0;
    });
    videos.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function pausarOtrosVideos(videoActual) {
    let videos = document.querySelectorAll("#videos video");
    videos.forEach(function(video) {
        if (video !== videoActual) {
            video.pause();
        }
    });
}

document.querySelectorAll("#videos video").forEach(function(video) {
    video.addEventListener("play", function() {
        pausarOtrosVideos(video);
    });
});

function mostrarDetalleEntrega(imagen) {
    let detalle = imagen.nextElementSibling;
    if (!detalle) return;
    if (detalle.style.display === "block") {
        detalle.style.display = "none";
    } else {
        detalle.style.display = "block";
    }
}

// ==============================
// INICIAR CATÁLOGO
// ==============================

mostrarCatalogo();
let botonInicioHTML = document.getElementById("botonInicio");
if (botonInicioHTML) {
    botonInicioHTML.addEventListener("click", function() {
        cerrarVideos();
    });
}

// Lista de historias diarias (puedes cambiar fotos y textos aquí)
const misHistorias = [
    {
        titulo: "Oferta Día",
        miniatura: "img/hunter.jpg",
        archivo: "img/hunter.jpg",
        texto: "🔥 ¡Impecable Corven Hunter 150 modelo 2025!",
        audio: "img/cancion1.mp4",
        audioInicio: 29,
        audioDuracion: 15,
        duracion: 15,
        fechaSubida: "2026-10-02T10:00:00"
    },
    {
        titulo: "Llegó KTM",
        miniatura: "img/ktm2.jpg",
        archivo: "img/ktm2.jpg",
        texto: "🚀 KTM Adventure 390 lista para transferir.",
        audio: "img/cancion1.mp4",
        audioInicio: 47,
        audioDuracion: 15,
        duracion: 15,
        fechaSubida: "2026-10-02T11:00:00"
    }, 
    {
        titulo: "Utilitarios",
    miniatura: "img/utilitarias1.jpg",
    archivo: "img/utilitarias1.jpg",
    texto: "🚐 ¡Llegaron más unidades utilitarias! Kangoo Emotion 2023 y Kangoo Authentique 2016.",
    audio: "img/cancion2.mp4",
    audioInicio: 35,
    audioDuracion: 15,
    duracion: 15,
    fechaSubida: "2026-10-02T12:50:00"
    }
];

function cargarBurbujasHistorias() {
    const contenedor = document.getElementById("storiesContainer");
    if (!contenedor) return;
    
    contenedor.innerHTML = "";
    const ahora = new Date().getTime(); 
    const LIMITE_TIEMPO = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

    // Filtrar historias con menos de 24 horas de antigüedad
    const historiasValidas = misHistorias.filter(historia => {
        const tiempoSubida = new Date(historia.fechaSubida).getTime();
        return (ahora - tiempoSubida) < LIMITE_TIEMPO;
    });

    if (historiasValidas.length === 0) {
        contenedor.style.display = "none";
        return;
    }

    historiasValidas.forEach((historia, index) => {
        contenedor.innerHTML += `
            <div class="story-item" onclick="abrirHistoria(${index})">
                <div class="story-avatar">
                    <img src="${historia.miniatura}" alt="${historia.titulo}" onerror="this.src='img/logo.png'">
                </div>
                <span class="story-name">${historia.titulo}</span>
            </div>
        `;
    });

    window.historiasParaMostrar = historiasValidas;
}

let historiaActual = 0;
let temporizadorHistoria = null;
let intervaloContador = null;
let tiempoRestante = 15000; 
let tiempoInicio = 0;
let estaPausado = false;
let audioElement = null;

// Crear un único elemento de audio global al iniciar la página para evitar bloqueos
function inicializarAudioGlobal() {
    if (!audioElement) {
        audioElement = new Audio();
    }
}

function abrirHistoria(index) {
    historiaActual = index;
    const listaActiva = window.historiasParaMostrar || misHistorias;
    const h = listaActiva[index];

    if (temporizadorHistoria) clearTimeout(temporizadorHistoria);
    if (intervaloContador) clearInterval(intervaloContador);
    inicializarAudioGlobal();

    // Pausar audio anterior
    audioElement.pause();

    let modal = document.getElementById("storyModalDynamic");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "storyModalDynamic";
        modal.className = "story-modal";
        document.body.appendChild(modal);
    }

    modal.style.display = "flex";
    modal.innerHTML = `
        <div class="story-box" id="storyBoxContainer">
            <!-- Contador numérico elegante en lugar de la barra -->
            <div id="storyCounter" style="position: absolute; top: 12px; left: 15px; background: rgba(0,0,0,0.6); color: #fff; padding: 3px 8px; border-radius: 12px; font-size: 12px; font-family: sans-serif; z-index: 10;">15s</div>
            
            <button class="close-story" onclick="cerrarHistoria()">&times;</button>
            
            <div class="story-tap-left" onclick="historiaAnterior()"></div>
            <div class="story-tap-right" onclick="historiaSiguiente()"></div>

            <img src="${h.archivo}" alt="Historia" id="storyImgContent">
            <div class="story-caption">${h.texto}</div>
        </div>
    `;

    const boxContainer = document.getElementById("storyBoxContainer");
    boxContainer.addEventListener("mousedown", pausarHistoria);
    boxContainer.addEventListener("touchstart", pausarHistoria);
    boxContainer.addEventListener("mouseup", reanudarHistoria);
    boxContainer.addEventListener("touchend", reanudarHistoria);

    // Configurar y reproducir el audio de forma robusta
    if (h.audio && h.audio !== "") {
        audioElement.src = h.audio;
        audioElement.currentTime = h.audioInicio || 0;
        
        audioElement.play().catch(e => {
            console.log("Reproducción automática bloqueada por el navegador:", e);
        });

        if (h.audioDuracion) {
            setTimeout(() => {
                if (audioElement) {
                    audioElement.pause();
                }
            }, h.audioDuracion * 1000);
        }
    }

    // Duración de la historia en pantalla (por defecto 15s)
    const duracionMs = (h.duracion || 15) * 1000;
    iniciarTemporizador(duracionMs);
}

function iniciarTemporizador(duracion) {
    tiempoRestante = duracion;
    tiempoInicio = Date.now();
    estaPausado = false;

    if (intervaloContador) clearInterval(intervaloContador);

    const contadorEl = document.getElementById("storyCounter");
    
    // Actualizar el contador segundo a segundo de forma exacta
    intervaloContador = setInterval(() => {
        if (!estaPausado) {
            let tiempoTranscurrido = Date.now() - tiempoInicio;
            let restanteMs = tiempoRestante - tiempoTranscurrido;
            let segundosRestantes = Math.ceil(restanteMs / 1000);
            
            if (contadorEl) {
                contadorEl.innerText = Math.max(segundosRestantes, 0) + "s";
            }
        }
    }, 200);

    temporizadorHistoria = setTimeout(() => {
        if (intervaloContador) clearInterval(intervaloContador);
        historiaSiguiente();
    }, tiempoRestante);
}

function historiaSiguiente() {
    if (temporizadorHistoria) clearTimeout(temporizadorHistoria);
    if (intervaloContador) clearInterval(intervaloContador);
    
    const listaActiva = window.historiasParaMostrar || misHistorias;
    let siguiente = historiaActual + 1;
    
    if (siguiente < listaActiva.length) {
        abrirHistoria(siguiente);
    } else {
        cerrarHistoria();
    }
}

function historiaAnterior() {
    if (temporizadorHistoria) clearTimeout(temporizadorHistoria);
    if (intervaloContador) clearInterval(intervaloContador);
    
    let anterior = historiaActual - 1;
    
    if (anterior >= 0) {
        abrirHistoria(anterior);
    } else {
        abrirHistoria(0);
    }
}

function pausarHistoria(e) {
    if (e.target.classList.contains('close-story')) return;
    
    if (!estaPausado) {
        estaPausado = true;
        clearTimeout(temporizadorHistoria);
        if (intervaloContador) clearInterval(intervaloContador);
        
        let tiempoTranscurrido = Date.now() - tiempoInicio;
        tiempoRestante -= tiempoTranscurrido;

        const box = document.getElementById("storyBoxContainer");
        if (box) box.classList.add("paused");
        
        if (audioElement) audioElement.pause();
    }
}

function reanudarHistoria() {
    if (estaPausado) {
        estaPausado = false;
        
        const box = document.getElementById("storyBoxContainer");
        if (box) box.classList.remove("paused");

        if (audioElement) audioElement.play().catch(e => {});

        tiempoInicio = Date.now();

        if (intervaloContador) clearInterval(intervaloContador);
        const contadorEl = document.getElementById("storyCounter");

        intervaloContador = setInterval(() => {
            if (!estaPausado) {
                let tiempoTranscurrido = Date.now() - tiempoInicio;
                let restanteMs = tiempoRestante - tiempoTranscurrido;
                let segundosRestantes = Math.ceil(restanteMs / 1000);
                
                if (contadorEl) {
                    contadorEl.innerText = Math.max(segundosRestantes, 0) + "s";
                }
            }
        }, 200);

        temporizadorHistoria = setTimeout(() => {
            if (intervaloContador) clearInterval(intervaloContador);
            historiaSiguiente();
        }, tiempoRestante);
    }
}

function cerrarHistoria() {
    if (temporizadorHistoria) clearTimeout(temporizadorHistoria);
    if (intervaloContador) clearInterval(intervaloContador);
    if (audioElement) {
        audioElement.pause();
    }
    const modal = document.getElementById("storyModalDynamic");
    if (modal) modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    cargarBurbujasHistorias();
    inicializarAudioGlobal();
});
