# Proyecto creado para la hackathon de Nuwe - Categoría Frontend

El resultado está disponible en [este link](https://clever-knuth-0f9378.netlify.app).

## Cómo correr en local

In the project directory, you can run:

#### Clona el repositorio

```
git clone git@github.com:crisouteda/nuwe-frontend-hackathon.git
```

o

```
git clone https://github.com/crisouteda/nuwe-frontend-hackathon.git
```

#### Instala los paquetes necesarios

```
yarn
```

o

```
npm i
```

#### Corre la aplicación en local

```
yarn start
```

o

```
npm start
```

### Sobre la estructura del proyecto

La web ha sido desarollada con React.js y styled-components.

La forma en que se ha gestionado las páginas es mediante un [objeto](https://github.com/crisouteda/nuwe-frontend-hackathon/blob/main/src/utils/StepsAuthentication.js) que contiene los componentes de cada página que se renderiza cuando cambia un índice.

El componente más utilizado es un input que admite difetentes tipo de valores y cuyas propiedades varían según el tipo de valor (paises, teléfonos, contraseñas, email, número clave de caracteres...)

Para hacer la aplicación reactiva para móviles, se toma una constante de 800px como mínimo de pantalla a partir del cual aplicar el diseño para móviles.

La validación del email se hace mediante estructuras regulares.
