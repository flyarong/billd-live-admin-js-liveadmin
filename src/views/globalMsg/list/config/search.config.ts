import { IForm } from '@/components/Base/Form';
import { useOrder } from '@/hooks/use-order';
import { FormTypeEnum, ILoginRecord, ISearch } from '@/interface';

import { columnsConfig } from './columns.config';

export const searchFormConfig: IForm<ISearch<ILoginRecord>> = {
  gridSpan: 8,
  labelPlacement: 'left',
  formStyle: {
    justifyContent: 'center',
  },
  formItems: [
    {
      field: 'id',
      type: FormTypeEnum.input,
      label: 'id',
      placeholder: '请输入id',
    },
    {
      field: 'user_id',
      type: FormTypeEnum.number,
      label: '用户id',
      placeholder: '请输入用户id',
    },
    {
      field: 'type',
      type: FormTypeEnum.number,
      label: '类型',
      placeholder: '请输入类型',
    },
    {
      field: 'keyWord',
      type: FormTypeEnum.input,
      label: '关键字',
      placeholder: 'ip/user_agent',
    },
    {
      field: 'rangTimeType',
      type: FormTypeEnum.datePickerRange,
      label: '时间范围',
      placeholder: '请选择时间范围',
    },
    ...useOrder(columnsConfig()),
  ],
};
