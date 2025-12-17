import { Controller, Get } from '@nestjs/common';

@Controller('api/partner')
export class HealthController {
  @Get('health')
  health() {
    return {
      ok: true,
      service: 'partner-api',
      ts: new Date().toISOString(),
    };
  }
}
