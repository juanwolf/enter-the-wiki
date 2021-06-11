@ObjectType()
export class Active extends Item {
    @Field({ nullable: true })
    dps?: number

    constructor(name:string, description: string, quality: string, dps:number) {
        super(name, description, quality);
        this.dps = dps;
    }
}
