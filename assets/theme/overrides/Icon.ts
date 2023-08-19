export default function Icon() {
  return {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: 'content-box',
          width: '100%',
        },
      },
    },
  };
}
