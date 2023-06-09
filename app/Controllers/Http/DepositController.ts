import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class DepositController {
  public async show({ view }: HttpContextContract) {
    return view.render("[user_name]/deposit");
  }
}
