# Documentación de la API de Películas y Actores

## 1. Endpoints de Actores (`/actors`)

### Obtener todos los actores o filtrar por atributos:

* **Método:** `GET`
* **URL:** `/actors`
* **Parámetros de consulta (opcionales):**
    * `nationality`: Filtra por nacionalidad exacta.
    * `firstName`: Filtra por nombre parcial (usando `LIKE`).
    * `lastName`: Filtra por apellido parcial (usando `LIKE`).
* **Ejemplo de solicitud:**
    * `GET /actors?nationality=American&firstName=Leo`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    [
        {
            "ActorID": 1,
            "FirstName": "Leonardo",
            "LastName": "DiCaprio",
            "Nationality": "American"
        },
        {
            "ActorID": 2,
            "FirstName": "Leonardo",
            "LastName": "Sbaraglia",
            "Nationality": "Argentino"
        }
    ]
    ```

### Obtener un actor por ID:

* **Método:** `GET`
* **URL:** `/actors/:id`
* **Parámetros de ruta:**
    * `id`: ID del actor.
* **Ejemplo de solicitud:**
    * `GET /actors/1`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    {
        "ActorID": 1,
        "FirstName": "Leonardo",
        "LastName": "DiCaprio",
        "Nationality": "American"
    }
    ```

* **Ejemplo de respuesta JSON (404 Not Found):**

    ```json
    {
        "error": "Actor not found."
    }
    ```

### Crear un nuevo actor:

* **Método:** `POST`
* **URL:** `/actors`
* **Cuerpo de la solicitud (JSON):**

    ```json
    {
        "FirstName": "Nuevo",
        "LastName": "Actor",
        "Nationality": "Desconocido"
    }
    ```

* **Ejemplo de respuesta JSON (201 Created):**

    ```json
    {
        "ActorID": 3,
        "FirstName": "Nuevo",
        "LastName": "Actor",
        "Nationality": "Desconocido"
    }
    ```

### Actualizar un actor por ID:

* **Método:** `PUT`
* **URL:** `/actors/:id`
* **Parámetros de ruta:**
    * `id`: ID del actor.
* **Cuerpo de la solicitud (JSON):**

    ```json
    {
        "FirstName": "Nombre Actualizado",
        "LastName": "Apellido Actualizado",
        "Nationality": "Nacionalidad Actualizada"
    }
    ```

* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    {
        "message": "Actor updated successfully."
    }
    ```

* **Ejemplo de respuesta JSON (404 Not Found):**

    ```json
    {
        "error": "Actor not found."
    }
    ```

### Eliminar (borrado lógico) un actor por ID:

* **Método:** `DELETE`
* **URL:** `/actors/:id`
* **Parámetros de ruta:**
    * `id`: ID del actor.
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    {
        "message": "Actor marked as deleted successfully."
    }
    ```

* **Ejemplo de respuesta JSON (404 Not Found):**

    ```json
    {
        "error": "Actor not found."
    }
    ```

### Obtener actores eliminados (borrado lógico):

* **Método:** `GET`
* **URL:** `/actors/deleted`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    [
        {
            "ActorID": 4,
            "FirstName": "Actor",
            "LastName": "Eliminado",
            "Nationality": "Desconocido",
            "deletedAt": "2023-10-27T12:00:00.000Z"
        }
    ]
    ```

## 2. Endpoints de Directores (`/directors`)

### Obtener todos los directores o filtrar por atributos:

* **Método:** `GET`
* **URL:** `/directors`
* **Parámetros de consulta (opcionales):**
    * `nationality`: Filtra por nacionalidad exacta.
    * `firstName`: Filtra por nombre parcial (usando `LIKE`).
    * `lastName`: Filtra por apellido parcial (usando `LIKE`).
* **Ejemplo de solicitud:**
    * `GET /directors?nationality=American&firstName=Chris`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    [
        {
            "DirectorID": 1,
            "FirstName": "Christopher",
            "LastName": "Nolan",
            "Nationality": "American"
        },
        {
            "DirectorID": 2,
            "FirstName": "Quentin",
            "LastName": "Tarantino",
            "Nationality": "American"
        }
    ]
    ```

