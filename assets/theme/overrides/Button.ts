// ----------------------------------------------------------------------

declare module '@mui/material/styles' {
  interface ButtonVariants {
    light: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface ButtonVariantsOptions {
    light?: React.CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    light: true;
  }
}

export default function Button(theme: any) {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: 'light' },
          style: {
            backgroundColor: theme.palette.background.neutral,
            color: theme.palette.neutral.contrastText,
            boxShadow: theme.customShadows.z8,
            '&:hover': {
              backgroundColor: theme.palette.grey[300],
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          color: theme.palette.grey[0],
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
