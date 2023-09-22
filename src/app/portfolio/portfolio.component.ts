import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Angular App',
      summary: 'Test Description',
      description: '',
      projectLink: '',
      pictures: [],
      tags: [
        Tag.ANGULAR,
        Tag.TYPESCRIPT,
        Tag.HTML,
        Tag.CSS,
        Tag.GIT,
        Tag.GITHUB,
      ],
    },
    {
      id: 1,
      name: 'Sample Java App',
      summary: 'Test Description',
      description: '',
      projectLink: '',
      pictures: [],
      tags: [Tag.JAVA, Tag.GIT, Tag.GITHUB],
    },
    {
      id: 2,
      name: 'Sample JS App',
      summary: 'Test Description',
      description: '',
      projectLink: '',
      pictures: [],
      tags: [
        Tag.JAVASCRIPT,
        Tag.TYPESCRIPT,
        Tag.HTML,
        Tag.CSS,
        Tag.GIT,
        Tag.GITHUB,
      ],
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Adem Basoglu - Portfolio');
  }
}
