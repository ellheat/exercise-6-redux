import teamsSaga from './teams/teams.sagas';
import teamImagesSaga from './teamImages/teamImages.sagas';

export default function* rootSaga() {
  yield [
    teamsSaga(),
    teamImagesSaga(),
  ];
}
