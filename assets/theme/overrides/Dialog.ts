export default function Dialog(theme: any) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: theme.shape.borderRadiusMd,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
  };
}
