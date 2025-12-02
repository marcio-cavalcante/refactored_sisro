import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-loader',
	imports: [CommonModule],
	templateUrl: './loader.html',
	styleUrl: './loader.scss',
})
export class Loader {

	@Input() size: number = 40;
	@Input() color: string = '#3f51b5';

}
