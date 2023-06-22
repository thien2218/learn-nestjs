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
import { CreateReportDto, ReportDto } from "./report.dto";

@Controller("report/:type")
export class ReportController {
   constructor(private readonly reportService: ReportService) {}

   @Get()
   getAllReports(@Param("type") type: ReportType): ReportDto[] {
      return this.reportService.getAllReports(type);
   }

   @Get(":id")
   getReportById(
      @Param("type") type: ReportType,
      @Param("id") id: string
   ): ReportDto {
      return this.reportService.getReportById(type, id);
   }

   @Post()
   createReport(
      @Body() body: CreateReportDto,
      @Param("type") type: ReportType
   ): ReportDto {
      return this.reportService.createReport(body, type);
   }

   @Put(":id")
   updateReportById(
      @Body() body: CreateReportDto,
      @Param("id") id: string,
      @Param("type") type: ReportType
   ): ReportDto {
      const reportIndex = this.reportService.findReportIndex(type, id);
      return this.reportService.updateReportById(body, reportIndex);
   }

   @HttpCode(204)
   @Delete(":id")
   deleteReportById(@Param("type") type: ReportType, @Param("id") id: string) {
      const reportIndex = this.reportService.findReportIndex(type, id);
      this.reportService.deleteReportById(reportIndex);

      return;
   }
}
