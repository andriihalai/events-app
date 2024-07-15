import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_BASE} from '@env';

interface Activity {
  id: number;
  title: string;
  description: string;
  location: string;
  photoUrl: string;
  date: Date | string;
}

interface IActivitiesInitialState {
  activities: Activity[];
}

const activitiesInitialState: IActivitiesInitialState = {
  activities: [],
};

const posts = createSlice({
  name: 'activities',
  initialState: activitiesInitialState,
  reducers: {
    fetchPosts(state, action) {
      state.activities = action.payload;
    },
    addPost(state, action) {
      state.activities.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchActivities.fulfilled, (state, action) => {
      state.activities = action.payload;
    });
  },
});

const fetchActivities = createAsyncThunk(
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
export {fetchActivities};
