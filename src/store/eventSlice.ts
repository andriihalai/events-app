import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_BASE} from '@env';

interface Post {
  id: number;
  title: string;
  description: string;
  location: string;
  photoUrl: string;
  date: Date | string;
}

interface IPostsInitialState {
  posts: Post[];
}

const postsInitialState: IPostsInitialState = {
  posts: [],
};

const posts = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    fetchPosts(state, action) {
      state.posts = action.payload;
    },
    addPost(state, action) {
      state.posts.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, {rejectWithValue}) => {
    try {
      const api = API_BASE;

      const response = await fetch(`${api}/events`);
      if (!response.ok) {
        throw new Error('Could not fetch posts');
      }

      const data = await response.json();
      return data;
    } catch (e: any) {
      rejectWithValue(e.message);
    }
  },
);

const postsReducer = posts.reducer;
export default postsReducer;
export {fetchPosts};
