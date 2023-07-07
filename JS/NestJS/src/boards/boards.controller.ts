import { Controller, Get, Post, Body ,Param} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { CreateBoardDTO } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService:BoardsService){}


    @Get('/')
    getAllBoard():Board[]{
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() createBoardDTO:CreateBoardDTO
    ): Board {
        return this.boardsService.createBoard(createBoardDTO);
    }   

    @Get('/:id')
    getBoardbyID(@Param('id') id:string) : Board{
        return this.boardsService.getBoardById(id);
    }
}
