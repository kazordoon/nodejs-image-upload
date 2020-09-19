Exemplos

Será utilizado o ambiente local e a URI será http://localhost:3333

## Curl

### Armazenar uma nova imagem

```bash
curl http://localhost:3333 \
--form @example.jpg
```

Saída:
```json
{
   "_id" : "5f666d8a3f8bbe4202da6c25",
   "name" : "b5c03afe5e62478a09c6-example.jpg",
   "size" : 350282,
   "url" : "http://localhost:3333/files/b5c03afe5e62478a09c6-example.jpg",
   "createdAt" : "2020-09-19T20:43:54.954Z",
   "updatedAt" : "2020-09-19T20:43:54.954Z",
   "__v" : 0
}
```

### Listar imagens armazenadas
```bash
curl http://localhost:3333
```

Saída:
```json
[
  {
     "_id" : "5f666d8a3f8bbe4202da6c25",
     "name" : "b5c03afe5e62478a09c6-example.jpg",
     "size" : 350282,
     "url" : "http://localhost:3333/files/b5c03afe5e62478a09c6-example.jpg",
     "createdAt" : "2020-09-19T20:43:54.954Z",
     "updatedAt" : "2020-09-19T20:43:54.954Z",
     "__v" : 0
  }
]
```
