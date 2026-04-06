import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import {
  Box,
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Language, ThemePreference, useSettings } from 'src/context/SettingsContext';

interface SettingsPopupProps {
  open: boolean;
  onClose: () => void;
}

interface SettingSectionProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const SettingSection: React.FC<SettingSectionProps> = ({ icon, label, children }) => (
  <Box>
    <Stack direction="row" alignItems="center" spacing={0.75} mb={1.5}>
      <Box sx={{ color: 'text.secondary', display: 'flex' }}>{icon}</Box>
      <Typography
        variant="caption"
        color="text.secondary"
        fontWeight={700}
        sx={{ textTransform: 'uppercase', letterSpacing: 0.8 }}
      >
        {label}
      </Typography>
    </Stack>
    {children}
  </Box>
);

const SettingsPopup: React.FC<SettingsPopupProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const {
    themePreference,
    setThemePreference,
    resolvedTheme,
    language,
    setLanguage,
    resetSettings,
  } = useSettings();
  const dialogTheme = createTheme({ palette: { mode: resolvedTheme } });

  return (
    <ThemeProvider theme={dialogTheme}>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: 1 }}
        >
          <Typography variant="h6" fontWeight={600}>
            {t('settings.title')}
          </Typography>
          <IconButton onClick={onClose} size="small" aria-label="close settings">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ px: 3, py: 2.5 }}>
          <Stack divider={<Divider />} spacing={2.5}>
            <SettingSection
              icon={<Brightness7Icon fontSize="small" />}
              label={t('settings.theme.label')}
            >
              <ToggleButtonGroup
                value={themePreference}
                exclusive
                onChange={(_, value) => value && setThemePreference(value as ThemePreference)}
                size="small"
                fullWidth
              >
                <ToggleButton value="light">
                  <Brightness7Icon fontSize="small" sx={{ mr: 0.75 }} />
                  {t('settings.theme.light')}
                </ToggleButton>
                <ToggleButton value="dark">
                  <Brightness4Icon fontSize="small" sx={{ mr: 0.75 }} />
                  {t('settings.theme.dark')}
                </ToggleButton>
                <ToggleButton value="auto">
                  <BrightnessAutoIcon fontSize="small" sx={{ mr: 0.75 }} />
                  {t('settings.theme.auto')}
                </ToggleButton>
              </ToggleButtonGroup>
            </SettingSection>

            <SettingSection
              icon={<LanguageIcon fontSize="small" />}
              label={t('settings.language.label')}
            >
              <FormControl>
                <RadioGroup
                  value={language}
                  onChange={(_, value) => setLanguage(value as Language)}
                >
                  <FormControlLabel
                    value="en"
                    control={<Radio size="small" />}
                    label={t('settings.language.english')}
                  />
                  <FormControlLabel
                    value="pig-latin"
                    control={<Radio size="small" />}
                    label={t('settings.language.pigLatin')}
                  />
                </RadioGroup>
              </FormControl>
            </SettingSection>
          </Stack>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ px: 3, py: 1.5 }}>
          <Button size="small" color="error" variant="contained" onClick={resetSettings}>
            {t('settings.resetDefaults')}
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default SettingsPopup;
