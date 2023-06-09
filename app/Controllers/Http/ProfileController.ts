import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ProfileController {
  public async show({ view }: HttpContextContract) {
    return view.render("[user_name]/profile");
  }

  public async changePasswordShow({ view }: HttpContextContract) {
    return view.render("[user_name]/change_password");
  }
}
