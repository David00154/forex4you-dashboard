import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async loginShow({ view }: HttpContextContract) {
    return view.render("auth/login");
  }
  public async signupShow({ view }: HttpContextContract) {
    return view.render("auth/signup");
  }

  public async logout({ view }: HttpContextContract) {
    // Do logout stuff first before rendering the logout page

    return view.render("auth/logout");
  }
}
