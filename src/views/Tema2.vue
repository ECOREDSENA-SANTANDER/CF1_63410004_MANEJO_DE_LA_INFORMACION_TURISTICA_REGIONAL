<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Comunicación en el sector turístico

    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La comunicación en el sector turístico integra el uso de técnicas como el #[em storytelling], el enfoque STEAM y las historietas, junto con la aplicación de protocolos de servicio, el manejo adecuado de la imagen personal y el cumplimiento de normas de urbanidad y cortesía. Dado que la interacción con los clientes es constante, resulta fundamental establecer una comunicación efectiva tanto con clientes internos como externos, en contextos presenciales y no presenciales, como llamadas telefónicas y medios digitales.

          br
          br
          | Más allá de transmitir información, comunicar implica generar confianza, comprender las necesidades del cliente y construir experiencias positivas. Por ello, es indispensable desarrollar habilidades sociales y comunicativas que permitan ofrecer un servicio claro, respetuoso y oportuno, garantizando una atención de calidad sin importar el canal de contacto.

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4.
          span Habilidades sociales para una comunicación efectiva

        .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
          table
            thead
              tr
                th.bg2.w-25.text-izq Habilidad
                th.bg2.text-izq Descripción mejorada
                th.bg2.text-izq Comportamientos clave
            tbody
              tr
                td #[b Asertividad]
                td Capacidad de expresar ideas, opiniones y necesidades de manera clara, directa y respetuosa, sin vulnerar a los demás.
                td
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas -
                      p.mb-0 Comunicar pensamientos con respeto.
                    li.d-flex
                      i.fas -
                      p.mb-0 Defender derechos de forma adecuada.
                    li.d-flex
                      i.fas -
                      p.mb-0 Saber decir “no” con argumentos.
                    li.d-flex
                      i.fas -
                      p.mb-0 Negociar y dialogar de forma constructiva.
                    li.d-flex
                      i.fas -
                      p.mb-0 Dar y recibir retroalimentación.

              tr
                td #[b Empatía]
                td Habilidad para comprender y valorar las emociones, pensamientos y experiencias de otras personas.
                td
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas -
                      p.mb-0 Ponerse en el lugar del otro.
                    li.d-flex
                      i.fas -
                      p.mb-0 Reconocer y validar emociones.
                    li.d-flex
                      i.fas -
                      p.mb-0 Comprender comportamientos y reacciones.
                    li.d-flex
                      i.fas -
                      p.mb-0 Fortalecer relaciones interpersonales.
                    li.d-flex
                      i.fas -
                      p.mb-0 Promover el respeto mutuo.

              tr
                td #[b Escucha activa]
                td Capacidad de prestar atención plena al interlocutor, comprendiendo el mensaje más allá de las palabras.
                td
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas -
                      p.mb-0 Escuchar para comprender, no solo para responder.
                    li.d-flex
                      i.fas -
                      p.mb-0 Evitar interrumpir.
                    li.d-flex
                      i.fas -
                      p.mb-0 Observar lenguaje verbal y no verbal.
                    li.d-flex
                      i.fas -
                      p.mb-0 No imponer ideas.
                    li.d-flex
                      i.fas -
                      p.mb-0 Generar confianza y conexión.

    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 Técnicas de comunicación (<i>storytelling</i>, STEAM e historietas)

    p El #[em storytelling] es una estrategia de comunicación que consiste en construir relatos atractivos para transmitir mensajes de forma clara, organizada y con impacto emocional. En un contexto donde las personas están expuestas a grandes volúmenes de información, contar historias se convierte en una herramienta clave para captar la atención, facilitar la comprensión y favorecer el recuerdo del mensaje.
    .cajon.color-primario.p-4.mb-4
      p En el sector turístico, esta técnica permite dar valor a los destinos, resaltar experiencias y generar una conexión más cercana con los visitantes. Puede aplicarse en campañas publicitarias, contenidos para redes sociales, guiones de recorridos o presentaciones institucionales, contribuyendo a diferenciar una marca, producto o servicio frente a otras opciones y fortaleciendo el vínculo con la audiencia. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-start
            img.w-card-icon(src="@/assets/curso/Tema2/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Elementos para hacer un buen #[em storytelling]

    .fondot2.mb-2.p-4(data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-3.col-9.mb-4.col-md-6
          img(src='@/assets/curso/Tema2/img02.png', alt='')
        .col-lg-8
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg4.p-4
              .row.justify-content-center.mb-3
                .col-7.col-md-4.col-lg-7
                  img(src='@/assets/curso/Tema2/1.svg' alt='')
              h4.text-center Conocer la audiencia
              p.text-center Identificar qué motiva, interesa y emociona al público objetivo para orientar el mensaje de manera efectiva.

            .tarjeta.bg4.p-4
              .row.justify-content-center.mb-3
                .col-7.col-md-4.col-lg-7
                  img(src='@/assets/curso/Tema2/2.svg' alt='')
              h4.text-center Crear un conflicto o problema
              p.text-center Plantear un obstáculo o situación a resolver que genere interés y mantenga la atención.

            .tarjeta.bg4.p-4
              .row.justify-content-center.mb-3
                .col-7.col-md-4.col-lg-7
                  img(src='@/assets/curso/Tema2/3.svg' alt='')
              h4.text-center Incluir emociones
              p.text-center Incorporar sentimientos como alegría, nostalgia o inspiración para lograr una conexión más profunda con la audiencia.

            .tarjeta.bg4.p-4
              .row.justify-content-center.mb-3
                .col-7.col-md-4.col-lg-7
                  img(src='@/assets/curso/Tema2/4.svg' alt='')
              h4.text-center Integrar lo visual
              p.text-center Utilizar imágenes, gráficos o videos que complementen la narrativa y refuercen la comprensión del mensaje.

            .tarjeta.bg4.p-4
              .row.justify-content-center.mb-3
                .col-7.col-md-4.col-lg-7
                  img(src='@/assets/curso/Tema2/5.svg' alt='')
              h4.text-center Cerrar con un mensaje claro
              p.text-center Finalizar con una idea concreta que invite a la reflexión o motive a la acción.
    figcaption.bg5.mb-4 Nota: adaptado de THiNK (2024)

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3.
          span Técnicas de comunicación STEAM aplicadas al turismo

        .tabla-a.color-acento-contenido.mb-3
          table
            caption.bg5 Nota: adaptado de Centro Común de Investigación (2025); UNESCO (s. f.); ONU Turismo (2024).
            thead
              tr
                th.bg2.w-25.text-izq Área STEAM
                th.bg2.text-izq Aplicación en turismo regional
                th.bg2.text-izq Técnicas de comunicación
            tbody
              tr
                td #[b Ciencia]
                td Explicación de ecosistemas, clima, biodiversidad, recursos naturales y conservación ambiental.
                td Charlas interpretativas, recorridos ecológicos guiados, infografías ambientales y divulgación sobre flora y fauna.

              tr
                td #[b Tecnología]
                td Promoción de destinos y acceso ágil a la información turística.
                td Uso de redes sociales, códigos QR, mapas digitales, videos, realidad aumentada, páginas web y aplicaciones móviles.

              tr
                td #[b Ingeniería]
                td Optimización de rutas, señalización, accesibilidad y organización del destino turístico.
                td Diseño de mapas de recorrido, señalética turística, rutas interpretativas y planificación de experiencias seguras.

              tr
                td #[b Arte]
                td Valoración de la cultura, historia, gastronomía, música, artesanías y tradiciones locales.
                td #[em Storytelling], fotografía, producción audiovisual, muestras culturales, narración oral y diseño de material promocional.

              tr
                td #[b Matemáticas]
                td Análisis de datos turísticos y evaluación de resultados.
                td Aplicación de encuestas, análisis estadístico de visitantes, elaboración de presupuestos, medición de tiempos y cálculo de capacidad de carga.

          
    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
         p.mb-0 Las técnicas de comunicación STEAM aplicadas al turismo regional constituyen una estrategia que permite presentar los atractivos de un destino de manera innovadora, educativa y creativa. Este enfoque integra la ciencia, la tecnología, la ingeniería, el arte y las matemáticas para fortalecer la forma en que se comunica el valor del territorio.
          br
          br
          | A través de la ciencia se explican los recursos naturales, la biodiversidad y la importancia de su conservación; con la tecnología se incorporan herramientas digitales como redes sociales, códigos QR, mapas interactivos y contenidos audiovisuales; la ingeniería facilita el diseño de rutas, señalización y espacios seguros; el arte comunica la identidad cultural mediante relatos, gastronomía y tradiciones; y las matemáticas permiten analizar datos, medir la satisfacción del visitante y planificar tiempos y costos.

      
    p En conjunto, este tipo de comunicación favorece una mejor comprensión del destino, promueve la valoración de la cultura local y genera experiencias más significativas para los visitantes. Además, fortalece la promoción turística, mejora la atención y contribuye al desarrollo sostenible de las comunidades.
    .cajon.color-secundario.p-4.mb-4(data-aos="fade-left")
      p Por otra parte, el uso de historietas y narrativas se apoya en la estrategia de Narrativas Regionales de Turismo, impulsada por el Ministerio de Comercio, Industria y Turismo, que destaca la importancia de contar historias para comunicar los destinos de forma cercana, atractiva y memorable. Un contenido bien construido genera confianza y conexión emocional con el visitante.
      p Las narrativas permiten aprovechar elementos como la cultura, los paisajes, la gastronomía y las experiencias locales para crear contenidos audiovisuales, gráficos y digitales que motivan al turista a conocer el territorio. Para lograrlo, es clave desarrollar mensajes claros e interesantes, conocer a la audiencia y difundir los contenidos en diversos medios.













</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
