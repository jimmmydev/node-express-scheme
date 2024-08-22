# Descripción

Este proyecto tiene la intención de proporcionar un esquema básico y ordenado para empezar a generar Apis utilizando Node.js, Express y MongoDB.

## 📄 Requisitos

Node.js (v14 o superior recomendado)
MongoDB (local)

## 🚀 Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```
   
3. Configura tu entorno:
   Se debe configurar la connexión a MongoDB. Para ello ve a /helpers/mongoose-connection.js y modifica la línea de código **const mongoAtlasUri = `mongodb://localhost:27017/jimmmydev`;** para que apunte a tu servidor local.

4. Inicia el servidor:
   ```bash
   npm start
   ```

## 🚀 Servicios de prueba

1. Crear usuario:
   Para crear un usuario habrá que hacer una petición POST a **http://127.0.0.1:5000/api/user/create** con el siguiente body:
   ```bash
   {
       "name": "Admin",
       "email": "tucorreo@gmail.comm"
   }
   ```

2. Obtener usuario:
   Para obtener un usuario creado hay que hacer una petición GET pasándo el usuario en la misma url.
   **http://127.0.0.1:5000/api/user/findbyemail/tucorreo@gmail.comm**

# 🤝 Contribuciones
Si tienes una idea para mejorar los ejemplos o agregar más variaciones, ¡siéntete libre de hacer un pull request! Todas las contribuciones son bienvenidas.


# 📜 Licencia
Este proyecto está bajo la licencia MIT, por lo que puedes usar libremente estos ejemplos en tus propios proyectos.


# 🙏 Donaciones

Si te ha resultado útil este proyecto y deseas apoyarlo, ¡las donaciones son bienvenidas! A continuación, puedes encontrar las direcciones de mis billeteras para diferentes criptomonedas:

- **Bitcoin (BTC)**: `35tHRMXrv8JFkFzCSWhWewpYSNYVnMuuL1`
- **Ethereum (ETH)**: `0x76dfCEa2bBFD1194abFDC758fD1Ca26dCF9957B2`

Cualquier donación es apreciada y me ayudará a seguir creando más ejemplos y mantener el repositorio actualizado.

¡Gracias por tu apoyo! 🙌
