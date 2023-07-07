import { BadRequestException , PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../boards.model";

export class BoardStatusValidationPipe implements PipeTransform{
    readonly statusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transform(value:any){
        // console.log('value',value);
        // console.log('metadata',metadata);
        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn't in th status options`)
        }
        return value;
    }

    private isStatusValid(status:any){
        const index =this.statusOptions.indexOf(status);
        return index !== -1;
    }
}