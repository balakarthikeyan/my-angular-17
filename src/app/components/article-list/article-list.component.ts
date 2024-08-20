import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleComponent } from '../article/article.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-article-list',
	standalone: true,
	imports: [CommonModule, ArticleComponent],
	templateUrl: './article-list.component.html',
	styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
	articles: Article[] = [];

	constructor(
		private articleService: ArticleService
	) { }

	ngOnInit(): void {
		this.articles = this.articleService.getArticles();
	}

	updateArticle(updatedArticle: Article) {
        const index = this.articles.findIndex(m => m.id === updatedArticle.id);
        if (index !== -1) {
            this.articles[index] = updatedArticle;
        }
    }
}
