# Optimen Web Site
## Carpeta del Back-End

Dentro de la carpeta del controlador, se encuentra el modelo que gestiona la conexión del Modelo Vista del Cliente con el Sistema de Base de Datos NoSQL Mongo Atlas, en un clúster gratuito destinado para pruebas básicas del sistema.

En esta carpeta, se pueden encontrar diferentes archivos y subcarpetas que trabajan en conjunto para crear una conexión a la base de datos que permite el acceso a su contenido, como eventos y noticias, así como la posibilidad de crear, eliminar, actualizar o leer la información de sus tablas.

En la subcarpeta "models", se pueden encontrar los modelos de vista de tipo .js que controlan cada una de las tres partes del sistema: noticias, eventos y usuarios de la aplicación web.

Por otro lado, en la subcarpeta "controllers", se pueden encontrar los modelos .js que controlan los envíos y formatos de la información de cada parte del sistema. Además, dentro de esta subcarpeta se encuentran las cuatro funciones básicas del back-end para la ejecución del sistema CRUD que permiten hacer cambios dentro de la Base de Datos en la información y datos de la tabla.
