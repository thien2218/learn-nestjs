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
import { ReportService, ReportType } from "./report.service";
import { ReportDto } from "./report.dto";

@Controller("report/:type")
export class ReportController {
   constructor(private readonly reportService: ReportService) {}

   @Get()
   getAllReports(@Param("type") type: ReportType) {
      return this.reportService.getAllReports(type);
   }

   @Get(":id")
   getReportById(@Param("type") type: ReportType, @Param("id") id: string) {
      return this.reportService.getReportById(type, id);
   }

   @Post()
   createReport(@Body() body: ReportDto, @Param("type") type: ReportType) {
      return this.reportService.createReport(body, type);
   }

   @Put(":id")
   updateReportById(
      @Body() body: ReportDto,
      @Param("id") id: string,
      @Param("type") type: ReportType
   ) {
      const reportIndex = this.reportService.findReportIndex(type, id);
      if (reportIndex === -1) return;
      return this.reportService.updateReportById(body, reportIndex);
   }

   @HttpCode(204)
   @Delete(":id")
   deleteReportById(@Param("type") type: ReportType, @Param("id") id: string) {
      const reportIndex = this.reportService.findReportIndex(type, id);
      if (reportIndex === -1) return;
      this.reportService.deleteReportById(reportIndex);

      return;
   }
}
