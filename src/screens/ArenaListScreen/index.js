import React from "react";

import ArenaList from '../../components/ArenaList';

import { useQuery } from '@apollo/client';

import ArenasQuery from '../../queries/Arenas';

const ArenaListScreen = ({ route, location, navigation }) => {
  const { location: { latitude, longitude }} = route.params;

  const { loading, error, data } = useQuery(ArenasQuery, { variables: { latitude, longitude }});

  if (loading || error) return null;

  return <ArenaList arenas={data.arenas} navigation={navigation} />;
};

export default ArenaListScreen;
