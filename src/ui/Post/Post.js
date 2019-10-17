import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Typography } from '@material-ui/core';

import { Avatar } from 'ui/Avatar';
import { FormattedDate } from 'ui/FormattedDate';
import { CommentBox } from 'ui/CommentBox';
import { PostBody } from './PostBody';

export function Post({ post }) {
  return (
    <Flex flexDirection="column" py="10px" mb="100px">
      <Flex alignItems="center">
        <Avatar size={150} email={post.author} />
        <Box ml="60px">
          <Typography variant="h2">{post.title}</Typography>
          <Typography variant="subtitle1">
            <FormattedDate date={post.posted} />
          </Typography>
        </Box>
      </Flex>
      <PostBody body={post.body} />
      <Box mt="50px">
        <CommentBox postId={post.id} />
      </Box>
    </Flex>
  );
}
