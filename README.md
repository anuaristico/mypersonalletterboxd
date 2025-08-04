# My Personal Letterboxd

![Versão](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Licença](https://img.shields.io/badge/license-MIT-green.svg)

## 🎬 Sobre o Projeto

**My Personal Letterboxd** é uma aplicação web inspirada na popular plataforma Letterboxd, criada para que os usuários possam registrar os filmes que assistiram. Nela, é possível dar notas, fazer comentários e marcar seus filmes favoritos, criando um diário cinematográfico pessoal.

Este é um projeto full-stack desenvolvido como um estudo prático, utilizando tecnologias modernas para o backend e o frontend.

## ✨ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **Backend:**
  - [**Python**](https://www.python.org/)
  - [**FastAPI**](https://fastapi.tiangolo.com/): Um framework web moderno e de alta performance para a construção de APIs com Python.

- **Frontend:**
  - [**Angular**](https://angular.io/): Uma plataforma de desenvolvimento para a construção de aplicações web de página única (SPAs).
  - [**TypeScript**](https://www.typescriptlang.org/)
  - **HTML5** e **SCSS**

## 🚀 Como Executar o Projeto

Para executar a aplicação em seu ambiente local, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [Python](https://www.python.org/downloads/) instalados em sua máquina.

### Backend (API com FastAPI)

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/anuaristico/mypersonalletterboxd.git](https://github.com/anuaristico/mypersonalletterboxd.git)
    cd mypersonalletterboxd/backend # Navegue até a pasta do backend
    ```

2.  **Crie e ative um ambiente virtual:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # No Windows, use `venv\Scripts\activate`
    ```

3.  **Instale as dependências:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Execute o servidor:**
    ```bash
    uvicorn main:app --reload
    ```
    A API estará disponível em `http://127.0.0.1:8000`.

### Frontend (Aplicação com Angular)

1.  **Navegue até a pasta do frontend:**
    ```bash
    cd ../frontend # A partir da raiz do projeto
    ```

2.  **Instale as dependências do Node.js:**
    ```bash
    npm install
    ```

3.  **Execute a aplicação:**
    ```bash
    ng serve
    ```

    A aplicação estará disponível em `http://localhost:4200/`.

    ## Exemplos de uso

    <p align="center">
      <img src="/imgs/1.png" alt="Imagem 1" width="45%" />
      <img src="/imgs/2.png" alt="Imagem 2" width="45%" />
    </p>

