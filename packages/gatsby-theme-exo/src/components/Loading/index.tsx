import React from 'react';

import Spinner from 'react-loader-spinner';
import { useTheme } from 'styled-components';
import { useTranslation } from "react-i18next";
import '../locales/i18n';

const Loader = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <div style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            minHeight: 256,
        }}>
            <Spinner
                type="Rings"
                color={theme.colors.primary.default}
                height={75}
                width={75}
            />
            <p style={{
                fontSize: theme.fontSize.small,
                fontWeight: theme.fontWeight.medium,
                color: theme.colors.text.l2,
            }}>{t('Loading')}</p>
        </div>
    );
};

export default Loader;