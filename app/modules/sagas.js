import teamsSaga from './teams/teams.sagas';
import teamImagesSaga from './teamImages/teamImages.sagas';
import weatherSaga from './weather/weather.sagas';

export default function* rootSaga() {
  yield [
    teamsSaga(),
    teamImagesSaga(),
    weatherSaga(),
  ];
}
