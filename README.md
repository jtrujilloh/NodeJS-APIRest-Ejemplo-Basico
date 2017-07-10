# NodeJS-RESTFullServer-Ejemplo-Basico

Este proyecto representa una Arquitectura completamente funcional y básica para aplicaciones de Servicios REST, y se basa en un paradigma diferente al común de servicios REST. no utiliza "enrutadores por URL"...

Arquitectura separada mediante 3 Capas:
- Capa de Servidor: Encargada de proveer los servicios HTTP.
- Capa de Módulos NodeJS: Módulo instanciable, que brinda la comunicación del flujo lógico hacia el/los controladores inyectados en sus dependencias.
- Capa de Controladores: Capa que permite la interacción con Bases de Datos, u otro medio de almacenamiento de la información, es en ésta capa donde sólo se manejan las Bases de Datos.

URL a Ejecutar la API REST (Node) - Versión Actual: 0.0.1
http://localhost:9090/?p1=123&p2=Este es un texto
