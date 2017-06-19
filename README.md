# NodeJS-ArquitecturaREST
Este proyecto representa una Arquitectura completamente funcional para aplicaciones de Servicios REST, y se basa en un paradigma diferente al común de servicios REST. no utiliza "enrutadores"...

URL a Ejecutar en Versión Actual:
http://localhost:9090/?p1=123&p2=Este%20es%20un%20texto

Importante: Actualmente se está modificando para poder hacer uso de las "Operaciones" de ejemplo incluidas en la nueva versión, Ya no se usa enrutadores como normalmente se conoce, se utiliza la invocación por Operación, Nombre de Operación incluido en los parámetros enviados al servicio (Payload de Entrada, con una única URL).

URL al ejecutar la API Node (En Próxima Versión): 
Method GET: 
	
	http://localhost:9090/?Header={"Operacion":"ConsultaDetallesAPI"}&Body={"Data":""}

Method POST: 

	http://localhost:9090/

Payload:
{
	Header={
		"Operacion":"ConsultaDetallesAPI"
	},
	Body={
		"Data":""
	}
}