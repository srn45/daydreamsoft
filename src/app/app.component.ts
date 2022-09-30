import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabLoadTimes: Date[] = [];
  router: any;

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

//   onTabChanged(event: MatTabChangeEvent): void {
//     switch (event.index) {
//       case 0: // index of the tab
//         // this is our stub tab for link
//         this.router.navigate(['/home']);
//         break;
//       case 1:
//         // do stuff with content or do nothing :)
//         break;
//     }
// }
}
