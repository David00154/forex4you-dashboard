import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "users";

  public async up() {
    // this.schema.alterTable(this.tableName, (table) => {
    // table.dropColumn("account_status");
    // table.string("account_status").defaultTo("");
    // table.ra
    // });

    this.schema.raw(
      `ALTER TABLE ` +
        this.tableName +
        ` MODIFY account_status VARCHAR(255) DEFAULT '';
`
    );
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {});
  }
}
