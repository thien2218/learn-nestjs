import { Injectable } from "@nestjs/common";
import { data } from "src/data";
import { v4 as uuid } from "uuid";
import { CreateReportDto, ReportDto } from "./report.dto";
import { plainToClass } from "class-transformer";

export type ReportType = "expense" | "income";

@Injectable()
export class ReportService {
   getAllReports(type: ReportType): ReportDto[] {
      const reports = data.report
         .filter(({ type: repType }) => repType === type)
         .map((rep) => plainToClass(ReportDto, rep));

      return reports;
   }

   getReportById(type: ReportType, id: string): ReportDto {
      const rep = data.report
         .filter(({ type: repType }) => repType === type)
         .find(({ id: repId }) => repId === id);

      if (!rep) throw Error("No report found!");

      return plainToClass(ReportDto, rep);
   }

   createReport(body: CreateReportDto, type: ReportType): ReportDto {
      const newReport = {
         id: uuid(),
         ...body,
         type,
         created_at: new Date(),
         updated_at: new Date()
      };

      data.report.push(newReport);
      return plainToClass(ReportDto, newReport);
   }

   findReportIndex(type: ReportType, id: string): number {
      const reportIndex = data.report
         .filter(({ type: repType }) => repType === type)
         .findIndex(({ id: repId }) => repId === id);

      if (reportIndex === -1) throw Error("No report found!");
      return reportIndex;
   }

   updateReportById(body: CreateReportDto, idx: number): ReportDto {
      data.report[idx] = {
         ...data.report[idx],
         ...body,
         updated_at: new Date()
      };

      return plainToClass(ReportDto, data.report[idx]);
   }

   deleteReportById(idx: number) {
      data.report.splice(idx, 1);
   }
}
