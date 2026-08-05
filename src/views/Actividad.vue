<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Caracterización del visitante y comunicación en la atención turística',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los aprendices sobre los conceptos básicos relacionados con el turista, consumidor y cliente en el sector turístico, identificando los factores que influyen en el comportamiento de compra, las tipologías de clientes, los parámetros de condición física, médica y alimentaria, así como la importancia de la comunicación, el protocolo de servicio, la imagen personal, la urbanidad y las normas de cortesía en la prestación de servicios turísticos de calidad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por turismo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La compra exclusiva de paquetes vacacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La actividad económica de los hoteles únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El conjunto de actividades que realizan las personas durante viajes y estancias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El traslado permanente de una persona a otro país.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 2,
          texto: '¿Cuál es una característica fundamental del turismo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Su carácter obligatorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Su permanencia definitiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Su relación exclusiva con el trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Su carácter temporal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 3,
          texto: '¿Quién es considerado turista?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un visitante que permanece al menos 24 horas en el lugar visitado y generalmente pernocta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una persona que solo viaja por motivos ilegales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un visitante que permanece menos de 12 horas en un destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una persona que se muda definitivamente a otra ciudad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 4,
          texto:
            '¿Cuál es la principal diferencia entre turista y excursionista?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El medio de transporte utilizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El idioma que habla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tiempo de permanencia y la pernoctación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La nacionalidad del viajero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 5,
          texto: 'En turismo, ¿qué es un consumidor?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un guía turístico certificado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un turista que siempre compra en la misma empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una persona que trabaja en una agencia de viajes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una persona que adquiere un servicio turístico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 6,
          texto: '¿Qué diferencia al cliente del consumidor?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El cliente nunca compra servicios turísticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El cliente mantiene una relación más frecuente o continua con la empresa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El consumidor siempre es extranjero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cliente solo viaja por negocios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 7,
          texto: '¿Por qué es importante conocer al cliente en turismo?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para evitar prestarle atención personalizada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para imponerle un destino específico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para comprender sus necesidades, expectativas y nivel de satisfacción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para reducir la calidad del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 8,
          texto:
            '¿Cuál de los siguientes es un factor cultural que influye en el comportamiento del consumidor turístico?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El nivel cultural.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La presión arterial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El clima del destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El itinerario del guía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 9,
          texto: '¿Qué son los grupos de referencia?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lugares turísticos certificados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Empresas que venden tiquetes aéreos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Personas o colectivos que influyen en las decisiones del turista.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Documentos legales de una agencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 10,
          texto:
            '¿Cuál de los siguientes corresponde a un factor personal del consumidor turístico?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normas del alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Protocolo de bienvenida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Edad y ciclo de vida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Señalización turística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué representa la motivación en el comportamiento del turista?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La razón que impulsa a una persona a viajar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El precio final de un paquete turístico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El lugar donde se compra el servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de equipaje permitido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 12,
          texto:
            '¿Cuál es la primera etapa del proceso de decisión de compra turística?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluación de alternativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Forma de pago.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comportamiento poscompra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reconocimiento de la necesidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 13,
          texto: '¿Qué ocurre durante la búsqueda de información?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El turista deja de comparar opciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El turista cancela automáticamente el viaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El turista consulta datos sobre destinos, precios, servicios, reseñas o recomendaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El turista evalúa su satisfacción final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 14,
          texto: '¿Qué es el comportamiento poscompra?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El proceso de solicitar documentos de identidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El momento de empacar la maleta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La etapa en la que se escoge el destino por primera vez.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La etapa en la que el turista evalúa si la experiencia cumplió sus expectativas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 15,
          texto:
            '¿Cuál de los siguientes es un factor interno que influye en la compra turística?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Familia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clase social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Percepción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cultura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 16,
          texto:
            '¿Cuál de los siguientes es un factor externo que influye en la compra turística?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Motivación personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Memoria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aprendizaje individual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Grupos de referencia y familia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 17,
          texto: '¿Cómo se caracteriza un cliente indeciso o abdicador?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decide rápidamente sin pedir información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evita el conflicto, duda y necesita acompañamiento para decidir.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Siempre busca imponer su autoridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo compra servicios de lujo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 18,
          texto:
            '¿Cómo debe atenderse a un cliente jefe autoritario o comandante?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presionándolo para que compre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitando darle información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Con profesionalismo, seguridad, precisión y opciones claras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Con respuestas inseguras y largas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 19,
          texto:
            '¿Por qué es importante revisar la condición física del turista antes de una actividad?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para excluirlo del servicio sin explicación',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para definir si puede realizar caminatas, actividades de aventura o recorridos exigentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para cambiarle obligatoriamente el destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para venderle únicamente servicios médicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },

        {
          id: 20,
          texto:
            '¿Qué aspectos hacen parte de los requerimientos de alimentación del turista?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tipo de fotografía que prefiere.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Marca de maleta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Alergias, intolerancias, diabetes, hipertensión, vegetarianismo o restricciones culturales y religiosas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Color favorito del turista.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se sugiere revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
