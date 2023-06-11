import { Actions, CommentFragment, OrderFragment } from "@/lib/graphql/schema.generated";
import { createMongoAbility, MongoAbility, RawRuleOf } from "@casl/ability";

export type Subjects = CommentFragment | OrderFragment | string;
export type Abilities = [Actions, Subjects];
export type AppAbility = MongoAbility<Abilities>;

export function createAbility(rules: RawRuleOf<AppAbility>[]): AppAbility {
  return createMongoAbility(rules);
}
