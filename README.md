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

### Obtener una película con detalles de director y actores:

* **Método:** `GET`
* **URL:** `/movies/:movieId`
* **Parámetros de ruta:**
    * `movieId`: ID de la película.
* **Ejemplo de solicitud:**
    * `GET /movies/1`
* **Ejemplo de respuesta JSON (200 OK):**

    ```json
    {
        "MovieID": 1,
        "Title": "Inception",
        "ReleaseYear": 2010,
        "Genre": "Science Fiction",
        "Director": {
            "DirectorID": 1,
            "FirstName": "Christopher",
            "LastName": "Nolan",
            "Nationality": "American"
        },
        "Actors": [
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
    }
    ```