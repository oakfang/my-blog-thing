import React, { useMemo } from 'react';
import { Flex, Box } from 'reflexbox';
import { Typography } from '@material-ui/core';

import { Avatar } from 'ui/Avatar';

const dateFormatter = new Intl.DateTimeFormat();
function useFormattedDate(date) {
  return useMemo(() => dateFormatter.format(date), [date]);
}

export function Post({ post }) {
  const date = useFormattedDate(post.posted);
  return (
    <Flex flexDirection="column" py="10px">
      <Flex alignItems="center">
        <Avatar size={150} email={post.author} />
        <Box ml="60px">
          <Typography variant="h2">{post.title}</Typography>
          <Typography variant="subtitle1">{date}</Typography>
        </Box>
      </Flex>
      {post.body.split('\n').map((p, idx) => (
        <Box key={idx} my="10px">
          <Typography variant="body1">{p}</Typography>
        </Box>
      ))}
    </Flex>
  );
}
