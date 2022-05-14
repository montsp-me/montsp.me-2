import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoryPageModule } from './category/category.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then( m => m.ArticleModule)
  },
  {
    path: 'articlelist',
    loadChildren: () => import('./articlelist/articlelist.module').then( m => m.ArticlelistPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'articlemail',
    loadChildren: () => import('./articlemail/articlemail.module').then( m => m.ArticlemailPageModule)
  },
  {
    path: 'otoiawase',
    loadChildren: () => import('./otoiawase/otoiawase.module').then( m => m.OtoiawasePageModule)
  },
  {
    path: 'aboutsite',
    loadChildren: () => import('./aboutsite/aboutsite.module').then( m => m.AboutsitePageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'category2',
    loadChildren: () => import('./category2/category2.module').then( m => m.Category2Module)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
