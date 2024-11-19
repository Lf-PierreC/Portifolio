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

        const textosProject = document.createElement('div');
        textosProject.className = 'textos-project';

        const tituloProject = document.createElement('h1');
        tituloProject.className = 'title-project';
        tituloProject.textContent = this.titulo;
        textosProject.appendChild(tituloProject);

        const descricaoProject = document.createElement('p');
        descricaoProject.className = 'descrition-project';
        descricaoProject.textContent = this.descricao;
        textosProject.appendChild(descricaoProject);
        
        projectContainer.appendChild(imgProject);
        projectContainer.appendChild(textosProject);

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


const project1 = new project('PORTIFOLIO', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, necessitatibus in fugit quibusdam, quia laboriosam quas reiciendis tenetur officia quod illum ex ipsum perspiciatis. Porro rem ad sequi assumenda quo.', 'imagens/print-portifolio.png','https://luizmyprofile.netlify.app/');
project1.addProjeto();
const project2 = new project('SPORTLINES', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, necessitatibus in fugit quibusdam, quia laboriosam quas reiciendis tenetur officia quod illum ex ipsum perspiciatis. Porro rem ad sequi assumenda quo.', 'imagens/print-sportlines.png','https://sportlines.netlify.app/');
project2.addProjeto();

