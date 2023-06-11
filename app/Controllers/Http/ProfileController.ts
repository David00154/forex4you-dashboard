import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ProfileController {
  public async show({ view, auth }: HttpContextContract) {
    return view.render("[user_name]/profile", { ...auth.user?.toJSON() });
  }

  public async changePasswordShow({ view, auth }: HttpContextContract) {
    return view.render("[user_name]/change_password", {
      ...auth.user?.toJSON(),
    });
  }
}
