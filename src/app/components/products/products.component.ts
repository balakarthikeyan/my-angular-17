import { CommonModule, CurrencyPipe, SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [CommonModule, CurrencyPipe, SlicePipe],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent {
    http = inject(HttpClient);
    $searchFilter = signal<string>('');
    $favorites = signal<Product[]>([]);

    // Properties
    showsTooltip = true; // show or not
    tooltipText = ''; // text to be binded
    tooltipTopY!: any;
    tooltipLeftX!: any;

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

    // Methods
    onHover(event: any, itemName: string): void {
        this.tooltipText = itemName;
        if (event) {
            this.showsTooltip = true;
            this.tooltipTopY = event.clientY + 'px';
            this.tooltipLeftX = event.clientX + 'px';
        }
    }
}