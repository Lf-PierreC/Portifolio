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


const project1 = new project('PORTIFOLIO', 'Meu portifólio foi o primeiro porjeto que realizei e que permanece desde então em constante aprimoramento', 'imagens/print-portifolio.png','https://luizmyprofile.netlify.app/');
project1.addProjeto();
const project2 = new project('SPORTLINES', 'A Sportlines é uma empresa que está iniciando suas atividades no mercado esportivo, e solicitou que criasse uma pagina para poderem divulgar seu produto principal', 'imagens/print-sportlines.png','https://sportlines.netlify.app/');
project2.addProjeto();
const project3 = new project('GIFT LIST', 'Este projeto foi um pedido de um casal de amigos que precisavam criar a sua lista de presente de casamento, decidi então ajudá-los com este projeto para poder adicionar tambem em meu portifólio', 'imagens/print-giftList.jpg','https://weddinggiftlist.netlify.app/');
project3.addProjeto();

