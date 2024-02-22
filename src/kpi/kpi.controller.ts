import { Controller, Get } from '@nestjs/common';
import { KpiService } from './kpi.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kpi')
@Controller('kpi')
export class KpiController {
  constructor(private readonly kpiService: KpiService) {}

  @Get()
  async getKpi() {
    const totalOrders = await this.kpiService.getTotalOrders();
    const totalUsers = await this.kpiService.getTotalUsers();
    const totalMonthlyIncome = await this.kpiService.getTotalMonthlyIncome();

    const MonthlyIncomeFiltered = totalMonthlyIncome.reduce(
      (accumulator, currentItem) => {
        const item = currentItem.quantity * currentItem.ice_cream.price;
        return accumulator + item;
      },
      0,
    );

    return {
      total_orders: totalOrders,
      total_users: totalUsers,
      total_monthly_income: MonthlyIncomeFiltered,
    };
  }
}