### Obtener un director por ID:

* **Método:** `GET`
* **URL:** `/directors/:id`
* **Parámetros de ruta:**
    * `id`: ID del director.
* **Ejemplo de solicitud:**
    * `GET /directors/1`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    {
        "DirectorID": 1,
        "FirstName": "Christopher",
        "LastName": "Nolan",
        "Nationality": "American"
    }
    ```

* **Ejemplo de respuesta JSON (404 Not Found):**

    ```json
    {
        "error": "Director not found."
    }
    ```

### Crear un nuevo director:

* **Método:** `POST`
* **URL:** `/directors`
* **Cuerpo de la solicitud (JSON):**

    ```json
    {
        "FirstName": "Nuevo",
        "LastName": "Director",
        "Nationality": "Desconocido"
    }
    ```

* **Ejemplo de respuesta JSON (201 Created):**

    ```json
    {
        "DirectorID": 3,
        "FirstName": "Nuevo",
        "LastName": "Director",
        "Nationality": "Desconocido"
    }
    ```

### Actualizar un director por ID:

* **Método:** `PUT`
* **URL:** `/directors/:id`
* **Parámetros de ruta:**
    * `id`: ID del director.
* **Cuerpo de la solicitud (JSON):**

    ```json
    {
        "FirstName": "Nombre Actualizado",
        "LastName": "Apellido Actualizado",
        "Nationality": "Nacionalidad Actualizada"
    }
    ```

* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    {
        "message": "Director updated successfully."
    }
    ```

* **Ejemplo de respuesta JSON (404 Not Found):**

    ```json
    {
        "error": "Director not found."
    }
    ```

### Eliminar (borrado lógico) un director por ID:

* **Método:** `DELETE`
* **URL:** `/directors/:id`
* **Parámetros de ruta:**
    * `id`: ID del director.
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    {
        "message": "Director marked as deleted successfully."
    }
    ```

* **Ejemplo de respuesta JSON (404 Not Found):**

    ```json
    {
        "error": "Director not found."
    }
    ```

### Obtener directores eliminados (borrado lógico):

* **Método:** `GET`
* **URL:** `/directors/deleted`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    [
        {
            "DirectorID": 4,
            "FirstName": "Director",
            "LastName": "Eliminado",
            "Nationality": "Desconocido",
            "deletedAt": "2023-10-27T12:00:00.000Z"
        }
    ]
    ```

## 3. Endpoints de Películas (`/movies`)

### Obtener todas las películas o filtrar por atributos:

* **Método:** `GET`
* **URL:** `/movies`
* **Parámetros de consulta (opcionales):**
    * `title`: Filtra por título parcial (usando `LIKE`).
    * `releaseYear`: Filtra por año de lanzamiento.
    * `genre`: Filtra por género.
    * `directorId`: Filtra por ID de director.
* **Ejemplo de solicitud:**
    * `GET /movies?genre=Science%20Fiction&releaseYear=2010`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    [
        {
            "MovieID": 1,
            "Title": "Inception",
            "ReleaseYear": 2010,
            "Genre": "Science Fiction",
            "DirectorID": 1
        },
        {
            "MovieID": 2,
            "Title": "Interestellar",
            "ReleaseYear": 2014,
            "Genre": "Science Fiction",
            "DirectorID": 1
        }
    ]
    ```

### Obtener una película por ID:

* **Método:** `GET`
* **URL:** `/movies/:id`
* **Parámetros de ruta:**
    * `id`: ID de la película.
* **Ejemplo de solicitud:**
    * `GET /movies/1`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    {
        "MovieID": 1,
        "Title": "Inception",
        "ReleaseYear": 2010,
        "Genre": "Science Fiction",
        "DirectorID": 1
    }
    ```

* **Ejemplo de respuesta JSON (404 Not Found):**

    ```json
    {
        "error": "Movie not found."
    }
    ```

