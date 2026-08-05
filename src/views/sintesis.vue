<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo integra los fundamentos para comprender al visitante y fortalecer la comunicación en la atención turística. Aborda la caracterización del usuario, sus necesidades y comportamientos, así como las tipologías de clientes y sus condiciones físicas, médicas y alimentarias. Además, incorpora estrategias de comunicación en el sector turístico, incluyendo técnicas como el #[em storytelling] y el enfoque STEAM, junto con la aplicación de protocolos de servicio, normas de urbanidad y manejo de la imagen personal. En conjunto, estos elementos permiten brindar una atención más efectiva, inclusiva y orientada a generar experiencias positivas y de calidad para el turista.
    

    .row.justify-content-center
      .col-lg-11.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama que presenta la caracterización del visitante y la comunicación en la atención turística, incluyendo tipos de usuarios, técnicas de comunicación y protocolos de servicio con enfoque en la experiencia del turista.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
