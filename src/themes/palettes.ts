interface IPalette {
  id: string,
  colors: string[][],
}

// backgroundPrimary,
// backgroundSecondary,
// primary,
// secondary,
// textPrimary,

export const palettes: { [key: string]: IPalette } = {
  1: {
    id: '1',
    colors: [
      [
        '#E9DFD5',
        '#ACA5A4',
        '#A26255',
        '#B8B58E',
        '#432841',
      ],
      [
        '#432841',
        '#ACA5A4',
        '#A26255',
        '#B8B58E',
        '#E9DFD5',
      ],
      [
        '#FFFFFF',
        '#FFFFFF',
        '#000000',
        '#000000',
        '#000000',
      ],
      [
        '#000000',
        '#000000',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
      ],
      [
        '#B8B58E',
        '#ACA5A4',
        '#A26255',
        '#E9DFD5',
        '#432841',
      ],
    ],
  },
};
