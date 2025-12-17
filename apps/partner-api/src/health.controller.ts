import { Controller, Get } from '@nestjs/common';
import { apiPrefix } from '../../packages/shared-config';
import { HealthResponse } from '../../packages/shared-types';

@Controller()
export class HealthController {
  @Get('health')
  health(): HealthResponse {
    return {
      ok: true,
      service: 'partner-api',
      ts: new Date().toISOString()
    };
  }
}
