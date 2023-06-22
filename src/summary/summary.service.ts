import { Injectable } from "@nestjs/common";
import { ReportService } from "src/report/report.service";

@Injectable()
export class SummaryService {
   constructor(private readonly reportService: ReportService) {}

   getSummary() {
      const totalExpense = this.reportService
         .getAllReports("expense")
         .reduce((acc, curr) => {
            return acc + curr.amount;
         }, 0);

      const totalIncome = this.reportService
         .getAllReports("income")
         .reduce((acc, curr) => {
            return acc + curr.amount;
         }, 0);

      return {
         totalIncome,
         totalExpense,
         networth: totalIncome - totalExpense
      };
   }
}
