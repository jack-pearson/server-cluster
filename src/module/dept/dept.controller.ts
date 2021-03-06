/*
 * @Author: jack-pearson
 * @Date: 2022-01-17 15:06:34
 * @LastEditTime: 2022-01-19 10:47:27
 * @LastEditors: jack-pearson
 * @FilePath: /server-cluster/src/module/dept/dept.controller.ts
 * @Description:
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ParameterCheckPipe } from 'src/common';
import { DeptDto } from 'src/dto';
import { DeptService } from './dept.service';
@Controller('dept')
export class DeptController {
  constructor(private readonly deptService: DeptService) {}

  @HttpCode(200)
  @Post('create')
  @UsePipes(new ParameterCheckPipe())
  async createDept(@Body() dept: DeptDto) {
    return await this.deptService.createDept(dept);
  }

  @HttpCode(200)
  @Post('update')
  @UsePipes(new ParameterCheckPipe())
  async updateDept(@Body() dept: DeptDto) {
    return await this.deptService.updateDept(dept);
  }

  @HttpCode(200)
  @Get('query')
  async query(@Query() query: any) {
    return await this.deptService.query(query);
  }

  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteDept(@Param('id') id: string) {
    return await this.deptService.deleteDept(id);
  }
}
