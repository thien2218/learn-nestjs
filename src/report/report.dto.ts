import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { ReportType } from "./report.service";
import { Exclude, Expose } from "class-transformer";

export class ReportDto {
   @IsString()
   @IsNotEmpty()
   id: string;

   @IsString()
   @IsNotEmpty()
   source: string;

   @IsNumber()
   @IsPositive()
   amount: number;

   @Expose({ name: "created_at" })
   createdAt: Date;

   @Exclude()
   updated_at: Date;

   @IsString()
   @IsNotEmpty()
   type: ReportType;
}

export class CreateReportDto {
   @IsString()
   @IsNotEmpty()
   source: string;

   @IsNumber()
   @IsPositive()
   amount: number;
}

export class UpdateReportDto {
   @IsString()
   @IsNotEmpty()
   source?: string;

   @IsNumber()
   @IsPositive()
   amount?: number;
}
