import {RootState} from '../../../../store/store';
import {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchActivities} from '../../../../store/activitySlice';
import {useAppDispatch} from '../../../../store/store';
import Activity from '../Activity/Activity';
import {MOCKDATA} from './mock';

export default function ListOfEvents() {
  let activities = useSelector(
    (state: RootState) => state.activities.activities,
  );
  activities = MOCKDATA;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={activities}
      renderItem={({item}) => (
        <Activity
          title={item.title}
          photoUrl={item.photoUrl}
          location={item.location}
          date={item.date}
        />
      )}
      windowSize={5}
    />
  );
}
