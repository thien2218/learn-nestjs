import {
   Body,
   Controller,
   Delete,
   Get,
   HttpCode,
   Param,
   Post,
   Put
} from "@nestjs/common";
import AppService, { ReportType } from "./app.service";
import { ReportDto } from "./app.dto";

@Controller("report/:type")
export default class AppController {
   constructor(private readonly appService: AppService) {}

   @Get()
   getAllReports(@Param("type") type: ReportType) {
      return this.appService.getAllReports(type);
   }

   @Get(":id")
   getReportById(@Param("type") type: ReportType, @Param("id") id: string) {
      return this.appService.getReportById(type, id);
   }

   @Post()
   createReport(@Body() body: ReportDto, @Param("type") type: ReportType) {
      return this.appService.createReport(body, type);
   }

   @Put(":id")
   updateReportById(
      @Body() body: ReportDto,
      @Param("id") id: string,
      @Param("type") type: ReportType
   ) {
      const reportIndex = this.appService.findReportIndex(type, id);
      if (reportIndex === -1) return;
      return this.appService.updateReportById(body, reportIndex);
   }

   @HttpCode(204)
   @Delete(":id")
   deleteReportById(@Param("type") type: ReportType, @Param("id") id: string) {
      const reportIndex = this.appService.findReportIndex(type, id);
      if (reportIndex === -1) return;
      this.appService.deleteReportById(reportIndex);

      return;
   }
}
