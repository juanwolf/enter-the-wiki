import { Field, ObjectType, Float } from "type-graphql";

import { Item } from "./item.ts";


@ObjectType()
export class Gun extends Item {
    @Field(type => Float)
    dps: number;

    constructor(name, description, quality) {
        super(name, description, quality);
    }

    constructor(name, description, quality, dps) {
        super(name, description, quality);
        this.dps = dps;
    }
}
