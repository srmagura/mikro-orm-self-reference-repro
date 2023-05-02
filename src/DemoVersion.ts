import {
  Entity,
  OneToOne,
  PrimaryKey,
  type Ref,
  Reference,
} from "@mikro-orm/core";

@Entity()
export class DemoVersion {
  @PrimaryKey()
  id!: number;

  @OneToOne(() => DemoVersion, { ref: true, nullable: true })
  parent: Ref<DemoVersion> | null;

  constructor(parentId: number | undefined) {
    this.parent =
      typeof parentId === "number"
        ? Reference.createFromPK(DemoVersion, parentId)
        : null;
  }
}
