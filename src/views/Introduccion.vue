<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-right") En el sector turístico, la atención al cliente constituye uno de los aspectos más importantes para garantizar experiencias satisfactorias, seguras y de calidad. Por ello, resulta fundamental que el aprendiz desarrolle competencias que le permitan reconocer las características, necesidades y expectativas de los diferentes tipos de visitantes o turistas, con el fin de brindar un servicio pertinente de acuerdo con cada requerimiento. 
    .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/intro.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprender quién es el usuario, sus condiciones particulares y la forma en que se comporta frente al servicio facilita una atención más humana, organizada y ajustada al contexto de la actividad turística.
          br
          br
          | En este componente formativo se abordan elementos esenciales para determinar la tipología del visitante o turista, teniendo en cuenta conceptos como turista, consumidor y cliente, así como sus tipos, comportamientos, condiciones físicas, condiciones médicas y requerimientos de alimentación. Estos aspectos permiten fortalecer la capacidad de identificar perfiles de usuarios y responder de manera adecuada a sus necesidades dentro de la prestación del servicio turístico.
    
    .cajon.color-primario.p-4.mb-4(data-aos="fade-left")
      p De igual forma, el componente orienta el desarrollo de técnicas de comunicación turística que favorecen la interacción efectiva con el cliente, mediante el uso de estrategias como el #[em storytelling], el enfoque Ciencia, Tecnología, Ingeniería, Artes y Matemáticas (STEAM, por sus siglas en inglés) y las historietas, junto con la aplicación de protocolos de servicio, normas de cortesía, urbanidad e imagen personal. Todo ello contribuye a que el aprendiz consolide habilidades para comunicarse con respeto, claridad y profesionalismo, generando confianza y aportando al mejoramiento de la experiencia del visitante, en concordancia con los procedimientos de servicio y la normativa establecida.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/a3FvnXSjNC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Caracterización del visitante y comunicación en la atención turística – introducción

</template>

<script>
export default {
  name: 'Introduccion',
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
