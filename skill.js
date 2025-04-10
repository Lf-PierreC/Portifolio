class skill {
    constructor(nome,nivel,icone) {
        this.nome = nome;
        this.nivel = nivel;
        this.icone = icone;
    }

    nivelEstrela(nivel){
        const estrelaVazia = `<svg  class="vazia" xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-star" viewBox="0 0 16 16" display='inline'>
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
        </svg>`;
        const estrelaCheia = `<svg  class="cheia" xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-star-fill" viewBox="0 0 16 16" display='inline'>
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>`;
        const estrelaMeia = `<svg  class="meia" xmlns="http://www.w3.org/2000/svg" width="25" height="25"  class="bi bi-star-half" viewBox="0 0 16 16" display='inline'>
        <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
        </svg>`;

        const containerEstrelas = document.createElement('div');
        containerEstrelas.className = 'nivel';

        if(nivel >= 0 && nivel < 0.5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia; 
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela05);
        } else if(nivel >= 0.5 && nivel < 1){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaMeia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela05);
        } else if(nivel >= 1 && nivel < 1.5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela05);
        } else if(nivel >= 1.5 && nivel < 2){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaMeia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela05);
        } else if(nivel >= 2 && nivel < 2.5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela05);
        } else if(nivel >= 2.5 && nivel < 3){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaMeia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela05);
        } else if(nivel >= 3 && nivel < 3.5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela05);
        } else if(nivel >= 3.5 && nivel < 4){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaMeia;
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela05);
        } else if(nivel >= 4 && nivel < 4.5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaVazia;
            containerEstrelas.appendChild(estrela05);
        } else if(nivel >= 4.5 && nivel < 5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaMeia;
            containerEstrelas.appendChild(estrela05);
        } else if(nivel >= 5){
            const estrela01 = document.createElement('div');
            estrela01.className = 'estrela' 
            estrela01.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela01)
            const estrela02 = document.createElement('div');
            estrela02.className = 'estrela' 
            estrela02.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela02);
            const estrela03 = document.createElement('div');
            estrela03.className = 'estrela' 
            estrela03.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela03);
            const estrela04 = document.createElement('div');
            estrela04.className = 'estrela' 
            estrela04.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela04); 
            const estrela05 = document.createElement('div');
            estrela05.className = 'estrela' 
            estrela05.innerHTML = estrelaCheia;
            containerEstrelas.appendChild(estrela05);
        }

            return containerEstrelas;

    }

    criarElemento() {
        const skillContainer = document.createElement('div');
        skillContainer.className = 'skill';

        const iconSkill = document.createElement('div');
        iconSkill.className = 'icon-skill';

        const imgSkill = document.createElement('img');
        imgSkill.src = this.icone;
        imgSkill.alt = `${this.nome} Icon`;
        imgSkill.className = 'icon';
        iconSkill.appendChild(imgSkill);

        if (this.nome === 'JavaScript') {
            imgSkill.classList.add('js-icon'); 
        }
        if (this.nome === 'Figma') {
            imgSkill.classList.add('figma-icon'); 
        }
        if (this.nome === 'PowerBI') {
            imgSkill.classList.add('bi-icon'); 
        }
        if (this.nome === 'UX Design') {
            imgSkill.classList.add('ux-icon'); 
        }
        if (this.nome === 'Photoshop') {
            imgSkill.classList.add('ps-icon'); 
        }
        if (this.nome === 'Illustrator') {
            imgSkill.classList.add('il-icon'); 
        }
        if (this.nome === 'SQL') {
            imgSkill.classList.add('sql-icon'); 
        }
        if (this.nome === 'React') {
            imgSkill.classList.add('react-icon'); 
        }

        const nomeSkill = document.createElement('p');
        nomeSkill.className = 'nome-skill';
        nomeSkill.textContent = this.nome;

        const nivelSkillContainer= this.nivelEstrela(this.nivel);
        
        skillContainer.appendChild(iconSkill);
        skillContainer.appendChild(nomeSkill);
        skillContainer.appendChild(nivelSkillContainer);

        return skillContainer;
    }

    addSkill(){
        const skillElemento = this.criarElemento();
        document.getElementById('skills-container').appendChild(skillElemento);
    }

}


const skill1 = new skill('HTML',4.5,'icones/html.png');
skill1.addSkill();

const skill2 = new skill('CSS',3.5,'icones/CSS.png');
skill2.addSkill();

const skill3 = new skill('JavaScript',3.5,'icones/js.webp');
skill3.addSkill();

const skill11 = new skill('React',1.5,'icones/react.png');
skill11.addSkill();

const skill4 = new skill('Figma',3.5,'icones/figma.png');
skill4.addSkill();

const skill5 = new skill('PowerBI',3.5,'icones/bi.png');
skill5.addSkill();

const skill7 = new skill('UX Design',3,'icones/ux.png');
skill7.addSkill();

const skill8 = new skill('Photoshop',4,'icones/ps.png');
skill8.addSkill();

const skill9 = new skill('Illustrator',3.5,'icones/ilustrator.png');
skill9.addSkill();

const skill10 = new skill('SQL',3,'icones/sql.png');
skill10.addSkill();


const skillsContainer = document.getElementById('skills-container');

function scrollRight() {
    skillsContainer.scrollBy({ left: 300, behavior: 'smooth' });
}

function scrollToLeft() {
    skillsContainer.scrollBy({ left: -300, behavior: 'smooth' });
}
