import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

/**
 * An array that defines all the routes in the tab menu in the bottom of the app.
 * Path refers to the nested url, meaning tabs/leftover leads to the leftover page.
 *
 * @var {[type]}
 */
const routes: Routes = [
  {
    path: 'tabs', // the suburl for the menu
    component: TabsPage, // the menu component
    children: [ // the last part of the url
      {
        path: 'leftover', // leads to leftover
        loadChildren: () => import('../leftover/leftover.module').then(m => m.LeftoverPageModule) // links the path to the component
      },
      {
        path: 'grocery',
        loadChildren: () => import('../grocery/grocery.module').then(m => m.GroceryPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/leftover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '', // no url leads to the leftover page, making it the starting page
    redirectTo: '/tabs/leftover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
