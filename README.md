### Ejecutar instalacion de paquetes de Node
Ejecutar el comando npm install tanto en el directorio del back, (/back), como del Front (/front).

### Crear Base de Datos
Ejecutar desde la terminal de psql el comando createdb endava (previa instalacion de Postgress SQL DB).

### npm start
Ejecutar el comando npm start en el directorio del back, (/back) para levantar el servidor. El mismo estara disponible en el puerto 3000 (http://localhost:3000)

IMP: Modificar el estado de la db en el archivo server (/back/server.js), a true, para levantar la estructura de las tablas. Luego setearlo a false, para evitar el reinicio constante de la base. db.sync({ force: false }). Esto debera hacerse ante cada modificacion que suceda en el modelo de dicha base.

### npm run build
Ejecutar el comando npm run build en el directorio del front, (/front) para correr webpack.

### Seedeo de la DB
Ejecutar el comando node seed.js en el directorio del back, (/back) para realizar un carga automatica de disciplinas y usuario administrador.
Cabe destacar que en la carpeta "back" podrán encontrar cuatro archivos mas de seed, los cuales no son indispensables para el funcionamiento de la aplicación. Fueron utilizados para testear el desarrollo.

### Datos Usuario Administrador
email: m.gonzalez@endava.com 
pass: 123

### Importante:
Una vez que se encuentren completas todas las tablas de la base de datos, dentro de la carpeta "back/followUpMail" descomentar la ejecución de las funciones para el envìo de mails. Las mismas se encuentran señaladas en la última línea de código de los archivos "daily.js y weekly.js".
