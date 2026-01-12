📱 DRIVEN RECHARGE API

🚀 Sobre
API para gerenciamento de telefones, operadoras e recargas, permitindo cadastro de números, criação de recargas e visualização de um resumo por documento (CPF).

---
✨ Funcionalidades
- 📞 Cadastro de telefones
- 🏷️ Associação com operadoras
- 💳 Criação de recargas
- 📄 Listagem de recargas
- 📊 Resumo consolidado por documento
---
🔗 Link Deploy Render
---
🛠 Tecnologias
- Node.js
- TypeScript
- Express
- PostgreSQL
- Joi
- dotenv
---

⚙️ Como rodar
1️⃣ Clone o repositório  
2️⃣ Execute: npm install  
3️⃣ Crie um .env com:
DATABASE_URL=postgres://user:password@localhost:5432/db
PORT=5000  
4️⃣ Execute: npm run dev  

---
📬 Rotas

POST /phones  
POST /recharges  
GET /recharges/:phoneId  
GET /summary/:document  

---
📐 DIAGRAMA (ASCII)

PHONES
- id (PK)
- number
- name
- description
- document
- carrier_id (FK -> carriers.id)
---
RECHARGES
- id (PK)
- phone_id (FK -> phones.id)
- amount
- created_at
---
🔗 RELACIONAMENTOS

CARRIERS 1 --- N PHONES  
PHONES 1 --- N RECHARGES  

---
🗄️ SQL DE CRIAÇÃO DAS TABELAS

```sql
CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  number VARCHAR(11) UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  document VARCHAR(20) NOT NULL,
  carrier_id INTEGER NOT NULL REFERENCES carriers(id)
);

CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  phone_id INTEGER NOT NULL REFERENCES phones(id),
  amount NUMERIC(10,2) NOT NULL CHECK (amount BETWEEN 10 AND 1000),
  created_at TIMESTAMP DEFAULT NOW()
);
```
---
📌 Regras de Negócio
- ❌ Não pode haver números duplicados
- 📑 Um documento pode ter até 3 números
- 💰 Recargas entre R$10 e R$1000
---
📄 Projeto acadêmico – Driven Education
