import { Module } from "@nestjs/common";
import { ReportController } from "./report.controller";
import { ReportService } from "./report.service";
import { APP_PIPE } from "@nestjs/core";
import { ZodValidationPipe } from "nestjs-zod";

@Module({
   controllers: [ReportController],
   providers: [
      ReportService,
      {
         provide: APP_PIPE,
         useClass: ZodValidationPipe
      }
   ]
})
export class ReportModule {}
