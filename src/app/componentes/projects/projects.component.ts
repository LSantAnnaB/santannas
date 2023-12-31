import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  title_parallax_project:string ='Skills'
  subtitle_parallax_project_1:string='Back-end'
  text_parallax_project_1_1:string='Linguagem: Java'
  text_parallax_project_1_2:string='Hard Skill: Spring Framework, Maven, JPA, API REST, S.O.L.I.D,  AWS, Microsserviços, RabbitMQ, Grafana, FortFy, Splunk Scrum, Agile, Jira '
  text_parallax_project_1_3:string='Versionamento: GitHub, Pipeline e CICD, OpenApi'
  subtitle_parallax_project_2:string='Front-end'
  text_parallax_project_2_1:string='Linguagem: JavaScript, TypeScript'
  text_parallax_project_2_2:string='Hard Skill: HTML, Css, Angular, Node.JS'



  images: string[] = [
    '../../../assets/projects/contabil-01.png',
    '../../../assets/projects/contabil-02.png',
    '../../../assets/projects/contabil-03.png',
    '../../../assets/projects/padoca-01.png',
    '../../../assets/projects/padoca-02.png',
    '../../../assets/projects/padoca-03.png',
  ];

  responsiveImages: string[] = [
    '../../../assets/projects/response_contabil-01.png',
    '../../../assets/projects/response_contabil-02.png',
    '../../../assets/projects/response_contabil-03.png',
    '../../../assets/projects/response_padoca-01.png',
    '../../../assets/projects/response_padoca-02.png',
    '../../../assets/projects/response_padoca-03.png',
  ];

  links: string[] = [
    'https://dg-contabilidade.vercel.app/home',
    'https://dg-contabilidade.vercel.app/servicos',
    'https://dg-contabilidade.vercel.app/consultoria',
    'https://padaria-nova-alianca.vercel.app/home',
    'https://padaria-nova-alianca.vercel.app/produtos',
    'https://padaria-nova-alianca.vercel.app/encomenda',

  ];
  currentImageIndex: number = 0;
  currentResponsiveImageIndex: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.showNextImage();
    }, 4420);
    setInterval(() => {
      this.showNextResponsiveImage();
    }, 4420);
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
  showNextResponsiveImage() {
    this.currentResponsiveImageIndex = (this.currentResponsiveImageIndex + 1) % this.responsiveImages.length;
  }

  getCurrentImage(): string {
    return this.images[this.currentImageIndex];
  }
  getCurrentResponsiveImage(): string {
    return this.responsiveImages[this.currentResponsiveImageIndex];
  }

  getCurrentLink(): string {
    return this.links[this.currentImageIndex];
  }
  getCurrentResponsiveLink(): string {
    return this.links[this.currentResponsiveImageIndex];
  }
}
