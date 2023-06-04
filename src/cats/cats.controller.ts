import { Controller,Get, Post,HttpCode, Param, Body, Res, HttpStatus} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    @Get()
  findAll(@Res() res: Response) {
     res.status(HttpStatus.OK).json([]);
  }
    @Post()
    async create(@Body() CreateCatDto: CreateCatDto) {
     this.catsService.create(CreateCatDto)
    }
    @Get(':id')
    findOne(@Param() params: any): string {
      console.log(params.id);
      return `This action returns a #${params.id} cat`;
    }


}
