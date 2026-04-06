import CloseIcon from '@mui/icons-material/Close';
import {
  createTheme,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  ThemeProvider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ThemePreference, useSettings } from 'src/context/SettingsContext';

interface SettingsPopupProps {
  open: boolean;
  onClose: () => void;
}

const SettingsPopup: React.FC<SettingsPopupProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const { themePreference, setThemePreference, resolvedTheme } = useSettings();
  const dialogTheme = createTheme({ palette: { mode: resolvedTheme } });

  return (
    <ThemeProvider theme={dialogTheme}>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: 1 }}
        >
          {t('settings.title')}
          <IconButton onClick={onClose} size="small" aria-label="close settings">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <FormControl>
            <FormLabel>{t('settings.theme.label')}</FormLabel>
            <RadioGroup
              value={themePreference}
              onChange={(_, value) => setThemePreference(value as ThemePreference)}
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label={t('settings.theme.light')}
              />
              <FormControlLabel value="dark" control={<Radio />} label={t('settings.theme.dark')} />
              <FormControlLabel value="auto" control={<Radio />} label={t('settings.theme.auto')} />
            </RadioGroup>
          </FormControl>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default SettingsPopup;
