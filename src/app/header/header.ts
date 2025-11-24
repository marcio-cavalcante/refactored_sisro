import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	imports: [],
	templateUrl: './header.html',
	styleUrl: './header.scss',
})
export class Header {
	@Input() sidebarAberto = true;
	@Output() toggleSidebarEvent = new EventEmitter<void>();

	toggleSidebar() {
		this.toggleSidebarEvent.emit();
	}

}
