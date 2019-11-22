let db = {
  users: [
    {
      userId: 'asdasd',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2019-11-21T18:47:50.061Z',
      imageUrl: 'image/asdasdasdasd',
      bio: 'Hello my name is...',
      website: 'https://website.com',
      location: 'London, UK',
    },
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: '2019-11-21T18:47:50.061Z',
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'asdasfgafs',
      body: 'nice one mate',
      createdAt: '2019-11-21T18:47:50.061Z',
    },
  ],
};
