import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IceCreamService } from './ice-cream.service';
import { CreateIceCreamDto } from './dto/create-ice-cream.dto';
import { UpdateIceCreamDto } from './dto/update-ice-cream.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ice-cream')
@Controller('ice-cream')
export class IceCreamController {
  constructor(private readonly iceCreamService: IceCreamService) {}

  @Post()
  create(@Body() createIceCreamDto: CreateIceCreamDto) {
    return this.iceCreamService.create(createIceCreamDto);
  }

  @Get()
  findAll() {
    return this.iceCreamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iceCreamService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIceCreamDto: UpdateIceCreamDto,
  ) {
    return this.iceCreamService.update(id, updateIceCreamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iceCreamService.remove(id);
  }
}
