import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AdminController {
  public async users({ auth, view }: HttpContextContract) {
    return view.render("admin/users", { ...auth.user?.toJSON() });
  }
}
