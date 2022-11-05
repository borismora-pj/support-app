# Proyecto Arma Secreta Soporte

## Comenzando 

Prototipo para app que permitiría generar reportes de manera mas sencilla.
Este ejemplo requiere ingresar las credenciales de Portugal dentro de ./config.json

Consulta Insights para pruebas: 'fields @timestamp, @message | filter @message like "44453" | sort @timestamp asc | limit 20'

Registros con los que se hacen las pruebas:
* '/aws/elasticbeanstalk/middleware-production/var/app/containerfiles/logs/sidekiq.log'
* '/aws/elasticbeanstalk/middleware-production/var/log/puma/puma.log'
* '/aws/elasticbeanstalk/orders-production/var/app/containerfiles/logs/sidekiq.log'
* '/aws/elasticbeanstalk/orders-production/var/log/puma/puma.log'

Consideraciones:
* Versión primigenia y prototipo inicial
* Puede tener más de algún error, no me manden a la hoguera D:
* La consulta es super básica, sólo para ejemplificar 

## Construido con 🛠️

* [Node.JS] - v14.15.4

## Instalación 🔧

Instalar dependencias

```
npm i
```

## Ejecutar 🚀

```
node index.js
```
La salida se almacena en el archivo data.json
