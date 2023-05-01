import { Entity, OneToOne, PrimaryKey, type Ref } from '@mikro-orm/core';

@Entity()
export class DemoVersion {
  @PrimaryKey()
  id!: number;

  @OneToOne(() => DemoVersion, { ref: true, nullable: true })
  parent: Ref<DemoVersion> | null = null;
}
