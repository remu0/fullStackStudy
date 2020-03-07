import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";
import { Course } from "./course.model";

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class Episode {
    @ApiProperty({ description: '课时名称',example:'name1'})
    @prop()
    name: string
    
    @prop()
    file: string

    @prop({ ref: 'Course'})
    course: Ref<Course>
}