import { ReportType } from "./app.service";

type ReportData = {
   report: {
      id: string;
      source: string;
      amount: number;
      created_at: Date;
      updated_at: Date;
      type: ReportType;
   }[];
};

export const data: ReportData = {
   report: [
      {
         id: "report-1",
         source: "Salary",
         amount: 500,
         created_at: new Date(),
         updated_at: new Date(),
         type: "income"
      },
      {
         id: "report-2",
         source: "Sales",
         amount: 1000,
         created_at: new Date(),
         updated_at: new Date(),
         type: "income"
      },
      {
         id: "report-3",
         source: "Revenue",
         amount: 750,
         created_at: new Date(),
         updated_at: new Date(),
         type: "income"
      },
      {
         id: "report-4",
         source: "Expenses",
         amount: 300,
         created_at: new Date(),
         updated_at: new Date(),
         type: "expense"
      },
      {
         id: "report-5",
         source: "Investments",
         amount: 900,
         created_at: new Date(),
         updated_at: new Date(),
         type: "income"
      },
      {
         id: "report-6",
         source: "Refunds",
         amount: 200,
         created_at: new Date(),
         updated_at: new Date(),
         type: "income"
      },
      {
         id: "report-7",
         source: "Expenses",
         amount: 1200,
         created_at: new Date(),
         updated_at: new Date(),
         type: "expense"
      },
      {
         id: "report-8",
         source: "Sales",
         amount: 600,
         created_at: new Date(),
         updated_at: new Date(),
         type: "income"
      },
      {
         id: "report-9",
         source: "Revenue",
         amount: 400,
         created_at: new Date(),
         updated_at: new Date(),
         type: "income"
      },
      {
         id: "report-10",
         source: "Expenses",
         amount: 1500,
         created_at: new Date(),
         updated_at: new Date(),
         type: "expense"
      }
   ]
};
