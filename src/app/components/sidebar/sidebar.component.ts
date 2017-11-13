import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
    moduleId: module.id,
    selector: 'sidebarList',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    togglePopUp(){
        $(".popUp").toggle();
    }
}
