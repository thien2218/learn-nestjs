import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller("report/:type")
class AppController {
   @Get()
   getAllReports() {
      return [];
   }

   @Get(":id")
   getReportById() {
      return {};
   }

   @Post()
   createReport() {
      return "Created";
   }

   @Put(":id")
   updateReportById() {
      return "Updated";
   }

   @Delete(":id")
   deleteReportById() {
      return "Deleted";
   }
}

export default AppController;
