import React, { useMemo } from 'react';
import { Box } from 'reflexbox';
import { Typography } from '@material-ui/core';

export function PostBody({ body }) {
  const paragraphs = useMemo(() => body.split('\n'), [body]);
  return paragraphs.map((p, idx) => (
    <Box key={idx} my="10px">
      <Typography variant="body1">{p}</Typography>
    </Box>
  ));
}
