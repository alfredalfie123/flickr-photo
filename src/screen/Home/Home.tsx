import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchPhoto } from 'redux/action/photo.action';
import ListItems from './ListItems/ListItems';
import TopBar from './TopBar/TopBar';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      await searchPhoto(dispatch);
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <TopBar />
      <ListItems />
    </>
  );
};

export default Home;
