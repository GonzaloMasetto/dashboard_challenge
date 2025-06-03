Ejercicio “Dash de Posts & Usuarios” (nivel Junior – Live Coding 45-60 min)
Objetivo
Crear un pequeño dashboard en React que:

Consuma dos APIs públicas activas

Usuarios → https://jsonplaceholder.typicode.com/users

Posts → https://jsonplaceholder.typicode.com/posts

Cruce la información (posts ↔︎ usuario) y la presente en pantalla.

Permita filtrar / buscar usando métodos de array de JavaScript (filter, map, reduce, etc.).

Historias de usuario
#	Como…	Quiero…	Para…
1	Visitante	ver una tabla con la lista de usuarios y cuántos posts tiene cada uno	tener una idea rápida de la actividad
2	Visitante	hacer clic en un usuario y visualizar sólo sus posts	leer con detalle lo que escribió
3	Visitante	buscar posts por palabra clave en el título	encontrar contenido específico
4	Visitante	ordenar la tabla por cantidad de posts (asc/desc)	comparar niveles de actividad

Requisitos funcionales
Carga inicial

Al montar el componente principal, dispara dos peticiones fetch (o axios) en paralelo.

Muestra un loader mientras llegan los datos y un mensaje de error si algo falla.

Combinación de datos

Usa reduce o forEach para contar cuántos posts corresponden a cada userId.

Une la cuenta con los datos de cada usuario antes de renderizar.

Filtrado

Implementa un <input type="search" /> que filtre los posts por título (case-insensitive).

Aplica filter sobre el array de posts ya combinado.

Selección de usuario

Al pulsar el nombre de un usuario, muestra debajo una lista (o tarjetas) sólo con sus posts.

Vuelve al listado completo con un botón “Ver todos”.

Ordenamiento (bonus)

Botón que alterne orden ascendente / descendente por cantidad de posts usando sort.