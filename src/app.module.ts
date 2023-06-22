import { Module, ValidationPipe } from "@nestjs/common";
import { ReportModule } from "./report/report.module";
import { SummaryModule } from "./summary/summary.module";
import AppController from "./app.controller";
import { APP_PIPE } from "@nestjs/core";

@Module({
   imports: [ReportModule, SummaryModule],
   controllers: [AppController],
   providers: [
      {
         provide: APP_PIPE,
         useClass: ValidationPipe
      }
   ]
})
export class AppModule {}
