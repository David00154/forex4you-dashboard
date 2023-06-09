import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TradeCenterController {
  public async handle({ view }: HttpContextContract) {
    return view.render("[user_name]/trade_center");
  }
}
