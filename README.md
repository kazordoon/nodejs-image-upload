# nodejs-image-upload-multer

Aplicação feita em Node.js para realizar o upload de imagens.

## Pré-requisitos

- Node.js
- MongoDB
- NPM / Yarn

## Instalação

- Clone o repositório: `git clone https://github.com/kazordoon/nodejs-image-upload-multer.git`
- Entre no diretório do projeto: `cd nodejs-image-upload-multer`
- Instale as dependências:
	- NPM: `npm install` | **OBS**: Se for instalar usando o NPM, remova o arquivo `yarn.lock`
	- Yarn: `yarn`

## Configurações

### Variáveis de ambiente

Copie o arquivo `.env.example` para `.env`, em seguida você deve trocar o valor das variáveis dentro do arquivo `.env` de acordo com o seu ambiente.

### AWS

Se for utilizar o serviço *S3* da AWS, não esqueça de configurar suas credenciais utilizando o `aws-cli`, consulte o site abaixo para mais detalhes:

[https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

## Como iniciar o servidor

- NPM: `npm run dev`
- Yarn: `yarn dev`

## Exemplos

Veja o arquivo [EXAMPLES.md](EXAMPLES.md).

## Tecnologias utilizadas
- [Node.js](https://nodejs.org) - Ambiente de execução que executa código JavaScript no lado do servidor.
- [MongoDB](https://www.mongodb.com) - Banco de dados não relacional.
- [mongoose](https://mongoosejs.com) - MongoDB ODM.
- [express](https://expressjs.com) - Framework web minimalista para Node.js.
- [multer](https://github.com/expressjs/multer) - Middleware para o framework web "express" utilizado para upload de arquivos.
- [multer-s3](https://github.com/badunk/multer-s3) - Mecanismo de armazenamento para AWS S3 usando `multer`.

## Versionamento

Para ver as versões disponíveis, consulte [as tags neste repositório](https://github.com/kazordoon/nodejs-image-upload-multer/tags).

## Autores

- **Felipe Barros** - *Trabalho inicial* - [kazordoon](https://github.com/kazordoon)

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
