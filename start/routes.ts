/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

Route.on("/").redirect("/auth/login");

// Auth Stuff
Route.group(() => {
  Route.get("/login", "AuthController.loginShow")
    .as("login.show")
    .middleware(["bounce-login-page"]);
  Route.get("/signup", "AuthController.signupShow").as("signup.show");
  Route.get("/logout", "AuthController.logout").as("logout");

  Route.post("/login", "AuthController.login").as("login");
  Route.post("/signup", "AuthController.signup").as("signup");
}).prefix("auth");

// Admin Stuff

// User/Client Stuff
Route.group(() => {
  Route.get("/", "TradeCenterController").as("trade-center");

  Route.get("/deposit", "DepositController.show").as("deposit.show");
  Route.get("/withdraw", "WithdrawController.show").as("withdraw.show");
  Route.get("/profile", "ProfileController.show").as("profile.show");
  Route.get("/change-password", "ProfileController.changePasswordShow").as(
    "change-password.show"
  );
})
  .prefix(":username")
  .middleware("auth")
  .middleware("bounce-unrecognised-url-username");
