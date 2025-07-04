import { ConfigProvider, Modal, ModalProps } from 'antd';
import React from 'react';
import { CloseIcon } from 'src/components/icons';
import { colors } from 'src/constants/theme';

interface Props extends ModalProps {
  titleColor?: React.CSSProperties['color'];
  titleFontSize?: number;
}

function CustomModal({
  titleColor = colors.textPrimary,
  titleFontSize = 20,
  centered = true,
  footer = null,
  ...rest
}: Props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgMask: 'rgba(28, 43, 82, 0.6)',
        },
        components: {
          Modal: {
            titleColor,
            titleFontSize,
          },
        },
      }}
    >
      <Modal
        centered={centered}
        footer={footer}
        closeIcon={<CloseIcon color="#7C9FAF" />}
        {...rest}
      />
    </ConfigProvider>
  );
}

export default CustomModal;
