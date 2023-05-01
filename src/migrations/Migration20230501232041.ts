import { Migration } from '@mikro-orm/migrations';

export class Migration20230501232041 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "demo_version" ("id" serial primary key, "parent_id" int null);'
    );
    this.addSql(
      'alter table "demo_version" add constraint "demo_version_parent_id_unique" unique ("parent_id");'
    );

    this.addSql(
      'alter table "demo_version" add constraint "demo_version_parent_id_foreign" foreign key ("parent_id") references "demo_version" ("id") on update cascade on delete set null;'
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "demo_version" drop constraint "demo_version_parent_id_foreign";'
    );

    this.addSql('drop table if exists "demo_version" cascade;');
  }
}
