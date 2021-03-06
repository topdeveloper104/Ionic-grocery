import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';

import { CalendarModule } from 'ion2-calendar';

// Pages
import { HomePage } from '../pages/home/home';
import { ProductsTab } from '../pages/products/products';
import { ShopsListPage } from '../pages/shops-list/shops-list';
import { CategoryListPage } from '../pages/category-list/category-list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { ProductListByCategoryPage } from "../pages/product-list-by-category/product-list-by-category-page";
import { ProductListByCategory } from "../pages/product-list-by-category/product-list-by-category";
import { ProductDetailsPage } from "../pages/product-details/product-details";
import { CartPage } from '../pages/cart/cart';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DateTimePage } from '../pages/date-time/date-time';
import { OrderItemsPage } from '../pages/order-items/order-items';

// Services
import { UserService } from '../services/user-services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsTab,
    ShopsListPage,
    CategoryListPage,
    ProductListByCategoryPage,
    ProductListByCategory,
    LoginPage,
    RegisterPage,
    ProductDetailsPage,
    CartPage,
    DateTimePage,
    OrderItemsPage
  ],
  imports: [
    BrowserModule,
    SuperTabsModule,
    IonicModule.forRoot(MyApp),
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsTab,
    ShopsListPage,
    CategoryListPage,
    ProductListByCategoryPage,
    ProductListByCategory,
    LoginPage,
    RegisterPage,
    ProductDetailsPage,
    CartPage,
    DateTimePage,
    OrderItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
