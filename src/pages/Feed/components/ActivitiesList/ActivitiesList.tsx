import {FlatList} from 'react-native';
import Activity from '../Activity/Activity';
import {useGetActivitiesQuery} from '../../../../api/activitiesApi/activitiesApi';

export default function ListOfEvents() {
  const {data: activities} = useGetActivitiesQuery();

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
      //TODO: add pagination
      windowSize={5}
    />
  );
}
