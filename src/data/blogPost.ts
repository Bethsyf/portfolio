export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  description: string;
  content: string;
  date: string;
  readingTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "reconectando-con-el-codigo",

    title: "Reconectando con el código",

    image: "/blog/blog1.jpg",

    description:
      "Cómo retomé la programación y el proceso mental detrás de volver a construir proyectos.",

    date: "2026-02-17",

    readingTime: "4 min",

    content: `
Volver a programar no fue solo abrir el editor.

Fue enfrentar la incertidumbre de empezar de nuevo.

Durante un tiempo sentí que había perdido el ritmo. Dudaba de mis conocimientos y me preguntaba si realmente era capaz de construir cosas reales.

Pero entendí algo importante: programar no es memorizar, es pensar.

## Empezar antes de sentirte lista

Muchas veces esperamos sentirnos preparados para empezar. Pero la realidad es que la preparación ocurre en el proceso.

Mi primer paso fue construir mi propio portfolio.

No era perfecto. Pero era mío.

Y eso cambió todo.

## Construir es la mejor forma de aprender

Cada componente que desarrollaba me obligaba a entender mejor cómo funciona React, cómo organizar el código y cómo tomar decisiones técnicas.

No estaba solo aprendiendo sintaxis.

Estaba aprendiendo a pensar como desarrolladora.

## Reconectar es un proceso

No ocurre en un día.

Ocurre cada vez que resuelves un problema.

Cada vez que entiendes algo nuevo.

Cada vez que decides no rendirte.

Y este blog es parte de ese proceso.
`,
  },

  {
    slug: "aprendiendo-nextjs",

    title: "Aprendiendo Next.js desde proyectos reales",

    image: "/blog/blog2.jpg",

    description:
      "Mi enfoque para aprender frameworks modernos construyendo soluciones reales.",

    date: "2026-02-18",

    readingTime: "5 min",

    content: `
Aprender un framework puede parecer abrumador.

Documentación, conceptos nuevos, muchas formas de hacer lo mismo.

Pero descubrí que la mejor forma de aprender Next.js no fue leyendo, fue construyendo.

## El proyecto como maestro

Decidí usar Next.js para mi portfolio.

Eso me obligó a entender conceptos reales como:

Routing  
Optimización  
Estructura de páginas  

No era teoría. Era necesidad.

## Entender el por qué

No se trataba solo de que funcionara.

Quería entender por qué.

Por qué usar páginas.

Por qué organizar los componentes de cierta forma.

Por qué Next.js facilita la escalabilidad.

## Aprender haciendo cambia la perspectiva

Cada problema que resolvía me daba más claridad.

Next.js dejó de ser un framework desconocido.

Se convirtió en una herramienta.

Y esa es la diferencia entre estudiar y aprender.
`,
  },

  {
    slug: "pensamiento-dev",

    title: "Pensamiento de una desarrolladora",

    image: "/blog/blog3.jpg",

    description:
      "Cómo analizo problemas técnicos y desarrollo soluciones paso a paso.",

    date: "2026-02-19",

    readingTime: "4 min",

    content: `
Una de las habilidades más importantes como desarrolladora no es escribir código.

Es pensar.

Pensar antes de escribir.

Pensar antes de actuar.

## Entender el problema primero

Antes de escribir una sola línea, intento entender qué estoy resolviendo.

Qué necesita el usuario.

Qué resultado espero.

Qué opciones tengo.

## Dividir el problema

Los problemas grandes son intimidantes.

Pero cuando los divides, se vuelven manejables.

Componente por componente.

Función por función.

Paso a paso.

## La solución es un proceso

Rara vez la primera solución es la mejor.

Pero cada intento te acerca más.

Cada error enseña algo.

Cada solución construye experiencia.

Y con el tiempo, empiezas a ver los problemas de forma diferente.

Empiezas a pensar como desarrolladora.
`,
  },
];