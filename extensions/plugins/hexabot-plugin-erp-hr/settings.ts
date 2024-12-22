import { PluginSetting } from '@/plugins/types';
import { SettingType } from '@/setting/schemas/types';

export default [
  {
    label: 'Attendance Summary Responses',
    group: 'default',
    type: SettingType.multiple_text,
    value: [
      'Today, the attendance rate is: ',
      'Current attendance status: ',
    ],
  },
] as const satisfies PluginSetting[];