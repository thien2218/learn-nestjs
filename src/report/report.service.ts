import { Injectable } from "@nestjs/common";
import { data } from "src/data";
import { v4 as uuid } from "uuid";
import { ReportDto } from "./report.dto";

export type ReportType = "expense" | "income";

@Injectable()
export class ReportService {
   getAllReports(type: ReportType) {
      return data.report.filter(({ type: repType }) => repType === type);
   }

   getReportById(type: ReportType, id: string) {
      return data.report
         .filter(({ type: repType }) => repType === type)
         .find(({ id: repId }) => repId === id);
   }

   createReport(body: ReportDto, type: ReportType) {
      const newReport = {
         id: uuid(),
         ...body,
         type,
         created_at: new Date(),
         updated_at: new Date()
      };
      data.report.push(newReport);
      return newReport;
   }

   findReportIndex(type: ReportType, id: string) {
      const reportIndex = data.report
         .filter(({ type: repType }) => repType === type)
         .findIndex(({ id: repId }) => repId === id);

      return reportIndex;
   }

   updateReportById(body: ReportDto, idx: number) {
      data.report[idx] = {
         ...data.report[idx],
         ...body,
         updated_at: new Date()
      };

      return data.report[idx];
   }

   deleteReportById(idx: number) {
      data.report.splice(idx, 1);
   }
}
