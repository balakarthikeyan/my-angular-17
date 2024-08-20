import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
	providedIn: 'root'
})
export class ArticleService {

	private articles: Article[] = [
		{
			id: 1,
			title: 'Article 1',
			imageUrl: 'https://via.placeholder.com/600/92c952',
			comments: ['Article 1 Comment 1', 'Article 1 Comment 2', 'Article 1 Comment 3']
		},
		{
			id: 2,
			title: 'Article 2',
			imageUrl: 'https://via.placeholder.com/150/66b7d2',
			comments: ['Article 2 Comment 1', 'Article 2 Comment 2', 'Article 2 Comment 3']
		},
		{
			id: 3,
			title: 'Article 3',
			imageUrl: 'https://via.placeholder.com/600/f66b97',
			comments: ['Article 3 Comment 1', 'Article 3 Comment 2', 'Article 3 Comment 3']
		},
	];

	constructor() { }

	getArticles(): Article[] {
		return this.articles;
	}
}
