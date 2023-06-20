import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const ReportSchema = z.object({
   amount: z.number().nonnegative(),
   source: z.string().nonempty()
});

export class ReportDto extends createZodDto(ReportSchema) {}
