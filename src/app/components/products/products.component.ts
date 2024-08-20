import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [CurrencyPipe],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent {
    http = inject(HttpClient);
    $searchFilter = signal<string>('');
    $favorites = signal<Product[]>([]);

    constructor() {
        effect(() => {
            if (this.$favorites().length >= 3) {
                document.body.classList.add('red');
            }
        });
    }

    $productsAPI = toSignal(
        this.http.get<Product[]>('https://fakestoreapi.com/products'),
    );

    $products = computed(() => {
        return this.$productsAPI()?.filter((p) =>
            p.title.toLowerCase().includes(this.$searchFilter()),
        );
    });

    addFavorite(product: Product) {
        this.$favorites.update((p) => [...p, product]);
    }

    clearFavorites(): void {
        this.$favorites.set([]);
    }

    updateFilter(filter: string) {
        const filterValue = filter.length > 3 ? filter : '';
        this.$searchFilter.set(filterValue);
    }
}