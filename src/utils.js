const NON_WHITE_SPACE_CHAR = /S/;

export const hasNonWhitespace = text => NON_WHITE_SPACE_CHAR.test(text);
