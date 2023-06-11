import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class DepositController {
  public async show({ view, auth }: HttpContextContract) {
    return view.render("[user_name]/deposit", { ...auth.user?.toJSON() });
  }
}
