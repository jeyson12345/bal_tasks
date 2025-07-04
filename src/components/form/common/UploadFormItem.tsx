import { Col, Form, Upload } from 'antd';
import { FormItemProps, UploadProps } from 'antd/lib';
import { DocumentUpload } from 'iconsax-react';
import { CustomButton } from 'src/components/common';
import { colors } from 'src/constants/theme';

type Props = UploadProps &
  FormItemProps & {
    col?: number;
    message?: string;
    label?: string;
  };

export default function UploadFormItem({
  col,
  label,
  message,
  ...rest
}: Props) {
  return (
    <Col span={col}>
      <Form.Item
        name={rest.name}
        label={label}
        rules={[{ required: !!message, message }]}
      >
        <Upload {...rest} beforeUpload={() => false}>
          <CustomButton
            type="primary"
            icon={<DocumentUpload size="24" color={colors.white} />}
          >
            Click to Upload
          </CustomButton>
        </Upload>
      </Form.Item>
    </Col>
  );
}
