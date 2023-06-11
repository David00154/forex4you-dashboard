import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({
    serialize(value) {
      return new Intl.NumberFormat("en-us").format(value);
    },
  })
  public amount: number;

  @column()
  public userId: number;

  @column({
    serialize(value) {
      return Boolean(value);
    },
  })
  public status: boolean;

  @column()
  public transactionType: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
