import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  titleParallax_1: string = 'A estrada até aqui...';
  titleParallax_2: string = 'Professor';
  titleParallax_3: string = 'Desenvolvedor de Software';
  subtitleParallax_1: string = 'O início da jornada';
  subtitleParallax_2: string = 'Matemática';
  subtitleParallax_3: string = 'Tecnologia';

  textParallax_1_1: string =
    'Tudo começou quando decidi investir nos estudos, uma década atrás.';
  textParallax_1_2: string =
    'E como qualquer mudança, exigiu tanto esforço que até hoje nao descobri o significado de férias';

  textParallax_2_1: string =
    'No primeiro semestre de 2018, após muitas tentativas em diversos concursos públicos, resolvi prestar o vestibular, pois já atuava como monitor de matemática no curso, e resolvi tentar o vestibular para ver o que acontecia.';
  textParallax_2_2: string =
    'E para minha alegria, passei em primeiro lugar para Unirio (Universidade Federal do Estado do Rio de Janeiro). E a partir desse momento minsitrei aula de matemática, além de trabalhos voluntários e até um canal no YouTube.Até que encontrei minha verdadeira PAIXÃO!';

  textParallax_3_1: string =
    'No último trimeste de 2021, tive meu primeiro contato com tecnologia e a partir desse ponto decidi que era isso!';
  textParallax_3_2: string =
    'Alguns amigos me ajudaram com direcionamento, cursos e resolvendo muitas, muitas dúvidas. E hoje sigo satisfeito na minha vida profissional, com a carreira que demorei a achar, mas que graças a Deus encontrei.';

  ngOnInit(): void {
    this.textParallax_1_1;
    this.textParallax_1_2;
    this.textParallax_2_1;
    this.textParallax_2_2;
    this.textParallax_3_1;
    this.textParallax_3_2;
  }
}
