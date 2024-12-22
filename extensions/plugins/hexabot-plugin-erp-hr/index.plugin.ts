import { Injectable } from '@nestjs/common';
import { BlockService } from '@/chat/services/block.service';
import { SettingService } from '@/setting/services/setting.service';
import { Block } from '@/chat/schemas/block.schema';
import { Context } from '@/chat/schemas/types/context';
import {
  OutgoingMessageFormat,
  StdOutgoingEnvelope,
  StdOutgoingTextEnvelope,
} from '@/chat/schemas/types/message';
import { BaseBlockPlugin } from '@/plugins/base-block-plugin';
import { PluginService } from '@/plugins/plugins.service';
import { PluginBlockTemplate } from '@/plugins/types';
import SETTINGS from './settings';

@Injectable()
export class ErpHrPlugin extends BaseBlockPlugin<typeof SETTINGS> {
  template: PluginBlockTemplate = {
    patterns: ['attendance'],
    starts_conversation: true,
    name: 'ERP HR Plugin',
  };

  constructor(
    pluginService: PluginService,
    private readonly blockService: BlockService,
    private readonly settingService: SettingService,
  ) {
    super('erp-hr-plugin', pluginService);
  }

  getPath(): string {
    return __dirname;
  }

  async process(
    block: Block,
    context: Context,
    _convId: string,
  ): Promise<StdOutgoingEnvelope> {
    const settings = await this.settingService.getSettings();
    const args = this.getArguments(block);

    // Mock employee attendance data
    const mockAttendanceData = {
      totalEmployees: 100,
      present: 95,
      absent: 5,
      remoteEmployees: 10,
      lateArrivals: 3,
      earlyDepartures: 2,
      onLeave: 5,
    };

    const attendanceRate = (
      (mockAttendanceData.present / mockAttendanceData.totalEmployees) *
      100
    ).toFixed(2);

    const response: string =
      this.blockService.getRandom([...args["Attendance Summary Responses"]]) +
      attendanceRate +
      '%.' +
      ` Additional Details: Remote Employees - ${mockAttendanceData.remoteEmployees}, Late Arrivals - ${mockAttendanceData.lateArrivals}, Early Departures - ${mockAttendanceData.earlyDepartures}, On Leave - ${mockAttendanceData.onLeave}.`;

    const msg: StdOutgoingTextEnvelope = {
      format: OutgoingMessageFormat.text,
      message: {
        text: this.blockService.processText(
          response,
          context,
          {},
          settings,
        ),
      },
    };

    return msg;
  }
}
