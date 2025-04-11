import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'allorders/:userId',
    renderMode: RenderMode.Server
  },
  {
    path: 'shipping-address/:cartId',
    renderMode: RenderMode.Server
  },
  {
    path: 'productdetails/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