### Crear una nueva película:

* **Método:** `POST`
* **URL:** `/movies`
* **Cuerpo de la solicitud (JSON):**

    ```json
    {
        "Title": "Nueva Película",
        "ReleaseYear": 2023,
        "Genre": "Drama",
        "DirectorID": 2
    }
    ```

* **Ejemplo de respuesta JSON (201 Created):**

    ```json
    {
        "MovieID": 3,
        "Title": "Nueva Película",
        "ReleaseYear": 2023,
        "Genre": "Drama",
        "DirectorID": 2
    }
    ```

### Actualizar una pelicula por ID:

* **Método:** `PUT`
* **URL:** `/movies/:id`
* **Parámetros de ruta:**
    * `id`: ID de la pelicula.
* **Cuerpo de la solicitud (JSON):**

    ```json
    {
        "Title": "Pelicula Actualizada",
        "ReleaseYear": 2024,
        "Genre": "Comedia",
        "DirectorID": 3
    }
    ```

* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    {
        "message": "Movie updated successfully."
    }
    ```

* **Ejemplo de respuesta JSON (404 Not Found):**

    ```json
    {
        "error": "Movie not found."
    }
    ```

### Eliminar (borrado lógico) una pelicula por ID:

* **Método:** `DELETE`
* **URL:** `/movies/:id`
* **Parámetros de ruta:**
    * `id`: ID de la pelicula.
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    {
        "message": "Movie marked as deleted successfully."
    }
    ```

* **Ejemplo de respuesta JSON (404 Not Found):**

    ```json
    {
        "error": "Movie not found."
    }
    ```

### Obtener peliculas eliminadas (borrado lógico):

* **Método:** `GET`
* **URL:** `/movies/deleted`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    [
        {
            "MovieID": 4,
            "Title": "Pelicula Eliminada",
            "ReleaseYear": 2020,
            "Genre": "Acción",
            "DirectorID": 1,
            "deletedAt": "2023-10-27T12:00:00.000Z"
        }
    ]
    ```

### Añadir actores a una película:

* **Método:** `POST`
* **URL:** `/movies/:movieId/actors`
* **Parámetros de ruta:**
    * `movieId`: ID de la película.
* **Cuerpo de la solicitud (JSON):**

    ```json
    {
        "actorIds": [1, 2, 3]
    }
    ```

* **Ejemplo de respuesta JSON (201 Created):**

    ```json
    {
        "message": "Actors added to movie successfully."
    }
    ```

### Obtener actores de una película:

* **Método:** `GET`
* **URL:** `/movies/:movieId/actors`
* **Parámetros de ruta:**
    * `movieId`: ID de la película.
* **Ejemplo de solicitud:**
    * `GET /movies/1/actors`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    [
        {
            "ActorID": 1,
            "FirstName": "Leonardo",
            "LastName": "DiCaprio",
            "Nationality": "American"
        },
        {
            "ActorID": 3,
            "FirstName": "Joseph",
            "LastName": "Gordon-Levitt",
            "Nationality": "American"
        }
    ]
    ```

**Nota:** Los endpoints de actualización (`PUT`) y eliminación (borrado lógico, `DELETE`) para directores y películas funcionan de manera similar a los de actores. Simplemente ajusta las URLs y los nombres de los atributos en los ejemplos JSON según corresponda.

## Manejo de Errores

La API utiliza códigos de estado HTTP estándar para indicar el resultado de las solicitudes.

* **200 OK:** La solicitud se ha completado con éxito.
* **201 Created:** Se ha creado un nuevo recurso con éxito.
* **400 Bad Request:** La solicitud no se puede procesar debido a un error del cliente (por ejemplo, datos de entrada inválidos).
* **404 Not Found:** El recurso solicitado no se encontró.
* **500 Internal Server Error:** Ocurrió un error en el servidor al procesar la solicitud.

En caso de errores (4xx o 5xx), la API devuelve un objeto JSON con un mensaje de error descriptivo:

```json
{
    "error": "Mensaje de error descriptivo."
}