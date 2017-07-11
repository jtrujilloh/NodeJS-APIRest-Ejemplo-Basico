# NodeJS-RESTFullServer-Ejemplo-Basico

Este proyecto representa una Arquitectura completamente funcional y básica para aplicaciones de Servicios REST, y se basa en un paradigma diferente al común de servicios REST. no utiliza "enrutadores por URL"...

Arquitectura separada mediante 3 Capas:
- Todas las peticiones son con métodos GET y POST, suficiente para la funcionalidad completa de entrega de parámetros.
- Capa de Servidor: Encargada de proveer los servicios HTTP.
- Capa de Módulos NodeJS: Módulo instanciable, que brinda la comunicación del flujo lógico hacia el/los controladores inyectados en sus dependencias.
- Capa de Controladores: Capa que permite la interacción con Bases de Datos, u otro medio de almacenamiento de la información, es en ésta capa donde sólo se manejan las Bases de Datos.

URL a Ejecutar la API REST (Node) - Versión Actual: 0.0.1
http://localhost:9090/?p1=123&p2=Este es un texto


________________________________________________
Actualizado en: 10-07-2017:

Importante: Actualmente se está modificando para poder hacer uso de las "Operaciones" de ejemplo incluidas en la nueva versión, Ya no se usa enrutadores como normalmente se conoce, se utiliza la invocación por Operación, Nombre de Operación incluido en los parámetros enviados al servicio (Payload de Entrada, con una única URL).

URL al ejecutar la API Node (En Próxima Versión) serán: 

Método GET:
http://localhost:9090/?Header={Operacion:"ConsultaDetallesAPI"}&Body={Data:""}

Método POST:
http://localhost:9090/
Payload: { Header={ Operacion:"ConsultaDetallesAPI" }, Body={ Data:"" } }
