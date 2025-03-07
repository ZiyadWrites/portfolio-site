---
sidebar_position: 6
---

# Pet Store API reference documentation

The Pet Store API simulates the operations of a pet store and the management of pet-related data. The example below show an API call within API reference documentation.
 ## Pets  
The Pet object represents a pet in the store. The object includes details such as the pet's unique ID, name, category, associated tags, status, and photo. This resource facilitates the management of pet-related data within the pet store system.

## Endpoint and methods
**POST**/pet  
Adds a new pet to the pet store, including details such as petId, category, name, photoUrls, tags, and status.

## Parameters  


| Parameter           | Type    | Required | Description                                                                                   |
|---------------------|---------|----------|-----------------------------------------------------------------------------------------------|
| `id`                | Integer | No       | Unique identifier for the pet.                                                                  |
| `category.id`       | Integer | Yes      | Identifier for the pet's category.                                                             |
| `category.name`     | String  | Yes      | Name of the pet's category.                                                                   |
| `name`              | String  | No       | Name of the pet.                                                                               |
| `photoUrls`         | Array   | No       | List of URLs pointing to images of the pet.                                                    |
| `tags`              | Array   | No       | List of tags associated with the pet. Each tag includes an `id` and `name`.                   |
| `status`            | String  | No       | Availability status of the pet (e.g., 'available', 'pending', 'sold').                       |


## Request example  
The following example illustrates a request formatted in JSON:
```{
  "id": 10,
  "category": {
    "id": 0,
    "name": "Cats"
  },
  "name": "Melody",
  "photoUrls": [
    "https://cats/melody.jpg"
  ],
  "tags": [
    {
      "id": 10,
      "name": "Siamese cat"
    }
  ],
  "status": "available"
}
```
  
## Response body 
The reponse is returned in Curl format: 
```curl -X 'POST' \
  'https://petstore.swagger.io/v2/pet' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 10,
  "category": {
    "id": 0,
    "name": "Cats"
  },
  "name": "Melody",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 10,
      "name": "Siamese cat"
    }
  ],
  "status": "available"
}'
```

## Schema
The response schema defines the structure of the JSON object returned when a new pet is added to the store, detailing the pet's id, category (with required id and name), name, photoUrls, tags, and status.
```
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Unique identifier for the pet."
    },
    "category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "description": "Unique identifier for the pet's category."
        },
        "name": {
          "type": "string",
          "description": "Name of the pet's category."
        }
      },
      "required": ["id", "name"]
    },
    "name": {
      "type": "string",
      "description": "Name of the pet."
    },
    "photoUrls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of URLs pointing to images of the pet."
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "Unique identifier for the tag."
          },
          "name": {
            "type": "string",
            "description": "Name of the tag."
          }
        },
        "required": ["id", "name"]
      },
      "description": "List of tags associated with the pet."
    },
    "status": {
      "type": "string",
      "enum": ["available", "pending", "sold"],
      "description": "Availability status of the pet."
    }
  },
  "required": ["id", "category", "name", "photoUrls", "status"]
}
```