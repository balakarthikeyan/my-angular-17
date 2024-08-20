import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
    selector: 'app-article',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './article.component.html',
    styleUrl: './article.component.css'
})
export class ArticleComponent {
    @Input()
    article!: Article;
    @Output() materialChange = new EventEmitter<Article>();

    onInputChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.article = { ...this.article, title: target.value };
        this.materialChange.emit(this.article);
    }
}
