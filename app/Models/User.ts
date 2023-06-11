import { DateTime } from "luxon";
import { column, BaseModel, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import Transaction from "./Transaction";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({
    serialize(value) {
      return Boolean(value);
    },
  })
  public isVerified: boolean;

  @column()
  public fullName: string;

  @column()
  public email: string;

  @column()
  public userName: string;

  @column()
  public country: string;

  @column()
  public phoneNumber: string;

  @column({ serializeAs: null })
  public password: string;
  // new Intl.NumberFormat('en-us').format(value)
  @column()
  public rememberMeToken: string | null;

  @column({
    serialize(value) {
      return new Intl.NumberFormat("en-us").format(value);
    },
  })
  public profit: number;

  @column({
    serialize(value) {
      return new Intl.NumberFormat("en-us").format(value);
    },
  })
  public balance: number;

  @column({
    serialize(value) {
      return new Intl.NumberFormat("en-us").format(value);
    },
  })
  public totalDeposit: number;

  @column({
    serialize(value) {
      return new Intl.NumberFormat("en-us").format(value);
    },
  })
  public totalWithdraws: number;

  @column({
    serialize(value) {
      return new Intl.NumberFormat("en-us").format(value);
    },
  })
  public totalBonus: number;

  @column({
    serialize(value) {
      return new Intl.NumberFormat("en-us").format(value);
    },
  })
  public totalReferralBonus: number;

  @column()
  public tradeDuration: number;

  @column()
  public profitPositivity: number;

  @column()
  public profitPercentage: number;

  @column()
  public validThruDay: string;

  @column()
  public validThruMonth: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Transaction)
  public transactions: HasMany<typeof Transaction>;

  // @beforeSave()
  // public static async hashPassword(user: User) {
  //   if (user.$dirty.password) {
  //     user.password = await Hash.make(user.password);
  //   }
  // }
}
