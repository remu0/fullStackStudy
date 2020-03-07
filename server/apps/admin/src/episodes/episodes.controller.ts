import { Controller, Get } from '@nestjs/common';
import { Episode } from '@libs/db/models/episode.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Course } from '@libs/db/models/course.model';

@Crud({
    model: Episode
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
    constructor(
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
        @InjectModel(Course) private readonly courseModel: ReturnModelType<typeof Course>
    ) { }
    @Get('option')
    async option() {
        const courses = (await this.courseModel.find()).map(v => ({
            label: v.name,
            value: v._id
        }))
        return {
            tittle: "课时管理",
            translate: false,
            column: [
                { prop: "course", label: "所属课程", type: "select", dicData: courses, row: true },
                { prop: "name", label: "课时名称", span: 24 },
                { prop: "file", label: "视频文件", type: "upload",width: 120, span: 24, listType: "picture-img",action: "/upload" },
            ]
        }
    }
}
