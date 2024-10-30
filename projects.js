class project {
    constructor(titulo,descricao,imagem, route) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.route = route
    }

    criarProject(){
        const projectContainer = document.createElement('div');
        projectContainer.className = 'project';

        projectContainer.onclick = () => this.abrirProjeto();

        const imgProject = document.createElement('div');
        imgProject.className = 'img-project';

        const imgSrc = document.createElement('img');
        imgSrc.src = this.imagem;
        imgSrc.alt = `${this.titulo} Imagem`;
        imgSrc.className = 'print-project'
        imgProject.appendChild(imgSrc);

        const tituloProject = document.createElement('h1');
        tituloProject.className = 'title-project';
        tituloProject.textContent = this.titulo;

        const descricaoProject = document.createElement('p');
        descricaoProject.className = 'descrition-project';
        descricaoProject.textContent = this.descricao;
        
        projectContainer.appendChild(imgProject);
        projectContainer.appendChild(tituloProject);
        projectContainer.appendChild(descricaoProject);

        return projectContainer;
    }

    abrirProjeto(){
        if (this.route && this.route.trim() !== '') {
            window.open(this.route, '_blank');
        } else {
            window.open(this.imagem, '_blank');
        }
    }


    addProjeto(){
        const ElementProject = this.criarProject();
        document.getElementById('projects').appendChild(ElementProject);
    }
}


const project1 = new project('PORTIFOLIO', 'teste', 'imagens/print-portifolio.png','https://luizmyprofile.netlify.app/');
project1.addProjeto();
const project2 = new project('SPORTLINES', 'teste', 'imagens/print-sportlines.png','https://sportlines.netlify.app/');
project2.addProjeto();

