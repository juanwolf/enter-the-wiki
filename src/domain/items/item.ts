import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Item {
    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    quality: string;

    constructor(name: string, description: string, quality: string) {
        this.name = name;
        this.description = description;
        this.quality = quality;
    };
}
