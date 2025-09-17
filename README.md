# Campanhas API

API RESTful desenvolvida em NestJS com TypeScript para gerenciamento de campanhas, utilizando MongoDB como banco de dados e Swagger para documentação.

## 🚀 Funcionalidades

- ✅ CRUD completo de campanhas
- ✅ Validação de dados com class-validator
- ✅ Documentação automática com Swagger
- ✅ Conexão com MongoDB usando Mongoose
- ✅ Filtros por tipo de campanha e projeto
- ✅ Cálculo de total de desembolso
- ✅ Timestamps automáticos (createdAt, updatedAt)

## 📋 Campos da Campanha

- **ID**: Identificador único da campanha
- **Nome de Campanha**: Nome descritivo da campanha
- **Tipo de Campanha**: Categoria da campanha
- **Número da Ação**: Código da ação
- **Número do Projeto**: Código do projeto
- **Total de Desembolso**: Valor total em reais
- **Data Início**: Data de início da campanha
- **Data Finalização**: Data de término da campanha
- **Data de Criação**: Timestamp automático de criação
- **Data de Atualização**: Timestamp automático de atualização

## 🛠️ Tecnologias

- **NestJS**: Framework Node.js
- **TypeScript**: Linguagem de programação
- **MongoDB**: Banco de dados NoSQL
- **Mongoose**: ODM para MongoDB
- **Swagger**: Documentação da API
- **Class Validator**: Validação de dados

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Configure o MongoDB (certifique-se de que está rodando na porta 27017)

4. Inicie o servidor:
\`\`\`bash
npm run start:dev
\`\`\`

## 📚 Documentação

Acesse a documentação Swagger em: `http://localhost:3000/api/docs`

## 🔗 Endpoints

### Campanhas
- `GET /campanhas` - Listar todas as campanhas
- `GET /campanhas/:id` - Buscar campanha por ID
- `POST /campanhas` - Criar nova campanha
- `PATCH /campanhas/:id` - Atualizar campanha
- `DELETE /campanhas/:id` - Deletar campanha

### Filtros e Relatórios
- `GET /campanhas/por-tipo?tipo=Marketing` - Filtrar por tipo
- `GET /campanhas/por-projeto?numeroProjeto=PROJ001` - Filtrar por projeto
- `GET /campanhas/total-desembolso` - Total de desembolso

## 📝 Exemplo de Uso

### Criar uma campanha:
\`\`\`json
POST /campanhas
{
  "id": "CAMP001",
  "nomeCampanha": "Campanha de Marketing Digital 2024",
  "tipoCampanha": "Marketing Digital",
  "numeroAcao": "AC001",
  "numeroProjeto": "PROJ001",
  "totalDesembolso": 50000.00,
  "dataInicio": "2024-01-01T00:00:00.000Z",
  "dataFinalizacao": "2024-12-31T23:59:59.000Z"
}
\`\`\`

## 🚀 Scripts Disponíveis

- `npm run start` - Iniciar em produção
- `npm run start:dev` - Iniciar em desenvolvimento
- `npm run build` - Build da aplicação
- `npm run test` - Executar testes
- `npm run lint` - Verificar código
