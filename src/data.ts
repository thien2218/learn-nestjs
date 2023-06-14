type ReportData = {
   report: {
      id: string;
      source: string;
      amount: number;
      created_at: Date;
      updated_at: Date;
      type: "expense" | "income";
   }[];
};

const data: ReportData = {
   report: []
};
