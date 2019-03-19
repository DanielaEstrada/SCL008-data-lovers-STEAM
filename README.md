# Team Fortress News

![TF4ever](fortress4ever.jpg)

## Índice

* [Presentación](#presentación)
* [Url Página web](#link)
* [Modo de uso](#modo-de-uso)
* [Historias de usuarios](#historias-de-usuarios)
* [Diseño de la Interfaz del usuario](#Consideraciones-para-el-diseño-de-la-interfaz-del-usuario)
* [Implementación de la Interfaz del usuario](#Implementación-de-la-Interfaz-del-usuario)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Planificación](#planificación)
* [Contenido de referencia](#contenido-de-referencia)

***

## Presentación

Team Fortress News es una aplicación web con contenido relacionado a juego gratuito más valorado de todos los tiempos.

Este sitio ha sido diseñado para facilitar la búsqueda y visualización de la información principal de las noticias y actualizaciones del juego [Team Fortress](teamfortress.com).


## 👀 Esta página web es posible visualizarla en el siguiente link

https://danielaestrada.github.io/SCL008-data-lovers-STEAM/src/index.html

## 💡 Modo de uso

Para comenzar a utilizar la aplicación, primero es necesario presionar el botón "ingresar" para poder visualizar la segunda página con todo el contenido. 

En la seguna página existen dos seleccionadores, uno para el nivel de contenido y otro para ordenar alfabéticamente. 

Al seleccionar el nivel de contenido deseado, será posible visualizar las tarjetas con su contenido y la cantidad total de ellas.

Al seleccionar el orden, será posible visualizar las tarjetas ordenadas por fecha de publicación.


### Barra de navegación y menú del sitio

La barra de navegación tiene links de interés relacionados con el juego.

### Flujo

![Flujo](flujoSteam.png)

## 👦👧 Estudio de usuarios

### Historias de usuarios

[Planilla de historias de usuario](https://docs.google.com/spreadsheets/d/1uKtDx5rIeM7C-hJweXXrdobV7e7X8b62cjwAb9mFYW0/edit?usp=sharing)

### User-personas

![Eduardo](user-persona-Eduardo.png)
![Rodrigo](user-persona-Rodrigo.png)

## 📋 Consideraciones para el diseño de la interfaz del usuario

Esta aplicación contiene 2 html, el primero es de introducción al juego y contiene un botón de acceso al segundo html y una imagen relacionada con el juego.

El seguno archivo html contine dos seleccionadores de contenido y muestra la data a través de tarjetas.

Ambas páginas contienen la misma barra de navegación conectado a links de interés.

#### Prototipo de baja fidelidad

![Mockup1](mockup1.png)
![Mockup2](mockup2.png)
![Mockup3](mockup3.png)

#### Testeos de usabilidad

Se realiza pruebas con seis usuarios, los cuales deben realizar las siguientes tareas:
- Buscar según nivel.
- Filtrar según fecha de publicación.
- Informarse sobre el Team Fortress.

Usuario1: Sugiere agergar un link para volver al Inicio (página 1). 

Usuario2: Sugiere ordenar por fecha de publicación y no alfabéticamente. 

Usuario3: Sugiere linkear las tarjetas con el sitio oficial del juego.

Y procedemos a realizar las modificaciones correspondientes con las sugerencias de los usuarios testeados, y los cambios generados son los siguientes:

#### Prototipo de alta fidelidad

[Figma]

## Implementación de la Interfaz de Usuario (HTML/CSS/JS)

1. Muestra la data en una interfaz a través de una tarjeta.
2. Permite al usuario filtrar y ordenar la data.
3. Calcula estadísticas de la colección: Total de contenido de cada tipo seleccionado.
4. Se puede visualizar sin problemas desde distintos tamaños de pantallas: móviles,
tablets y desktops.

## Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript(ES6), HTML y CSS.

## Resúmen del código

El código creado en JavaScript(ES6) es una fórmula que permite visualizar la data y el número total de ella, filtrarla y ordenarla por fecha.

Se utilizó Bootstrap para la implementación de estilo.

##  ✏️ Planificación

https://github.com/DanielaEstrada/SCL008-data-lovers-STEAM/projects/1

## Contenido de referencia

http://www.teamfortress.com/