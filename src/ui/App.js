import React from 'react';
import { Container, Typography, AppBar, Toolbar } from '@material-ui/core';

import { usePosts } from 'api';
import { Tombstone } from 'ui/Tombstone';
import { PostList } from 'ui/PostList';

export function App() {
  const posts = usePosts();
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            My Blog Thing
          </Typography>
        </Toolbar>
      </AppBar>
      <Container fixed>
        {posts ? <PostList posts={posts} /> : <Tombstone />}
      </Container>
    </div>
  );
}
