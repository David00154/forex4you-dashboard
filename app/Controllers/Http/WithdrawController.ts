import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Transaction from "App/Models/Transaction";
export default class WithdrawController {
  public async show({ view, auth }: HttpContextContract) {
    await auth.user?.load("transactions");
    // let withdraws = auth.user?.transactions.filter(
    //   (v) => v.transactionType == "withdrawal".toUpperCase()
    // );
    // console.log(auth.user?.transactions[0].toJSON());
    return view.render("[user_name]/withdraw", {
      ...auth.user?.toJSON(),
    });
  }

  public async withdraw({
    auth,
    session,
    request,
    response,
  }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: schema.create({
          amount: schema.number([rules.trim()]),
          wallet_address: schema.string([rules.trim()]),
        }),
        messages: {
          required: "The {{ field }} field is required.",
        },
      });
      await Transaction.create({
        amount: payload.amount,
        userId: auth.user?.id,
        status: false,
        transactionType: "withdrawal".toUpperCase(),
        walletAddress: payload.wallet_address,
      });
      session.flash(
        "form.success",
        "Withdrawal has been submitted and awaiting approval"
      );
      return response
        .redirect()
        .toRoute("withdraw.show", { username: auth.user?.userName });
    } catch (error) {
      session.flashAll();
      if (error.messages) {
        session.flash(
          "form.error",
          (Object.values(error.messages)[0] as Array<String>)[0]
        );
      } else {
        session.flash("form.error", "Internal Server Error");
      }
      console.log(error);
      response.redirect().back();
    }
  }
}
