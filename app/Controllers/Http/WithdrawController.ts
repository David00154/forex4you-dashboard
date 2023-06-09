import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class WithdrawController {
  public async show({ view }: HttpContextContract) {
    return view.render("[user_name]/withdraw");
  }
}
