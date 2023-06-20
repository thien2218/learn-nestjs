import { Module } from "@nestjs/common";
import { ReportModule } from "./report/report.module";
import { SummaryModule } from "./summary/summary.module";
import AppController from "./app.controller";

@Module({
   imports: [ReportModule, SummaryModule],
   controllers: [AppController],
   providers: []
})
export class AppModule {}
